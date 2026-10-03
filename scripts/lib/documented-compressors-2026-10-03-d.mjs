import { createHash } from 'node:crypto';
const sha = value => createHash('sha256').update(value).digest('hex');
const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const identity = value => slug(value).replaceAll('-','');
const norm = value => value.replace(/\s+/g, ' ').trim();
const fmt = value => value.toLocaleString('fr-FR', {maximumFractionDigits:3});
const parse = value => {if(typeof value!=='string'||!/^\d+(?:[.,]\d+)?$/.test(value)) throw new Error('Cellule décimale requise');return Number(value.replace(',','.'));};
const first = value => {const m=norm(value).match(/^\d+(?:\.\d+)?/);if(!m)throw new Error('Cellule numérique absente');return Number(m[0]);};
const ekom = {
 'ekom-manual-01:16':['DK50-10Z','DK50-10S','DK50-10Z/M','DK50-10S/M'],
 'ekom-manual-04:16':['DK50 PLUS','DK50 PLUS S','DK50 PLUS/M','DK50 PLUS S/M'],
 'ekom-manual-04:18':['DK50 2V','DK50 2V S','DK50 2V/M','DK50 2V S/M'],
 'ekom-manual-08:18':['DK50 2V/50','DK50 2V/50S','DK50 2V/50/M','DK50 2V/50S/M'],
 'ekom-manual-08:21':['DK50 2x2V/110','DK50 2x2V/110S','DK50 2x2V/110/M','DK50 2x2V/110S/M'],
 'ekom-manual-11:19':['DK50 4VR/50','DK50 4VR/50S','DK50 4VR/50/M','DK50 4VR/50S/M'],
 'ekom-manual-11:21':['DK50 2x4VR/110','DK50 2x4VR/110S','DK50 2x4VR/110/M','DK50 2x4VR/110S/M'],
 'ekom-manual-14:15':['DK50 3x4VR/M'],
 'ekom-manual-16:16':['DK50 4x4VRT/M','DK50 4x4VRTS/M','DK50 6x4VRT/M','DK50 6x4VRTS/M'],
 'ekom-manual-18:14':['DK50 9x4VRT/M','DK50 9x4VRTS/M'],
 'ekom-manual-10:16':['DK50 2V/M MOBILE MINI'],
 'ekom-manual-19:12':['DK50 B','DK50 BS'],
};
export function buildDocumentedCompressorsOctober3D(snapshot, {allowPartial=false}={}) {
 if(snapshot.schemaVersion!==1||snapshot.batchId!=='documented-compressors-2026-10-03-d'||!Array.isArray(snapshot.compressors)||(!allowPartial&&snapshot.compressors.length!==200)||!snapshot.compressors.length||snapshot.compressors.length>200) throw new Error('Lot documentaire non reconnu');
 const sources=new Map(snapshot.sources.map(source=>[source.id,source]));if(sources.size!==snapshot.sources.length)throw new Error('Source dupliquée');
 const proofIds=new Set();
 for(const source of sources.values()) {
  const pid=slug(source.id);if(!pid||proofIds.has(pid))throw new Error('Identifiant de preuve dupliqué');proofIds.add(pid);
  for(const address of [source.url,source.resolvedUrl]){const u=new URL(address);if(u.protocol!=='https:'||u.username||u.password||!['bambi-air.co.uk','www.ekom.sk','ekom.sk','www.mattei.it','www.alup.com','www.mark-compressors.com','4609801.fs1.hubspotusercontent-na1.net','azure-na-assets.contentstack.com','shop.alup.com','cdn2.hubspot.net','airpol.com.pl'].includes(u.hostname))throw new Error('Source primaire non autorisée');}
  if(source.status!==200||source.captureMethod!=='original-response'||!/^2026-10-03T/.test(source.observedAt)||!/^[a-f0-9]{64}$/.test(source.sha256)||!Number.isInteger(source.bytes)||source.bytes<=0)throw new Error('Provenance invalide');
  if(source.extractedPages&&sha(JSON.stringify(source.extractedPages))!==source.extractedPagesSha256||source.extractedText&&sha(source.extractedText)!==source.extractedTextSha256)throw new Error('Extrait documentaire altéré');
  for(const key of ['htmlTables','htmlSpecifications'])if(source[key]&&sha(JSON.stringify(source[key]))!==source[`${key}Sha256`])throw new Error('Cellules HTML altérées');
 }
 const page=(sid,p)=>{const pg=sources.get(sid)?.extractedPages?.find(x=>x.page===p);if(!pg||!Number.isInteger(p)||p<1)throw new Error('Page primaire absente');return pg;};
 const cell=ref=>{const s=page(ref?.sourceId,ref?.page).tables[ref.tableIndex]?.[ref.rowIndex]?.[ref.columnIndex];if(typeof s!=='string')throw new Error('Cellule primaire absente');return norm(s);};
 const label=ref=>norm(page(ref.sourceId,ref.page).tables[ref.tableIndex][ref.rowIndex][0]??'');
 const seen=new Set();
 return snapshot.compressors.map(row=>{
  if(row.weightKg!==undefined||row.voltage!==undefined||!['oil','oil-free','unknown'].includes(row.oilType))throw new Error('Champ non documenté');
  const source=sources.get(row.sourceId);if(!source)throw new Error('Source absente');
  const fields={},evidence=[];
  const add=(sid,p)=>{const s=sources.get(sid);if(!s||p&&!s.extractedPages?.some(x=>x.page===p))throw new Error('Localisation absente');const id=`october3d-${slug(sid)}${p?`-p${p}`:''}`;if(!evidence.some(e=>e.id===id))evidence.push({id,sourceUrl:s.url+(p?`#page=${p}`:''),sourceLabel:s.sourceLabel+(p?`, page PDF ${p}`:''),sourceType:s.contentType.includes('pdf')?'manual':'manufacturer',sourceRole:'primary',retrievedAt:s.observedAt.slice(0,10),confidence:'B',notes:`SHA-256 ${s.sha256} de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir.`});return id;};
  let maximum,tank,points,duty,power,electrical,equipment;
  const limitations=[...row.limitations];
  if(row.dataset==='bambi-product-html'){
   if(row.brand!=='Bambi'||row.mpn!==row.model||!source.url.endsWith(`/product/${slug(row.model)}/`)||row.dutyWindowKnown!==false)throw new Error('Identité Bambi altérée');
   const specs=source.htmlSpecifications;
   if(JSON.stringify(specs)!==JSON.stringify(row.specifications))throw new Error('Spécifications HTML altérées');
   maximum=parse(specs['Max pressure'].match(/^(\d+(?:\.\d+)?)\s*Bar$/i)?.[1]);tank=parse(specs['Tank size'].match(/^(\d+(?:\.\d+)?)\s*Ltr$/)?.[1]);
   const table=source.htmlTables[0]?.slice(1);if(table.length!==2||table[0][0]!=='BAR'||table[1][0]!=='LPM'||row.points.length!==8)throw new Error('Tableau FAD Bambi absent');
   if(!source.extractedText.includes(row.fadDefinitionQuote)||!row.fadDefinitionQuote.includes('actual airflow at the outlet under pressure'))throw new Error('Définition FAD absente');
   points=row.points.map((p,i)=>{const c=i+1;if(p.pressureColumn!==c||p.flowColumn!==c||p.pressureBar!==parse(table[0][c])||p.litersPerMinute!==parse(table[1][c]))throw new Error('Point FAD Bambi altéré');return {pressureBar:p.pressureBar,litersPerMinute:p.litersPerMinute};});
   if(parse(specs['FAD (@5 bar)'].match(/^(\d+(?:\.\d+)?)\s*L\/Min$/)?.[1])!==points[4].litersPerMinute)throw new Error('FAD 5 bar contradictoire');
   const d=row.dutyQuote.match(/^Max duty cycle = (50|60)%$/);if(!d||!source.extractedText.includes(row.dutyQuote))throw new Error('Cycle Bambi absent');duty=Number(d[1])/100;
   if(row.dutyCycle!==duty||!source.extractedText.includes(row.oilQuote)||!(row.oilType==='oil-free'?/oil\s*free/i:/oil\s*lubricated/i).test(row.oilQuote))throw new Error('Lubrification Bambi altérée');
   electrical=specs.Supply;if(row.electricalQuote!==electrical||row.frequencyHz!==(electrical.match(/50\s*Hz/i)?50:null))throw new Error('Alimentation Bambi altérée');
   power=parse(specs['Motor power'].match(/\/\s*(\d+(?:\.\d+)?)\s*kW$/)?.[1]);
   equipment=`Groupe avec cuve ${fmt(tank)} L${row.model.endsWith('D')?' et sécheur':''}`;
   const id=add(row.sourceId);for(const key of ['maxPressureBar','tankLiters','fadCurve','dutyCycle','oilType','powerKw'])fields[key]=[id];
   limitations.push('Cycle intermittent déclaré ; durée de référence non précisée. L’exploitation permanente n’est pas assimilée à un service continu.');
  } else if(row.dataset==='ekom-manual'){
   const mr=row.modelRef,models=ekom[`${row.sourceId}:${mr?.page}`];if(row.brand!=='EKOM'||!models||models[mr.columnIndex-1]!==row.model||mr.sourceId!==row.sourceId||mr.rowIndex!==0||row.frequencyHz!==50||row.flowSelection!=='first-50Hz-configuration'||row.maxPressureBasis!=='working-range-upper-bound')throw new Error('Identité EKOM altérée');
   const pg=page(row.sourceId,mr.page);if(pg.additionalExtraction?.tableIndex!==mr.tableIndex||pg.additionalExtraction.method!=='pdfplumber-explicit-main-model-columns'||identity(cell(mr))!==identity(row.model+(row.model==='DK50 2V/M MOBILE MINI'?' (5092020A5-305)':'')))throw new Error('Ancrage modèle EKOM altéré');
   for(const ref of [row.flowRef,row.pressureRef,row.tankRef,row.dutyRef,row.electricalRef,row.powerRef])if(ref.sourceId!==row.sourceId||ref.page!==mr.page||ref.tableIndex!==mr.tableIndex||ref.columnIndex!==mr.columnIndex)throw new Error('Colonne modèle EKOM incohérente');
   if(!(/FAD/.test(label(row.flowRef))||row.sourceId==='ekom-manual-19'&&label(row.flowRef)==='Capacity at 10 bar l/min')||!/^Air tank (volume|capacity)/.test(label(row.tankRef))||!/^Operating mode/.test(label(row.dutyRef))||!/Working.*pressure/i.test(label(row.pressureRef))||/safety/i.test(label(row.pressureRef)))throw new Error('Sémantique de caractéristique EKOM altérée');
   const pressure=Number(label(row.flowRef).match(/(?:Capacity|Output) at (\d+(?:\.\d+)?) bar/)?.[1]);const rawflow=cell(row.flowRef);if(rawflow!==row.flowRaw||first(rawflow)!==row.flowOriginal||row.flowUnit!=='l/min'||pressure!==row.pressureBar)throw new Error('Débit ou pression FAD EKOM altérés');
   const bounds=cell(row.pressureRef).match(/^(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)$/);if(!bounds)throw new Error('Plage de fonctionnement EKOM absente');maximum=Number(bounds[2]);tank=parse(cell(row.tankRef));points=[{pressureBar:pressure,litersPerMinute:row.flowOriginal}];
   const conditions=page(row.sourceId,row.conditionPage).text;if(!conditions.includes('FAD („Free Air Delivery“)')||!conditions.includes('101325 Pa')||!conditions.includes('Relative humidity 0%')||!conditions.includes('Temperature 20°C'))throw new Error('Conditions FAD EKOM absentes');
   const rawd=cell(row.dutyRef);if(rawd!==row.dutyRaw)throw new Error('Cycle EKOM altéré');duty=rawd==='S1-100'?1:rawd==='Intermittent S 3-50'?.5:undefined;if(row.dutyCycle!==(duty??null)||duty===undefined&&row.model!=='DK50 6x4VRTS/M')throw new Error('Cycle incomplet transformé en service continu');
   electrical=cell(row.electricalRef);if(electrical!==row.electricalQuote||!electrical.includes('50')||!electrical.includes('230')&&!electrical.includes('400'))throw new Error('Configuration électrique EKOM absente');
   if(row.oilType==='oil-free'){if(!page(row.sourceId,row.oilPage).text.includes(row.oilQuote)||!/oil.?free/i.test(row.oilQuote))throw new Error('Lubrification EKOM absente');}else if(row.oilType!=='unknown'||row.oilPage!==undefined||row.oilQuote!==undefined)throw new Error('Lubrification EKOM non établie');
   if(row.powerRaw!==cell(row.powerRef))throw new Error('Puissance EKOM altérée');if(/^\d+(?:\.\d+)?$/.test(row.powerRaw))power=parse(row.powerRaw);
   // Multi-pump output is not recast as whole-station input power.
   if(['ekom-manual-16','ekom-manual-18'].includes(row.sourceId))power=undefined;
   equipment=row.equipment;const id=add(row.sourceId,mr.page);for(const key of ['maxPressureBar','tankLiters','fadCurve'])fields[key]=[id];fields.fadCurve.push(add(row.sourceId,row.conditionPage));if(row.oilType!=='unknown')fields.oilType=[add(row.sourceId,row.oilPage)];if(duty!==undefined)fields.dutyCycle=[id];if(power!==undefined)fields.powerKw=[id];
   if(row.mpn!==undefined&&(row.model!=='DK50 2V/M MOBILE MINI'||row.mpn!=='5092020A5-305'))throw new Error('MPN EKOM non établi');
  } else if(row.dataset==='mattei-classic'){
   if(row.brand!=='Mattei'||row.sourceId!=='mattei-pdf-03'||row.frequencyHz!==50||row.dutyCycle!==null||row.oilType!=='oil'||row.mpn!==undefined)throw new Error('Périmètre Classic altéré');
   const mr=row.modelRef, table=page(row.sourceId,14).tables[1];
   if(mr?.page!==14||mr.tableIndex!==1||mr.columnIndex!==0||norm(cell(mr)).replace(' (**)','')!==row.model)throw new Error('Identité Classic altérée');
   const small=/^ERCS? [123]$/.test(row.model),col=small?2:3,mp=small?10:13;
   for(const [ref,c] of [[row.flowRef,col],[row.tankRef,7],[row.powerRef,5],[row.electricalRef,6]])if(ref.sourceId!==row.sourceId||ref.page!==14||ref.tableIndex!==1||ref.rowIndex!==mr.rowIndex||ref.columnIndex!==c)throw new Error('Colonne Classic altérée');
   const raw=cell(row.flowRef).split(' '),flow=parse(raw[0]),other=parse(raw[1]);
   const quantum=v=>10**-(v.replace(',','.').split('.')[1]?.length??0);
   if(Math.abs(flow*1000-other*28.316846592)>quantum(raw[0])*500+quantum(raw[1])*28.316846592/2+1e-8)throw new Error('Unités FAD Classic contradictoires');
   const maxpg=small||/^ERCS/.test(row.model)||Number(row.model.split(' ')[1])<=11?6:7;
   if(row.maxPressurePage!==maxpg||!page(row.sourceId,maxpg).text.includes(`Max. working pressure: ${small?'10':'8/10/13'} bar`)||!page(row.sourceId,maxpg).text.includes('Hz: 50')||!page(row.sourceId,14).text.includes('Working pressure: 7,5 bar for version 8 bar - 9,5 bar for version 10 bar - 12,5 bar for version 13 bar')||!page(row.sourceId,14).text.includes('F.A.D. in accordance with ISO 1217, annex “C”'))throw new Error('Maximum ou pression FAD Classic absent');
   if(row.flowOriginal!==flow||row.flowUnit!=='m3/min'||row.pressureBar!==mp-.5||row.maxPressureBasis!=='explicit-maximum-working-pressure')throw new Error('Valeur FAD Classic altérée');
   maximum=mp;tank=cell(row.tankRef)==='-'?0:parse(cell(row.tankRef));
   if(tank===0&&!page(row.sourceId,4).text.includes('possibility of working without an air storage tank'))throw new Error('Montage sans cuve Classic absent');
   power=first(cell(row.powerRef));electrical=cell(row.electricalRef);points=[{pressureBar:mp-.5,litersPerMinute:flow*1000}];duty=undefined;equipment=row.equipment;
   if(equipment!==(tank===0?'Groupe Classic sur socle sans réservoir':`Groupe Classic sur réservoir ${tank} L`))throw new Error('Montage Classic altéré');
   fields.maxPressureBar=[add(row.sourceId,maxpg)];fields.tankLiters=[add(row.sourceId,14),...(tank===0?[add(row.sourceId,4)]:[])];fields.fadCurve=[add(row.sourceId,14)];fields.powerKw=[add(row.sourceId,14)];fields.oilType=[add(row.sourceId,3)];
   if(!page(row.sourceId,3).text.includes('multi-stage oil separation system'))throw new Error('Lubrification Classic absente');
  } else if(row.dataset==='mattei-blade-8-12'){
   const sid='mattei-pdf-11',mr=row.modelRef,pg=page(sid,7);
   if(row.brand!=='Mattei'||row.sourceId!==sid||mr?.page!==7||mr.tableIndex!==0||mr.columnIndex!==0||mr.rowIndex<4||mr.rowIndex>11||cell(mr)!==row.model||row.frequencyHz!==50||row.oilType!=='oil'||row.dutyCycle!==1||row.pressureBar!==9.5||row.maxPressureBasis!=='working-range-upper-bound')throw new Error('Version BLADE altérée');
   for(const [ref,c] of [[row.flowRef,3],[row.tankRef,8],[row.powerRef,6]])if(ref.sourceId!==sid||ref.page!==7||ref.tableIndex!==0||ref.rowIndex!==mr.rowIndex||ref.columnIndex!==c)throw new Error('Colonne BLADE altérée');
   if(!page(sid,6).text.includes('OPERATING PRESSURES FROM 8 TO 10 BAR')||!page(sid,6).text.includes('This allows the compressor to work continuously with')||!page(sid,3).text.includes('BLADE S (on receiver) and BLADE SE (on receiver with dryer')||!page(sid,3).text.includes('OIL FILTER AND OIL SEPARATOR FILTER')||!pg.text.includes('F.A.D. in accordance with ISO 1217, annex “C”')||!pg.text.includes('Working pressure: 7,5 bar for version 8 bar - 9,5 bar for version 10 bar')||pg.tables[0][3][0]!=='400 / 50 / 3')throw new Error('Portée technique BLADE absente');
   const fr=cell(row.flowRef),cf=norm(pg.tables[0][mr.rowIndex][4]);const q=v=>10**-(v.replace(',','.').split('.')[1]?.length??0);const flow=parse(fr);
   if(row.flowOriginal!==flow||row.flowUnit!=='m3/min'||Math.abs(flow*1000-parse(cf)*28.316846592)>q(fr)*500+q(cf)*28.316846592/2+1e-8)throw new Error('Unités BLADE contradictoires');
   maximum=10;tank=cell(row.tankRef)==='-'?0:parse(cell(row.tankRef));power=parse(cell(row.powerRef));electrical='400 / 50 / 3';duty=1;equipment=row.equipment;
   if(row.electricalQuote!==electrical||tank!==((row.model.startsWith('BLADE S ' )||row.model.startsWith('BLADE SE '))?270:0))throw new Error('Réservoir BLADE hors nomenclature');
   points=[{pressureBar:9.5,litersPerMinute:flow*1000}];fields.maxPressureBar=[add(sid,6)];fields.fadCurve=[add(sid,7)];fields.tankLiters=[add(sid,7),add(sid,3)];fields.powerKw=[add(sid,7)];fields.oilType=[add(sid,3)];fields.dutyCycle=[add(sid,6)];
  } else if(row.dataset==='compair-l02-l06'){
   const sid='compair-l02-06',mr=row.modelRef,pg=page(sid,5);
   if(row.brand!=='CompAir'||row.sourceId!==sid||mr?.page!==5||mr.tableIndex!==0||mr.columnIndex!==0||![1,3,4,5,6].includes(mr.rowIndex)||row.model!==cell(mr)||row.dutyCycle!==1||row.oilType!=='oil'||row.frequencyHz!==null||row.pressureBar!==10||row.maxPressureBasis!=='explicit-maximum-working-pressure')throw new Error('Configuration CompAir altérée');
   for(const [ref,c]of[[row.flowRef,2],[row.maxPressureRef,1],[row.tankRef,6],[row.powerRef,3]])if(ref.sourceId!==sid||ref.page!==5||ref.tableIndex!==0||ref.rowIndex!==mr.rowIndex||ref.columnIndex!==c)throw new Error('Colonne CompAir altérée');
   if(!pg.text.includes('Base Mounted')||!norm(pg.tables[0][0][1]).includes('Maximum Pressure [bar g]')||!norm(pg.tables[0][0][2]).includes('FAD @ 10 bar/145 psi')||!pg.text.includes('Air Intake Pressure 1 bar a ; Air Intake Temperature 20° C ; Humidity 0 % (dry)')||!pg.text.includes('ISO 1217 Ed. 4, Annex C')||!page(sid,2).text.includes('range of lubricated screw compressors')||!page(sid,2).text.includes('run continuously.')||cell(row.tankRef)!=='-')throw new Error('Portée CompAir absente');
   maximum=parse(cell(row.maxPressureRef));tank=0;power=parse(cell(row.powerRef));duty=1;equipment='Base Mounted, récepteur de stockage externe';electrical=row.electricalQuote;const flow=parse(cell(row.flowRef));if(row.flowOriginal!==flow||row.flowUnit!=='m3/min'||row.equipment!==equipment||row.electricalQuote!==(mr.rowIndex===1?'230 V ; phases et fréquence non précisées dans la ligne retenue':'Alimentation non précisée dans la ligne retenue'))throw new Error('Débit CompAir altéré');
   points=[{pressureBar:10,litersPerMinute:flow*1000}];const eid=add(sid,5);fields.maxPressureBar=[eid];fields.tankLiters=[eid];fields.fadCurve=[eid];fields.powerKw=[eid];fields.oilType=[add(sid,2)];fields.dutyCycle=[add(sid,2)];
  } else if(row.dataset==='airpol-reviewed-table'){
   const record=source.reviewedRecords?.find(r=>r.recordId===row.recordId);
   if(row.brand!=='Airpol'||!record||Object.keys(record).some(k=>JSON.stringify(row[k])!==JSON.stringify(record[k]))||row.flowUnit!=='m3/h'||row.maxPressureBasis!=='explicit-maximum-working-pressure')throw new Error('Transcription Airpol altérée');
   const original=ref=>{const s=sources.get(ref?.sourceId);const raw=ref?.page?cell(ref):s?.htmlTables?.[ref.tableIndex]?.[ref.rowIndex]?.[ref.columnIndex];if(typeof raw!=='string')throw new Error('Cellule Airpol absente');if(ref.numberIndex===undefined)return norm(raw);const nums=raw.match(/\d+(?:[.,]\d+)?/g);if(!Number.isInteger(ref.numberIndex)||!nums?.[ref.numberIndex])throw new Error('Sous-cellule Airpol absente');return nums[ref.numberIndex];};
   const quote=proof=>{const s=sources.get(proof?.sourceId),txt=proof?.page?page(proof.sourceId,proof.page).text:s?.extractedText;if(!txt||!proof.quote||!txt.includes(proof.quote))throw new Error('Preuve Airpol absente');return add(proof.sourceId,proof.page);};
   const current= row.modelRef?original(row.modelRef):norm(page(row.sourceId,row.modelPage).text);
   if(!current.includes(row.modelQuote)||!identity(row.modelQuote).includes(identity(`Airpol ${row.model}`)))throw new Error('Identité Airpol absente');
   const flow=parse(original(row.flowRef));if(row.flowOriginal!==flow)throw new Error('Débit Airpol altéré');
   equipment=row.equipment;electrical=row.electricalQuote;power=row.powerRef?parse(original(row.powerRef)):undefined;
   if(row.kind==='fixed-screw'||row.kind==='variable-screw'){
    if(!['airpol-pdf-075','airpol-pdf-024','airpol-pdf-027','airpol-pdf-022','airpol-pdf-025'].includes(row.sourceId)||row.frequencyHz!==50||row.dutyCycle!==null||row.oilType!=='oil'||row.flowRef.page!==row.modelPage||row.flowRef.tableIndex!==1)throw new Error('Version Airpol vis altérée');
    const pg=page(row.sourceId,row.modelPage),t=pg.tables[1],flabel=norm(t[row.flowRef.rowIndex][0]);
    const measure=Number(flabel.match(/\[\s*(\d+(?:[.,]\d+)?)\s*MPa\s*\]/)?.[1]?.replace(',','.'))*10;
    maximum=parse(original(row.maxPressureRef))*10;
    if(row.pressureBar!==measure||!norm(t[row.maxPressureRef.rowIndex][0]).startsWith('Max overpressure')||!['Capacity [ 1,5 MPa ]','Capacity min - max [1,0 MPa]'].includes(flabel)||row.maxPressureBar!==maximum||original(row.electricalRef)!=='400/3/50'||electrical!=='400/3/50')throw new Error('Pression/mesure/alimentation Airpol vis altérée');
    const legacyFlow=parse(original(row.legacyFlowRef)),legacyUnit=parse(original(row.legacyUnitRef)),quantum=v=>10**-(v.replace(',','.').split('.')[1]?.length??0),fr=original(row.legacyFlowRef),ur=original(row.legacyUnitRef);
    if(row.legacyFlowRef.sourceId!=='airpol-screw'||parse(original(row.legacyPressureRef))*10!==measure||flow!==legacyFlow||Math.abs(flow*1000/60-legacyUnit*1000)>quantum(fr)*1000/120+quantum(ur)*500+1e-8||!row.legacyConditionProof.quote.includes('EN ISO 1217:2009 and EN ISO 5167-2'))throw new Error(`Corroboration Airpol unités/pression absente: ${row.model}/${measure}/${flow}/${legacyFlow}/${legacyUnit}`);
    const eid=add(row.sourceId,row.modelPage);fields.maxPressureBar=[eid];fields.fadCurve=[eid,quote(row.legacyConditionProof)];
    if(row.kind==='fixed-screw'){
     if(row.sourceId!=='airpol-pdf-075'||row.flowRef.numberIndex!==undefined||measure!==15||row.tankLiters!==0||row.mountProof.quote!=='SCREW COMPRESSORS WITHOUT AIR RECEIVER - BELT DRIVE'||!page(row.sourceId,2).text.includes('compressed air system equipped with an air\nreceiver.'))throw new Error('Montage Airpol fixe absent');
     tank=0;fields.tankLiters=[quote(row.mountProof),add(row.sourceId,2)];
    }else{
     if(measure!==10||row.flowRef.numberIndex!==0||row.legacyFlowRef.numberIndex!==0||row.legacyUnitRef.numberIndex!==0||row.flowRef.rowIndex!==row.flowRangeRef.rowIndex||row.flowRef.columnIndex!==row.flowRangeRef.columnIndex||!/^\d+(?:[.,]\d+)?\s*-\s*\d+(?:[.,]\d+)?$/.test(original(row.flowRangeRef))||norm(t[row.tankRef.rowIndex][0])!=='Air receiver volume')throw new Error('Minimum VSD Airpol altéré');
     tank=parse(original(row.tankRef));if(tank!==500)throw new Error('Cuve Airpol VSD altérée');fields.tankLiters=[eid];limitations.push(`Débit minimal déclaré à 10 bar retenu : ${fmt(flow*1000/60)} L/min. La plage min-max publiée ${original(row.flowRangeRef)} m³/h ne constitue pas un débit garanti en permanence au maximum.`);
    }
    duty=undefined;if(!row.oilProof.quote.includes('oil separators'))throw new Error('Lubrification Airpol vis absente');fields.oilType=[quote(row.oilProof)];fields.powerKw=[eid];
   }else if(row.kind==='scroll-tank'||row.kind==='scroll-base'){
    if(row.maximumProof.sourceId!=='airpol-scroll-max'||row.fadProof.sourceId!=='airpol-scroll-max'||row.dutyProof.sourceId!=='airpol-scroll-max'||!row.maximumProof.quote.includes('maximum operating pressures of 8 bar or 10 bar')||!row.fadProof.quote.startsWith('Free air delivery ranges')||!row.dutyProof.quote.includes('continuous-duty operation under industrial conditions.')||row.dutyCycle!==1||row.oilType!=='oil-free'||row.frequencyHz!==50||electrical!=='400 V/3 ph/50 Hz')throw new Error('Qualification scroll Airpol absente');
    const measured=parse(original(row.pressureRef))*(row.kind==='scroll-base'?10:1);if(measured!==10||row.pressureBar!==10)throw new Error('Version scroll Airpol altérée');maximum=10;duty=1;
    if(row.kind==='scroll-tank'){
     if(row.sourceId!=='airpol-scroll'||![9,10].includes(row.modelPage)||row.flowRef.tableIndex!==2||row.flowRef.columnIndex!==2||!original(row.tankRef).split(' / ').includes('500'))throw new Error('Réservoir scroll Airpol altéré');tank=500;
    }else{
     if(row.sourceId!=='airpol-page-04'||row.flowRef.columnIndex!==3||original(row.tankRef)!=='-'||!source.htmlTables[0][0][5].includes('Air receiver volume')||!source.htmlTables[0][2][1].includes('SRK 2')||source.htmlTables[0][2][5]!=='500'||!row.mountInterpretation)throw new Error('Montage SR sans cuve non étayé');tank=0;limitations.push(row.mountInterpretation);
    }
    const eid=add(row.sourceId,row.modelPage);fields.tankLiters=[eid];fields.maxPressureBar=[quote(row.maximumProof)];fields.fadCurve=[eid,quote(row.fadProof)];fields.oilType=[quote(row.oilProof)];fields.dutyCycle=[quote(row.dutyProof)];fields.electrical=[quote(row.electricalProof)];if(power!==undefined)fields.powerKw=[eid];
   }else throw new Error('Famille Airpol inconnue');
   points=[{pressureBar:row.pressureBar,litersPerMinute:Number((flow*1000/60).toFixed(3))}];
  } else if(row.dataset==='manufacturer-reviewed-table'){
   const record=source.reviewedRecords?.find(x=>x.recordId===row.recordId);
   if(!record||source.reviewedRecords.filter(x=>x.recordId===row.recordId).length!==1||Object.keys(record).some(k=>JSON.stringify(row[k])!==JSON.stringify(record[k]))||!['ALUP','MARK'].includes(row.brand))throw new Error('Transcription primaire altérée');
   const original=ref=>{const raw=ref.page?cell(ref):sourceFor(ref).htmlTables?.[ref.tableIndex]?.[ref.rowIndex]?.[ref.columnIndex];if(typeof raw!=='string')throw new Error('Cellule primaire absente');if(ref.numberIndex===undefined)return norm(raw);const values=raw.match(/\d+(?:[.,]\d+)?/g);if(!Number.isInteger(ref.numberIndex)||ref.numberIndex<0||!values?.[ref.numberIndex])throw new Error('Sous-valeur primaire absente');return values[ref.numberIndex];};
   const sourceFor=ref=>{const s=sources.get(ref.sourceId);if(!s)throw new Error('Source de cellule absente');return s;};
   const quote=proof=>{const s=sources.get(proof?.sourceId);const txt=proof?.page?page(proof.sourceId,proof.page).text:s?.extractedText;if(!txt||typeof proof.quote!=='string'||!proof.quote||!txt.includes(proof.quote))throw new Error('Ancrage primaire absent');return add(proof.sourceId,proof.page);};
   if(row.modelRef?identity(original(row.modelRef))!==identity(row.model):!norm(page(row.sourceId,row.flowRef.page).text).includes(row.modelQuote)||row.modelQuote!==row.model)throw new Error('Modèle primaire absent');
   maximum=row.maxPressureRef?parse(original(row.maxPressureRef)):Number(row.maximumProof?.quote?.match(/\d+(?:[.,]\d+)?/g)?.at(-1));if(row.maximumProof)quote(row.maximumProof);const pressure=row.pressureProof?(quote(row.pressureProof),Number(row.pressureProof.quote.match(/\d+(?:[.,]\d+)?/g).at(-1))):parse(original(row.pressureRef)),flow=parse(original(row.flowRef));
   if(row.maxPressureBar!==maximum||row.pressureBar!==pressure||row.flowOriginal!==flow||!['m3/h','l/s','l/min'].includes(row.flowUnit)||!['explicit-maximum-working-pressure','working-range-upper-bound'].includes(row.maxPressureBasis)||row.maxPressureRef===null&&row.maxPressureBasis!=='working-range-upper-bound')throw new Error('Maximum, mesure ou FAD altéré');
   const factors={'m3/h':1000/60,'l/s':60,'l/min':1,cfm:28.316846592},quantum=value=>10**-(value.replace(',','.').split('.')[1]?.length??0);
   if(!Array.isArray(row.unitChecks)||!row.unitChecks.length)throw new Error('Corroboration unités absente');
   for(const c of row.unitChecks){const raw=original(c.ref),value=parse(raw),fr=original(row.flowRef);if(!factors[c.unit]||c.value!==value||Math.abs(flow*factors[row.flowUnit]-value*factors[c.unit])>quantum(fr)*factors[row.flowUnit]/2+quantum(raw)*factors[c.unit]/2+1e-8)throw new Error('Unités FAD contradictoires');}
   let txt=row.flowRef.page?norm(page(row.sourceId,row.flowRef.page).text)+' '+page(row.sourceId,row.flowRef.page).tables.flat(2).filter(x=>typeof x==='string').map(norm).join(' '):source.htmlTables.flat(2).filter(x=>typeof x==='string').map(norm).join(' ');
   txt=txt.replaceAll('Refer- ence','Reference').replaceAll('Refe- rence','Reference').replaceAll('pres- sure','pressure').replaceAll('work- ing','working');
   if(!(/Max\.?\s*Working Pressure/i.test(txt)||row.maximumProof||row.sourceId==='alup-pdf-03'&&txt.includes('Max. Working Reference Working Free Air Delivery'))||!((row.pressureProof&&row.pressureProof.quote.includes('Reference working pressure'))||/(Reference\s*Working Pressure|Reference Working|Refer- rence|Refe- rence|Max\. FAD)/i.test(txt))||!/(Free Air Delivery|Free air delivery)/i.test(txt))throw new Error(`En-tête maximum, mesure ou FAD absent: ${row.sourceId}/${row.model}`);
   if(row.tankLiters!==0||row.equipment!=='Groupe sur socle sans réservoir de stockage intégré'||!(/(Floor Mounted|Base-mounted|Base Mounted|Base mounted)/.test(row.mountProof.quote)||row.mountProof.kind==='separate-downstream-receiver-diagram'&&row.sourceId==='mark-pdf-new-11'&&row.mountProof.page===4&&row.mountProof.configurationQuote==='FM'&&row.mountProof.quote==='Air Receiver'&&txt.includes('FM')))throw new Error('Montage non établi');
   fields.tankLiters=[quote(row.mountProof)];tank=0;equipment=row.equipment;
   if(row.oilType==='oil'){if(!(/OIL.INJECTED/i.test(row.oilProof?.quote)||row.sourceId==='mark-pdf-new-11'&&row.oilProof.quote==='Oil separator'))throw new Error('Lubrification non établie');fields.oilType=[quote(row.oilProof)];}else if(row.oilType!=='unknown'||row.oilProof!==null)throw new Error('Lubrification non établie');
   duty=row.dutyProof?1:undefined;if(row.dutyCycle!==(duty??null)||row.dutyProof&&!/(Continuous duty|continuous use without cool-down|Delivers steady air output tailored for continuous industrial use)/i.test(row.dutyProof.quote))throw new Error('Cycle hors périmètre');if(duty!==undefined)fields.dutyCycle=[quote(row.dutyProof)];
   if(row.frequencyHz!==null&&!(row.frequencyHz===50&&(row.sourceId==='alup-pdf-03'&&txt.includes('50 Hz Version')||row.sourceId==='mark-pdf-new-11'&&txt.includes('400 V 50Hz - IEC - CE')||row.mpn==='8153338551'&&quote(row.mpnProof)&&sources.get(row.mpnProof.sourceId).extractedText.includes('Supply - 400/3/50'))))throw new Error('Fréquence non établie');
   if(row.mpn){if(!row.mpnProof?.quote.includes(row.mpn))throw new Error('MPN non documenté');fields.mpn=[quote(row.mpnProof)];fields.electrical=[quote(row.mpnProof)];}power=row.powerRef?first(original(row.powerRef)):undefined;if(row.powerRef?row.powerRaw!==original({...row.powerRef,numberIndex:undefined}):row.powerRaw!==null)throw new Error('Puissance transcrite altérée');electrical=row.electricalQuote;
   points=[{pressureBar:pressure,litersPerMinute:Number((flow*factors[row.flowUnit]).toFixed(3))}];const eid=add(row.sourceId,row.flowRef.page);fields.maxPressureBar=[add(row.maxPressureRef?.sourceId??row.maximumProof.sourceId,row.maxPressureRef?.page??row.maximumProof?.page),...(row.maximumProof?[quote(row.maximumProof)]:[])];fields.fadCurve=[eid,...(row.pressureProof?[quote(row.pressureProof)]:[])];if(power!==undefined)fields.powerKw=[add(row.powerRef.sourceId,row.powerRef.page)];
  } else throw new Error('Jeu documentaire inconnu');
  if(row.maxPressureBar!==maximum||row.tankLiters!==tank||maximum<=0||tank<0||points.some(p=>p.pressureBar>maximum||p.pressureBar<=0||p.litersPerMinute<=0)||new Set(points.map(p=>p.pressureBar)).size!==points.length)throw new Error('Caractéristique critique incohérente');
  if(duty===undefined)limitations.push('Cycle de service non établi ; la tenue permanente reste indéterminée.');
  if(row.frequencyHz===null)limitations.push('Fréquence non publiée dans la fiche retenue ; aucune transposition des performances à 50 Hz.');
  limitations.push('Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.','Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés.');
  const id=slug(`${row.brand}-${row.model}`);if(seen.has(id))throw new Error('Modèle dupliqué');seen.add(id);
  const main=fields.maxPressureBar[0],spec=(label,value,ids=[main])=>({label,value,evidenceIds:ids});
  return {id,slug:id,brand:row.brand,model:row.model,...(row.mpn?{mpn:row.mpn}:{}),variant:{familyId:id,label:equipment,distinguishingAttributes:{équipement:equipment,pressionMaximale:`${fmt(maximum)} bar`,cuve:`${fmt(tank)} L`,...(row.frequencyHz?{fréquence:`${row.frequencyHz} Hz`}:{})}},tankLiters:tank,maxPressureBar:maximum,fadCurve:points,...(duty!==undefined?{dutyCycle:duty}:{}),oilType:row.oilType,...(power!==undefined?{powerKw:power}:{}),confidence:'B',status:'unknown',image:{src:`/images/products/${id}.svg`,alt:`Repères techniques : ${row.brand} ${row.model}`,sourceUrl:source.url,sourceLabel:'Carte technique CompatAir, données déclarées par le constructeur'},specifications:[spec('Configuration constructeur',equipment,fields.tankLiters),spec(row.maxPressureBasis==='working-range-upper-bound'?'Plafond de la plage de fonctionnement':'Pression maximale de fonctionnement',`${fmt(maximum)} bar relatifs`),...points.map(p=>spec(`Air livré à ${fmt(p.pressureBar)} bar`,`${fmt(p.litersPerMinute)} L/min`,fields.fadCurve)),spec('Cuve de stockage',`${fmt(tank)} L`,fields.tankLiters),...(duty!==undefined?[spec('Cycle de service déclaré',row.dataset==='ekom-manual'?row.dutyRaw:duty===1?'Service continu déclaré sous les conditions constructeur':`${fmt(duty*100)} %, fenêtre non précisée`,fields.dutyCycle)]:[]),spec('Alimentation publiée',electrical,fields.electrical??[main]),spec('Fréquence retenue',row.frequencyHz?`${row.frequencyHz} Hz`:'non précisée',fields.electrical??[main])],editorial:{overview:`${row.brand} ${row.model}. ${points.map(p=>`${fmt(p.litersPerMinute)} L/min à ${fmt(p.pressureBar)} bar`).join(' ; ')}. ${equipment}.`,verifiedFacts:['Air livré rattaché à une pression et aux unités originales du constructeur.',`Cuve de stockage documentée : ${fmt(tank)} L.`,row.maxPressureBasis==='working-range-upper-bound'?`Plafond conservateur de la plage de fonctionnement : ${fmt(maximum)} bar.`:`Pression maximale de fonctionnement publiée : ${fmt(maximum)} bar.`],limitations},evidence,fieldSources:fields,notes:['Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas.']};
 });
}
