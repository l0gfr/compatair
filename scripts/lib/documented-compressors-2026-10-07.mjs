import { createHash } from 'node:crypto';
const sha = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const documentedCompressorIdentity = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/(?<=\d)[.,](?=\d)/g, 'd').replace(/[^a-z0-9]/g, '');
const norm = value => value.replace(/\s+/g, ' ').trim();
const fmt = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const rounded = value => Number(value.toFixed(3));
// Separators are declared by source cell; a dot is never globally treated as a thousands separator.
export function parseSourceNumbers(raw, numberFormat = 'decimal') {
 if (typeof raw !== 'string' || !['decimal', 'spanish-thousands', 'english-thousands'].includes(numberFormat)) throw new Error('Format numérique primaire inconnu');
 const tokens = raw.match(/\d+(?:[.,]\d+)*/g) ?? [];
 return tokens.map(token => {
  const valid = numberFormat === 'spanish-thousands' ? /^\d+(?:\.\d{3})*(?:,\d+)?$/ : numberFormat === 'english-thousands' ? /^(?:\d+(?:\.\d+)?|\d{1,3}(?:,\d{3})+(?:\.\d+)?)$/ : /^\d+(?:[.,]\d+)?$/;
  if (!valid.test(token)) throw new Error('Séparateurs numériques primaires ambigus');
  const value = Number(numberFormat === 'spanish-thousands' ? token.replaceAll('.', '').replace(',', '.') : numberFormat === 'english-thousands' ? token.replaceAll(',', '') : token.replace(',', '.'));
  if (!Number.isFinite(value)) throw new Error('Nombre primaire invalide');
  return value;
 });
}
// NIST SP811 B.8: psi -> Pa = 6.894757E3; ft3/min -> L/s = 4.719474E-1.
const PSI_TO_BAR = .06894757;
const CFM_TO_LPM = .4719474 * 60;
// Immutable transcription, original HTTP provenance and extracted-page review seals.
const KGF_TO_BAR = .980665;
const reviewedManifest = {
  "recordsSha256": "c5830c4de101f67d780a6c6bc79afd1e39d5b93cb422921bdcb1502ad5add287",
  "reviewSha256": "9c034d4b08a5db1394f70a2267e6dbec6a6e715abc4bd1c218dd1862ed11c9b4",
  "sources": {
    "comprag-a": {
      "sha256": "4482a7221b44be52f910b29f0e968da8e91012da4cf2e95476d10523d91aede9",
      "provenanceSha256": "0fa2fb92b571eb0ff5e9a3320a0d505e6424c251696017cb556f3e47ac185e2b",
      "extractedPagesSha256": "6a076f830db7604aa3f28f078c5a8332ce93b6b94175a351b832c904a8363a07"
    },
    "comprag-d": {
      "sha256": "002bd4a132d07027227a39977cd04bc9d8acdb1f599a190dc59591e19a9bba7e",
      "provenanceSha256": "f7ae7208ef85e6e295f3e973dfc1a065c33373ca8a8c74d4cd3a8d8c51f69a08",
      "extractedPagesSha256": "d5251d999c5dfd6b7bfd24ff799bd5e52615862dc9d56f332a2e06886a2f49e2"
    },
    "comprag-f": {
      "sha256": "7ed689acf92797cbee40e2606f96acbd93a3b38e760c2ae5bb795cf153044c3c",
      "provenanceSha256": "696e23693ab65920beb50cb6fd1b175bdd3f57ee809ebfda4746ab593f46f4a3",
      "extractedPagesSha256": "b843fa9c948eef11b4f1590b7b5fbbbc31221ff3a3bd1841d393c7247831e7e8"
    },
    "fsc-ep-vsd-110a": {
      "sha256": "213c6f6ebe0a9cefe4798764a62e9c11a738a4b9a2a723b7785f7831b5813a0f",
      "provenanceSha256": "5db56ff2f1149548ccc637631d9e10b03233813a386ab56bbd12c9804718e2b5",
      "extractedPagesSha256": "8c447a799ab8852a132436feba319056a495de59ea1b195a1f9fe5adf0af2fd2"
    },
    "fsc-ep-vsd-110w": {
      "sha256": "0567aceba96c4169fcc1bfe49cec6476167d860f16f14d3ec3394898f7e4913b",
      "provenanceSha256": "4c68050f910f41892f3fca1d741ca24a7d2a9410f838483de2bc0db9a17e4acc",
      "extractedPagesSha256": "4d78860c3fbc7eb2929d78f9a7a688b6797fbb328b2b56fd6cdb6aa00267bd4a"
    },
    "fsc-ep-vsd-132a": {
      "sha256": "241923ec8654603e273d4d6bb600bec4b5f1cd03b150feef2f0ced1fe620ee56",
      "provenanceSha256": "06e2e678025bd2f35ea4110fb83c73889991cf5e475f35a39bed0498f835c7e3",
      "extractedPagesSha256": "bb61c08141beaccbd7174700f351d5c3d484ff1c95664308ccc0f6f19fb04aea"
    },
    "fsc-ep-vsd-132w": {
      "sha256": "c0dd8228dae0e4703b6899b8d444094de4c0cedb128e9acd6ac4ca2276743c02",
      "provenanceSha256": "287dbd61725abaf66ff47a80565ab048295d860218e63f8eea0dc84c478a2786",
      "extractedPagesSha256": "345be4af8356d6dea66380a7fac789373639132e2a34067fc6177fc043d79d50"
    },
    "fsc-ep-vsd-160a": {
      "sha256": "e181963c2db7b4e91a478ad198d2215db828bcae199936f577d2dc9f46e3e784",
      "provenanceSha256": "991b7fdfd411bc91b8fcf60dfee89df1bb16be5cef6afca557c5b13bc88457bc",
      "extractedPagesSha256": "d6d5a153b154fd16796db6e5534baea0b9faf6427a56ea1282cb7e633f48dec8"
    },
    "fsc-ep-vsd-160w": {
      "sha256": "6638a16989b1c1365099297cdb5d83d5c6dcea52103cf226cd87c3d2600fa55e",
      "provenanceSha256": "26a036a861ef5dcaaf0488a05d7786ddf1ba61ebc8e2406b0978c5d2746e15dd",
      "extractedPagesSha256": "6dcc00a90ebcf4500d00448d6f02c78877fd0889f3852c6bb52770a523615f78"
    },
    "fsc-ep-vsd-200a": {
      "sha256": "7fb41852377920266bdc688312a891f007b096bada82bb9884ebeba2078936ac",
      "provenanceSha256": "fa529dda854d47b0d2f6ed5fc5ca5b8187dc28b304ac636b15e0d461c0cd93d9",
      "extractedPagesSha256": "0a33ed4c761b5b9337cf58deaafd220858468a3c790810f6be573778b3e63ab0"
    },
    "fsc-ep-vsd-200w": {
      "sha256": "85772b2c0d43c67e137a3d74c12e7d85b5826e01d83c9c92efa29c5993875c36",
      "provenanceSha256": "b766a2099fcd7e4ffe4553fbeba154800644c524ee66a98aa90b3f404f5f52c7",
      "extractedPagesSha256": "2621af46724eccc0daffa3518cf16ce05a7d2af2e69e876162ae3c330fb08a3a"
    },
    "fsc-ep-vsd-250a": {
      "sha256": "ba671d07aa2e382f26a16f2f0a1c42d476fe41441c860e43a04766fd4da6e540",
      "provenanceSha256": "c315df1f55c6a2d7dcf0d5ba3b52a803fea0b8a1bb275fdfcbce94e9a0d1019b",
      "extractedPagesSha256": "66310da3897848a2375c2786b261e71b4ed5b4e4232d9b5dacf972bde2e6e34b"
    },
    "fsc-ep-vsd-250w": {
      "sha256": "2bb69037d1a7f65fceef8d9d61581744ca4fb2245112bdc33d95406cc3da4244",
      "provenanceSha256": "ae9d1e42f15575f854428a12378bf93afc182f1c970e3453e98ebd3e328d5357",
      "extractedPagesSha256": "68e5d5490381c959498514e14c748391f2e0b6193b22d004e143c13c34536a91"
    },
    "fsc-ep110a": {
      "sha256": "f472cb516df0048d6cbaae6b26f530a84acd7a9ae258e542aa420e5b944151ab",
      "provenanceSha256": "471210e4c7269f8d6f7360711b52c3769dd2e0b892b8abb51818488282f7ab2a",
      "extractedPagesSha256": "0438135558334aaa4de7dd8f23ddbe416affeaf5cb4269908965059b4f621e5a"
    },
    "fsc-ep110w": {
      "sha256": "7ec44d95c506833ff0576956109a5a94ea64f2670a2d11da235e1144116a5469",
      "provenanceSha256": "b08e35a7183213f83953dde3646509a5734380b69c4a3f53ce7bd59dbd8cefb2",
      "extractedPagesSha256": "d105a94b894df1fa63aeace4040e38a51f548603ea4486725a0ff818aac8e765"
    },
    "fsc-ep132a": {
      "sha256": "bf8f34de2771cb1e88d3481833e24ca097f7ce398b81aa521e56a57ba1629214",
      "provenanceSha256": "93a366a2f62723a08307863313c096c02d0585423fe3fc9f06c9cc14569139ec",
      "extractedPagesSha256": "3e1245d5bc22180029f5c227df4c11ddd06d5ef142c46f99a07fe4379e170062"
    },
    "fsc-ep132w": {
      "sha256": "4f0f45301e8d59f9fea52ea6044c7bff2dfd4032843f312b9fd16eef05fa7bf4",
      "provenanceSha256": "af42f0f9fd7260cdd1a899d6378b35f295785242d95e48cdb6e16e04ed473d57",
      "extractedPagesSha256": "ad4921ab1a5f64335ba7372afdbd53a2673c38b5ee4eea7a4002339f33ddb4df"
    },
    "fsc-ep160a": {
      "sha256": "5409ef439b571dc17432493499a16272ea69a8832fc43847c2033936edd506ec",
      "provenanceSha256": "7f2f7e29e81472855b2c3b8dd1728949379839884c2b25dda742dc17c9d44d5c",
      "extractedPagesSha256": "0f02c88dc64db403aad87136ddffd10a52bc7ed71cdcfdfd0cfa7d5f5243f2bf"
    },
    "fsc-ep160w": {
      "sha256": "850db9eab7ef13fa6dad395b96efd641afda6f2beec0ec38ec34ddbfb8c61a4a",
      "provenanceSha256": "8e6152a6fb5ed206ee2a14acbd138760d57f3069a9a9346256a5e5a5b14aeed7",
      "extractedPagesSha256": "f47896448396b4ed694960c2b91bb2fb6f736bf6297fd89e8691d1e7b2a2b730"
    },
    "fsc-ep200a": {
      "sha256": "9f4f249802ae9150f16b6fa6e9ca911c583735e96f0c6e760f7cbcf9fe43607a",
      "provenanceSha256": "77d8cb1c1c573e8f09f7be9b5f4b9dfe951c4b4be6c825e850576235753f39c3",
      "extractedPagesSha256": "db964fea8b920fc037301e8c51a9e1aa452e169589ab4e589ded888d423483ef"
    },
    "fsc-ep200w": {
      "sha256": "77d4469bb821559ad17fefbf5bafb0df528aa6b1a48340f24af5e4c9e402725c",
      "provenanceSha256": "6e01b2cd822fd309cad2b2778eec34a52983173787d9302e21b9f1f7c13d135a",
      "extractedPagesSha256": "ed06b6b52dd02aa3e210f910624b6ad4001ec39fb7661f883512d933a72b3ded"
    },
    "fsc-ep250a": {
      "sha256": "ba6459a7cc31c7c5aaec02edd847d7908a88bcba425e2c1c6eaca82e6a3b128c",
      "provenanceSha256": "5795d598078a2ff0de691abe542bd676e62c875a27c5189d77643b76cafa42a8",
      "extractedPagesSha256": "403ffa7b8ee46bc33cea2b0f45e0884edbc8de2da978cf9b0d5963408ec5aff7"
    },
    "fsc-ep250w": {
      "sha256": "82d319b42197bbcca2b298196dfae0dd8f07775e97bec250072720ce796fe057",
      "provenanceSha256": "13acaf3bf7cae4076aaa56576f73a1e0141c803d7531d1b375f777bba1a7319f",
      "extractedPagesSha256": "e9bbfc24f923d9d0d6318dafe1efbb159755bd642f7c4619103fc1634e444bc8"
    },
    "fsc-nx-big-page": {
      "sha256": "f363f98dc62aebd02a6ddd17e5307165a0536c866440674420dc1f1b43692801",
      "provenanceSha256": "ad30f79b9ba658d6a654ea1c2adf0a394de5795707085eb3cbe4f859b98aedf1",
      "extractedPagesSha256": "071fd8fbbed02bb6c44e23486028542d09ca2d604ab879d78fbe40e45b2a4017"
    },
    "fsc-nxb-page": {
      "sha256": "b0be43311c4d86d4c354f3f1f204f91213651508c911cb7051b7e2b9b9b2ddb8",
      "provenanceSha256": "2cd1017f3e454059b87ce1c6ac4457901d10b676adc2aa8807b48c0b9b91a9f5",
      "extractedPagesSha256": "6c07427d5635c71d903036140f904c4c5e4b68c54fb84009c252d4ef3cc8ec2c"
    },
    "fsc-nxb04": {
      "sha256": "cfdda7d48c77bf8e0fee514681e0d82e8a471b391c23fb282d55c14c32a8a4a1",
      "provenanceSha256": "8b13ebec64ee076c2ea1115d11f88224b43a98a7fd69411379065ed08e091076",
      "extractedPagesSha256": "9757797e1e3ba815f19b3dec24577c541798a450cae89fac89b8ad939b1d8bc8"
    },
    "fsc-nxb06": {
      "sha256": "9b5ccf4a93dd0d049c4e35fbd9dac48f981fc50d40edf46b7ed897bac333924d",
      "provenanceSha256": "2c1520ee704c7ba5647475be92bc6c5d68930c3d8566a8a6a7dbb6d4a6a8fa5c",
      "extractedPagesSha256": "0537364c1452796f3c37d51d5e5f0060d8e2a07bb3f5d206f4fe195eb2abb464"
    },
    "fsc-nxb08": {
      "sha256": "5afb7e084a71388be6cc5b3a5e9020e7adfc3464da13fc4d782ff7548e329a43",
      "provenanceSha256": "802bcbc73b792cc5af0c3cddcf87f3f85d6df373b52595a340af81c934cd847b",
      "extractedPagesSha256": "27012b422314478bf5e741938d39cd0e881e086d88339c0d56e35c66066b00ad"
    },
    "fsc-nxb11": {
      "sha256": "5454689d2be28e849eca6ac87c1aab6efb3aaa5d15744a21648b079fe39d53bf",
      "provenanceSha256": "894dc0adb589eadedad1970afcc625f18383a202a00643e376549b6f5d21c7c8",
      "extractedPagesSha256": "8425318a9085c742f3483bd2b08d869d405f3e6ae4b99c5e3c11dfcfccdc2dda"
    },
    "fsc-nxb15": {
      "sha256": "363a2bccdaf7f640b483ae3b1956098abbf94f6c0687e36ab73031de1321cb22",
      "provenanceSha256": "fcf2570d31140206dc182e7e3a0be1f7236f494c8d29c6649c1a4f19ecf50346",
      "extractedPagesSha256": "d56d42a77f5f648e36fd1b69af90f6a587411b860ee6e93999a0d14a4b75b9a9"
    },
    "fsc-nxb18": {
      "sha256": "d976de6142924168d838cd3ef265b43c75ba59654a027ed1244f9a8a869cd928",
      "provenanceSha256": "8ed63856b18c165ae7356c2aadf99c965a30829712da464ca2f98aab1613072d",
      "extractedPagesSha256": "e7cb4d83b86c2ed0be13e7c96df4caeac95e5677573b0087ee1dadc9dc89e834"
    },
    "fsc-nxb22": {
      "sha256": "763c8f32b2c98356a5125c70918a1cd96bd8bb5f8cf4ea79e8c05447d669befc",
      "provenanceSha256": "19174187b094ac43f9a9e498ed852f7806bee281063297f9f7e5af7eb7f642e4",
      "extractedPagesSha256": "908a6e61e2da90e54442384a13231fc0653b552a372313524cbee63cc36e8268"
    },
    "fsc-nxb30": {
      "sha256": "c85ca2efb23e64a2d87bf1e368e2a9113e7c2f911467a94b8020aa50a0f17dcb",
      "provenanceSha256": "343a2a752ddaa7ab02fd3a2325847be2d008769367e51774bf06253e18ff1945",
      "extractedPagesSha256": "acb16f3b57658e9fdecd18d875ea699b34ccfff0041cff1759cc18241c357e5e"
    },
    "fsc-nxb37": {
      "sha256": "a3a6882ed128d661935c9a3662c3489456a54714491eee05d047d8d92ca844c9",
      "provenanceSha256": "5bd51f6c0a0b973a1e38e4c553de96e92eb50cfebe6cbdb3637ac8f046b72f9a",
      "extractedPagesSha256": "c5ff6904683eab074bdf4c4050f24b2f8def7cbc5ef69bb7b2b9affe3f26f800"
    },
    "fsc-nxd110": {
      "sha256": "47a19250d9fa4e4696624b38ea6bd5bd4e5fcb2865d103ea34e6f0353e1e56bc",
      "provenanceSha256": "9c45df0aa593927a3efff801306a9c0ece5fcdfa53d166e74b21028b498f1a2e",
      "extractedPagesSha256": "9f6aebfdd13c40a670831297ee9e0efd1e72693d610facdbd2c8516f3b401008"
    },
    "fsc-nxd15": {
      "sha256": "749e8695851fcb174c59e460576dba2d080f3e90c96a0a719690ae5d616f55c4",
      "provenanceSha256": "071c931fd02e3b75d412efda7b560ca1c0b98527c166e8f77cabf26735be0f4e",
      "extractedPagesSha256": "3baacf3af3253253c427c45334e65dc95b1baa37c7bffb343335e118fab939e4"
    },
    "fsc-nxd160": {
      "sha256": "e28ea1574389b864d55461cf65980dce15c0a4b51c1c94ec30ccbeb43d43a603",
      "provenanceSha256": "689d57b952bb5ecd2073faacf55c71633a86b726521712804b1b792d86f42c95",
      "extractedPagesSha256": "3bd97978e140b7cd9f8616f58ac4dcbdb37d9c6dcfad18b842793b7412a5f46e"
    },
    "fsc-nxd18": {
      "sha256": "35bce06a9e0bf9bdab46da99bdabca72ffc3c3eaae4c140be9c4e86c625140c6",
      "provenanceSha256": "d119211e09253efe23481fc40b6b2169ba954f51ec253bc972470bd1aadf754a",
      "extractedPagesSha256": "9f05baf3ba28092575611016d03a46d957e7c4b368d93cbe73ecc7d932cdf8dc"
    },
    "fsc-nxd185": {
      "sha256": "c1844fbdd94376bbb26c79ff63fef22069570f18bd5b81bb277147271cb6eafe",
      "provenanceSha256": "7a4f57e47a6ed1194e7860e4ae6775379c52b2dc29b3f249e6ebd50698586a36",
      "extractedPagesSha256": "13b8ce74a73ed75656f743e7e34d1bc3ef76cc90d983003c75492a8777d0b2db"
    },
    "fsc-nxd22": {
      "sha256": "586d440a21001306b70edb44df250f52ce212f18539589d1fe1cce282024c57d",
      "provenanceSha256": "8b2cd0725c3f485473e07969c4d01fd73c32e8df5d99d07eebbac414137b3542",
      "extractedPagesSha256": "cfbe8fc6fab324089cb2da4bda5ff172ff19c3fe232f1153d99917f684979966"
    },
    "fsc-nxd30": {
      "sha256": "c97584945928a59c4a4d124f14f8ac47e6fd6e60e292775c95e9581a13dbe98b",
      "provenanceSha256": "131fe3c5bb8e731f9c3bb35c8a1a4e8d8c7bbcf69c11b9fdae983c2cafaaabf7",
      "extractedPagesSha256": "f4a8e5dae1ffc7f6afe6d91061b6629eb2bf4fb4a43304fab2717900a70e0265"
    },
    "fsc-nxd37": {
      "sha256": "9859637a5e9f57b80a2c142494667c11b5916804774c23dae7eb71301743a960",
      "provenanceSha256": "bc47d524f8599e909b1563dda997cc6fe52bbd69da0998e67cc4fb4a47feac7a",
      "extractedPagesSha256": "b543ab442c4c07bb2c44ea92195756edad02922d8e6db1c4d580ea04e6f421e8"
    },
    "fsc-nxd45": {
      "sha256": "4aef0864681f6d76136cf34ed3c3548131f48355633ab0611ee41c827b46677e",
      "provenanceSha256": "6b97b7b0622014acb31d68e829c147041a945c389d6fe872bedd022248024adb",
      "extractedPagesSha256": "a3cbb623d399ef1616b48c44afe9fbedc9001eaf4b3032575dac80d1501f36ae"
    },
    "fsc-nxd55": {
      "sha256": "4a79ed77d2369ba911185a95f0206a25465f2ca818538f4b820a1a928deafeeb",
      "provenanceSha256": "585950ab503c88499f3e6df28492bd1075680a9dd70a5ca27ffaf5ad128aabfc",
      "extractedPagesSha256": "44b4f0befb38a4c5357b0414ac61a0f6a95d9097fb32da834508e6f2f4a54f64"
    },
    "fsc-nxd75": {
      "sha256": "643b2c19ef854b8b314b481c4ac971edcb0ad06c5c79d91854243c980c90dade",
      "provenanceSha256": "2607a0e2e2e84b91395cff868cf0e5d19639f85497b1f31a08e656b6a28af75f",
      "extractedPagesSha256": "c09805c2caacdea2e38078cee85b2e9f34973e928f94d324687653b9a742d1eb"
    },
    "fsc-nxd90": {
      "sha256": "308724868d7fe79af31d60ae5b5827370a173811f8a7451f03cad8bba6fceb50",
      "provenanceSha256": "5716fc1178937ac4dddbe700daeff751c971d68f7ca1767afb1c4b081b0a07a9",
      "extractedPagesSha256": "d6c5c095829e50cc6407b3ca5f491526d8c683c48955582bddd29014b633e77a"
    },
    "fsc-nxhe110a": {
      "sha256": "116b4a9e2ffb72113cbf37cb264280a45a1fdbebb440440407aa5e18566c073b",
      "provenanceSha256": "511ad3b5c7149b920a6dc44947fc839782054a7e947d028dc92632e6fb53606b",
      "extractedPagesSha256": "80555f0da8ce6ded7d91140148349261b92b12f51d305834e4499b6233c5191e"
    },
    "fsc-nxhe132a": {
      "sha256": "7fdc8117c020a14771c0a02f9889a0f69621224d71f9d68439e9edb09cc761a7",
      "provenanceSha256": "fd0bf431abf4df6ea23a85ed5a67926a879b99451c41da218a0edcd706f47621",
      "extractedPagesSha256": "6623eef19a3adab5ae268deb4226e5e027eb8ce62894e3af1f85f0677c9d0c92"
    },
    "fsc-nxhe160a": {
      "sha256": "9a6a78d183cc81b03fe871abbc02a24a8ce547952baa82b7245968195b98174e",
      "provenanceSha256": "05007ae9dccd6d79ae8a569848b64084f2fc173bd5b22ce33b0003fa34576842",
      "extractedPagesSha256": "237ee17007e3cf8d1ad60bcbc97858cedf57e5068afeee9f7c843a7ec68a6c34"
    },
    "fsc-nxhe185a": {
      "sha256": "03c0d71f61b37fd4f364b0ffbb0aa13d4cf1b88b5df70151ef8fb70f14a014ac",
      "provenanceSha256": "e8ec9398634de6fa7af9080391df06a5e782aa3764076ea2106a7d13c639bce0",
      "extractedPagesSha256": "28e984f99ef20b0238f86efc5a0c9ac33c990698753a03e1fab54786bd1a9259"
    },
    "fsc-nxhe200a": {
      "sha256": "fe2c8a60d8c6aeafd9063584ecce3e0446b55d0a76e01a4fa4b70f2f0b087848",
      "provenanceSha256": "9ad7bdf2e74942f5a98ac1f68d5eb18ab1056c6c3226fbb8226226f6b55c5a9b",
      "extractedPagesSha256": "b12e81e4e60a01d450cda1d3162888a42e3072642bad8e1e1b93a439093b3e13"
    },
    "fsc-nxhe220a": {
      "sha256": "62a2dc1fde5990d5e5fbe64d7b900afcc2a4617055880d3e836a2f33414a1def",
      "provenanceSha256": "2d4fc9283e6bb1cd09f610687781a00fcfbc09b8ebf4e34efa60e596f0ba7c5b",
      "extractedPagesSha256": "940280e4911c369be1529ea0008c47ca1a9b61fb98e57e9e189111399ee6a1a0"
    },
    "fsc-nxhe260a": {
      "sha256": "4ed3f0fb0dba764f25ba6bbedd62da875865a7895a2e3bdaf96fad6f90c2ceab",
      "provenanceSha256": "9033330746245dcbddb079d69257b4e6b21ea195b531c0ce850575ddd385c381",
      "extractedPagesSha256": "3ceefee54a16d3ec79922f9ac7f71c84e7ad277ec49c5dae93044e599c629843"
    },
    "fsc-nxhe90a": {
      "sha256": "9fe69fe82c9c10d876011d51f0b696c4c60d63bb44c0da3fc3e5c75d7c88bc94",
      "provenanceSha256": "dcdd903adb476739e98e65513d9b8509932a95b890974d10a2f8ce1635dc90e3",
      "extractedPagesSha256": "f777d018f3717f2f2e4499846cd8d413b881046edf600cc68e487f9f50a5a9cf"
    },
    "fsc-nxv08": {
      "sha256": "eae3cbbdc170ef0b28052df53b06ffa95ce5410fa978be47c8ac6a2b7acc32bd",
      "provenanceSha256": "966e6843cf9936052877b78d73679b6c8ebe671b9d0f716447f063149297ec4d",
      "extractedPagesSha256": "962e21c71d2431b8484429d3742a5f31115a71be8caed41e2ad44b4a459fdc12"
    },
    "fsc-nxv11": {
      "sha256": "2d6a6c9312ad468c37973eb1952ab7ffd7f65d4f733fa3462a6fa5cfa1933eac",
      "provenanceSha256": "e6b82781978122cc0ce9a3c57064e41376c1380c40b136254107e9aaaac2adb4",
      "extractedPagesSha256": "debb105ff257ebc6d890e925f7e8916a8532a8aea172ea14102d543d88faf6e7"
    },
    "fsc-nxv110": {
      "sha256": "20ba5e97ba4c4538bbd62b8b57b750fea7eb1a89c3d9abeea11211e4a89db31b",
      "provenanceSha256": "bcfb06c9184da0c732c62db81bf844dd925d40fa4497e4e1aa9d26da33041ed8",
      "extractedPagesSha256": "25a1f5a96b1cde349447590d542ae41b07a7aeb11cfa59732404f3b96158a00c"
    },
    "fsc-nxv15": {
      "sha256": "558369daf6137becd63b7adba87aead3e9bf6c47105873215ae3feeeed62589f",
      "provenanceSha256": "41974c773cc101da83d8805cb30b9ee811781f7c0361c720a52879135367a452",
      "extractedPagesSha256": "42ecb222e62a87a50942ba2340aad9260c5f7f4f2503f0138ee05eeac00124f2"
    },
    "fsc-nxv160": {
      "sha256": "689d21913ffb57766aae24080dfcf00c8a22a0716cea4e463d7533f01c0feb42",
      "provenanceSha256": "d7bfd682a99fce8fe1436da7936f48e66167f2703a5d33d21244c4b1d1e9b2b0",
      "extractedPagesSha256": "330a248c37f712134d31c7d473153805ac252f8b2a2860d82d14bca58647b73c"
    },
    "fsc-nxv18": {
      "sha256": "faaf26f3b4c9533c7b64d5c6aea1b889c33077e62cafffad60fe19e89ae675dc",
      "provenanceSha256": "b5790e26c38ce232d3476e40044cca164885f9773134a9a85d58a5851e4b5ede",
      "extractedPagesSha256": "432854487c375d3989da2ee7431e61e4134de8eb763a18149762aff78cee60d5"
    },
    "fsc-nxv185": {
      "sha256": "858c81f79fc12a6fe2b6baabf2411bafdfc0b57c65cd9b730e74fe14664978cf",
      "provenanceSha256": "fadcb1fad7fd8ef971540d53a6b36f60b3bec4502ac842d53c5f3279ff314a65",
      "extractedPagesSha256": "d689bc28f2d46d112b138730d79b6ca90e5c68aede5fb9a989cdc814ddbdc6e1"
    },
    "fsc-nxv22": {
      "sha256": "78c5f5309028cccbfaae9fe721a45ad8ee1f849f1dbd0153757fad69486ddb70",
      "provenanceSha256": "1b1a7d25ead9a12463dc890d3c62c473c5f603de058d129e426568464dc39d30",
      "extractedPagesSha256": "fc69b31107bdd6dbc9c745a63496d13c94825cda387a96bf3855126b0f474e5c"
    },
    "fsc-nxv30": {
      "sha256": "96b36947c9cc2324a66c26aa459ad548f39519bda9a242fd0e1281b625cc182c",
      "provenanceSha256": "cfcb4c8a6515aaf3904fd5a37678102cf5d279079e7e297d949eb081de908f1a",
      "extractedPagesSha256": "b92293556d9db56611250f06ba8425e600dac8d962c482b1e8de949897bcbebc"
    },
    "fsc-nxv37": {
      "sha256": "582b3c584dfc8500186d2d23414081e9f283ca0a2fc15a43aac4385d33ddc4bd",
      "provenanceSha256": "545412d3ed8dbc437e7a9edd1f095b715f277f1a33d68a6fa9a7fd736b0b0c6f",
      "extractedPagesSha256": "d56d3185daa87b9958afcd405821bc985e384779a3ad5c5638e9b5f9ef675885"
    },
    "fsc-nxv45": {
      "sha256": "cb3e13c95a8361dda4531e2236b4f9ac21736b5326aae32b16a2ee2b0da1cea7",
      "provenanceSha256": "9ceabaafbb0b175b766352593edaff80da2e4d286ed882edb22ba73129bd30ce",
      "extractedPagesSha256": "818c4f12f150939423206dc31fef91bc419e54f98b72f63a9ab549ff439d13e6"
    },
    "fsc-nxv55": {
      "sha256": "92fd8e49b37f33eef2184fdfaf44ae7864124425df94f0f1f89eef4cd5ca77dc",
      "provenanceSha256": "55844ebb332d199fac310081c57f457f946ad09c0442065928eec55242cbf621",
      "extractedPagesSha256": "a8a92aedf93d682bc1fb965c7cd2d63710eef1bb6e4f7fcd71957d6430fb36f4"
    },
    "fsc-nxv75": {
      "sha256": "effc256cd48eb87c09fb93e4818faa16670eea348e7a0e16426286d8f0d96932",
      "provenanceSha256": "acd38fc0ac14ea6e252ac1a4afe3500e41f98d55556359d13b56704f87b05851",
      "extractedPagesSha256": "526ed01860ee394a0d663a36e3982ce48faeb362357df76bd12cd3d615e5a6e4"
    },
    "fsc-nxv90": {
      "sha256": "5f5f69b16e6c236f5be6953b6c5abb85873688a0f50f423fdf59737e8b929879",
      "provenanceSha256": "e0a55a5dc10c60b8ba7d575bc9f62b99ab4b2d7ee73982d604249b671bbf3bd5",
      "extractedPagesSha256": "ead0dc6ec1b1604c296f2fe12f914ad09f664b7c6f0d8e7ad044123e5ce36a5c"
    },
    "fsc-rs100d": {
      "sha256": "13e74274a2a0c082b49e85601a16c925ede49c07748ac5fbb29784a3cde44f2f",
      "provenanceSha256": "d6163b46b4d2ec05677e50ffa6f60d8c4659b716c1f8f5387e3b00d26f713ab0",
      "extractedPagesSha256": "2738dbafa990a227e14de0e957423cf0b19578caf474c7458b6343f15d383014"
    },
    "fsc-rs125d": {
      "sha256": "0755bbe5dd58c458e283e525b04ff8369ecdd101bb8a394ae089a6d396b1a905",
      "provenanceSha256": "6f5d61e2ee8e8f774ed970db8add097776e4d62d6f9658d14fa65528c92c4854",
      "extractedPagesSha256": "e5f1591a205cd49fb178422c54164ee0d7aa841e1d33fa65e0da9d6edbb7ca48"
    },
    "fsc-rs150d": {
      "sha256": "e0707850d5c4d9414936c136360137308ae510db2763d7fc5cfb028d46b5a134",
      "provenanceSha256": "e03f670288bdc962274e7544723dd6151c3ba74796c2f2409ba5f0cade0171c4",
      "extractedPagesSha256": "50d2eab45ed33abb8252a8e6a6c78f637eb20a0f96fe4148ac25a7dd8ccefe5f"
    },
    "fsc-rs200d": {
      "sha256": "6b919724f96175d293ddfe71e347c690c8b01261bb147b51e8732948c2572946",
      "provenanceSha256": "435e95af8f2e27206f0baa8750894a630d3c31c18a3cd25539ab1624781d102a",
      "extractedPagesSha256": "cf21f3fd81a3d80973b71341c08f22f74f2fca9f0bf60fe558ca83e7f51a5d36"
    },
    "fsc-rs250d": {
      "sha256": "8e18d4498812bfe4b5b77c356c45260c6ea606bd185989457c39d857892ba94c",
      "provenanceSha256": "d8b33cfd1855f009a4c6277e17b2113744c05e2b1e43d5ba5eb72e64ba7816a7",
      "extractedPagesSha256": "eb58d2584e593a49d3f09d48abe049552d502bd66119c0532f2ddf3010bfc0c4"
    },
    "fsc-rs300d": {
      "sha256": "83b6ac6183fbf5556e30f3d05773e38ac7dff0e993426ce88d754b4cc862adda",
      "provenanceSha256": "ab96452455780c47a03e8719f33f2493322e0dafa196545602aa8bd674c66798",
      "extractedPagesSha256": "432ffc2575b988ffc597b5b2add286d74a22ab0f8448a98e64be1e276f21ac31"
    },
    "fsc-rs50d": {
      "sha256": "c2361e1c19fb7484e22c4167461dcfbad2ea7e7a9b4a72be09e96ee3d5a085da",
      "provenanceSha256": "a685c7d3550e6d996d9dbd8a07289e8201fd1f995d46010624b79414edd4c5d2",
      "extractedPagesSha256": "48caf2bfad5c88517171a200e520dd3e196a74d51bf901c8d9fc5732e39383a5"
    },
    "fsc-rs60d": {
      "sha256": "e9a1e9a7deb1b46bf67956c60663998172da44281786d75eca9f0f04293a0182",
      "provenanceSha256": "f06cd08d8b97e53f70a3764ec7b4f0b57c2e877f1b7ea7a82f3bb4880967e8d1",
      "extractedPagesSha256": "38e570761b8d192502dcead5e1a702a6d918ec2f0525a399ad871836e291e43f"
    },
    "fsc-rs75d": {
      "sha256": "77ec90711f06390ea1d84c67d16c4fed0c238d7aa42927f7e4a52555af428f00",
      "provenanceSha256": "71f8072c0fcae5f2bf28a8bfd57b6e734074366555bec38f1f1fd75e1aa03ccf",
      "extractedPagesSha256": "bd05e3d3ae0790cc2fb3c3cbdbf17f8a5862e9a7f21def06820678870e1709db"
    },
    "fsc-rsb15": {
      "sha256": "f89bc58913f6d934e558e7bec03f6720069c16ae2814e6f76f670a7f44c233b8",
      "provenanceSha256": "918d36638c24d7cff11f7f04a176c43f43c46f3f25f15f5bba3f5157fec1ada2",
      "extractedPagesSha256": "81c7a6557d83f5b35695327ecf1ee047c1563d04b715dfd696f970960cd73adb"
    },
    "fsc-rsb20": {
      "sha256": "f215422f46383181e5526e560920ef980a4895478b2af23d3abb57fb6ffdb966",
      "provenanceSha256": "9cf58761ea711ffdd6cc8a55bcde3fd897dbc0b2e9bb91bd5259293ca19a73b1",
      "extractedPagesSha256": "527c8587561c09c5c918c4c2143bda463144749826fa6e66c834b287afcef922"
    },
    "fsc-rsb25": {
      "sha256": "3378e25a8a1544ca3dbbbb89a5962a6babd46403ce1bb37ccf29826fda39fb1c",
      "provenanceSha256": "158c12d368971034f72fbe99674d00cba7670718f444a1052c13640ce50a2693",
      "extractedPagesSha256": "2e3f6a1227585b36f66ab26233bd09b8c20e5a647be240c7ea38bbd6a34b56ba"
    },
    "fsc-rsb30": {
      "sha256": "b184b38e246da4b8dd89777f39b9261c5de02a0e0a717eadb24e2176a2b9a7b9",
      "provenanceSha256": "f619b6cf139f43c0e99bc2024ce273d2787f92b5d1d3d30828896650bc1b9590",
      "extractedPagesSha256": "0af29fd8929305b1bae75887a8f391c97f6702d4fd1a4046bf6b8f8d870eeb7e"
    },
    "fsc-rsb40": {
      "sha256": "27dd522abd56e6e2a74397cb6308aac695333726368cb8baa5bccc3bdce881ca",
      "provenanceSha256": "5947e475fbdfa71c9beb8a8e21963b3ef9bda70f7bb94b8981ee23f58574c32d",
      "extractedPagesSha256": "5a869001a9ccac3558dacf4d65932d0eea5ee355d7c536de880ec45168caf6ef"
    },
    "fsc-rsb50": {
      "sha256": "628cd2537343da5839ac09cbaaa5100b0bd9f7c43e796deaccb233682323aa6e",
      "provenanceSha256": "9797d1d16e21fafacfb5350ce3af6549120852a84a394d519cc0b64a974291e6",
      "extractedPagesSha256": "03109c6fcc3c86f6b01ce35329f7d011a92978532096a78efb6afd89be5f873a"
    },
    "fsc-tt05hp": {
      "sha256": "54392dc1d24b4814e0839224125ff11df8c990409a830c7eb195fd66f3c10651",
      "provenanceSha256": "9c9f3350d1014d48748dd7990fc87a08f4eda52709daa1734f3c8179c2cb90f9",
      "extractedPagesSha256": "8187ab7f5be1e2a0d73fa505383e196c3c7b7e89c70f4e5987b09e2bd37411b5"
    },
    "fsc-tt10": {
      "sha256": "d886a7895e7af7be625b7ca27d67e49ff41cfa63d8201ba544d91de582ec7f18",
      "provenanceSha256": "023342e45e13f6fcb1c638b98feaaa82c1ee71bff4b53361cf8f5b815ee9e7e5",
      "extractedPagesSha256": "ae4362287f44ed238362e39572ecb660c1c4b0fca4d40502caa06c0030a4788e"
    },
    "fsc-tt15": {
      "sha256": "0f8d96423b02d301ecfef5e1ef38e46dfc578bd7ab1b16c9325f17d19b955939",
      "provenanceSha256": "29709ddd2a5d800cbbad17f888310b9a67c2cdd802dcc0f015a38f7bc838efe2",
      "extractedPagesSha256": "9fa5b2da04e1d2ceb24691a325298da98788f6d96ae5f2026be038639dd6e461"
    },
    "fsc-tt20": {
      "sha256": "aa73d67d7c9072dd9380575600e4ce0c16c90a3bf69c52ab6a691a09edf364b9",
      "provenanceSha256": "2fb61a47bd91401d053b32a87529eb3c4752cc00d9e07f2c4915023aea90e5e5",
      "extractedPagesSha256": "6e5c7d148ce540ca01a4dd12896eef35cf0332244c0d0605847632f34d1ae7c8"
    },
    "fsc-tt25": {
      "sha256": "b5c4e50f6ebd2598553c6e3ed285dc118af371b1cf438bb9d1831792e1af04c1",
      "provenanceSha256": "a21d1e3be9106fed6ade562885753aa07929fef2c4d09f6b5f83fc0975a1423a",
      "extractedPagesSha256": "fe7195cc9d17c249ccb8e40de6a6bee0bc23ac2070e34db188377ab7f9f63082"
    },
    "fsc-tt30": {
      "sha256": "e73be442f23ef288144d9fdc95e9394e85289fa7b02ba506efb394e1c651fa78",
      "provenanceSha256": "25f7bb8f2fc910b66bcf425d186a7e654d300a1240d5e58f64df0fa9bac11df6",
      "extractedPagesSha256": "14c7e3fc886b928fc47f095c5c8b5d3a2353c3ab5180ab024d110f4b45e9d69f"
    },
    "fsc-tt40": {
      "sha256": "ce8f5205f2fc0738ac9a7e34a52bdb206c4d3d5a867b09e3b98e43af65c8d2bf",
      "provenanceSha256": "94507eb24def765ed762a12f03388d7628f8af023a49361b20790f3ee76c2f82",
      "extractedPagesSha256": "33858396e1b5a4b6307b29fb445d7c3e7cd019761c043ffda02d5316a298fc2c"
    },
    "fsc-tt50": {
      "sha256": "ef7c603d91f8119acbd8ef1bb0890cf5ee67ee1578ecd0331b9d833b6dc1373e",
      "provenanceSha256": "d9ae5e1002227342815ad6a5c771f1a20b104102ec9c10dc76925a5a77560112",
      "extractedPagesSha256": "2bd4d9ea5b0f33d088dccf5cfe9d67b0ff04a7c8f34d5de487d743a7e2b088c5"
    },
    "fsc-tt7": {
      "sha256": "4a7e8eb9046515900739849a5546f0d0999b38e791a63a0068b02ec5b73c2163",
      "provenanceSha256": "82bed405454b38c7343fb0ff576e25ab7b6c602cfa773a706e2267da4550265e",
      "extractedPagesSha256": "ab2a8fec7fef667c68720536240b5ab4453c1d469bf29e8a71a1a31f79af397b"
    },
    "nist-conversions": {
      "sha256": "99092c3ae6a5030fdb6901f601cb87d99c07d62f31a164a4a0b6786847c5cc6c",
      "provenanceSha256": "d1ac9720bfef5b6e8ef23185b515ab3df69b9f7bcbc747cf51cbe5f46d20435a",
      "extractedPagesSha256": "c207a0fc464af704f098a252fe45a9cb73aa382fd90b397346a358ae17e0da99"
    },
    "rotair-mdvn": {
      "sha256": "c46081e4b4e881c8aa68ca24a3f3a545a35014031c6793bb91f8a4809e9050a2",
      "provenanceSha256": "2ba4ea34b208f263c2d590d616bc2df283486c274125a696583744eeffef24f3",
      "extractedPagesSha256": "f1120573d0a158a618f2ec9bfb09796a82ce48d8356701a0275f9e92fb99be7c"
    },
    "rotair-mdvs": {
      "sha256": "0b8f6f25287a0bc2991eadf70e37456b9f40c000b4ec239f4d9333ea1435870f",
      "provenanceSha256": "b4e5c065ed6198f838e5a0260b85960293338bc6b2df0597eb695ab5cb402dd2",
      "extractedPagesSha256": "3a9ef3563652a40f6c4c6281a3865fca5350c5b0f370f6b0f1d5cd454790694d"
    },
    "swan-oil-free-scroll": {
      "sha256": "635045671c5533199ad4700a2dc34a9a735c0679bfbda66e6186679350d11e29",
      "provenanceSha256": "ba216962bad8bc083396e78ab684ca75dea265da4cc6f5a38cbc68214bedefc7",
      "extractedPagesSha256": "f6f51849190af386234d346b76db1adc773879a3813859d5be6b5a1ee9852e97"
    },
    "swan-oil-less": {
      "sha256": "ba27dceb7bc711898ad3b2f485fdb7734a1487fb2494d253ac319020abe9821b",
      "provenanceSha256": "1c73f999452300c2ca5ed90b48b5396b607f396096d193114d980d3babfff5e8",
      "extractedPagesSha256": "f6c34574e1f9a50bdf28ea7cea238313461f6e7b101e988509f7b9c2e404172f"
    }
  }
};
const allowedHosts = new Set(["www.comprag.com","us.fscurtis.com","www.nist.gov","www.rotairspa.com","www.swan-aircompressor.com"]);
export function buildDocumentedCompressorsOctober7(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-compressors-2026-10-07' || snapshot.observedDate !== '2026-10-07' || snapshot.baseline?.sha !== 'cc5d36a36aed7c9f4bdecaa5a3bf90543461df6b' || !Array.isArray(snapshot.compressors) || snapshot.compressors.length !== 200 || sha(snapshot.compressors) !== reviewedManifest.recordsSha256 || sha(snapshot.review) !== reviewedManifest.reviewSha256) throw new Error('Lot ou transcriptions documentaires non reconnus');
 const sources = new Map(snapshot.sources.map(s => [s.id, s]));
 if (sources.size !== snapshot.sources.length || sources.size !== Object.keys(reviewedManifest.sources).length) throw new Error('Sources documentaires dupliquées ou manquantes');
 for (const source of sources.values()) {
  const reviewed = reviewedManifest.sources[source.id];
  if (!reviewed || sha(Object.fromEntries(Object.entries(source).filter(([key]) => !['extractedPages', 'extractedPagesSha256'].includes(key)))) !== reviewed.provenanceSha256 || source.sha256 !== reviewed.sha256 || source.status !== 200 || source.captureMethod !== 'original-response' || !/^2026-10-07T/.test(source.observedAt) || !Number.isInteger(source.bytes) || source.bytes < 1 || !(source.contentType.includes('pdf') || source.contentType.includes('html'))) throw new Error('Provenance primaire invalide');
  const addresses = [source.url, source.resolvedUrl ?? source.resolvedOrigin];
  if (source.resolvedOrigin && (!/^[a-f0-9]{64}$/.test(source.resolvedUrlSha256) || source.redirectPolicy !== 'Temporary public asset redirect retained only in private capture metadata.')) throw new Error('Redirection primaire invalide');
  for (const address of addresses) { const url = new URL(address); if (url.protocol !== 'https:' || url.username || url.password || !allowedHosts.has(url.hostname)) throw new Error('Adresse primaire non autorisée'); }
  if (!Array.isArray(source.extractedPages) || sha(source.extractedPages) !== reviewed.extractedPagesSha256 || source.extractedPagesSha256 !== reviewed.extractedPagesSha256) throw new Error('Extrait de source primaire altéré');
 }
 const page = ref => { const pg = sources.get(ref?.sourceId)?.extractedPages.find(p => p.page === ref.page); if (!pg || !Number.isInteger(ref.page) || ref.page < 1) throw new Error('Page de preuve absente'); return pg; };
 const original = ref => {
  const pg = page(ref);
  if (ref.visualQuote) { if (pg.visualReview?.method !== 'manual-transcription-from-current-original-PDF-render' || !/^[a-f0-9]{64}$/.test(pg.visualReview.pageImageSha256) || !pg.visualReview.transcribedLabels.includes(ref.visualQuote)) throw new Error('Transcription visuelle absente'); return ref.visualQuote; }
  if (ref.quote) { if (!norm(pg.text).includes(norm(ref.quote))) throw new Error('Citation primaire absente'); return norm(ref.quote); }
  const cell = pg.tables[ref.tableIndex]?.[ref.rowIndex]?.[ref.columnIndex];
  if (typeof cell !== 'string' || ref.raw !== cell) throw new Error('Cellule primaire absente ou altérée');
  return norm(cell);
 };
 const number = ref => { const values = parseSourceNumbers(original(ref), ref.numberFormat), index = ref.numberIndex ?? 0; if (!Number.isInteger(index) || index < 0 || values[index] === undefined) throw new Error('Valeur primaire absente'); return values[index]; };
 const numeric = (claim, units) => { if (!claim || !units.includes(claim.unit) || !Number.isFinite(claim.value) || claim.value !== number(claim.ref)) throw new Error('Caractéristique chiffrée altérée'); if (claim.ref.numberFormat === 'spanish-thousands' && claim.unit !== 'L/min') throw new Error('Format espagnol hors cellule L/min'); return claim.value; };
 const pressure = claim => rounded(numeric(claim, ['bar', 'psig', 'kgf/cm2']) * (claim.unit === 'psig' ? PSI_TO_BAR : claim.unit === 'kgf/cm2' ? KGF_TO_BAR : 1));
 const flow = claim => rounded(numeric(claim, ['L/min', 'm3/min', 'm3/h', 'cfm']) * (claim.unit === 'm3/min' ? 1000 : claim.unit === 'm3/h' ? 1000 / 60 : claim.unit === 'cfm' ? CFM_TO_LPM : 1));
 const seen = new Set(), seenIds = new Set();
 return snapshot.compressors.map(row => {
  const id = slug(`${row.brand} ${row.normalizedModel ?? row.model}`), key = documentedCompressorIdentity(`${row.brand} ${row.normalizedModel ?? row.model}`);
  if (row.id !== id || row.normalizedIdentity !== key || seen.has(key) || seenIds.has(id) || !documentedCompressorIdentity(row.sourceId === 'comprag-a' ? original(row.modelProof).replaceAll('А', 'A') : original(row.modelProof)).includes(documentedCompressorIdentity(row.model))) throw new Error('Identité primaire altérée ou dupliquée'); seen.add(key); seenIds.add(id);
  const evidence = [], fieldSources = {};
  const add = ref => { original(ref); const source = sources.get(ref.sourceId), pdf = source.contentType.includes('pdf'), eid = `october7-${slug(source.id)}-p${ref.page}`; if (!evidence.some(e => e.id === eid)) evidence.push({ id: eid, sourceUrl: `${source.url}${pdf ? `#page=${ref.page}` : ''}`, sourceLabel: `${source.sourceLabel}${pdf ? `, page PDF ${ref.page}` : ', document constructeur'}`, sourceType: source.id === 'nist-conversions' ? 'manual' : 'manufacturer', sourceRole: 'primary', retrievedAt: source.observedAt.slice(0, 10), confidence: 'B', notes: `SHA-256 ${source.sha256} de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir.` }); return eid; };
  const conversion = { sourceId: 'nist-conversions', page: 1, quote: 'pound-force per square inch (psi) (lbf/in 2 ) pascal (Pa) 6.894 757 E+03' };
  const conversionForce = { sourceId: 'nist-conversions', page: 1, quote: 'kilogram-force per square centimeter (kgf/cm 2 ) pascal (Pa) 9.806 65 E+04' };
  const conversionFlow = { sourceId: 'nist-conversions', page: 1, quote: 'cubic foot per minute (ft 3 /min) liter per second (L/s) 4.719 474 E-01' };
  const link = (field, refs) => { fieldSources[field] = [...new Set(refs.filter(Boolean).map(add))]; return fieldSources[field]; };
  link('model', [row.modelProof]);
  const maximum = pressure(row.maximum);
  if (maximum <= 0 || !['explicit-maximum-working-pressure', 'selected-working-pressure-ceiling'].includes(row.maxPressureBasis)) throw new Error('Pression de configuration non qualifiée');
  link('maxPressureBar', [row.maximum.ref, row.maximum.unit === 'psig' ? conversion : row.maximum.unit === 'kgf/cm2' ? conversionForce : null]);
  link('maxPressureBasis', [row.maxPressureBasisProof, row.maximum.ref]);
  if (row.maxPressureBasis === 'explicit-maximum-working-pressure' && !/^Max\. working pressure \(bar\)$/.test(original(row.maxPressureBasisProof))) throw new Error('Pression maximale non démontrée par une colonne constructeur');
  let tank;
  if (row.tank === null) { if (row.tankUnqualifiedRaw) add(row.tankUnqualifiedRaw); }
  else if (row.tank?.unit === 'absent-receiver') {
   const raw = original(row.tank.ref), mount = original(row.tank.mountProof);
   if (row.brand !== 'Fini' || row.tank.value !== 0 || !/^[–-]$/.test(raw) || !/^FLOOR MOUNTED$/.test(mount) || row.tank.configuration !== 'floor mounted') throw new Error('Absence de cuve non démontrée');
   tank = 0; link('tankLiters', [row.tank.ref, row.tank.mountProof]);
  } else { tank = numeric(row.tank, ['L']); if (tank <= 0) throw new Error('Cuve inconnue convertie en zéro'); link('tankLiters', [row.tank.ref, row.tankScopeProof]); }
  const conditions = row.conditionProofs.map(ref => { add(ref); return original(ref); });
  // This portfolio distinguishes delivered air from displacement and receiver filling.
  // Its exact column and pressure footnote are both required, rather than guessing from German terms.
  const measurementPressure = pressure(row.flow?.pressure), delivered = flow(row.flow);
  const deliveredGerman = row.brand === 'AGRE' && row.sourceId === 'agre-piston-portfolio' && row.flow?.pressure.unit === 'bar' && [6, 8].includes(measurementPressure) && row.flowTerminology?.published === 'Liefermenge' && /^Liefermenge \[l\/min\]$/.test(original(row.flowTerminology.ref)) && conditions.includes(`Nutzbarer Ansaugvolumenstrom bezogen auf ${measurementPressure} bar(ü).`);
  if (measurementPressure < 0 || measurementPressure > maximum || delivered <= 0 || row.sourceClaimScope !== 'FAD-pressure-qualified' || !(deliveredGerman || conditions.some(text => /F\.?A\.?D\.?|free air deliver(?:y|ed)|ISO\s*1217|Débit d['’]air réel aux conditions de référence/i.test(text)))) throw new Error(`FAD ou pression de mesure non qualifiés : ${row.id}`);
  if (row.capacityBasis && !['published-fixed-pressure-FAD', 'minimum-of-published-FAD-range', 'maximum-of-published-FAD-range'].includes(row.capacityBasis)) throw new Error('Régime de FAD inconnu');
  if (row.capacityBasis === 'minimum-of-published-FAD-range') {
   if (!row.flow.rangeMaximum || row.flow.rangeMaximum.unit !== row.flow.unit || row.flow.rangeMaximum.ref.sourceId !== row.flow.ref.sourceId || row.flow.rangeMaximum.ref.page !== row.flow.ref.page || flow(row.flow.rangeMaximum) < delivered) throw new Error('Plage FAD non qualifiée ou inversée');
   add(row.flow.rangeMaximum.ref);
  }
  if (row.flow.rangeMinimum) {
   if (row.capacityBasis !== 'maximum-of-published-FAD-range' || row.flow.rangeMinimum.unit !== row.flow.unit || row.flow.rangeMinimum.ref.sourceId !== row.flow.ref.sourceId || row.flow.rangeMinimum.ref.page !== row.flow.ref.page || flow(row.flow.rangeMinimum) > delivered) throw new Error('Minimum FAD non qualifié ou inversé');
   add(row.flow.rangeMinimum.ref);
  }
  const points = [{ pressureBar: measurementPressure, litersPerMinute: delivered }];
  link('fadCurve', [row.flow.ref, row.flow.rangeMaximum?.ref, row.flow.rangeMinimum?.ref, row.flow.pressure.ref, ...row.conditionProofs, row.flow.unit === 'cfm' ? conversionFlow : null, row.flow.pressure.unit === 'psig' ? conversion : row.flow.pressure.unit === 'kgf/cm2' ? conversionForce : null]);
  let power;
  if (row.power) { power = rounded(numeric(row.power, ['W', 'kW']) * (row.power.unit === 'W' ? .001 : 1)); if (power <= 0) throw new Error('Puissance invalide'); link('powerKw', [row.power.ref]); }
  if (!['oil', 'oil-free', 'unknown'].includes(row.oilType)) throw new Error('Lubrification inconnue');
  if (row.oilType !== 'unknown') { const q = original(row.oilProof); if (!(row.oilType === 'oil-free' ? /oil[ -]?(?:free|less)|100% LIBRE DE ACEITE/i : /oil[ -]?\s*injected|oil[ -]?\s*lubricated|oil splash|flooded/i).test(q)) throw new Error('Lubrification non documentée'); link('oilType', [row.oilProof]); } else if (row.oilProof) throw new Error('Lubrification ambiguë');
  let duty;
  if (row.dutyCycle !== null) { const q = original(row.dutyProof); duty = row.dutyCycle; if (duty !== 1 || row.brand !== 'FS-Curtis' || !["NXB04","NXB06","NXB08","NXB11","NXB15","NXD110","NXD15","NXD160","NXD18","NXD185","NXD22","NXD30","NXD37","NXD45","NXD55","NXD75","NXD90","NXV08","NXV11","NXV110","NXV15","NXV160","NXV18","NXV185","NXV22","NXV30","NXV37","NXV45","NXV55","NXV75","NXV90"].includes(row.model) || q !== 'Delivers pulsation-free air and 100% continuous duty performance.') throw new Error('Cycle non documenté'); if (original(row.dutyScopeProof) !== row.model || row.dutyScopeProof.sourceId !== row.dutyProof.sourceId) throw new Error('Modèle hors portée du cycle documenté'); link('dutyCycle', [row.dutyProof, row.dutyScopeProof]); } else if (row.dutyProof) throw new Error('Cycle inconnu requalifié');
  if (row.electrical) { const q = original(row.electrical); if (![50,60].includes(row.electrical.frequencyHz) || !new RegExp(`(?<!\\d)${row.electrical.frequencyHz}\\s*(?:Hz\\b|\\/|\\s|$)`, 'i').test(q)) throw new Error('Fréquence de configuration altérée'); add(row.electrical); }
  if (row.mpn) { if (!norm(sources.get(row.sourceId).extractedPages.map(p => p.text).join(' ')).includes(row.mpn)) throw new Error('Code constructeur non documenté'); link('mpn', [row.modelProof]); }
  const limits = [...row.limitations, 'Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.'];
  if (!duty) limits.push('Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.');
  if (!row.electrical && !limits.some(text => /fréquence/.test(text))) limits.push('La fréquence électrique de cette configuration n’est pas documentée.');
  if (tank === undefined) limits.push('Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.');
  if (row.maxPressureBasis === 'selected-working-pressure-ceiling') limits.push('La source documente ce point de pression. Elle ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes.');
  const specs = [{ label: 'Configuration constructeur', value: row.equipment, evidenceIds: fieldSources.model }, { label: row.maxPressureBasis === 'selected-working-pressure-ceiling' ? 'Pression de la configuration retenue' : 'Pression maximale publiée', value: `${fmt(maximum)} bar${row.maximum.unit === 'psig' ? ` (${fmt(row.maximum.value)} psig publiés)` : ''}`, evidenceIds: fieldSources.maxPressureBar }, { label: 'Cuve de stockage', value: tank === undefined ? 'Non documentée en litres' : tank === 0 ? 'Montage au sol sans stockage intégré documenté' : `${fmt(tank)} L`, evidenceIds: fieldSources.tankLiters ?? fieldSources.model }, { label: `${row.capacityBasis === 'minimum-of-published-FAD-range' ? 'FAD minimal déclaré' : row.capacityBasis === 'maximum-of-published-FAD-range' ? 'FAD maximal déclaré' : 'Air livré'} à ${fmt(measurementPressure)} bar`, value: `${fmt(delivered)} L/min${row.flow.unit === 'cfm' ? ` (${fmt(row.flow.value)} cfm publiés)` : ''}`, evidenceIds: fieldSources.fadCurve }];
  for (const fact of row.additionalFacts ?? []) { const raw = original(fact.ref); if (fact.raw && norm(fact.raw) !== norm(raw)) throw new Error('Caractéristique documentaire supplémentaire altérée'); specs.push({ label: fact.label, value: fact.raw ?? raw, evidenceIds: [add(fact.ref)] }); }
  if (row.originalReceiver) specs.push({ label: 'Colonne réservoir du document original', value: row.originalReceiver, evidenceIds: [add(row.tankUnqualifiedRaw)] });
  if (row.flow.rangeMinimum) specs.push({ label: `FAD minimal déclaré à ${fmt(measurementPressure)} bar`, value: `${fmt(flow(row.flow.rangeMinimum))} L/min ; minimum de régulation, distinct de la capacité maximale`, evidenceIds: fieldSources.fadCurve });
  if (power) specs.push({ label: 'Puissance publiée', value: `${fmt(power)} kW`, evidenceIds: fieldSources.powerKw });
  if (row.unqualifiedPower) {
   const unqualified = numeric(row.unqualifiedPower, ['kW']), comparison = numeric(row.powerConflict, ['kW']);
   specs.push({ label: 'Puissance publiée à confirmer', value: `${fmt(unqualified)} kW dans cette ligne, ${fmt(comparison)} kW pour la version de base du même CNR 100`, evidenceIds: [add(row.unqualifiedPower.ref), add(row.powerConflict.ref)] });
  }
  if (duty) specs.push({ label: 'Cycle de service déclaré', value: '100 %', evidenceIds: fieldSources.dutyCycle });
  specs.push({ label: 'Fréquence de la configuration retenue', value: row.electrical ? `${row.electrical.frequencyHz} Hz` : 'Non documentée', evidenceIds: row.electrical ? [add(row.electrical)] : fieldSources.model });
  const deliveredText = `${fmt(delivered)} L/min déclarés à ${fmt(measurementPressure)} bar${row.capacityBasis === 'minimum-of-published-FAD-range' ? ', minimum de la plage FAD publiée' : row.capacityBasis === 'maximum-of-published-FAD-range' ? ', maximum de la plage FAD publiée, sans qualification du régime moteur' : ''}.`;
  return { id, slug: id, brand: row.brand, model: row.model, ...(row.mpn ? { mpn: row.mpn } : {}), variant: { familyId: slug(`${row.brand} ${row.normalizedModel ?? row.model}`), label: row.equipment, distinguishingAttributes: { équipement: row.equipment, pressionDeConfiguration: `${fmt(maximum)} bar`, cuve: tank === undefined ? 'Non documentée' : `${fmt(tank)} L`, ...(row.electrical ? { fréquence: `${row.electrical.frequencyHz} Hz` } : {}) } }, ...(tank === undefined ? {} : { tankLiters: tank }), maxPressureBar: maximum, maxPressureBasis: row.maxPressureBasis, fadCurve: points, ...(duty ? { dutyCycle: duty } : {}), ...(power ? { powerKw: power } : {}), oilType: row.oilType, confidence: 'B', status: 'unknown', image: { src: `/images/products/${id}.svg`, alt: `Repères techniques : ${row.brand} ${row.model}`, sourceUrl: sources.get(row.sourceId).url, sourceLabel: 'Carte technique CompatAir, données déclarées par le constructeur' }, specifications: specs, editorial: { overview: `${row.brand} ${row.model}. ${deliveredText} Configuration constructeur : ${row.equipment}.`, verifiedFacts: [`Pression de la configuration documentée : ${fmt(maximum)} bar.`, ...(tank === undefined ? [] : [tank === 0 ? 'Montage sans réservoir intégré explicitement documenté.' : `Cuve de stockage documentée : ${fmt(tank)} L.`]), `FAD sous pression identifié séparément des valeurs d’aspiration : ${deliveredText}`], limitations: limits }, evidence, fieldSources, notes: ['Portée de la source : FAD-pressure-qualified.', 'Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.', 'Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément.'] };
 });
}
