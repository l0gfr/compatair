import { createHash } from 'node:crypto';
const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const rounded = value => Number(value.toFixed(3));
const format = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const factors = { 'L/min': 1, 'L/s': 60, 'm3/min': 1000, cfm: 28.316846592, 'L/cycle': 1, 'ft3/cycle': 28.316846592 };
const positive = value => { if (!Number.isFinite(value) || value <= 0) throw new Error('Valeur technique positive requise'); return value; };
const pressureInBar = (value, unit) => unit === 'psi' ? rounded(value * .0689475729) : unit === 'MPa' ? rounded(value * 10) : unit === 'bar' ? value : NaN;

export function documentedConnectionFacts(row, source) {
 const facts = { specifications: [], limitations: [] };
 if (!source.contentType?.startsWith('text/html')) return facts;
 const cells = row.sourceTechnicalCells ?? [];
 const inlet = cells.filter(([label]) => /^airinlet(?:nptbsp|nptin|in)?$/.test(label.toLowerCase().replace(/[^a-z]/g, '')));
 const hoses = cells.filter(([label]) => /hose/i.test(label));
 const nominal = /^(?:\d+(?:\/\d+)?|[¼½¾])(?:\s*NPT|\s*BSP|[- ]?in[.]?|["”˝])?$/i;
 for (const [label, value] of [...inlet, ...hoses]) {
  if (!row.rawLine.includes(`${label}: ${value}`)) throw new Error('Cellule de raccordement absente de la ligne source');
  facts.specifications.push({ label: `Champ fabricant : ${label}`, value });
 }
 const inletValue = inlet[0]?.[1].trim();
 const inletFraction = inletValue?.match(/^(\d+)\/(\d+)/);
 const validInlet = nominal.test(inletValue ?? '') && (inletFraction ? Number(inletFraction[1]) > 0 && Number(inletFraction[2]) > 0 : !/^0(?:\D|$)/.test(inletValue));
 if (inlet.length === 1 && validInlet) facts.connectorSize = `${inlet[0][1]} (${inlet[0][0]})`;
 else if (inlet.length) facts.limitations.push('L’entrée d’air publiée ne fournit pas une dimension de raccordement interprétable sans clarification fabricant. Le libellé original reste visible.');
 const diameters = [];
 for (const [label, value] of hoses) {
  const normalized = label.toLowerCase().replace(/[^a-z]/g, '');
  // "Hose size" alone does not establish an inner diameter.
  if (!/hose.*(?:id|innerdiameter)/.test(normalized)) continue;
  let diameter;
  if (/mm$/.test(normalized) && /^\d+(?:\.\d+)?$/.test(value.trim())) diameter = Number(value);
  else if (/in$/.test(normalized)) {
   const match = value.trim().match(/^(\d+(?:\.\d+)?)(?:\/(\d+))?(?:[- ]?in[.]?|["”˝])?$/i);
   if (match && (match[2] === undefined || Number(match[2]) > 0)) diameter = rounded(Number(match[1]) / (match[2] === undefined ? 1 : Number(match[2])) * 25.4);
  }
  if (Number.isFinite(diameter) && diameter > 0 && diameter <= 100) diameters.push(diameter);
  else facts.limitations.push(`Le diamètre intérieur publié « ${value} » (${label}) n’est pas converti en une valeur de calcul.`);
 }
 if (diameters.length && diameters.every(value => value === diameters[0])) facts.recommendedHose = { innerDiameterMm: diameters[0] };
 else if (diameters.length) facts.limitations.push('Les diamètres intérieurs publiés diffèrent après conversion ; aucune valeur unique n’est retenue sans clarification.');
 return facts;
}

// Every measurement point is scoped to the reviewed primary response and exact identity.
const reviewedMeasurementContracts = [
  {
    "sourceId": "hpt-nv83a2-nv65ac-nv50a1",
    "sourceHash": "c3c318cdc705e2b5bd8d65a7668ea3408d8a5ea7a3a23528271e3c580ec63307",
    "mpn": "NV83A2",
    "page": 9,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "2.4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nv83a2-nv65ac-nv50a1",
    "sourceHash": "c3c318cdc705e2b5bd8d65a7668ea3408d8a5ea7a3a23528271e3c580ec63307",
    "mpn": "NV65AC",
    "page": 9,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "2.1",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nv83a2-nv65ac-nv50a1",
    "sourceHash": "c3c318cdc705e2b5bd8d65a7668ea3408d8a5ea7a3a23528271e3c580ec63307",
    "mpn": "NV50A1",
    "page": 9,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": ".99",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nt50af-n5009af",
    "sourceHash": "5f14f70284c23e4ae1a669e8ad78284e9f09d66dc7384b03ed2e24363ebe917b",
    "mpn": "NT50AF",
    "page": 12,
    "pressureBar": 5.5,
    "pressureOriginal": 5.5,
    "pressureUnit": "bar",
    "flowOriginal": "1.64",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nt50af-n5009af",
    "sourceHash": "5f14f70284c23e4ae1a669e8ad78284e9f09d66dc7384b03ed2e24363ebe917b",
    "mpn": "N5009AF",
    "page": 12,
    "pressureBar": 5.5,
    "pressureOriginal": 5.5,
    "pressureUnit": "bar",
    "flowOriginal": "1.64",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-np35a",
    "sourceHash": "557d54400b71178005124aada964911c5308cbae18ea599533b5a9ea70ee67bb",
    "mpn": "NP35A",
    "page": 9,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": ".5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-np50a",
    "sourceHash": "5e7f40c5d188260b348fed41c071b09f904ddc20c7dcbf11e1254a57c0a36471",
    "mpn": "NP50A",
    "page": 8,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": ".6",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nt65ma4",
    "sourceHash": "7c778bf2ff24e2599b4e767dfcd32c806a11772a925c01e59210e7f26bf5be80",
    "mpn": "NT65MA4",
    "page": 8,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "1.29",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nr90ac5",
    "sourceHash": "0bb6962d6f582fd6295369dcb0aff8c06181bcc1b625eb1d082c12daf838b1f6",
    "mpn": "NR90AC5",
    "page": 10,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "2.8",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-unidentified-ba937",
    "sourceHash": "9ab038717f76e366b926ab630fa3c9533a7d4b2541fe4d224a9d3393470679f5",
    "mpn": "NV65AH",
    "page": 8,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "1.4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hikoki-nt50ae2-nt32ae2",
    "sourceHash": "9503961251d2544f0add4b5adee76234829624178c3a20b4514c8e8f4d7e2958",
    "mpn": "NT50AE2",
    "page": 9,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": ".73",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hikoki-nt50ae2-nt32ae2",
    "sourceHash": "9503961251d2544f0add4b5adee76234829624178c3a20b4514c8e8f4d7e2958",
    "mpn": "NT32AE2",
    "page": 9,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": ".73",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-000",
    "sourceHash": "7e2061012e5e4efea00aa953c8396a8d36afa7dd4750e946a06dcd3d9c3c445c",
    "mpn": "12000024",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-001",
    "sourceHash": "01160cd603b7ae72edba85af6357848577fe35338cee117ab3cd4f27b3492731",
    "mpn": "12000048",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-002",
    "sourceHash": "c18b2c1f49f8b66ad9aaf208d8a89ffccb8dbf2d264d885644f32e9d6766bc64",
    "mpn": "12000049",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-003",
    "sourceHash": "6c962539b625c0df9615b154392a22ad63f21b980913edad7f1292c6d0b1962b",
    "mpn": "12000052",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-004",
    "sourceHash": "e809088fc8a09cd76885e464a7660c163bd4fe29f3f7b1b78f4c375a791a9b85",
    "mpn": "12000058",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-005",
    "sourceHash": "baefd991416b15224efccbae0e2e4663fe62c98205455abdf0dd0fd8c751be35",
    "mpn": "12000060",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,7",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-006",
    "sourceHash": "f1e308828184514308c253f7a5926ab4c84bf57906a1a60361359c22fd0fee1b",
    "mpn": "12000062",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,7",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-007",
    "sourceHash": "74f0a7debea7dae5fe2ac95fb8f2678f4fe41483f276edcf3d059dee7e8d105d",
    "mpn": "12000063",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-008",
    "sourceHash": "e7b4f39c6799494c56c3ed83fbf0f3b57e33a1f6baf1a74c9ed33531497a322d",
    "mpn": "12000069",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-009",
    "sourceHash": "61ebd21d6711897139f18beef259600016748a2500019c99fa4a454aedf8df04",
    "mpn": "12000070",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-010",
    "sourceHash": "5576649b937093ea635986e20e9547291ee9e42000b81ecd830457bc5934956c",
    "mpn": "12000071",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-011",
    "sourceHash": "8611cfa437021b0fd3cce17f774d8693c5491f1017bc2cd75a83ec95eb30e3d0",
    "mpn": "12000072",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-012",
    "sourceHash": "7961e1231c99486f5aff505b47aaee03ba8dc6ac2ba2e60b788b7d67c01618f2",
    "mpn": "12000073",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-014",
    "sourceHash": "ee1ce8cf65f8c7d3ed5fd7a067722db7086e5de609be3910a5767e855dba6d7d",
    "mpn": "12000075",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-015",
    "sourceHash": "1cb8e38690e6c7bd261065da81e4424be2ac5d88438353d48a0025ca0109cc9b",
    "mpn": "12000076",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-016",
    "sourceHash": "a99bf752b35664aa27a15719083e5ec91fd5a646e8c57ff24000dc18eec179c3",
    "mpn": "12000077",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-016",
    "sourceHash": "a99bf752b35664aa27a15719083e5ec91fd5a646e8c57ff24000dc18eec179c3",
    "mpn": "12000078",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-017",
    "sourceHash": "a125dce719f22eae54bb1ad31180fb0eba89d72e7287599d44ef2e0a717e4ac9",
    "mpn": "12000126",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-018",
    "sourceHash": "02f28a04af97d103dc3e66a489e1a256fc6a871382b49a3148598a9f54515e1b",
    "mpn": "12000150",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,83",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-019",
    "sourceHash": "cb70fe9baaab81caa3bfb8d0f4f256e712674d806882d2eefb47d31990343549",
    "mpn": "12000155",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-020",
    "sourceHash": "b33b6292057e2d38f21664599c083eedb07c591396b8912d8be48a90d520648c",
    "mpn": "12000157",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,45",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-021",
    "sourceHash": "a72aef30b668d72b2b9a8d5e17244c6044ec49efb9063b09aafa21630198b0dc",
    "mpn": "12000158",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,45",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-022",
    "sourceHash": "1380539130a8fa33264d964be79a0ae7d995728354447cfc70538a18e95389ad",
    "mpn": "12000159",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,45",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-023",
    "sourceHash": "37c49de0ec232ea7b302ace30274bb5c54800fdc42609513dd68decb6a9ee186",
    "mpn": "12000199",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-024",
    "sourceHash": "1224c0fc7caaa5d97592b8815adb854a8d010e29bc8b50af2045075521f11b42",
    "mpn": "12000203",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-025",
    "sourceHash": "0bb4907cd0b2f76e06d5a1e46d4a9a31ccefcdd02fa34acddb6c977ae490311e",
    "mpn": "12000211",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-026",
    "sourceHash": "61f2a547432c8bb4fdbc7ff6b1c1d163d2af0ce06bb8b304b94fdf3e8ec9c16c",
    "mpn": "12000214",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-027",
    "sourceHash": "da5c5afe976c3823ec5334213c8fd58faf3f26d7e9250163047c505e324b6040",
    "mpn": "12000215",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-028",
    "sourceHash": "f1fe3723228fed0b40e2065331f011c4b2f56902e3e8660f41525cef958d84ab",
    "mpn": "12000216",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-029",
    "sourceHash": "eb2ba4309e0c8381d7bb128cb3245e04089822e472ea0bfef79179b4d8afb7d5",
    "mpn": "12000220",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-031",
    "sourceHash": "c0908570dfbba5b12ff4f646831ddbc7b89688a86d4f3a8901805cfc688afe65",
    "mpn": "12000234",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-032",
    "sourceHash": "93e9ab34cdedb8f264eb8a84f7965b290ed2fe1596a1c228809e3b5b81202a6d",
    "mpn": "12000244",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-036",
    "sourceHash": "7420a7f49a8108ae8e85e590ddf6c9d72ca302c71cca11f7af0aea438286bc52",
    "mpn": "12000290",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,45",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-037",
    "sourceHash": "a1aa83d250e3803496f5454327acb219a0ebe03b6dcfabb9a966c5d787937095",
    "mpn": "12000291",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,45",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-039",
    "sourceHash": "1c34f935727c2a0e18bbd1dfab46ffe619d94533ec456a88ccbed0b81848bcdc",
    "mpn": "12000295",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,45",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-040",
    "sourceHash": "f1ebd7859d542296953cb9a05c0964d161b9105a2734eae2311b02dd64dbf34a",
    "mpn": "12000322",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-041",
    "sourceHash": "a8be36fdfbee0d9f13cd03c336a5b9f1710adb7d7da78ad29c9853077d1cb521",
    "mpn": "12000324",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-042",
    "sourceHash": "694271cba0e2aa86074865ab142bd945e64d575fc95365be8aaa5257142e4bde",
    "mpn": "12000330",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-044",
    "sourceHash": "0fc48f5964b38969cc80b6e4d38b6fd80232943b6701608b53134433ff6d73a6",
    "mpn": "12000437",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-045",
    "sourceHash": "0af7c32aef2fdc1c9760b2803452f19a8ef2b4af9f4f26dc74e157471251d98f",
    "mpn": "12000439",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,45",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-046",
    "sourceHash": "17806bd4524934006bdc60007d22a8f23cab277e7a479f07189da426cdc8b4cb",
    "mpn": "12000500",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2,7",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-047",
    "sourceHash": "a231a71c3c51eece7bb615397ef8590bf72a029c00cfabc6df144ff5b832cbb1",
    "mpn": "12000506",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-048",
    "sourceHash": "a0ebab835ed4c68502b52621f0201cd0c43b5e8bf2d7983479e40ba797ab3c69",
    "mpn": "12000522",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-049",
    "sourceHash": "a31af90dcc969b53815f36d0b58ac6d3a0070f766bce637e874e1d4db73b79cf",
    "mpn": "12000533",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-050",
    "sourceHash": "7bd3acc5426035bb393708d63a739dea34c739791b60abfbebf6f84edecb087a",
    "mpn": "12000541",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "3,1",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-052",
    "sourceHash": "4c11c11ff56b79ab77600a5ff6eb29415550b045daf66aee8556bb1a68a732a1",
    "mpn": "12000610",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2,6",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-054",
    "sourceHash": "b48331dddda915f6fb21ea7221cc025598bf6fa69b126c36d279f94100538777",
    "mpn": "12000630",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-055",
    "sourceHash": "8b738ce79ed58a9bad0ab6cbaeacb5f06dbd8b9f22de4a0f7ca54d3c6ea81ec9",
    "mpn": "12000631",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-056",
    "sourceHash": "9b103ed744f86c22f3ee43b4e64dc708e4b3ff113d29edb1b4f0b24435a38c5a",
    "mpn": "12000639",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-057",
    "sourceHash": "af87a2c16a7f1e43bb972a9d8fa8657b86f8301e71a81deb843b1ededa6e9859",
    "mpn": "12000648",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-058",
    "sourceHash": "cc9980ab86c52c011f3d80830e7aef19665550b351cb974a8d95229e7a5b4973",
    "mpn": "12000650",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2,7",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-059",
    "sourceHash": "710d178915548703c5830c0e6132dadb19adc2a9c98261765c0d3a4d8ea37314",
    "mpn": "12000660",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-060",
    "sourceHash": "d8e0c8c68ca026193a6a7ce84c0c84a09a91c2a484178e986f0da68a14c38364",
    "mpn": "12000662",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-061",
    "sourceHash": "06a5d7d8f861098948049d97b613b335b47420f4d7e05db0eeacc08a43b2c371",
    "mpn": "12000663",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-062",
    "sourceHash": "efaf3b78c2de22f899923da3d290c806baaed971166c2013f186999d89d56e41",
    "mpn": "12000674",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-064",
    "sourceHash": "4f53f3ea38122a1dfe7db321d71174aa3adf948acd36a7a7fa13430d5ea098fd",
    "mpn": "12100004",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,46",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-067",
    "sourceHash": "a0f8a2df12475addea7ea6f2a66e8d0739bd74bcabbfeabd18d4d8a96dcafdbf",
    "mpn": "12100197",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,46",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-068",
    "sourceHash": "555936a862c372851853ba48e48e6e168d218dc1ab9630cccbc4466ac783aa35",
    "mpn": "12100233",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-069",
    "sourceHash": "2e904a05ac8584a150faa9e2f12e63980ce78ee03131106514d1bfa1d0d5318d",
    "mpn": "12100234",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "3,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-070",
    "sourceHash": "e7ad2777360d87bca74bc2e2975016db6ece2b79c55b1b192876fbb42ce5da31",
    "mpn": "12100241",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,88",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-071",
    "sourceHash": "71a3685882d48523a1ec6a59bb1c4e3a45beb100f47a88aa8550e6e9c7be71c3",
    "mpn": "12100282",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-072",
    "sourceHash": "c6eb0f5d1346f3985f05f8f4aa68f8fbeaf8d38072e134f7090c544f3e3abb4d",
    "mpn": "12100283",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-073",
    "sourceHash": "539a44c5634145043044d6eecb5425991da4114b04ee891b97acac4c6e17df89",
    "mpn": "12100285",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-074",
    "sourceHash": "db45b613be52172d3ef2c497cefee01b4ad3848f6f448a2a39c51d5824d9a7fb",
    "mpn": "12100292",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "3,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-075",
    "sourceHash": "335044b7b995c9f79fa4701d9ef4e80f1a50230569a7369f199056e980f43dda",
    "mpn": "12100293",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-076",
    "sourceHash": "b0faf31c8f9e117547d85047f9b810571f67a16312394ac56598606e79bd8338",
    "mpn": "12100331",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-077",
    "sourceHash": "fc1b85f9ee80b33dba9e6c65ec3dbc80a52c6002714739a961c76c5e9d2b6f52",
    "mpn": "12100345",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-080",
    "sourceHash": "1726254eae495b26f95ee8fa3c053d96bca695893d56b51451886b2221dbf1df",
    "mpn": "12100427",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-081",
    "sourceHash": "51df2d9f2969428aaa53a81cef4875ae8c2dd2be52279813fbebf7a5d0a89350",
    "mpn": "12100447",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-082",
    "sourceHash": "ded6bf5bc4170ee300ec9622bab58c255ab2db3a9e77644c8545122f867760c1",
    "mpn": "12100453",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,44",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-083",
    "sourceHash": "c8e2e04e280403479a01fc7588181e213c9a03805eb285058c467ab8c313c26c",
    "mpn": "12100458",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,75",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-085",
    "sourceHash": "1447eb66ff9e49040cb75367916be55c03fcc54d4e16a6223233b6a7832eacef",
    "mpn": "12100471",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2,75",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-086",
    "sourceHash": "0f6512396f246b0d23ceae4005f015f8c9f4328f4f12c02bc128771e32c95912",
    "mpn": "12100476",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "3,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-087",
    "sourceHash": "2dc45e235ba0f2712b3dc584675234650b1c6bf75e4f24bc46fd228b192ce1b3",
    "mpn": "12100506",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,6",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-088",
    "sourceHash": "2d4c92070e28e4c8de64403be7bfafe5e89b6c1aaee1eae034a040c79a7ba60d",
    "mpn": "12100507",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-089",
    "sourceHash": "3e6a0d6e7f3780c0dbe14b1abb52b5e008163a9544beebaeb8c7f97a95b96d44",
    "mpn": "12100510",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,87",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-092",
    "sourceHash": "d78282dd3789978a4927a3ce1bc43b90431d173c0326ad1587262bf187190888",
    "mpn": "12100591",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,34",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-093",
    "sourceHash": "834bc220c3749d4b76c0c2ae4c29b2521aed19d00a8413a804349a4cb7d1e0b0",
    "mpn": "12100609",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,06",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-094",
    "sourceHash": "a49481abde4e37f8ffc07e3cc5cdf85f9a6433d0cfa822a3f5be7e286b6bbf25",
    "mpn": "12100635",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-096",
    "sourceHash": "5d264c80af049c1718204804724d8a54ca8b9b3861183fd62d7ec060a3723505",
    "mpn": "12100667",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,8",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-097",
    "sourceHash": "9865361d55ab1c2f51bb70ada3e8698378ae765ddc86cd4181dcf3ebdff5b2c0",
    "mpn": "12100670",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-098",
    "sourceHash": "4dbd497cddbe20b63cf3ac463aa0240e4732ece74d98b0ed738897db6a21dbbc",
    "mpn": "12100673",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-099",
    "sourceHash": "c3faae92996d0f89a0da3dd820d5fc502be4f112f5af53c9220ff2a226111aae",
    "mpn": "12100689",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-100",
    "sourceHash": "c12d44682ebb2e516e85c5759fadc6e2bd093b433236bf2a8fc6e5bfd0c3d7bd",
    "mpn": "12100691",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "3,2",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-102",
    "sourceHash": "bcd78c43a25e54b8288caec690acd32ecc1e35e9b148282579b76cc5c9291ba0",
    "mpn": "12100694",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "3,3",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-103",
    "sourceHash": "6d639d17854245adf21d1c34db3bf53fc94c892efbef79e2a440f6ecc6cb70c1",
    "mpn": "12100695",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-104",
    "sourceHash": "424c9f2f5267390ea938bf2979afd71ab7de98ab2b1dbcf5ddcf81df474fe4f3",
    "mpn": "12100696",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-105",
    "sourceHash": "42ceebb1e2e4170c19e0a2fe03275d910c11afb5130202db70ddee3d72d3c3ae",
    "mpn": "12100707",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,4",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-110",
    "sourceHash": "90e8e33933cfcf05d08177564bf5e90f02a04db6cfc9677169ae45d478926b07",
    "mpn": "12100729",
    "page": 2,
    "pressureBar": 7.0,
    "pressureOriginal": 7.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,85",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-111",
    "sourceHash": "fd63905010eb95568caf457160e662c307388dff0e17043e267146567e89dd27",
    "mpn": "12100735",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2,6",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-112",
    "sourceHash": "8a35c85d55b0ccc6e58aa4855187a2146f368f97beedc65858fe73394fb2c9d6",
    "mpn": "12100737",
    "page": 2,
    "pressureBar": 7.0,
    "pressureOriginal": 7.0,
    "pressureUnit": "bar",
    "flowOriginal": "2,9",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-114",
    "sourceHash": "46e604b66c54eea56b7b2bb617ceb90afeb1c35e36759425e2c7d347bfd3f9ec",
    "mpn": "12200081",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "0,83",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-115",
    "sourceHash": "716629d5681ce4ff67e31d7ed44e488554e3553114c8704935e2131a8a9581e9",
    "mpn": "12200099",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "1,6",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "bea-sheet-116",
    "sourceHash": "d3cebe1d918dc52c66a242df63a6e337885fc2e865abf04ffccfe30a39f37d12",
    "mpn": "12200111",
    "page": 2,
    "pressureBar": 6.0,
    "pressureOriginal": 6.0,
    "pressureUnit": "bar",
    "flowOriginal": "2",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "toku-civil-306",
    "sourceHash": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124",
    "mpn": "MI-16S",
    "page": 5,
    "pressureBar": 6,
    "pressureOriginal": 0.6,
    "pressureUnit": "MPa",
    "flowOriginal": "0.4",
    "flowUnit": "m3/min",
    "flowBasis": "load"
  },
  {
    "sourceId": "toku-civil-306",
    "sourceHash": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124",
    "mpn": "MI-165H",
    "page": 5,
    "pressureBar": 6,
    "pressureOriginal": 0.6,
    "pressureUnit": "MPa",
    "flowOriginal": "0.4",
    "flowUnit": "m3/min",
    "flowBasis": "load"
  },
  {
    "sourceId": "toku-civil-306",
    "sourceHash": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124",
    "mpn": "MI-1500-A",
    "page": 5,
    "pressureBar": 6,
    "pressureOriginal": 0.6,
    "pressureUnit": "MPa",
    "flowOriginal": "0.3",
    "flowUnit": "m3/min",
    "flowBasis": "load"
  },
  {
    "sourceId": "toku-civil-306",
    "sourceHash": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124",
    "mpn": "MI-220H",
    "page": 5,
    "pressureBar": 6,
    "pressureOriginal": 0.6,
    "pressureUnit": "MPa",
    "flowOriginal": "0.65",
    "flowUnit": "m3/min",
    "flowBasis": "load"
  },
  {
    "sourceId": "toku-civil-306",
    "sourceHash": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124",
    "mpn": "MI-2500GL",
    "page": 5,
    "pressureBar": 6,
    "pressureOriginal": 0.6,
    "pressureUnit": "MPa",
    "flowOriginal": "0.7",
    "flowUnit": "m3/min",
    "flowBasis": "load"
  },
  {
    "sourceId": "toku-civil-306",
    "sourceHash": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124",
    "mpn": "MI-38EXL",
    "page": 5,
    "pressureBar": 6,
    "pressureOriginal": 0.6,
    "pressureUnit": "MPa",
    "flowOriginal": "0.76",
    "flowUnit": "m3/min",
    "flowBasis": "load"
  },
  {
    "sourceId": "toku-civil-306",
    "sourceHash": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124",
    "mpn": "MI-3800GL",
    "page": 5,
    "pressureBar": 6,
    "pressureOriginal": 0.6,
    "pressureUnit": "MPa",
    "flowOriginal": "1",
    "flowUnit": "m3/min",
    "flowBasis": "load"
  },
  {
    "sourceId": "toku-civil-306",
    "sourceHash": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124",
    "mpn": "MI-42GL",
    "page": 5,
    "pressureBar": 6,
    "pressureOriginal": 0.6,
    "pressureUnit": "MPa",
    "flowOriginal": "1.2",
    "flowUnit": "m3/min",
    "flowBasis": "load"
  },
  {
    "sourceId": "hpt-n3804a5",
    "sourceHash": "0125ec9ad128a7e861de2371ddbb0549fbe26be83e6f882bd69a3bde239539a2",
    "mpn": "N3804A5",
    "page": 9,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": ".73",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nv90ag-s",
    "sourceHash": "da1579cacf66f787d2f2e18a66e8387d820bd3c40a397a62431bb09e0e1d9e09",
    "mpn": "NV90AG(S)",
    "page": 9,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "2.5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nr83a5-aa5",
    "sourceHash": "2f699a5450a4ddf42d367d31e84af126bc6c59b424df4d608c433e665cf4ef0d",
    "mpn": "NR83A5",
    "page": 10,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "2.5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nr83a5-aa5",
    "sourceHash": "2f699a5450a4ddf42d367d31e84af126bc6c59b424df4d608c433e665cf4ef0d",
    "mpn": "NR83A5(S)",
    "page": 10,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "2.5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nr83a5-aa5",
    "sourceHash": "2f699a5450a4ddf42d367d31e84af126bc6c59b424df4d608c433e665cf4ef0d",
    "mpn": "NR83AA5",
    "page": 10,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "2.5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nv83a5",
    "sourceHash": "3f151b97a0d2f25adb914b72dd2b4c315fa38600a086d39e49e6caeef1ee972e",
    "mpn": "NV83A5",
    "page": 10,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "2.5",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  },
  {
    "sourceId": "hpt-nt65m2-s",
    "sourceHash": "cf6b467238aab8c491d09fd495d5245e181a966f7c72d77ed26890edc7e79938",
    "mpn": "NT65M2(S)",
    "page": 9,
    "pressureBar": 6.9,
    "pressureOriginal": 6.9,
    "pressureUnit": "bar",
    "flowOriginal": "1.20",
    "flowUnit": "L/cycle",
    "flowBasis": "per-action"
  }
];

export function buildDocumentedToolsOctober3C(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-tools-2026-10-03-c' || snapshot.reviewedAt !== '2026-10-03' || snapshot.tools.length !== snapshot.toolCount || snapshot.toolCount !== 1000) throw new Error('Lot documentaire non reconnu');
 const sources = new Map(snapshot.sources.map(source => [source.id, source]));
 if (sources.size !== snapshot.sources.length) throw new Error('Source dupliquée');
 const approvedSources = [
  {
    "id": "hpt-nv83a2-nv65ac-nv50a1",
    "sourceRecordSha256": "2951d9aacda9654934a45842bd6928ba96765c211535a3c908c9581f001be9d1"
  },
  {
    "id": "hpt-nt50af-n5009af",
    "sourceRecordSha256": "c1f9fb18a6e5f56b0ba86b0b16929a7e9fd80c14341bfa56fb344532196a0d77"
  },
  {
    "id": "hpt-np35a",
    "sourceRecordSha256": "551020eef19f1822eedc06c73145f306b2b4c3795151da74864a7d0c96845679"
  },
  {
    "id": "hpt-np50a",
    "sourceRecordSha256": "6a9bca4468516a0e2e74bf6a97317a94c8d50cc69aca818a7255e1a8f5a4385d"
  },
  {
    "id": "hpt-nt65ma4",
    "sourceRecordSha256": "0bcfa6f479222c267a039fc6ea73ae40596ab09e535a9beefd085d5d70713f11"
  },
  {
    "id": "hpt-nr90ac5",
    "sourceRecordSha256": "1f0515f6dec8a50ca7775a0306fb21809e50cc494776fd1672b6bb81520dadde"
  },
  {
    "id": "hpt-unidentified-ba937",
    "sourceRecordSha256": "20cde2592942e38b246964d73beec45854eacfa1df2a607c02a3538976c8e9d8"
  },
  {
    "id": "hikoki-nt50ae2-nt32ae2",
    "sourceRecordSha256": "03b7f30ed849702775907583c5b39c0949de1f118ca7ff1ed9b45c519e124569"
  },
  {
    "id": "bea-sheet-000",
    "sourceRecordSha256": "a514ca490d3f71e352392d53080137a3a334c0561c37b0d676f20b861ec70931"
  },
  {
    "id": "bea-sheet-001",
    "sourceRecordSha256": "3c029f074bde07d50ec3576ca3ddbbe759d2f933b3800dcfb42896c9723976aa"
  },
  {
    "id": "bea-sheet-002",
    "sourceRecordSha256": "b7807e2f4bd0a02ce47d3d79141125e82ba439243c413bc0fba8299b3294c8ab"
  },
  {
    "id": "bea-sheet-003",
    "sourceRecordSha256": "679a18db62035af3edb06c94d6ca139418695cf76032cc114b232e307451fc89"
  },
  {
    "id": "bea-sheet-004",
    "sourceRecordSha256": "b9d409fbe4b06c3e39dc2cd66d156082875214ffc1da9f5cc9e27e83496b3466"
  },
  {
    "id": "bea-sheet-005",
    "sourceRecordSha256": "16317e7c6db90b353c382ead85f58711ab459a29a5966327b6f019f94cb30376"
  },
  {
    "id": "bea-sheet-006",
    "sourceRecordSha256": "4114dc5c4dc8b02e200a93e9df59226a0b9d3a861113c78a7ceb16cd994381dd"
  },
  {
    "id": "bea-sheet-007",
    "sourceRecordSha256": "c919dce7a6d1ae14fb1d57004016fe51cc9a4dc3aa6d889e875c956eccac07c1"
  },
  {
    "id": "bea-sheet-008",
    "sourceRecordSha256": "de6a60aa5751852c0e40e80556f9f4b16441a6aa26b125577dda2fc895aa1508"
  },
  {
    "id": "bea-sheet-009",
    "sourceRecordSha256": "16e2f4523afebd00b947e08a992070472c68fff5b891b31fe8088bdf86719cb5"
  },
  {
    "id": "bea-sheet-010",
    "sourceRecordSha256": "2ac0c932efe510dfd309e0dac7eb0e5caad0c20f01367bbda1a81a64bdbf415c"
  },
  {
    "id": "bea-sheet-011",
    "sourceRecordSha256": "da39e6e78ec96771c34059e1540a4787ca2d57696ef64d674341856ed85f0ebf"
  },
  {
    "id": "bea-sheet-012",
    "sourceRecordSha256": "936ed760579b644f5d06be21e789ff55386139bb511c837a8b7dfa599cdd3a65"
  },
  {
    "id": "bea-sheet-014",
    "sourceRecordSha256": "0563ebbadc3f9552a4fd76a66ba34dd7de5dca6e2a9718bd648509ad7b6acbe8"
  },
  {
    "id": "bea-sheet-015",
    "sourceRecordSha256": "17f5d685ab117295af1c2c9eef95b8cff7b6aa5aac3c0fe442c879f5d2f85f44"
  },
  {
    "id": "bea-sheet-016",
    "sourceRecordSha256": "3383c040970337c0c5bdc99d85b6900573a27a9771f4e2f29e48b8112cbc9323"
  },
  {
    "id": "bea-sheet-017",
    "sourceRecordSha256": "3d46982f17a731c626169c238d2e88e438ffe71453c60afea5c7055df895812b"
  },
  {
    "id": "bea-sheet-018",
    "sourceRecordSha256": "ee603d5ea56d1b9c3dfe46e44f3fb9d2df03ff542ceb29ab3db77d5ffa047eb4"
  },
  {
    "id": "bea-sheet-019",
    "sourceRecordSha256": "10523fdb19c59850ff551ac647f724d82faeae15deb1d21fae0dc5a72040afce"
  },
  {
    "id": "bea-sheet-020",
    "sourceRecordSha256": "61dc3ecaa49d53188b2e3bf96f4581e802aeeba9d272915a1fc5355c2e1c2b77"
  },
  {
    "id": "bea-sheet-021",
    "sourceRecordSha256": "2df02da9f8cfd45f952c022ed05f25c112408baf787c87dd15b5b3f3b2bbf48e"
  },
  {
    "id": "bea-sheet-022",
    "sourceRecordSha256": "94b22a8c6012b0af2f94cf0ab69d9c967e357931c218ec140fd0ccb849a34208"
  },
  {
    "id": "bea-sheet-023",
    "sourceRecordSha256": "5130604cb46448e3b571613449ec2af49b2a000adbd5ef64afb63c5d24d8cdc5"
  },
  {
    "id": "bea-sheet-024",
    "sourceRecordSha256": "420c2e70e27f38c7c09dd670af20a6450a93f4d5d969a2d30c60d0fe59dd032d"
  },
  {
    "id": "bea-sheet-025",
    "sourceRecordSha256": "4537d15c8f3fbc0b9c8a0c51bd530b00a05f6295e8f5cbca66b070a135136465"
  },
  {
    "id": "bea-sheet-026",
    "sourceRecordSha256": "5ee2ff176b6321ab5a96bdb7f88c679438958e3ed594f5210339ca7498ebc357"
  },
  {
    "id": "bea-sheet-027",
    "sourceRecordSha256": "19f5f1b7de1d5217e99017e379fce5cbbac1fd982f0bc19ae6d4fdb7f0f66327"
  },
  {
    "id": "bea-sheet-028",
    "sourceRecordSha256": "0d0cb0e031918cf1e517009298ad6fba9fed6c1a9985e2b423d6f2c857729273"
  },
  {
    "id": "bea-sheet-029",
    "sourceRecordSha256": "bb80eb048621b15e1e3453eba374e541fa646a0d85565cfc303a3a9d6ec8bd6e"
  },
  {
    "id": "bea-sheet-031",
    "sourceRecordSha256": "a161a81f81bdf1728b3e1bd73774fe873ec22b5bb94b6f0efcd0166928f9bfec"
  },
  {
    "id": "bea-sheet-032",
    "sourceRecordSha256": "32c9e5c279088cc91f6c2392b5b83656ef4d933a2915a466a34e78444177fde5"
  },
  {
    "id": "bea-sheet-036",
    "sourceRecordSha256": "3ccf3265685e538319860fe916a7e6447c0d0e6d9bf5c9f8147ec0c9c0727643"
  },
  {
    "id": "bea-sheet-037",
    "sourceRecordSha256": "1a4c05332003c5ad4632ec83ff33a31762c08d6904751244938d5d1c35bac795"
  },
  {
    "id": "bea-sheet-039",
    "sourceRecordSha256": "be84372f00f929d7a9f73c19e3487187bc775ecab491c046928c28a9e47d966a"
  },
  {
    "id": "bea-sheet-040",
    "sourceRecordSha256": "0f3495c3de07372bd24fd43b49128d1a943835320451151adc4a0a082030679b"
  },
  {
    "id": "bea-sheet-041",
    "sourceRecordSha256": "a58b9f3dd919b25c4605b0fbb33bd304c9a43e0ffb6b6d4e63cd6a17c0b0c30c"
  },
  {
    "id": "bea-sheet-042",
    "sourceRecordSha256": "4c963470d05662dc3b6a59234014607b4cb17d3f0a2b796318ea1858816c7942"
  },
  {
    "id": "bea-sheet-044",
    "sourceRecordSha256": "20e4129b89a172c3b5617c65c497b5155799bf4f64f96f4227ecec6989bb2a99"
  },
  {
    "id": "bea-sheet-045",
    "sourceRecordSha256": "8625ec589ae0e98386d043b04dfe6b6b105d205ee0de538b32e81ce551e7aef3"
  },
  {
    "id": "bea-sheet-046",
    "sourceRecordSha256": "2d2dfc48ea74caf10a90a10809ca77a1bb19f50eef59b5efa26b7a1bfd0db9b6"
  },
  {
    "id": "bea-sheet-047",
    "sourceRecordSha256": "344bc9cdf4368d1725de16db0d65dd7e943d26bd96010928f75c66976b8b4f11"
  },
  {
    "id": "bea-sheet-048",
    "sourceRecordSha256": "d0f70f888da788e1b25ab20846546395a2b2bc840dd935aa23eb96ec46862d50"
  },
  {
    "id": "bea-sheet-049",
    "sourceRecordSha256": "385f25583036e0c75bf8c742ffa51b7a0625dd2fc9195d9eba59459c52ec80a2"
  },
  {
    "id": "bea-sheet-050",
    "sourceRecordSha256": "d93d32223452c48843336581a2afff59d167f67a1952ff68dc2306f07d3424d1"
  },
  {
    "id": "bea-sheet-052",
    "sourceRecordSha256": "4016a1bb2f8ef2dca2d3031b375746538a326b870d7f13e1ab559723d93bade8"
  },
  {
    "id": "bea-sheet-054",
    "sourceRecordSha256": "b414e55d12cb7e4be294f843f7cf65a04c4f8135db418c8cf13f8aaccb1b7d0d"
  },
  {
    "id": "bea-sheet-055",
    "sourceRecordSha256": "9f0769f590fdcf4ca447afd1c8f2d52d0f4403760aa2270cc4cce80d2a9eaf6a"
  },
  {
    "id": "bea-sheet-056",
    "sourceRecordSha256": "411db6e5de42c971a5fd8fed7a5e671c39964bb4db74b3b4f46f7702b3226ba1"
  },
  {
    "id": "bea-sheet-057",
    "sourceRecordSha256": "4a102225f3c4d56e2c9d7eaa98e82ab3ac242b2e0cf6bcfc246b8e5ba30f2032"
  },
  {
    "id": "bea-sheet-058",
    "sourceRecordSha256": "c84625ce3688bc9129a227ca5fb3091ad65cca50e43e5f420504a16afbda6452"
  },
  {
    "id": "bea-sheet-059",
    "sourceRecordSha256": "fdb9b04bb743775e34fcd410b77a37a12170680a2a7fb3e98f02216c4a12b924"
  },
  {
    "id": "bea-sheet-060",
    "sourceRecordSha256": "9af2044d6fbc1f1f16d0793a766784f049ba1f84c3f68fe166923f5d3c3ec822"
  },
  {
    "id": "bea-sheet-061",
    "sourceRecordSha256": "ca756b5f56f7613556cdd27718f0663abe057e0ec72b0d99c3f8d25f927ffe60"
  },
  {
    "id": "bea-sheet-062",
    "sourceRecordSha256": "ca694c2e3cfc076dd5debeec365e7510463590007ac1235c4debedd6191bace4"
  },
  {
    "id": "bea-sheet-064",
    "sourceRecordSha256": "9350dc45cb8e31d669fbcae37d9a0f9432f8dc6aa40ef1036b7a7aec69914fbf"
  },
  {
    "id": "bea-sheet-067",
    "sourceRecordSha256": "b7d5bc450e66d658d04d5b9143370acb74e8fdd6c22a6c4bc323aaf3263f4bbf"
  },
  {
    "id": "bea-sheet-068",
    "sourceRecordSha256": "c019332452deda0242857f89d3d09317a79b1578798f3381c98cea808a773ec3"
  },
  {
    "id": "bea-sheet-069",
    "sourceRecordSha256": "372012facdfe618688cde1cefe8e3695b480683999789f285f1fa7b0208c486c"
  },
  {
    "id": "bea-sheet-070",
    "sourceRecordSha256": "80e37fba352bc87923635fcb9a3cc59791b9edc20609fed8a86140f0b2e0dc9d"
  },
  {
    "id": "bea-sheet-071",
    "sourceRecordSha256": "f09bf4de9e195043b0b9af4fa84757628e300dceda4157cf930381307a7d538d"
  },
  {
    "id": "bea-sheet-072",
    "sourceRecordSha256": "7fbd61a90ad48ce96c93bd0dac759d330683f02b7a4bfae66fde5f3e7fa3a3bf"
  },
  {
    "id": "bea-sheet-073",
    "sourceRecordSha256": "416a1cc1bb4d523935cbabe707a4f4d242507166e4a7ecb33b6e79e243d571f2"
  },
  {
    "id": "bea-sheet-074",
    "sourceRecordSha256": "9dd405272a2df71528ee4354cd2ce5050d8227a3c6475e9d2b99dc0523162846"
  },
  {
    "id": "bea-sheet-075",
    "sourceRecordSha256": "2ca4d4c4f8bef6e30a886e817b8d6f60e51591498e653f24814460c486d5676f"
  },
  {
    "id": "bea-sheet-076",
    "sourceRecordSha256": "fb579e1ecc64e257dd9a6b6ebb313853b275f9e932862eda6f13ade5fd6bac24"
  },
  {
    "id": "bea-sheet-077",
    "sourceRecordSha256": "2692d422a3b1e4420a1f55e74f1102a7946b02cb9c0203227656a86b612f6e70"
  },
  {
    "id": "bea-sheet-080",
    "sourceRecordSha256": "e4ebc17dc1baf81d1c1a2822dda8ee9743246e4b6d9a3e9542635c542be5d385"
  },
  {
    "id": "bea-sheet-081",
    "sourceRecordSha256": "6d4ab9a6ea056180b92ddf92d29d3af8e3d23667f3763189943ca20e08b5f7dd"
  },
  {
    "id": "bea-sheet-082",
    "sourceRecordSha256": "46dd25b8771bc82ded7970e15aee54b2eb89ac92cd76ed6e627118022b50fbff"
  },
  {
    "id": "bea-sheet-083",
    "sourceRecordSha256": "bdcd16b67ec9ffaea61771786c315b8f1c2d235af4d71b33b855fd2a607f1251"
  },
  {
    "id": "bea-sheet-085",
    "sourceRecordSha256": "5dc760d2c614e241b253f082c6b8ff62d6308ec5f659e594bfd1129a48160c58"
  },
  {
    "id": "bea-sheet-086",
    "sourceRecordSha256": "2be69518963588336a8b0a9429c8b1f0beb9c539c449a5b2fd85014095762cd9"
  },
  {
    "id": "bea-sheet-087",
    "sourceRecordSha256": "1d4f908088fdc09b66087f53ea3f92c1ef04498365a2a54c95652b84c6ed0cf1"
  },
  {
    "id": "bea-sheet-088",
    "sourceRecordSha256": "e62db42ce47b562c0efec70d9ef84f0196b6a76c518d15ad07da6b608cb7dcdc"
  },
  {
    "id": "bea-sheet-089",
    "sourceRecordSha256": "dfb4bd4604a78bd7b84a0f1b04aba2bc3f4cc5208f27924fbed4c8c8e65a3f9e"
  },
  {
    "id": "bea-sheet-092",
    "sourceRecordSha256": "7525e1720071f33e972e952b55aa85135a4580fad19e4985d7935035813e8848"
  },
  {
    "id": "bea-sheet-093",
    "sourceRecordSha256": "bd160b5983185564581f94f539f71624b256131350d8cc9d813c4bb1fc998254"
  },
  {
    "id": "bea-sheet-094",
    "sourceRecordSha256": "a0f22e24a37951e05f341bf7f966493bae91064a9e195ea59e612515997769c8"
  },
  {
    "id": "bea-sheet-096",
    "sourceRecordSha256": "08502bfd038f67564610bd18ccb12ded82e8e900ee7c72c11c90d3dea4d1065d"
  },
  {
    "id": "bea-sheet-097",
    "sourceRecordSha256": "30e57c1b1daba9e2dd549885488feb22c9002f53e275aa13d866b301721e771d"
  },
  {
    "id": "bea-sheet-098",
    "sourceRecordSha256": "beb0f84c8b168a05997962040b327571054672781e73325097378801da4c1fa7"
  },
  {
    "id": "bea-sheet-099",
    "sourceRecordSha256": "b38144f0c1a3e879dd3b9be59fd3a11da2aa526d096de3a2bb9edefea70c41bb"
  },
  {
    "id": "bea-sheet-100",
    "sourceRecordSha256": "4c3001c361b38c8eb6b4959ef2137a49f718dac8c4d1c8bb05a2ee7df42cafc1"
  },
  {
    "id": "bea-sheet-102",
    "sourceRecordSha256": "f09f59145f366e4e319f8c1a1592773aded022eb8009b6fa99b3fdaa895901d1"
  },
  {
    "id": "bea-sheet-103",
    "sourceRecordSha256": "8f536a01cb3e5d7d357f41cb1ad69964686814276cd1a8942efdb918d4c9b833"
  },
  {
    "id": "bea-sheet-104",
    "sourceRecordSha256": "e284010d110c2e8ca398b24d10e7f67b0ad065a85e8a4726c69d71bb96610e2a"
  },
  {
    "id": "bea-sheet-105",
    "sourceRecordSha256": "a721d9e928e3ba3cd16e94a806da7c43ccbfd024346e3d8bfbf4a2be406fd93c"
  },
  {
    "id": "bea-sheet-110",
    "sourceRecordSha256": "735953493c8e4130d19965e1344c5c6368eeef59a77a8433cb253a8c0e0df793"
  },
  {
    "id": "bea-sheet-111",
    "sourceRecordSha256": "536a4305ca79f1f9ef71e9e4991b612682f2c9571fae7125dd5c188e55d7c4a8"
  },
  {
    "id": "bea-sheet-112",
    "sourceRecordSha256": "e43b74f8fa042eda51b0d2f13a345d088419536bc3eb5fad3d36e750e7ef1716"
  },
  {
    "id": "bea-sheet-113",
    "sourceRecordSha256": "f1038ab70893adbdf98f43940fadc9c6c75a9a2dffcc54663791445918602834"
  },
  {
    "id": "bea-sheet-114",
    "sourceRecordSha256": "164284dc3cd32f72af16f4e732b630e845026c908c9649121af85a9afaa3cb72"
  },
  {
    "id": "bea-sheet-115",
    "sourceRecordSha256": "fe606bd26c0613aaa533c9979d370e6b681f63a900382d921bdfe4457e96b559"
  },
  {
    "id": "bea-sheet-116",
    "sourceRecordSha256": "eac390f61de27c91b6f55298d4f780c85a8452e029bd225e07e5c02bb0713582"
  },
  {
    "id": "basso-product-1",
    "sourceRecordSha256": "d311926a74ab0b80bdc7ee52b523588fb22ce61637138c38c77fc2213e466572"
  },
  {
    "id": "basso-product-10",
    "sourceRecordSha256": "494b0b61d65d922329d9f2f6b696d0f28a01994754be7f12d2e1b7599c115f02"
  },
  {
    "id": "basso-product-101",
    "sourceRecordSha256": "22bb284b971c1a90d935a098ed5fe9a5f4fae1c211e5d6dd92b69c3f29fdb6c3"
  },
  {
    "id": "basso-product-102",
    "sourceRecordSha256": "bc3f5c39f3be778b77a10505ff7e4a7ef96f1158643ee8711a07ad4dd896f90b"
  },
  {
    "id": "basso-product-103",
    "sourceRecordSha256": "e5c2e7efa3b44522ad0750a340f6a7c4bf5ec0098047007662ed4c14b3e25ff6"
  },
  {
    "id": "basso-product-104",
    "sourceRecordSha256": "18efd691d3cdba9f6d600f3e6e9fc4b6212dea991e18488ebff13caea9ed9b21"
  },
  {
    "id": "basso-product-105",
    "sourceRecordSha256": "34a355e159713dcd5a5fc6cf03787d7de79800f81698b7ec7f962e8023048dfd"
  },
  {
    "id": "basso-product-106",
    "sourceRecordSha256": "8fedfdf1442530d5b5a373c84a80f016f122b64c5e2bd2b8c45bfd8f9ead15cf"
  },
  {
    "id": "basso-product-107",
    "sourceRecordSha256": "57f9707df8e08c04db41edd3ddb8d85183dea5c0b2dd677b6fb644a9408fb65c"
  },
  {
    "id": "basso-product-108",
    "sourceRecordSha256": "84c8dfee023c44a2a4e1889e7397029462c901579d3ae91652834e7ecdb61e3b"
  },
  {
    "id": "basso-product-109",
    "sourceRecordSha256": "1041ca0cb53affd536e6d24c59d65fb0f7436f98d74933ddfbbb6580a021acdf"
  },
  {
    "id": "basso-product-11",
    "sourceRecordSha256": "a611e9663b94fcec3a23b1678538c551c4544dbf339621257ba19c70be1e2b47"
  },
  {
    "id": "basso-product-110",
    "sourceRecordSha256": "1b5df74fd6f65b5d44d433d1cf5a6b14a09a631e3f6625d9b51e57d7d006f56d"
  },
  {
    "id": "basso-product-112",
    "sourceRecordSha256": "7aa0a5f06e6e9a29e967873c1934745453ae887f4528221ede2eb7f343ebdff9"
  },
  {
    "id": "basso-product-113",
    "sourceRecordSha256": "c4279720756e1b3560ae8da9913bb95a8a266df7dfec41d7170d1a195651e790"
  },
  {
    "id": "basso-product-114",
    "sourceRecordSha256": "018f56676430faf6a835656d4c4a8ad094241a248dac86d46aca28b754f55e0f"
  },
  {
    "id": "basso-product-12",
    "sourceRecordSha256": "fadd52ebf071c9c7a516152b1f079d973c13bac16c70681c5d0bf4cedf6bca68"
  },
  {
    "id": "basso-product-13",
    "sourceRecordSha256": "1b2c7035bb63313c313fc5b935973401eedda1dc1653c0c26d5a25661cc4ee3a"
  },
  {
    "id": "basso-product-14",
    "sourceRecordSha256": "198f81990deabdb38d06b4f4c01952d438e66af7ae3b368b06c5ae09d9bb4d99"
  },
  {
    "id": "basso-product-19",
    "sourceRecordSha256": "5b960622895b37fc7cb542d3d50aa759b9267bddc42ce93bc4bc4e3d9a801917"
  },
  {
    "id": "basso-product-2",
    "sourceRecordSha256": "2af0806f05492d2080e2002fa03b851404e5b2b83b3b09c31cad8ba1d8fe30e9"
  },
  {
    "id": "basso-product-20",
    "sourceRecordSha256": "252372c8723a719ba58e42b5f4fe18c9d4950fba37de057a9e96cbe7b77dfdab"
  },
  {
    "id": "basso-product-21",
    "sourceRecordSha256": "f6ad162035236a7e17ce87230bf27c5982e671bc33f3889c6972cf4943d5f96c"
  },
  {
    "id": "basso-product-22",
    "sourceRecordSha256": "ac61568ce28b6f0bad8e6fbf56985b9f8c8e45df0bad216539670e96d16898fd"
  },
  {
    "id": "basso-product-23",
    "sourceRecordSha256": "469f8322d3c9b2b88edb6fb6025116338fe021517aafbfe4c1021f7ced774711"
  },
  {
    "id": "basso-product-24",
    "sourceRecordSha256": "219b09463557bed9906efd5f5e9d2f4713776fe10e578afb1e9d61bbb4fc3469"
  },
  {
    "id": "basso-product-25",
    "sourceRecordSha256": "d7e6a8d61730525555decbcd8689ad4612142b10855bcf69c5429eea873ede41"
  },
  {
    "id": "basso-product-26",
    "sourceRecordSha256": "02b3cb0fe071af76ab13b3e96db1c59dfaffdf4f7f6fb531de1c11734c8e9f89"
  },
  {
    "id": "basso-product-27",
    "sourceRecordSha256": "ad0d7f94cdfea0434cdcbfdbe20cd5ca5f88573cc83c3792d973c324c525a431"
  },
  {
    "id": "basso-product-28",
    "sourceRecordSha256": "7c85adbea0dda634732531ea1b7366e74afb0fee2c238caad1478ec15898c0fe"
  },
  {
    "id": "basso-product-29",
    "sourceRecordSha256": "0a19bfb62e7f641eb48584112ceef60f33cc96c0de2a1c9423a516b449614baa"
  },
  {
    "id": "basso-product-3",
    "sourceRecordSha256": "733d0d53186a77ecdab73bab30ffc94a5f10bf012b6bf866ac1d04fd3bb67d73"
  },
  {
    "id": "basso-product-30",
    "sourceRecordSha256": "3a243a17080d8a9c51bea09b527b60fae6351af834c048250b9e631894729eba"
  },
  {
    "id": "basso-product-31",
    "sourceRecordSha256": "79d824fa517c5de1c51eb5998dde7ba01755dab7533945a4d131589d35ca3cd8"
  },
  {
    "id": "basso-product-32",
    "sourceRecordSha256": "15e6030bc86702532fa4b677c3103950d6d248903de805deccc3a56f7c3dab81"
  },
  {
    "id": "basso-product-33",
    "sourceRecordSha256": "d52e32869e76a53352b1013173eafd5e3984ec0da149b826d1add59718728b79"
  },
  {
    "id": "basso-product-34",
    "sourceRecordSha256": "14914f9091707bba1e06d0ebb884094f604960cde49e41d03d571dc8660732c1"
  },
  {
    "id": "basso-product-35",
    "sourceRecordSha256": "d7b659e9a506e4ecabfe05f6445e1354a9ffe99162ea792e7c2e4299a4e5689a"
  },
  {
    "id": "basso-product-36",
    "sourceRecordSha256": "fdea7ac237834a16d061f5ef6bd9f301029e06351354ac9c9e2dc87f763172b9"
  },
  {
    "id": "basso-product-37",
    "sourceRecordSha256": "6e7248c9b818fce6802cfc2ca5e9d2cffe79fd36f6d6bb099ad41af7023dd522"
  },
  {
    "id": "basso-product-38",
    "sourceRecordSha256": "b2a211f0377d8441bd8e4fd629594a8ce40fb1cfbafd1412688049f00f68372b"
  },
  {
    "id": "basso-product-39",
    "sourceRecordSha256": "bdf3fddeb9998a00a4a4a1b55695789892ad0e8ce4972a7cefb69a794ae84164"
  },
  {
    "id": "basso-product-4",
    "sourceRecordSha256": "6ed6ee8907bcdca0621b7ae550bd735adc27adfccee5cfe0b4aa771da1275955"
  },
  {
    "id": "basso-product-40",
    "sourceRecordSha256": "04fcac69b58ece91c6a86bcac7010314597d6e8ee696529e31881c150d0035b7"
  },
  {
    "id": "basso-product-41",
    "sourceRecordSha256": "50d4d9f6bc8ee5604cab783338d071c07df87dbe996ee1ae83976983d2ef4a8e"
  },
  {
    "id": "basso-product-42",
    "sourceRecordSha256": "6c7fe6b8123f697ceacff5751786f3c056f6d8315f05f29c8a7f715cc320f68c"
  },
  {
    "id": "basso-product-43",
    "sourceRecordSha256": "ac33eda33098743e1eccde1bf7ee7ede59169ad535d9e2550f0bc7aea64aca1a"
  },
  {
    "id": "basso-product-44",
    "sourceRecordSha256": "8f4d2fddb34be6772d8fa2bcb83ea9027e766761ad171f361c52a6cf1aa125ec"
  },
  {
    "id": "basso-product-45",
    "sourceRecordSha256": "2e918660026c18179ead5360daec9fe3a259893834ea2abe15abffcb0fd77171"
  },
  {
    "id": "basso-product-46",
    "sourceRecordSha256": "985689671842b281a05c395d5f025af53fabf2c662ed1ee725874fde399011d5"
  },
  {
    "id": "basso-product-47",
    "sourceRecordSha256": "607c8df9e5103e16e49e8608abc185840a1e4e896b0e0d37d3600fb16985fc66"
  },
  {
    "id": "basso-product-48",
    "sourceRecordSha256": "1484b99598ef1aad70d04b6a9c3472c50bd473a7cc4527b999479d47672a941b"
  },
  {
    "id": "basso-product-49",
    "sourceRecordSha256": "672b4a3c96b3739d6ed499e1df1f37b43d6b70cad599995ae504341e86f7d386"
  },
  {
    "id": "basso-product-5",
    "sourceRecordSha256": "01579f4126a52a8478c1af2693c611abb0aced6fb51aaac39dd6427f389fc723"
  },
  {
    "id": "basso-product-50",
    "sourceRecordSha256": "e2efa379fc3cb1dca2294fce0d2102e5ad1476eb4f640e0f3765fd4d35863919"
  },
  {
    "id": "basso-product-51",
    "sourceRecordSha256": "3b367902ae7a22e2f0dc4a947d4250cd82dc28573923f4f81db4d504c58989d3"
  },
  {
    "id": "basso-product-52",
    "sourceRecordSha256": "02498b4a49f09677f879386b77ffa8887597ce86700c1078827f572f46d992e6"
  },
  {
    "id": "basso-product-53",
    "sourceRecordSha256": "43e9791aa23da6e79b3eb632d4fc404f985d356edd4692492a67820258a38c40"
  },
  {
    "id": "basso-product-54",
    "sourceRecordSha256": "ec4f6e7c50f5fddc39da5c316b12af485c8418cc334e884a53471a944fe03dae"
  },
  {
    "id": "basso-product-55",
    "sourceRecordSha256": "04570e3ffab56bcd6c721a5caf3b1122cbc2c937159db8d2ab4b44ded246e36b"
  },
  {
    "id": "basso-product-56",
    "sourceRecordSha256": "fa7a59b8deb83e7745776184d11039bbc72d94fdd0f89017b8f5480a397c3ddf"
  },
  {
    "id": "basso-product-57",
    "sourceRecordSha256": "34a42d9dd275eed72f5cee6fc317bd9fb5a4faf7bec38094abe097fa27f98939"
  },
  {
    "id": "basso-product-58",
    "sourceRecordSha256": "193ba341283a66dd35750664e7cd41503a0501d2eec43a765a79e2cdd26b530e"
  },
  {
    "id": "basso-product-59",
    "sourceRecordSha256": "65473f396999e848a014954a34a8e2c32089c3902cca3d8e7db76d27f13882d1"
  },
  {
    "id": "basso-product-6",
    "sourceRecordSha256": "f7f401ea237614047406ccb771a4aa09d06c6ce91214d7a5507b8cbfcf8ef580"
  },
  {
    "id": "basso-product-60",
    "sourceRecordSha256": "4ee95d1f1af4c282f588611fcda48b9e60f4fb0867e44d685969ca69af07e726"
  },
  {
    "id": "basso-product-61",
    "sourceRecordSha256": "70e1ae5f5542683530834723e77367f8f4d31ef658b6fb491fb150712764860f"
  },
  {
    "id": "basso-product-62",
    "sourceRecordSha256": "192e097fcfa0a5ff9d7170d204e0eafc9b80c25db6f8632515ce083791f9e93b"
  },
  {
    "id": "basso-product-63",
    "sourceRecordSha256": "6c69633aa9af05ad3664874df9d571719662bb0404797ef9cb5fcd9fa92199f9"
  },
  {
    "id": "basso-product-64",
    "sourceRecordSha256": "dd2125a247e44f70f1cbdb5b4b31c83ec1375def12ecf48861162ee273320382"
  },
  {
    "id": "basso-product-65",
    "sourceRecordSha256": "2fd0f9d4790619cda218b79b7620bc6e068e9ce9db3c3aca5c0d1333ad31441f"
  },
  {
    "id": "basso-product-66",
    "sourceRecordSha256": "72fcce33d8392ae6456437886cc36e3ca7cf73e237cf050392748f76608bed54"
  },
  {
    "id": "basso-product-67",
    "sourceRecordSha256": "d0ed3642b63c420b1acb6e19a595170985f189ec3ee8a3ce045a71bd0ea00598"
  },
  {
    "id": "basso-product-68",
    "sourceRecordSha256": "96a9f116ee3d4e1cb678637c97b3b205892e1ebded73b6a93094491292ce5784"
  },
  {
    "id": "basso-product-69",
    "sourceRecordSha256": "f69378df73f1c0e2b8f53d11c09054b0dfc875e639d743c3019b0601c9da95d5"
  },
  {
    "id": "basso-product-7",
    "sourceRecordSha256": "abd695ab30a408abe074d4aa643d45114e2dac4e9d63e91a2da01681c3958090"
  },
  {
    "id": "basso-product-70",
    "sourceRecordSha256": "01894ade5e4f2dd13c8a6a07c228d770f3aafde82846396a1125b150262c08b4"
  },
  {
    "id": "basso-product-71",
    "sourceRecordSha256": "f22b949ae3eb549b6246711538bd1731c122e92908b47f9d13f368871d5d5fbb"
  },
  {
    "id": "basso-product-72",
    "sourceRecordSha256": "5b0d3bb7839751ae7bdde65e0249a35bbfff7bd6d30390876e28c8dc295761b5"
  },
  {
    "id": "basso-product-73",
    "sourceRecordSha256": "d444544dbbad21f6b4af66ecf291cb7c4ce68a4ee26a48ac69c31b9b37956f65"
  },
  {
    "id": "basso-product-74",
    "sourceRecordSha256": "7324b555e2f770a99c23c863849cb3d3b1970d481228ea542c1aca554d251852"
  },
  {
    "id": "basso-product-75",
    "sourceRecordSha256": "ab20e2a33b3636b99f41d87ca04e9d45e465a5b78f6f8a2725f56171caa60c1b"
  },
  {
    "id": "basso-product-76",
    "sourceRecordSha256": "5fb43449d9983eb12190c9874a032393f46697a587d4b91a53c3aad8a6924742"
  },
  {
    "id": "basso-product-77",
    "sourceRecordSha256": "76e92901225ae759d82b74779adfb29e626bba4913649ef120386f4676f7cf32"
  },
  {
    "id": "basso-product-78",
    "sourceRecordSha256": "dbf9c8e7c034dbcca54c7a23bb70c4c1968db0fc2ee177896abc7481f5faf0d1"
  },
  {
    "id": "basso-product-79",
    "sourceRecordSha256": "b4f1e94fed59bd794c6a07681efd62fbe04d7531748e2b8485f1acbe2239ad75"
  },
  {
    "id": "basso-product-8",
    "sourceRecordSha256": "2f0425a2c7313685fa5beb7f664a25ed2647df88218eb8937c63be397f19c673"
  },
  {
    "id": "basso-product-80",
    "sourceRecordSha256": "b498d0974c3243c658c19dbed693621230fad8271a68c533808af171bc20cd52"
  },
  {
    "id": "basso-product-81",
    "sourceRecordSha256": "73569693ce239cc42d9b56c1451d463e5dd4e852da820cd581066dfbfbdb0100"
  },
  {
    "id": "basso-product-82",
    "sourceRecordSha256": "9b3dca5cfb7511c3611f968c5d7f752313c8d86d67b6bf9db99a97a1deff0f38"
  },
  {
    "id": "basso-product-83",
    "sourceRecordSha256": "b04376cab9c89d458823149848657d593fd2fb85e9afe844edd40048cf007eef"
  },
  {
    "id": "basso-product-84",
    "sourceRecordSha256": "c45e643fe50c215b1340bb2244f9a1898564b59c1ff6712877f57f85e4bfb6a6"
  },
  {
    "id": "basso-product-85",
    "sourceRecordSha256": "441f18189c75f7ec00d72ab34fe9279c83ff38c0c65363af182c14efa64ae0f1"
  },
  {
    "id": "basso-product-86",
    "sourceRecordSha256": "bad6145619f63c2f594eb343d19e17a5c5910a9e8ef8024c3ac431f56b509920"
  },
  {
    "id": "basso-product-87",
    "sourceRecordSha256": "2ab3cc9b58649591a12727df8ffe20b872bc310f8032ed80dbd23a562b1b0a1a"
  },
  {
    "id": "basso-product-88",
    "sourceRecordSha256": "2e90671a7091b42b0a62450527651a15a1dfd4adfe96f55e39d08172c928ba4a"
  },
  {
    "id": "basso-product-89",
    "sourceRecordSha256": "f1d944164fe473809439d2e677b88f693ade0d7a05de07f2b0d1ac6e8dbc0cf1"
  },
  {
    "id": "basso-product-9",
    "sourceRecordSha256": "1b3b924bd25fe736dd80757fd3469f6969d5523da999edce8ce28d9a1eddce1d"
  },
  {
    "id": "basso-product-90",
    "sourceRecordSha256": "660a851dcd351b01fd704548a630a67e068830b3b48a1d1a9bb3940a1ef79d63"
  },
  {
    "id": "basso-product-91",
    "sourceRecordSha256": "bd14bfaafd4e9531f2680a615d3631aa5422f9e39cc53e55cfe1897cfd7e7f3b"
  },
  {
    "id": "basso-product-92",
    "sourceRecordSha256": "d9d70614d2fbc422c0d7a6136d82038eff321556a2c1e0e47c35cf80879e94d5"
  },
  {
    "id": "basso-product-93",
    "sourceRecordSha256": "42b799f0195dfb8eb305b0307da00e223cd1fd20b6f276b6bd85c2f43fbe69fd"
  },
  {
    "id": "basso-product-94",
    "sourceRecordSha256": "cab108de8ec5fc44717badf9602966c9e4f7bdc3f240a45529e341abfc055476"
  },
  {
    "id": "basso-product-95",
    "sourceRecordSha256": "2ffa6be3666b8c09e803e95b380c6f088330e48ff8120049e3b354a6adde7f2b"
  },
  {
    "id": "basso-product-96",
    "sourceRecordSha256": "22059a623eb39a2ea5d288bc54d32cd8c079b475b4cfca9fe9409e0ea0e26ee6"
  },
  {
    "id": "basso-product-97",
    "sourceRecordSha256": "684f663a33f8c61b8ac6e52e6373c11db06bb5596c352524f6a72797b9fe1024"
  },
  {
    "id": "basso-product-98",
    "sourceRecordSha256": "8e2c43d5abe974873e34593bcd244b682d180aa1bb147cf43ae095ee55de039d"
  },
  {
    "id": "basso-product-99",
    "sourceRecordSha256": "6de71660fc0ab63ab6491a7c3d21b747d27412a61288d40397b4604700372b17"
  },
  {
    "id": "soartec-product-000",
    "sourceRecordSha256": "a800cd38ecab25c0d319602cfdaaaa1430e441717bb5332e27e7494ad7ac928e"
  },
  {
    "id": "soartec-product-001",
    "sourceRecordSha256": "6eb823d970cfa8447134cbca06153a80d5f3b4821727a6dde0fef8983e5d8b73"
  },
  {
    "id": "soartec-product-002",
    "sourceRecordSha256": "5e443f5c3e1447b39dc9db006fc245c1f7a430ba09868fa332dad4f82e29f2a7"
  },
  {
    "id": "soartec-product-003",
    "sourceRecordSha256": "f0345831791483391872047e2d38e110950e352c9a4afb03356d92bf12f76671"
  },
  {
    "id": "soartec-product-004",
    "sourceRecordSha256": "6025bdb2eabcb5524371149695e0f34d5e7a976aaa4f13a33e788d26eb67aa0b"
  },
  {
    "id": "soartec-product-005",
    "sourceRecordSha256": "520883e8725a82c00e8d918453b429bdb9421ef5bb3ecb590a61842d6f4e5064"
  },
  {
    "id": "soartec-product-006",
    "sourceRecordSha256": "c0db81619a582a197ca1a0a8912196b3480d3e32001492e96ec8322484616083"
  },
  {
    "id": "soartec-product-007",
    "sourceRecordSha256": "5b9316a9eaa6d0725cbe928c2933dae89e1148c5b887c1d75caaa23c0a468cf2"
  },
  {
    "id": "soartec-product-008",
    "sourceRecordSha256": "70bb27f16c92156d3da616a84bacbcd76423530276023c73e9cb0ce7d212241c"
  },
  {
    "id": "soartec-product-009",
    "sourceRecordSha256": "802a96846be00c21afdc1d840566d7518893196d4d451dc44dd1f8a4c5cacbce"
  },
  {
    "id": "soartec-product-010",
    "sourceRecordSha256": "6b1ccb6f4f43748b1b943bfd1df7a59c314f7a3923145635e33d35c4965a11e5"
  },
  {
    "id": "soartec-product-011",
    "sourceRecordSha256": "84af754b4cd97b634f3c7b33b97ce8e06a6cbf9ab09b4f6d90c56f75f6d96486"
  },
  {
    "id": "soartec-product-012",
    "sourceRecordSha256": "b5c5687900d3eb651636f003a451e13755ef6d8fca092c2b295c070ffe2ff106"
  },
  {
    "id": "soartec-product-013",
    "sourceRecordSha256": "0609439e060730336e6d11d51a81ead9572bfb6dbda1996330b58a6a40a7da07"
  },
  {
    "id": "soartec-product-014",
    "sourceRecordSha256": "d671d117aebcfc38360d1c710ee9578439d296eb88de34db3fb618cf6902402f"
  },
  {
    "id": "soartec-product-015",
    "sourceRecordSha256": "698e8ac896a2844accc0993896956bf6a040101deeeb276b92e9b1f601161981"
  },
  {
    "id": "soartec-product-018",
    "sourceRecordSha256": "fcdd2aaa360a1e6ccecc8fdd95a9b22c036e7ae376bea6011cfaa2751f0c0eae"
  },
  {
    "id": "soartec-product-021",
    "sourceRecordSha256": "e54b5dc8de02204a3ff6133d88ae588232a165d1646c2130ff1942f9a0159d80"
  },
  {
    "id": "soartec-product-022",
    "sourceRecordSha256": "b6bb00fab27c330b25167592a1c19850c098a3b33d59863e8a7548a7c22889f6"
  },
  {
    "id": "soartec-product-023",
    "sourceRecordSha256": "4326c2411ca61fdf45b8fa46ee3f7ed223c2eb1bd76b07621bca435d6ba8854a"
  },
  {
    "id": "soartec-product-024",
    "sourceRecordSha256": "3f413279267035df41dd82064cb94e3eeee17b40bc5711b19e7ff33ea8168acf"
  },
  {
    "id": "soartec-product-025",
    "sourceRecordSha256": "a56b2262f5b710f194af225896a52b83a00735fbf96d393c7058e269e94f1c35"
  },
  {
    "id": "soartec-product-026",
    "sourceRecordSha256": "18dbf3ed758f6b3f730a6a3229f935f302a740d09387fbb7d0726336c827dd1f"
  },
  {
    "id": "soartec-product-029",
    "sourceRecordSha256": "d75ed03f5163cbe5b7b388eb2769802d38e3132f63681cc86c9a81e74cb1dcb1"
  },
  {
    "id": "soartec-product-030",
    "sourceRecordSha256": "831b99316ff625cd28f52d0e5092bf3a943375cc52322aa8d80d1638886e46af"
  },
  {
    "id": "soartec-product-031",
    "sourceRecordSha256": "ad763d1d5f74e977b7923835cf9d5c00d1abf1588e7dae788a470b1c166c39b8"
  },
  {
    "id": "soartec-product-032",
    "sourceRecordSha256": "0b38702f2f451d1ede4c7c88b51f53d1bebd9a7dbfee48afc4a22879bb11158d"
  },
  {
    "id": "soartec-product-033",
    "sourceRecordSha256": "b62070a0466871f4e1a3290edb1eeeaecb0df4b6c4b12d726ed84e0083eeae32"
  },
  {
    "id": "soartec-product-034",
    "sourceRecordSha256": "9c12f7730de965bb6ae1f4c47f45f7cb5f705aa5a64642ebe8864622f30574cf"
  },
  {
    "id": "soartec-product-035",
    "sourceRecordSha256": "68b8b474f43cea08ed4275bcda7a37a6154fd3a34500ff9693b33421a2b95d89"
  },
  {
    "id": "soartec-product-036",
    "sourceRecordSha256": "10393b3b202ac60e0f531d2f0921acc1234ce1c54e52d7507feab93be567b735"
  },
  {
    "id": "soartec-product-037",
    "sourceRecordSha256": "2f69b8f17cb3d2d529e9fc653714c15c0e300e79209e2b484adc1037377aad5b"
  },
  {
    "id": "soartec-product-038",
    "sourceRecordSha256": "95d508594510d46a9d6588b702715f3c27ec3da68f8057a3915a238a77199807"
  },
  {
    "id": "soartec-product-039",
    "sourceRecordSha256": "14701d9d726e6ccc7e9905d5b4cdc99579d3fd69cef54e7af5d0cbf4b113bc6c"
  },
  {
    "id": "soartec-product-040",
    "sourceRecordSha256": "0c86f54c495a0b0819abc225e2b199e99ba902c4e7ff4d6f438781b051166b4a"
  },
  {
    "id": "soartec-product-041",
    "sourceRecordSha256": "4a90d4bf33d2cc1137099f71ef40d1add5698f581e1736e7cd1f1d81617a6091"
  },
  {
    "id": "soartec-product-042",
    "sourceRecordSha256": "05c418cc2a6030fa5df1c89992bc482461edc39a53e554fb648b3bce1ff2083d"
  },
  {
    "id": "soartec-product-043",
    "sourceRecordSha256": "d39f654e10afbdb0b7bf1747300cfde1bfb753f1e9dd95e6778ddac57630a214"
  },
  {
    "id": "soartec-product-044",
    "sourceRecordSha256": "bcd5abf881e521a14173b86ace1e1cfbbfe1019588b0bf0b7ea0b98bc7be3352"
  },
  {
    "id": "soartec-product-045",
    "sourceRecordSha256": "c7d376f2c8648588cb74630f2e4bbf03b9a121d594d1345f8554b1d69b16d33b"
  },
  {
    "id": "soartec-product-046",
    "sourceRecordSha256": "8cc9a3af62420f2b66e122240a37f46b378fc31b953238d3a35db1a1a8a004c5"
  },
  {
    "id": "soartec-product-047",
    "sourceRecordSha256": "69d135350a1d9fcf554f16336990f87dba523d66b1026c6339d69da08688955b"
  },
  {
    "id": "soartec-product-048",
    "sourceRecordSha256": "65a8e75e70e82ad2707494083a5a248d60ad998abcfaf1104936594493402e9c"
  },
  {
    "id": "soartec-product-049",
    "sourceRecordSha256": "9bf8dc8a6c01e7202a145a52fa8d94303d8bcf65274ca13743c13f811d207804"
  },
  {
    "id": "soartec-product-050",
    "sourceRecordSha256": "ca4ebf5a1d456e7fee599b993f23e2c784ba47fc962d1d77b8c98a04f59f6e01"
  },
  {
    "id": "soartec-product-051",
    "sourceRecordSha256": "e06518281a8ba6509508c47f4e5ada8df540ea2ddc2bd4fa9ff2b62c98e8e446"
  },
  {
    "id": "soartec-product-052",
    "sourceRecordSha256": "5360a17165c3a2846dfd2de623e287245db344841e1a73165c12072021d9f124"
  },
  {
    "id": "soartec-product-055",
    "sourceRecordSha256": "3595f4a2e8390dee3a91a420c47cd785a9c6442084379041c71d910f97edbc56"
  },
  {
    "id": "soartec-product-056",
    "sourceRecordSha256": "16788dc7c374973fbc0939e668c31a059a78b494263e75eff1dd14fde5b108fb"
  },
  {
    "id": "soartec-product-060",
    "sourceRecordSha256": "033ae376e1f6804c2acd245dbde905d75349fcf35ece3ae32a3d9be574e5e6d9"
  },
  {
    "id": "soartec-product-061",
    "sourceRecordSha256": "a7e814972725b39d196477a4fd8e0cfbd63d14f5d36a8300e0be50d1e4731dc5"
  },
  {
    "id": "soartec-product-062",
    "sourceRecordSha256": "6ec2b83299f8bca0f1d70008e9ce34341cb8841e95fc99595fb2bc17d3178532"
  },
  {
    "id": "soartec-product-063",
    "sourceRecordSha256": "fa7df53fed06ba0c9d2db277fa5bb7b6b4b5987a6f702bf5ee766e2ec2f7629c"
  },
  {
    "id": "soartec-product-064",
    "sourceRecordSha256": "d61b5e6c3e9eb33a182a33007b29e01c02c193b4160afbcaf265b03b2315eaf4"
  },
  {
    "id": "soartec-product-065",
    "sourceRecordSha256": "bdc5be1fa3ca89cce6d8306cbf73926e846bb7c45ad2d3dba31168caccae96b6"
  },
  {
    "id": "soartec-product-066",
    "sourceRecordSha256": "0968286e08153ec7ebae3e0757878c28b324d0ff6635785f7666ada83b49f22f"
  },
  {
    "id": "soartec-product-067",
    "sourceRecordSha256": "0cfc7fbd0a14e527784e77970e580ddd8f27be842820f139f3f74117a10243d5"
  },
  {
    "id": "soartec-product-068",
    "sourceRecordSha256": "635cc22c7707d0e3f0912e7831d048e94f023d12f9cbccd79991f926b487caba"
  },
  {
    "id": "soartec-product-069",
    "sourceRecordSha256": "0b1e4f2c99852531c6413e8f757a7311901a4c7981f91a8cb8622a4ffd548e8e"
  },
  {
    "id": "soartec-product-070",
    "sourceRecordSha256": "4139ef997b9e6c674fe5fb927197a9e522b8583fecbb7aa86fbacc036bc2743e"
  },
  {
    "id": "soartec-product-071",
    "sourceRecordSha256": "c7a347de28bdbf6fa599bb1045a184717cb76029e30a53c78d1714f3fc577c9c"
  },
  {
    "id": "soartec-product-077",
    "sourceRecordSha256": "39206e64c9f2f824dfd3a700d69ffb1c117889bed874676793d6207b285dd7c9"
  },
  {
    "id": "soartec-product-078",
    "sourceRecordSha256": "a4b9c6a8262d1ebf6fdee946775002547db84cc0958a5e68cdcce19a69e9abbf"
  },
  {
    "id": "soartec-product-079",
    "sourceRecordSha256": "cb0ae631221584709dbbb856a0aef859cc8c70f3578b413e3c623e5a4a65b7e9"
  },
  {
    "id": "soartec-product-080",
    "sourceRecordSha256": "2c04c4685fe6a8307ebdafb0ed7e5f17fc57fde9e9dc665831d5fb1cab181602"
  },
  {
    "id": "soartec-product-081",
    "sourceRecordSha256": "e7bebdc0bce881ef91bc7ec8250d7ce5ea034609c59b1612997a035b3e1399e3"
  },
  {
    "id": "soartec-product-082",
    "sourceRecordSha256": "ea017f2f299164f9856910319b195694edb5915418a95927c5248b7271660d9a"
  },
  {
    "id": "soartec-product-083",
    "sourceRecordSha256": "465a1602e78631186b1b698967642899e6e84130dec4cc93228087da38e14470"
  },
  {
    "id": "soartec-product-085",
    "sourceRecordSha256": "12271ef260ae4fcbffa6ceaec26a868701d9b88707381d613f9e76b659e3df04"
  },
  {
    "id": "soartec-product-086",
    "sourceRecordSha256": "5a195a6da5909ab6bcbdfbf76319b4cd6c783126d5cb21c23fc9dbb93413965c"
  },
  {
    "id": "soartec-product-087",
    "sourceRecordSha256": "9bb9a62b9455b9942a3ef07196ab0283d588b18c300b3d340ac61f99060b84fd"
  },
  {
    "id": "soartec-product-088",
    "sourceRecordSha256": "6c0995ca54a35c7049a58d0bc41362fc8b56cfcbbb981e28a576ae2847d43e3a"
  },
  {
    "id": "soartec-product-089",
    "sourceRecordSha256": "26a4b1fd85c9b2d24a3d8ae02f05a4cba64ae9e137cf302eb3b225f9b30e7e7d"
  },
  {
    "id": "soartec-product-090",
    "sourceRecordSha256": "012cdda05956338ae084e35456acc908998abc48cc53e27a55e6f84d84cd35f6"
  },
  {
    "id": "soartec-product-093",
    "sourceRecordSha256": "9495051bb8ec3087eabc6ea7f81c04ac8f27d7ec5d7d356e3497eb0a24aeb2b9"
  },
  {
    "id": "soartec-product-094",
    "sourceRecordSha256": "4e2cf8056bef40d40e028dc880674a1da147eaef1130e9f777b42873dc5aeb3a"
  },
  {
    "id": "soartec-product-095",
    "sourceRecordSha256": "397d4507907ea64ef11b8808e4dced329e4d31191978da6af2556042d3a0e4cf"
  },
  {
    "id": "soartec-product-096",
    "sourceRecordSha256": "148e2ea41e286d6f5168bb81a778a810a5e66b93bed68d790c550d5c0a114265"
  },
  {
    "id": "soartec-product-097",
    "sourceRecordSha256": "c66b79372c6b93039e5a534cd5db6a4261bfc446285c1ea82e4310499e0079c2"
  },
  {
    "id": "soartec-product-098",
    "sourceRecordSha256": "5948c6583add5d2129e8fd5ca175ab81fca2d1c1f6d289ffafb1b5eebdfc62f5"
  },
  {
    "id": "soartec-product-100",
    "sourceRecordSha256": "5d8502de80ba0bf1e65cae777f8fcf21f063c4890f18475cf557be179696da22"
  },
  {
    "id": "soartec-product-102",
    "sourceRecordSha256": "58fde012edd383defe8d959b189c99c34f19df6911fb34fd8911f862e2f1d727"
  },
  {
    "id": "soartec-product-104",
    "sourceRecordSha256": "186d87c4985d0191a35e8ed7d7709db30198682c72b26bcdef51520987e2d73c"
  },
  {
    "id": "soartec-product-105",
    "sourceRecordSha256": "73ea1aaf458836fccecd303d8d9fac3ed7d8aebe823f2be26177d786da585979"
  },
  {
    "id": "soartec-product-106",
    "sourceRecordSha256": "ea93e17178ad4bc872c993a95172b45b9e10ca30ac2920ffec3e492890505140"
  },
  {
    "id": "soartec-product-107",
    "sourceRecordSha256": "5c56d39a5756ddf46fbc8effcc06319604de920dd2e3af6adfa09a2a55730a9b"
  },
  {
    "id": "soartec-product-108",
    "sourceRecordSha256": "1bb504d661c6b1239172be0078a7c9705ed04d8d7957d6b9e605549eabb7ef5f"
  },
  {
    "id": "soartec-product-110",
    "sourceRecordSha256": "bd7531356beb43a9af97b5b2fad5e9433a51bba4a72a5abb94163283d11c545c"
  },
  {
    "id": "soartec-product-112",
    "sourceRecordSha256": "774515bd1a95a626707469dd9f0506001075921faae698eddbf7a29093fd8df0"
  },
  {
    "id": "soartec-product-115",
    "sourceRecordSha256": "af92241dcaca508a32220ca07621263c227535819459e244f6dea334079c4a13"
  },
  {
    "id": "soartec-product-116",
    "sourceRecordSha256": "ca7793fd7f4790a0fb95f158b3c66510b22ee4771f7e8d862280e70eee579b85"
  },
  {
    "id": "soartec-product-117",
    "sourceRecordSha256": "f669c63069919136db43c606e098aff091e1fcf49932e284bd13ea11d28ddef5"
  },
  {
    "id": "soartec-product-118",
    "sourceRecordSha256": "e631735a2fb06dfb0eeb830f465bd8a43b0c6958295672625557f896db5ec216"
  },
  {
    "id": "soartec-product-119",
    "sourceRecordSha256": "d89b860ab0e49e7ffde6cae350faf71f8698c8060f8d8231a3b7b38fc9378749"
  },
  {
    "id": "soartec-product-120",
    "sourceRecordSha256": "1f9e36c21c67366ea3f7bc34e33f5f25b10ddd07f90729473f0575237f85c6f6"
  },
  {
    "id": "soartec-product-121",
    "sourceRecordSha256": "ebc8f46889977834cc5dd3215b7440224edcb74c5f6ae5068478681d4aa797a4"
  },
  {
    "id": "soartec-product-122",
    "sourceRecordSha256": "94cb88e5ecd9afd633620b035faceb7e00ff3fd4f46c69389961f7e711c351fe"
  },
  {
    "id": "soartec-product-123",
    "sourceRecordSha256": "4f00bf20f381c5bb8e35953e9fa594d55c177d109555f3a15f25fe6500c1e0b5"
  },
  {
    "id": "soartec-product-124",
    "sourceRecordSha256": "d233373dd46c360f04b8143729259d4f9462d18a2d861f3cb42e097a81eb97f3"
  },
  {
    "id": "soartec-product-125",
    "sourceRecordSha256": "a9b61a5e9e7adc0854a7848d6b39cb645956d0c7ff2e4db43273cdb4447be3f4"
  },
  {
    "id": "soartec-product-126",
    "sourceRecordSha256": "7871f4514e108cc91154203a7af89bff37fc7b810259eeebbbbfa23583fbc300"
  },
  {
    "id": "soartec-product-127",
    "sourceRecordSha256": "c41ccda10f078433b7cf77b1a76695e59321a2e6447d3b8e114bcb438a713d82"
  },
  {
    "id": "soartec-product-128",
    "sourceRecordSha256": "ff9815b4cb142f2690e6014282b392b7792014ff6a92451d22cfc5f3fa721515"
  },
  {
    "id": "soartec-product-129",
    "sourceRecordSha256": "7b85742427db598e1278119ab3d093e58a097c69b749c2e34d2808c70cb077a1"
  },
  {
    "id": "soartec-product-130",
    "sourceRecordSha256": "64401e51fe0c067776da4814a43c60f092f8a6bac429ef580b51dfd266a7b836"
  },
  {
    "id": "soartec-product-131",
    "sourceRecordSha256": "c2e9c285d2b07c05c05711a82d6b096f67c4884290f50427c67fd9ae654a2b11"
  },
  {
    "id": "soartec-product-132",
    "sourceRecordSha256": "e70d7df2e167a4d1bbc001b0ff5562dc1f7de296fdd4ff1e4c699ce6aa791224"
  },
  {
    "id": "soartec-product-133",
    "sourceRecordSha256": "415e84d6a8cf77e9792694adacb92f68dcc431ad7076f122291ea01b1dd61a9c"
  },
  {
    "id": "soartec-product-135",
    "sourceRecordSha256": "30950198ce0266f01172692f6e8c8481174c3b2511031d3fc6b2546ba4b8f20d"
  },
  {
    "id": "soartec-product-136",
    "sourceRecordSha256": "26b02c6c4a5a72cb96bf4d275b9d139dd69de067cc3d615f5e48987ce1b5e35c"
  },
  {
    "id": "soartec-product-137",
    "sourceRecordSha256": "3cbb727266342e4e4e9aa31d6a3f430d2dce0ff02f9fb7ef353b8aa7cd2fe238"
  },
  {
    "id": "soartec-product-138",
    "sourceRecordSha256": "bad1dcb1c4bde4ab534475e3d349dc5e19fce0f3d4f40d174bb8504cc89b587a"
  },
  {
    "id": "soartec-product-139",
    "sourceRecordSha256": "ea6e638380284fb0fa30022daaa089ae890fbfa64185b6590baba5bfed8de103"
  },
  {
    "id": "soartec-product-140",
    "sourceRecordSha256": "a3c5c8ce4f1480859f38279270d5ac1353a3b1a4485cac5eff74656c84133b3b"
  },
  {
    "id": "soartec-product-141",
    "sourceRecordSha256": "6c28fd063078559eada36eebc69a399a7689766cbc9e6c946b3d2ce68d844083"
  },
  {
    "id": "soartec-product-142",
    "sourceRecordSha256": "038071d36e3240ef41c672fb0e474408600ebe6a20367acfc4e1bb1206332dcc"
  },
  {
    "id": "soartec-product-143",
    "sourceRecordSha256": "d05a508c46db0cbb012a74393008eee4f899335a70fd2f3c3e4d7c2f469572a4"
  },
  {
    "id": "soartec-product-144",
    "sourceRecordSha256": "8024d46d0bcf334bfe967839a00b731601aabfa22e987004f263123852ba0256"
  },
  {
    "id": "soartec-product-145",
    "sourceRecordSha256": "6d5dc72fa71b3bbf2afca99e378b15c4d57486f8b7f65d0bdac7664171598005"
  },
  {
    "id": "soartec-product-146",
    "sourceRecordSha256": "39da5500d5d6cfd4e889c9ffb19c815a858bea23879a8ccaf70e6fbc9a18065a"
  },
  {
    "id": "soartec-product-147",
    "sourceRecordSha256": "35f422343d3b9ed25637cc92cbb6b3420f7f6c44ede17e636e9a3eb1d43c1ee2"
  },
  {
    "id": "soartec-product-148",
    "sourceRecordSha256": "0e9d5a3c841092af1d250665e745029d90ae09211e70277f0072f321fade5349"
  },
  {
    "id": "soartec-product-149",
    "sourceRecordSha256": "af508b31b07430caf5cf2d1586429044eafbb9191b605b528091594e16f6765c"
  },
  {
    "id": "soartec-product-150",
    "sourceRecordSha256": "8743429dd9e966d58a0e1f6bb9fd66566537a50cadeac1b64659d13dba363cfa"
  },
  {
    "id": "soartec-product-151",
    "sourceRecordSha256": "ea3fb149cdeeacc245d1ab1eca01d0f84325ab6366363e2cbe9b2d56bec83df4"
  },
  {
    "id": "soartec-product-152",
    "sourceRecordSha256": "3363a78b377d7a1b7781ca31a25e0187c0476296ec6e4eefc4c89e838878ce77"
  },
  {
    "id": "soartec-product-153",
    "sourceRecordSha256": "21630b9c790f687a45e02f2049d20da19e6d47bf947abdc0fd2004a53f8e3cba"
  },
  {
    "id": "soartec-product-154",
    "sourceRecordSha256": "d965ec4f5f88e0226a49678b3d0f1576f83d7754b0692449773541bf75979a3d"
  },
  {
    "id": "soartec-product-155",
    "sourceRecordSha256": "577f04d2f127cf0afc35570e1c9248897236f75a04708c68c8b903358280588d"
  },
  {
    "id": "soartec-product-156",
    "sourceRecordSha256": "178d585eccc6e250992c7a5e28d0162d90a25b6ccaad2b06fb997a0d00ef1452"
  },
  {
    "id": "soartec-product-157",
    "sourceRecordSha256": "f9db11b4c5699e1517f712d1afaf3d61e2122e2cbe8395b9112f7c79779a0cd5"
  },
  {
    "id": "soartec-product-158",
    "sourceRecordSha256": "e8e9ed61c07f7ed1290e371096ff41050a06ba7acf196766187013e50df80955"
  },
  {
    "id": "soartec-product-159",
    "sourceRecordSha256": "af3ac8fc8bb4d1342881ff3f098db699e3cdf21a1375d16561af879516e2c584"
  },
  {
    "id": "soartec-product-160",
    "sourceRecordSha256": "db040301ad52b927d9a9f1cdcfdc1a58c9ea47b5a12273d385ed5f0507861b89"
  },
  {
    "id": "soartec-product-161",
    "sourceRecordSha256": "71f49c4e2bfc468f1a3edb5bdcd201be73e674fe20d0e53e4dffcdc6006f990b"
  },
  {
    "id": "soartec-product-162",
    "sourceRecordSha256": "9280556bacddbabc43533319fc1fe08a0cae897ecb2441392e4e77b466ec4854"
  },
  {
    "id": "soartec-product-163",
    "sourceRecordSha256": "77e59ab2647a0bd8533de15ab82419764f045ee5d03e5158e124bc61de36d081"
  },
  {
    "id": "soartec-product-166",
    "sourceRecordSha256": "424bee6917ef9d56752119ea0854c9d5eb937a5deccb5ab780642dc933d1e906"
  },
  {
    "id": "soartec-product-167",
    "sourceRecordSha256": "17adec17f287181d6a29bb17e1f3b36b1bb6d1f1b084b2062fa5d0518191ae63"
  },
  {
    "id": "soartec-product-168",
    "sourceRecordSha256": "eced27a9edc86904f5b7ed30a1c59f023fe90b6a9a64519918b6805c9db43cf9"
  },
  {
    "id": "soartec-product-169",
    "sourceRecordSha256": "4e73c3b17d9fe343b41bf55ba646f7c4d4fbdf66e83771133082638c415a148a"
  },
  {
    "id": "soartec-product-170",
    "sourceRecordSha256": "d36bf08b3e75c8826d94d9f6cdb10532cc7eb9c3e8b0627337cbdf62f47ec24d"
  },
  {
    "id": "soartec-product-171",
    "sourceRecordSha256": "c94583ddcc0add45b5e75b7fe084497f0ab146ef8dc565bbf9392825e5d503b3"
  },
  {
    "id": "soartec-product-172",
    "sourceRecordSha256": "f6ca02373f4d5a2bd854246a8c2e9f470152d37098a585263c712dbc0df921c5"
  },
  {
    "id": "soartec-product-173",
    "sourceRecordSha256": "20e18eeecc9af6cafa2012229501289c433f3503e1a2ad006b45496d45de6175"
  },
  {
    "id": "soartec-product-174",
    "sourceRecordSha256": "88cd0dc04262ab0340287bb5f7f78002ece13f0f5790f3ffb2282eb212d5ef0c"
  },
  {
    "id": "soartec-product-181",
    "sourceRecordSha256": "2ee6a73da188efebe516e95f058d08254faf754fc74b999fb09a74090212a4be"
  },
  {
    "id": "soartec-product-183",
    "sourceRecordSha256": "0855e58532c29271b8b6507edd8a21aa4c014087df80019e58a2f046e3e48fb2"
  },
  {
    "id": "soartec-product-184",
    "sourceRecordSha256": "0b216e5d863d453236ff9f654a16704bac78d1512224f1ea4b12b5b0da8c404e"
  },
  {
    "id": "soartec-product-189",
    "sourceRecordSha256": "68162c2e9724c2b3464af7af1a04de93ec799ab8556eadf74bd6b11d28de1f9e"
  },
  {
    "id": "soartec-product-190",
    "sourceRecordSha256": "46f6c8ac43aeaab37c930a4348074487a3108090614e41001e1e561de8b1ff7b"
  },
  {
    "id": "soartec-product-193",
    "sourceRecordSha256": "bf1aed13f72ae3656a2196c4f0069995a7ed648ef8b5d8e9cf6199d841393ff1"
  },
  {
    "id": "soartec-product-194",
    "sourceRecordSha256": "4e51481343d84ce9d8680140e608f99b16a90f4ab41d91e62bf5981ff85cc49f"
  },
  {
    "id": "soartec-product-195",
    "sourceRecordSha256": "cd55073e09a68f7483a6ca9ee0e4504f8f3cb5cc75f13b3635f43203104bc452"
  },
  {
    "id": "soartec-product-196",
    "sourceRecordSha256": "c6b37618d8188226dac829914e79ca378613140ef8c26d1bdc5ba9f1cda9d5a0"
  },
  {
    "id": "soartec-product-197",
    "sourceRecordSha256": "8488408b2df3bf94766253219b81d8375a27e8dfa4a29101b4e82e9704cee803"
  },
  {
    "id": "soartec-product-198",
    "sourceRecordSha256": "aa97f8aee5f61bb9a696b1ffc33c8e946e8f9455498cc85a63b948692fb92bce"
  },
  {
    "id": "soartec-product-199",
    "sourceRecordSha256": "f0c082223a5b260cc8a8ed74b1c6fd9b25b1cf69b9759fc90de061bc7d5ded2a"
  },
  {
    "id": "soartec-product-200",
    "sourceRecordSha256": "509bd9868e08b38a41046e75df6f5903c21066e701382847c0405f214dd66912"
  },
  {
    "id": "soartec-product-201",
    "sourceRecordSha256": "77cb66f9c1019c52068e64f8c49203a1a8d0d7653f4b33bcdcaf5dba37cdba19"
  },
  {
    "id": "soartec-product-202",
    "sourceRecordSha256": "eaa92994397d202ebaf154b916ee62824ffde68272a7f3f1f546a0e493ebbd6f"
  },
  {
    "id": "soartec-product-203",
    "sourceRecordSha256": "0208f00b8f4bb84f5b982cc742a1be41e6c153c86e0284a42930ed989d329fc1"
  },
  {
    "id": "soartec-product-204",
    "sourceRecordSha256": "98710e598354a8553d5715b80c1cc40df42c22fd6108e5072c5689e6400f7dee"
  },
  {
    "id": "teng-product-00",
    "sourceRecordSha256": "b5d8c6b7180cbf56eecadfc06102cd626483aaeb14da18972dde8368618f5634"
  },
  {
    "id": "teng-product-01",
    "sourceRecordSha256": "3b196dc94be0dd875d6fc8d53f03c563e55b4f8111033660e6f42d6c7889fa6e"
  },
  {
    "id": "teng-product-02",
    "sourceRecordSha256": "1bddec491d27a1de274cde172a4930371aff2b64a82cfa8278ad79d974efb836"
  },
  {
    "id": "teng-product-03",
    "sourceRecordSha256": "5f054f627d88646efbb65eb82f9e0ebb2366c27f7f9c4402ead8bb6a8059b8b6"
  },
  {
    "id": "teng-product-04",
    "sourceRecordSha256": "4fb8641f8a60d5bfe91c080dce5d0d2bdceeb84c5a546f87ac4a2f2de9991751"
  },
  {
    "id": "teng-product-05",
    "sourceRecordSha256": "694c98c8a7bd9cc3de11104a431a55823ac769fbc057d7dba0e66113ddb47c21"
  },
  {
    "id": "teng-product-06",
    "sourceRecordSha256": "6a3f62e479a0b37edd6e8c9a9bbd65269a93356b31b698896c3c6e0548c4ccfd"
  },
  {
    "id": "teng-product-07",
    "sourceRecordSha256": "cf024ccf21d6774952ab942b667d85eead26bb03c1825f3b0726aeed4ada64e1"
  },
  {
    "id": "teng-product-08",
    "sourceRecordSha256": "130b42f90a993667b8421a000b69b539304dc080f5314be0de64b56eefc43f43"
  },
  {
    "id": "teng-product-09",
    "sourceRecordSha256": "200c14dfc692b9b499c279ffc967337e8ee5cdf074888452aad77d61a11228ed"
  },
  {
    "id": "teng-product-10",
    "sourceRecordSha256": "40ecd2f7c32a71aa10336a383b2d938df64705a01fe1c1c8d88606200827eb12"
  },
  {
    "id": "teng-product-11",
    "sourceRecordSha256": "6c3a376641cbb89fa2c4a51e68d87a78af93374b2da4f5c2179d0d4dcc929aae"
  },
  {
    "id": "teng-product-12",
    "sourceRecordSha256": "8ed6598e0d441c164d2cd758410b1282eb9b2ec4362be2fe2f23723fee8bdb56"
  },
  {
    "id": "teng-product-13",
    "sourceRecordSha256": "983bca9a3294bb4e880e6155d7b91c56c66b8a068b3d8a5d6b0723ed826350d5"
  },
  {
    "id": "teng-product-14",
    "sourceRecordSha256": "2ab089b0d7a29ab5ab26ad97253c74d907773c4ca9108a7a02e5224b93b26ef0"
  },
  {
    "id": "toku-civil-306",
    "sourceRecordSha256": "b712cdd5436ad8ac96bf16c94da3ab25e4a36d352fc0ddc87b31324b881e936c"
  },
  {
    "id": "ata-page-1312",
    "sourceRecordSha256": "fe06b6e5fe4644cd696e0b32da2648a62eac1466c07d6bfb9caab2337b69b4f5"
  },
  {
    "id": "ata-page-1313",
    "sourceRecordSha256": "3980ad305a4bb8e8865dfd9eb39958edda5d09c3145b3426b6b2bf27fa0ceb03"
  },
  {
    "id": "ata-page-1314",
    "sourceRecordSha256": "228d33b26db96df07bf20c8f0bf6dfacba50b5e06339e6588552a558a1c21eae"
  },
  {
    "id": "ata-page-1315",
    "sourceRecordSha256": "d49c5940a0eac97fd2f8ca2ffecd2df1165140bf1fece7ea5cce9830e282d19f"
  },
  {
    "id": "ata-page-1318",
    "sourceRecordSha256": "6769b8fe83b19a4a9940baeb7261cd9880a9cf7663b88d84ebb768b739227189"
  },
  {
    "id": "ata-page-1319",
    "sourceRecordSha256": "500c8c0b42928b81f4dee7f95047f1a369432873c8bd9a54c073bb3ddad2c1b4"
  },
  {
    "id": "ata-page-1320",
    "sourceRecordSha256": "eda7df3a6ffbb18c3f693e53e92278d55e5222f8a25c4df8a1edf17b7c3b4ec0"
  },
  {
    "id": "ata-page-1321",
    "sourceRecordSha256": "f58f591ecec0dbac1738d243e89f8dfb6013ee95fc0cd226c81f7908d9c921cf"
  },
  {
    "id": "ata-page-1322",
    "sourceRecordSha256": "ee38f8ae9987c80b7d764cc5d3a39007ce6ca1d9ab690d28c1b4360fe7ec7725"
  },
  {
    "id": "ata-page-1323",
    "sourceRecordSha256": "a9bb9204346ba4409a0c1b0418d434afe529d5308ed8a7c69b3d12dd2c285b58"
  },
  {
    "id": "ata-page-1324",
    "sourceRecordSha256": "46ed6a2b0d408e8dee5a6f630116a529797ba9f64661efe0e9e1985f4ce441c7"
  },
  {
    "id": "ata-page-1326",
    "sourceRecordSha256": "12f105ba8bbdcdb32d7ace49496cdf8875185a719bf2b663d6440ae28ad0aa5b"
  },
  {
    "id": "ata-page-1327",
    "sourceRecordSha256": "d5690534653842530c3d6bf8b7088c296859a86567bc2f3005461386e849b6ad"
  },
  {
    "id": "ata-page-1328",
    "sourceRecordSha256": "a27f7192b8927520f1c32966e930581946e49cd8a2386c36ace6238d9cfba717"
  },
  {
    "id": "ata-page-1332",
    "sourceRecordSha256": "452b6c0c960d6866bd1d7802c2d613e3fc2a08c8446403bb869485913b76824e"
  },
  {
    "id": "ata-page-1334",
    "sourceRecordSha256": "e6f880bdf014fd924d16036213b48ee8f180140ec72f14a7b873d82aefb07eda"
  },
  {
    "id": "ata-page-1335",
    "sourceRecordSha256": "0004e0ba214617ce2b4809bcdd351c877a2133c8151df79bfb92e301985b127c"
  },
  {
    "id": "ata-page-1336",
    "sourceRecordSha256": "06514da336f4f1c3c60872f0680578f403553c0f99e00e025d84588c7e990418"
  },
  {
    "id": "ata-page-1337",
    "sourceRecordSha256": "9adfc5d35ebcad0c67c93eaeb9ca7231f185b0eead6d939022a3df223b459eea"
  },
  {
    "id": "ata-page-1338",
    "sourceRecordSha256": "b7aea2f4d44d2ddd74db159be6e6ed07d2f8d379af6bb65e2a8096732137b765"
  },
  {
    "id": "ata-page-1339",
    "sourceRecordSha256": "22b82bf4a34652198af58317b93410eb25ae6297602788c58812520e858fb178"
  },
  {
    "id": "ata-page-1340",
    "sourceRecordSha256": "92c23137529c606024cafaaafa232bba49aee1a28d4c931a75f1bcd863c83c5e"
  },
  {
    "id": "ata-page-1341",
    "sourceRecordSha256": "59ae3007f47a93398df0807b1d130ffac9abadc8fe7a1dd2dc54045413f19608"
  },
  {
    "id": "ata-page-1342",
    "sourceRecordSha256": "242786e3a8e140ba1a966ec9170fbc6525326bcf3af5abeeae531a1e76228546"
  },
  {
    "id": "ata-page-1344",
    "sourceRecordSha256": "6fa3f7dc81c5ea1781f3a62e5b4ee0a08d08bf1f44e1fcb201b1bb831762a951"
  },
  {
    "id": "ata-page-1345",
    "sourceRecordSha256": "ee75e88a22830f029c1efbfad132a87ce0808ea96bb036e2def75c04ebbac3d7"
  },
  {
    "id": "kingtony-manual-000",
    "sourceRecordSha256": "491dfd466b18e5baa4f1eb290eebe0053b2af4d0882e99c463a151f1d77bc4e7"
  },
  {
    "id": "kingtony-manual-001",
    "sourceRecordSha256": "ce7edb4c088879392749945cf1e6b728ed085a1537a598dc93f19c3481a5bba3"
  },
  {
    "id": "kingtony-manual-004",
    "sourceRecordSha256": "54e537fe1a55ec40640949c4e4c73414893a0d776bd2b2220b3a1e3b57a2c47b"
  },
  {
    "id": "kingtony-manual-005",
    "sourceRecordSha256": "6fb661cb0a0508bce49e85b87e5b44aa16a1ef522a755c375fecfe2f94ea5334"
  },
  {
    "id": "kingtony-manual-006",
    "sourceRecordSha256": "31cb7bf8b5eaa23d780a91e06b0cb7bc2af3bffb9062022dde40c8a92b3fe58f"
  },
  {
    "id": "kingtony-manual-007",
    "sourceRecordSha256": "02e664d5ed3c900dbf306b673b02872413c94c71c83d6df50b37edbc10579cd6"
  },
  {
    "id": "kingtony-manual-008",
    "sourceRecordSha256": "9dcedfff002583b48e4d00a57ab2db1de2c6c0da6cbdef3796c27760dae2ca58"
  },
  {
    "id": "kingtony-manual-009",
    "sourceRecordSha256": "d34ed41b2425b5938bd68e41ba15d77cc4048eb3160e11ea2db31e6e2789475d"
  },
  {
    "id": "kingtony-manual-010",
    "sourceRecordSha256": "f49dbdaba66951408c28a6a6c9a3e7a8d6dc63fcd138b63b1c025df938da0973"
  },
  {
    "id": "kingtony-manual-011",
    "sourceRecordSha256": "c846bc3d0bd7348bfa9610d79c4dfadeee77991976cabbe778bda9108e61592c"
  },
  {
    "id": "kingtony-manual-012",
    "sourceRecordSha256": "f828d0868963512793f707729ddf2729cc373842b984565594b4a96139cfd304"
  },
  {
    "id": "kingtony-manual-013",
    "sourceRecordSha256": "822f0aea413d0ac08dfc6e24afbbdb78dbe0b762b1a1a0dda9cbbb61439f88f3"
  },
  {
    "id": "kingtony-manual-014",
    "sourceRecordSha256": "e96da0a9e0eb89ce2ec3024b3b6b13dab54e911a0e9533ce0b894ab0cfc05c35"
  },
  {
    "id": "kingtony-manual-015",
    "sourceRecordSha256": "59acb3bb0f03694ce654c6362260ab1c9efeb66155d99a9f3c88f5b11c7e3eb8"
  },
  {
    "id": "kingtony-manual-016",
    "sourceRecordSha256": "41a3723d357096c5818a9e18e3190374f7503e4da19657b97efd259ca72be7d3"
  },
  {
    "id": "kingtony-manual-017",
    "sourceRecordSha256": "c49a50c105e719c47ebec72a138f327faf29f58e2e8781048006702c27e37d81"
  },
  {
    "id": "kingtony-manual-018",
    "sourceRecordSha256": "b959e94c39cf546740179a37c6278caa3517b653a16f9f7bd805ca84405348b3"
  },
  {
    "id": "kingtony-manual-020",
    "sourceRecordSha256": "d1ff01a58f6fdea8200c0f3b1c1c69afa1da0cb3ea0c84542f19be00be33bd2e"
  },
  {
    "id": "kingtony-manual-021",
    "sourceRecordSha256": "2d04b51339bd5f07804741279da3677e10dc25cf3bfb19f328ab8157dd072f53"
  },
  {
    "id": "kingtony-manual-023",
    "sourceRecordSha256": "0f4baf061da9bc5c4c80182a9196054b41161548a2778fe478e10d8291749771"
  },
  {
    "id": "kingtony-manual-024",
    "sourceRecordSha256": "c1100d55e9c579661033f19affa63a59cb38ddbf6580cbe3f910917a00ad8876"
  },
  {
    "id": "kingtony-manual-026",
    "sourceRecordSha256": "320ccbd886ea12e212cd4aeb5de4c01dd9171da2220b424c36fcdfb881268ed3"
  },
  {
    "id": "kingtony-manual-028",
    "sourceRecordSha256": "4f09709747715e8a6f2fad49566dcef11ffb08b3b7d9c989fc451ac562c1d154"
  },
  {
    "id": "kingtony-manual-030",
    "sourceRecordSha256": "2199919718297b4ce8198af0eb5e760307396b082974dda143ddf2e843c2cd5c"
  },
  {
    "id": "kingtony-manual-031",
    "sourceRecordSha256": "7fb880dce0d9aceeca13884b713eb628f48346912f8549a3ff3ae589d65da173"
  },
  {
    "id": "kingtony-manual-033",
    "sourceRecordSha256": "051980fa5d60a88ae88b33af16283e433cc9439bb86bf9499de14516c33e628f"
  },
  {
    "id": "kingtony-manual-035",
    "sourceRecordSha256": "77fcaa53a9eb9ada99367d4abfca27efffc3a9f93a48fe8dfb59c25680550cbb"
  },
  {
    "id": "kingtony-manual-037",
    "sourceRecordSha256": "a4c3f61ff0f31a6320283a27129e0ac7ba3b9439b222dfe05bb709965df33008"
  },
  {
    "id": "far-kj60-manual",
    "sourceRecordSha256": "90bb17f8b3d729add5822bac3f6d84e1013a801989dd312978d372dfa52c7cef"
  },
  {
    "id": "gesipa-taurus2-page",
    "sourceRecordSha256": "bd38fe452e624d739501e25ed0c93816218e16697f5b3647d5d6ceb9fc06cc46"
  },
  {
    "id": "mirka-pros680cv-page",
    "sourceRecordSha256": "6083660f3d4815012ccffddcf401d94a34e189ca9f20c24fe1d7f1836233fffc"
  },
  {
    "id": "hpt-n3804a5",
    "sourceRecordSha256": "e942a02d030cc375a29367ef09fb52e35ab3abae5ec53d9414677be26589007b"
  },
  {
    "id": "hpt-nv90ag-s",
    "sourceRecordSha256": "a661b29255a5df9699f098139bc567c901785b961f29a9718e7a515b8f0b258a"
  },
  {
    "id": "hpt-nr83a5-aa5",
    "sourceRecordSha256": "89104f9aa8409eaf2c37503f94bf3f0d74c6b689c7590435611b55b358682ccd"
  },
  {
    "id": "hpt-nv83a5",
    "sourceRecordSha256": "3cc38b750f0833460e2fb70acd8a921dab497ed1ba8a9a81af16d75bd0bc9175"
  },
  {
    "id": "hpt-nt65m2-s",
    "sourceRecordSha256": "b49d61e712f071ae7acb658bb60fcd166d9a1aaa9f7f0b6c2e577c6cafec9c5d"
  },
  {
    "id": "ks-product-515-5505",
    "sourceRecordSha256": "14e7704d904e7c7c89c3b340e18aba49ceac77548c923912c6bb30afb57f3fed"
  },
  {
    "id": "ks-product-515-5510",
    "sourceRecordSha256": "efd87da451e8403da5f1f43936defbfdbe807b69c5d0531a40c72b58a38fc2b0"
  },
  {
    "id": "ks-product-515-5515",
    "sourceRecordSha256": "6c13638a7e8ec196f6829c6d8b5d251e19967f6ef2666a4e043df0dadf1699fd"
  },
  {
    "id": "ks-product-515-3825",
    "sourceRecordSha256": "b25f3fc788e0503b1a848635fb9854c6e376db8d28d513058fdf1ad038862aaa"
  },
  {
    "id": "ks-product-515-1185",
    "sourceRecordSha256": "d40c5639fcfeb56ea69944c4d0808476a1d47661fddec39af84d55383424826b"
  },
  {
    "id": "ks-product-515-5520",
    "sourceRecordSha256": "71560920f8da55dc0a5f971b79b266f45ffc4b83706f328314ba944bc95e29a7"
  },
  {
    "id": "ks-product-515-5435",
    "sourceRecordSha256": "61613b3983e0e6ecb5a8f76043360533a19c98003c34230ab78a1d00ab8d76c1"
  },
  {
    "id": "ks-product-515-5525",
    "sourceRecordSha256": "e9547cb3f1655a282d5877e53d1d47f12d095f0ab02f5952beb550272f4e11a1"
  },
  {
    "id": "ks-product-515-5465",
    "sourceRecordSha256": "1d65797bc7ea887c43acba538fb1cc076a8c0f7c2a54d8c0d1b322abed252f18"
  },
  {
    "id": "ks-product-515-3035",
    "sourceRecordSha256": "463ede1fc7fdf03af3090fbee05554ee445ebdec2b45075f86d00d46eefa702f"
  },
  {
    "id": "ks-product-515-3198",
    "sourceRecordSha256": "f927242131cf3d5d2b82ff70655977194dd7757379a70fcbf50582a8a70e1e18"
  },
  {
    "id": "ks-product-515-5530",
    "sourceRecordSha256": "3ea3ed0ff7c567545c84ef5642ec2923f8813abca8480b4fb91762298b08e93b"
  },
  {
    "id": "ks-product-515-5410",
    "sourceRecordSha256": "271aaee46ed1f8862ed2b1d2e91a01acae1e3e519a5ace696f77e19f72ba6755"
  },
  {
    "id": "ks-product-515-5415",
    "sourceRecordSha256": "3ea9379143087d72f58c7a4f3a063e5b94ea1860fb1ef9fa83c6b5f1fd10b198"
  },
  {
    "id": "ks-product-515-5535",
    "sourceRecordSha256": "75b4d283955713bdb4ad226612bef054fc0ce7e0e10c309b5d3b694228fb4080"
  },
  {
    "id": "ks-product-515-5540",
    "sourceRecordSha256": "298ea7d460febd30339cfa5844be99999a8ac29c7dba9528149b9bac9acb1d5f"
  },
  {
    "id": "ks-product-515-5420",
    "sourceRecordSha256": "e3c26392e95ec382415bf44e715c72acdf69889fb8cfcf4967de00c7b0af18df"
  },
  {
    "id": "ks-product-515-5550",
    "sourceRecordSha256": "df95a701356990dd6ba5a00212d7e92071ee058332f3b9c6cc7b91c52e1df222"
  },
  {
    "id": "ks-product-515-3196",
    "sourceRecordSha256": "c4b794c0e3329c1db7790316cf1487b94fd98173552b35e0b4d5b98966ab662c"
  },
  {
    "id": "ks-product-515-3179",
    "sourceRecordSha256": "cf2bc933ccc3b0e03fe0b4771179feb8afda59cb0a53d50587051d8b61f614ad"
  },
  {
    "id": "ks-product-515-5585",
    "sourceRecordSha256": "b4022f62a9bb94be3dd1b1893d918e8e7b3179a3ac6e89c7237831e5331708fe"
  },
  {
    "id": "ks-product-515-5570",
    "sourceRecordSha256": "498c1d460c0fdebc48e7ea2b8c68925a016021fb478c30ff3d64a46a035a1eb9"
  },
  {
    "id": "ks-product-515-5580",
    "sourceRecordSha256": "02141ee36333227000264dc607957969a492353bab767a3f44b2ec93e5c35f94"
  },
  {
    "id": "ks-product-515-3549",
    "sourceRecordSha256": "d41fd7e53e727e0d4ebc637fc67ddb3c84235e0323652d9eeab0e825fd478c67"
  },
  {
    "id": "ks-product-515-3061",
    "sourceRecordSha256": "9e674a6917c14730b7119c2bf9aa59897a2812b99db840c33d89d5beba64986a"
  },
  {
    "id": "ks-product-515-3066",
    "sourceRecordSha256": "2a7fe926164f864a5fc200ee35438e5de0e5468fe682ed325a543dce7cbd9d0a"
  },
  {
    "id": "ks-product-515-5111",
    "sourceRecordSha256": "14c795645a7c63b32d0c582fc83bdb43735e66f74d11725889e356ebe5dc5331"
  },
  {
    "id": "ks-product-515-5431",
    "sourceRecordSha256": "94882e76c81ed41357182e81dcebe2277fc1422f306b0c9b01847be46b61cf3b"
  },
  {
    "id": "ks-product-515-5590",
    "sourceRecordSha256": "baa4cf47ac1ac0461c5e3bfd872eaf913123060ed0b6636f0556f00bbdf28eda"
  },
  {
    "id": "ks-product-515-5455",
    "sourceRecordSha256": "410f2043497f5a2457a7c9d40de210744cbb3bc53f05e985ff506e33bd7536c5"
  },
  {
    "id": "ks-product-515-5121",
    "sourceRecordSha256": "fa35f8f6c31a49438394a99381fcf6b4a7fec27b69a863fd7ad7d45f005426f7"
  },
  {
    "id": "ks-product-515-3063",
    "sourceRecordSha256": "1fca9628e294cf2d6967aaed9ecf98d3bdfe34d281203eb6197c988e43cfbce2"
  },
  {
    "id": "ks-product-515-3881",
    "sourceRecordSha256": "060d725602952e433f000aad272e2efc48218d283732099a422eb9246d253a85"
  },
  {
    "id": "ks-product-515-3070",
    "sourceRecordSha256": "13121b7a48ca612f716c7d4ba4af2d341faea4165ab50875b4f384bea5fb1774"
  },
  {
    "id": "ks-product-515-3980",
    "sourceRecordSha256": "05699f896daf87d0807a5abccd55a31a058a3c584edec45aebdb52f881d2669a"
  },
  {
    "id": "ks-product-515-5555",
    "sourceRecordSha256": "6ad9d3be94a451f3f1e3d4fe700b1a548870ddbc28e975581e7f5cccc430cc4c"
  },
  {
    "id": "ks-product-515-5560",
    "sourceRecordSha256": "eeae0471347274205dc6c15bd08dae9d2517d8da7315e28fe7784f4d8234b9f3"
  },
  {
    "id": "ks-product-515-5440",
    "sourceRecordSha256": "a7a30cf63b7f1c42bffae1d9c0497bff67fb728c36e31b65244b5e68937c0126"
  },
  {
    "id": "ks-product-515-5475",
    "sourceRecordSha256": "59a5bdbb10ffafa2ad59006849636e6cb9a669fb3bbe74ed234cd0d0a00e054a"
  },
  {
    "id": "ks-product-515-3835",
    "sourceRecordSha256": "cafc78d7917d2fcd9c6271c6065bd2124daa081cabc79a4c8f486414577e4378"
  },
  {
    "id": "ks-product-515-1470",
    "sourceRecordSha256": "43a94bf931d3e35dde74f228b358337c359e7e596799394d1522709a4a4317b5"
  },
  {
    "id": "ks-product-515-3830",
    "sourceRecordSha256": "7f01b1386f381eeccd0b0b0144984411e09f129e4e534be4673ad9d710877740"
  },
  {
    "id": "ks-product-515-1270",
    "sourceRecordSha256": "788817b4e9d71345d495f49c41b81babe78ea7591a2b40daef3ff491064881cf"
  },
  {
    "id": "ks-product-515-1625",
    "sourceRecordSha256": "bd4cd1ca0afcb83e5eb0ee441fb6ab817b3b811060e3b9c868d0af1469a46f60"
  },
  {
    "id": "ks-product-515-3855",
    "sourceRecordSha256": "b5d8845b71310365cc77492c52469668ca0286fdb68013bb550c033a96b322dc"
  },
  {
    "id": "ks-product-515-1210",
    "sourceRecordSha256": "1a41c1a3de1131ae9d6f7fda35776adc80983cb7b4f6654d06746c1cce30ad0a"
  },
  {
    "id": "ks-product-515-3785",
    "sourceRecordSha256": "631d870fbdb27d6cea1387383c44dfa98965e419ee3a27ede2114c4b61f55024"
  },
  {
    "id": "ks-product-515-3250",
    "sourceRecordSha256": "50078f5cb5fad37f461009f953036ad61d647f9d8f1002c59661b9646278f155"
  },
  {
    "id": "ks-product-515-3260",
    "sourceRecordSha256": "cae7d4706e724ee0f2c8d959d3031b8b41399008902c7ea7fce8cf6c49d04882"
  },
  {
    "id": "ks-product-515-3270",
    "sourceRecordSha256": "ff0de85717533af940641b19aafb763c387d198432861b8be383225c12a96c68"
  },
  {
    "id": "ks-product-515-3280",
    "sourceRecordSha256": "034e39b4bf0e2b7f0190be004b1d65e1646a90f0b291ba52949032f60eeed7fa"
  },
  {
    "id": "ks-product-515-1200",
    "sourceRecordSha256": "1db8d2e4ff53980d2f8a539e376c9bf2f002e3fae0e457f2925302c31f8a496c"
  },
  {
    "id": "ks-product-515-1315",
    "sourceRecordSha256": "4daeb523b917c2bb8de053676338cd59023c36eccabbd65040538099702dfc11"
  },
  {
    "id": "ks-product-515-3400",
    "sourceRecordSha256": "23d46fa0295fa071565ca051353708904ccfb043fcf854a4f67b98d26b2037ba"
  },
  {
    "id": "ks-product-512-0002",
    "sourceRecordSha256": "690fe81c6a69a0307464882dc4efc70e6ff32595d6f58b56774895eba310f17c"
  },
  {
    "id": "ks-product-512-3400",
    "sourceRecordSha256": "e9e5ad47843b237a8472f0f8d4ad974369792a2adcc7b4e94cccc8fd8518828b"
  },
  {
    "id": "ks-product-512-3405",
    "sourceRecordSha256": "5ae337b3ad178ac72479b0f55ab686b96123a2bdaadc00838b3208ba31d7e35e"
  },
  {
    "id": "ks-product-512-1015",
    "sourceRecordSha256": "95e1660ac173745171bba93855e167ecc1a03d0fd8a9a32d139736e3de6f8a05"
  },
  {
    "id": "ks-product-512-1020",
    "sourceRecordSha256": "cdbd8baa10721fedfc66ca2aa463e57029689f03ada94c3aa95bb9a7c1f7e16e"
  },
  {
    "id": "ks-product-515-3102",
    "sourceRecordSha256": "a8d601d618c5b734900de8b82ebfc90e22a90b791e9290865234897b4578bedc"
  },
  {
    "id": "ks-product-515-3101",
    "sourceRecordSha256": "f3cd79266474f8ee7c2836f5b96380abe4489a7ea13f16f3fdf194dba53d2281"
  },
  {
    "id": "ks-product-515-1950",
    "sourceRecordSha256": "50e798c749c6b1d02effa7fba639b617b52770565d4e8b4ceddd824282437363"
  },
  {
    "id": "ks-product-515-1960",
    "sourceRecordSha256": "e2782ebf030535706cec5d2d247b968f35c3e9a8a7b6eab94efd07730517a81b"
  },
  {
    "id": "ks-product-515-1970",
    "sourceRecordSha256": "a4e8caf94484fd1549e8d4d5af022fe53f4954efa18714d8b3c93e99a4f93d2b"
  },
  {
    "id": "ks-product-515-1920",
    "sourceRecordSha256": "7913222da9761558862dcbf3e1dce90d6e32ea8654d082dfab23677cd6348767"
  },
  {
    "id": "ks-product-515-5065",
    "sourceRecordSha256": "d2d925dfd8563b62c208aca5d4ebb23d22cad898190e02aa605c091eed6bff24"
  },
  {
    "id": "ks-product-515-1980",
    "sourceRecordSha256": "5659725494f8a08ea19743a4c5e774196ea4623bebf4ed40935b47c916ce4609"
  },
  {
    "id": "ks-product-515-5595",
    "sourceRecordSha256": "26fd7b57eb07c9f58472eccd6c5e377127a0525aaa4374e9a8d2a424d66c9621"
  },
  {
    "id": "ks-product-515-1975",
    "sourceRecordSha256": "bfa864c3b576acdd080f59a9f70e8a168e072c69c71607bff5f437e1654cd593"
  },
  {
    "id": "ks-product-515-1985",
    "sourceRecordSha256": "22254ba2af042293e9ab0db2ff7f7c808921e1f68cace9e2fcbec631913ac842"
  },
  {
    "id": "ks-product-515-1908",
    "sourceRecordSha256": "3c46d246b0dca6e639902f1b6b79fa0f5f6a80a0f708b73cd96abfcb890a932f"
  },
  {
    "id": "ks-product-515-1907",
    "sourceRecordSha256": "0dd78d0ab017fcb25ebb3853d42d374f032a46019ff446b78b16bcef3640d757"
  },
  {
    "id": "ks-product-515-1901",
    "sourceRecordSha256": "8e5d404a80304797be8ef950be5ccb798dd8bd80b5d8ba50f43fd40f9bc27fbc"
  },
  {
    "id": "ks-product-515-1915",
    "sourceRecordSha256": "dfd13d6b755c029cff8192dc276dfb6a96f13f7132831b58695a3beb5bae8abb"
  },
  {
    "id": "ks-product-515-1216",
    "sourceRecordSha256": "17c1959dc9aace078b5fe2056a9f0987ac6aa4689403511e6e9d50be45555694"
  },
  {
    "id": "ks-product-515-5090",
    "sourceRecordSha256": "4045c980ae9b39968a80381252c077bd0de559855fc50ddaff21445633aa052d"
  },
  {
    "id": "kuani-catalog-2503",
    "sourceRecordSha256": "ab5a8c8945c7c2ae8079411e5c46c0d05629b2a7af786cd92e62e6e35ed6266b"
  },
  {
    "id": "mirka-pros-manual",
    "sourceRecordSha256": "1018de847f3d94a1999b256d1c52e9aadc8a756ec7f7448defaa126bb16796fc"
  }
];
 if (approvedSources.length !== sources.size) throw new Error('Ensemble source non revu');
 for (const source of sources.values()) {
  const contract = approvedSources.find(record => record.id === source.id);
  if (!contract || contract.sourceRecordSha256 !== createHash('sha256').update(JSON.stringify(source)).digest('hex')) throw new Error('Provenance source modifiée');
  const url = new URL(source.url);
  const resolved = new URL(source.resolvedUrl);
  if (resolved.protocol !== 'https:' || resolved.username || resolved.password || !Number.isInteger(source.bytes) || source.bytes <= 0) throw new Error('Réponse source invalide');
  if (url.protocol !== 'https:' || url.username || url.password || !/^[a-f0-9]{64}$/.test(source.sha256) || !Number.isFinite(Date.parse(source.observedAt)) || !source.brands?.length) throw new Error('Provenance invalide');
 }
 const tables = new Map((snapshot.tables ?? []).map(table => [table.id, table]));
 const htmlTables = new Map((snapshot.htmlTables ?? []).map(table => [table.id, table]));
 const documentRows = new Map([...(snapshot.pdfRows ?? []), ...(snapshot.imageRows ?? []), ...(snapshot.technicalRows ?? [])].map(row => [row.pdfRowId ?? row.imageRowId ?? row.documentRowId, row]));
 const identities = new Set();
 const approvedRows = [
  {
    "sourceId": "hpt-nv83a2-nv65ac-nv50a1",
    "mpn": "NV83A2",
    "rowSha256": "5886bfd0a8fdaa1b812f17f9ee414c6db11a5e177d519c53f8567d7e1212a370",
    "sourceSha256": "c3c318cdc705e2b5bd8d65a7668ea3408d8a5ea7a3a23528271e3c580ec63307"
  },
  {
    "sourceId": "hpt-nv83a2-nv65ac-nv50a1",
    "mpn": "NV65AC",
    "rowSha256": "68e6d5118b140ad150308275625ea23acd9a149e8ff8b058b60fc8cbc7fc6e74",
    "sourceSha256": "c3c318cdc705e2b5bd8d65a7668ea3408d8a5ea7a3a23528271e3c580ec63307"
  },
  {
    "sourceId": "hpt-nv83a2-nv65ac-nv50a1",
    "mpn": "NV50A1",
    "rowSha256": "dda1cdfa3ae1d4d58109464000fa3e065cab8577707961df35df7259635674be",
    "sourceSha256": "c3c318cdc705e2b5bd8d65a7668ea3408d8a5ea7a3a23528271e3c580ec63307"
  },
  {
    "sourceId": "hpt-nt50af-n5009af",
    "mpn": "NT50AF",
    "rowSha256": "be085a2cefff6f2b28ab0c577ba6c4ccfff1a31ca7ed419b13687f7472afaf1e",
    "sourceSha256": "5f14f70284c23e4ae1a669e8ad78284e9f09d66dc7384b03ed2e24363ebe917b"
  },
  {
    "sourceId": "hpt-nt50af-n5009af",
    "mpn": "N5009AF",
    "rowSha256": "b4205f98b0a287c8cb4a71d5ea1d0e881d8221de4ab20cb99f884b3e7e4d0734",
    "sourceSha256": "5f14f70284c23e4ae1a669e8ad78284e9f09d66dc7384b03ed2e24363ebe917b"
  },
  {
    "sourceId": "hpt-np35a",
    "mpn": "NP35A",
    "rowSha256": "74426cd32f430bed61e1c0b4af22de1adc479447ec6846b3a7f1f5f686636e60",
    "sourceSha256": "557d54400b71178005124aada964911c5308cbae18ea599533b5a9ea70ee67bb"
  },
  {
    "sourceId": "hpt-np50a",
    "mpn": "NP50A",
    "rowSha256": "04136dc47b5ab0ec4d4e6e48721f17bc1261ea943e47625d590699dbc18c822b",
    "sourceSha256": "5e7f40c5d188260b348fed41c071b09f904ddc20c7dcbf11e1254a57c0a36471"
  },
  {
    "sourceId": "hpt-nt65ma4",
    "mpn": "NT65MA4",
    "rowSha256": "b66194a329042afd91cc02e660f4526fd179567f46b7a5fdd1646aafd8328c81",
    "sourceSha256": "7c778bf2ff24e2599b4e767dfcd32c806a11772a925c01e59210e7f26bf5be80"
  },
  {
    "sourceId": "hpt-nr90ac5",
    "mpn": "NR90AC5",
    "rowSha256": "b32abbf76bf68a674d795e2efbc56760dc42132df717ee2b1eb0b97b85d5e795",
    "sourceSha256": "0bb6962d6f582fd6295369dcb0aff8c06181bcc1b625eb1d082c12daf838b1f6"
  },
  {
    "sourceId": "hpt-unidentified-ba937",
    "mpn": "NV65AH",
    "rowSha256": "ca9c92dabac8a41a014fbfbd750a563a2140ef00f38b3cbc89ba6bfc260ff6a5",
    "sourceSha256": "9ab038717f76e366b926ab630fa3c9533a7d4b2541fe4d224a9d3393470679f5"
  },
  {
    "sourceId": "hikoki-nt50ae2-nt32ae2",
    "mpn": "NT50AE2",
    "rowSha256": "6816595104f125555a1ca44b609e0f460c8d46abcf639387f30fa7591035d72c",
    "sourceSha256": "9503961251d2544f0add4b5adee76234829624178c3a20b4514c8e8f4d7e2958"
  },
  {
    "sourceId": "hikoki-nt50ae2-nt32ae2",
    "mpn": "NT32AE2",
    "rowSha256": "3a21edcd48a42149eb73015eec9b6cac813ac827663504e723751aa3a86e077d",
    "sourceSha256": "9503961251d2544f0add4b5adee76234829624178c3a20b4514c8e8f4d7e2958"
  },
  {
    "sourceId": "bea-sheet-000",
    "mpn": "12000024",
    "rowSha256": "47e17cdd7d9ca93630d4b673b2ca4927f3701afde4dc252499530bbf9cdc5185",
    "sourceSha256": "7e2061012e5e4efea00aa953c8396a8d36afa7dd4750e946a06dcd3d9c3c445c"
  },
  {
    "sourceId": "bea-sheet-001",
    "mpn": "12000048",
    "rowSha256": "706acab4301e7017dd61615675fb23074b8ec392d7e3d72e7e3aa58445998545",
    "sourceSha256": "01160cd603b7ae72edba85af6357848577fe35338cee117ab3cd4f27b3492731"
  },
  {
    "sourceId": "bea-sheet-002",
    "mpn": "12000049",
    "rowSha256": "4018b4cf48d4f0cdcbd7a1dd4655503761457c222971a3a95dc13701bee6ed3f",
    "sourceSha256": "c18b2c1f49f8b66ad9aaf208d8a89ffccb8dbf2d264d885644f32e9d6766bc64"
  },
  {
    "sourceId": "bea-sheet-003",
    "mpn": "12000052",
    "rowSha256": "d1ca34c5faf0d165a09062b18805310ec6384d0910fe90d6efa0a0184749afcb",
    "sourceSha256": "6c962539b625c0df9615b154392a22ad63f21b980913edad7f1292c6d0b1962b"
  },
  {
    "sourceId": "bea-sheet-004",
    "mpn": "12000058",
    "rowSha256": "546cfb58ebed3ffbc87e71c62e9a8a5abb8632a01833747a54a2fd631f4a4fae",
    "sourceSha256": "e809088fc8a09cd76885e464a7660c163bd4fe29f3f7b1b78f4c375a791a9b85"
  },
  {
    "sourceId": "bea-sheet-005",
    "mpn": "12000060",
    "rowSha256": "f90296be72c06f7aecc9dcdddba6950775d354f1a494067e698b3dbc9a06c19d",
    "sourceSha256": "baefd991416b15224efccbae0e2e4663fe62c98205455abdf0dd0fd8c751be35"
  },
  {
    "sourceId": "bea-sheet-006",
    "mpn": "12000062",
    "rowSha256": "9290193dffe0cac6af6cbe88d44a4193d55df835edda3826debc77f3e956b7b9",
    "sourceSha256": "f1e308828184514308c253f7a5926ab4c84bf57906a1a60361359c22fd0fee1b"
  },
  {
    "sourceId": "bea-sheet-007",
    "mpn": "12000063",
    "rowSha256": "b1d43605a422cb34e2ae07b0959a19052d04437176bfe27cc3d1407889e5112d",
    "sourceSha256": "74f0a7debea7dae5fe2ac95fb8f2678f4fe41483f276edcf3d059dee7e8d105d"
  },
  {
    "sourceId": "bea-sheet-008",
    "mpn": "12000069",
    "rowSha256": "faa30c463b6cd6453cbe48391359adc5b8fc33ead7913924fb3ad3a362b62bda",
    "sourceSha256": "e7b4f39c6799494c56c3ed83fbf0f3b57e33a1f6baf1a74c9ed33531497a322d"
  },
  {
    "sourceId": "bea-sheet-009",
    "mpn": "12000070",
    "rowSha256": "ebd1ce16a4f78fa5dca7a98ffeb30b065661af45cb67da1fb6833a151363c5e9",
    "sourceSha256": "61ebd21d6711897139f18beef259600016748a2500019c99fa4a454aedf8df04"
  },
  {
    "sourceId": "bea-sheet-010",
    "mpn": "12000071",
    "rowSha256": "2aab3d94bfb1f4b97dd0a83968d7a23072d8607979e4207db2fbf95f821099a2",
    "sourceSha256": "5576649b937093ea635986e20e9547291ee9e42000b81ecd830457bc5934956c"
  },
  {
    "sourceId": "bea-sheet-011",
    "mpn": "12000072",
    "rowSha256": "a9486f19de599df7193526a6837ca0a74c9ce0dd0399c674c55f9eb013e85f3e",
    "sourceSha256": "8611cfa437021b0fd3cce17f774d8693c5491f1017bc2cd75a83ec95eb30e3d0"
  },
  {
    "sourceId": "bea-sheet-012",
    "mpn": "12000073",
    "rowSha256": "4f6c7cbaa854100ca28eb5097d4a7308109b0e9dbcf4b11e7cad3edf407dd26c",
    "sourceSha256": "7961e1231c99486f5aff505b47aaee03ba8dc6ac2ba2e60b788b7d67c01618f2"
  },
  {
    "sourceId": "bea-sheet-014",
    "mpn": "12000075",
    "rowSha256": "b324ecde69613f0a506443fe590dfa1ae51b36547699b0674f4e48eb001e0311",
    "sourceSha256": "ee1ce8cf65f8c7d3ed5fd7a067722db7086e5de609be3910a5767e855dba6d7d"
  },
  {
    "sourceId": "bea-sheet-015",
    "mpn": "12000076",
    "rowSha256": "dc5ead20326383407d0f2e404dd58963ba1226344451664ec3b39573f1355700",
    "sourceSha256": "1cb8e38690e6c7bd261065da81e4424be2ac5d88438353d48a0025ca0109cc9b"
  },
  {
    "sourceId": "bea-sheet-016",
    "mpn": "12000077",
    "rowSha256": "63a25f170aea447720c3816c77a0661aa8325872ccba0ba1c9245e16a09f0a86",
    "sourceSha256": "a99bf752b35664aa27a15719083e5ec91fd5a646e8c57ff24000dc18eec179c3"
  },
  {
    "sourceId": "bea-sheet-016",
    "mpn": "12000078",
    "rowSha256": "4a284fa999323346a04c17c9186ef85f921eed8852367f7bd675d0c4d90222bb",
    "sourceSha256": "a99bf752b35664aa27a15719083e5ec91fd5a646e8c57ff24000dc18eec179c3"
  },
  {
    "sourceId": "bea-sheet-017",
    "mpn": "12000126",
    "rowSha256": "1ea2fa296f5713b78da2d94c9a9ce02eb320c34ec7fa6788716d7307f8ad6a78",
    "sourceSha256": "a125dce719f22eae54bb1ad31180fb0eba89d72e7287599d44ef2e0a717e4ac9"
  },
  {
    "sourceId": "bea-sheet-018",
    "mpn": "12000150",
    "rowSha256": "c43093a3a3e330a718c40d5a5919b65c4af7698133d93c9a0e21ab87d035f9c8",
    "sourceSha256": "02f28a04af97d103dc3e66a489e1a256fc6a871382b49a3148598a9f54515e1b"
  },
  {
    "sourceId": "bea-sheet-019",
    "mpn": "12000155",
    "rowSha256": "c9b0f9eab7dd071c3323149bbd5603299e12e2e5ed5f44b7220eaf49ddb3af88",
    "sourceSha256": "cb70fe9baaab81caa3bfb8d0f4f256e712674d806882d2eefb47d31990343549"
  },
  {
    "sourceId": "bea-sheet-020",
    "mpn": "12000157",
    "rowSha256": "f7513426dd99aef9f69133d21fb0a07db686f3108b1f3590a656ddb419dd4d0b",
    "sourceSha256": "b33b6292057e2d38f21664599c083eedb07c591396b8912d8be48a90d520648c"
  },
  {
    "sourceId": "bea-sheet-021",
    "mpn": "12000158",
    "rowSha256": "03fd695733876e55e664dce5115a688eebe1765b9593e804c0eb65b7b465cb58",
    "sourceSha256": "a72aef30b668d72b2b9a8d5e17244c6044ec49efb9063b09aafa21630198b0dc"
  },
  {
    "sourceId": "bea-sheet-022",
    "mpn": "12000159",
    "rowSha256": "851b355f39a3c935cbf847955f213538417b1a3750a08cf7498fc5a0ad2d6175",
    "sourceSha256": "1380539130a8fa33264d964be79a0ae7d995728354447cfc70538a18e95389ad"
  },
  {
    "sourceId": "bea-sheet-023",
    "mpn": "12000199",
    "rowSha256": "9be8e014b854e0d2764fbb987ff2ceb647a4fa14d29d5de8ac49a140ec7daf55",
    "sourceSha256": "37c49de0ec232ea7b302ace30274bb5c54800fdc42609513dd68decb6a9ee186"
  },
  {
    "sourceId": "bea-sheet-024",
    "mpn": "12000203",
    "rowSha256": "909721ca84417d36b3d32947a51380ee71006081ce0667b0cd572b711fe1cf56",
    "sourceSha256": "1224c0fc7caaa5d97592b8815adb854a8d010e29bc8b50af2045075521f11b42"
  },
  {
    "sourceId": "bea-sheet-025",
    "mpn": "12000211",
    "rowSha256": "2595a00fd0e4b3270fabf3ec02e68a26993da0113c8b9c42f541d129fd0c093a",
    "sourceSha256": "0bb4907cd0b2f76e06d5a1e46d4a9a31ccefcdd02fa34acddb6c977ae490311e"
  },
  {
    "sourceId": "bea-sheet-026",
    "mpn": "12000214",
    "rowSha256": "bbaa5ebb1b466fa1a8a020bb127cc5c1122d4f6760c1d32e693854a20371ce2c",
    "sourceSha256": "61f2a547432c8bb4fdbc7ff6b1c1d163d2af0ce06bb8b304b94fdf3e8ec9c16c"
  },
  {
    "sourceId": "bea-sheet-027",
    "mpn": "12000215",
    "rowSha256": "a6eb0cb26b2b005724a62ce1d653911a2c82ebd0899303c2696d0c3434f95a11",
    "sourceSha256": "da5c5afe976c3823ec5334213c8fd58faf3f26d7e9250163047c505e324b6040"
  },
  {
    "sourceId": "bea-sheet-028",
    "mpn": "12000216",
    "rowSha256": "d9bacbcf473f78617dfb9d7d95b55133f7607b26372642414dae84c17368ecdc",
    "sourceSha256": "f1fe3723228fed0b40e2065331f011c4b2f56902e3e8660f41525cef958d84ab"
  },
  {
    "sourceId": "bea-sheet-029",
    "mpn": "12000220",
    "rowSha256": "7e5c2560fb920dd80aedd42b639822a13df4361ed661391b3d73ace62c9b1a5d",
    "sourceSha256": "eb2ba4309e0c8381d7bb128cb3245e04089822e472ea0bfef79179b4d8afb7d5"
  },
  {
    "sourceId": "bea-sheet-031",
    "mpn": "12000234",
    "rowSha256": "ea8783528ac2185c6d6eac6aed5854ad50ae2766dd76c6db94712d2d59101e74",
    "sourceSha256": "c0908570dfbba5b12ff4f646831ddbc7b89688a86d4f3a8901805cfc688afe65"
  },
  {
    "sourceId": "bea-sheet-032",
    "mpn": "12000244",
    "rowSha256": "7035c662661b1aca8c915b0e8c2d741d4d1a8704a257684f4d9560234e700ca5",
    "sourceSha256": "93e9ab34cdedb8f264eb8a84f7965b290ed2fe1596a1c228809e3b5b81202a6d"
  },
  {
    "sourceId": "bea-sheet-036",
    "mpn": "12000290",
    "rowSha256": "d87ffee726c7ffb4b2fabaebc27a4ee4d31527e6bcc6f973323c8737921c6047",
    "sourceSha256": "7420a7f49a8108ae8e85e590ddf6c9d72ca302c71cca11f7af0aea438286bc52"
  },
  {
    "sourceId": "bea-sheet-037",
    "mpn": "12000291",
    "rowSha256": "49f0afca0cfef3850d09e03e46bf1b987c3678fd96d02d326040b15c003900a4",
    "sourceSha256": "a1aa83d250e3803496f5454327acb219a0ebe03b6dcfabb9a966c5d787937095"
  },
  {
    "sourceId": "bea-sheet-039",
    "mpn": "12000295",
    "rowSha256": "4bd700a01c1e50bfc535ffbe4dbfe4364be8efc7743f8b08ba21a6bee7b4b19a",
    "sourceSha256": "1c34f935727c2a0e18bbd1dfab46ffe619d94533ec456a88ccbed0b81848bcdc"
  },
  {
    "sourceId": "bea-sheet-040",
    "mpn": "12000322",
    "rowSha256": "fa25e84bb946ecfe747afe90f307c30fbe2b326a609a7bfdf9886e407ac158e5",
    "sourceSha256": "f1ebd7859d542296953cb9a05c0964d161b9105a2734eae2311b02dd64dbf34a"
  },
  {
    "sourceId": "bea-sheet-041",
    "mpn": "12000324",
    "rowSha256": "57180385cc73ee9f7fb93a56d2af7905625484e7ee5fb05e78fe97d1ca2397d2",
    "sourceSha256": "a8be36fdfbee0d9f13cd03c336a5b9f1710adb7d7da78ad29c9853077d1cb521"
  },
  {
    "sourceId": "bea-sheet-042",
    "mpn": "12000330",
    "rowSha256": "b377ac20aaa801b45a61ce13d728b619480ee1236e29329dc13d83769535049a",
    "sourceSha256": "694271cba0e2aa86074865ab142bd945e64d575fc95365be8aaa5257142e4bde"
  },
  {
    "sourceId": "bea-sheet-044",
    "mpn": "12000437",
    "rowSha256": "9e817192342ed75b1aae77e7c1462ce5aebc51a6e4239e7decd2ebe871272e66",
    "sourceSha256": "0fc48f5964b38969cc80b6e4d38b6fd80232943b6701608b53134433ff6d73a6"
  },
  {
    "sourceId": "bea-sheet-045",
    "mpn": "12000439",
    "rowSha256": "c6ba1ac4ac2c6ee2af810b59d4b5ac1e40cfdc3ef85aa1a463668c3d62539fc4",
    "sourceSha256": "0af7c32aef2fdc1c9760b2803452f19a8ef2b4af9f4f26dc74e157471251d98f"
  },
  {
    "sourceId": "bea-sheet-046",
    "mpn": "12000500",
    "rowSha256": "7bad0eae47916bf2aa72924db044d9964f7d0090abf29183c45482dfd9d2e90a",
    "sourceSha256": "17806bd4524934006bdc60007d22a8f23cab277e7a479f07189da426cdc8b4cb"
  },
  {
    "sourceId": "bea-sheet-047",
    "mpn": "12000506",
    "rowSha256": "12d78c378dbbee6e9f453630da94c12835eb6102050afed945ddca3a88c0135e",
    "sourceSha256": "a231a71c3c51eece7bb615397ef8590bf72a029c00cfabc6df144ff5b832cbb1"
  },
  {
    "sourceId": "bea-sheet-048",
    "mpn": "12000522",
    "rowSha256": "fdeeaabbcc3ababb2aa88214d2afd6480dadd53ba3a4e239b568d90e681525e6",
    "sourceSha256": "a0ebab835ed4c68502b52621f0201cd0c43b5e8bf2d7983479e40ba797ab3c69"
  },
  {
    "sourceId": "bea-sheet-049",
    "mpn": "12000533",
    "rowSha256": "c97eb4748021352dd2a9a331db52a0e089572b1989669fae75feab4923a0b85d",
    "sourceSha256": "a31af90dcc969b53815f36d0b58ac6d3a0070f766bce637e874e1d4db73b79cf"
  },
  {
    "sourceId": "bea-sheet-050",
    "mpn": "12000541",
    "rowSha256": "fe47aed8127138971484e0936bc51588749c24d75b23d63f37bab3cf35e1b722",
    "sourceSha256": "7bd3acc5426035bb393708d63a739dea34c739791b60abfbebf6f84edecb087a"
  },
  {
    "sourceId": "bea-sheet-052",
    "mpn": "12000610",
    "rowSha256": "eb93e71758be4d44db3ae1e99a4e0061f8a025031eb3cbc8059bb3d11fbff71c",
    "sourceSha256": "4c11c11ff56b79ab77600a5ff6eb29415550b045daf66aee8556bb1a68a732a1"
  },
  {
    "sourceId": "bea-sheet-054",
    "mpn": "12000630",
    "rowSha256": "bb90ac0bc186b31612d49c39acd9b678b5e7f0e840a51f7e4a5d1a518969901b",
    "sourceSha256": "b48331dddda915f6fb21ea7221cc025598bf6fa69b126c36d279f94100538777"
  },
  {
    "sourceId": "bea-sheet-055",
    "mpn": "12000631",
    "rowSha256": "4b914738f3f57ad4fda0584960355cdfbed0af6c59d74b16af105d9e9ae6c6dd",
    "sourceSha256": "8b738ce79ed58a9bad0ab6cbaeacb5f06dbd8b9f22de4a0f7ca54d3c6ea81ec9"
  },
  {
    "sourceId": "bea-sheet-056",
    "mpn": "12000639",
    "rowSha256": "6943ff43cc6638bd36d4caec280b009d85122733e6fd1d76e2975cc6ed9008b6",
    "sourceSha256": "9b103ed744f86c22f3ee43b4e64dc708e4b3ff113d29edb1b4f0b24435a38c5a"
  },
  {
    "sourceId": "bea-sheet-057",
    "mpn": "12000648",
    "rowSha256": "e3a6e618362ebae80e6fdd3628d3f869650d1f6e6e3986914d7088e73961aa59",
    "sourceSha256": "af87a2c16a7f1e43bb972a9d8fa8657b86f8301e71a81deb843b1ededa6e9859"
  },
  {
    "sourceId": "bea-sheet-058",
    "mpn": "12000650",
    "rowSha256": "d01fb272095d8f1bcb82d5ff82b3bd131431175dec94194512353d36be2d41f3",
    "sourceSha256": "cc9980ab86c52c011f3d80830e7aef19665550b351cb974a8d95229e7a5b4973"
  },
  {
    "sourceId": "bea-sheet-059",
    "mpn": "12000660",
    "rowSha256": "bedc42106c852cfa9e20c1540376552f1321abe56a9e2e2520993bb3c2d4925e",
    "sourceSha256": "710d178915548703c5830c0e6132dadb19adc2a9c98261765c0d3a4d8ea37314"
  },
  {
    "sourceId": "bea-sheet-060",
    "mpn": "12000662",
    "rowSha256": "53878e2c58ed0250d7bcf19cf09e17be7f6a1e0fbc0c278f4b3b96569de32a26",
    "sourceSha256": "d8e0c8c68ca026193a6a7ce84c0c84a09a91c2a484178e986f0da68a14c38364"
  },
  {
    "sourceId": "bea-sheet-061",
    "mpn": "12000663",
    "rowSha256": "2a64d29912cda40a124e956e0935fd7b57fd09cc9c5908c0741ea1065937f90e",
    "sourceSha256": "06a5d7d8f861098948049d97b613b335b47420f4d7e05db0eeacc08a43b2c371"
  },
  {
    "sourceId": "bea-sheet-062",
    "mpn": "12000674",
    "rowSha256": "119adaa7258ef09b0d8a8060df3e62db5d5c2c5dcb3e5c9025d377b7d50edd4f",
    "sourceSha256": "efaf3b78c2de22f899923da3d290c806baaed971166c2013f186999d89d56e41"
  },
  {
    "sourceId": "bea-sheet-064",
    "mpn": "12100004",
    "rowSha256": "c85a7de2af4a713dae75fb289cb8e4ccc42123c792156e7709301877a4e3a5d4",
    "sourceSha256": "4f53f3ea38122a1dfe7db321d71174aa3adf948acd36a7a7fa13430d5ea098fd"
  },
  {
    "sourceId": "bea-sheet-067",
    "mpn": "12100197",
    "rowSha256": "0b4fba9f54ebc6824e4286ba3011c69d206a49b401f11f12bb6e8ed2d6c07087",
    "sourceSha256": "a0f8a2df12475addea7ea6f2a66e8d0739bd74bcabbfeabd18d4d8a96dcafdbf"
  },
  {
    "sourceId": "bea-sheet-068",
    "mpn": "12100233",
    "rowSha256": "b7510ae8728d15540444c5d6dade64430d0f1f498c30ce4ec70766d2b00feec7",
    "sourceSha256": "555936a862c372851853ba48e48e6e168d218dc1ab9630cccbc4466ac783aa35"
  },
  {
    "sourceId": "bea-sheet-069",
    "mpn": "12100234",
    "rowSha256": "a2c24aea20cbde655bc0c4d57dee261dcb03bb3aa1704ac01bf72ba35cadc9d5",
    "sourceSha256": "2e904a05ac8584a150faa9e2f12e63980ce78ee03131106514d1bfa1d0d5318d"
  },
  {
    "sourceId": "bea-sheet-070",
    "mpn": "12100241",
    "rowSha256": "9f7cec77c53c52383537ed49d521d1f760b34083bf5c3e88ee95cff34f8690f7",
    "sourceSha256": "e7ad2777360d87bca74bc2e2975016db6ece2b79c55b1b192876fbb42ce5da31"
  },
  {
    "sourceId": "bea-sheet-071",
    "mpn": "12100282",
    "rowSha256": "9d2484e6e4b4948f734d13bf4b5d52150a9425b2e1771116d8c833836f93ddb7",
    "sourceSha256": "71a3685882d48523a1ec6a59bb1c4e3a45beb100f47a88aa8550e6e9c7be71c3"
  },
  {
    "sourceId": "bea-sheet-072",
    "mpn": "12100283",
    "rowSha256": "fe833984c9657e69f79afc3995ba7258766ded8f4ba4f28900db3cb9446e01e5",
    "sourceSha256": "c6eb0f5d1346f3985f05f8f4aa68f8fbeaf8d38072e134f7090c544f3e3abb4d"
  },
  {
    "sourceId": "bea-sheet-073",
    "mpn": "12100285",
    "rowSha256": "4988d40312562dce5b444c8245140c1d5c2d1d46aa2694168d3404b3ed94540b",
    "sourceSha256": "539a44c5634145043044d6eecb5425991da4114b04ee891b97acac4c6e17df89"
  },
  {
    "sourceId": "bea-sheet-074",
    "mpn": "12100292",
    "rowSha256": "a5a2573d32d3d238b08413ed78c177d7905ac8107f1260d8501c515ddab85bf1",
    "sourceSha256": "db45b613be52172d3ef2c497cefee01b4ad3848f6f448a2a39c51d5824d9a7fb"
  },
  {
    "sourceId": "bea-sheet-075",
    "mpn": "12100293",
    "rowSha256": "e84407a075909bcca3a06ddbabdfc941db27ebf2110307f9a9fdea898c931d72",
    "sourceSha256": "335044b7b995c9f79fa4701d9ef4e80f1a50230569a7369f199056e980f43dda"
  },
  {
    "sourceId": "bea-sheet-076",
    "mpn": "12100331",
    "rowSha256": "6f938768f89c0fcedaf08f7b047cec947147fe35129224df7afc3fa16eb409f0",
    "sourceSha256": "b0faf31c8f9e117547d85047f9b810571f67a16312394ac56598606e79bd8338"
  },
  {
    "sourceId": "bea-sheet-077",
    "mpn": "12100345",
    "rowSha256": "777826ddf373f5fb9ab41e3dbbb6e40357f2b7692403b1ed1a8b21a0178a0551",
    "sourceSha256": "fc1b85f9ee80b33dba9e6c65ec3dbc80a52c6002714739a961c76c5e9d2b6f52"
  },
  {
    "sourceId": "bea-sheet-080",
    "mpn": "12100427",
    "rowSha256": "558a33bddf0ad0f995aa1a5f280854fc4c96600fa254bd0ca5c8fc136624b228",
    "sourceSha256": "1726254eae495b26f95ee8fa3c053d96bca695893d56b51451886b2221dbf1df"
  },
  {
    "sourceId": "bea-sheet-081",
    "mpn": "12100447",
    "rowSha256": "b703f9e043ab383ef8b6ef2c80d3fe9508b14e545c2821a7f980f3ad2bbe5e9c",
    "sourceSha256": "51df2d9f2969428aaa53a81cef4875ae8c2dd2be52279813fbebf7a5d0a89350"
  },
  {
    "sourceId": "bea-sheet-082",
    "mpn": "12100453",
    "rowSha256": "e928b71def0a6ddafa908e9167c04cb2761da81531d5012a5815cda9e68eb1a0",
    "sourceSha256": "ded6bf5bc4170ee300ec9622bab58c255ab2db3a9e77644c8545122f867760c1"
  },
  {
    "sourceId": "bea-sheet-083",
    "mpn": "12100458",
    "rowSha256": "061ff74c6b408bf6f8a6dde168760a73937e9e6a9f4166c356adcca870d509bb",
    "sourceSha256": "c8e2e04e280403479a01fc7588181e213c9a03805eb285058c467ab8c313c26c"
  },
  {
    "sourceId": "bea-sheet-085",
    "mpn": "12100471",
    "rowSha256": "ea7671bca0d12a4760a418b523dc014f318d3fa3ff802b0e53e7d8290f364c98",
    "sourceSha256": "1447eb66ff9e49040cb75367916be55c03fcc54d4e16a6223233b6a7832eacef"
  },
  {
    "sourceId": "bea-sheet-086",
    "mpn": "12100476",
    "rowSha256": "4086161973b7b4010bdeaa5923ac6b5b0d3c82b37ca8effc8adbf587eb5b8994",
    "sourceSha256": "0f6512396f246b0d23ceae4005f015f8c9f4328f4f12c02bc128771e32c95912"
  },
  {
    "sourceId": "bea-sheet-087",
    "mpn": "12100506",
    "rowSha256": "d9fea1cbdd408f9418a25b4fdbb04355c83f2e0aef2341179c382dbca5987b0b",
    "sourceSha256": "2dc45e235ba0f2712b3dc584675234650b1c6bf75e4f24bc46fd228b192ce1b3"
  },
  {
    "sourceId": "bea-sheet-088",
    "mpn": "12100507",
    "rowSha256": "e26c66a0d6446ca5cbc1d87641a9448e822f41c7e9e96efc6cdaead0ac068b78",
    "sourceSha256": "2d4c92070e28e4c8de64403be7bfafe5e89b6c1aaee1eae034a040c79a7ba60d"
  },
  {
    "sourceId": "bea-sheet-089",
    "mpn": "12100510",
    "rowSha256": "46b96fc04d8b527fd464d8c3139ec47f2050a8e737588eb74a17bb307263aec5",
    "sourceSha256": "3e6a0d6e7f3780c0dbe14b1abb52b5e008163a9544beebaeb8c7f97a95b96d44"
  },
  {
    "sourceId": "bea-sheet-092",
    "mpn": "12100591",
    "rowSha256": "2aee508f283045d0656c83506dcaf2e0ccd82e95dbef04d9f1203e034d3e462d",
    "sourceSha256": "d78282dd3789978a4927a3ce1bc43b90431d173c0326ad1587262bf187190888"
  },
  {
    "sourceId": "bea-sheet-093",
    "mpn": "12100609",
    "rowSha256": "de6f1bb0bfa3a59e73a6e914cd10785b1c3c223d3bb02be4e4657074205f7e8d",
    "sourceSha256": "834bc220c3749d4b76c0c2ae4c29b2521aed19d00a8413a804349a4cb7d1e0b0"
  },
  {
    "sourceId": "bea-sheet-094",
    "mpn": "12100635",
    "rowSha256": "8863591742655b34b905c4a3b502bcac2ad23af9bf7f03e62d4a227bfdbfbe94",
    "sourceSha256": "a49481abde4e37f8ffc07e3cc5cdf85f9a6433d0cfa822a3f5be7e286b6bbf25"
  },
  {
    "sourceId": "bea-sheet-096",
    "mpn": "12100667",
    "rowSha256": "3bc07b33dd55d69a30fb857f37e677d141fa9c8d9bccb2afe54cb0c7413c820f",
    "sourceSha256": "5d264c80af049c1718204804724d8a54ca8b9b3861183fd62d7ec060a3723505"
  },
  {
    "sourceId": "bea-sheet-097",
    "mpn": "12100670",
    "rowSha256": "148a5dfee998502b237805bb5869f0a65a420abeba5fe04c1ff9c5ad90c3ce74",
    "sourceSha256": "9865361d55ab1c2f51bb70ada3e8698378ae765ddc86cd4181dcf3ebdff5b2c0"
  },
  {
    "sourceId": "bea-sheet-098",
    "mpn": "12100673",
    "rowSha256": "019e4728227f9d9c6aa7f7aeba82df0172a05028074ee84260ac18bae639f54d",
    "sourceSha256": "4dbd497cddbe20b63cf3ac463aa0240e4732ece74d98b0ed738897db6a21dbbc"
  },
  {
    "sourceId": "bea-sheet-099",
    "mpn": "12100689",
    "rowSha256": "3aad850f1d776441729aa10321bd5a166bf9f58da08f3a038cc431f3a66d0b19",
    "sourceSha256": "c3faae92996d0f89a0da3dd820d5fc502be4f112f5af53c9220ff2a226111aae"
  },
  {
    "sourceId": "bea-sheet-100",
    "mpn": "12100691",
    "rowSha256": "91057b7c78e7b0939dc546ceab5afcc5bb3f5348120d3b9af26daa027aca7ae1",
    "sourceSha256": "c12d44682ebb2e516e85c5759fadc6e2bd093b433236bf2a8fc6e5bfd0c3d7bd"
  },
  {
    "sourceId": "bea-sheet-102",
    "mpn": "12100694",
    "rowSha256": "8dc09cde056b8f094e0d5abe36932311c24837ceb673b06181225cc21ce98f66",
    "sourceSha256": "bcd78c43a25e54b8288caec690acd32ecc1e35e9b148282579b76cc5c9291ba0"
  },
  {
    "sourceId": "bea-sheet-103",
    "mpn": "12100695",
    "rowSha256": "7ef6cf4005e9d12e5243f29d09ff3a5cb936bb26b30d1d289f4ccab038e206cf",
    "sourceSha256": "6d639d17854245adf21d1c34db3bf53fc94c892efbef79e2a440f6ecc6cb70c1"
  },
  {
    "sourceId": "bea-sheet-104",
    "mpn": "12100696",
    "rowSha256": "fde6b8d9b104ef73ce587e2112c849f4aecbbb192cd7f86c0d0695a82869caed",
    "sourceSha256": "424c9f2f5267390ea938bf2979afd71ab7de98ab2b1dbcf5ddcf81df474fe4f3"
  },
  {
    "sourceId": "bea-sheet-105",
    "mpn": "12100707",
    "rowSha256": "326fb43eba8e58e19a0120f19f205840c72a272c87e0ca1d5bb1b93814aa40cd",
    "sourceSha256": "42ceebb1e2e4170c19e0a2fe03275d910c11afb5130202db70ddee3d72d3c3ae"
  },
  {
    "sourceId": "bea-sheet-110",
    "mpn": "12100729",
    "rowSha256": "6457f04b0e222a8769ccb80d9c7b2335979773aaa11e01f60d3c1e50caafb1ba",
    "sourceSha256": "90e8e33933cfcf05d08177564bf5e90f02a04db6cfc9677169ae45d478926b07"
  },
  {
    "sourceId": "bea-sheet-111",
    "mpn": "12100735",
    "rowSha256": "37d6599e72b4ba549a3a920043adf0776c05114b0a095a2671ed03d6a252dfbb",
    "sourceSha256": "fd63905010eb95568caf457160e662c307388dff0e17043e267146567e89dd27"
  },
  {
    "sourceId": "bea-sheet-112",
    "mpn": "12100737",
    "rowSha256": "87431850429fe1a5b2f93126e452e10dc058571ff937bc59d8f40fdd0856ad97",
    "sourceSha256": "8a35c85d55b0ccc6e58aa4855187a2146f368f97beedc65858fe73394fb2c9d6"
  },
  {
    "sourceId": "bea-sheet-113",
    "mpn": "12100738",
    "rowSha256": "c0d9b098ab3b6cf7314f0e10c0428c290f7878301d9e5cb3bd9973b8e8df4076",
    "sourceSha256": "9ae58b5b441f63d012f8abfc317e689ad0ada0361a5094a3bf369c9734d61f3f"
  },
  {
    "sourceId": "bea-sheet-114",
    "mpn": "12200081",
    "rowSha256": "973ab2c3fdd5d0e856c75be1837d117f6d4bdc0d854b78e2442eeba1cdf6d49b",
    "sourceSha256": "46e604b66c54eea56b7b2bb617ceb90afeb1c35e36759425e2c7d347bfd3f9ec"
  },
  {
    "sourceId": "bea-sheet-115",
    "mpn": "12200099",
    "rowSha256": "8dcf49cf766a0c9cb6a79c642b5d3eebc3735140633c7f5dcb6e87c06c3efa03",
    "sourceSha256": "716629d5681ce4ff67e31d7ed44e488554e3553114c8704935e2131a8a9581e9"
  },
  {
    "sourceId": "bea-sheet-116",
    "mpn": "12200111",
    "rowSha256": "d5d4acf201ee392d339c161370aa0d1890e92865c0e66a785c2b4c53d337d84d",
    "sourceSha256": "d3cebe1d918dc52c66a242df63a6e337885fc2e865abf04ffccfe30a39f37d12"
  },
  {
    "sourceId": "basso-product-1",
    "mpn": "S71/16",
    "rowSha256": "56cc97a55b2933fb02112ac68ced8d481ec82812893f83c469cbea99f809696f",
    "sourceSha256": "5440d52e1cda2f70eda99ae10dc5222eeef0037d402ba5e2d137a90ea973020c"
  },
  {
    "sourceId": "basso-product-10",
    "mpn": "S10/13J",
    "rowSha256": "9ff34ac0124317e7ab8bfe5689c18f1d9d2d52d62e08d3f195b5f9c563c77630",
    "sourceSha256": "b327b47e167beb1f399c26d63aca3f2760ace91d335e499e543b349fe85f120e"
  },
  {
    "sourceId": "basso-product-101",
    "mpn": "C38/130",
    "rowSha256": "3a621b60ed2c12890ed347de4518143607fba1de277400cad686a3e33e81fcc4",
    "sourceSha256": "fc04096b88ac90ec652440da3eb66edcf31ee9dbc42d16cf0b9b5d7bdd6a3459"
  },
  {
    "sourceId": "basso-product-102",
    "mpn": "PN-F1",
    "rowSha256": "83c3ee32e3d2e788fc1e57be08543c03e7ce54d1d2b7b8ba83a3d61b825df2eb",
    "sourceSha256": "0df4e231ff06a97db105a5fd008b86b5b8b461ef16a7f1f198570fed5b66946b"
  },
  {
    "sourceId": "basso-product-103",
    "mpn": "PN-F2 (Roofing)",
    "rowSha256": "7590ab9c239b36fb8f8142789133185e464525f43710677e4e82366ab25d8ec4",
    "sourceSha256": "7f5ec3798fe0c47645b91aac19134f7c1a9c55367e2efca8592a05f84dfe3773"
  },
  {
    "sourceId": "basso-product-104",
    "mpn": "PN-C1",
    "rowSha256": "08e371d1889cce66593b46a2621a35d57b1086b65884663979423d4004d9484a",
    "sourceSha256": "02f9ee10a72052457041463b5998059089d6937cf43859209805c5d443ae9371"
  },
  {
    "sourceId": "basso-product-105",
    "mpn": "PN-C2",
    "rowSha256": "fbf8dac0de396ada3fb49a7267498b04d27caf0591f8dc9352826188a97c5334",
    "sourceSha256": "5a30861a02c04afe5f8261cc7017c3599b99a2867601eaf2461c319f337998b3"
  },
  {
    "sourceId": "basso-product-106",
    "mpn": "PN-D1",
    "rowSha256": "15c0973e83dee276327d6510dd5d9246b18e601f59fd64ac39e72d16f83c127c",
    "sourceSha256": "4d8551ff533e6f7dfe642de5383aab5f3202737af7d3f7739d089b5533eacc66"
  },
  {
    "sourceId": "basso-product-107",
    "mpn": "PN22/50-A1",
    "rowSha256": "f0b9afb5f97baa630e9e159978d6096536ebac3f6a2ded01e3822c122b3bf0e0",
    "sourceSha256": "58c37a11038115e4cbc3afeadd6745cd03f1841cb3623a1d4c5eedbba96c89d6"
  },
  {
    "sourceId": "basso-product-108",
    "mpn": "PN34/50",
    "rowSha256": "9784735ffb49e0528e4497724d7f548d15db0088ba8b30a7c36163d9f21d75cb",
    "sourceSha256": "8c6dcddb453b1f124d0ec8b54bf8088c8c3970323b57e4b8668ff8280f27e2c2"
  },
  {
    "sourceId": "basso-product-109",
    "mpn": "PN34/60-A1",
    "rowSha256": "a018eed6081a01cbeac984f5b01560aa50bd35d90af2f43c0d3f092db828f35d",
    "sourceSha256": "18c5169239dd843ca3b55ad45a6e15fd147ed424932cea0a97e8f5927ba7acc5"
  },
  {
    "sourceId": "basso-product-11",
    "mpn": "S10/16J",
    "rowSha256": "02d6a6750692ca8757e822d9f2fc6b25737351bcb73889c9456441f5d55fdf34",
    "sourceSha256": "15979ed94d73874e960cebfb0c9498577ce742d2e1bee5043c3dea671af118e5"
  },
  {
    "sourceId": "basso-product-110",
    "mpn": "A34/65MC",
    "rowSha256": "4325aa52c52beec843fd61937e7f138b8ed6c7c9a87d470b3dceb0e1b537df78",
    "sourceSha256": "256a4ad757dfbefe8fcb3426385312c900770740f744d49499aae30c86ae32a0"
  },
  {
    "sourceId": "basso-product-112",
    "mpn": "FS90/40",
    "rowSha256": "420a805831958b8775450c270b42784f013dc8959b9aa47b8fef912174c2b95c",
    "sourceSha256": "5175562f89ebfa59ca3d5d7cfbd0ca678da619ff7e4784769b8b7a1280bdcb2f"
  },
  {
    "sourceId": "basso-product-113",
    "mpn": "FS155/50",
    "rowSha256": "16465947629a5a939ae6729e1ec902b0010a577c25060791660589ab20f2a001",
    "sourceSha256": "d07f8f22087ba1cf6f70693f2217e9deeabb8adefd5da2bac51e3d9ed47677fe"
  },
  {
    "sourceId": "basso-product-114",
    "mpn": "FCS50",
    "rowSha256": "611d6feb3f37c02e1813d3da308bcb0fe751c2e6307fdf1b8fc5bcdaf427843c",
    "sourceSha256": "c962f4652e35ffd9b5815d0da7213ef1d05aebc82da327e147c5c6c46f26092f"
  },
  {
    "sourceId": "basso-product-12",
    "mpn": "S10/16JLM",
    "rowSha256": "e41d10f511f19c06c85f3e488fad5639204d18399120cf6a00b0efdf2390ab22",
    "sourceSha256": "b7b3432298ccc021742506697c9aaa346fcdba6fd7582018e678f6954bd4c300"
  },
  {
    "sourceId": "basso-product-13",
    "mpn": "ISD 009-A2",
    "rowSha256": "5e544ad098589d91475f1405e1283fc744eed8279d02a18d932712ee92de68b6",
    "sourceSha256": "9885cb7544702d9fc6ce77942a20f9be492529a0f03ab4812d8839baf900714b"
  },
  {
    "sourceId": "basso-product-14",
    "mpn": "ISD 003 (AI housing)",
    "rowSha256": "4b502eb7e4bbc4840b64b232993ef5b2691f699501a833a44fc72a4d71dc6ec1",
    "sourceSha256": "59ac3688ca18b7abcbf0dc13c2c1fffd3d5b9ecd32fc5e7af5cbd3a3adb6cbaa"
  },
  {
    "sourceId": "basso-product-19",
    "mpn": "D555/18R",
    "rowSha256": "6ce131dda540bf7ae7208325eb381bbc5c3d9890343b7193d50e88efa9115850",
    "sourceSha256": "e506aa57c6409921801bb85b19c90adf84959400b045a5a584c1bc08380754b2"
  },
  {
    "sourceId": "basso-product-2",
    "mpn": "S71/16LM",
    "rowSha256": "a61059fe5c4f724e53e15be360db250d8c92142b3c2d49dab8e6e7c5c98934bf",
    "sourceSha256": "4e99a7007ff605fbccca0819dcb18932a26a548633c7dcda56f03ffb9bb2475c"
  },
  {
    "sourceId": "basso-product-20",
    "mpn": "D556/18R",
    "rowSha256": "543b978aabf88fc821a8d6b731eb07fabff19a946b398c939d6949ec3a50dc6c",
    "sourceSha256": "dd92951b642e05fe869dc22f5907c85efca062892f5e33fb852026e0fb8a9957"
  },
  {
    "sourceId": "basso-product-21",
    "mpn": "S10/10F",
    "rowSha256": "086f2953a707bde2a6edca8489ba31bcaa7cef8e64dc92d151201c545bb8a145",
    "sourceSha256": "c80223952eb8180b148cd57dc408a40eb2b2ce649cba78b307056ac94a5b7c6a"
  },
  {
    "sourceId": "basso-product-22",
    "mpn": "S53/16",
    "rowSha256": "644ca23c8752349abab1d30f7a795b3e034497ddfe39ceb070793cfb098cef02",
    "sourceSha256": "cf221afef69cf4126435df32e9195e8e24a77128e37866f558cdf70fd69a52f7"
  },
  {
    "sourceId": "basso-product-23",
    "mpn": "S11/16LM",
    "rowSha256": "edee0fc5ba6c23becf2935a663af40c5ed75c1e8cf96be847a97d869980f42e7",
    "sourceSha256": "c16846d0dbd433837ba1c07a5e7c0ff7dc291fe0c3a3d9b84a595a18b04f0f5e"
  },
  {
    "sourceId": "basso-product-24",
    "mpn": "S95/16LM-A",
    "rowSha256": "91997269007d557c96f39fe7893e0d6b3222df5de1bf0b8ec8f359f242922b40",
    "sourceSha256": "7b71419aa9e7476f586dfceb8d2f2be69cae8a1e6d5936bdad1dad72a8294775"
  },
  {
    "sourceId": "basso-product-25",
    "mpn": "84/16E",
    "rowSha256": "e98513675223ea3e9f7889660e533a37c7f34d89dce206ea09314ee3be657e24",
    "sourceSha256": "36a2c66bb82d0564369cecf17990899135ac9d94f7aa854fecfccdaf9f349a66"
  },
  {
    "sourceId": "basso-product-26",
    "mpn": "S95/16",
    "rowSha256": "5ee0fc7b2af6f126b748c68dee20e94128c6db264016f94f25a2494f028ad320",
    "sourceSha256": "0909a4476f125199c314b7a92260cbe342805636c830508d2b60833f403f7126"
  },
  {
    "sourceId": "basso-product-27",
    "mpn": "SAD/16",
    "rowSha256": "7bcf83ae9a682ceba16e9591f7ef0e78a891c95c506d2cbfdf20725a32324a58",
    "sourceSha256": "12abbfdd80b328db78286831750d9c1bcf75e74b7b26718d96c80acbd10ea03c"
  },
  {
    "sourceId": "basso-product-28",
    "mpn": "B23/25",
    "rowSha256": "49344dfd3e1b8d631ec5a78addf5a9b6f3072d26b724a09d36050ddd1af294f3",
    "sourceSha256": "7d69c6855cb7c3644f2884911c62a5928bec19205dbfa201f57d5d3e1f7bd238"
  },
  {
    "sourceId": "basso-product-29",
    "mpn": "B23/35-A2",
    "rowSha256": "8a32855ce67004a95aa26a3c5c54374652ac3befab7f8243fca978720261102a",
    "sourceSha256": "10a11192eb65a7fb89b91e84a6904522e7e9d44eeed8c0a6f633bdea0925d6ee"
  },
  {
    "sourceId": "basso-product-3",
    "mpn": "S71/16LN",
    "rowSha256": "c839b2b87874743397311b2c96a25adf2effe2c24f011a08b5f6207fa42babcc",
    "sourceSha256": "fcfcaf20bad560b72afa45e78f467d7139cef1bab0c8170d69de8097e7abecc6"
  },
  {
    "sourceId": "basso-product-30",
    "mpn": "B23/45",
    "rowSha256": "c5eeaed183198a821abbd82e8bba9977597c0ea6d01c998e6895bfa355d09fd6",
    "sourceSha256": "40f06af2b72025af4605aee8cf755592c1397b5864105c795029f1d3cb22b88f"
  },
  {
    "sourceId": "basso-product-31",
    "mpn": "B23/50",
    "rowSha256": "2d73ae9f42952d6f26ac2ebcb18c6cafc458c9b38741e54f7661e5140b6ae6b2",
    "sourceSha256": "7297850813b9050e40a7c6752af4d0c6ac6c4f69c751779a2c44b8cd65180cf4"
  },
  {
    "sourceId": "basso-product-32",
    "mpn": "B21/30",
    "rowSha256": "52f1b95dfc1e99a0360f49044455d32e58d136aa1d0259ef5982ab846b4bdd40",
    "sourceSha256": "85ad9fbdcfb29b9be23e70735d081701f6d8a90af8324279e3359c02192e9575"
  },
  {
    "sourceId": "basso-product-33",
    "mpn": "B21/45",
    "rowSha256": "52a518c64cddb20aa085cac0e0c911604519e72c7800c8649300fd02212a739c",
    "sourceSha256": "c503776dca8df6a9d338e9d8e169c728bd3294280bcc9e4df01173ac6d31c02d"
  },
  {
    "sourceId": "basso-product-34",
    "mpn": "S93/25",
    "rowSha256": "44eae868473bd25a0d34cf8fa16e4dd61062cd899a4e8c31e675ba5401599717",
    "sourceSha256": "816b6f1ef6003c20975a9d3073857dc85e2b70e59b7df3e644cb25e277e70549"
  },
  {
    "sourceId": "basso-product-35",
    "mpn": "S97/25",
    "rowSha256": "d0960b0f36a63dedf03138ed3b1cd494e26d9a23af5f4fc5649aec1f7b59f82e",
    "sourceSha256": "66121339a26e3d703cd42a7defce03519b9211a4ec171d800d77f4e2cefb9860"
  },
  {
    "sourceId": "basso-product-36",
    "mpn": "S4/22J",
    "rowSha256": "52c427cecec99499346190282b0b62f46ccbc98e4b6ab8074139123d167ccf7b",
    "sourceSha256": "6ff9a0931f15c42f299a35ffbc62115322496add821ee6bb8401ea62634f1035"
  },
  {
    "sourceId": "basso-product-37",
    "mpn": "S4/25J",
    "rowSha256": "6915fc2dbfe6a73e775435e8d093e57ec2707dcf7bb8c1296d9da7d82734962f",
    "sourceSha256": "fbc7dcf6cf2fcc79354ff2e43963bc2236149bf30577146456994cab3ea4ea2b"
  },
  {
    "sourceId": "basso-product-38",
    "mpn": "S410/25",
    "rowSha256": "514d94b92b0c2197a7cfa2ebceec592baae4bc9611a79d462eeca58697c81d08",
    "sourceSha256": "a2866ae1c2a450760b4cdefd6503afa949b40e18a958672e0eacde2b382b3f95"
  },
  {
    "sourceId": "basso-product-39",
    "mpn": "S92/25",
    "rowSha256": "d6f54b5e163b68426bbcd1c1e6c07a955818c662937b71b430a956fb3879b93c",
    "sourceSha256": "d7cd39641812e8c65123d906d0a70d8c90b54bf7ce7feaa8e264ba101e2f8351"
  },
  {
    "sourceId": "basso-product-4",
    "mpn": "S80/16",
    "rowSha256": "c5dc2fd6c0cda62828fe8b0f2e81920367fab05749ce42e6e5e26ac18d8f34d2",
    "sourceSha256": "0f9b9599dcbd4367600f4d21fd471506266fb61e1dca906efa3f5d9544636535"
  },
  {
    "sourceId": "basso-product-40",
    "mpn": "S10/22J",
    "rowSha256": "730c635cddb641b81357aa9e0af0376b7b5aee616400fc05b8c50b9becebc431",
    "sourceSha256": "1e2172f76da8880986256e7385648b6a8ebb61e52b4d53772ee4eb4832fcffd4"
  },
  {
    "sourceId": "basso-product-41",
    "mpn": "S10/25J",
    "rowSha256": "94484d07c2f3beb1c463a2d25a499710a88e7c66b70b3f2edca42b6a3eee12f4",
    "sourceSha256": "db8f7e17c5f2ddd8281cef67320fde267e8948aa3c4f77c91206abf38bbf367f"
  },
  {
    "sourceId": "basso-product-42",
    "mpn": "18/32-2",
    "rowSha256": "ca2c46be6a526121a62c89e7eb242416c333731429bbf73fa90fe6cabef5e967",
    "sourceSha256": "55c70053691cd05c370d9e24230e3e77078447b8cb9f299341364af69ad9782a"
  },
  {
    "sourceId": "basso-product-43",
    "mpn": "BS32P",
    "rowSha256": "d087405e96cb0b4ecfb878d6e6ab01c06198892c944e07b68a233dc68e4276cb",
    "sourceSha256": "1a1599c1383b208c31e55f3b6d62891f51809dc885ae01a73da0677576753b42"
  },
  {
    "sourceId": "basso-product-44",
    "mpn": "90/40LW",
    "rowSha256": "515a6a815a5c86643bb36bb2dd09480be332fe39aa4727afc9900e6e282768cf",
    "sourceSha256": "395fae9d9ca43a24195dc202afcb9087e65654ace0769ff1041fd59884ec1297"
  },
  {
    "sourceId": "basso-product-45",
    "mpn": "18/50",
    "rowSha256": "b57320fb30ec090e5fd549700e02e2d2ee3a917711ad51819cd8404890beec79",
    "sourceSha256": "a85d07ef978545acc5ad89dd9737e329908b484110e673301012d750074e0fc0"
  },
  {
    "sourceId": "basso-product-46",
    "mpn": "BS50",
    "rowSha256": "ad5cfd2c952a38735261c6174137c47bf88e3c6d3a0355d31c7fcebe3529ff26",
    "sourceSha256": "c5d8c8df75e69bd3f857cfff3d088a5bac9c907c726ccfc0daa537f5778e36d7"
  },
  {
    "sourceId": "basso-product-47",
    "mpn": "B18/35",
    "rowSha256": "0c97492cbfbe5d4090fa7f3633ef3a1d8b81a4ae2c714489d3d82c8649170823",
    "sourceSha256": "3f5bc69824e2cf97f38e01dbdbce2fffa550cc6ff62b91be39ab4c5e7bfa63a3"
  },
  {
    "sourceId": "basso-product-48",
    "mpn": "B18/50",
    "rowSha256": "069069fc90f1133663f03ab819042f176ebb9c12bad447e7eea984f970bb46e7",
    "sourceSha256": "a36fb01d3db8bd3f252c2d6a58fbd930dd7812787111b0670bce8cc6908056f8"
  },
  {
    "sourceId": "basso-product-49",
    "mpn": "B18/55",
    "rowSha256": "0503bf28571f17dc0127c5dc57f844a41eeeec68dc2ebf8eb41badcd49a6fe53",
    "sourceSha256": "f0d78ebdb91dc41d7fd85174ad8f54e92bcce4d095112eeaf67948bf19ae2e45"
  },
  {
    "sourceId": "basso-product-5",
    "mpn": "S80/16LM",
    "rowSha256": "93b6ea8dc93192ad924b9af52fa826d2ea4c2a26ae82efac44f3993583310bbe",
    "sourceSha256": "ae67ec26a9d9407ac6755eeabbb4a21f16f0be92954992594677806d18763ed7"
  },
  {
    "sourceId": "basso-product-50",
    "mpn": "B18/55-A1",
    "rowSha256": "433ae424207de52e24649349fd3d524f598a9a23eea8d7bd2235afc289298557",
    "sourceSha256": "5f7c61221bd8a817302c838d7c08eee5d35ccbf600b1125936dd43cd4ef776f6"
  },
  {
    "sourceId": "basso-product-51",
    "mpn": "S90/30",
    "rowSha256": "52f748205dcf0ace3e6585870efd25872a150c5848987f87f51b2c074346fe04",
    "sourceSha256": "23758dc6f3bd506b19d30db23c0ea6a1f00ce8f2bc7e6ba9f5b0447b088be130"
  },
  {
    "sourceId": "basso-product-52",
    "mpn": "S90/40L",
    "rowSha256": "2121193e62e64ab9117904debca5842d769f1b95e918088f676f4be9cbe6fa15",
    "sourceSha256": "fc5c8adcaacb319af28883bf02fda9e63bda2f382b84a1f74909a263ad92554c"
  },
  {
    "sourceId": "basso-product-53",
    "mpn": "S10/40",
    "rowSha256": "83c35ed03b677e9a7c05baf4723aeefc0cf16374cf5026dc5e07ff822b0947fa",
    "sourceSha256": "29ff5c6aea0bf5579a4a96a6ebd0388882a14c0926450acbebadbd9e655ffff8"
  },
  {
    "sourceId": "basso-product-54",
    "mpn": "90/40",
    "rowSha256": "c8899e55be2b26b2e432277e047b5022e0622d40e3d4f829b60e4266e7ac7d1b",
    "sourceSha256": "fa484678d4ac831de2d47613b084371b45a2384aaa8324196cf82c007c8f0233"
  },
  {
    "sourceId": "basso-product-55",
    "mpn": "S92/40",
    "rowSha256": "75d9f8c63ca9f417ed45a72fd8249ae3cdf3c67892c2d1d0e3577d4a79337173",
    "sourceSha256": "1332a5492abc9ed4dab631f0e3c022d78a3119110bc2d8b96967e52f6c871e80"
  },
  {
    "sourceId": "basso-product-56",
    "mpn": "16/50-B1",
    "rowSha256": "ec3167694dc3c429e3b692080e94fafff9e4d73a87ca5dc9655e6a46a3866269",
    "sourceSha256": "37e1806f02caf62191cfaac566aed86303bd4089ac81f52d04329aa7a9eadd4c"
  },
  {
    "sourceId": "basso-product-57",
    "mpn": "B16/50-D1",
    "rowSha256": "4af5ed25e058465181fa9f113cbe6dc51d2d524be91c279adb6c2ebce67e2a70",
    "sourceSha256": "c06c0008c9b892842825be298498cbbe4c6c16fcc20ff539a30d6aeaa039695a"
  },
  {
    "sourceId": "basso-product-58",
    "mpn": "B16/64",
    "rowSha256": "e86ff9c70101072b47d11ae92468e1fb16c218dc14e4d8e920a2212fe5be33c4",
    "sourceSha256": "82fe2a51efe2b4f6300f4e3e0ec2fdaf3dbf734dffbffe64607b0e274bd29220"
  },
  {
    "sourceId": "basso-product-59",
    "mpn": "S8/51",
    "rowSha256": "a993afbd4aaaf3a702e26ca65f2255ef38d75da0b3c5286fea547d90591bc649",
    "sourceSha256": "7427fe0424018d5e6972c0be896f3448f91ae2f557de11b2916caf60a0ea0415"
  },
  {
    "sourceId": "basso-product-6",
    "mpn": "S80/16LN",
    "rowSha256": "9fb654383a805477240b02234b81f794b73f02d3ece9f6e746ff5b20ab20290e",
    "sourceSha256": "832d0a9a84c3dd8fe785bae34520be697fb0e177603cf9b9842e251cdbf53cfc"
  },
  {
    "sourceId": "basso-product-60",
    "mpn": "16/851",
    "rowSha256": "ca444bbd99c68c6980ba4f9f1cec8fc711e9939883d755d92357db8c34385ab3",
    "sourceSha256": "9ecdf5fb093a06373ac60db7804c638214b1bfc5db663f57c4333518d7e5d8e3"
  },
  {
    "sourceId": "basso-product-61",
    "mpn": "S16/1051",
    "rowSha256": "8ba669a657e441dd5bb7b54d04be5a42ca819698e7a5f16e78ffcb9d412c507e",
    "sourceSha256": "355f293371ae9c194a896d31a9f135b21f25d5eb92b58a984ca57aaf692ae2d7"
  },
  {
    "sourceId": "basso-product-62",
    "mpn": "S15/865",
    "rowSha256": "9c1056e7ba7ef0572215d1bbd86738aa349022c4ff305db0dcd5b62efc4528cc",
    "sourceSha256": "a2157592afba75e0dc1e0c7fa7fec670f850b75b16e502337bb913011e122a74"
  },
  {
    "sourceId": "basso-product-63",
    "mpn": "SC25/15",
    "rowSha256": "e800da23b959548f1527599a1b93a96b2556af5ae688807fdf52e860e2d9bd53",
    "sourceSha256": "4bd1b5dcbaabc8847a536b0db0416939fce819b25b597462390ea4a91356038f"
  },
  {
    "sourceId": "basso-product-64",
    "mpn": "S23/38",
    "rowSha256": "7555099097019d8a6a21561050f057504eacbf104b3b76adea707e689ac342e4",
    "sourceSha256": "4655ed6a5173d02e343f48e7a95a60169fd1cd23a13e5dd1c858698cabc74ae0"
  },
  {
    "sourceId": "basso-product-65",
    "mpn": "S26/38",
    "rowSha256": "84e2f6166a1f6a9c54841e7cec82b09e0cc8ae8e5d655a34b28d66478b06e9e4",
    "sourceSha256": "438b1fb295572ae50e8f91784defb1ec89ccc07b0c556bc7198529ba23b89731"
  },
  {
    "sourceId": "basso-product-66",
    "mpn": "S29/130",
    "rowSha256": "003d448a7427c760f38a524d51ed491e62bdb041c6a10c4fb8d56d0ffff25436",
    "sourceSha256": "c7f2ae8ee0326b9690f7e424300f8e276dd551ed8eeccd83f12dcdfa2794f29f"
  },
  {
    "sourceId": "basso-product-67",
    "mpn": "S29/160",
    "rowSha256": "4a890bc23a4f69d70a42397bb9b7029cf623fb0a47d349aaaa265d5689042ca8",
    "sourceSha256": "fe456494dd26a519918421c2437ef034d785edf24f73031e7f627826d94013a4"
  },
  {
    "sourceId": "basso-product-68",
    "mpn": "T30/38",
    "rowSha256": "4b9d2de5853397ecca7c295c8e04872b5fb999ed5eab3aa8a6c8b3ac7e448c67",
    "sourceSha256": "c0a588365e02d8469faa62628204143b63d0edb41b2fda5a29530ce2bd3ceb37"
  },
  {
    "sourceId": "basso-product-69",
    "mpn": "T22/64",
    "rowSha256": "97936c8c6df6ff7922864c7810e7ac3566af346d918ea8a94b4189f3629a3191",
    "sourceSha256": "f19b9b5997e07dd6997f65e0616625887bf237e48596cb4a501f691826a81ca4"
  },
  {
    "sourceId": "basso-product-7",
    "mpn": "S80/30",
    "rowSha256": "79e37ed7a046268117b5e48d171e9a983f1ed68ab81f7af37285348aaaf6efc6",
    "sourceSha256": "45c1e695b09d6b4a17193cf9a2d2ab11307d208285c3c943f48aa15aef8d9da5"
  },
  {
    "sourceId": "basso-product-70",
    "mpn": "A34/64",
    "rowSha256": "b83f5b08e562d3db670382c37832408da849833ae606e725add12fa90506cb7e",
    "sourceSha256": "c972686a8d901c4c611e7c11e3bb08f83a401d34f3d1c301f0aa623dc96630ed"
  },
  {
    "sourceId": "basso-product-71",
    "mpn": "A22/83",
    "rowSha256": "b9f06caf15deee02e79880eb54b7aaa3fe63a2b703b214bd11a0bd19fe890e31",
    "sourceSha256": "ad1eb77a92abbaab28b02c7a976bc10fb0072b10080f2939028979ba425cb6db"
  },
  {
    "sourceId": "basso-product-72",
    "mpn": "A34/83",
    "rowSha256": "2be6d8b0bb80e97f731e7198b087dc03710d2d5964b668e22b3e9bb5a89a4b4d",
    "sourceSha256": "b3f8af0bbdeee7cb97695e112c3a4067bdfba2ff51271a7c243d2a55124ea8fc"
  },
  {
    "sourceId": "basso-product-73",
    "mpn": "A22/90",
    "rowSha256": "a68e59c1166b53172f6ca26b793a514e2d006fc22c00b3886420c4854641ec4e",
    "sourceSha256": "d843e08d4a4ad5f7d4a40afda3c46c32f83598998b47a050aa12025f10f13fd9"
  },
  {
    "sourceId": "basso-product-74",
    "mpn": "A34/90-K1",
    "rowSha256": "77e6b33ab28eaa81dd17143be0bd5a81dffd2ab7067445edb0b3317fb35317ad",
    "sourceSha256": "de425f0dcb9a05e98162ae3cac7ef940d0f863eff993ec8fe98ea8524988b127"
  },
  {
    "sourceId": "basso-product-75",
    "mpn": "A22/100",
    "rowSha256": "5b420620f18f473bb1ef502c47ee0ced3e127169c1dfc3655cb6753968aa6a82",
    "sourceSha256": "4abdf62b9b9ef4df4ec536b225788ed11c1871d0a318e15d10ad0c0641579d70"
  },
  {
    "sourceId": "basso-product-76",
    "mpn": "A22/130",
    "rowSha256": "c1306cb9db75fe29a8d62db84382d8240165e30c247cea370e303efb89ce966f",
    "sourceSha256": "decee7315504582db4658726b1205a28bb4233afd61227154fb15feb7f57e243"
  },
  {
    "sourceId": "basso-product-77",
    "mpn": "A22/160",
    "rowSha256": "8fe0d6ef3bdb085cf6fb50869050f36a004cf2abda07b2bba0254fcbfa03aed9",
    "sourceSha256": "79ca466cebbb4927331bab6261987570b4d2ec2feb462c7612fdeef8a2c93bdd"
  },
  {
    "sourceId": "basso-product-78",
    "mpn": "C21/32",
    "rowSha256": "302faa2f55a9d8e6b1b8f4c44e7dd69a393b2d54522b80866883b190bceb1a82",
    "sourceSha256": "a6e7ef2cf492eef1ce189bf16341a4cb7cc1ff010bdc8a248a85e62bfc87960d"
  },
  {
    "sourceId": "basso-product-79",
    "mpn": "C28/65-F1",
    "rowSha256": "a420ca0772c7d228ebdd43906665a546b6cd96f8c8c94d4e528392c4cc003e3a",
    "sourceSha256": "7586751201024fbab5143453ddca93a9a1cfdca85c2c2dc03537e21d8a2414b7"
  },
  {
    "sourceId": "basso-product-8",
    "mpn": "S80/16F",
    "rowSha256": "44f4ec48c66c8f34d34bcf715bdab4e92d71e1018757ac43f71e9d8bba9eb85e",
    "sourceSha256": "3b852df720f14f7df526ceb9c774c9a05e2a0977a2760d33a3f62599fa6c1042"
  },
  {
    "sourceId": "basso-product-80",
    "mpn": "C31/45",
    "rowSha256": "b1c6cf6d710b8eb7ed6ad5f3a342222141759bb365e1768978be7f5ae90570fc",
    "sourceSha256": "25fae562288d1d45ca8b739d03f641dcd5bf0a6309934f4092d29a00c09f4c7d"
  },
  {
    "sourceId": "basso-product-81",
    "mpn": "C21/50",
    "rowSha256": "0546e8eeb9856d8c0114b084500f451c7dcde7bbdec2259fcbf8176c16f69805",
    "sourceSha256": "b1c59d7927e6db86ffd4b140f876901e9a11cac5aab0c7dfc0f2f6aab23fa414"
  },
  {
    "sourceId": "basso-product-82",
    "mpn": "C21/51",
    "rowSha256": "bc94ffb7913b40e9e83f44666927a67d9643fa5ddd473cba7e0f3dd634dbb0ba",
    "sourceSha256": "d7075fbe12ad876d111e71e3dd90defe23571897f50fcd1b3cc3bb20469c0024"
  },
  {
    "sourceId": "basso-product-83",
    "mpn": "C25/50",
    "rowSha256": "9de6c4bb5e7b3c78a772046101732b9d8d6d5349c8b81e83ed43d98ff0fb97fa",
    "sourceSha256": "4923f2c3da1055088620eafd8eaa8df8b319b751941ad0f430ae61ec947ddaeb"
  },
  {
    "sourceId": "basso-product-84",
    "mpn": "C23/57",
    "rowSha256": "e7224724d788d46fb5b14d56ca79e3fb303a76a6f400e6b28ce692439ac0f595",
    "sourceSha256": "823c1fe6c883c85ee7888170b77974cf7843bd1bc9ab2455592a9fa7db243da4"
  },
  {
    "sourceId": "basso-product-85",
    "mpn": "C25/57",
    "rowSha256": "713ee26822ca5ed522b70787f3807126ab5d8fca429e78bf32bdaf77fedb55ab",
    "sourceSha256": "c65de723d70b6673d853484b805eab1fd0464ed9a60a716c5098670abf038902"
  },
  {
    "sourceId": "basso-product-86",
    "mpn": "C25/65",
    "rowSha256": "b7dab585ff7dc60a57aa036f969f5ecaa6b595f0b0c8f0be6bd2e097919974e1",
    "sourceSha256": "c844bd8aca16623848a89cfa6b3ebf2d51205e30ded53e6962173ac730a251b9"
  },
  {
    "sourceId": "basso-product-87",
    "mpn": "C28/65",
    "rowSha256": "bba4bcc32ee73e511db59eb164f671b34594429a71c8171abafcb4eda49e0d12",
    "sourceSha256": "f5415819baf50e0e7e00a0627761420bd2829fc1f0f092e8d061a726fb5b1748"
  },
  {
    "sourceId": "basso-product-88",
    "mpn": "C29/65-A1",
    "rowSha256": "18de3823900dd0ce7bf8d0f31b4b6174cc70c5452965776582e0ecdee440e1fa",
    "sourceSha256": "f198a0db7104f676086e5b69ed9d5e8a0a80e02bebeb9c0d9f072c406eacd273"
  },
  {
    "sourceId": "basso-product-89",
    "mpn": "C29/65-D1",
    "rowSha256": "9876607bef426a4fb8028d12991a6a5a7e538f9e6a4bc575801da837ea880f28",
    "sourceSha256": "22348b5ce8305a70f4802d0da99cf03d30911012ecde3842d0e38ce26504cb41"
  },
  {
    "sourceId": "basso-product-9",
    "mpn": "S80/16B",
    "rowSha256": "4ad2016765af52b5986fa082d2b8c486d80326b04ea69dd4df0d359003c8da1f",
    "sourceSha256": "48109f0a6873e3ff1070596dae6afa6a4dde6910ee13172e9b66433e5cf664a8"
  },
  {
    "sourceId": "basso-product-90",
    "mpn": "C29/65-C1",
    "rowSha256": "f98463dcf2acc8519a94dbb4642c2b3d14bcff6daed67c74df9d7120685a65f9",
    "sourceSha256": "71a01bc3d977c6eedd0860c71e0807fda931abe5736df9d2b3a0e3191d88669c"
  },
  {
    "sourceId": "basso-product-91",
    "mpn": "C31/65-A1",
    "rowSha256": "a22d94304b6cfd1e7613944391c72ba6a469ab2ebffa6e60055c6b4843a4a300",
    "sourceSha256": "01539fc520a55aefa9c0227287912fd6112483739570752333132f60127a9aef"
  },
  {
    "sourceId": "basso-product-92",
    "mpn": "C29/70",
    "rowSha256": "c24a96bcf8fa79574b0b4deab0790665454162dd5d22979578eef8719da8e510",
    "sourceSha256": "166082fbae99954c75c57409f5cfaa3d9d98cd4e244457c9389a01d8346e501c"
  },
  {
    "sourceId": "basso-product-93",
    "mpn": "C25/75",
    "rowSha256": "6f4a1b56bd0f2c7babe07dd7cff5c46dc60f73d0b4da74e483007bffa6568676",
    "sourceSha256": "538a5d19bb8ff02c3c2b3b09339bf50637287ea64e3873688dbd4f3598258041"
  },
  {
    "sourceId": "basso-product-94",
    "mpn": "C33/75",
    "rowSha256": "e89f052531de60eb3646187e1128f05236ffde2f8c3ddfdcd5d20d5b5bc30473",
    "sourceSha256": "04398a7b4580ab2140ba5a0cf8e194fea0d02306acd43aba8488cec713fef041"
  },
  {
    "sourceId": "basso-product-95",
    "mpn": "C33/83",
    "rowSha256": "fa3c046ebe6dc29728acab70dc8f5ae95fe1d195764cf84efa1d6cce328a1256",
    "sourceSha256": "a82efd8325c1dc05ed0b725e39a39c118aa1bd5daae85c33acc07bc8746f90c8"
  },
  {
    "sourceId": "basso-product-96",
    "mpn": "C33/90-A3",
    "rowSha256": "6b7ca5dc55bea5e833621c3cde7f9301a27808c1cd92324b02669eb8ce5f175e",
    "sourceSha256": "bc970e3c7601ef3cee2e8ef829910b308faac2c14ecb94a6cd5d231b90e71c76"
  },
  {
    "sourceId": "basso-product-97",
    "mpn": "C33/90-B2",
    "rowSha256": "9b725d0ce45ee7172326951186976144249df15c9cf0efe7475d72dee5c2cf36",
    "sourceSha256": "ec7f93624ca8bdf0692de2c3bc87156ae4ac3d29447074af0e1c952c5cc0e741"
  },
  {
    "sourceId": "basso-product-98",
    "mpn": "C38/90 < Mg >",
    "rowSha256": "b05c56ff84df55f77d58eb5edcd5c1102e6278b14bda4c91456a9ccf82ae8e04",
    "sourceSha256": "07a68d88791e44d93451dce565eded9482c9f7a8ac1b0ea3d3d8365a8550857f"
  },
  {
    "sourceId": "basso-product-99",
    "mpn": "C38/100",
    "rowSha256": "612fa1770f8cc6c81bb4a02b25a16f4b054d114a8f0484cbf16e63d904b0f5cd",
    "sourceSha256": "dcb3402101c251b3e710a9b3c87658999383568c95ca5c6434b018e9561bb7e8"
  },
  {
    "sourceId": "soartec-product-000",
    "mpn": "WX-3511",
    "rowSha256": "154825ef2253cd2b8a5871d4181064f7ae45d09d3fb5406aaaf0b8040c46389a",
    "sourceSha256": "07c37d8a61ba89808195f5d42962e8a64c0c38a48685091384997084175fc68b"
  },
  {
    "sourceId": "soartec-product-001",
    "mpn": "WX-3502",
    "rowSha256": "83af85b094283fbc11386a94c7029b5af2cfde49502b8a62951ddbcc30eb18db",
    "sourceSha256": "88b8efcf6209e20c734f3e0b5bc4a21e3085ebf76126fdec0689fc59bf384621"
  },
  {
    "sourceId": "soartec-product-002",
    "mpn": "WX-3501",
    "rowSha256": "80509cb1a988ba347bd5296a2184baa05fc776bb27c2abbce0129035de0c1c6a",
    "sourceSha256": "3bfbe806601bcee2b437073a32f053d7a3e62926237a9ac4d2d70be1f10f5481"
  },
  {
    "sourceId": "soartec-product-003",
    "mpn": "WX-3534",
    "rowSha256": "613e3caa410124c5b40d03de716f4780b6a68a998b45fe380cb3c4a00df32773",
    "sourceSha256": "a1ae46c35e5e27ff28e1525062e074f0d739f31c0454cf920a3c170b44fc73f2"
  },
  {
    "sourceId": "soartec-product-004",
    "mpn": "WX-3532",
    "rowSha256": "8972e1b6f47b82b7f4d7d80792a115c89ac71662fa4cc115a73abaafbb280bc1",
    "sourceSha256": "6d437aba51009301e2a53c98a679e7c859ad98f784afd563acd3375f3cf68928"
  },
  {
    "sourceId": "soartec-product-005",
    "mpn": "WX-3542",
    "rowSha256": "5dd909ca61f527511106c6ac5f84bd82b60401661b5524d1ceb710a766a59732",
    "sourceSha256": "d74aff508f60ec56c31e5145d628ed2109a70a8ae509f272d84d2d0d8b3c4d5d"
  },
  {
    "sourceId": "soartec-product-006",
    "mpn": "WX-3541",
    "rowSha256": "0306b50085191dd3095a6d056580f1b8716b1e6f639570a936028cfa7f4c66d7",
    "sourceSha256": "0934cc1c5023a1f9e5a49e235cca01073b869e8d0d75107dbc83dcdfdc58c95a"
  },
  {
    "sourceId": "soartec-product-007",
    "mpn": "WS-2057",
    "rowSha256": "a2c8c604ed275803e186e0dfd84209bc2949306249fe07fc428e7242df28ec1f",
    "sourceSha256": "11004e6010d2fcaa8e3bf8ebbb8d65bb5b674e42455dfa3d68dcdf2d04dd37b4"
  },
  {
    "sourceId": "soartec-product-008",
    "mpn": "WS-2052",
    "rowSha256": "62cf3d2dad1c66b24e9ae03a90050aab6e8f3fff3d4932ac59ceecea34900088",
    "sourceSha256": "e4d403a01f8c7063445c21c5a48c6791f8409d20d51fa9c8d0cf0a4c509a29aa"
  },
  {
    "sourceId": "soartec-product-009",
    "mpn": "WS-304W",
    "rowSha256": "53e0289cca73d9d89f0b58b6f0fd10cee4488c5cf907fe4d2326b03e55cd67f9",
    "sourceSha256": "a5835586df13cab33cbc4e1a560cf4c348fa1bb8042420b644f4107a99b905bd"
  },
  {
    "sourceId": "soartec-product-010",
    "mpn": "WS-304",
    "rowSha256": "ca8d1391a2e2562ef6de84d0e865faeef30b0189b8f6ad7c0ca7ca337a90f5f8",
    "sourceSha256": "9dfd88b6d0f2d02ac273ba328351d5967addcdaac546b29b82447c2dc6162061"
  },
  {
    "sourceId": "soartec-product-011",
    "mpn": "WS-305",
    "rowSha256": "0c7cbf42be0e976767005b8bcfd4aff1fa4d8e9a27b539f59f347b2fb4ba6fcb",
    "sourceSha256": "8aa431bf2f2be265b446d119d69e82c3c99857407044df66ce517fc9244c240a"
  },
  {
    "sourceId": "soartec-product-012",
    "mpn": "WS-303",
    "rowSha256": "71273d35d48a8f7a32e78f02de378f2742545434d3fda806646fffe1daed0482",
    "sourceSha256": "45a222398634325eb756c90efbf87b26d1a82b41ccda4c6f95c37cea4a0aac20"
  },
  {
    "sourceId": "soartec-product-013",
    "mpn": "WS-302",
    "rowSha256": "888d92be957475f4ce4d35e952d9d39ecf9cd9092b64d548dee6038b36e01672",
    "sourceSha256": "5f45f3abf330f6c93e91614e8163921b0a6d6a43fcc6a0394c3265d606cf36b6"
  },
  {
    "sourceId": "soartec-product-014",
    "mpn": "WS-301",
    "rowSha256": "a7ebdbc94dc3d835468a18db8348df11a59899e59c74c66bb74b54d842fbe6b0",
    "sourceSha256": "da8066a4199af5821f0e80a286f3c23ba43e609528d0bb62a1a03d80153b322e"
  },
  {
    "sourceId": "soartec-product-015",
    "mpn": "WX-3924",
    "rowSha256": "4da328eb18a5cd74a727595e0794de0c79969145fff0ea5aa1c8576cba02dff9",
    "sourceSha256": "7ec96111e41a662c6be3ce72df391618db5f4fe480db741676abda26b9fbfaf7"
  },
  {
    "sourceId": "soartec-product-018",
    "mpn": "WX-3T20AB",
    "rowSha256": "faccb06625fd232a81041d15964ab11ba3090c5aba33d6492ddadcef93ab743a",
    "sourceSha256": "faba94066dc246d914df7727c6e693795b3207e6000bb46d892f55e43f681fa7"
  },
  {
    "sourceId": "soartec-product-021",
    "mpn": "WX-5583",
    "rowSha256": "d2419b2c1e929440c0d7c7b51f4f45278acefafb9ccc7fec9784c9f97b8c4cfb",
    "sourceSha256": "5d2bf88552b17a24dd3b40eaa41092e99cd1465515ca2c8aba0b2f6f9ab14bc3"
  },
  {
    "sourceId": "soartec-product-022",
    "mpn": "WX-5573",
    "rowSha256": "a03b5bf44a95e5489777978d1aa560f2f254981bf03a7e74b03b5ec5bcff68d4",
    "sourceSha256": "35cdd1b2217327c8840f6911fbb826a3eee518c503abcee6b195690071483616"
  },
  {
    "sourceId": "soartec-product-023",
    "mpn": "WX-5563",
    "rowSha256": "9e1848ad348550f92471f653221986410b55c313f7d0af1b9e3cd8a9b2e92a9f",
    "sourceSha256": "3b196df5e4750a500139eb1511ecad559dbc09b84ec78d5cb2324b9510c60c54"
  },
  {
    "sourceId": "soartec-product-024",
    "mpn": "WX-5553",
    "rowSha256": "511fcb89c2c1c9f83512e103d7bc82829712bc7801322b8a76682810e5c25207",
    "sourceSha256": "d2e1716ce2b27a4fdeb9066bc732788210b28ad847f02f000672b87c2289726c"
  },
  {
    "sourceId": "soartec-product-025",
    "mpn": "WX-5603",
    "rowSha256": "09a2521562813b7cce3d08d1a6d64f0f9da471ab744935fa00ff53d965f84d86",
    "sourceSha256": "ff03c4a1b3dccb18977ac160e0862b54d1057378f75f1b531981e20be9150574"
  },
  {
    "sourceId": "soartec-product-026",
    "mpn": "WX-5593",
    "rowSha256": "c2f59c786b50a31371e1116c932c9008505779eb7cfa44044943d46f0398dd5a",
    "sourceSha256": "f3db7c5cbc9cf535d7177c5dadc7def6314529ed09b8af1f1c1bf0ea3b65ef2d"
  },
  {
    "sourceId": "soartec-product-029",
    "mpn": "WX-6722",
    "rowSha256": "a26597739a540f5e7655759591a1f1e16ccdc2d064b0a70db5aa1cb33e225efd",
    "sourceSha256": "f0a7ba46b8c3c6263a0cdc50ace380d0469ef8f830279fd2d480bd319095a2d0"
  },
  {
    "sourceId": "soartec-product-030",
    "mpn": "WX-6721",
    "rowSha256": "aae2c05e090e338c8c3a18c342ababcef8d197d41355830bcb2602d8f0b92846",
    "sourceSha256": "8d3cb6626499e9116c21dd799d2b0fcd71124ab8cf6eb86f1fc7dafab5394150"
  },
  {
    "sourceId": "soartec-product-031",
    "mpn": "WX-6713",
    "rowSha256": "deaff4da2185cf7780c7999b83180c661acd7e87daaa6e935bc6d7338f473c98",
    "sourceSha256": "80fd45cdf50aca4e83826830ce248fed70f2860a17968985f2bc8c9a2a53ea02"
  },
  {
    "sourceId": "soartec-product-032",
    "mpn": "WX-6712",
    "rowSha256": "678baeb1be86e37caa9ac8e027ab0e00c4363f71e8e5f04ee003ab4c3ebd5e13",
    "sourceSha256": "78185ef970f994356f3570dcd1436495127e17bbba0420618152b7cdfe30f1ee"
  },
  {
    "sourceId": "soartec-product-033",
    "mpn": "WX-606",
    "rowSha256": "2accc33083243747e0aaddfa5c3f2cfca3d5382cacc1979c273ad59d615cf1ed",
    "sourceSha256": "f0ba737ca03621e7244c53a554a323196c8b46b10c50200b261a167a4760ae83"
  },
  {
    "sourceId": "soartec-product-034",
    "mpn": "WX-6925",
    "rowSha256": "b729cd53a948a2010fe6acb53c0e44ee8baa876878bdc65b56061bb7918fcaca",
    "sourceSha256": "1555548aea157bb56977328ae8b8013cb3c3cc818dcb169cdd02e26d134539c7"
  },
  {
    "sourceId": "soartec-product-035",
    "mpn": "WX-6924",
    "rowSha256": "3775f31a6370f7b2a79328f26fcc0abb27e2bba8c1948541641479cd719bc4ed",
    "sourceSha256": "2dae0476c3be04b6d6dfa19f7947cccf23b05edaf8903201d7dc9358c5b9e60f"
  },
  {
    "sourceId": "soartec-product-036",
    "mpn": "WX-6923",
    "rowSha256": "3e4c2ecd213a9b8e212cf3780094e49abaaa3154f79c368a2491f6f7ad04d100",
    "sourceSha256": "1009373a632a05ea1b6ae90160c0fbeee1a54b123f996fe69edec0e1b51ebf3a"
  },
  {
    "sourceId": "soartec-product-037",
    "mpn": "WX-6922",
    "rowSha256": "2ffe84b4033415e4409adc682245e7b11dccf3cb00b08efd19f6528b1a9e964e",
    "sourceSha256": "a217c1bac3b96d3e26de54d9878f92cf3596e32f180b27776374bd714b063673"
  },
  {
    "sourceId": "soartec-product-038",
    "mpn": "WX-626H-2",
    "rowSha256": "aeb741279680c9cd2ce6f33b01b100e4460417e811316b920314eab0687e03b5",
    "sourceSha256": "495c804179c6a62e08bf4d38eff43f7c6608bfa125314540c068c08fc5515888"
  },
  {
    "sourceId": "soartec-product-039",
    "mpn": "WX-626H-1",
    "rowSha256": "936fdd44642b23d768e6d9eae39c793741409bb5cc37a6bb80d786829b29b99e",
    "sourceSha256": "bafcb521dd0bf3c4d1677402cbbda7f3b0e470774021e11e1693ae1e3e63396a"
  },
  {
    "sourceId": "soartec-product-040",
    "mpn": "WX-650D-2",
    "rowSha256": "ca63c0b8d75d437efa42717a80fb5d5512eb88bd67775e98474ee65e15d8bcc5",
    "sourceSha256": "35ad67d00beb952e955d4e71e2111144ec988155a77435edc5b6db1dc018dd1e"
  },
  {
    "sourceId": "soartec-product-041",
    "mpn": "WX-650X-1F",
    "rowSha256": "e59377e7fea7b93b379bc8aa63c8509bab41cd4e082aee4b85f59124f2a6fae8",
    "sourceSha256": "2b452efd15f66bf3f20c832dff008f5a126296cf894dab1887a1872c924814a2"
  },
  {
    "sourceId": "soartec-product-042",
    "mpn": "WX-625D2",
    "rowSha256": "294730eb2c6236c5045719b7c4e0dcd566872a9094c450508257055bf192dd5d",
    "sourceSha256": "1fb9cd90a3813c6edcea510d1fb84e7354f87d2bed568abcdc33146f91b42d43"
  },
  {
    "sourceId": "soartec-product-043",
    "mpn": "WX-626X-1F",
    "rowSha256": "6fdabbd882be140c86de2d5b087a3ffcc073eea037cddc496d0f09acb53696c1",
    "sourceSha256": "283ae1a9a68c7744819f21857829f0429758723b7ab5ea4b65ddba870efec797"
  },
  {
    "sourceId": "soartec-product-044",
    "mpn": "WX-638AL",
    "rowSha256": "2d54fda6afae727292625c824f9602c1c8284bb660ebd0c609147a343f757f68",
    "sourceSha256": "df8397e4f77317aad4c8cc49d4bbc84347d04378c3f1aee70703d45a226b8e76"
  },
  {
    "sourceId": "soartec-product-045",
    "mpn": "WX-638A",
    "rowSha256": "46a959baf6feb9efc3687d9a93814705a55bd6083d1471c185a48a5e3c9bc487",
    "sourceSha256": "af08c2a63a320d50b9b2cb0511f50806a7e55e7bdfacb5174c8638f26ef300f0"
  },
  {
    "sourceId": "soartec-product-046",
    "mpn": "WX-626LL-1",
    "rowSha256": "59205030f37848932df64c89bde57909ec5c18c7b91be0d031c853906234ceee",
    "sourceSha256": "9dd792df72db798bfd22abfad2a54ed1c3a59aa98fc4a459a9375ce158a6710c"
  },
  {
    "sourceId": "soartec-product-047",
    "mpn": "WX-626L-1",
    "rowSha256": "e443ad32c69fa5d183e20e9ce06d54ba09f0a55b4eb8d740f0a4c476631c8596",
    "sourceSha256": "8540bc9b77cb009e6a6d2c183b2354a9d1eb0c657f4036af17e486828de98ed0"
  },
  {
    "sourceId": "soartec-product-048",
    "mpn": "WX-626-2",
    "rowSha256": "49da1fa721ad0024b83e5c627ac3b15c97363f887dcb812587cf68e8801689da",
    "sourceSha256": "9dafdd1b75ac02c32a80baa58e5b76760b917e2e65eaeed4b09efdcf05f0feef"
  },
  {
    "sourceId": "soartec-product-049",
    "mpn": "WX-613-2",
    "rowSha256": "8d0afa633872c90814af6a2d5d215bca061a3b1b5efce29126440f7229c8f1ae",
    "sourceSha256": "c270ba6d2872a51155008ff1e4107c2a66b68646589761327daa92840c4875e5"
  },
  {
    "sourceId": "soartec-product-050",
    "mpn": "WX-62C-2",
    "rowSha256": "36fe746540d3f5b50e1209a66cc379d699b8646c345bdae2c05f00769e905009",
    "sourceSha256": "26a4c5844cdd0950a5d7688a46c0942358ba04c6bdfbb3148f8cc168adae7f54"
  },
  {
    "sourceId": "soartec-product-051",
    "mpn": "WX-63H-5",
    "rowSha256": "09ac3329158d65fbb5b42cc77871c0b4c10a37ebcd9e0337de6838e74cf5fdb8",
    "sourceSha256": "3bbb0daa358b82804ca8de8e50eb6ab41356ba1e6ef807840c8d8e8937489162"
  },
  {
    "sourceId": "soartec-product-052",
    "mpn": "WX-665K",
    "rowSha256": "e9193c05902d06dfea93ecd96ad7578e0aeb19675df4d65a9f76aa2435f5a51a",
    "sourceSha256": "149491d0559511e3adcc17eafaf5ea6b390725c5ad3efac16815ee81d86503a3"
  },
  {
    "sourceId": "soartec-product-055",
    "mpn": "WS-402-190",
    "rowSha256": "18e18251f36fad2b08cd6f7863264de4d81df78cc817741b4f3434cd2234f891",
    "sourceSha256": "2757f60b4f9f0aa63ae586f077e01b1bcf772991e71f95d8cd728a713275e716"
  },
  {
    "sourceId": "soartec-product-056",
    "mpn": "WX-420C",
    "rowSha256": "97531ccdd99992ae474b01d50c3ce601e209ad1ccad4790fd038781c35827eaa",
    "sourceSha256": "8a86dc4d81308f7eff5db30d76fd19b8ca78af03c9bba9d49a0c88c086a549e3"
  },
  {
    "sourceId": "soartec-product-060",
    "mpn": "WX-411S",
    "rowSha256": "8185580183f68475b6c2e62a265281d2c1be7d8f4a99119474d5a85b6b150149",
    "sourceSha256": "529bf8118fa71688ad2162fae2f9a4ebbc696245a51980fd2318161014670e2c"
  },
  {
    "sourceId": "soartec-product-061",
    "mpn": "WX-412S",
    "rowSha256": "4b6041b63860e5ebb6ff9e828738f8ab2fbbe0ef10907c2818d17edd5ccaf37e",
    "sourceSha256": "f87291e03329cd0bcdf3cf07c939607cce853ea0ac6221bf6bc19658e0a8e855"
  },
  {
    "sourceId": "soartec-product-062",
    "mpn": "WX-411P",
    "rowSha256": "ceab318766a26b89d68ab56c95641a69e43659ddff667bbd3785ce206c1fab3d",
    "sourceSha256": "8eafbc68e98327e9caa6ff298abcf0e575192716dd42ea647a5c4f283d1aa976"
  },
  {
    "sourceId": "soartec-product-063",
    "mpn": "WX-413P",
    "rowSha256": "ed8453a27193bc2bb5a6eb94d67e3ac16c0c252e7ba4aefe61662c1a1ca194b2",
    "sourceSha256": "a7c2afa15770e0ba325e7f1ea60bcc50afdc6d5ea9f51c764aa4d449105723b0"
  },
  {
    "sourceId": "soartec-product-064",
    "mpn": "WX-415P",
    "rowSha256": "bc1fad401e7172be7ef45f12415cb7c6354da778aada80b1dfc942d26874c4c5",
    "sourceSha256": "c78fdc8460c21cc821e6db1d746f919ea4d9d32d0e02a76e91a2370f76787304"
  },
  {
    "sourceId": "soartec-product-065",
    "mpn": "WX-413G",
    "rowSha256": "f808d1062baa2d7bbcd6e65822370e2f86cf4969a251442830642694e383527e",
    "sourceSha256": "ebee775bf4cbdaf23bd3776a92a356dcc2040637288b6b97ba65f74df1cc7def"
  },
  {
    "sourceId": "soartec-product-066",
    "mpn": "WS-435",
    "rowSha256": "de13e773e342406f051c9466a36a670e2c1321dad3682b4ad56ca1154b1821fa",
    "sourceSha256": "8aadb3d83317e1535c3aa443ecc948e1d5f4cd24f6652dab9cfcfaf18731f634"
  },
  {
    "sourceId": "soartec-product-067",
    "mpn": "WX-421",
    "rowSha256": "a10023c661bbfe50d7be2d5813a24e2e45eee0cc55a88ec1ed209c8086b99964",
    "sourceSha256": "a42d8b71b0288fe092c8dfa69dc26fa3e5878ab8b4189a71a2215bdcb63f8afe"
  },
  {
    "sourceId": "soartec-product-068",
    "mpn": "WX-422",
    "rowSha256": "2d1c5ec525ef1b1ecd29d7cdce114be5441f4589b7a866352b9a952cb22bbfd1",
    "sourceSha256": "a3c30248c1839e5ab6afbd59953bcc72fe035a25a5389b47fc1d72b543ed5341"
  },
  {
    "sourceId": "soartec-product-069",
    "mpn": "WX-426",
    "rowSha256": "6f7dff1bba9ff6052e3376089c34aafd0ea53c5434bb40bd1ceb81f96593622b",
    "sourceSha256": "16ea0178536f64cff730c6fdbad830e6e1ed8ba4ff37441bc338586c55a62bee"
  },
  {
    "sourceId": "soartec-product-070",
    "mpn": "WX-427",
    "rowSha256": "84f8e9a25494ecf4c56cd8a34a96b67959646fc19d8b73967091a0c1e48ff65c",
    "sourceSha256": "a8def6e1446675dfcd38ab4fcc857dbc55acfa4b817cf2f8310168862b19d0e5"
  },
  {
    "sourceId": "soartec-product-071",
    "mpn": "WX-428",
    "rowSha256": "3af1a8f9329ad890fc359888cb485c16dcfc61795c01408ea2fa2c906fa9d0a8",
    "sourceSha256": "3b9b39346bb9aa407d9afe120e9dee068c421a133169ddfa6983da4f0530c36a"
  },
  {
    "sourceId": "soartec-product-077",
    "mpn": "WS-2106P",
    "rowSha256": "8e9ca6a5129b3e368dd0d8b03094ba478c423850bf4cf91ad524b3a3b1dcd8c6",
    "sourceSha256": "a64c69b96171b6b4bfa7f36f4024de41daef720903c6663db0b2a550d535f6f9"
  },
  {
    "sourceId": "soartec-product-078",
    "mpn": "WS-208L",
    "rowSha256": "bd53f64f088c5c0d4d4a59de79df4889a1c1d1312bfb9e56a67947acc42ea3f2",
    "sourceSha256": "4f150072cea2cfe30451695d55733d2495094faa915c716475fb2e08b3445444"
  },
  {
    "sourceId": "soartec-product-079",
    "mpn": "WS-208",
    "rowSha256": "3698280a9ed4097023e93d2a5bdd97e0afcf5f8f11acd4d26a51fbb4a795b4db",
    "sourceSha256": "c8285e7d22d084c19fa8759f9bde2fffd95e519be80256ed3db7c71861a9ceb3"
  },
  {
    "sourceId": "soartec-product-080",
    "mpn": "WS-2053",
    "rowSha256": "efded0de8b782ea3d107873dcffbd8c770bb530714b686047b5ecaeecd03bcb6",
    "sourceSha256": "a08c685aeca9f5a69b30f00b5abe1b5ba59a69b48201a73b21201043ed98e37f"
  },
  {
    "sourceId": "soartec-product-081",
    "mpn": "WS-2051",
    "rowSha256": "9972bd4e45664ba205ba4ffe8c0d938a31731e90d3bbba84606bf84818f1d7ee",
    "sourceSha256": "00039f87cde7e7c97472e2c88408ac6ebf925725cef6dd1ebd42197c3ee6ff6a"
  },
  {
    "sourceId": "soartec-product-082",
    "mpn": "WS-2050",
    "rowSha256": "47daca46d79f16fc7f0d59d71306363ad7e2d26bd136aef189fb389892698ab6",
    "sourceSha256": "042e690088eecc5ff73bfab139e8126278bad2e2bb5d5bf8533ad2d9a3adc730"
  },
  {
    "sourceId": "soartec-product-083",
    "mpn": "WS-215P-2",
    "rowSha256": "a94fe15ae0658c9119e00892fe2cb09c9be4501f04f6acd8af3b49d47e9d1aac",
    "sourceSha256": "e0cef37f642781c194cf8050f755eb2b24b32166d1e0bbde87ba8e0af4aa50ac"
  },
  {
    "sourceId": "soartec-product-085",
    "mpn": "WS-212P-8",
    "rowSha256": "3f00108ae3fb457572f5d29cdf3d824482fc9b8175c2ea619796652c147cbe8e",
    "sourceSha256": "d2558185c458a79e9931adb58bc781139004b312afebdcf37d1c9e079d0a0bd8"
  },
  {
    "sourceId": "soartec-product-086",
    "mpn": "WS-212P-6",
    "rowSha256": "eac875e14e83a96a1aacc27bc1c9215de71969a18578f2586424d1cbbd433b32",
    "sourceSha256": "a7f6d3e3770e8d5acd2c61c1a3508b70d183bd156bc04feb2617455722a77876"
  },
  {
    "sourceId": "soartec-product-087",
    "mpn": "WS-212P-2",
    "rowSha256": "500c2532ebe56aefedc10b97cc28e700370c4e59fc3f54d8c13c797bb110daa7",
    "sourceSha256": "b6ccff1e5fbe19348ce2da8692c8f3a27c5030f449c03b5b639aa78144ad8370"
  },
  {
    "sourceId": "soartec-product-088",
    "mpn": "WS-212T-8",
    "rowSha256": "2a68bab14f79447e9dff2bc0b7cbcfd92bb3f8e6836ff00cd8eadd44ab224551",
    "sourceSha256": "ce19d77263ffcc710e4bf4ee4400a0a4594d5219d3ad13147263e95348a75c24"
  },
  {
    "sourceId": "soartec-product-089",
    "mpn": "WS-212T-6",
    "rowSha256": "4984913661258908c45bcbdf1f160bbbd0a491fe0ba250ee53368b5f8b9be80f",
    "sourceSha256": "d9c734a88c0324005ff69e820be9a197edd37a4bfdbcced7522aab80ddfcf170"
  },
  {
    "sourceId": "soartec-product-090",
    "mpn": "WS-2108L",
    "rowSha256": "74b760ec9462f26fb01ecc84e71f59da10cbadfd851109e57464be68eef228ea",
    "sourceSha256": "d974d2a57ba8331739d0b682b94d095b7e1d2d1e0c3a79334dd0615c2c16c7d9"
  },
  {
    "sourceId": "soartec-product-093",
    "mpn": "WS-2076",
    "rowSha256": "97346107114a645c2db15b79f4b764f3858ea235888eb7ab9738e1d23c80f1c9",
    "sourceSha256": "0e9a9d19e59169de39453f258bc60e92ddd5502db9826767e22ad0c483a95a3e"
  },
  {
    "sourceId": "soartec-product-094",
    "mpn": "WS-216G",
    "rowSha256": "f30d9b3b998b181ef2319d729c4363d031e74d9135fd0557d04e0edd0facecd1",
    "sourceSha256": "ef7b5d5aee95a4ff0bb82c7318ec11566e35503b5af404a25ef1285632766fb1"
  },
  {
    "sourceId": "soartec-product-095",
    "mpn": "WS-216P",
    "rowSha256": "8608a897a43d3297da24c8d2639efa8aafd7766d2ab17f411e41ba98ed7600b5",
    "sourceSha256": "e14c70128968bfd4557747ed29216a76d667b94a54a10c8d0db00fb8039316dd"
  },
  {
    "sourceId": "soartec-product-096",
    "mpn": "WS-217",
    "rowSha256": "d25d9d41f348f23f36df6722cd3d36e3ffe915968d22e2863fed977356ce42c3",
    "sourceSha256": "2f4893a7da2a5173be8a03999df4ee09f6b166deebea0b547720de2b5967ab69"
  },
  {
    "sourceId": "soartec-product-097",
    "mpn": "WS-2066P",
    "rowSha256": "b92c582346fa00c772190db3322055f0b7783d240381317cbd5b665eadb4f8f2",
    "sourceSha256": "fd356802a844e865b95a0ce19c30e573d171c1ddfc121306ccea269eab531954"
  },
  {
    "sourceId": "soartec-product-098",
    "mpn": "WS-2066L",
    "rowSha256": "33fbbe67241ee8e1b73f59f23ae7d96967c1aad1eeea8d1f25c8acb5058e18e8",
    "sourceSha256": "0a92c75d7ab223f010654e17e42732e5f69d23d26f060d86df48ccfc23fe57cd"
  },
  {
    "sourceId": "soartec-product-100",
    "mpn": "WS-2078L",
    "rowSha256": "68f37dbcaf9cf1d93565e7befa5a377be21dbe325f733d05988d8a2c91bdb849",
    "sourceSha256": "7d7c5543788ec6d8fbbcf4ef50e149f252061015a0a960013aaace648e4c5515"
  },
  {
    "sourceId": "soartec-product-102",
    "mpn": "WS-212T-2",
    "rowSha256": "960c678c4c482966861fb34b5e4e3afbc79d52e06e9e277e84ef890eeb8b6a3b",
    "sourceSha256": "cfa8b35a6aa6459c354ce9209d16d1e00d89856f58d64c72790ad1185b42e0f5"
  },
  {
    "sourceId": "soartec-product-104",
    "mpn": "WS-218-2",
    "rowSha256": "0c1a4e3b4fb96e480c52316a438f5a0a0eeab049d3281825d8ed72249df3db34",
    "sourceSha256": "9f97ff34a755f5e63335db14a10ba4f20ca88e1effed9481c6b049e952222682"
  },
  {
    "sourceId": "soartec-product-105",
    "mpn": "WS-2078",
    "rowSha256": "cd5a56a6214b281cca76ad34648efd5e67596606865dc3492745ad57d38efe09",
    "sourceSha256": "945c1cb0fe8a895883c13676eb69dbc40b907c887fe2add5251f9048d6edf0b3"
  },
  {
    "sourceId": "soartec-product-106",
    "mpn": "WS-2068L",
    "rowSha256": "793289f1350520329ac382509b84b1453e60d2f078409410e6ef91073c870f11",
    "sourceSha256": "35fe16441b2e2bb19214ed609fb1cad66d070bdf15a1d3cab4781f9be8d1c1b4"
  },
  {
    "sourceId": "soartec-product-107",
    "mpn": "WS-2068P",
    "rowSha256": "4cc322ec1dfdb150c3a14ff5662a8174b19e15e15f24dabe749df3dc443cfbcd",
    "sourceSha256": "4d29e556c44cc70228197cb8d91421713a5ae86c36f474d0b6cc4090b14c66d4"
  },
  {
    "sourceId": "soartec-product-108",
    "mpn": "WS-211T-6",
    "rowSha256": "98cd71a7dbfb30f6bba458cbf4619d5defd7fbbbd885a3698ccd2e07db38b869",
    "sourceSha256": "9bb4d04f9a6768990d3bf7e758ba15dab5a2e43726d1ceb9859334abe6fbf258"
  },
  {
    "sourceId": "soartec-product-110",
    "mpn": "WS-2068",
    "rowSha256": "6fc0bcb76837d757c0d1f7251c88bee046d6423084c60e38a509cc0908185bc7",
    "sourceSha256": "a07b3bd18c175bd2dbdfcab9d112140e2b893ee5fc4a806be5de1e20cd1320c4"
  },
  {
    "sourceId": "soartec-product-112",
    "mpn": "WS-220-8",
    "rowSha256": "47c1e4a87d34572dd7af46c9d79c4da8379debb13d9f4b1283495873f2b47435",
    "sourceSha256": "0b7a7d49c31e4b10fe18a8905f6fdb5a5f7b676a1c09a79c1c40cf272f6cd1b9"
  },
  {
    "sourceId": "soartec-product-115",
    "mpn": "WX-7931",
    "rowSha256": "13dda8f0e2b1e4fcd336469dfcbdfe9ca30b0363c04cce19153583d1e37c5152",
    "sourceSha256": "4bb74ef65d1d2996641369e84ff5d4ce3cdd07477b6a0fcca3ab0f2066d368f3"
  },
  {
    "sourceId": "soartec-product-116",
    "mpn": "WX-7921",
    "rowSha256": "dba5de02184f28c66d7a55834a81f3024c543bdb235b8279581f1dad52fc330a",
    "sourceSha256": "9182b0e5c3868a4bf1b8edd046974bc3db391b4824f5c5afa1ca65026ce23bc4"
  },
  {
    "sourceId": "soartec-product-117",
    "mpn": "610G",
    "rowSha256": "a44da3e114666352963889b4ae61a41d5d56ef2a20ec589becf9cabf500edbbe",
    "sourceSha256": "83d8231bb7f8cf0ed068ea92092f5c5e9d5601347dade5391a8c094c87a267d1"
  },
  {
    "sourceId": "soartec-product-118",
    "mpn": "610GH",
    "rowSha256": "f17943c7ec76ed1f91746ed772b8395a7f779cce46872a000c98cd4e7ee91213",
    "sourceSha256": "80e8fb677f5b217f020e928ea8afd08bc61d4a26eda058d6998b3f019acab981"
  },
  {
    "sourceId": "soartec-product-119",
    "mpn": "WX-610CH",
    "rowSha256": "165e88aaf2cc926722f3fbdba36882b123e3519173e09a41ca289084167afa0a",
    "sourceSha256": "f88ffc9d09b08c1e3f80c99f878aa3fd3faaf36b5db344e93984ce49f5899866"
  },
  {
    "sourceId": "soartec-product-120",
    "mpn": "WS-662",
    "rowSha256": "ae62fb7743b8e5d6efe0abf07269bbc5d9e9da338affc2b17ee4b91dc68978d0",
    "sourceSha256": "05d45b5b473b0685fd5e8358cd7dcc39d8084682b670a308fd282dbad53353f2"
  },
  {
    "sourceId": "soartec-product-121",
    "mpn": "WZ-660",
    "rowSha256": "1df41a64b9182e6aa0af07ac1ab6612ca45704e91814d4c0b6287c34ba33bd2b",
    "sourceSha256": "fdd961a1a47dd180bef8ec15f40cbe7a008fd83bd2727b2906594c8f1f73ffe4"
  },
  {
    "sourceId": "soartec-product-122",
    "mpn": "WX-64CH",
    "rowSha256": "82973c076b6bdfb739eea63396cf86e027abc61cc3b07f22378f91511666de1b",
    "sourceSha256": "292e7bcef02909853b5279ce4e268c5358f99ad0480ed7c84e920d622979bd07"
  },
  {
    "sourceId": "soartec-product-123",
    "mpn": "WX-64C-22",
    "rowSha256": "b91b0423402d9717efb6ce318d0ced7501bb74fa879e2bb7b79afc5df38706ef",
    "sourceSha256": "e955c3be385d45d1cae049837081a47790fa27ebe2f65cfc50de2760256eadf7"
  },
  {
    "sourceId": "soartec-product-124",
    "mpn": "WX-63C",
    "rowSha256": "406c8d98e39228ad009ff160ff08e5205c17e6a99f5f77257000765e598697e0",
    "sourceSha256": "e80c04c9dbd49637489a9d05ab1351e2f63c4a019c6a45b71208b936a7595fce"
  },
  {
    "sourceId": "soartec-product-125",
    "mpn": "WX-63C-1",
    "rowSha256": "c6cc41128464b70be65560f7129b58b34de02175d30e1248a2469dbda94f6bb9",
    "sourceSha256": "3590f79d679b59e4d19785562e8a503c75d3b84b5c8d249b1740af8cddc16383"
  },
  {
    "sourceId": "soartec-product-126",
    "mpn": "WX-610C",
    "rowSha256": "a953bd236ac8abd491bb993ded787086b67073c84b9cd4687f371e9c195dd358",
    "sourceSha256": "63ffdb9c92595a6cb65c11937e8e1ed1df7cd3ba3f159e38797b7825d57443fd"
  },
  {
    "sourceId": "soartec-product-127",
    "mpn": "WX-62C",
    "rowSha256": "f49621c0d733cf37c67e6464fc4a86d17c85bff754708d223d002e996532c0ff",
    "sourceSha256": "997fdd94c9989fb2f12dbf2da43a7b92919020aca56bc5d5b4e07023eb044112"
  },
  {
    "sourceId": "soartec-product-128",
    "mpn": "WX-617F",
    "rowSha256": "ca0a089e49e6c9a680b33e9cd90c7775dda1eb844241d28daf0479f6abad48f9",
    "sourceSha256": "e887add0bf922b5b66bd60d59a96dc724097999905ece7e9a2663f84915aa075"
  },
  {
    "sourceId": "soartec-product-129",
    "mpn": "WX-617",
    "rowSha256": "5f9261d506a0d7505b51998d615f911c15853bc190c7b0385f03ca412fede5ee",
    "sourceSha256": "ef9a31faaed48523b33ba535739c0e7fef5f18ac09f4036c5267450267ba1ac3"
  },
  {
    "sourceId": "soartec-product-130",
    "mpn": "WX-615S",
    "rowSha256": "74a034f11925126613d558686ace5b64ab1d4a04e90c020bd9ac30a4c29f1835",
    "sourceSha256": "49f0e3494b859a45339022e31a1505a369316dc7f8b89b1d6e675ece5cc13dcb"
  },
  {
    "sourceId": "soartec-product-131",
    "mpn": "WX-616SH",
    "rowSha256": "f7dabad8876739a803a9b51f880cc6baf1b884fdc5080dfd5afa23693e5764a9",
    "sourceSha256": "6319dadff03aa3e09a7a2f28e41a701d1e3c5bb4e1f0b28a3b33d32f88701686"
  },
  {
    "sourceId": "soartec-product-132",
    "mpn": "WX-616S",
    "rowSha256": "580e4fb3b61596834d0d2d255ce79b2fea5f07151402f87315aa6c2850e0f33d",
    "sourceSha256": "a29e2a5866f8b63208bf830c4e025f2236c021c4f015305f8260d5cba905bfc5"
  },
  {
    "sourceId": "soartec-product-133",
    "mpn": "WX-615SH",
    "rowSha256": "4dc126a188c046fb9214d56cb0203032e8d8b29fc521bec74240a7517b4e3fe7",
    "sourceSha256": "d61d0662c48bf78b900703eaab6e343eb2a652b2562e49385d752f8c9f373a5d"
  },
  {
    "sourceId": "soartec-product-135",
    "mpn": "WX-628A",
    "rowSha256": "1d9af8625d454bce3ad0c08826724919f86bdcbe542f107b778e9cca335b4a3e",
    "sourceSha256": "4c96bbcee965f24a0c1b17869251b6e921d0170cd61e0ac261bc8ee644e2fc8c"
  },
  {
    "sourceId": "soartec-product-136",
    "mpn": "WX-66C-9",
    "rowSha256": "c7c9f3224c4f96752035669ae1ed24040933817ed144be5ce52bbb2df12594e9",
    "sourceSha256": "d30ed0c83027a348e12f123d3e9614ab11e46d8313b6aef6f86a6524bbf0f61d"
  },
  {
    "sourceId": "soartec-product-137",
    "mpn": "WS-1051CR-6H",
    "rowSha256": "c11c71b26a28576e9b0ec874d3dda8951abf51b12d306c836e980d0efc97611b",
    "sourceSha256": "68955e0bd05b3d1dc674f7675ff435b85ecb1a15d2a3ca3880601fa5f7bf859e"
  },
  {
    "sourceId": "soartec-product-138",
    "mpn": "WS-1051C-6H",
    "rowSha256": "b9adf0722f59d95c190672bc4198d75b47aa32fbe721b9f73b3d0836c051ad74",
    "sourceSha256": "006bc11b7e38c4f20b761c23927c64a0453bb5f28f9a63db4d96c46d5e8d6884"
  },
  {
    "sourceId": "soartec-product-139",
    "mpn": "WS-1051CF-6H",
    "rowSha256": "5d9139ab6c90259d429a05c64b74b2d1c40b7c095ae9e886f8bf6b4d97cf085b",
    "sourceSha256": "508be54f00f2218c6e48bdfd3bfffae703b7a708f42056c244b2aafa09f58dcb"
  },
  {
    "sourceId": "soartec-product-140",
    "mpn": "WS-1051CR-5H",
    "rowSha256": "5d67a713acaa3de5d119e30ff3d88ee138c16c75b0bfe22badaa0308263076ee",
    "sourceSha256": "ca1039a277bc400baee6cb782d960778cc86109f08a27cbe5914287fc45e6291"
  },
  {
    "sourceId": "soartec-product-141",
    "mpn": "WS-1051C-5H",
    "rowSha256": "56b3e1054a42c4064b8eb54dda3c351610c22b41bba34a2250a23eef80e4341b",
    "sourceSha256": "448af5b492424f1476a693cadcb8a6ab06140f62fea71c29b9c2b2ef4ae3ac36"
  },
  {
    "sourceId": "soartec-product-142",
    "mpn": "WS-1051CF-5H",
    "rowSha256": "ecef330b528072dd99818c54c0cf0018d57f994606f59a78d28c7c702e6ec11c",
    "sourceSha256": "04c239d09f61a5a75038f1b388cd427952dec9690c1b4ebbb37f2b53729cb1dd"
  },
  {
    "sourceId": "soartec-product-143",
    "mpn": "WS-1051C-3H",
    "rowSha256": "e9557aaf00feca85ae1063ecb2d7ebf961b03a14a0c0f6f78ecf9a840bd78b29",
    "sourceSha256": "2217495770f0c738e2068cde2af9e5a817a8099288ff90693dd7fcbf7058eb7a"
  },
  {
    "sourceId": "soartec-product-144",
    "mpn": "WS-1051CF-3H",
    "rowSha256": "717fd4b495465b1f4dcbdcaa62a89c5d0715fd1fb48fa167d8fa52b13a255c9e",
    "sourceSha256": "b04f19ad3a50a6ba561f64afaeebca9b53747a0977c6323808dcef5778e05ef3"
  },
  {
    "sourceId": "soartec-product-145",
    "mpn": "WS-1051SR-6H",
    "rowSha256": "bc118f4443274c9c437375ac645b9ce028c6a4e20bc5d5d56565396b3f9140b8",
    "sourceSha256": "c85953b4e79360425f744a42df1194a2226e607c746d3ffe95ef3a707f1251a0"
  },
  {
    "sourceId": "soartec-product-146",
    "mpn": "WS-1051S-6H",
    "rowSha256": "933796355e4523729751a3f13a2da327ea95f5c0e12eb98e7f2535a8dad2307a",
    "sourceSha256": "eb2f0eeba273112ee7acdfd57b04ba4e1816c9df9102b1700d0d302cd3b02597"
  },
  {
    "sourceId": "soartec-product-147",
    "mpn": "WS-1051SF-6H",
    "rowSha256": "42fc9d3e359288c2e652c7551cd101fd675b38be03ff969a9360c47a1a290be7",
    "sourceSha256": "ce8a4003ff734af055413df474f7ec0a257618d55d8422ba0495e00ce85c4c58"
  },
  {
    "sourceId": "soartec-product-148",
    "mpn": "WS-1051SR-5H",
    "rowSha256": "abd0e6dbf5e1f32cca61e4721dcc2427de96ea979132e3bf734c43079e1f21fb",
    "sourceSha256": "71f2e0f8a4550801a1c05561faa088ef8002c17b417f5d1a2e54e85db2f6a900"
  },
  {
    "sourceId": "soartec-product-149",
    "mpn": "WS-1051S-5H",
    "rowSha256": "6364d3fc0ff60ec87580e913be28a2709d8ab557c6b9d050471b2d5da3e8b6f7",
    "sourceSha256": "893833f13c99e9c00448ef96ee886e14ed91501d3f31a22c5f09dd6cbfd5e615"
  },
  {
    "sourceId": "soartec-product-150",
    "mpn": "WS-1051SF-5H",
    "rowSha256": "045bb96fe1e458998066fef48bedf37961c6a3565b39c3b25e4c498abc6f44b0",
    "sourceSha256": "49d11026ff693b068e41a78858aeffe090ed07b02a23e9bba803d6319eb1bd56"
  },
  {
    "sourceId": "soartec-product-151",
    "mpn": "WS-1051S-3H",
    "rowSha256": "dba8c353bff8e204eb7050f15109554ba67db632630935192134007a96020174",
    "sourceSha256": "224b231bd38ba2e00ff2e0301de5b350a1798157e140b23aa53f32a61785b4ad"
  },
  {
    "sourceId": "soartec-product-152",
    "mpn": "WS-1051SF-3H",
    "rowSha256": "177da655542d62401cd5714f60a715a361ba0aa834f2e7b4b0e46f8bc6af0fe8",
    "sourceSha256": "3c41d69320f8b5611795e287bb3ce6f48f35bafe954a1d9f110dd8f889a7951d"
  },
  {
    "sourceId": "soartec-product-153",
    "mpn": "WS-105NR-6H",
    "rowSha256": "8fa2f1839b5acfcdd7b4eba91737a9d61a21afd0cfec9dbb67c78afbddd42d52",
    "sourceSha256": "1f1d3687f652cd8c26dbccdbb17404616ceeb6bea93f07130bd293806f9367ce"
  },
  {
    "sourceId": "soartec-product-154",
    "mpn": "WS-105N-6H",
    "rowSha256": "cf3f1b898ce26f19d302d8f350cd718192ee02951753f873700053c3f3cd5777",
    "sourceSha256": "89cd79bec16269b1af17d7aacb1625ba71cc9232249375e5fcdc85cf652b6f00"
  },
  {
    "sourceId": "soartec-product-155",
    "mpn": "WS-105NF-6H",
    "rowSha256": "5ebd2d29deb748046d1010b4f7e40c1033ed5d54e6d103d47d42613eab9932d2",
    "sourceSha256": "0dc8c74ba46926b659dc269bb45268cfee648ee7b22943ef64f2557066175a58"
  },
  {
    "sourceId": "soartec-product-156",
    "mpn": "WS-105NR-5H",
    "rowSha256": "15dc320eed6915cc354178d708a8c61024ecd295cbbf16ab7a6e465184933749",
    "sourceSha256": "84185d891eceb6a12b46a702285e6090f4652a4d2724bcb43a48ca20f6fdabb3"
  },
  {
    "sourceId": "soartec-product-157",
    "mpn": "WS-105N-5H",
    "rowSha256": "17e268a1e54d4b9a359188d97b6763929dfaa21cb8af4c472afdc5420c632b1b",
    "sourceSha256": "b3035df75edf1676fe42ea44e51193864e35526cec48e349643cd2e992e7280d"
  },
  {
    "sourceId": "soartec-product-158",
    "mpn": "WS-105NF-5H",
    "rowSha256": "9972a598972b7621457b0045ecb6957f8fed564b7baf83b51b3b20bc0083a0a9",
    "sourceSha256": "1cef63c72b575acdef185f861f5959507318adaccaef873cae27291f20b40f63"
  },
  {
    "sourceId": "soartec-product-159",
    "mpn": "WS-105N-3HA",
    "rowSha256": "821c2ea00eee7c9cfbe3ec5769e4fbd5049bf56eeeba01f968b624a3bcd8450b",
    "sourceSha256": "297f06aec240b0da327c2cbe0a7e8f0a0ce1553ef7ec0f3192c8cf955ee51ac3"
  },
  {
    "sourceId": "soartec-product-160",
    "mpn": "WS-105CR-6H",
    "rowSha256": "40a51b2d088b88cc4aea4e33625394659fc26346fb9cf31b3e16db454e5144d5",
    "sourceSha256": "65e718d0ebe543282878b21560c7dc7c7cea6b2c35362fe91332fe437ba49e31"
  },
  {
    "sourceId": "soartec-product-161",
    "mpn": "WX-455",
    "rowSha256": "e967377727664b05da4ec7cf3bee9b7c43fc24532fd7db177fca6f784d450398",
    "sourceSha256": "c0b0631274fc585aca986d7621d60741d4f092d81c8986134504dfdbb153f1d4"
  },
  {
    "sourceId": "soartec-product-162",
    "mpn": "WX-453",
    "rowSha256": "c76368e9ba38ee58f6b01f235df47fb72d837b579359f6886fb82e9f01b0aab6",
    "sourceSha256": "a40a9331a24f99b423a8c1bf582e9ad39fbb097ba1ecb783ba22ab6f0566aef2"
  },
  {
    "sourceId": "soartec-product-163",
    "mpn": "WX-452",
    "rowSha256": "6f0d3cfc6bbcdc15840986b68a6001bec7fd72f0b5328d3246f9fbb2b2219f46",
    "sourceSha256": "f3df6d2ae29b88b4e3ce6c6303901eaabce0b691c1fcc9b5d790a1fc80f9db9f"
  },
  {
    "sourceId": "soartec-product-166",
    "mpn": "WX-7911",
    "rowSha256": "708da78035edf990c818fa31479671f46cada3bbc9889f1079c45afb56652533",
    "sourceSha256": "4cbad916b59fc7f76fb99d4587c53e41a11f4a65e14dfffa7a56cc3237b66fab"
  },
  {
    "sourceId": "soartec-product-167",
    "mpn": "WS-2106",
    "rowSha256": "b2bd678904bb1fe6b1450f41aacc14446cfc806d6025404381d276ddb9192c52",
    "sourceSha256": "31ec681766d48f3ac0ad4d953dc4dd434346b5a353af93c29038cb509945b101"
  },
  {
    "sourceId": "soartec-product-168",
    "mpn": "WS-2106L",
    "rowSha256": "b2de5c30db211d6e487dda78cbc0f8600c35c3ac4617cc80c0755c57ea398a6b",
    "sourceSha256": "2b09753e791f499dc3d1463da97a71ac3ed41f51fc2ca4e4b0c62605d54a787b"
  },
  {
    "sourceId": "soartec-product-169",
    "mpn": "WS-203L",
    "rowSha256": "2bd03be3657a3ad199189553ad95f2e3cc701da774b769c9b8452b9e3293d476",
    "sourceSha256": "eca72a4030c446447d2b3ffda984d17df699c01930cd3d41dcdc552fc9e3e39a"
  },
  {
    "sourceId": "soartec-product-170",
    "mpn": "WS-203",
    "rowSha256": "1b90420ea8ce7c7b9373fce05fbc2c8ee326a3f8495a4a0c7c9567ee5a5a8fba",
    "sourceSha256": "9a1a567c3e3e59cecc88755479b044786cfb1ef3f5f9675859b400b755867a1c"
  },
  {
    "sourceId": "soartec-product-171",
    "mpn": "WS-202L",
    "rowSha256": "9ebf71085cbb4b009bf7fca926e00dfe692d03007c300dc05ffa824f3f8c061e",
    "sourceSha256": "42a7a1ae3436e00e8e580a5e76015a9e900108e9a95bd918382aefe713aa1b00"
  },
  {
    "sourceId": "soartec-product-172",
    "mpn": "WS-217S",
    "rowSha256": "c72637bb96199c9d5d39896fdbd9fea97f9f3ebce428c9e56d47fa07ee26a9d3",
    "sourceSha256": "48942e45a73f250b923bce43dab6080a83659b29b09f98c4b05ab671f8027355"
  },
  {
    "sourceId": "soartec-product-173",
    "mpn": "WS-202",
    "rowSha256": "ce0274b9a10c86fc12fd7d24cdb030c9bc3ee585a8638e7a5dd2f7ab351594d4",
    "sourceSha256": "c2636ed97b2abc3125bec107d838add4b4d9adb5b08b909adf765d4c2a910134"
  },
  {
    "sourceId": "soartec-product-174",
    "mpn": "WS-305JW1",
    "rowSha256": "59a950cc8538690b80e6f8491ae93738f26e747297d805ccacb47c70e0356996",
    "sourceSha256": "7ef8e169ebb9761e10c1227d5d5c5d0c6f3da1724ffdc30c116298617fc741fe"
  },
  {
    "sourceId": "soartec-product-181",
    "mpn": "WX-3T7150AB",
    "rowSha256": "862eb24482124faa14bd9bfb69795b338f0750e95bb4b0cc42449a916de40e97",
    "sourceSha256": "79fa0055fadd8fecd2a86cae8af89ec06fc2b40e2c09dbcd6ee0691c58e19724"
  },
  {
    "sourceId": "soartec-product-183",
    "mpn": "WX-3953",
    "rowSha256": "01ae2a9c4681294b658af4081d5716f6d6e4d64a74b9f40bcd55f69aa95d31e8",
    "sourceSha256": "76ba88a931a9d13c66963f13522042441a3f42bfca1551a563c59b036f630815"
  },
  {
    "sourceId": "soartec-product-184",
    "mpn": "WX-507",
    "rowSha256": "7ba1245b2372970482a6e132c284c12cff88a65c40b1fa68d76472ba9f7446dd",
    "sourceSha256": "f19a99459305936b9c1f63992c18c8e9a0d13911a08f5a79b00eaa55d1261920"
  },
  {
    "sourceId": "soartec-product-189",
    "mpn": "WX-521",
    "rowSha256": "5a927cbe2a939bd77d0d84bce7c1a6e8f553a05c4c400da7894f7657e64f596e",
    "sourceSha256": "340f59a3f6c4b5bd69b452ceb478691ff18af0bfa9dea8e21690a6407ebe4674"
  },
  {
    "sourceId": "soartec-product-190",
    "mpn": "WX-506",
    "rowSha256": "b490478d751c2fb0c9462b76193d2e72b52959b21963c7e24986c28b8db3e0b8",
    "sourceSha256": "e289401bc5ef89b850cd218bc2fddfb7d2e2dc22d5fca0762f2abcabba7bc4bb"
  },
  {
    "sourceId": "soartec-product-193",
    "mpn": "WX-2630",
    "rowSha256": "2280a397236e3d43b52ec6d334d3e498f167d1bdf8291593eecc9a2565a3577a",
    "sourceSha256": "4135b4fd8a28b352a7e35bf7d1254a38cfd52b8140631382727204069aba1f83"
  },
  {
    "sourceId": "soartec-product-194",
    "mpn": "WX-2911",
    "rowSha256": "660ebab434031120360b5e2a69cdef4c4a94aa8f4571f2cd3376825a7a35db22",
    "sourceSha256": "38c51a70b766d8db16fc6a3d8f71e98750a5c6b5e1bf9ccf7538d72cce8704b7"
  },
  {
    "sourceId": "soartec-product-195",
    "mpn": "WX-2810",
    "rowSha256": "3fcd972afa6af99103860483fb58c0ebbc8f7e82d6fcc48b800f159bb6b70755",
    "sourceSha256": "bafbf210f21256489cbe9eafacaa0e630a4398afe825856a9ca83f12c079c870"
  },
  {
    "sourceId": "soartec-product-196",
    "mpn": "WX-2802",
    "rowSha256": "50d10f341564a30c3649492febbf9c08fe5d2d934c8493cda083da731a44d45f",
    "sourceSha256": "dd4f799a010c8b4cc50fcaffb23220fcd8fa3ce39e9022c5444a7081d0a8210b"
  },
  {
    "sourceId": "soartec-product-197",
    "mpn": "WX-2707",
    "rowSha256": "fa50e6b5404f1ff691b587c1d13caeff97abb97128dca216a9c55f36a200405f",
    "sourceSha256": "b6c05493afaa0e0b7a000744d7c7e521cefdd1d2ce5950e95badfb4d00862251"
  },
  {
    "sourceId": "soartec-product-198",
    "mpn": "WX-2704",
    "rowSha256": "d7a9bcc8b60a0e0514383feeb41a10f1b266ccbbd9e6adb720f05630f7114584",
    "sourceSha256": "8967e496d78c63d9fca4382919c88b1691b9d47de46f83321cbac0c203138297"
  },
  {
    "sourceId": "soartec-product-199",
    "mpn": "WX-2703",
    "rowSha256": "83b9fa3195e6fbd8f1ca09b1ba0501279dc2a4cd156b2e2a7ee33c01b2366065",
    "sourceSha256": "ac954a3a7afea054185356efd991eff5005ec17b28caf985eaac36999b82a4e4"
  },
  {
    "sourceId": "soartec-product-200",
    "mpn": "WX-2702",
    "rowSha256": "39743f3fa2b3a819257bba5ae619fca33a5a7393a5bad207668c9a677d93a1d3",
    "sourceSha256": "1d72fd8a6dda221a00038772c37ddee6c099c50a7a50380b55640ace33b9170a"
  },
  {
    "sourceId": "soartec-product-201",
    "mpn": "WX-2701",
    "rowSha256": "3c804517e9159784a8e5698af7711224ebe100cb4133f74985c7ef0c0adfb16a",
    "sourceSha256": "b9105bfa3150832d8ea10e2a94c674731f5d9122947ec1f07824532ef96b8cc8"
  },
  {
    "sourceId": "soartec-product-202",
    "mpn": "WX-2824",
    "rowSha256": "99a9e47f6737f7443841bbae7522b5b22b1af71a48cdaf4a8ece9cdc5d71f50a",
    "sourceSha256": "81b3945ed35085ac828c554a27bdc22f83a8d9983c33c0b8ae231c6f3b7a1eff"
  },
  {
    "sourceId": "soartec-product-203",
    "mpn": "WX-2815",
    "rowSha256": "2b1bba68a167a3483498f3cdf79e7d70d454478313dfb2e2b2216419e742ab01",
    "sourceSha256": "b406f98b781a162a48d113c4d9cba90912cfc0e82f069487a626f7ef166f26a0"
  },
  {
    "sourceId": "soartec-product-204",
    "mpn": "WX-2803",
    "rowSha256": "b52cbcf4c737c898f2fb1b560d53f79dffae0cee079e867232c2e38145a69a46",
    "sourceSha256": "10728e1e0b79cd67439e9c1ddbdac5806d5a3555fc074802540590dda6c90d0f"
  },
  {
    "sourceId": "teng-product-00",
    "mpn": "ARWM38",
    "rowSha256": "651d9c17bea3e687b803773c3df81a0bf252ce8d891e067ba5b517aaac653023",
    "sourceSha256": "7533d0e681521858ddce8ef7b64d9649fada1cb4cc8b24ca429352a2e3d1bfb0"
  },
  {
    "sourceId": "teng-product-01",
    "mpn": "ARD13",
    "rowSha256": "ef34d558702668411462efbe38212f4b0b38030c27e7ef5232f9de81d3b2b713",
    "sourceSha256": "4c34e5b65056bcf9db52ef02b65f34dfbee158de5a337d19ad70c7bdf205b317"
  },
  {
    "sourceId": "teng-product-02",
    "mpn": "AREP25",
    "rowSha256": "f8c4783723bfc905336c3fe9096f2e9270a076203f1dc5afd65e10b5e23892cd",
    "sourceSha256": "e1a1fc3b75022aa70cf014feb1f16bc51cc662cbeb61476f23432938548d5a3d"
  },
  {
    "sourceId": "teng-product-03",
    "mpn": "ARRG80",
    "rowSha256": "0609decfddb1a63d194593a2cc747e52f122b3a5812f391ee5c193678cedc544",
    "sourceSha256": "72a790b1ab010bbbe1388ff9fa05dabb1ddcc06086286e64dae4672a4498005c"
  },
  {
    "sourceId": "teng-product-04",
    "mpn": "ARWC38",
    "rowSha256": "ecfc896bba080cb0f67e451a8bcad34c13c57a8b977eb65945bec2caec66d66b",
    "sourceSha256": "f77c8629c29083844e9b4ccd63881e6788aa064d5fd96bd207f81cb0bdbcf8a6"
  },
  {
    "sourceId": "teng-product-05",
    "mpn": "ARWC12",
    "rowSha256": "ab79bf68ab93045a0125161873e7d28ef1883eae0926350bd620c6477b8490a5",
    "sourceSha256": "86286d89d9c4fafc34674e1280a833683a99f76d8bcd6408669765c262b5b150"
  },
  {
    "sourceId": "teng-product-06",
    "mpn": "ARS02",
    "rowSha256": "6d547de4164c415ea245359949cf980e259276d94dd1e3d52386dc53545605b6",
    "sourceSha256": "bf02e8de9aea3019da45881ab8fad2e757be54f14f841bfe5b0437bf66d2f1ee"
  },
  {
    "sourceId": "teng-product-07",
    "mpn": "ARS01",
    "rowSha256": "85b879426309e173bf416032a06db6bad187a2de3ceaff0af9f5362988679149",
    "sourceSha256": "e69b1b3810e00317f153e81936801c305e49531cfe75a02c4b400f2807e11c34"
  },
  {
    "sourceId": "teng-product-08",
    "mpn": "ARG01",
    "rowSha256": "a66f148a793aeefc76369b9e9af64183d2e092b842dabdbe343ec7e3aa430525",
    "sourceSha256": "3ccf351ad7d43b2f28558672c1eb16c1da57943801b897ed86141ecb5255350f"
  },
  {
    "sourceId": "teng-product-09",
    "mpn": "ARBS10",
    "rowSha256": "ac5915a08af0564c5fe4094cd78b6cfe90a43c327e058f5c9ae0957942b09646",
    "sourceSha256": "f7b9c939e66caa83ecc4fd79abf921776e3fb90c7addd9f454c2dcdebd00655e"
  },
  {
    "sourceId": "teng-product-10",
    "mpn": "ARN12",
    "rowSha256": "11693b1572a47bba8b332404a34444d11a578e2a498995b23d133b4a7f9e35df",
    "sourceSha256": "6080bdae7b05f8f1bb0d0304bcfee411e56e0e7b5e070fbc461b2ea2fe77b50e"
  },
  {
    "sourceId": "teng-product-11",
    "mpn": "ARWM11S",
    "rowSha256": "7c587c042addebac0d2019019fdf685391166a00155679c49029b4e9b344d54d",
    "sourceSha256": "3c0e20b9547d633052000f9bb7ae52e6f756f01e851063b27d844f7d07ad31b7"
  },
  {
    "sourceId": "teng-product-12",
    "mpn": "ARB03",
    "rowSha256": "1e040827c420f2eaac6eccf3464a6554ffd4ded33d98045d3aa8885ea836da9f",
    "sourceSha256": "5c23d8c420b507998dea226405d3cc3014407b12859ffbdf56499ae123e07577"
  },
  {
    "sourceId": "teng-product-13",
    "mpn": "ARB02",
    "rowSha256": "9ecbc82e0c885e147ff908eb017dd4e38a68d0814f2b08671b2032b9c871098b",
    "sourceSha256": "389ad586028dd0b6da67e07d8e3cef327f8bbf31f2eb866853bf138a44c86cdc"
  },
  {
    "sourceId": "teng-product-14",
    "mpn": "ARB01",
    "rowSha256": "c56154d0f92810b0bd2c419480a1f93e49dc59756754602f2bbab99a405cd6b9",
    "sourceSha256": "02f9d138079a946477e8221c2bc36853f6428fea0edfb9af3bc42cb7b33b6161"
  },
  {
    "sourceId": "toku-civil-306",
    "mpn": "MI-16S",
    "rowSha256": "b7ab662b722d36d795d9e7bd23f774181781d484844f8c89a4d240001b296a72",
    "sourceSha256": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124"
  },
  {
    "sourceId": "toku-civil-306",
    "mpn": "MI-165H",
    "rowSha256": "70277e999571f2d4aff781a0fd305d1a6f8218e00362ed52feb8fae8039986a5",
    "sourceSha256": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124"
  },
  {
    "sourceId": "toku-civil-306",
    "mpn": "MI-1500-A",
    "rowSha256": "0e38001973350b70d070d62b045e425150674e34f8c8845b3b64970b799ff477",
    "sourceSha256": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124"
  },
  {
    "sourceId": "toku-civil-306",
    "mpn": "MI-220H",
    "rowSha256": "e08b28076b96a9e9a00703be5b4e529469733e8368956c1cc56eed4497056179",
    "sourceSha256": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124"
  },
  {
    "sourceId": "toku-civil-306",
    "mpn": "MI-2500GL",
    "rowSha256": "f9f111f662721ac11795ff74c4ca58d6411bdfc1ceac9f41029ca2c24efdd884",
    "sourceSha256": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124"
  },
  {
    "sourceId": "toku-civil-306",
    "mpn": "MI-38EXL",
    "rowSha256": "5acdd390dc0526e504ff7ff5bcb53fa80c422df13cd633f61f0a82eec30bc993",
    "sourceSha256": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124"
  },
  {
    "sourceId": "toku-civil-306",
    "mpn": "MI-3800GL",
    "rowSha256": "a65d9262035e747b41ebbfcf70034c2c50676d14a9fdf22b91a8586aad88e09a",
    "sourceSha256": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124"
  },
  {
    "sourceId": "toku-civil-306",
    "mpn": "MI-42GL",
    "rowSha256": "f9ec515bc182dacb6c3e5f88d48b5ed1f24e3de4f180fc42fc855a4513eebab7",
    "sourceSha256": "fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124"
  },
  {
    "sourceId": "ata-page-1312",
    "mpn": "SPT100R",
    "rowSha256": "55a31b34cf134dbf411454c8cfad1761e542128270fa5a668f7dbc0e4ec3f8b1",
    "sourceSha256": "fa4af92714bdca4bddbe566cd8f312bbf9a2ee43427fb724a81eb0af6cec085e"
  },
  {
    "sourceId": "ata-page-1312",
    "mpn": "SPT80R",
    "rowSha256": "3ddea0ddfcc611e6c10e0cda245a8b1c8ea92e75a0aae45ea60dab7114612c71",
    "sourceSha256": "fa4af92714bdca4bddbe566cd8f312bbf9a2ee43427fb724a81eb0af6cec085e"
  },
  {
    "sourceId": "ata-page-1313",
    "mpn": "SPM80R",
    "rowSha256": "6ce765158466cccdbcefa8fc56cf8f4d5324d21e54d083ce4ad39b63ab5c73e2",
    "sourceSha256": "c52ff9fb3800227bad93451023adb6c80249199d57f13425004f2db2bb283471"
  },
  {
    "sourceId": "ata-page-1313",
    "mpn": "SPM60R",
    "rowSha256": "1038479c21abb257487a547d14ac45b0f3d3d52837bb855458db3a57cd08d1c4",
    "sourceSha256": "c52ff9fb3800227bad93451023adb6c80249199d57f13425004f2db2bb283471"
  },
  {
    "sourceId": "ata-page-1313",
    "mpn": "SPM45R",
    "rowSha256": "c310da13bbfabddb467797bef92d7d41a7116ddf10470e331d900ae7076c2922",
    "sourceSha256": "c52ff9fb3800227bad93451023adb6c80249199d57f13425004f2db2bb283471"
  },
  {
    "sourceId": "ata-page-1314",
    "mpn": "RPM25R",
    "rowSha256": "ec81d74eb29d07c196f6e46aa8767c9dcb3b89d23f1f3aaa3f83979c7a5925a6",
    "sourceSha256": "31a004cded5637b7f169f101b85ca78f9b53bebe126e90fce482be26772d58e5"
  },
  {
    "sourceId": "ata-page-1315",
    "mpn": "ST100",
    "rowSha256": "2fa8408575a7b58bebd3b41ebc0cc8bb21f55883cb9bec08c283373258fcc284",
    "sourceSha256": "59a04c06fb45740b82544d40c60029d6cf7b88c0a8ae5f1f11e0f2638aeee661"
  },
  {
    "sourceId": "ata-page-1318",
    "mpn": "SDM37L",
    "rowSha256": "dfda913f6ef703724edefd79eb7aeb58d9d9d7f50b71f478556997077ae6969e",
    "sourceSha256": "921063144e05c801cffd0bd399ffd8f88d07d298152595b2085cd96c105177e6"
  },
  {
    "sourceId": "ata-page-1318",
    "mpn": "SDM37LR",
    "rowSha256": "5c7c38d2af6c08f5f4258f5e8cbec7d0c0dbca543f5a619b0215ec758a9ea96e",
    "sourceSha256": "921063144e05c801cffd0bd399ffd8f88d07d298152595b2085cd96c105177e6"
  },
  {
    "sourceId": "ata-page-1318",
    "mpn": "SDM30L",
    "rowSha256": "35b4eafe4431710ce9cc309140815393d5bdd693e56acfe6905598552f372594",
    "sourceSha256": "921063144e05c801cffd0bd399ffd8f88d07d298152595b2085cd96c105177e6"
  },
  {
    "sourceId": "ata-page-1318",
    "mpn": "SDM30LR",
    "rowSha256": "6855990bb66f6052ca52ac0e333355e7a121b7b40ccc6b2ea808866e6f94e270",
    "sourceSha256": "921063144e05c801cffd0bd399ffd8f88d07d298152595b2085cd96c105177e6"
  },
  {
    "sourceId": "ata-page-1318",
    "mpn": "SDM26L",
    "rowSha256": "67b4bdf9b1b0366448dfd516fdff84a6bee6cacaf38b680c2e36f4ccc8181f13",
    "sourceSha256": "921063144e05c801cffd0bd399ffd8f88d07d298152595b2085cd96c105177e6"
  },
  {
    "sourceId": "ata-page-1318",
    "mpn": "SDM26LR",
    "rowSha256": "b1e05821fcfc58735fd083d0dae45caf4eb28540428310c0c607513c3969d1e6",
    "sourceSha256": "921063144e05c801cffd0bd399ffd8f88d07d298152595b2085cd96c105177e6"
  },
  {
    "sourceId": "ata-page-1319",
    "mpn": "SMD30LR",
    "rowSha256": "bf09a6b2b5946ae017cae2f4c7cb5376821f6935fa4d646356c7c6c4a800589e",
    "sourceSha256": "6cbe24b76194a771371fac219682c1196e4c6e67f11ed5adffd14a490321fa42"
  },
  {
    "sourceId": "ata-page-1320",
    "mpn": "SMD25LR",
    "rowSha256": "5b8fbdb8df4c9038e70036510544e1a42d29fcfd7166233383cc727ced56e241",
    "sourceSha256": "14c0af1b516b8b0c33b761f721076bf44ff8732abbcfb0755d439a9382468735"
  },
  {
    "sourceId": "ata-page-1320",
    "mpn": "SMD18LR",
    "rowSha256": "967c405d13f65d43762f0e01bf78a8e9e6fa8ff2850b58ae11bef8a77570a242",
    "sourceSha256": "14c0af1b516b8b0c33b761f721076bf44ff8732abbcfb0755d439a9382468735"
  },
  {
    "sourceId": "ata-page-1321",
    "mpn": "SM25L",
    "rowSha256": "bd1ff1cdac57ab44266f472eb6507e861eb975a8bdb64d515a152a0fa27aa59a",
    "sourceSha256": "1c2d6581ca20cd37afae5fe5ce74d70e92e3add8546933a095ce4372213bc3da"
  },
  {
    "sourceId": "ata-page-1321",
    "mpn": "SM25LR",
    "rowSha256": "1ed50da056c104966c57f7e93f0c5cb99f81507eddae21188a4f2dc17ad66536",
    "sourceSha256": "1c2d6581ca20cd37afae5fe5ce74d70e92e3add8546933a095ce4372213bc3da"
  },
  {
    "sourceId": "ata-page-1321",
    "mpn": "SM16L",
    "rowSha256": "5282c0bd7539981497debb272c4e4d7026198f63a2fbc06803351c11f15825d0",
    "sourceSha256": "1c2d6581ca20cd37afae5fe5ce74d70e92e3add8546933a095ce4372213bc3da"
  },
  {
    "sourceId": "ata-page-1321",
    "mpn": "SM16LR",
    "rowSha256": "19d243fcb1a68cdc04f289d91b46a774defca3e36e15b06e2ef6c08e60c8459d",
    "sourceSha256": "1c2d6581ca20cd37afae5fe5ce74d70e92e3add8546933a095ce4372213bc3da"
  },
  {
    "sourceId": "ata-page-1321",
    "mpn": "SM10L",
    "rowSha256": "17ce42a28fb8d393d39b9f435fad1325aacda69dc52a67f79b8db3c606a728cf",
    "sourceSha256": "1c2d6581ca20cd37afae5fe5ce74d70e92e3add8546933a095ce4372213bc3da"
  },
  {
    "sourceId": "ata-page-1321",
    "mpn": "SM10LR",
    "rowSha256": "14fbf6dea8a4fcf4ad5f58789c9c4aceb0bc0684b70a087183954bc6fe22b245",
    "sourceSha256": "1c2d6581ca20cd37afae5fe5ce74d70e92e3add8546933a095ce4372213bc3da"
  },
  {
    "sourceId": "ata-page-1322",
    "mpn": "SMX25L",
    "rowSha256": "859e0b708ef2c06e3e622126c5c42c3591e10c52656a98824de27c53b0801e69",
    "sourceSha256": "9a2691bb2b106f72b8c18e6d653c1222c47f992f3936d6880a6f02a2d75385fd"
  },
  {
    "sourceId": "ata-page-1322",
    "mpn": "SMX25LR",
    "rowSha256": "68486ffd19a19ad68d5dc343abb99ca49f43d1df845b3c081268d5c238ffb86f",
    "sourceSha256": "9a2691bb2b106f72b8c18e6d653c1222c47f992f3936d6880a6f02a2d75385fd"
  },
  {
    "sourceId": "ata-page-1322",
    "mpn": "SMX16L",
    "rowSha256": "bbc97cca177c5dcf79571899044a6c5d4b2315e98f9b0772f5f8f5ebdb809ad0",
    "sourceSha256": "9a2691bb2b106f72b8c18e6d653c1222c47f992f3936d6880a6f02a2d75385fd"
  },
  {
    "sourceId": "ata-page-1322",
    "mpn": "SMX16LR",
    "rowSha256": "68af15a556833b1fdd6ffa83a87416b2ef92129a28669f91295a60030c3e1f30",
    "sourceSha256": "9a2691bb2b106f72b8c18e6d653c1222c47f992f3936d6880a6f02a2d75385fd"
  },
  {
    "sourceId": "ata-page-1322",
    "mpn": "SMX10L",
    "rowSha256": "1ae7dcce2d48294b487d954200c6ce6511a604f1bd22164a9178e971306fc247",
    "sourceSha256": "9a2691bb2b106f72b8c18e6d653c1222c47f992f3936d6880a6f02a2d75385fd"
  },
  {
    "sourceId": "ata-page-1322",
    "mpn": "SMX10LR",
    "rowSha256": "b566025fa98835d20d14b5ddae5a0e00e212529d40b3b6d288378303c458b87e",
    "sourceSha256": "9a2691bb2b106f72b8c18e6d653c1222c47f992f3936d6880a6f02a2d75385fd"
  },
  {
    "sourceId": "ata-page-1323",
    "mpn": "SX22LR",
    "rowSha256": "191214ad5222740f50f188cb76f63e2b63b5e82ff6686e6004c80589854904f9",
    "sourceSha256": "ad0b9a411faf71e9c8da650411378b6400a16b128d7271abebc350e8ad1fe705"
  },
  {
    "sourceId": "ata-page-1323",
    "mpn": "SX16LR",
    "rowSha256": "f58f70ebc2e37166e59eb7d652c7a092397215578230a34cdd2c164772a3443f",
    "sourceSha256": "ad0b9a411faf71e9c8da650411378b6400a16b128d7271abebc350e8ad1fe705"
  },
  {
    "sourceId": "ata-page-1323",
    "mpn": "SX10LR",
    "rowSha256": "58f0812f41f48d226669b67da5efbfc2aaddcd5364fcc1ecabba67a3a2f25f16",
    "sourceSha256": "ad0b9a411faf71e9c8da650411378b6400a16b128d7271abebc350e8ad1fe705"
  },
  {
    "sourceId": "ata-page-1324",
    "mpn": "SHG18LR",
    "rowSha256": "4a1de9caa97b17756c2fdb4ce864c00f7133a11c533e55ded8cf98b24bc08660",
    "sourceSha256": "bc736846fe51509442617053601299cfa68cf2d805d55ecf115031c5679f51db"
  },
  {
    "sourceId": "ata-page-1326",
    "mpn": "RA12M-100",
    "rowSha256": "bd517e3e42e75cea80e697ef578d07fb6a1fb47e5594d6b1fed1cbb7340144de",
    "sourceSha256": "cde8839211f9e90af00e786b5b68bd3f540b221dcadb3f8c958d6bbe28afb734"
  },
  {
    "sourceId": "ata-page-1326",
    "mpn": "RA12M-100A",
    "rowSha256": "0eeb358f5dcee94e2d7b86693192eb1b643c0d974d26a538373d9d692e2c00bf",
    "sourceSha256": "cde8839211f9e90af00e786b5b68bd3f540b221dcadb3f8c958d6bbe28afb734"
  },
  {
    "sourceId": "ata-page-1326",
    "mpn": "RA12M-115",
    "rowSha256": "cd01b929411f421a71fccabcefe50c49b2d706f4d71e729b0f54971b8322f100",
    "sourceSha256": "cde8839211f9e90af00e786b5b68bd3f540b221dcadb3f8c958d6bbe28afb734"
  },
  {
    "sourceId": "ata-page-1326",
    "mpn": "RA12M-115A",
    "rowSha256": "7642c54d9b5e72345c02267fbe2fc528e54ca700ac1f5785b73a7a98c1fa741b",
    "sourceSha256": "cde8839211f9e90af00e786b5b68bd3f540b221dcadb3f8c958d6bbe28afb734"
  },
  {
    "sourceId": "ata-page-1326",
    "mpn": "RA12M-B",
    "rowSha256": "3495963806786b353038772a7803e8aa794352b48b5da27bb5a49dd9259eca0b",
    "sourceSha256": "cde8839211f9e90af00e786b5b68bd3f540b221dcadb3f8c958d6bbe28afb734"
  },
  {
    "sourceId": "ata-page-1326",
    "mpn": "RA12M-C",
    "rowSha256": "cdbf92b15f193b4af64a6d4dc99b12b4eeb8faa1f0309f846d4a7cec9310c6cd",
    "sourceSha256": "cde8839211f9e90af00e786b5b68bd3f540b221dcadb3f8c958d6bbe28afb734"
  },
  {
    "sourceId": "ata-page-1327",
    "mpn": "RA14-100DS1",
    "rowSha256": "66e30cb5fb043510176fc5beafc5d859b2f49ba087f417cfa49342fff7cdfe0e",
    "sourceSha256": "3bfe2f66adc928f2c6ecbee404ec37f57cca785bef1f81dbed27689232550e09"
  },
  {
    "sourceId": "ata-page-1327",
    "mpn": "RA14-100PA4",
    "rowSha256": "069418f4f7045daf51959e587dcc5748cac2cfcec3f82c06d10e0007fb060496",
    "sourceSha256": "3bfe2f66adc928f2c6ecbee404ec37f57cca785bef1f81dbed27689232550e09"
  },
  {
    "sourceId": "ata-page-1327",
    "mpn": "RA14-115DS1",
    "rowSha256": "8b58571d4b455d026dbba1dfb2d4eba93b242fca5b8725e078045a434b7f6cbd",
    "sourceSha256": "3bfe2f66adc928f2c6ecbee404ec37f57cca785bef1f81dbed27689232550e09"
  },
  {
    "sourceId": "ata-page-1327",
    "mpn": "RA14-115PA4",
    "rowSha256": "fd51728737e2c96cc1e6641dc7714f9676d918e1d1cfc3d2dcba365b3a8e4f2d",
    "sourceSha256": "3bfe2f66adc928f2c6ecbee404ec37f57cca785bef1f81dbed27689232550e09"
  },
  {
    "sourceId": "ata-page-1327",
    "mpn": "RA14-125DS1",
    "rowSha256": "fa8947f65589b446cb6efe30ab88745b0b29b2abebf93454b29f713ff0e2c452",
    "sourceSha256": "3bfe2f66adc928f2c6ecbee404ec37f57cca785bef1f81dbed27689232550e09"
  },
  {
    "sourceId": "ata-page-1327",
    "mpn": "RA14-125PA4",
    "rowSha256": "f5fb939e24391f531a067ec362334239b947c3fdff2ee48ed407aa1ff64e021f",
    "sourceSha256": "3bfe2f66adc928f2c6ecbee404ec37f57cca785bef1f81dbed27689232550e09"
  },
  {
    "sourceId": "ata-page-1327",
    "mpn": "RA14-125DS8",
    "rowSha256": "fb8c9d160c0ee9cb1906a83e11b75d51fec38b56702d821807adc8cd882ad7c1",
    "sourceSha256": "3bfe2f66adc928f2c6ecbee404ec37f57cca785bef1f81dbed27689232550e09"
  },
  {
    "sourceId": "ata-page-1328",
    "mpn": "RA8-AVH",
    "rowSha256": "fc5db20d19ba327a3792db6460f73a59ec7e87035cea73e99a2ea6ce1fb20b73",
    "sourceSha256": "dcc83d805366b1a61a5f4dde2fc67ea70989bb1be7d5c8087e8d7e0609092a36"
  },
  {
    "sourceId": "ata-page-1328",
    "mpn": "RA6-AVH",
    "rowSha256": "4d3565eaf87dccb9ca2192f9a81f60da532fe8df9990a6ecaf2024ce3f5e4b66",
    "sourceSha256": "dcc83d805366b1a61a5f4dde2fc67ea70989bb1be7d5c8087e8d7e0609092a36"
  },
  {
    "sourceId": "ata-page-1332",
    "mpn": "RA1650-115A",
    "rowSha256": "ce2c601078eb13cc71f1df9a4cdadefe49e019008559b12b993130e113306fa5",
    "sourceSha256": "1c746b50b5dc136b7c3e27676ae7013d578aafb5c0a971fea1872f41571ceca4"
  },
  {
    "sourceId": "ata-page-1332",
    "mpn": "RA1650-125A",
    "rowSha256": "ed6778ed1972949321e901876bbb56b92093b334f002056de1b39a2e2264fe91",
    "sourceSha256": "1c746b50b5dc136b7c3e27676ae7013d578aafb5c0a971fea1872f41571ceca4"
  },
  {
    "sourceId": "ata-page-1334",
    "mpn": "RAM20LR",
    "rowSha256": "c97c850cfafcb578ab19785d558222aaaa409e4872b6b83ce89e0880c53c8bf8",
    "sourceSha256": "2d324019d399b8facc02e5a4ff897e6485e3718a7c2f2164d91f234246e04f75"
  },
  {
    "sourceId": "ata-page-1334",
    "mpn": "RAM10LR",
    "rowSha256": "f414320ce069d9a8ebacd93ea125af24f140d260d620a007072978c6e0d7aada",
    "sourceSha256": "2d324019d399b8facc02e5a4ff897e6485e3718a7c2f2164d91f234246e04f75"
  },
  {
    "sourceId": "ata-page-1335",
    "mpn": "RAMX13LR",
    "rowSha256": "1ea2fa779677b613298d6a510aefd8b5e1e2e18548aad903fa445e47dc305a42",
    "sourceSha256": "11d78f6ec6340b6b059f6567ef30239d89341c5125c617f8dbecd0da2291608b"
  },
  {
    "sourceId": "ata-page-1336",
    "mpn": "RAM16L",
    "rowSha256": "2a024cf568ca25c68f3d20e3409888d6cb74be2c3416c364208925b00a6521ee",
    "sourceSha256": "48caf6348df9490ec2dcb4045ac03c12b592ec222d9bb5a355473bb209c5be40"
  },
  {
    "sourceId": "ata-page-1337",
    "mpn": "RA14S-125PA5",
    "rowSha256": "dcbdcb335ff0d0e6fe5d82868899b60c85af952d07af28d55dceab28c3c227c0",
    "sourceSha256": "cca8bf3b7d391e00081e7ad5476cbd356bd57f2de4e0dda72196f1d9451251db"
  },
  {
    "sourceId": "ata-page-1338",
    "mpn": "RA12M-SM14",
    "rowSha256": "98ecb9974ce582f4cc8a9d61db3b081b010142e0b410257977ba626beb89756f",
    "sourceSha256": "bc719937beb9addb14de0a1f476f6d84490eeb510543c2cb7fa57f2eb141a694"
  },
  {
    "sourceId": "ata-page-1339",
    "mpn": "RA1650-SM14A",
    "rowSha256": "3243b72d539bc80bb4196557a7932c3cd490ee09877e3bb5cd91fc87bc461bbd",
    "sourceSha256": "2846c3ebfda98c7200e433690faf041b4535647775a89eb61ec2130ff7138230"
  },
  {
    "sourceId": "ata-page-1339",
    "mpn": "RA1650-S58A",
    "rowSha256": "96b0417673ddb80c79b3e5aaf026c8e14b40df3b9c7346ec22317b790417a8a2",
    "sourceSha256": "2846c3ebfda98c7200e433690faf041b4535647775a89eb61ec2130ff7138230"
  },
  {
    "sourceId": "ata-page-1340",
    "mpn": "RA5",
    "rowSha256": "38c2c1a6c11fbe89cac36b560587ae6a43bd0198d7a8c2bc3a308f992c949ca6",
    "sourceSha256": "d393f3f084bf9da0563103dba85407d315d0042bf7cb20ebd094ca7f14b3ebb5"
  },
  {
    "sourceId": "ata-page-1341",
    "mpn": "S5L",
    "rowSha256": "2b2e3708e93e84049da0b92b67734a4634e2e5f24d96e09e03c8c4e5f364c65b",
    "sourceSha256": "ee358266f1bdd26c579258e2631b6614fd75a6f3bb6774b4e8ac39a959eaa59c"
  },
  {
    "sourceId": "ata-page-1342",
    "mpn": "STX5L",
    "rowSha256": "1fc0ff2bb5e64ca3bfbb0c4b728ad2bffcd60374cca581d7ad2ad0d4ae7fd077",
    "sourceSha256": "9dbc12d974087c56ad96b5c049dbb7d0a3a2dbbfe0a8fee62b540f6c932c50c0"
  },
  {
    "sourceId": "ata-page-1342",
    "mpn": "STX3L",
    "rowSha256": "9ba6dad2f8f60b572447c6a97875d2cb93b64a8a18029b83b704036953364757",
    "sourceSha256": "9dbc12d974087c56ad96b5c049dbb7d0a3a2dbbfe0a8fee62b540f6c932c50c0"
  },
  {
    "sourceId": "ata-page-1344",
    "mpn": "RALM20L",
    "rowSha256": "317a0a5b5b83450fc9a876d03ad1641f13e44a6c04a2f3ce48cd6634c80a42c0",
    "sourceSha256": "b705ee512cb2a95d37566288f688fc0a4a068824e94d31f1921971e7c40c00c8"
  },
  {
    "sourceId": "ata-page-1344",
    "mpn": "RALM10L",
    "rowSha256": "dae25121a435fa5eeba2a3e08d89881cf94c5991f2f7e94ce69bdf811cb9b3d4",
    "sourceSha256": "b705ee512cb2a95d37566288f688fc0a4a068824e94d31f1921971e7c40c00c8"
  },
  {
    "sourceId": "ata-page-1345",
    "mpn": "BLM16L",
    "rowSha256": "9c6484b60c2a1267eed3e6b0d85abb2496c8bedbb2b213ff7675dcef151c19bb",
    "sourceSha256": "bd6d57916d5123a733d9aaa2033af69b483cfd5d1b48de7e651ba04a48d66207"
  },
  {
    "sourceId": "kingtony-manual-000",
    "mpn": "37221-030",
    "rowSha256": "8091d01c1b47596544a10704f7ee68a78fa115833c64ae351b07eef1b18a85f2",
    "sourceSha256": "4603b3265aebf3f3f1a6366c7bb8ad2219978a09291b5fbfbfdb773c8bd72a4f"
  },
  {
    "sourceId": "kingtony-manual-000",
    "mpn": "37221-031",
    "rowSha256": "6607ca947b256ab7f831af42579a4bb3f487e54961a0f3869176728adefead9a",
    "sourceSha256": "4603b3265aebf3f3f1a6366c7bb8ad2219978a09291b5fbfbfdb773c8bd72a4f"
  },
  {
    "sourceId": "kingtony-manual-001",
    "mpn": "37235-030",
    "rowSha256": "7cbe386bd7fa8a076e6d19e13048fb0d0083ef045d5adc14866c698d0a05614a",
    "sourceSha256": "5206452cfa807a5faca2d5f9beaaa91690a0507d2b98e64688c0f55052f0a551"
  },
  {
    "sourceId": "kingtony-manual-001",
    "mpn": "37235-031",
    "rowSha256": "5da25716cd931be7697aad3f725609ab5b4668bd3c8cab4a6d808aeaa75427cd",
    "sourceSha256": "5206452cfa807a5faca2d5f9beaaa91690a0507d2b98e64688c0f55052f0a551"
  },
  {
    "sourceId": "kingtony-manual-004",
    "mpn": "37321-050",
    "rowSha256": "d9c614e4c260903238ffd435b67be7e8806633eebf48126c1d90d3d216e60efe",
    "sourceSha256": "bfca54a8a655a9ef0bc4e7ef9f48ed982d4f5f3d493ce7af34866446dab853da"
  },
  {
    "sourceId": "kingtony-manual-004",
    "mpn": "37321-051",
    "rowSha256": "c50baafce341ab444bc66f0e681d6ab9e3c236f63e04e1589aa0d8e3129edc71",
    "sourceSha256": "bfca54a8a655a9ef0bc4e7ef9f48ed982d4f5f3d493ce7af34866446dab853da"
  },
  {
    "sourceId": "kingtony-manual-005",
    "mpn": "37323-080",
    "rowSha256": "09e251e2e7697853c6ecfa8a7c95bc19787dae48fe27e4e18eaefd05bf020634",
    "sourceSha256": "515dd1d0595c89e49b0103a120aff3ba2eb106d3249f5d90b5671764b2d7d184"
  },
  {
    "sourceId": "kingtony-manual-005",
    "mpn": "37323-081",
    "rowSha256": "bc3181c12910224a38c610165b72faef847449dd6251b0c8fe88fd5d14495066",
    "sourceSha256": "515dd1d0595c89e49b0103a120aff3ba2eb106d3249f5d90b5671764b2d7d184"
  },
  {
    "sourceId": "kingtony-manual-006",
    "mpn": "37423-080",
    "rowSha256": "4327e1c177c6b8839564ed98d68786b006c37e4e84239fff8a9d67151235cc68",
    "sourceSha256": "a0c290ae23dd7f6ac4fc3b6911f92af787e81d79818c6b817c4b0ef28f9a2346"
  },
  {
    "sourceId": "kingtony-manual-006",
    "mpn": "37423-081",
    "rowSha256": "d03bd4a2d712927a1ffbd03796d9def26bd5d156fcc5a6157e754fc9d736d2fd",
    "sourceSha256": "a0c290ae23dd7f6ac4fc3b6911f92af787e81d79818c6b817c4b0ef28f9a2346"
  },
  {
    "sourceId": "kingtony-manual-007",
    "mpn": "37434-080",
    "rowSha256": "f6a1812e104ed9297ada20b0f1b04b663176d8e3f05eb6035bbe8ac097d7a224",
    "sourceSha256": "059c4ccd7868580d38d8ee646e05c0a7064bc136d77dfc18268949a02e261b5b"
  },
  {
    "sourceId": "kingtony-manual-007",
    "mpn": "37434-081",
    "rowSha256": "005b6a62e85c7749989d47d0db31d4004ba53976d448f476b9fecdb3b76d653f",
    "sourceSha256": "059c4ccd7868580d38d8ee646e05c0a7064bc136d77dfc18268949a02e261b5b"
  },
  {
    "sourceId": "kingtony-manual-008",
    "mpn": "37435-075",
    "rowSha256": "802ea5e923fd71e6007ee05d3f272902dcd38f2a5be0fc233458a441d2e91688",
    "sourceSha256": "c3f4fe25baac57911c175042794059132e86cbd310f4b59e75a2c2fcba6fd38a"
  },
  {
    "sourceId": "kingtony-manual-008",
    "mpn": "37435-076",
    "rowSha256": "c8b58437bc8272a9b53caea8425b966af738c31ae959fea11558cd8aadfaac6c",
    "sourceSha256": "c3f4fe25baac57911c175042794059132e86cbd310f4b59e75a2c2fcba6fd38a"
  },
  {
    "sourceId": "kingtony-manual-009",
    "mpn": "33411-040",
    "rowSha256": "119c11bfd15f66e46b2b71c9b299907ded0a6041b8ed2d83dc8080a62b925515",
    "sourceSha256": "7b3b4af989861e47110a9f1b50f9baaf1d8f62f961dacc7d0842cc42b73842d2"
  },
  {
    "sourceId": "kingtony-manual-009",
    "mpn": "33411-041",
    "rowSha256": "8502cda09e8fe9d228bc8528b4deb506622624c8fe93e8f71375bfae679869a0",
    "sourceSha256": "7b3b4af989861e47110a9f1b50f9baaf1d8f62f961dacc7d0842cc42b73842d2"
  },
  {
    "sourceId": "kingtony-manual-010",
    "mpn": "33411-050",
    "rowSha256": "f4f2fd2f701923f05142e679fad898577889e7af47e1321c96252a06081005e7",
    "sourceSha256": "60e58e3005ab8da41d4134378131e529a2deb3409f946f05efd1ce330e771d4b"
  },
  {
    "sourceId": "kingtony-manual-010",
    "mpn": "33411-051",
    "rowSha256": "5e3bb4643a4a0cd63d395e0330a53bd8673b81720b5bf4611ba0bd259431a2d0",
    "sourceSha256": "60e58e3005ab8da41d4134378131e529a2deb3409f946f05efd1ce330e771d4b"
  },
  {
    "sourceId": "kingtony-manual-010",
    "mpn": "33412-050",
    "rowSha256": "e2a60dd042b1b39ec2155926370a06d978c106432c3c1c660e8983fe22723945",
    "sourceSha256": "60e58e3005ab8da41d4134378131e529a2deb3409f946f05efd1ce330e771d4b"
  },
  {
    "sourceId": "kingtony-manual-010",
    "mpn": "33412-051",
    "rowSha256": "d91c158429d45797b147e6a92510daca40bf74eb76fddee1011e8b982ec69dcf",
    "sourceSha256": "60e58e3005ab8da41d4134378131e529a2deb3409f946f05efd1ce330e771d4b"
  },
  {
    "sourceId": "kingtony-manual-011",
    "mpn": "33421-040",
    "rowSha256": "769a04a5678765c7aa8c878814ff4192a512e975209342205931b0bdc3005b3a",
    "sourceSha256": "735d740b7824ffb16eb9f23f75151999a29efe374458b7ae41f6350cd98f4633"
  },
  {
    "sourceId": "kingtony-manual-011",
    "mpn": "33421-041",
    "rowSha256": "6f42e6682862a191cbc83e3f46bbc91ee4b0e6ee3e2b305231721fe06661338a",
    "sourceSha256": "735d740b7824ffb16eb9f23f75151999a29efe374458b7ae41f6350cd98f4633"
  },
  {
    "sourceId": "kingtony-manual-012",
    "mpn": "33431-050",
    "rowSha256": "80295f71c48d44288be24b7009badbb7e6279a9cf9e2f0d800571a5c80691c2a",
    "sourceSha256": "8189689e31b845d6a9851486d6268d02ca5108322dc8d764ea10f79af05684bd"
  },
  {
    "sourceId": "kingtony-manual-012",
    "mpn": "33431-051",
    "rowSha256": "8f987a82b7898f638a81d3ac7d6e6b62ea2c28f07d1f8144dcbc3aa95ac64c7b",
    "sourceSha256": "8189689e31b845d6a9851486d6268d02ca5108322dc8d764ea10f79af05684bd"
  },
  {
    "sourceId": "kingtony-manual-013",
    "mpn": "33431-065",
    "rowSha256": "7e0e19b108c1c5ee3abdadb88685481eef215e7a5cbcd29190fdfd5385639800",
    "sourceSha256": "aa266affce7e400716b910cc006755d748a3dcb5d11a033fb05327249e335834"
  },
  {
    "sourceId": "kingtony-manual-013",
    "mpn": "33431-066",
    "rowSha256": "67b57cb4673266eb02ff2636de6ac3993180e84d550b28936c8ad136184da027",
    "sourceSha256": "aa266affce7e400716b910cc006755d748a3dcb5d11a033fb05327249e335834"
  },
  {
    "sourceId": "kingtony-manual-014",
    "mpn": "33491-030",
    "rowSha256": "0bb30e8c9a7528cd51e84f9857a6e70a38cf5c264fea5a190a4ace971aa60061",
    "sourceSha256": "3fbef8ed3703cdbd1c636a3f1d9807fed9769553562afe2ba42e8c9127b550c1"
  },
  {
    "sourceId": "kingtony-manual-014",
    "mpn": "33491-031",
    "rowSha256": "c1c22818a99acc64533015c48d19b6bd19fd56693930aad8e8529193e095328a",
    "sourceSha256": "3fbef8ed3703cdbd1c636a3f1d9807fed9769553562afe2ba42e8c9127b550c1"
  },
  {
    "sourceId": "kingtony-manual-015",
    "mpn": "33611-055",
    "rowSha256": "a7a0c64b3ec96c86ce7770f73d5c2b54063d25cfd5317783d59cf205bdfa3dab",
    "sourceSha256": "199716f16989d21d9323ed5a24ac3b7b251cf052f6c6888d4e0ef21c3a58ab3f"
  },
  {
    "sourceId": "kingtony-manual-015",
    "mpn": "33611-056",
    "rowSha256": "95862eabd995c62b86109cbcb1184740d5a3344db4c7c59e2c5979fc8718304c",
    "sourceSha256": "199716f16989d21d9323ed5a24ac3b7b251cf052f6c6888d4e0ef21c3a58ab3f"
  },
  {
    "sourceId": "kingtony-manual-016",
    "mpn": "33461-100",
    "rowSha256": "c0e72a4dc8703e02050651825edf1dff7c5a1806893e1a2b97544c809407d161",
    "sourceSha256": "843e7a041bdd3eee10266c29fca97507c0c46901e4fb5108f133adb520da8227"
  },
  {
    "sourceId": "kingtony-manual-016",
    "mpn": "33461-101",
    "rowSha256": "5cd4273e317600900191042a09d42e79998334a80139a43b22c09372a08881b8",
    "sourceSha256": "843e7a041bdd3eee10266c29fca97507c0c46901e4fb5108f133adb520da8227"
  },
  {
    "sourceId": "kingtony-manual-017",
    "mpn": "33481-095",
    "rowSha256": "f9947ab16f60f4844f1c090f928fc3f542b034df9a60f87548f97be86ab53016",
    "sourceSha256": "f85be666b53998a9bda7da0681b2e9f2420a42ef20eb85f42b3ca5346f584504"
  },
  {
    "sourceId": "kingtony-manual-017",
    "mpn": "33481-096",
    "rowSha256": "3134896f7de24cfe6d5fa8a00bbae72731d1261f9ddbade553b6249a33244ef8",
    "sourceSha256": "f85be666b53998a9bda7da0681b2e9f2420a42ef20eb85f42b3ca5346f584504"
  },
  {
    "sourceId": "kingtony-manual-018",
    "mpn": "33621-075",
    "rowSha256": "d4a15fa6b597adb9a2e27266cb67aa5cb6b62576f24e6a3ebbd96216c9ab3d6a",
    "sourceSha256": "663481685130e7ed059876a9e2bb761cc16c53bfef978efbe9bdc99c046a6956"
  },
  {
    "sourceId": "kingtony-manual-018",
    "mpn": "33621-076",
    "rowSha256": "b611f38ae0286a4fe3ca1767fc6bbd74931ca4f6a7b137c182f5f51b0baf1753",
    "sourceSha256": "663481685130e7ed059876a9e2bb761cc16c53bfef978efbe9bdc99c046a6956"
  },
  {
    "sourceId": "kingtony-manual-018",
    "mpn": "33622-075",
    "rowSha256": "35c3859b178d9a566c84dfa21421c4255cf270beb72de6c85caabee09d1b33ad",
    "sourceSha256": "663481685130e7ed059876a9e2bb761cc16c53bfef978efbe9bdc99c046a6956"
  },
  {
    "sourceId": "kingtony-manual-018",
    "mpn": "33622-076",
    "rowSha256": "8c6091a16bcf2a415f54531577bd292c764e7faa490aee9b9cb573aa4e87d525",
    "sourceSha256": "663481685130e7ed059876a9e2bb761cc16c53bfef978efbe9bdc99c046a6956"
  },
  {
    "sourceId": "kingtony-manual-020",
    "mpn": "33631-110",
    "rowSha256": "3828e3d87ccc99bf9b6ec62c4d772f876ec757938dd69fd87dc80c6f0b3b7c99",
    "sourceSha256": "71cf92e3730da41c163baa4632fc971dfe82c43e4c260e0d94cd4b278ab92a96"
  },
  {
    "sourceId": "kingtony-manual-020",
    "mpn": "33631-111",
    "rowSha256": "c8fdaf348eba849a9d51495052a5cde83fadc75c5621219f2beb3c3d19e76ff4",
    "sourceSha256": "71cf92e3730da41c163baa4632fc971dfe82c43e4c260e0d94cd4b278ab92a96"
  },
  {
    "sourceId": "kingtony-manual-020",
    "mpn": "33632-110",
    "rowSha256": "96f7e1018c3e9e65992e3dad99d4a5c37e802ad34050f397238f1aa075852aab",
    "sourceSha256": "71cf92e3730da41c163baa4632fc971dfe82c43e4c260e0d94cd4b278ab92a96"
  },
  {
    "sourceId": "kingtony-manual-020",
    "mpn": "33632-111",
    "rowSha256": "bb160ccb92c29883fc0aade9a2cdf1561d300a732bf12b0b2be76739dc514177",
    "sourceSha256": "71cf92e3730da41c163baa4632fc971dfe82c43e4c260e0d94cd4b278ab92a96"
  },
  {
    "sourceId": "kingtony-manual-021",
    "mpn": "33671-160",
    "rowSha256": "6e17f7a22bb3338798ea52f39dec23e9b58aef2d765512f6f4b463f16d9ecb13",
    "sourceSha256": "ceff0bd89558da9ea00933600ed81b302045669d94a61897fbeb822bb61ca68b"
  },
  {
    "sourceId": "kingtony-manual-021",
    "mpn": "33672-160",
    "rowSha256": "34c5f3f1bc0509f2512b9f6351ac892443325f23aaed32f3f547897cec699b45",
    "sourceSha256": "ceff0bd89558da9ea00933600ed81b302045669d94a61897fbeb822bb61ca68b"
  },
  {
    "sourceId": "kingtony-manual-023",
    "mpn": "33681-100",
    "rowSha256": "6ca8c08ee0e1f10fb830b0382e047a137ae7908c902729af49c66e063cb464f7",
    "sourceSha256": "72dc53c6c0fe29386245914bcddf92c25e1a6274bde1a400b587f35adec6fda9"
  },
  {
    "sourceId": "kingtony-manual-023",
    "mpn": "33681-101",
    "rowSha256": "6308db2841cc3d3c57a75ed1fdbb980211616721d7e6025a7a4bc097d1d456bd",
    "sourceSha256": "72dc53c6c0fe29386245914bcddf92c25e1a6274bde1a400b587f35adec6fda9"
  },
  {
    "sourceId": "kingtony-manual-024",
    "mpn": "33811-150",
    "rowSha256": "382b9647ec7eab6e8bb793e4dfe08fa1ff601a694ea247f8b61187167fe579a0",
    "sourceSha256": "1e764061216bae0c516a4cc60c05069950b004b82b2b2e3d59a2299411dc60f0"
  },
  {
    "sourceId": "kingtony-manual-024",
    "mpn": "33812-150",
    "rowSha256": "ad3bfec741a301aceb9b171a4757a3fc70be61549a2f5a00bae059941debf773",
    "sourceSha256": "1e764061216bae0c516a4cc60c05069950b004b82b2b2e3d59a2299411dc60f0"
  },
  {
    "sourceId": "kingtony-manual-026",
    "mpn": "33831-180",
    "rowSha256": "0d764cec72e6556e7dbb3149ec7e28729cb349a765f0916127514ac25d951daf",
    "sourceSha256": "ab3c4891f2d46ce7ea72c162cb9b58e66dc756c010476d318ba642739768a225"
  },
  {
    "sourceId": "kingtony-manual-026",
    "mpn": "33832-180",
    "rowSha256": "3ba2629ad1978644c84038516b184d550ea0276e5b260628875929e1d3dd3838",
    "sourceSha256": "ab3c4891f2d46ce7ea72c162cb9b58e66dc756c010476d318ba642739768a225"
  },
  {
    "sourceId": "kingtony-manual-028",
    "mpn": "33841-180",
    "rowSha256": "bc902af693595f2e373134d7610ad41f3280ce2821de4775a2bb043120ab27c1",
    "sourceSha256": "d31707daa4124c1a9fb306c60859b4984af38190027cc6ccc9e1bef05653fa61"
  },
  {
    "sourceId": "kingtony-manual-028",
    "mpn": "33842-180",
    "rowSha256": "b809da104fa12e30e8d39f6b08fe29926a7645d2d4126053be01da714ad37752",
    "sourceSha256": "d31707daa4124c1a9fb306c60859b4984af38190027cc6ccc9e1bef05653fa61"
  },
  {
    "sourceId": "kingtony-manual-030",
    "mpn": "33851-120",
    "rowSha256": "9608eb547bdcaa926db9f716c68c37ace76e3787ca03c7815e32b458a19becdd",
    "sourceSha256": "0646138dc71e6ea6b0123977cc5767291319ed7394594bd08e54afe5b30ae029"
  },
  {
    "sourceId": "kingtony-manual-030",
    "mpn": "33851-121",
    "rowSha256": "e560ed9fa92cc45f4a0d3d1f6ac85fea888ae88073a6d1ac8bdf77c98e4d0f9b",
    "sourceSha256": "0646138dc71e6ea6b0123977cc5767291319ed7394594bd08e54afe5b30ae029"
  },
  {
    "sourceId": "kingtony-manual-030",
    "mpn": "33852-120",
    "rowSha256": "d48073db0b5430d1695e6cc3edaf6905e6bd8a6fdc2110927eccea5314dd0165",
    "sourceSha256": "0646138dc71e6ea6b0123977cc5767291319ed7394594bd08e54afe5b30ae029"
  },
  {
    "sourceId": "kingtony-manual-030",
    "mpn": "33852-121",
    "rowSha256": "2028f296fbc26e34870a3abc2f4e7211e00d960c8c0bfb2ec469e85ce04cff50",
    "sourceSha256": "0646138dc71e6ea6b0123977cc5767291319ed7394594bd08e54afe5b30ae029"
  },
  {
    "sourceId": "kingtony-manual-031",
    "mpn": "33851-250",
    "rowSha256": "af031f51a131ce80789539525cbc4d1fb7cb39f011a753cff2a1c3c2628f7f5c",
    "sourceSha256": "c505fe35d495fd11baf2743c200a00c79dab1e26b444f8689a05abd46dde7bce"
  },
  {
    "sourceId": "kingtony-manual-031",
    "mpn": "33852-250",
    "rowSha256": "a784248b395605dd171a400cb5945db18a8660c4faa0ef0a6a005cee13ba30d1",
    "sourceSha256": "c505fe35d495fd11baf2743c200a00c79dab1e26b444f8689a05abd46dde7bce"
  },
  {
    "sourceId": "kingtony-manual-033",
    "mpn": "33861-200",
    "rowSha256": "5e996120d0229013fd11f9a31efb69697e130631394b228f0cf839124a249114",
    "sourceSha256": "6f5e5b7ebcb33b516031e748f6c0a3aa4aba88ea91d0352e247aac06a6a5bbaa"
  },
  {
    "sourceId": "kingtony-manual-033",
    "mpn": "33862-200",
    "rowSha256": "5be0ae1eb9e280855372871c8c7ddd0a12984075dfd5533703393a34a144326e",
    "sourceSha256": "6f5e5b7ebcb33b516031e748f6c0a3aa4aba88ea91d0352e247aac06a6a5bbaa"
  },
  {
    "sourceId": "kingtony-manual-035",
    "mpn": "33871-160",
    "rowSha256": "4a80e1e4e7995a118f3db4ece5c341799d36ebfcce950b4ed6f2dcc3d1f411e0",
    "sourceSha256": "431d0fd686660deee28e6087fa5ab759187fbf23b8d4ae59dea4d75b7dde0156"
  },
  {
    "sourceId": "kingtony-manual-035",
    "mpn": "33872-160",
    "rowSha256": "81a34d72fbb1f7dff7bdf5c6b7d67d27bff83cc50f1b44aa2dd293e1cc8650d5",
    "sourceSha256": "431d0fd686660deee28e6087fa5ab759187fbf23b8d4ae59dea4d75b7dde0156"
  },
  {
    "sourceId": "kingtony-manual-037",
    "mpn": "33911-250",
    "rowSha256": "09e38bce9d1ad644d55c3ac1e334e3fd407c24d8232c0c5765536c31a46c27ed",
    "sourceSha256": "da817be24c9f37ff5505a6eeafd2c4acbcad2b67d2a9991a67e3437470419cd6"
  },
  {
    "sourceId": "kingtony-manual-037",
    "mpn": "33912-250",
    "rowSha256": "e2977262921f669e03481406f4ba6906600e0648570864c20fccbedb03fb9ab6",
    "sourceSha256": "da817be24c9f37ff5505a6eeafd2c4acbcad2b67d2a9991a67e3437470419cd6"
  },
  {
    "sourceId": "kingtony-manual-037",
    "mpn": "33921-300",
    "rowSha256": "1cabaa69103a0c75a949b93033e72c93536089f55a5a41af87f9b363bbe5b256",
    "sourceSha256": "da817be24c9f37ff5505a6eeafd2c4acbcad2b67d2a9991a67e3437470419cd6"
  },
  {
    "sourceId": "kingtony-manual-037",
    "mpn": "33922-300",
    "rowSha256": "dcf4610c2e2829c86e500869497c7f37dfe900b0e4a8ceeab13658672aefaf4b",
    "sourceSha256": "da817be24c9f37ff5505a6eeafd2c4acbcad2b67d2a9991a67e3437470419cd6"
  },
  {
    "sourceId": "far-kj60-manual",
    "mpn": "KJ60",
    "rowSha256": "28f9770d67be9cddbe51472d948da3e4fc5f62d3caf6f274b178f9a72fe3e836",
    "sourceSha256": "27472efae97e555344f5f025c6dfe2364b82074dd983b89296c2f49ea9d01ea5"
  },
  {
    "sourceId": "gesipa-taurus2-page",
    "mpn": "1457771",
    "rowSha256": "8ebf99f4f395e53be9415f44c0385d87877fcb732ace496947cc0fcde328c3e9",
    "sourceSha256": "36edb468a2f925a8c4411f602ede7417d3da49c2dc0b593e40a886d586220a97"
  },
  {
    "sourceId": "mirka-pros680cv-page",
    "mpn": "MRP-680CV",
    "rowSha256": "eb928eb9059f79ce1ce309f883caf8486d368b8c66fc1f6521fa79e3588acc38",
    "sourceSha256": "c9c1308e095f80ce56270f302310e69d7e7d785e7394791da1896d4e67c5273d"
  },
  {
    "sourceId": "hpt-n3804a5",
    "mpn": "N3804A5",
    "rowSha256": "87ab3c9977a576b0d7d88b4b211d320a3ff1214010d70c0e9cc378f4f4e42b3a",
    "sourceSha256": "0125ec9ad128a7e861de2371ddbb0549fbe26be83e6f882bd69a3bde239539a2"
  },
  {
    "sourceId": "hpt-nv90ag-s",
    "mpn": "NV90AG(S)",
    "rowSha256": "9957e5b6234e9452540c9f687b2a942dc8acbfa484667d71b6cab7e8c5fdb632",
    "sourceSha256": "da1579cacf66f787d2f2e18a66e8387d820bd3c40a397a62431bb09e0e1d9e09"
  },
  {
    "sourceId": "hpt-nr83a5-aa5",
    "mpn": "NR83A5",
    "rowSha256": "bfa2ecbcca2e883a8d7191070db3a48836b9c9cece29d0b3d184fff456d6c5e8",
    "sourceSha256": "2f699a5450a4ddf42d367d31e84af126bc6c59b424df4d608c433e665cf4ef0d"
  },
  {
    "sourceId": "hpt-nr83a5-aa5",
    "mpn": "NR83A5(S)",
    "rowSha256": "c8e84f5edbfa0af501e4a0851abfa4f3512f9bee7d78ac40ee1b17ea84f2c497",
    "sourceSha256": "2f699a5450a4ddf42d367d31e84af126bc6c59b424df4d608c433e665cf4ef0d"
  },
  {
    "sourceId": "hpt-nr83a5-aa5",
    "mpn": "NR83AA5",
    "rowSha256": "708faf944743e8471261bf5681b03f999348d95354192a96b421fa737b023e79",
    "sourceSha256": "2f699a5450a4ddf42d367d31e84af126bc6c59b424df4d608c433e665cf4ef0d"
  },
  {
    "sourceId": "hpt-nv83a5",
    "mpn": "NV83A5",
    "rowSha256": "5be69b1c434e50c4473f6b290dde7624b5bf9a97b7b5674aa7c0774792e54185",
    "sourceSha256": "3f151b97a0d2f25adb914b72dd2b4c315fa38600a086d39e49e6caeef1ee972e"
  },
  {
    "sourceId": "hpt-nt65m2-s",
    "mpn": "NT65M2(S)",
    "rowSha256": "3db0e3a6832b2bdc33106fc87eaf41d57fd8cc639aa99c00b5b517bb9eba18e9",
    "sourceSha256": "cf6b467238aab8c491d09fd495d5245e181a966f7c72d77ed26890edc7e79938"
  },
  {
    "sourceId": "ks-product-515-5505",
    "mpn": "515.5505",
    "rowSha256": "e66d9b5ca02db3a57ec38cb0fe444bd035c66dea5a59faaca1403c48dfe6aa93",
    "sourceSha256": "158ab273ef99cdc95774a04cc199030c99a749faa28bc4e1c3c6106171c84d54"
  },
  {
    "sourceId": "ks-product-515-5510",
    "mpn": "515.5510",
    "rowSha256": "c82d59c05325b3328e7fa37d79301062ac1cbede5347259b60f6e922da940d8c",
    "sourceSha256": "29d2f70b59946aafe088da2daa520f8910216c88772ac266ed5258864e6bfa89"
  },
  {
    "sourceId": "ks-product-515-5515",
    "mpn": "515.5515",
    "rowSha256": "0067f674532906fa308dc6b711d733983b415c82b0865bdc2f7a30f9253350cb",
    "sourceSha256": "a22bac4a7dba7f7a108792c97af0cd54f64a255d7a1570d0453808aba80a65aa"
  },
  {
    "sourceId": "ks-product-515-3825",
    "mpn": "515.3825",
    "rowSha256": "517c0289325c4dc0d09a4af8db90f238bce87d24f1a54abdf4bab523aee41551",
    "sourceSha256": "0f8147320298bdd465b66931b32dfe1ca0eea3fd87e4b0b5896840ebc28b45f7"
  },
  {
    "sourceId": "ks-product-515-1185",
    "mpn": "515.1185",
    "rowSha256": "50833fb5428069d300f40ce07952dd4c3d04b27fe9507af895c67d86cf48e79c",
    "sourceSha256": "a05f2ca2b645c85324f793f95e3cdb02a2b3622c591961f5ca7be3d1016af1ec"
  },
  {
    "sourceId": "ks-product-515-5520",
    "mpn": "515.5520",
    "rowSha256": "72524a55697dcd06fcbc52bf185ccefb1ee1249e3d5b1bf22c1b5aae0f1432c2",
    "sourceSha256": "8092c007b47de9e02626d01b9cd44bfba0b93f4d790c68759e825ec9ee1a4944"
  },
  {
    "sourceId": "ks-product-515-5435",
    "mpn": "515.5435",
    "rowSha256": "490e729d7df5869955ea09ffeca6d8e1a7068b41282f9034516bb9a503d1e338",
    "sourceSha256": "dad7d365e146ebb2b41d2cfb8cf0a8f3869352d1f8377818dd71a6ac02266d5d"
  },
  {
    "sourceId": "ks-product-515-5525",
    "mpn": "515.5525",
    "rowSha256": "e134ea2f28b9d054f58b5d084f06d6353cc0706cb1d626a8d874c35305555f0d",
    "sourceSha256": "de0258988ebd2ede277b6dbf0e166e579c280cde7fce3d503d034abee927b414"
  },
  {
    "sourceId": "ks-product-515-5465",
    "mpn": "515.5465",
    "rowSha256": "0ff1562e062723f455d0839a68b18d6be95b88707e33018e833226af9792efc7",
    "sourceSha256": "0474fe0541e2c6d3a204bd1f282e8badee0c1e18f815b6f39683134ace2ddd24"
  },
  {
    "sourceId": "ks-product-515-3035",
    "mpn": "515.3035",
    "rowSha256": "beb277f7f97e9c296723ae42c7f852e1b58ff8aa386e265a496c1176f3636e14",
    "sourceSha256": "e8e99adf516a2fa2df21d2c9e8b0f5729278a3b3d1872c8733b111d2ad2a4d34"
  },
  {
    "sourceId": "ks-product-515-3198",
    "mpn": "515.3198",
    "rowSha256": "1047b54723f56815b82db59df5b17d7696255eb298b40b3da8904b785d9f067a",
    "sourceSha256": "b01792013f4eb9639ba0a55ce3ea8b09f7cffdfbdaaa446bcaf86e2811399de0"
  },
  {
    "sourceId": "ks-product-515-5530",
    "mpn": "515.5530",
    "rowSha256": "65f5f367698ae654c702e778880e271f26498ff6b46b835cb91c22584731cb83",
    "sourceSha256": "b8b828dfb4a4d4e1ced83d786657b8ab7f6dc1d73dec51933bc9ec75879c3961"
  },
  {
    "sourceId": "ks-product-515-5410",
    "mpn": "515.5410",
    "rowSha256": "52eed6cb22a016fe372236c49694d1afa29833b982022c81ea128e28097bf8ed",
    "sourceSha256": "dbae33b4ceeb4880837a436b5fce4d25bdbf2ed237b2602bcae9dbbe15ff1484"
  },
  {
    "sourceId": "ks-product-515-5415",
    "mpn": "515.5415",
    "rowSha256": "e2b88dbeaca148bed54afd2308f9e5f98f09c586b26d23b76ee107f0a6d7e5ce",
    "sourceSha256": "97435f1b92d8106e51c1d5d3ca8bf079825b720138098cea4d1fa5434783f36a"
  },
  {
    "sourceId": "ks-product-515-5535",
    "mpn": "515.5535",
    "rowSha256": "0f20c62358f0215c6d9dec7edf34a9b8d7ee3415f8a16421d446630abf847213",
    "sourceSha256": "6cb8a892661589f8cecdcf4c798907b6e82a9e7b035182fd06ac5a72029dfa7d"
  },
  {
    "sourceId": "ks-product-515-5540",
    "mpn": "515.5540",
    "rowSha256": "c639d65b69e749a0b193ece19308ff2144a99141abecc419c6ee2460b4ef93fe",
    "sourceSha256": "747cd954e3586276a415c05fd26293baec61420dcdc77192bfefb3891d3dfe31"
  },
  {
    "sourceId": "ks-product-515-5420",
    "mpn": "515.5420",
    "rowSha256": "54242aceaae10e43072bf4703f840d977731d1a008ab2f6e3c39e95200156c30",
    "sourceSha256": "d5dcd82d966fbdb4482062ea79155f4258e0dd3c7967a2f183eff9463894c376"
  },
  {
    "sourceId": "ks-product-515-5550",
    "mpn": "515.5550",
    "rowSha256": "c8265eaa7d0e6dfb477c38e9a6ef2aa8da0ee4ab7611d0e238b2115d40b0efa9",
    "sourceSha256": "29f3ae19b9cdfc28fb5249da81d2ac4a9e5574d34befff18295aa2f5811f2fe1"
  },
  {
    "sourceId": "ks-product-515-3196",
    "mpn": "515.3196",
    "rowSha256": "6059d28787242b16a73185012da0d86b2fe4f7c0edbd6ffe1a96dd165f3cc0f3",
    "sourceSha256": "408aba241a7966429ad6235afb00175bf41705a3e210c34869826845d85bc73e"
  },
  {
    "sourceId": "ks-product-515-3179",
    "mpn": "515.3179",
    "rowSha256": "a129f9331c417559e68675def8e1ae17ba0788cf7d04cc884cc1a5f1869d1c0f",
    "sourceSha256": "6c678aa32e76d13f3e5a8b066de448d6675a7b61427ae99438aeb2e50abc6d81"
  },
  {
    "sourceId": "ks-product-515-5585",
    "mpn": "515.5585",
    "rowSha256": "97f5b6a0bc081ec8d9206c5b57dea52b74c4201cf6c25e5fe2a006502ec11875",
    "sourceSha256": "68094fe929607807feffdf15fcdb598aeab1ac9ed860635acfbfe304fdbc9b84"
  },
  {
    "sourceId": "ks-product-515-5570",
    "mpn": "515.5570",
    "rowSha256": "b5c6effe05bcd4c7a4b345424f8c69cce20e545aea8ac09ff288dcc84ad02bc6",
    "sourceSha256": "2531c38c87438aa2dd623908a72d4284d4dc42b1e96adaf7b1aff58233bd13d2"
  },
  {
    "sourceId": "ks-product-515-5580",
    "mpn": "515.5580",
    "rowSha256": "fe6b7cc7d84b5d942e52116d6a683351e54d90a6deeaa54c640920e2bbdded13",
    "sourceSha256": "f925dd86cb72cb8d2dda91a8583660c21e627f621795514092e10ce7ccda982f"
  },
  {
    "sourceId": "ks-product-515-3549",
    "mpn": "515.3549",
    "rowSha256": "b98eec13a67ee5054b3fa2c9ec7be9767c50a909fc003a621aad75652474e67c",
    "sourceSha256": "e2a324da6b0ab9f63e5c15530c10fc29f11cc4ff3656ace991b859adec5c2a64"
  },
  {
    "sourceId": "ks-product-515-3061",
    "mpn": "515.3061",
    "rowSha256": "72f0ad335ce8e60ca87f935004f3c30dcec44c557e9e5fd3b34bbd67031202c5",
    "sourceSha256": "6177d1423b157e9306dbdabbf790512e6a2ec8a161fb8fef7226a00de7bd1e92"
  },
  {
    "sourceId": "ks-product-515-3066",
    "mpn": "515.3066",
    "rowSha256": "7262c3bbf938b2953797657bfe7717e5194ac9f9df46eb7645c1355a3ee00aec",
    "sourceSha256": "07e3e59e2c6eef5c902c83b165dc2888d463c316440591c10bb1e6445eadf8be"
  },
  {
    "sourceId": "ks-product-515-5111",
    "mpn": "515.5111",
    "rowSha256": "b61358e8f18eba324d3765ad5e9eb1ce76824b3e105b3dbb96ad58ae833ff83c",
    "sourceSha256": "124c0e52441be8c933585bb0149d2d7c5c9ed71eed90a92c7f4947b501212a85"
  },
  {
    "sourceId": "ks-product-515-5431",
    "mpn": "515.5431",
    "rowSha256": "a0c5e0c898d4da5a7665b9c4e56a687e6e0346bf9a64c51026d4fd947e754060",
    "sourceSha256": "0238b2f29aca02efd99248166be76da531c381e9e3cf0ce371e6a1a57f95a874"
  },
  {
    "sourceId": "ks-product-515-5590",
    "mpn": "515.5590",
    "rowSha256": "e1383f28811c55820bbaa45453adfbfc48ad77d946030ae59e0f2716bf1c9227",
    "sourceSha256": "168d45d3e602430c03bc0ff528c379022c3a138a700a66b98b280511d805238a"
  },
  {
    "sourceId": "ks-product-515-5455",
    "mpn": "515.5455",
    "rowSha256": "2bd612cd9eee110060b8031a8ed1ec4cf20f334fd7a62b31e589f138f10b03cd",
    "sourceSha256": "1cdd70c713a1ec088054d9642eb3d702a7350e797cef04556e6dd5642ed88f16"
  },
  {
    "sourceId": "ks-product-515-5121",
    "mpn": "515.5121",
    "rowSha256": "820b864c775c3913d7076e890cd54158dcfddfc10544d203d38a688b3969ba45",
    "sourceSha256": "33c3bb3b0732153f201e253b50935bbd473e05d5d0233d25de2b99b780d01e1f"
  },
  {
    "sourceId": "ks-product-515-3063",
    "mpn": "515.3063",
    "rowSha256": "c6e61e3faaf7fe70348596bdfb910c9a0f334ce1631febc3fa4da92e1ca3181d",
    "sourceSha256": "8297e84b558fc22b708f6b1c80cd29fa58c2565344b2f44f2a898dc64aa7e7ae"
  },
  {
    "sourceId": "ks-product-515-3881",
    "mpn": "515.3881",
    "rowSha256": "18ae081c1e54e2c31a12015de3eaf57d0160a4c8fb5811e711c5037a85dc97e3",
    "sourceSha256": "6b74dc402c096ff8547204a8ebd05bf17f0aad83f5ba7ac6b1cdcb6f89fe5a78"
  },
  {
    "sourceId": "ks-product-515-3070",
    "mpn": "515.3070",
    "rowSha256": "36de24c2c4b803d255a3e41f450065c83adfe99ba03bc9ec998fa22081940510",
    "sourceSha256": "a959b9cf46a9179dbf9263a5532f617f2304d6fc2cde40b28de721aa67d36eaa"
  },
  {
    "sourceId": "ks-product-515-3980",
    "mpn": "515.3980",
    "rowSha256": "b615aa9115698d11df09aa8ace1872a6c20a173cd902e105c3dc30017c9533a7",
    "sourceSha256": "eb1253a91e5b0f052743128f592543d3267c6432b207bb01eff17ea3583a42e5"
  },
  {
    "sourceId": "ks-product-515-5555",
    "mpn": "515.5555",
    "rowSha256": "34a675ab95cca55dcbdc739ea3861c1af7d857cdab1772ad692f53f228697111",
    "sourceSha256": "2f1f6c66db5e2ff5f1d906d3591a711f48f1538676770ea54a76244fb56c74aa"
  },
  {
    "sourceId": "ks-product-515-5560",
    "mpn": "515.5560",
    "rowSha256": "63e5b7ee12eb84b42d2498ee4c190f25ddbee70643d089f0630fdd89675f9e3d",
    "sourceSha256": "df38cac4ca86b81392dd8de7cafc6ae5ee5fc7090e20f494ba6ab3af5258e440"
  },
  {
    "sourceId": "ks-product-515-5440",
    "mpn": "515.5440",
    "rowSha256": "840218d2ce91dcbd6d0286507bb08f49d65e704908c60c4e2db78a05d40ce9b0",
    "sourceSha256": "9a066821d3932b734a258c001dc7755147d0275d6603d142b892c11667314f4c"
  },
  {
    "sourceId": "ks-product-515-5475",
    "mpn": "515.5475",
    "rowSha256": "c0063d84b955dd197aeb89fc45371e2fd1fa607918319b441c4546a8718ede2a",
    "sourceSha256": "5008f309afc9e9697d01eb5043aab844900ea520cf0c1753e0f91752118c95b4"
  },
  {
    "sourceId": "ks-product-515-3835",
    "mpn": "515.3835",
    "rowSha256": "3f42dd2a6e4eab5b7f81b52107781186224101df144803e7a17594130b85f4e4",
    "sourceSha256": "a0580ec3346f8574a76972caf439868741b9522c621fec711874d14e69c7b73e"
  },
  {
    "sourceId": "ks-product-515-1470",
    "mpn": "515.1470",
    "rowSha256": "4dcd7bfc267a5affe5a28ead6a00b9ed6d1bf66dc6dc7d28002b05c9aa4ace0c",
    "sourceSha256": "1121763a23b7a802ebbe2448c727282e401a7025d5e6c045216468d33367c6ec"
  },
  {
    "sourceId": "ks-product-515-3830",
    "mpn": "515.3830",
    "rowSha256": "86dfa7398beb48d794369a68f63f8480d5d78aea820a03dfe3691827cb866c36",
    "sourceSha256": "1d9b44e74287dd477bc1553dba1e055a1defb07c5d9cea26cc37241c2796cd9c"
  },
  {
    "sourceId": "ks-product-515-1270",
    "mpn": "515.1270",
    "rowSha256": "fc1a74b9f462b6bb633afcc8e2c422f04e599e18983a68950bddd3bf4a7e433f",
    "sourceSha256": "7f333531b8d939eceab611ca7803a0637e1949d42129fbf4bab75f3af549bb3b"
  },
  {
    "sourceId": "ks-product-515-1625",
    "mpn": "515.1625",
    "rowSha256": "f6c26ca1e01ecd9f6331465066b139eef8a16c665d3ad91436179cfb4a05be35",
    "sourceSha256": "93fe13cba51a384251cf51645a76e3cef3fb4ace0f785fe495d238460da99e4c"
  },
  {
    "sourceId": "ks-product-515-3855",
    "mpn": "515.3855",
    "rowSha256": "91edcec0d58ac55330d1da2aac503c92d78e4c9adaf81a242540c06cd4c7172e",
    "sourceSha256": "1f57ba849dc3ed2fcc46a5cbd48954ea753fe877e5cfba83f04fa6a5896b4a6c"
  },
  {
    "sourceId": "ks-product-515-1210",
    "mpn": "515.1210",
    "rowSha256": "c4043ebbf0e5b2ba7fd032a7b7233908c8d8aa8dcc06b3b3dbf4a95c3731ef7a",
    "sourceSha256": "c6ebbd9cf43a92583b685cc79a0f4004d9af04472f98c0f205517b837d9c72c6"
  },
  {
    "sourceId": "ks-product-515-3785",
    "mpn": "515.3785",
    "rowSha256": "d69a93aaafc98c1023e4f5ea1bab0b9bfbbc1736cc3cbbc7ff10060c8df6d265",
    "sourceSha256": "6a381b723a29a6cbbe087fdc0e436c8470e0b6b2c11c484af1d6f9e229168890"
  },
  {
    "sourceId": "ks-product-515-3250",
    "mpn": "515.3250",
    "rowSha256": "ae353fe61c3678acd0fc33396d7653d4428faca4d21cfe018767b49e424168cd",
    "sourceSha256": "66744613055b802dbb30d8107bd44f296c3e7d2660c9ec198f73aac3ac3c6c58"
  },
  {
    "sourceId": "ks-product-515-3260",
    "mpn": "515.3260",
    "rowSha256": "e0b8f0ce4df5c42401dff7f73b13ca0b2448a207e7479c26dbf00b05d8b49079",
    "sourceSha256": "73a91a72bad7b972bac30fc2bdfaa3fe34c94c7a1ace082fce8d70372f05faf8"
  },
  {
    "sourceId": "ks-product-515-3270",
    "mpn": "515.3270",
    "rowSha256": "1ddc0af2fa6208324c353d9fe3bbb16b657da172c88240c979756224821b4ebc",
    "sourceSha256": "63f5b62eb227178f48f9a881b53fd7b8742f9f86c056ed0c5da69cd269c7fa8e"
  },
  {
    "sourceId": "ks-product-515-3280",
    "mpn": "515.3280",
    "rowSha256": "e9cd5eb7f154e574cb76ec9114810157f712416e95235a87fa8854e9b8a576ec",
    "sourceSha256": "9f5bdd052853082ddcc4fe0e256625895603e760d3df428117ef12d33a2ccd43"
  },
  {
    "sourceId": "ks-product-515-1200",
    "mpn": "515.1200",
    "rowSha256": "48ff1ab4d799df74a667db47123c81f52f2999d434f959054d9432c39554125a",
    "sourceSha256": "f6477319f6283f1d631601f82cb8e7bab411762fc8f7c6187c76db8226d4a5ef"
  },
  {
    "sourceId": "ks-product-515-1315",
    "mpn": "515.1315",
    "rowSha256": "7b33f5a32e0988fd812ba6e8506d1c570ad1dedd3f03eb2975da2a42ba00b21d",
    "sourceSha256": "c09b41efc980d3205f91bde56f6f3066d55c835d1df6c31928c8d14c782ce3b0"
  },
  {
    "sourceId": "ks-product-515-3400",
    "mpn": "515.3400",
    "rowSha256": "98bb416274d09c813ffa4a1c612bd92275c2f835c0664f0bb814343acbaddab1",
    "sourceSha256": "2fbabd5b173fd51e949bfdac43671f8171e79415046fedb08c7eff8133f152c3"
  },
  {
    "sourceId": "ks-product-512-0002",
    "mpn": "512.0002",
    "rowSha256": "c9dffa2624d79d211d2a6da2515656d38dec07df299b3ea6728cb2d11348a3a0",
    "sourceSha256": "c71b817004631315d17e9b8325e4f36bdcef2f531402a8fb68867d1b0753943d"
  },
  {
    "sourceId": "ks-product-512-3400",
    "mpn": "512.3400",
    "rowSha256": "294e04f019d2c589d0ed910d57074b76bff0e0e8031c8da6dafb362c224f41d1",
    "sourceSha256": "6718acf4f878263c619ab8ef8eba5654fa1e395005c53f87e037da37a3fc4347"
  },
  {
    "sourceId": "ks-product-512-3405",
    "mpn": "512.3405",
    "rowSha256": "5088220e40d0093c6f0422e2a017fb17225a835620bb6d942534808502d82faa",
    "sourceSha256": "9d68968170986e4ca83c86104bf88ee546f8cd621a36cfb63b62a2383de0c17f"
  },
  {
    "sourceId": "ks-product-512-1015",
    "mpn": "512.1015",
    "rowSha256": "fdc16f192d7276f3f1f57e9a3fa2ca2d5b55918af797ecf8641bd75078cfd563",
    "sourceSha256": "74572f096885950eea40cb77e39396d4e2b6c5b119b2098f6d14dd502d2d8484"
  },
  {
    "sourceId": "ks-product-512-1020",
    "mpn": "512.1020",
    "rowSha256": "959be87442e35a319187e3fb364aa837a7e642572951f63c4519063ae4e9c783",
    "sourceSha256": "bdbc29ef37fb7afcbe702bd603deaae592de32731ddbdf3cb744b8876dda6474"
  },
  {
    "sourceId": "ks-product-515-3102",
    "mpn": "515.3102",
    "rowSha256": "ee7e642f64e95921177e0027ef5d95d42bd1c2f465ba83e050a5908036fbda57",
    "sourceSha256": "c309c32be8f8f9f29f24a7977b86d311b5cc62cba78db4f039cf47d94aa1f629"
  },
  {
    "sourceId": "ks-product-515-3101",
    "mpn": "515.3101",
    "rowSha256": "952e26c8198830790e77cafbcd84becd82e3019e0c8b913dd193f8b46894ed42",
    "sourceSha256": "fc20b2fcbd56507bcf6cb20adabe48f934019a6cca72c14d55417ab1a2996a5c"
  },
  {
    "sourceId": "ks-product-515-1950",
    "mpn": "515.1950",
    "rowSha256": "82c5fc260d559513aff6703ab33ca1f47f14d00b6909b84918b0712311720592",
    "sourceSha256": "9575f4db401709e17b43c9a6bd4393e1d88bb1ee8f48caf8e5dc385cc1ca4063"
  },
  {
    "sourceId": "ks-product-515-1960",
    "mpn": "515.1960",
    "rowSha256": "0225c0975f7af9bc5ab87ce4ac82f2b896265523ff3b3c0b66993a7421b8b262",
    "sourceSha256": "ae76b183dc0c0a635ea85614d8c25513e1762802777bc3aeb71e7396133a1256"
  },
  {
    "sourceId": "ks-product-515-1970",
    "mpn": "515.1970",
    "rowSha256": "f09a39209a14961f63bcc7fd00b36e777e1a90676e4c9027bcd721a57a8050cc",
    "sourceSha256": "4c1496462cd1db6b4512c725ecf7b2afc45aba72692dd249694fb87c0794c4cf"
  },
  {
    "sourceId": "ks-product-515-1920",
    "mpn": "515.1920",
    "rowSha256": "f8bf0eba8bd099372eed7f4631eba8317ce38bc7911e2ef54a6302508ba1965f",
    "sourceSha256": "e6022585cebd9e932c0fe74bc21ce22b24ab9953cfbbabf0ea5b28d7c7f47455"
  },
  {
    "sourceId": "ks-product-515-5065",
    "mpn": "515.5065",
    "rowSha256": "cd4da417e72df94ace93192abff7ef9170b5968d6075f3163e977c3161764963",
    "sourceSha256": "1d804621eaf26714c61ebb540a041a5187870c56da7cefc948fd529badc23665"
  },
  {
    "sourceId": "ks-product-515-1980",
    "mpn": "515.1980",
    "rowSha256": "de6b8fec4b0bc46dea4ffd17b24ead35b8f2ffa0abaadd01521740e91e8ad1cf",
    "sourceSha256": "169129d4d1c20a47dde38021943dfc1f3e909ed6dce623971b6707e7a115b6dd"
  },
  {
    "sourceId": "ks-product-515-5595",
    "mpn": "515.5595",
    "rowSha256": "274ee527d1bb76abb0a35bded8918e8fe9ad13f445b639af1c4253a15b9de9e6",
    "sourceSha256": "faaacab9e6751430fcbd50d30dc0cc79c15cb965147665e325c0d6e6b05eeeb6"
  },
  {
    "sourceId": "ks-product-515-1975",
    "mpn": "515.1975",
    "rowSha256": "33cc9e69a2e90af797ea4d99c4cb988cbb57b5cbcf93e146e60dcc55e8fba1bd",
    "sourceSha256": "886c00eb202f8c71be78cd065f69f50086bfedd1fcab7c70023104dbfeef7764"
  },
  {
    "sourceId": "ks-product-515-1985",
    "mpn": "515.1985",
    "rowSha256": "ab06aef4cbc0d698c0b41f8815548372b2a9f5676b965c56cfc4cf6a292cc114",
    "sourceSha256": "4a7b5397062284acb647256aaf60161ccb351159f5862aea6204f17de32b4b95"
  },
  {
    "sourceId": "ks-product-515-1908",
    "mpn": "515.1908",
    "rowSha256": "8fca0a760f8fcf3c44d9ebd935c8802691d180ab23c499492ec99b265c6b1e7b",
    "sourceSha256": "8858d0976ff4dffcc1fecf823e772ef819854a4d8d6b6cdb282c59339835801c"
  },
  {
    "sourceId": "ks-product-515-1907",
    "mpn": "515.1907",
    "rowSha256": "0aed95105821459a5a6debbab0b5ea8745ca139a71b15c826e740d25ad6fad36",
    "sourceSha256": "a6041d446194690455faf2c7558af5722daf6fd1c40e2c1815a2e41fcd7dd128"
  },
  {
    "sourceId": "ks-product-515-1901",
    "mpn": "515.1901",
    "rowSha256": "01b5308c78ba34d3defa2ed56385ee484c8b02de6c35d5afedbe19c6e3a81f62",
    "sourceSha256": "cfab5ab9789b9efebe33546145837b880d9fa8266fa9cafd1708ff3a08b59c6f"
  },
  {
    "sourceId": "ks-product-515-1915",
    "mpn": "515.1915",
    "rowSha256": "de91822fbc2061f43e0c6c569858639f10c2f94d661a523f360adc66a927337a",
    "sourceSha256": "5bc615396ecb0507685772f19a361c388cbe9a83a7610804db90240292b72ad9"
  },
  {
    "sourceId": "ks-product-515-1216",
    "mpn": "515.1216",
    "rowSha256": "7bd76642b9a191089b101e8da4a408c7c9e3ea72bc1965243fb6d8b5ee64eae1",
    "sourceSha256": "d97819ebc97bb7c4335fdacc40304ceb1187dd53158bcbffa7221960f0210cd0"
  },
  {
    "sourceId": "ks-product-515-5090",
    "mpn": "515.5090",
    "rowSha256": "a9fb89c0af8a71a0b5289825a46a55ec8cf1fb5060c02532aa6944131845dc89",
    "sourceSha256": "c2823888f563e4843bad80b4745108d378fc78f042ea328384e072f2f4eaa277"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1447",
    "rowSha256": "aa96cc9b354410d0c949002c0266926145fafaa42c03ba839aa3051c060fc57a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1337A",
    "rowSha256": "4e463e5588e3063ba3fab7bae1ad94a14158055e00463f1f5a3a7e7a811820a1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1437A",
    "rowSha256": "aabf27c4689ba7e6110f6ea001c01eb590ba801017c11623404429499c96b2dc",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1437",
    "rowSha256": "4388d492c6a8fd6c3dd62d3454da2368dc8a432e2c4754a37618adcaad4b9571",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1375-A",
    "rowSha256": "143e2677edeb03bdd0530b51177a153b4c5da8336ca06cf04394468569a56ff1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1475-A",
    "rowSha256": "0a0a38daff1d0024d6aa2c55b4f6488376e40a89c74cdf3bc626d34fbd3556bd",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1480",
    "rowSha256": "dad5f05e4345a2c5a43bf60eb7d5014b6f9e766af06673ee8396b569363ba398",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1482",
    "rowSha256": "9774116f494f7202cbace2ed94e97f8bfb37d2aa821f3f31fa7ab71e60272f1b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1481",
    "rowSha256": "07b648114231b2d3dc29be98f576f7368075604e1970a05e52c840d445c8f29e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1681",
    "rowSha256": "76c2ee90ff1c8b4b63aea94ec500779fbeeb15db7960bcb775644036e3940fc2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1680",
    "rowSha256": "5f10509adcdaedd2866076753179cc1ced4442f659522ce04d5738e391338bc2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1880",
    "rowSha256": "127ceaf62a0148750e5803901ac0f726ea6fd3a22487461d888f448a31642e9d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1398-VG",
    "rowSha256": "464ff7c3beb5aba761fb3fc9db566cdef24f6410e133cb2005646a1c2bd48651",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1498-VG",
    "rowSha256": "0f1442418d33e9306830c768f18e89df124391e8ef71de2b953a6e5c7cc2f6dc",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1491-VG",
    "rowSha256": "ee84819053824e04895d1343305145f7b4374f6bb759486478a3c89958291be3",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1497-VG",
    "rowSha256": "a36114ee7ad30c789f47677e270dd44140f8da8424f4111e84b7a8c9e221bc14",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1388-VG",
    "rowSha256": "c44f9dcacbac4daa68c21f70221a236da508bff30e33aaa658d70ce2b544cdc5",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1485-VG",
    "rowSha256": "0ecb0a16a7da5637f797a150839939f977de6aa9a3f9ab4ea3543b835893d5b5",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1687-VG",
    "rowSha256": "8389afb9a1c250156ae891add45ccdd8725b45e04ffd404d72e6d209387a46df",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1688-VG",
    "rowSha256": "10ba3457648368acf7108552b5320f121d425e7ea8d27fdf52a13699831a96f8",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1485",
    "rowSha256": "7819f11ee7794c768c52a736fd8a205e18dd2084264fa94598ed0a1114a4da97",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1489",
    "rowSha256": "4b2891a7ad6e6e17ea375750588fa6e381d08ad1826afd0bee3fb0e460cbafd7",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1487",
    "rowSha256": "5871cc27985ffcde539342fab55366b1bb4207764611248c2c00dbd651a4c76e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1478",
    "rowSha256": "b244d20bb8a87721800b6cf6960d1c20eacc51c6ac9599b79ec11e43ce6753b9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1369",
    "rowSha256": "e01d5e172613bc19f225506021d0e733712450b54c68d21bbe12b828dba71715",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1479",
    "rowSha256": "0b8f30ecc77f7c43dd1bf2584a2e666f61e56d8251ecb71d49ab190ac6f04179",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1469-T",
    "rowSha256": "e9fcd3aba044c92ed3bb76cbcf852b3ab212492642871da89757c353d99acdd9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1479-T",
    "rowSha256": "005f3ea8a1e4159a89354ee150941359bab9de243a74b9a4055a21a30d3fbe00",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1493-VG-MT",
    "rowSha256": "2d58cb915f58a1529182ee8c3709bb16058a146c522292a339bad236974db156",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1434-MT",
    "rowSha256": "15f1684369b4a7753c95598e62c3b5a694e6f9610f02557a654ce3a586414413",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1454-MT",
    "rowSha256": "77a10ec58ac4761e5e118deb531191275c7d8b1321dc4324b4a60ab88d5db436",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1480-MT",
    "rowSha256": "a99c538bf39ff3059ef13da1be48088f779d47d8a5732e81cc6b57c5f8a10030",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1351",
    "rowSha256": "c12427cad52bea863a54e0229aeadb6465e96eb440202621f44736d36c5d5f75",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1355",
    "rowSha256": "7ad4aefeb2f5cd1abc7372960293279936def422ff9172951d2da942ca13fcec",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1470",
    "rowSha256": "67e479c3bdde51dbc0a0a2436cd137a613c4de14a49a5d5e6e76bda1175f45fb",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1450",
    "rowSha256": "2c07e5619f197cac3f730259edbd64bd25af8de79b320f65352652cac6043bd7",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1450-AT",
    "rowSha256": "87ae18deabb2c0d6d59d2f45795ae015821005555bbff47f55c037d115143a14",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1636",
    "rowSha256": "f42c62221e9d1b6ac610b57ae1e7fbf5eee6b84e3e7e666c354ea7beb9f36915",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1313-VG",
    "rowSha256": "d961ed97b644912148a673bffc1fc41bbfef9a64fa60430575a891c2539896e2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1413-VG",
    "rowSha256": "d1a91294145cbabfca8622c07fdf274021aa829f375021dc1f7ca36ecf8901a1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1396",
    "rowSha256": "c58651027066ae9c206d17f5b2bb6db68416f62bfafeaf545fe8ef89c9433d1f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1221A",
    "rowSha256": "50031e8e7caa04fb466a05a85e7231363cf59653da8c5cba98458534390e14b3",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1221",
    "rowSha256": "b6797b9b28cfb9c132e6c431ff7b79ceaeb5fc2cecc1efd79f2187422de353ee",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1321",
    "rowSha256": "3bc9ddf548dc6ac4cff4efd09ea12e866815a06ecc95961a88060870d78b178a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-851",
    "rowSha256": "d8b680f3a284ad182a9b7f2074b8f7e4aa2c0b2dc2b5339392b71459dac7b232",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1326-P",
    "rowSha256": "14fe98e29c3322a2ef8b3998c11e1da931e78c2875e80e28abef069694ce8c3b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1325-P",
    "rowSha256": "8fa2a9d5c501ee01c7462c0b07fb20de1d3f5888ea9e770ee5542f5a2ee8edf9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1202",
    "rowSha256": "d497398263daa6ec7165650fe43822c208065a6003d3d3a89ad6c9aaf03acd05",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1303-P",
    "rowSha256": "561ca310accfb2c398e6e21df6b9d862139dbcef275ed5e15dd3e95edc85d058",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1303",
    "rowSha256": "71fab8320332cd6a8dc8be9aed56351b36e84841eb606233147ced5839312332",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1634-P2",
    "rowSha256": "ab8b27b0715dbb8323e95ad8f76184627ae15fb8fb24d1632323c9c8ecdaa9a7",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1205",
    "rowSha256": "6c544fc89376c18da77cd52226d34515fb8b573056cca22c9a473481640f6e97",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1307",
    "rowSha256": "6190d1bdaa378a0f0b0f648e0365f2cb01dd4362f5a223da251ebc1365e740c5",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-311-J",
    "rowSha256": "6c2619cf12a70e384b5bbaf7d97dd41e95e9ad24d4e4197bb7a05528a7a4e89c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-20",
    "rowSha256": "76ed9c3c9af926426ec0a39ae399bd3a42e40862b7cdb68bdd11d536ca71a830",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-201",
    "rowSha256": "e9266fe3329fca650fd55e8754193374dd0c5e9e0dc515776502a6ca6c3ee53f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-22",
    "rowSha256": "094e8baa2ac60ba2fd844e2184231bb59386b97f5fdcc20a7946398537260b7f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1624",
    "rowSha256": "e2d290cd6026aad984021ae3104012795a4ab9bed6b5df6bc28cdb84f2d4fb14",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-30",
    "rowSha256": "dbdd1586fbdfb7aab4a1d13e59b6f251ce89dd82caa87dfa07a8f025a635c9f4",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-32",
    "rowSha256": "1f747d1cfa759ae9040f1214bb3bd84e191af23b0afcf03538d7cc111b1faf8b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1635-6",
    "rowSha256": "0dff0047ffc0ae43542a2aed815db1fa50d79c6b1deea31b101142dcafd4d570",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1841-8",
    "rowSha256": "e8478453a6baba3cd9b67d2abe8bab89323cf87fcbfbb618d1dfc681dc8780db",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1845-8",
    "rowSha256": "79122a947d9eb8329c2652d853a731a470271508030d99774c59270a07903f70",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1838-6",
    "rowSha256": "ca3f928b59ec65e313b5ce26a031d7f4afed0ea5830ce9339dcd466c1523275b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1835-P",
    "rowSha256": "ca033d1f54f0b5185f4b8ce3a4923e5e941fb0258be5517a6fa4bc42ffd42534",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-36-P",
    "rowSha256": "faafaee2d0ce777d1df077ce85f0926b3751a00c3f4afdd2cb88bdcd346ce7b5",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1837-P",
    "rowSha256": "f1db1fbc43d59b5c590455a42bee795cfd437d08aac2237a3a1d50558e488d66",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-38-P",
    "rowSha256": "8a2f186f84f22133bdb2773ae5db2503f82841994088a8b6f4de95853dc47ea7",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1840-P",
    "rowSha256": "bdc3c64e306d23d16f0749c11bfcd5076cfae170d3072e31b7d4b5445dc48c18",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-36-6",
    "rowSha256": "044b00d0209afdcb442541496a467ee7e70c8da6a6720680059c1ecf5a2dee5b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-38-6",
    "rowSha256": "0ec701fb36314642d15c2a98437ac92d2a55355cd0a427317215646a84b886dc",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1840-6",
    "rowSha256": "5c8bcfd1fee8be449aac98307df370cb35820e31bb6842527154c41b34dbe62f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-40-8",
    "rowSha256": "9a34e62c2311ea8a874d630e0346c2a97c83d3c5cee32f6d503d48fbbae19390",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-45-8",
    "rowSha256": "22b9f4e3ac578e19643cd75e5376d57debf6253b871a211e2fd3068881ec5af4",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-55-8",
    "rowSha256": "04bad8e2b004e50dfd9f6a5cca72d04a1a43dd4c83d53bd7eeacb2647ce34b43",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2319",
    "rowSha256": "c099578600502a78fdb942e7c2a1d4af7ba9ba2ab8e636d5b48ff4ee928600d1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2419",
    "rowSha256": "d68f64573f06a39af465eacf5d95d5744c5f5af942d38e6be027d77964b26b45",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2223",
    "rowSha256": "0db91d80725cf6c1242e9a72f5f1a127a36566f102294df69f5afb15e7708fd4",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2323",
    "rowSha256": "f2d58b6233993018c05189bdb1fe4ebb3d00a32e244e7378a63b0ee13364bb63",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2224",
    "rowSha256": "4a1625ea8ee06b5e6ffc15ce895bc9c892aa0a2c246016a7d481620c662e7760",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2324",
    "rowSha256": "8e6dac00735196156782d6e794095de5a270c0b915378c43f629eed513c5e71f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2328",
    "rowSha256": "1ba4cf1f58a6f6687056a874a0ece540650bdecdd8e107804c37b718c571e2a0",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2428",
    "rowSha256": "44271e67844add2b0e4ffe3b5fc974f1beba126bc7da4f35fed84bc8564c3004",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2320",
    "rowSha256": "e028a9026999320f9f138574aa889d6bae02f0976371efe8f2dcb43461e474d1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2420",
    "rowSha256": "186372809d836f7acec0fb633627d9910c82cef50983a738ff26b6ab217151ad",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2407",
    "rowSha256": "bd83d1e49f3858591812edc5c2e3b261d0f89dab222472b612df28e8b2be487f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2327",
    "rowSha256": "7ad1b9f0719c97469bb5d8a2e91d88fbc678b675fbb4608c3a67624d67370dc0",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2227",
    "rowSha256": "473f66b9b887003471da4ed59bf74de855a6a528a78e5d5578339cd821da5409",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2206",
    "rowSha256": "946aebf3478c430ffd25bc0ad4c8e124dbe0790444fa69d644b13c6e52687fb4",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2306",
    "rowSha256": "9e1b2853aaa6a3f35f3af8b4edfd1295e4a05534dd2c97e2fd8c876cd66fee07",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2307",
    "rowSha256": "8dd5cfc35dd197746d906a89c62e0ae8bf0da3917f417ab3a0da06c3efec4920",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2207",
    "rowSha256": "0b9100db210847581011f8a05b8653e3106f63ea1ffb913e85614bac8fa8dec0",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2312",
    "rowSha256": "77a04b7cb7b2d7c691406daeb61933d9657ad2f4bc930692f71a557f67d1631f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2412",
    "rowSha256": "ba0a948b2d21fd96b9e53b6375462e952cbea9fb898d144d2dce135e098f35ad",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2317",
    "rowSha256": "0822b0488868710675e8068fd3e54dda4f70325d82097d619330b909bb16527b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2417",
    "rowSha256": "9237b80861fbd80a51e8ef3cce6fffbb353149b4b49ca6ba18a65d9dddd20021",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2418",
    "rowSha256": "8435780ad4a0f0b137f746d855139aae5b3f791058f03ac8910c4f2f5b4df0ba",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2318",
    "rowSha256": "f2e78902e0c82d42088eddf68c3c36762b9cad1e63ba5ec29aa63a1f1c7aee6c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2202",
    "rowSha256": "5c366ce0dc9a21233759430b3481cbcc74b04ce0080e060fb6cfa0ebf7f40f66",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2302",
    "rowSha256": "5c3b9cd556eddc3e934ed3da5e26146df697cfb8b74472f426186c3a482c6763",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2303",
    "rowSha256": "91927ad79091c48c07f6b109f032dbadd61f4506c455d4c09a3bd66898daa666",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2402",
    "rowSha256": "bf507da7d96056e54e3ce0d30942891810709e0f2ad9ed3d6db2e0a3933f9fab",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2316",
    "rowSha256": "917c625aac0b67b3f78942ac60081fc4fe89120af3773cc10588eced8f1ce5dc",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2216",
    "rowSha256": "1a533069341019b8d370328c063b04acaaa3ae5e586202b6610555fa7b73b4ec",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2422",
    "rowSha256": "5e5490d6e2b267939648e0a58f6b31a261f0dd19121fcc63b49b02d9be364131",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2322",
    "rowSha256": "198e43dba55a2f43963440d119f675b2fd49a5907b993fc900c2ed80771a126d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KW-315",
    "rowSha256": "16f1d11fe05a99823989899412b77964cdf958c4991850b6fb9907f994ead613",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KW-215",
    "rowSha256": "c652c74965c8a62be28a9f09612ccc599647b25e2656fca12b9366d83de8c368",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KW-316",
    "rowSha256": "c989f0bf3f9c2ce56646b1b7bf3e07edd78d12b1a6f7e80769b4063d9f8a370e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KW-216",
    "rowSha256": "02828dc99bd6ec614ae1fb2f2043bf543a66e6a05668f5008d57ca004777952f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KW-318",
    "rowSha256": "2d986a50d28f19ce6affbef0cec0b3bf08bbe677ad0c7c716d51a991d7df692c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KW-218",
    "rowSha256": "f32aa68fe0beb9ed8683c21f39acc2c972b06808f4ff137a7d76c487c0cfa370",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KW-350",
    "rowSha256": "ff9365c6ea9fc34320fdd6481e2f80ec9f60a6e5c3f60064c089207af86c3f75",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KW-450",
    "rowSha256": "c1da10dffa5cca58f4e55b2dc8462f5dbcb88b9e52a13eae3ce49bff07481fa9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KW-351",
    "rowSha256": "1acae6e9d52fc6f9e7c0f329ea7e7566739e24b96cbe706c510a075d9b597299",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KW-451",
    "rowSha256": "8a5ff6103afe2c9356a92f199eb863cfffe5ed94587c62218312ac9772a1658e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-2603A",
    "rowSha256": "0e72ae6a628d547af3cd59e8be4ceabd50fc67fd1d9bdf390d9671166063b293",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33011-STWA",
    "rowSha256": "eb58b17c12953b4c5722ecae8a46aa604a5dd63c32d6b1de6bc6929f6ef26b7c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33017-STWA",
    "rowSha256": "b745be53770a70795624daa8d95391ea52fdfec846342457fc3d91aa33fb4e9b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33023-STWA",
    "rowSha256": "1193440d973ae7a4273ccd67d2c808f4169c833ac155bf4d90441b68bc27d50d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34008-STWA",
    "rowSha256": "4e476c22f94b90d86475f32b6011b44ff0ba67514d596e07fb7f0aacdbe6bfd1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34015-STWA",
    "rowSha256": "c3a8e9e9cd416b37891e50c1e2e7bf75cc1497a5698b259fe6828aa83a6ab870",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34021-STWA",
    "rowSha256": "523ff526930f1c7500cbe16794963b4801a26802541f71386fb1afc693656542",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35005-STWA",
    "rowSha256": "4eeec649486cf1cef2e574940fc7fa16d2137f8f13a692260cf9c4b906d44f9d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35008-STWA",
    "rowSha256": "b64e62455278fa6bf378893bd66d5edb35650e572a226ff0ebd8cbacc88f2de5",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35017-STWA",
    "rowSha256": "d89e5d99886c7cba14b3225a74544d0e19f31b34ca6be34fbbf7bfda7133da51",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33011-SLWA",
    "rowSha256": "295744eb2e91b9e98f3e66abddd159ae4a2cd615e34188d27137409c6bc88fde",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33017-SLWA",
    "rowSha256": "9666b8c4e4e9b927c886ddbe952062e3f7ce5df97c79fd0248b437641e1b9f8a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33023-SLWA",
    "rowSha256": "3660517a74e150b052c2754da5a6f4ca860233d07781e25fd450be8212ada970",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34008-SLWA",
    "rowSha256": "92a7548fb4146f5159d2c5099a6ca4107614a7e4a99ebce2cc1ee95d8f0492df",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34015-SLWA",
    "rowSha256": "55693f9bb1cb401d20876e32df6a1269cae9425befd77406a375e4c9e0602632",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34021-SLWA",
    "rowSha256": "92ad8cb91ca4ba3a60f99d74e286ea601b837553a5213cc4b3a8bfa1a9ae1666",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33111-PLWA",
    "rowSha256": "549af4552aa4ed4627f3dab0417d908ba54b3bbd505b824dd1702ca8936458e9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33117-PLWA",
    "rowSha256": "1ace9c22727934ee4b990305de314e7bb84bdbadae78a3ba1149ff18073c0a39",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33123-PLWA",
    "rowSha256": "ca60b94e5c5845a248431a646cb6fd6b29c21f5089e4e033781a99eb6a0a9cb7",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34108-PLWA",
    "rowSha256": "6570aa753eb0ea52d4d6ed32e35972e22936bcabca7d03f70bc7329e58b37cda",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34115-PLWA",
    "rowSha256": "d8c14a01d6aa9062733899ee1904a70f6709e33b500dce0e66936c26b4c9c4b9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34121-PLWA",
    "rowSha256": "20fd0e206c8bd735bce8277b1a7b42ba4c241d3760186185667b620dce915de4",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35105-PLWA",
    "rowSha256": "84fa04aab68d0c4eb738da8d63c5ce647fb327fbf23a5d08d27f28d526c3d651",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35108-PLWA",
    "rowSha256": "0cf3475b511cc539cec4b162dc397529f3d869b244d99aa2ae0eb4e2ec714f22",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35117-PLWA",
    "rowSha256": "4016d7e47adf75ccc9040d7fd3d7f7d88bae8265dfbb0918d72c93e648853731",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33011-STUA",
    "rowSha256": "6d5aac32d5662f7416479d6cf5707d6455117df8a63db7062c90d66dbe3d7340",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33017-STUA",
    "rowSha256": "ba01a2cbc0fe6bc254d5a044afe8dfde834e55ed68da4abc4f8304ce0d3aef28",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33023-STUA",
    "rowSha256": "5c33cbdb5a4c1185e01a965a90fbe22fc444c8a61aabcc1af70cd54aea24ceff",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34008-STUA",
    "rowSha256": "d2b657aa39da29ac48a1824b4405c8400db9a3a7fa7c597bb77603b44719a1d5",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34015-STUA",
    "rowSha256": "ad202b7cf0c00fc3b70dc3281734cc7672bb342a554fac0d1780de9c8b5c960a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34021-STUA",
    "rowSha256": "b10ea44a8450d1c62890c72260e2a0ce3a050c15e4c653de308adbc8b183ad74",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35005-STUA",
    "rowSha256": "c36800a5da53a9b12c86baa9808638d19df7ae0c19784b1e7eb5b14f026d6d30",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35008-STUA",
    "rowSha256": "e55762830eecf108475b22cd4a4b56d365619e8618f60ec714128ac0e7bea168",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35017-STUA",
    "rowSha256": "fddad0c26d4b45ca59856ae9c538bf6beef5bfa629df0b22c39ad2f898aae7df",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33011-SLUA",
    "rowSha256": "9a5da8e554699c0aa6266cfb76388a050ee2da3d83a765661c5d1fdbf455291e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33017-SLUA",
    "rowSha256": "142d34d80d89f06ddd753dc892aaf3274aa7b78f1bf39ba0a538b30ad64fe296",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33023-SLUA",
    "rowSha256": "c121e7391844f95bafa76fede82f6fecf35298dff6477f053effb168fc5007df",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34008-SLUA",
    "rowSha256": "20cf260313eaa2d62ff0274280e0795fc58d6b517c360035ae473ac00e09d1d2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34015-SLUA",
    "rowSha256": "f75e1164604c567a6aea43d5ac17e4b4dd9193e6463be1807e262672083f58e8",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34021-SLUA",
    "rowSha256": "c59198fa5470e884a2727e7e7e5ad5c36e884d11f46aecbc1d0e9cd091a2f5ed",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33105-PLUA",
    "rowSha256": "7fe9680476128a5857067b499597f8438d93b6796f9e1f639463bad5cfc35878",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33111-PLUA",
    "rowSha256": "32f475209e9459e310c8efd95882d455b1be1357a3867f48ef9e52b665a6cda2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33117-PLUA",
    "rowSha256": "21a0c427458fd793267604124055c765bd7366ade8a596314846a8289f568ecf",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-33123-PLUA",
    "rowSha256": "44b54ba47bc13ca4a596cfe707a25cf910702f3beaa59f97efccafb65a436278",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34108-PLUA",
    "rowSha256": "8cf7edbd453489f1260ce4f66c2420e1eee79918ff79f24ca0940ec8ca63fd35",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34115-PLUA",
    "rowSha256": "f2498124b1b106f9aef1992466c5d2bce0c4a0e40acc270b8d2fece479d91553",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-34121-PLUA",
    "rowSha256": "fd8b914ab688eaad139a17dcf6c1081dda1b8ff7377d226ca245c642e388e9c8",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35105-PLUA",
    "rowSha256": "0c9eecf7928480ef83939ff43195d8b7dceb0083061f4ce2b8a09e85b5f9c175",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35108-PLUA",
    "rowSha256": "ea7bc176132105a7e19d9963f7d134a64d08771afb47d4df235c2418e5af61b6",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-35117-PLUA",
    "rowSha256": "be502f9c4aac49d88e5bfb3067b9c5079cdeb6b16a520ac8c9810c730a80c6f2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3278",
    "rowSha256": "5f137683f6639c71cbb9c59080f3d8d9ae81448022181bf5352837288fd2886a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3281",
    "rowSha256": "1303e1c3564c4705d67e9e5b58e14910785c338ee8749747fb4c1099f0d5ce7f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3270",
    "rowSha256": "6bc4da9ec3bfbd6054fed6a7fa8055387c310df11288951d28749a7197813073",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3273",
    "rowSha256": "b3ed11151cecd1203b1b8e949dc56ce875d7ff9eefb1deddaa7d520a789f231c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3274",
    "rowSha256": "6dca0f9bbeaca0a7d159e4d6033d4af110899067071bda19bd1843f8495b1062",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3277",
    "rowSha256": "95fd39bff5edd255f614e2f89439e8395788bd38f3496aa8583cabeea1f0db0b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3279",
    "rowSha256": "595cbcd1df567146426fe37838c7fb4987a808e3fb40e38f04691b5d777efa5e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3280",
    "rowSha256": "caff0fa2ee734d4d88cf95529ea244fb7f4857c9c3450165ff45c81df6154ef3",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3271",
    "rowSha256": "8672ea5436c9e71b94c7d8537fb32b24b86b26cc72b08936f91e3a3eb5071d70",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3272",
    "rowSha256": "b46ece644bd128e9429c769c4845d74f67253c285b0f7465691c0734c59b7224",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3275",
    "rowSha256": "2e66426a2e3b2a72efed011e77af3a329f5c271d8ac31303fecca17ba041bd77",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3276",
    "rowSha256": "6025d84fcfbb4860621fe15fafbcac4a93cf05252475d5831fe03850fd0bfddd",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3202-QL",
    "rowSha256": "9fb8759a9e5405928496dddce1f796aab9fdd2eaac828fc954555dbe894fd0fe",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3202-P-QL",
    "rowSha256": "5b93dbe3799f05d486e9d6e8f9bb387209d2db3d20d4ed0b27fee0e62f1b6f49",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3266-P-QL",
    "rowSha256": "a0f835aa9f295fe365ce58224d8ce8fd16bbbbc43cdaa23ae04c38fa0307aaa5",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3290-P-QL",
    "rowSha256": "4c97d085fec6926a391ae0f470b5b1ac50e58af444dcf774410d66bc1521adc1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3291-P-QL",
    "rowSha256": "be4bdedfe5ad657a637efd85d1b1a6a178d73018047657eedeac5750bd73813d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3269-P-QL",
    "rowSha256": "1ddcba33c3ee2e2986a0de307a51001b7f59ed0c27f039430fd4fb7c07e59f24",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-311-JS",
    "rowSha256": "a7f647c7bf46d22f18053e0ab4c48c47149d6e5647f18c27c56efee6c64525e3",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-411-JHS",
    "rowSha256": "2a60f164336f7665633ebb60b2d94a3d4e93a4170a0d477b314b4543a504bf4e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3221-QC",
    "rowSha256": "92619a73e2d64cdd3f64342347ad13dbe0ef8e408b2eaac7ab999a4ded75a8d2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3201-QL",
    "rowSha256": "444deab29d3c548a91b38df7fc075d09964905e5a25ad592c80bb2166ab22285",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3211",
    "rowSha256": "207a9f2cf42cc8e68ab2d96f887f135bfab9194579a8d4341e220b74fa36ce13",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3213",
    "rowSha256": "01fbc218ddca5e9e59a9b52174f8b7cb627432e0fc08cc85b31e65abbe137440",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3215",
    "rowSha256": "1b662c291361b7ff2dd527b97119f099c77308b071a7cca51c2946fca26fd074",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3217",
    "rowSha256": "a549f679f202c785b1944cd0714cec771271cccc49d19feb5fb34a4e150bd632",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3220",
    "rowSha256": "b62e4e33911c2e97e359175497e2b50b61a80057976fc1598eeae8d5ceca1286",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3251",
    "rowSha256": "4ace4b1e5ee89e9a5b4dd229949923ab0eccda04bfee3ab18c2eb4b8c856d0b4",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1206",
    "rowSha256": "78ef0c27dffd93c957ea6dae44b39b3cc4c3c4acc24eebb20b61385d6fdee851",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-1312",
    "rowSha256": "e710e03a893d48d23892e437f115e3d741e2e819c4a3f48bb7b9854d8c85906e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-3206",
    "rowSha256": "fd2f415eb4e5e4bc0ee0b7b0b4b931459aa19868f80c8ccb869f31cf2f584c9d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5202",
    "rowSha256": "6dea4363409ddc80600256e8e3f22be17f3a80c9ab02aedbd424d96c82f9e773",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5302",
    "rowSha256": "4513bcc28089f28575d210ebb53b67ed8ab5a55286c70e1ac9a47f58b2fa6ae5",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5320",
    "rowSha256": "3b57d03275e503c32b0529900080dd5b932c52fe6e9a2c3f3796c78e276415f2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5420",
    "rowSha256": "898af44691fcb7ef81d152e9a2eeb7698b6e8b90a334fc895f126d215c23089c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6635",
    "rowSha256": "47c280c46c4cd45d40fe87cf1ae29ed259690f31cd6757250f1aa4e46ccfc527",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6552",
    "rowSha256": "bd0e1afd1a4f5e15c1fb79477773792a795de700bc30fddf2122e81a190f2491",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6628",
    "rowSha256": "5df16707f5a9474b951fac7d44aba95c0dbb043578d48ae32d00e8c532acb8aa",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6712",
    "rowSha256": "a4e67911bc429beee86d46e392cd4754745ea21ebe882f7e54fceed85eebcbac",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4842A",
    "rowSha256": "2e54853d4a5447e784df3fc027d9e51d58829519e73d2f5f7b9f9f5a83298dbe",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4879",
    "rowSha256": "3dc5715598c1d7e43583fb302956d108188b7ef5b2679633351e37987aae5c28",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KM-871",
    "rowSha256": "fff90e311bc43b33d66bef7666269cf4cd4a2b9092f7eba9bb63ac7c7a4fd33a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4872",
    "rowSha256": "ede5a3006414fb82585d943c0ae507075a01da79c8c85ec2a76c4e05557c6244",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KM-873",
    "rowSha256": "cb3f13f580368b927cb8a50ee4e504bfe7c090eab55cede1514fdcd207343543",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4874",
    "rowSha256": "9baee0bbaf55abb1b62848cc44a97f19c93e0237a4f65958ec325fb92a22073d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4808",
    "rowSha256": "7752182baf991c88c5f68f1298c5be9a2a61d40745538ed419494de249a283c1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KB-213",
    "rowSha256": "695de206fa4a54499e8ca958d21b73a42b7fa179efe2a0fc211cf5493eaec2ea",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4809",
    "rowSha256": "6b4855ad0138f75c288a4adf80d0ed988682d942b33f78423fd8f329a011af75",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4101",
    "rowSha256": "a91e5e8ad6831bfea0d02229d6fcf3950844fe74b3dcd2ad5a72277f021f3187",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4812",
    "rowSha256": "f0bcf62de74eb8db3b9b5c47627aa2626ca665ea853a036ec1533de0a25d8fa6",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4815-B",
    "rowSha256": "114370d82979177b82e2c42283aa45483d0274b1554216f0c1b643229a7f49e3",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4833",
    "rowSha256": "f3e97b4d765913808014eea76aada1c7d1c5b5a6327b87b5e91bb7e3b65a29b8",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4831",
    "rowSha256": "ac90766dce201b449b4937a348b355a0f91388a815b57504c5ac7484e10cc982",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4835B",
    "rowSha256": "a466baf7234d9dff53de50aae454f6896d8d788c3f4fa01b2fcfa07f9532753b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4835",
    "rowSha256": "f96ecc9e35f793b4122a0c62f399aeec3345af49bdc1cfc80fdf6d29c6512515",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4838",
    "rowSha256": "b7f429ac35b25adf4fc213109b22197e0dd82c86cb6d1a32c60c6cdda1c1677c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4427",
    "rowSha256": "42eeec4a15d9e5b4bed3c23038acd55cb0609acd1d5a879ec5e7f53cf464b32b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4442",
    "rowSha256": "409342a483a3c3a87ae01fc81ae5c7fd177dee6ce967d41e34822c9f850b667a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4402",
    "rowSha256": "85e2741dca46b8d882495fd4813ac57dab16917f7e49e736edffc59993831fac",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4410",
    "rowSha256": "457a7e4ad61dca96555e489c67fbf7c2938821e2f7f8850abdc30a00f0be9ca9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4776",
    "rowSha256": "513d164962a1f0c057a1cf40d26b74f9f41d837bb899e1dd6bcdb2d80c95bf9a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4777",
    "rowSha256": "c67a3dfdcc6c6a6b26b37ef527a04a3abcb3110e0c9158f59209202f52b1ae6d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4775A",
    "rowSha256": "aa873cbe1937060dff9be9e09ad7b8e4fbe5cb295dc65dbd467b694f697fea3e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4776A",
    "rowSha256": "f413b84c8ac1c295fc73d0aa4b51edda4ed5d920c0ef68a9fdd3d1e77c5e07b9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4777A",
    "rowSha256": "883cb66722f5bbb6a9503c7556ef8061ed0ae2b3ccf6fcb02f23c13afdf780f5",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4781A-R",
    "rowSha256": "7a6fda8b8bf0360ee06f78e1a22bd63fa27a598df111888875a4255d250d5783",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4782A-R",
    "rowSha256": "2f141c6c9ecde5909fdae5affa695d64864240eca4bb84dadb2e7b9794556fde",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4766A-R",
    "rowSha256": "821e33dc2f7a2c8b6c4e2c3a06a806e055f7ac0136ff73868b844e8082f1ee58",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4767A-R",
    "rowSha256": "be1d3f90d3a396cafdaa12b836f503afb80cd99b3ea5893c62bf9f45f3474f98",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4709-R",
    "rowSha256": "da34a5dc4efeec2321d19b140cf66e365ffe288be59ce1c9443271cf43359c84",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4710-R",
    "rowSha256": "70984e88bc181f7c3ab90ad8350477c94caaaeccede3e61aefee0966a15a008e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4711-R",
    "rowSha256": "266b250b0bf996ed953162908bd27ac8da201ca085e15db2b5647faa40a45e00",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4712-R",
    "rowSha256": "fc105e615f5d1f2c3dec0029dcb409dcb45c2f476c92d956a9546b59ea7dae27",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4751",
    "rowSha256": "1741eccee2c406c970dc9b1d18c88818c25711b6629e5f5e2f7b522704c7ea87",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4752-P",
    "rowSha256": "94eb38024a4f32e4a9840eca4dda8f5bb3880309b12524d2a14aa3b9669ca890",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4723",
    "rowSha256": "390243ffe152865297bb7379ff855ccff89a8617aa2ed5ac07036a1c459fd6bb",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4716",
    "rowSha256": "60d2c8f7faec2d260852553227a0d40b010fd5970917b7c00d701141461ac1f8",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4788-S1",
    "rowSha256": "587d13007c1a7f2ab30564a8a53cf08f8a5057a4aaf511bc53672b743ff9073e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4713",
    "rowSha256": "f6272e061f48ef0dc3ddccbc3f1c7c52f3a06757005e838268e99ecd77137206",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4714",
    "rowSha256": "5f1b7a4ed06448d611bba15b09f5fa5393c9c377e0db4418a9d28e84c6299e1f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4715",
    "rowSha256": "17df93442f03500f441a987f9c85df9611516da9dd7820c95c9ffd90779f8f60",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4722-P",
    "rowSha256": "053094627a76fe015bf7675e8c692217b0b49162d6720475b54ab8c74b3d0523",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4725-P",
    "rowSha256": "e1eaf470f0fddac0713ffddf6afd3870459c6a9e19b6b89f9fd3d3a9a7ce0603",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4789-X1N",
    "rowSha256": "d07d0a18981b135791b5c9a140115c103dfb47e8df1814486f72894786baecdd",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4724-P",
    "rowSha256": "ed76e421640f33222cc166d55693788603cd2a504b755fd79a2d846e6d90cc78",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4789-X2N",
    "rowSha256": "7afb525c0ae9b2761765fe84f50d17f4ca05d120541dc2d17aa1bfc11df1cae5",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791-XP1",
    "rowSha256": "c84070b9e64c33981103e6244f99b988082c15c84d86c6bfc858f8a295154c69",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791A-XP5",
    "rowSha256": "b1fd8a85368fa67cc7ca7264be2aede05bf8b2e4336dee892261c6545422ab71",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791-XP2",
    "rowSha256": "62276675c3576f384484c959acfc256caa8d32672fc491afde92fc4cefe1755a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791-XP7",
    "rowSha256": "0f366bba7491979d249516bd451879f63ceea72fb87760e8ba8a9a2e53a5cae3",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791-XP3",
    "rowSha256": "0be50621f867033d0cf4f349a164d6364462cae6de8e7ab6ea8dc145ad84df71",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791-XP9",
    "rowSha256": "e9790d99c1d8042a3514dd03f569e3ee6742e81e1eadbbd2ca026217304d48cf",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791-XP4",
    "rowSha256": "b81cbf8487c6e7717f32b429f3dd8dcd48dcfecfc02deddeff76e159d5bf9a98",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791A-XS1",
    "rowSha256": "14a87f663f4d3f973f68ff591fb2ce1005ef39917eb657d6d041f40e8ecf5eea",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791-XSA2",
    "rowSha256": "313040c201013492f339356b73ed31815074fdbabb5ff12365b1257377f256fe",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791-XS3",
    "rowSha256": "ec6ad4475ca5ddf48bec2f9082985f243501dc0c75e159e26c9c2f02b91c75ac",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4791A-XS4",
    "rowSha256": "06377e2c33c9d3950b3a02dfde0a61573cf8b7a33a02ea4a94a63be6a8cd8346",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4790-XR8",
    "rowSha256": "bc54f09c4a92d3925ed58e080b35c8542c8c900fae972930416d9ed60be6c5ec",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4793A",
    "rowSha256": "3c82fedf903c3e8e92a21b91b0247b965e75a608c1b825821130cab413c432b1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4794A",
    "rowSha256": "7374febd0aeee6c0bad235fb1d86f842dc5faec3c7e76eab21efaf37538fce23",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4794A-L",
    "rowSha256": "6bf790feb886500ec554b480305cb8ea194a753e56f9a9e207a1312c31aa82da",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4795A",
    "rowSha256": "38231d3d0cc71d4124a3af5ee8704aed0c08454d0d5038e836dde9e189f53018",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4795A-L",
    "rowSha256": "d4dc6b7535b15438db2d6d7f99779e2386132c21aa8bdbaffad6560dc09114bc",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4796A-L",
    "rowSha256": "6899f2b57d5a1b888f3466ce1b43d58aedc2249ff969c1666104a499ff08dd2f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4741",
    "rowSha256": "28b88bc360c611646cdc684cd9ec80929acb93c5543156ea7d969791a377db7e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4727-R",
    "rowSha256": "48684c6ac0b85270dd22dcdfa2e50c006a991e211bce5c9ed5f96e0dc747ee17",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4728-R",
    "rowSha256": "aa01835477b1dca476d56e4881fd8fdb4af27296692f9764d6bdc2ac0bfd1e8c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4729-R",
    "rowSha256": "acf8ec0fd3c7d9bc88789507c4e1951cec07ee787fcd04349014cd114e9d3e4c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4730-R",
    "rowSha256": "dec9f0d212a66d91fb284d5dcbafd97d0c2e93aae8b52dcaebe06507a2c678d9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4737-R",
    "rowSha256": "e8fd6bd44086bd2c4904f469d01056401f523fae9bca24d66122ede4b4c01ba9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4735-S2-R",
    "rowSha256": "b441abe4b0fbc8baaa740ad2ec4f84d552288b192659c83417e4ef0ad3fea855",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4735-S3-R",
    "rowSha256": "136c9ce27cd3f1344f8f1d6c683ec23d441763dfa8e4fccc464271f9bd63365b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4735-S4-R",
    "rowSha256": "0ddbbdd80a9407a8d50ab48950f085b9eb1219133f290e09a1f94f5aa92cb059",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5316",
    "rowSha256": "86880e894534b8e51b54630b36902837492f8430f77b4d52e504e72f6f1cf531",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5413",
    "rowSha256": "7a947d91078a05b403310c55af65844925284763b0824c99ed1bb40d73fef35e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5318",
    "rowSha256": "353ccbe0033d1441f2216a864ea9979d40555976d682808181a52f9acd93bcbd",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5416",
    "rowSha256": "513244a5beb05a8da5543e218650a269b84e2d980d62d4285bec3b5aa2d836ec",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5317",
    "rowSha256": "22c1a11b7a841ee316296dabd2c059d5506336c6109d246bf7273af8dbe50da4",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KD-863",
    "rowSha256": "40b4afae00b3ca9345257c59f72608574b7168cc85a5df39830ad4cba0a06b1b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5405",
    "rowSha256": "3eb9a4011793beb2a5cdb571ce6c6bc0efd4966fcbe2180b4a40f80fa09a2f10",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5406",
    "rowSha256": "72b23b2928c6a7d044a91771a0aa19d591896904e9a7fd067e1b17eb6d2d8cc4",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5409",
    "rowSha256": "74002f0b2d9ed97c3e2435195d23b61bf9d17e6014d0d2b8e80c780475491fba",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KD-865",
    "rowSha256": "21d0028d1352bfef67768ede9677b95c1555f15211dc413f17f8b896dae6e1e1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5342",
    "rowSha256": "3c2f54dc1066827d690cdd134bcfebb94dabae011c01f6f9795504cf8f9799d1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5342A",
    "rowSha256": "e15ca4ecd879fa9e99b458281ec8401a6be9b9ea65ff9200ea4ea8388bd0690a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5336",
    "rowSha256": "04cc1d61118e899eed77bd0c587a7895e7b9fc82b1b46604e1e285987497f217",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5002",
    "rowSha256": "71efbd1d5c04623c1fc7714211b4c99d86c707c10ef35c335806779b691ac55b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5003",
    "rowSha256": "6d82786d075eb34df89adad503f05dc4ba81245aa84180a7214a7e5aca33cc4c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-5007",
    "rowSha256": "349ab331389b6d5680e9e68cbc2f759f8f4d9ef017e15ee5e8f61967a63ac0ea",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4510",
    "rowSha256": "73a5f4dbb3d041ef36fcd8c894ea423476ff6d3d481b4e214ec668c65467a0f8",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4520",
    "rowSha256": "3fc992634f19b6e6d8c28cb4774e8eb6edbe921daebf622b4bba657da3e5e403",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-4530",
    "rowSha256": "19fb4fc6b7939a7c1c91cd88fd406ad1517eb008ba2dc00992289690d48c0457",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6601",
    "rowSha256": "5310ffc522f9d807db94534f43aabd9ecde87c8e1a6d58f589f2ab169725c470",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6602",
    "rowSha256": "b2c8a5be440d3abc93dd8fd2dd3d067e7137be2acf042f74c2ea1af08220988a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6603",
    "rowSha256": "17f5f0f4e44d37d9da40f775e787c6cf9e64656a684b7d57d6bb6fd8660b5f4d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6604",
    "rowSha256": "2648490e99fb9c40bce10b590d59f61c3b245b809c5c301e0d42eeeafcc514b8",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6605",
    "rowSha256": "fe8cfb8e50de5117952408eb9986ebbb3696a2f5cd75d58d4f3bac4676768e75",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6606",
    "rowSha256": "f4b30ad11fd03628b78b22527a5ebf6b1b2d828767c53dceb6042ada814b41d3",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6607",
    "rowSha256": "1c0e3ad0054983a4515d0936e108d22be31ee7a82a4649a8ee5237458e840f25",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6608",
    "rowSha256": "aaf311c2611fdd37bb8c76f8b678ed4b066b225f0b8650a744db94e4f0cdee56",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6636-JS",
    "rowSha256": "df85d31afdcfbb4aa3edde6e7128e18cca69fbbbe84c41f394b5088940074952",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6685-XJC",
    "rowSha256": "892d0e9f66fdf1a6027e1ef49cae7270b2b287290b3105866fb7290eb75b065e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6686-SL4",
    "rowSha256": "40ea0cb2d39b334f9c39731ea1a7dd7ae7cba7be028c980b40a480b51e4d75bd",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6301",
    "rowSha256": "02d6bd203b67633b74c36a12161c521c1dc96aeda532d04ebb24ad428dcd28f9",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6517-AP",
    "rowSha256": "52cce430c817fe24290e58b646f0c542dc672c8378b9438110b8d5551b6d51e6",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6701-HE",
    "rowSha256": "8fab3d82b008853c4c68b81fdf109f471f060f595dabcfeab34f82084b8ab360",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6706",
    "rowSha256": "00867ccbc9bfe6c9fd29aeaf14af7d0b34e289d7aedc04f34e0243787eb0d93c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6636-LS2",
    "rowSha256": "37640ef01a1b1017644a702b2a8fe6aebac99785df7e27dcd809129064b2b75e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6675",
    "rowSha256": "2ed2d04b89fc7f775682603316fe96673f495ae2ecd7d989c32352641c125bf6",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6671",
    "rowSha256": "6f836b52204c659f64e63c8fdeaa0db56456ff48f25a8a07162723b1ebcd7ed7",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6429",
    "rowSha256": "0061cb12d0ef53af21651612a504f464d6de7123b76a8f3f4b333b76e0a54db8",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6426",
    "rowSha256": "e1d3165f0e0175e0a9f2de4ba3be0fe110addfbecefb1ce00f0aba69ae5ae518",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6427",
    "rowSha256": "9e0696dc9a74ece8fb3bf2feadfca5a16d2a4d6072f0d6f0e1c14d25f022e0c1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6413",
    "rowSha256": "7f290064b2a73958f724a8df14326ad817b91dc25d0fa68a3c5f22d2eeb9b7d2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6414",
    "rowSha256": "80cc390d5bff4220e22d667c4d133c5e6eb58ee62957f3e630baa23c4aa0e969",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6421",
    "rowSha256": "c3d4c8b9a6004b6e3298a3f4e620318ae3510d26949f22d1370a6dffd55569ec",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6402",
    "rowSha256": "c57607c551c3d7c52314ddc92927e62a0d5a62a80c5651c425ebd4fecbeff808",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6404",
    "rowSha256": "0c0b7760d6b4b82584710cf7c335ed1ed3ffd1a1313cceaae1c2389515d05b88",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6411-X1L",
    "rowSha256": "f3565b15d5b05448e369c04ae5f76c87c84f174c5744f03a25eba5c0f9e20718",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6412A",
    "rowSha256": "2cda7d6b39b19a9c1bbc04078fccab85208e10b4abdd1a1d302075ade4672c05",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6403",
    "rowSha256": "7ef346defeb42a59b00264e06b8716cd51c8d0d8aaccc48a7110e3f6bb9e13b6",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6409",
    "rowSha256": "8b8434f685b4a2cd26bfc3cb4cbf4058473bb979dfe9714689d44d010e637e0c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6221-R",
    "rowSha256": "be556f1da51e287f24d3c66add02b16105c979ff148b45298dd224b86788fb6f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6247",
    "rowSha256": "ab447611dcf6b4fe1cacf4ab3a350b268d6ed34853536f7d623ade1bda0476b4",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6241",
    "rowSha256": "a2377109ddd06d32695fa1338126026fb2ad579685d51ad988b6e1f76f60fdb3",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6241-4L",
    "rowSha256": "53a73ec59fb7fa091b69f0720dcb0978127f946fb27f5a39b3af801727429c1c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6242",
    "rowSha256": "3b3db5b275880781247fd5092873ae321140464ebfdd04d54bd23eeab2dc5718",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6242-4L",
    "rowSha256": "d1c5aea5d6a8ea13f2ff21406bc44eb5c3f7c96f47acd879725c5fabea11b7f3",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6242-7L",
    "rowSha256": "cb83e9a154746ea4d65840bb07dd89c902fd1dee3aa5b39efc9f9f53397d77c2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6242-11L",
    "rowSha256": "2a4eb6d6952a9d24089ca61c13ac05688edc6b571a00879a34f4bec7505d384f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6243",
    "rowSha256": "1b90a268b4cfdab48dfd5b79e7fe16b95e955ea22155b48c3edede6fc4660516",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6243A",
    "rowSha256": "87f7d7e91ec4148538a1a24ce78f010935d6f4028e20b8a148f5bc95ea95394b",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6221-F",
    "rowSha256": "a92ef1449e8277044815861d7ff46f66304c4527a5304281ce482a64832666e0",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6202",
    "rowSha256": "7ea7777ac89fdef648ca184a8801e26efb0be06cfcbc6e52e1e8f9734b598dd7",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6208",
    "rowSha256": "775d4eda213fae47421cd1b14c53112e45227d262e20c609487ea9237d668147",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KD-6204",
    "rowSha256": "53e6d8d34fb27388d717f977923dc8cbf1d444741afc65b02da5d9426700369c",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6225",
    "rowSha256": "4765a416c77e750ccdbecf8687d7a3c42d9dbe9a1b1d26fb7944dfdc74b3bacb",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6227-CB",
    "rowSha256": "0d0d498206a37ab055889991677044a7fa0f3a198b84807db79bcb5b6be3df8a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6901-SL",
    "rowSha256": "e9708844d48e2de9c64f03c579e997e79c3981d3d4f93af10b15a964cd2e91d1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6228",
    "rowSha256": "2813f35d45213d5b82c57842a73e727aff56b6edbe8a33feda5df65106208859",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-635-S",
    "rowSha256": "23089678e19005db1b5d23ab6822a46c527558922e25aa92b7fdfe7bc614a7bf",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6222",
    "rowSha256": "95dbbe5a49ccf06d0d9e9eb99a791d7df6790d86b7933bfa1427377be4bd0535",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6206",
    "rowSha256": "d9b16b47e4bd085b0c777160d3ec0bcf06f44fafa10178c0e605e547ec216aab",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6216",
    "rowSha256": "75cf4de783bba01981189013f6dafcfa7eb296e56349d7807602b1bd88afe68f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6216A",
    "rowSha256": "470b3d449d7dfdebc9d0df68b84617898fd78d623e534d66ddf1d2b4d2e8d5de",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6216-6L",
    "rowSha256": "b03926ebcd6990c6f657765fad9c3c3cc89a8717f9e07a8cb00a9cb9a6f04874",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6216A-6L",
    "rowSha256": "563e6c216d0c55018eca8adaa4c48f3508269a413a51cef52315f458a3a3f370",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6252",
    "rowSha256": "474a51e20786b1f6cdb2da6fb6fd219da6759a770e6b824beb2193cdb3d9abf2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6253",
    "rowSha256": "6cb5082f894c5f0bfed566296a7edf802748531d995785cd1e76beb3714d9065",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6254",
    "rowSha256": "74f2e622caeea47fcebb9b9d2e17a96a0b531a58f9f7ee9103dd13e96d310e63",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6255",
    "rowSha256": "ffa9bb28b49f343c415abff79262d7194f3cf9b82f438c1c1cde9adb9ece1e52",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6260-G1",
    "rowSha256": "47512340d1e7475a7a886db66ded2ad5bd2617ebb14c6577e45482fd2c3504c1",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6260-G2",
    "rowSha256": "4c5220298ec5f3f9ca09cf47eef3611d57bb505672ab7b4537c480fb7a4b5e22",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6260-G3",
    "rowSha256": "dfda20b4bcd10287d6a94971b328104523ab5091563cbd21d723add0386838d7",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6260-S",
    "rowSha256": "38194b7b197959f22b99cfe2b94d6be62b28761e31ffa714ac625fed1342f483",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6821",
    "rowSha256": "0fc57f5eb1cd3a0cf74cb98bfb842089979847d9433ceed4076f9f02ff18ff94",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6821-R",
    "rowSha256": "218106b7bff57ae3795468311e135cd4eb99214a163e95fa20c83ae9ec92d56d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6822",
    "rowSha256": "0827072765d5c91b94167aec06e8431b2e4b3adff024e4c228b8404bdb6610a2",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6822-R",
    "rowSha256": "aff51907b45c97615ca752eec549a837254e414d6af446939d1f3998c94ad9f4",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6710-R",
    "rowSha256": "c6dba2c471e1a6ed65beea96f68467021f0dca60039093cb43ccd359f79722ea",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6856",
    "rowSha256": "2f74aee8397c61bc0e8fe7199996db187f21dae2bf6559d3ada7afc8821edae3",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6857",
    "rowSha256": "03e99a6b10a7add4e85ffa08294dd9847cea20f6a0c557e8cf5796910c61c773",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6858",
    "rowSha256": "ac8b4ed6c858abe3bfe26d7fd624b11a22fc0389338dde51cbce1baa5c2b827e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6810-SL",
    "rowSha256": "4ab937adf3aebb0da4888c73a94dcefa0f50a2dce4ece715f345bb23cb73388e",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6811-SL",
    "rowSha256": "8c5e7950e38c1be6a886b151edc45cb7bc5052a77bbcf1e5c83e7ebb5ddbbe3d",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6812-SL",
    "rowSha256": "2fbfafbc592d89e1327a26cdd9b0485f1249099866946e2bebaedd3a6fa98f51",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6820",
    "rowSha256": "65ab7dbe5a0f02858e13eed2a2c7ebe96afc4691990300347b581e0128e16155",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6707",
    "rowSha256": "5041fd858a37e0d48de24d477f9aa28d66fa749faa16ef7e35bba2d8d9522f92",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6815",
    "rowSha256": "397ea7d4b41caf005e921b6f82f4d6209dd627024113984d234ff6e503ea407f",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6708",
    "rowSha256": "0b9c25cd996e89f56ac8e46870701376dbafd375129b2d9068ebd5a9a28386ff",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6816",
    "rowSha256": "8d2e6d5eb11090ee9682768e1ba04ef03636d9e9197e83f223c7b4084eb2bf39",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6817",
    "rowSha256": "3f5c19c6566e1330433f9436e0eb1de02fe7013556ef622207809e88c56833dd",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6814",
    "rowSha256": "130c952d39ed596a40c204bfb827f02063b7ec85ee53e4818009d5f15a17c715",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6824",
    "rowSha256": "abe325cebaed784c167f68a446e1b82871416ec9eea6fa40ec2e11eff6a4aa5a",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6824A",
    "rowSha256": "1b8286620603b2b109440e7a05a454fdf97b3da48364551c8b76c5b98b299846",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6825",
    "rowSha256": "ab817a0d234571a917291589ccb4ddd9fd2e9939973fa6a0808dc69785451548",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  },
  {
    "sourceId": "kuani-catalog-2503",
    "mpn": "KI-6825A",
    "rowSha256": "88a6c7efcbb660c32b450b519783c3b8b74439d01f28242b63e363ce9d6f1c40",
    "sourceSha256": "569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba"
  }
];
 return snapshot.tools.map(row => {
  const source = sources.get(row.sourceId);
  const approval = approvedRows.find(record => record.sourceId === row.sourceId && record.mpn === row.mpn);
  if (!approval || approval.sourceSha256 !== source?.sha256 || approval.rowSha256 !== createHash('sha256').update(JSON.stringify(row)).digest('hex')) throw new Error('Interprétation documentaire non approuvée');
  if (!source?.brands.includes(row.brand) || !source.allowedPressureScopes?.includes(row.pressureScope) || !source.allowedFlowBases?.includes(row.flowBasis) || !row.model || !row.mpn || !row.rawLine?.includes(row.mpnOriginal ?? row.mpn) || row.details.length < 2 || !Number.isInteger(row.page) || row.page < 1 || !['load', 'maximum', 'average', 'unqualified', 'free-speed', 'per-action', 'missing'].includes(row.flowBasis) || !['measurement', 'power-and-speed', 'not-established', 'operating-only'].includes(row.pressureScope)) throw new Error('Référence, page ou régime non revu');
  const identity = `${row.brand.toLowerCase()}:${row.mpn.toLowerCase()}`;
  if (identities.has(identity)) throw new Error('Référence fabricant dupliquée');
  identities.add(identity);
  if (row.pdfRowId || row.imageRowId || row.documentRowId) {
   const original = documentRows.get(row.pdfRowId ?? row.imageRowId ?? row.documentRowId);
   if (!original || ['sourceId', 'page', 'model', 'mpn', 'mpnOriginal', 'categoryId', 'pressureBar', 'pressureOriginal', 'pressureUnit', 'knownOperatingPressureBar', 'operatingPressureBasis', 'operatingPressureRange', 'flowOriginal', 'flowUnit', 'flowBasis', 'flowQuote', 'pressureScope', 'pressureQuote', 'rawLine', 'details', 'tableRowBox', 'secondarySources', 'sourceTechnicalCells', 'sourceTitle', 'sourceLimitations', 'withheldFlowReason'].some(key => JSON.stringify(original[key]) !== JSON.stringify(row[key]))) throw new Error('Ligne documentaire altérée');
  }
  if (row.tableId) {
   const table = tables.get(row.tableId), cell = table?.consumptionCells[row.column], identity = table?.identities[row.tableIdentityIndex];
   if (!table || table.sourceId !== row.sourceId || table.page !== row.page || !table.identityHeader.includes(row.mpn) || identity?.mpn !== row.mpn || identity?.model !== row.model || identity?.column !== row.column || row.column < 0 || cell?.replace('/', '|').split('|').at(-1).trim() !== row.flowOriginal || table.unit !== row.flowUnit || table.pressureScope !== row.pressureScope || table.pressureQuote !== row.pressureQuote || table.flowBasis !== row.flowBasis) throw new Error('Colonne technique ou portée documentaire altérée');
  }
  if (row.sourceTableId) {
   const table = htmlTables.get(row.sourceTableId), cells = table?.rows[row.sourceRowIndex];
   if (!table || JSON.stringify(table.headers) !== JSON.stringify(row.sourceColumns) || JSON.stringify(cells) !== JSON.stringify(row.sourceCells) || cells[0] !== row.mpn || cells.join(' ; ') !== row.rawLine || !table.headers.some((header, index) => header === row.flowQuote && cells[index] === row.flowOriginal)) throw new Error('Ligne ou colonne HTML altérée');
  }
  if (row.flowBasis === 'load' && !/loaded|under load|maximum|at max (?:power )?output|max[.]?\s*air|負荷時|Last/i.test(row.flowQuote) && !(row.categoryId === 'pistolet-peinture' && /gun inlet pressure during spraying/i.test(row.flowQuote))) throw new Error('Débit en charge non documenté');
  if (row.flowBasis === 'maximum' && !/maximum|maximale/i.test(row.flowQuote)) throw new Error('Consommation maximale non documentée');
  if (row.flowBasis === 'average' && !/average|avg[.]?|ave[.]?\s*air|moyenne/i.test(row.flowQuote)) throw new Error('Moyenne non documentée');
  if (row.flowBasis === 'free-speed' && !/idling|free speed|no[ -]load|à vide/i.test(row.flowQuote)) throw new Error('Débit à vide non documenté');
  if (row.flowBasis === 'per-action' && (!['L/cycle', 'ft3/cycle'].includes(row.flowUnit) || !/cycle|shot|coup|tir|driving operation/i.test(row.flowQuote))) throw new Error('Volume par action non documenté');
  const measured = row.pressureScope === 'measurement' && row.pressureBar !== null;
  if (measured) {
   const reviewed = reviewedMeasurementContracts.find(point => point.sourceId === row.sourceId && point.mpn === row.mpn && point.page === row.page);
   if (!reviewed || reviewed.sourceHash !== source.sha256 || ['pressureBar','pressureOriginal','pressureUnit','flowOriginal','flowUnit','flowBasis'].some(key => JSON.stringify(reviewed[key]) !== JSON.stringify(row[key]))) throw new Error('Point de consommation non confirmé dans le document primaire revu');
   const declared = source.measurementRecords?.find(record => record.mpn === row.mpn && record.page === row.page);
   if (!declared || ['pressureOriginal','pressureUnit','pressureBar','flowOriginal','flowUnit','flowBasis','flowQuote','pressureQuote'].some(key => JSON.stringify(declared[key]) !== JSON.stringify(row[key]))) throw new Error('Point de mesure absent des déclarations revues de la source');
   positive(row.pressureBar);
   if (!/\d[\d.,]*\s*(?:bar|psi|MPa)/i.test(row.pressureQuote)) throw new Error('Pression numérique non documentée');
   if (row.pressureOriginal !== undefined) {
    const pressure = pressureInBar(row.pressureOriginal, row.pressureUnit);
    if (row.pressureBar !== pressure) throw new Error('Conversion de pression altérée');
   }
  } else if (row.pressureBar !== null) throw new Error('Pression de mesure non établie');
  if (!measured && row.knownOperatingPressureBar !== undefined) {
   if (/max/i.test(row.pressureQuote) && row.operatingPressureBasis !== 'maximum') throw new Error('Un plafond d’alimentation ne devient pas une pression nominale');
   const expected = row.pressureScope === 'power-and-speed' ? source.knownOperatingPressureBar : row.pressureScope === 'operating-only' ? pressureInBar(row.pressureOriginal, row.pressureUnit) : NaN;
   if (row.knownOperatingPressureBar !== expected) throw new Error('Pression de fonctionnement altérée');
  }
  let operatingRange;
  if (row.operatingPressureRange !== undefined) {
   const { min, max, unit } = row.operatingPressureRange;
   if (measured || row.pressureScope !== 'operating-only' || row.knownOperatingPressureBar !== undefined || !['bar', 'psi', 'MPa'].includes(unit) || min > max || !row.pressureQuote.includes(String(min)) || !row.pressureQuote.includes(String(max)) || !row.pressureQuote.toLowerCase().includes(unit.toLowerCase())) throw new Error('Plage de fonctionnement non documentée');
   operatingRange = { min: positive(pressureInBar(positive(min), unit)), max: positive(pressureInBar(positive(max), unit)) };
  }
  let flow = null;
  if (row.flowOriginal !== null) {
   if (!source.allowedFlowUnits?.includes(row.flowUnit) || !Object.hasOwn(factors, row.flowUnit) || !row.rawLine.includes(String(row.flowOriginal))) throw new Error('Consommation ou unité absente');
   flow = rounded(positive(Number(String(row.flowOriginal).replace(',', '.'))) * factors[row.flowUnit]);
  } else if (row.flowBasis !== 'missing') throw new Error('Consommation absente');
  const primary = { id: `october3c-tools-${slug(source.id)}-p${row.page}`, sourceUrl: source.url + ((source.documentFormat === 'pdf' || source.contentType?.includes('pdf')) ? `#page=${row.page}` : ''), sourceLabel: source.sourceLabel + ((source.documentFormat === 'pdf' || source.contentType?.includes('pdf')) ? `, page PDF ${row.page}` : ''), sourceType: (source.documentFormat === 'pdf' || source.contentType?.includes('pdf')) ? 'manual' : 'manufacturer', sourceRole: 'primary', retrievedAt: source.observedAt.slice(0, 10), confidence: 'B', notes: `SHA-256 de la réponse source : ${source.sha256}. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir.` };
  const supplementary = (row.secondarySources ?? []).map(ref => {
   const secondary = sources.get(ref.sourceId);
   if (!secondary?.brands.includes(row.brand) || !Number.isInteger(ref.page) || ref.page < 1) throw new Error('Document complémentaire non identifié');
   return { ...primary, id: `october3c-tools-${slug(secondary.id)}-p${ref.page}`, sourceUrl: secondary.url + ((secondary.documentFormat === 'pdf' || secondary.contentType?.includes('pdf')) ? `#page=${ref.page}` : ''), sourceLabel: secondary.sourceLabel + ((secondary.documentFormat === 'pdf' || secondary.contentType?.includes('pdf')) ? `, page PDF ${ref.page}` : ''), sourceType: (secondary.documentFormat === 'pdf' || secondary.contentType?.includes('pdf')) ? 'manual' : 'manufacturer', retrievedAt: secondary.observedAt.slice(0, 10), notes: `SHA-256 de la réponse source : ${secondary.sha256}. Document complémentaire de la référence exacte, sans essai CompatAir.` };
  });
  const demandEvidenceIds = [primary.id, ...supplementary.map(evidence => evidence.id)];
  const connection = documentedConnectionFacts(row, source);
  const id = slug(`${row.categoryId}-${row.brand}-${row.model}${row.mpn !== row.model ? `-${row.mpn}` : ''}`), label = `${row.brand} ${row.model}${row.mpn !== row.model ? ` (réf. ${row.mpn})` : ''}`;
  const knownPressure = measured ? row.pressureBar : row.knownOperatingPressureBar;
  if (row.operatingPressureBasis !== undefined && (row.operatingPressureRange !== undefined || row.pressureScope !== 'operating-only' || !['maximum', 'nominal'].includes(row.operatingPressureBasis) || (row.operatingPressureBasis === 'maximum' && !/max/i.test(row.pressureQuote)))) throw new Error('Portée de pression d’alimentation non documentée');
  const range = operatingRange ?? (knownPressure ? measured ? { min: positive(knownPressure), typical: knownPressure, max: knownPressure } : row.operatingPressureBasis === 'maximum' ? { max: positive(knownPressure) } : { typical: positive(knownPressure) } : {});
  const missing = flow === null || !measured;
  const explanation = missing ? row.withheldFlowReason ?? (flow === null ? 'Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.' : 'La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.') : '';
  const demand = missing ? { demandModel: 'variable-volume', workingPressureBar: range, demandExplanation: explanation } : row.flowBasis === 'per-action' ? { demandModel: 'per-action', workingPressureBar: range, airPerActionLiters: flow, actionLabel: 'cycle de pose' } : { demandModel: 'fixed-flow', workingPressureBar: range, airflowLpm: { min: flow, typical: flow, max: flow }, ...(!['load', 'maximum'].includes(row.flowBasis) ? { airflowBasis: row.flowBasis } : {}) };
  const regime = { load: 'en charge', maximum: 'maximale', average: 'moyenne', unqualified: 'de régime non précisé', 'free-speed': 'à vide', 'per-action': 'par cycle' }[row.flowBasis];
  const summary = missing ? explanation : row.flowBasis === 'per-action' ? `Volume déclaré : ${format(flow)} L par cycle à ${format(row.pressureBar)} bar ; la cadence doit être renseignée.` : `Consommation ${regime} : ${format(flow)} L/min à ${format(row.pressureBar)} bar.`;
  const detailSpecification = field => {
   const { evidenceSourceId, evidencePage, label: fieldLabel, value } = field;
   const evidenceId = evidenceSourceId === undefined ? primary.id : `october3c-tools-${slug(evidenceSourceId)}-p${evidencePage}`;
   if (!demandEvidenceIds.includes(evidenceId)) throw new Error('Source de caractéristique complémentaire non documentée');
   return { label: fieldLabel, value, evidenceIds: [evidenceId] };
  };
  const specifications = [...row.details.map(detailSpecification), ...connection.specifications.map(field => ({ ...field, evidenceIds: [primary.id] })), { label: 'Portée de la pression dans la source', value: row.pressureQuote, evidenceIds: demandEvidenceIds }, ...(flow !== null ? [{ label: missing ? `Consommation ${regime}, hors calcul` : 'Consommation dans son unité originale', value: `${row.flowOriginal} ${row.flowUnit}`, evidenceIds: demandEvidenceIds }] : [])];
  return { id, slug: id, categoryId: row.categoryId, category: row.categoryId, label, brand: row.brand, model: row.model, mpn: row.mpn, ...demand, ...(connection.connectorSize ? { connectorSize: connection.connectorSize } : {}), ...(connection.recommendedHose ? { recommendedHose: connection.recommendedHose } : {}), confidence: 'B', image: { src: `/images/products/${id}.webp`, alt: `Repères techniques : ${label}`, sourceUrl: source.url, sourceLabel: 'Carte technique CompatAir, données déclarées par le fabricant' }, variant: { familyId: slug(`${row.brand}-${row.model}`), label: `Référence ${row.mpn}`, distinguishingAttributes: { reference: row.mpn, ...Object.fromEntries(row.details.slice(0, 2).map(field => [field.label, field.value])) } }, editorial: { overview: `${label}. ${summary} ${row.details.slice(0, 2).map(field => `${field.label} : ${field.value}.`).join(' ')}`, verifiedFacts: row.details.map(field => `${field.label} : ${field.value}.`), limitations: [missing ? explanation : row.flowBasis === 'maximum' ? 'La consommation maximale est déclarée dans les conventions du fabricant ; les exceptions explicites du modèle restent prioritaires.' : row.flowBasis === 'load' ? 'Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.' : row.flowBasis === 'per-action' ? 'Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.' : 'Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.', ...(row.pressureScope === 'power-and-speed' ? ['La pression de 6 bar est donnée pour la puissance et la vitesse ; son application à la consommation n’est pas supposée.'] : []), ...(row.sourceLimitations ?? []), ...connection.limitations, 'Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée.'] }, specifications, evidence: [primary, ...supplementary], fieldSources: { ...(connection.connectorSize ? { connectorSize: [primary.id] } : {}), ...(connection.recommendedHose ? { recommendedHose: [primary.id] } : {}), mpn: [primary.id], workingPressureBar: demandEvidenceIds, ...(missing ? { demandExplanation: [primary.id] } : row.flowBasis === 'per-action' ? { airPerActionLiters: demandEvidenceIds, actionLabel: demandEvidenceIds } : { airflowLpm: demandEvidenceIds, ...(demand.airflowBasis ? { airflowBasis: [primary.id] } : {}) }) }, notes: [summary] };
 });
}
