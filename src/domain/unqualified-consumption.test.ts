import {describe,it,expect} from 'vitest';
import {compressors,tools,CATALOG_VERIFIED_AT} from '../data/catalog';
import {evaluateCompatibility} from './compatibility';
import {createRuntimeCatalog,runtimeCatalogSchema} from './runtime-catalog';
import {createProofGraph} from './proof-graph';
import {toolProfileSchema} from './catalog';
import {createMcpCore} from '../../server/mcp-core.mjs';
const base=tools.find(x=>x.id==='einhell-tc-pw-340')!;
const tool=toolProfileSchema.parse({...base,id:'unqualified-fixture',slug:'unqualified-fixture',airflowBasis:'unqualified'});
const compressor=compressors.find(x=>x.id==='atlas-copco-lz-20-10-bm')!;
describe('unknown consumption regime across decision boundaries',()=>{
 it('keeps the public record readable and never produces a positive fixed verdict',()=>{
  const r=evaluateCompatibility(compressor,tool);expect(r.verdict).toBe('insufficient_data');expect(r.requiredFadLpm).toBeUndefined();expect(r.warnings[0]).toContain('Régime de consommation non documenté');
  const runtime=createRuntimeCatalog([compressor],[tool],CATALOG_VERIFIED_AT,'a'.repeat(64));expect(runtimeCatalogSchema.parse(runtime).tools[0]).toMatchObject({airflowBasis:'unqualified'});
  expect(()=>toolProfileSchema.parse({...tool,airflowBasis:'continuous'})).toThrow();
 });
 it('does not treat an idle-only consumption as a documented loaded maximum',()=>{
  const idle=toolProfileSchema.parse({...tool,airflowBasis:'free-speed'});
  expect(evaluateCompatibility(compressor,idle)).toMatchObject({verdict:'insufficient_data'});
  expect(evaluateCompatibility(compressor,idle).warnings[0]).toContain('Débit à vide seul');
  const runtime=createRuntimeCatalog([compressor],[idle],CATALOG_VERIFIED_AT,'a'.repeat(64));expect(runtimeCatalogSchema.parse(runtime).tools[0]).toMatchObject({airflowBasis:'free-speed'});
  const graph=createProofGraph(compressor,idle,{catalogVersion:'test',verdictVersion:'test',calculationVersion:'1.4.3',verifiedAt:CATALOG_VERIFIED_AT});expect(graph.simulationDefaults.toolAirflowLpm).toBeUndefined();
 });
 it('does not preload an unknown requirement into the proof simulation or a complete MCP system',()=>{
  const graph=createProofGraph(compressor,tool,{catalogVersion:'test',verdictVersion:'test',calculationVersion:'1.4.3',verifiedAt:CATALOG_VERIFIED_AT});expect(graph.simulationDefaults.toolAirflowLpm).toBeUndefined();expect(graph.nodes.some(x=>x.value.includes('régime non documenté'))).toBe(true);
  const core=createMcpCore({schemaVersion:'1.0.0',catalogVersion:'test',verifiedAt:CATALOG_VERIFIED_AT,compressors:[compressor],tools:[tool]},undefined,{profile:'core'});
  const response:any=core.handle({jsonrpc:'2.0',id:1,method:'tools/call',params:{name:'build_complete_air_system',arguments:{compressorId:compressor.id,toolIds:[tool.id]}}});
  expect(response.result.structuredContent.air_supply_verdict.verdict).toBe('insufficient_data');expect(response.result.structuredContent.airgraph.nodes.some((x:any)=>x.type==='flow_requirement')).toBe(false);
 });
});
