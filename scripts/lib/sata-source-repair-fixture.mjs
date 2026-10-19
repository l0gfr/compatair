import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const raw=readFileSync(new URL('../../docs/editorial/source-repairs-2026-10-13.json',import.meta.url));
if(createHash('sha256').update(raw).digest('hex')!=='e376c9e912d392fe22b02a20a923a56a39f66ab9082e8ce5483c905d835bb2fc') throw new Error('Unreviewed source relocation ledger');
const repairs=JSON.parse(raw).repairs.filter(row=>row.name.startsWith('sata'));
// The active modules already contain these reviewed October13 source URLs.
// Reconstruct that exact metadata before applying the October19 before/after guard.
export function reviewedSataSource(product){
 if(product.brand!=='SATA')return product;
 const expected=structuredClone(product);
 for(const evidence of expected.evidence){
  const [url,fragment]=evidence.sourceUrl.split('#');
  const repair=repairs.find(row=>row.previousUrl===url);
  if(!repair)continue;
  if(!repair.affectedProducts.includes(product.id)||repair.httpStatus!==200||!evidence.notes.includes(repair.sha256))throw new Error('Missing exact SATA source relocation review');
  evidence.sourceUrl=repair.url+(fragment?'#'+fragment:'');evidence.retrievedAt='2026-10-13';
 }
 return expected;
}
