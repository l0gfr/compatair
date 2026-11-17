import { describe, expect, it } from 'vitest';
import { mkdtemp, mkdir, readFile, readdir, lstat, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { gzipSync } from 'node:zlib';
import ts from 'typescript';
import { browserTrackingErrors } from './browser-tracking-policy.mjs';
import { parseJavaScriptModuleSpecifiers } from './javascript-module-graph.mjs';

// Execute the actual auditor's traversal and HTML preamble, without constructing
// the whole site. This catches integration/scope errors the policy unit tests cannot.
const source = await readFile(new URL('../audit-dist.mjs', import.meta.url), 'utf8');
const ast = ts.createSourceFile('audit-dist.mjs', source, ts.ScriptTarget.ESNext, true, ts.ScriptKind.JS);
const functionText = name => ast.statements.find(s => ts.isFunctionDeclaration(s) && s.name?.text === name)?.getText(ast);
const htmlLoop = ast.statements.find(s => ts.isForOfStatement(s) && s.expression.getText(ast) === 'htmlFiles');
const htmlCheck = htmlLoop.statement.statements.findIndex(s => s.getText(ast).includes("browserTrackingErrors(html, 'html', label)"));
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

async function runAuditBoundary(root, scripts = []) {
 if (htmlCheck < 2) throw new Error('Tracking check must follow the HTML read and label in the actual auditor loop');
 const body = `'use strict'; const errors=[],artifactPaths=new Set(),htmlFiles=[];let totalArtifactBytes=0,htmlArtifactBytes=0;const siteOrigin='https://compatair.fr',scriptModuleCache=new Map();
 ${functionText('walk')}
 ${functionText('scriptClosure')}
 await walk(root);
 for (const file of htmlFiles) { ${htmlLoop.statement.statements.slice(0, htmlCheck + 1).map(s => s.getText(ast)).join('\n')} }
 for (const script of scripts) await scriptClosure([script],true);
 return {errors,artifactPaths:[...artifactPaths],htmlFiles:htmlFiles.map(f=>relative(root,f))};`;
 return new AsyncFunction('root','readdir','lstat','readFile','join','relative','browserTrackingErrors','gzipSync','parseJavaScriptModuleSpecifiers','scripts',body)(root,readdir,lstat,readFile,join,relative,browserTrackingErrors,gzipSync,parseJavaScriptModuleSpecifiers,scripts);
}

describe('anti-tracking checks wired into the generated artifact auditor', () => {
 it('walks directories and other files before reading each actual HTML page', async () => {
  const root=await mkdtemp(join(tmpdir(),'tracking-audit-'));
  try {
   await mkdir(join(root,'nested'));
   await writeFile(join(root,'index.html'),'<h1>Retrait de Google Analytics</h1>');
   await writeFile(join(root,'nested/index.html'),'<aside data-analytics-consent></aside>');
   await writeFile(join(root,'nested/blob.bin'),Buffer.from([0,255,42]));
   await symlink(join(root,'index.html'),join(root,'unsafe-link'));
   const result=await runAuditBoundary(root);
   expect(result.htmlFiles.sort()).toEqual(['index.html','nested/index.html']);
   expect(result.artifactPaths).toContain('/nested/blob.bin');
   expect(result.errors).toEqual(expect.arrayContaining(['nested/index.html: ancien consentement Analytics présent','unsafe-link: lien symbolique interdit dans l’artifact']));
   expect(result.errors).toHaveLength(2);
  } finally {await rm(root,{recursive:true,force:true});}
 });
 it('inspects imported collection modules even through the cached script closure', async () => {
  const root=await mkdtemp(join(tmpdir(),'tracking-graph-'));
  try {
   await mkdir(join(root,'assets'));
   await writeFile(join(root,'index.html'),'<h1>Sans suivi</h1>');
   await writeFile(join(root,'assets/entry.js'),'import("./tracking.js");');
   await writeFile(join(root,'assets/tracking.js'),'navigator.sendBeacon("/events", "{}");');
   const result=await runAuditBoundary(root,['/assets/entry.js','/assets/entry.js']);
   expect(result.errors).toEqual(['/assets/tracking.js: collecte de suivi présente dans le JavaScript navigateur']);
  } finally {await rm(root,{recursive:true,force:true});}
 });
});
