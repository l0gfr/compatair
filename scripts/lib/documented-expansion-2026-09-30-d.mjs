import { createFujiToolDraft } from './fuji-catalog-import.mjs';
const DATE = '2026-09-30';
const slug = s => s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const f = n => n.toLocaleString('fr-FR', {maximumFractionDigits:3});
const positive = n => { if (!Number.isFinite(n) || n <= 0) throw new Error('Quantité positive documentée requise'); return n; };
export function buildDocumentedExpansionD(snapshot) {
 if(snapshot.schemaVersion!==1 || snapshot.batchId!=='documented-expansion-2026-09-30-d' || snapshot.observedAt!==DATE || snapshot.compressors.length!==200 || snapshot.tools.length!==1000) throw new Error('Lot non reconnu');
 const sources=new Map(snapshot.sources.map(s=>[s.id,s]));
 if(sources.size!==snapshot.sources.length) throw new Error('Source dupliquée');
 for(const s of sources.values()) if(new URL(s.url).protocol!=='https:' || !/^[a-f0-9]{64}$/.test(s.sha256) || s.observedAt!==DATE) throw new Error('Provenance invalide');
 const ev=(sourceId,page)=>{const s=sources.get(sourceId);if(!s)throw new Error('Source absente');return {id:`documented-d-${slug(sourceId)}${page?`-p${page}`:''}`,sourceUrl:s.url+(page?`#page=${page}`:''),sourceLabel:`${sourceId}, ${page?`page PDF ${page}`:'page constructeur'}`,sourceType:s.url.includes('.pdf')?'manual':'manufacturer',sourceRole:'primary',retrievedAt:DATE,confidence:'B',notes:`SHA-256 ${s.sha256}. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé.`};};
 const image=(id,label,sourceId)=>({src:`/images/products/${id}.webp`,alt:`Repères techniques : ${label}`,sourceUrl:sources.get(sourceId).url,sourceLabel:'Carte technique CompatAir, données déclarées par le fabricant'});
 const compressors=snapshot.compressors.map(r=>{
  if(!['RENNER','ALMiG','BOGE'].includes(r.brand) || !Number.isInteger(r.page) || r.page<1 || !r.rawLine)throw new Error('Identité compresseur manquante');
  const primary=ev(r.sourceId,r.page),duty=ev(r.dutySourceId);let fad=r.flows.map(p=>({pressureBar:positive(p.pressureBar),litersPerMinute:positive(p.litersPerMinute)}));
  if(r.dutyCycle!==1)throw new Error('Service continu non établi');
  if(r.brand==='RENNER'){
   if(r.dutySourceId!=='renner-rsb-duty' || !/^(?:RS|RSK|RSD|RSDK)-B(?:-ECN)? (?:2\.2|3\.0|4\.0|5\.5|7\.5|11\.0)(?: ST)?$/.test(r.model) || !r.rawLine.includes(r.mpn) || fad.length!==1 || fad[0].pressureBar!==r.pressureBar || fad[0].litersPerMinute!==r.flowM3Min*1000)throw new Error('Article RENNER ou débit altéré');
   const pressures=r.pressureHeader.match(/\d+,\d+/g).map(n=>Number(n.replace(',','.'))),flows=r.flowHeader.match(/\d+,\d+/g).map(n=>Number(n.replace(',','.')));
   if(pressures[r.sourceColumn-1]!==r.pressureBar || flows[r.sourceColumn-1]!==r.flowM3Min)throw new Error('Colonne RENNER contradictoire');
  }
  if(r.brand==='ALMiG' && (r.dutySourceId!=='almig-screw-duty' || !/^(?:G-DRIVE T|F-DRIVE|V-DRIVE T|LENTO|SIMPLEXX|COMBI XP) \d+/.test(r.model) || !r.rawLine.startsWith(r.model.match(/\d+/)[0]+' ')))throw new Error('Modèle ALMiG non revu');
  if(r.brand==='ALMiG') {
   const cells=(r.flowLine??r.rawLine).replaceAll(',','.').split(/\s+/);let expected;
   if(r.page===12)expected=[8,10,13].map((p,i)=>({pressureBar:p,litersPerMinute:Number((Number(cells[i+1])*1000).toFixed(3))}));
   else if(r.page===9)expected=[[8,3],[10,6],[13,9]].map(([p,i])=>({pressureBar:p,litersPerMinute:Number((Number(cells[i])*1000).toFixed(3))}));
   else if([16,20,24,25,29].includes(r.page))expected=[{pressureBar:r.page===20?8:7,litersPerMinute:Number((Number(cells[r.page===29?4:5])*1000).toFixed(3))}];
   else throw new Error('Tableau ALMiG non revu');
   if(JSON.stringify(expected)!==JSON.stringify(fad))throw new Error('Point ALMiG différent du tableau');
  }
  if(r.brand==='BOGE' && (r.dutySourceId!=='boge-s3-duty' || fad.length!==0))throw new Error('Pression de mesure BOGE non établie');
  if(fad.some(p=>p.pressureBar>r.maxPressureBar) || new Set(fad.map(p=>p.pressureBar)).size!==fad.length)throw new Error('Points FAD incohérents');
  const id=slug(`${r.brand}-${r.model}-${r.mpn??r.variantLabel??''}`),label=`${r.brand} ${r.model}${r.mpn?`, article ${r.mpn}`:r.variantLabel?`, ${r.variantLabel}`:''}`;
  const specs=[{label:'Localisation du tableau',value:`Page PDF ${r.page}`},{label:'Configuration',value:r.equipment},{label:'Dimensions (L × l × h)',value:`${r.dimensionsMm.join(' × ')} mm`},{label:'Conditions du débit',value:r.flowBasis}];
  if(r.minimumFlowM3Min!==undefined && r.minimumFlowM3Min!==null)specs.push({label:'Débit minimal de modulation publié',value:`${f(r.minimumFlowM3Min*1000)} L/min ; condition du tableau conservée séparément`});
  if(r.publishedFlowM3Min)specs.push({label:'Débit effectif publié, pression de mesure à confirmer',value:`${f(r.publishedFlowM3Min*1000)} L/min ; aucun point FAD attribué à la pression maximale`});
  if(r.model.startsWith('V-DRIVE T'))specs.push({label:'Puissance cumulée des deux moteurs',value:`${f(r.powerKw)} kW ; somme des deux puissances de la ligne, pas une mesure électrique en fonctionnement`});
  return {id,slug:id,brand:r.brand,model:r.model,...(r.mpn?{mpn:r.mpn}:{}),variant:{familyId:slug(`${r.brand}-${r.model}`),label:`${r.variantLabel??r.equipment} ; ${f(r.maxPressureBar)} bar`,distinguishingAttributes:{...(r.mpn?{reference:r.mpn}:{}),configuration:r.equipment,pression:`${f(r.maxPressureBar)} bar`,cuve:`${r.tankLiters??r.tank} L`}},tankLiters:r.tankLiters??r.tank,maxPressureBar:r.maxPressureBar,fadCurve:fad,dutyCycle:1,oilType:r.oilType,powerKw:r.powerKw??r.power,...(r.weightKg??r.weight?{weightKg:r.weightKg??r.weight}:{}),mobility:'fixed',confidence:'B',status:'unknown',image:image(id,label,r.sourceId),specifications:specs.map(s=>({...s,evidenceIds:[primary.id]})),editorial:{overview:`${label}. ${r.equipment}. ${fad.length?`Débit restitué : ${fad.map(p=>`${f(p.litersPerMinute)} L/min à ${f(p.pressureBar)} bar`).join(' ; ')}.`:'La livraison effective est publiée, mais sa pression de mesure n’est pas séparément établie : aucun FAD calculable n’est ajouté.'}`,verifiedFacts:[`Dimensions publiées : ${r.dimensionsMm.join(' × ')} mm.`,`Puissance ${r.model.startsWith('V-DRIVE T')?'cumulée des moteurs':'moteur'} publiée : ${f(r.powerKw??r.power)} kW.`,`La documentation constructeur de cette série prévoit le service continu, sous ses conditions d’installation et d’entretien.`],limitations:['La disponibilité actuelle et le contenu de la configuration livrée restent à confirmer.',...(!fad.length?['Le maximum de pression n’est pas assimilé à une pression de mesure du FAD. Le verdict reste insufficient_data.']:['Aucun débit n’est extrapolé au-delà des pressions publiées ; les minima de modulation ne sont pas des débits moyens d’atelier.']),...(r.oilType==='unknown'?['Le mode de lubrification n’est pas établi ici. Aucun niveau de qualité d’air n’en est déduit.']:[]),'La classe de qualité d’air du réseau, les pertes de pression et le refroidissement nécessitent une vérification sur l’installation.']},evidence:[primary,duty],fieldSources:Object.fromEntries(['tankLiters','maxPressureBar','powerKw','fadCurve',...(r.weightKg??r.weight?['weightKg']:[]),...(r.mpn?['mpn']:[]),...(r.oilType!=='unknown'?['oilType']:[])].map(k=>[k,[primary.id]]).concat([['dutyCycle',[duty.id]]])),notes:[`Configuration et unités vérifiées dans la ligne de la page ${r.page}.`]};
 });
 const tools=snapshot.tools.map(r=>{
  if(r.brand==='Fuji')return createFujiToolDraft({schemaVersion:1,observedAt:'2026-09-25',pressureNotices:snapshot.fujiPressureNotices},r.reviewedFuji);
  if(!['Atlas Copco','Sumake','Desoutter','Senco','PREBENA'].includes(r.brand) || !r.sourceLine || r.details.length<3)throw new Error('Fiche outil insuffisante');
  const normalized=s=>s.replace(/[^A-Z0-9]/gi,'').toLowerCase();
  if(!normalized(r.sourceLine).includes(normalized(r.mpn??r.model)))throw new Error('Référence absente de la transcription');
  const primary=ev(r.sourceId,r.page),evidence=[primary],id=slug(`${r.categoryId}-${r.brand}-${r.model}-${r.model===r.mpn?'':r.mpn??''}`),label=`${r.brand} ${r.model}${r.mpn && r.model!==r.mpn?` (réf. ${r.mpn})`:''}`;
  if(r.brand==='Desoutter' && r.unitConflict !== (Math.abs(r.flowOriginal*60/28.316846592-r.flowCfm)>Math.max(.2,r.flowOriginal*60/28.316846592*.05)))throw new Error('Contradiction d’unités effacée');
  if(r.brand==='Desoutter' && r.catalogueFlow){const cf=r.catalogueFlow;if(!r.sourceLine.includes(String(cf.litersPerSecond)) || !r.sourceLine.includes(String(cf.cfm)) || r.catalogueConflict !== (Math.abs(r.flowOriginal-cf.litersPerSecond)>Math.max(.05,cf.litersPerSecond*.05)))throw new Error('Contradiction catalogue Desoutter effacée');}
  const unknownPressure=r.pressureBar===undefined;const conflicted=r.unitConflict===true||r.catalogueConflict===true;const variable=r.demandModel==='variable-volume'||conflicted;
  let demand,flow=r.flowLpm,phase=r.flowBasis;
  if(r.brand==='Atlas Copco'){
   if(phase!=='maximum'||r.pressureBar!==6.3||!r.flowColumns?.length||sources.get(r.sourceId).pressurePage!==3)throw new Error('Maximum Atlas non documenté');
   if(flow!==Number((Math.max(...r.flowColumns.map(x=>x.lps))*60).toFixed(3)))throw new Error('Conversion Atlas altérée');
  }
  if(r.brand==='Sumake' && (phase!=='unqualified'||r.pressureBar!==6.2||Math.abs(flow/r.flowCfm-28.316846592)>1.5||!r.sourceLine.split(/\s+/).map(s=>s.replaceAll(',','')).includes(String(flow))))throw new Error('Régime ou unité Sumake altéré');
  if(r.brand==='Desoutter' && (phase!=='free-speed'||r.pressureBar!==6.3||r.flowUnit!=='l/s'||flow!==Number((r.flowOriginal*60).toFixed(3))||sources.get(r.sourceId).pressurePage!==345))throw new Error('Débit Desoutter altéré');
  if(r.brand==='Senco' && !variable)throw new Error('Pression de mesure SENCO non établie');
  if(r.brand==='Senco') {
   const air=r.sourceLine.match(/Air Consumption (\d+(?:[,.]\d+)?) ?l\/min/),pressure=r.sourceLine.match(/Operating Pressure [^\n]*?(\d+(?:[,.]\d+)?)[–-](\d+(?:[,.]\d+)?) bar/);
   if(!air || !pressure || Number(air[1].replace(',','.'))!==r.flowLpm || Number(pressure[1].replace(',','.'))!==r.pressureMin || Number(pressure[2].replace(',','.'))!==r.pressureMax || r.details.slice(0,4).some(d=>!r.sourceLine.includes(d.label+' '+d.value) || !/^(?:\d+(?:[,.]\d+)? ?(?:mm|kg)|\d+(?:[,.]\d+)?(?:\"| lbs) \(\d+(?:[,.]\d+)? (?:mm|kg)\))$/.test(d.value)))throw new Error('Colonne SENCO ambiguë ou altérée');
  }
  const range={min:r.pressureMin??r.pressureBar,...(!unknownPressure?{typical:r.pressureBar}:{}),max:r.pressureMax??r.pressureBar};
  const extra=[];let summary;
  if(variable){
   const explanation=r.demandExplanation??(r.catalogueConflict?'Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner.':'Les unités de consommation de la fiche individuelle sont contradictoires. Une confirmation fabricant est requise avant d’utiliser un débit dans le calcul.');
   demand={demandModel:'variable-volume',workingPressureBar:range,demandExplanation:explanation};summary=explanation;
   if(flow)extra.push({label:'Consommation déclarée, exclue du calcul',value:`${f(flow)} L/min${r.unitConflict?` ; fiche individuelle : ${f(r.flowOriginal)} L/s et ${f(r.flowCfm)} cfm, unités non concordantes`:''}`});
  }else if(r.demandModel==='per-action'){
   if(r.brand!=='PREBENA'||!r.sourceLine.includes(`bei ${r.pressureBar} bar`))throw new Error('Pression par fixation non établie');
   demand={demandModel:'per-action',workingPressureBar:range,airPerActionLiters:positive(r.airPerActionOriginal),actionLabel:'fixation'};summary=`Environ ${f(r.airPerActionOriginal)} L par fixation à ${f(r.pressureBar)} bar. La cadence réelle reste nécessaire.`;
  }else{
   demand={demandModel:'fixed-flow',workingPressureBar:range,airflowLpm:{min:positive(flow),typical:flow,max:flow},...(['unqualified','free-speed'].includes(phase)?{airflowBasis:phase}:{})};summary=`Consommation ${phase==='maximum'?'maximale':phase==='free-speed'?'à vide':'publiée, régime non précisé'} : ${f(flow)} L/min à ${f(r.pressureBar)} bar.`;
  }
  if(r.catalogueFlow)extra.push({label:'Consommation à vide du catalogue, conservée séparément',value:r.catalogueFlow.flowProof+(r.catalogueConflict?' ; différente de la fiche individuelle':'')});
  if(r.brand==='Desoutter'&&!r.catalogueFlow)extra.push({label:'Recoupement numérique avec le tableau PDF',value:'Non établi pour cette ligne ; aucune confirmation croisée du débit revendiquée'});
  if(r.individualSource){const s=r.individualSource;if(new URL(s.url).protocol!=='https:'||!/^[a-f0-9]{64}$/.test(s.sha256))throw new Error('Fiche individuelle non versionnée');evidence.push({id:`documented-d-desoutter-${r.mpn}`,sourceUrl:s.url,sourceLabel:`Desoutter, fiche individuelle ${r.mpn}`,sourceType:'manufacturer',sourceRole:'primary',retrievedAt:s.observedAt,confidence:'B',notes:`SHA-256 ${s.sha256}. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire.`});}
  const pressureEvidence=['Atlas Copco','Desoutter'].includes(r.brand)?ev(r.sourceId,sources.get(r.sourceId).pressurePage):primary;
  if(pressureEvidence.id!==primary.id)evidence.push(pressureEvidence);
  const valueEvidence=[primary.id,...(r.individualSource?[`documented-d-desoutter-${r.mpn}`]:[])];
  if(r.reportedModel && r.reportedModel!==r.model)extra.push({label:'Désignation de la fiche individuelle, différente du catalogue',value:r.reportedModel});
  const specs=[{label:'Localisation du tableau',value:`Page PDF ${r.page}`},...r.details,...extra].map(s=>({...s,evidenceIds:valueEvidence}));
  return {id,slug:id,categoryId:r.categoryId,category:r.categoryId,label,brand:r.brand,model:r.model,...(r.mpn?{mpn:r.mpn}:{}),...demand,confidence:'B',image:image(id,label,r.sourceId),variant:{familyId:slug(`${r.brand}-${r.model}`),label:r.mpn?`Référence ${r.mpn}`:r.model,distinguishingAttributes:{...(r.mpn?{reference:r.mpn}:{}),...Object.fromEntries(r.details.slice(0,3).map(s=>[s.label,s.value]))}},editorial:{overview:`${label}. ${summary} ${r.details.slice(0,2).map(s=>`${s.label} : ${s.value}.`).join(' ')}`,verifiedFacts:[`Désignation et configuration documentées à la page PDF ${r.page}.`,...r.details.slice(0,3).map(s=>`${s.label} : ${s.value}.`)],limitations:[...(variable?[summary]:phase==='unqualified'?['Le régime de consommation n’est pas indiqué. Aucun débit maximal ou en charge n’est inventé ; le verdict reste insufficient_data.']:phase==='free-speed'?['Le débit à vide seul ne confirme pas la consommation maximale ou en charge. Le verdict reste insufficient_data.']:demand.demandModel==='per-action'?['La moyenne par minute exige une cadence saisie ; elle ne décrit pas la pointe instantanée du déclenchement.']:['Le débit publié conserve son régime de mesure ; aucun cycle supposé ne réduit la consommation.']),...(['Senco','PREBENA'].includes(r.brand)?['La plage de pression utilisable reste distincte de la pression de mesure de la consommation.']:[]),'Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.','La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier.']},specifications:specs,evidence,fieldSources:{...(r.mpn?{mpn:[primary.id]}:{}),workingPressureBar:[primary.id, ...(pressureEvidence.id!==primary.id?[pressureEvidence.id]:[])],...(demand.demandModel==='fixed-flow'?{airflowLpm:valueEvidence,...(demand.airflowBasis?{airflowBasis:[primary.id]}:{})}:demand.demandModel==='per-action'?{airPerActionLiters:[primary.id]}:{demandExplanation:valueEvidence})},notes:[summary]};
 });
 const ids=new Set();for(const p of [...compressors,...tools]){if(ids.has(p.id))throw new Error('Identité dupliquée');ids.add(p.id);}
 return {compressors,tools};
}
