import { mkdtemp, readFile, writeFile, mkdir, stat, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterEach, expect, it } from 'vitest';
import { writeVerdictStage, streamedVerdictBuild } from './streamed-verdict-build.mjs';
const directories=[];
afterEach(async()=>{for(const dir of directories.splice(0)) await rm(dir,{recursive:true,force:true});});
const setup=async()=>{const dir=await mkdtemp(join(tmpdir(),'compatair-verdict-build-'));directories.push(dir);return dir;};
it('publishes the exact UTF-8 export only after all chunks have been written',async()=>{
 const dir=await setup(),stage=join(dir,'stage.json'),output=join(dir,'dist');
 await mkdir(join(output,'data'),{recursive:true});
 const hooks=streamedVerdictBuild(stage).hooks;
 await writeFile(stage,'stale');await hooks['astro:build:start']();
 await expect(stat(stage)).rejects.toThrow();
 await writeFile(join(output,'data/verdicts.json'),'{}');
 const chunks=['{"label":"débit",','"pairs":[','{"id":"a--b"}',']}'];
 await writeVerdictStage(stage,chunks);
 await hooks['astro:build:done']({dir:pathToFileURL(output+'/')});
 expect(await readFile(join(output,'data/verdicts.json'),'utf8')).toBe(chunks.join(''));
 await expect(stat(stage)).rejects.toThrow();
});
it('fails closed when generation fails or the export is missing or empty',async()=>{
 const dir=await setup(),stage=join(dir,'stage.json');
 function* failure(){yield '{"pairs":[';throw new Error('source failure');}
 await expect(writeVerdictStage(stage,failure())).rejects.toThrow('source failure');
 await expect(stat(stage+'.partial')).rejects.toThrow();
 const finish=streamedVerdictBuild(stage).hooks['astro:build:done'];
 await expect(finish({dir:pathToFileURL(dir+'/')})).rejects.toThrow();
 await writeFile(stage,'');await expect(finish({dir:pathToFileURL(dir+'/')})).rejects.toThrow('Empty');
});
