import { describe, expect, it } from 'vitest';
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, existsSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { indexationDay } from './lib/indexation-policy.mjs';
const actualPrevious='2057292e3aa6c4ec551e6f61ad1c09b742ddc8c5';
const candidateSha='b'.repeat(40);
const root=fileURLToPath(new URL('../',import.meta.url));
const workflow=parse(readFileSync(new URL('../.github/workflows/deploy-production.yml',import.meta.url),'utf8'));
const policy=JSON.parse(readFileSync(new URL('../config/indexation-policy.json',import.meta.url),'utf8'));
function checkpoint({changedLive=false,alreadyPublished=false,unreviewedAdmission=false}={}) {
 const fixture=mkdtempSync(join(tmpdir(),'compatair-observed-checkpoint-'));
 const now=new Date().toISOString();
 const baseline={schemaVersion:1,sourceSha:'a'.repeat(40),paths:['/']};
 const previous={schemaVersion:1,baselineSha:baseline.sourceSha,gitSha:changedLive?'c'.repeat(40):actualPrevious,builtAt:now,batches:[]};
 const manifest={...previous,gitSha:alreadyPublished?actualPrevious:candidateSha};
 if(unreviewedAdmission)manifest.batches=[{openedAt:now,publicationDay:indexationDay(new Date(now)),dailyLimits:policy.dailyLimits,paths:['/guides/unreviewed/']}];
 try {
  for(const rel of ['config','.astro/seo','dist/data'])mkdirSync(join(fixture,rel),{recursive:true});
  writeFileSync(join(fixture,'config/indexation-baseline.json'),JSON.stringify(baseline));
  writeFileSync(join(fixture,'config/indexation-policy.json'),JSON.stringify(policy));
  writeFileSync(join(fixture,'config/indexation-editorial-reviews.json'),JSON.stringify({schemaVersion:1,timeZone:'Europe/Paris',reviews:[]}));
  writeFileSync(join(fixture,'.astro/seo/indexation-build.json'),JSON.stringify({allowRelease:true,previousSha:actualPrevious,manifest}));
  writeFileSync(join(fixture,'dist/data/indexation.json'),JSON.stringify(manifest));
  writeFileSync(join(fixture,'previous.json'),JSON.stringify(previous));
  const mock=join(fixture,'mock-fetch.mjs');
  writeFileSync(mock,`import fs from 'node:fs';\nconst previous=JSON.parse(fs.readFileSync(${JSON.stringify(join(fixture,'previous.json'))}));\nglobalThis.fetch=async url=>{const value=String(url);if(value==='https://compatair.fr/data/release.json')return new Response(JSON.stringify({gitSha:previous.gitSha}));if(value==='https://compatair.fr/data/indexation.json')return new Response(JSON.stringify(previous));throw new Error('Unexpected network request blocked: '+value);};\n`);
  const output=join(fixture,'github-output');
  const result=spawnSync(process.execPath,['--import',mock,join(root,'scripts/verify-indexation-release.mjs')],{cwd:fixture,env:{...process.env,GITHUB_OUTPUT:output},encoding:'utf8',timeout:5000});
  return {...result,output:existsSync(output)?readFileSync(output,'utf8'):''};
 } finally { rmSync(fixture,{recursive:true,force:true}); }
}
describe('observed previous release flows to storage only after verification',()=>{
 it('passes the exact verified pre-activation SHA through defined job outputs',()=>{
  const job=workflow.jobs.validate;
  expect(job.outputs.previous_release_sha).toBe('${{ steps.seo_checkpoint.outputs.previous_release_sha }}');
  const step=job.steps.find(step=>step.id==='seo_checkpoint');
  expect(step.run).toBe('node scripts/verify-indexation-release.mjs');
  expect(job.steps.indexOf(step)).toBeLessThan(job.steps.findIndex(step=>step.name==='Transfer and activate release'));
  expect(workflow.jobs.storage.needs).toBe('validate');
  const prune=workflow.jobs.storage.steps.find(step=>step.name==='Keep production, rollback and compact evidence');
  expect(prune.env.COMPATAIR_PREVIOUS_RELEASE_SHA).toBe('${{ needs.validate.outputs.previous_release_sha }}');
  const code=readFileSync(new URL('./prune-actions-storage.mjs',import.meta.url),'utf8');
  expect(code.indexOf("const previousObservedSha")).toBeLessThan(code.indexOf("const response = await fetch("));
 });
 it('executes the real checkpoint with mocked HTTPS and exports A205 precisely',()=>{
  const result=checkpoint();expect(result.status,result.stderr).toBe(0);
  expect(result.output).toBe(`previous_release_sha=${actualPrevious}\n`);
 });
 it.each([{changedLive:true},{alreadyPublished:true}])('does not export an unverified or already published base %s',options=>{
  const result=checkpoint(options);expect(result.status).not.toBe(0);expect(result.output).toBe('');
 });
 it('blocks an otherwise valid new admission without editorial approval before exporting storage protection',()=>{
  const result=checkpoint({unreviewedAdmission:true});
  expect(result.status).not.toBe(0);
  expect(result.stderr).toContain('Nouvelles admissions sans revue éditoriale exacte et actuelle');
  expect(result.output).toBe('');
 });
});
