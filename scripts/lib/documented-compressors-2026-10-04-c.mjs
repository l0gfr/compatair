import { createHash } from 'node:crypto';
const sha = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const documentedCompressorIdentity = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/(?<=\d)[.,](?=\d)/g, 'd').replace(/[^a-z0-9]/g, '');
const norm = value => value.replace(/\s+/g, ' ').trim();
const fmt = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const rounded = value => Number(value.toFixed(3));
// Separators are declared by source cell; a dot is never globally treated as a thousands separator.
export function parseSourceNumbers(raw, numberFormat = 'decimal') {
 if (typeof raw !== 'string' || !['decimal', 'spanish-thousands'].includes(numberFormat)) throw new Error('Format numérique primaire inconnu');
 const tokens = raw.match(/\d+(?:[.,]\d+)*/g) ?? [];
 return tokens.map(token => {
  const valid = numberFormat === 'spanish-thousands' ? /^\d+(?:\.\d{3})*(?:,\d+)?$/ : /^\d+(?:[.,]\d+)?$/;
  if (!valid.test(token)) throw new Error('Séparateurs numériques primaires ambigus');
  const value = Number(numberFormat === 'spanish-thousands' ? token.replaceAll('.', '').replace(',', '.') : token.replace(',', '.'));
  if (!Number.isFinite(value)) throw new Error('Nombre primaire invalide');
  return value;
 });
}
// NIST SP811 B.8: psi -> Pa = 6.894757E3; ft3/min -> L/s = 4.719474E-1.
const PSI_TO_BAR = .06894757;
const CFM_TO_LPM = .4719474 * 60;
// Immutable transcription, original HTTP provenance and extracted-page review seals.
const reviewedManifest = {
  "recordsSha256": "3f2149842db911cf6f33fc6acd811acc0834138729ec97b51074015ccfca8671",
  "sources": {
    "alup-alup_agk%20afk%20ahk_eng_6999640611_lowres_singlepages": {
      "sha256": "fb873d3a32beb4a077884d39a66e3e4bbb42a8f2a265a55fd9ece7304dd4aa03",
      "extractedPagesSha256": "ea242bbba38d3810638ff2b9c4b7c61042fcdc85b1318744e8da4ca734c72d36",
      "provenanceSha256": "956ef7b54ab0cf7157cf56faf477efc26873558e292bfdfbaeedae1bdbdb7b51"
    },
    "alup-alup_cnr_75-100_leaflet_en_6999640550_lr": {
      "sha256": "02c7c0daee8d60297d09ea15005d0228f2bc19bad9c9f7eb641bf4d54cdf426a",
      "extractedPagesSha256": "291bd6ac992a1ec5b4f956eccf149c50341536abe3e1abaaf94708c23ceaaab6",
      "provenanceSha256": "e8b79ff842045add8101d679d39cf9fd4aaf9885ce29e962c404d436887ec37d"
    },
    "alup-alup_lar_all_evo_30_45_eng_6999640570_lr": {
      "sha256": "06fe46b31fe8f7349c1f8f6fde4341ba3920dece9ea1b746219428d59d91d4e5",
      "extractedPagesSha256": "dd788d053378bd1734cd06db63475c902bcefb4bbdd3cc5f22f32091e2e6e244",
      "provenanceSha256": "6bbf67dfe898f1381296bda262444d3ee1d28daf02da1c75517ca441961729fb"
    },
    "alup-alup_largo_allegro_200-315_leaflet_en_2025": {
      "sha256": "73da337c9c159d6da84f5a1cd2b46d1872d5e9d9ed54c786821a83456aea749c",
      "extractedPagesSha256": "58d8343d46598b52546a6bc90929ef662e375d581f07bbe37e545ac815b79dd9",
      "provenanceSha256": "c8c38cf256e59d86dad12c1472f6432fa122d6309a7139d9342eaa1b1a74df45"
    },
    "alup-alup_largo-allegro-23-36_en": {
      "sha256": "586451b46afc9f34efc36bb6b4d747e398f9bce21c15dadb2268d5141d6cf9ef",
      "extractedPagesSha256": "305eeca0a116f26c14d60ff777e435728fa9618972e75ceb68c42c6d4423c2d3",
      "provenanceSha256": "7f1d1ed49fce969e7a42dba28877bb21f0ede404c74a9819fb0a0a2ca6d91923"
    },
    "alup-alup_largo-allegro-evoluto_111-160_en_6999640511_lr_v2": {
      "sha256": "2a3e705d753992019074153c9c9922dd4f0eaead6339f248fa598ba9f970734d",
      "extractedPagesSha256": "f85127c6378680e68f713ad9d28bcfc8d1c0bf9fc2f14d9dfed81fa5a037ef1e",
      "provenanceSha256": "219412dbb55d767f99621a0e3cf7fec1fc5dbe8eb8b9798612e142983638e522"
    },
    "alup-alup_sck25-40_allegretto15-22_leaflet_6999640680_en": {
      "sha256": "70ae98c35decbd78ce86f3d51cd65b1543115e153df4542b9d10536313f64939",
      "extractedPagesSha256": "ec56cf459b760dffe1c8a4de878b65c1c4755239a029581e51ccf6c7bd7c1ebb",
      "provenanceSha256": "0fe527d9c60d94971231702327945709a144867ded2c38c9eb7a84941d2cd6b6"
    },
    "alup-alup_sonetto8-20_allegretto8-14_leaflet_6999640670_en": {
      "sha256": "e993818328cae0be5b12c8eac3421584f2110724877e44df324e30f1eff68dd3",
      "extractedPagesSha256": "42ca14c0f8a5e12cdedf4ae3a240266776a3d015772fb39057fb509e71771eda",
      "provenanceSha256": "bd87c093fd470fe40b24cac1f1921484e871ea95b90754a20a1da6d9cd33990b"
    },
    "alup-alup_wisair_en": {
      "sha256": "3a328fbde1b9673c026f23ff98a88d5b1192a17f38aeb255aa272d8174df46a9",
      "extractedPagesSha256": "d099805ffcfd2a494a53e4e9820b13ec582a29a38ef2fe512e2528a3a7b354bc",
      "provenanceSha256": "58a9bbd34c62e464533313b1abb798d05d535027ef14730a9d40e6a2be53ea19"
    },
    "alup-lagro55-90%20kw%20%20allegretto%2055-90%20evoluto%2045-90%20kw": {
      "sha256": "a70ec59ca4f8d37c0aeae5aba7281d78f2097015dfbeb7023dc24dac273def7a",
      "extractedPagesSha256": "a6a699acd18a933aec666b7a323fada89c6884bfba6e883f34d0e31e7a7b0619",
      "provenanceSha256": "be63c3d7377ac0168f2f3705bbbba8a47e4d3dbb2c08838abd33a0a39c2cb1d1"
    },
    "alup-spiralair_salesleaflet_en_spreads": {
      "sha256": "92bf5c3e0c517f5bc1d1733d96c9f39e6bccdfed7c0e10f4ee350510153ae6e7",
      "extractedPagesSha256": "9d0d70fa1f6110aaab4984c904b98820715185c1776783de18396049a98d966f",
      "provenanceSha256": "1c763e71b60acc119934efa8efa3611247183d9057808ce8040ddd6745c2e267"
    },
    "compair-d37-75": {
      "sha256": "ccc615617535035c2b712685ba0cc0c6965acb052fe352f07efe51b7cd19931f",
      "extractedPagesSha256": "721b9c2071f8d1a66e7a16acef5df44cbac33aef126a6a4e80527abe950758c6",
      "provenanceSha256": "5fefd59144a4ba16728c28bda190e1b9721e1fe17adcdaaf9564ccee324e5207"
    },
    "compair-dh": {
      "sha256": "49dcf33416202d0d0d11025ceac79f3783a555b15efcf0b3b249422847fe42fa",
      "extractedPagesSha256": "988c1b5f1414f1ccbf0b92c2f6f1b1d7501ae085a77a9483996215e03d38e251",
      "provenanceSha256": "3a51501e262c2506f697d03108193b883d87345ea4f3e8bed4cbc356df444651"
    },
    "compair-dx200-355": {
      "sha256": "c0b92878f8679552a51883c2b8f14be9c1dc07834986d78f0bd1033c330a9818",
      "extractedPagesSha256": "ebe893855494103f732ff954dfafe1eca3ae766b0a4992e209a0bbcd3a543d3c",
      "provenanceSha256": "1fe6198627c70fdd53596f8a0fb106bebf8d308c8701f6abfd7e7a86d37e5d05"
    },
    "compair-dx90-160": {
      "sha256": "9aefc2ec8892e1e96271ae206c2566ed5bc02fc655f2164d62823dca6c664b56",
      "extractedPagesSha256": "9b8342598ed1bc0097245f6323d9d3a541e7a9d40f219d32d21e1d9741e1d3b4",
      "provenanceSha256": "9c184f62e8a2b42e31fb48cd1426ab0f1d326e33c95f62ccb297ceddfcba04fe"
    },
    "compair-fourcore": {
      "sha256": "a5da59714fd96024ae0d5e7b586a2345f2db6ec639909da053a0b68096967b3f",
      "extractedPagesSha256": "062e573556e94884cd8ba2e9a58f8a026a4ea54774c7586f0c48960b46c96366",
      "provenanceSha256": "9a8199172fddec88a2d9cd43de1237b8225a154de788fb125cfd81a07b88d650"
    },
    "compair-frame1": {
      "sha256": "7dcdc2b984e1cd8532728006d10d8e24b246245b7e34a1207f46c62ad7e0b53c",
      "extractedPagesSha256": "7af32e5a587ebdad8ebfec2f8cec9062551460304d578a66f83c385b521bd95f",
      "provenanceSha256": "ca8995176a8bb56a8cfd691a9799bb686169ed752e1f5313cdd6b34d640c24c6"
    },
    "compair-frame2": {
      "sha256": "50e6da20f6f3f6ac23323d6a8f13f3465900b6e5ad30a942971a35811837d7fe",
      "extractedPagesSha256": "b4a81648979068986bd288755b6fa01122673aacb816ab092889630fcd8ca52e",
      "provenanceSha256": "f61d79cc48e2a4d80571806a4f93e3690ce2fd54050f55e9907316b8f85e7622"
    },
    "compair-frame2plus": {
      "sha256": "d6625522a10027708297fbda622e4a4420b4fc767affdcfbf6b5f34b9462e559",
      "extractedPagesSha256": "9bf6ca693ea52ec270fc3a3c9e802eeb9410c6b3d6d04aeba767389b00d3fc04",
      "provenanceSha256": "bda3e53d7bc99108369473020156d930ca13dc1d137ce14b8d24d9aacbded7f1"
    },
    "compair-frame3": {
      "sha256": "3842c86b3b56ece40669345f3d5aec285efa9b9ed545e26add050deb32ef2468",
      "extractedPagesSha256": "dab9476f2a28e0b5323c732b58e3f9d21127964282b1d54a314e08334a284023",
      "provenanceSha256": "928fe0f538798ab94bfd0f8822e236429e8eed064251e233a9b861e0883393e5"
    },
    "compair-frame4": {
      "sha256": "7b3022bee92575d6876f2dfda0ddc4e29b7466202606b6b5ce7dc5fea1ab62ef",
      "extractedPagesSha256": "9d14f76d9a0b5b495d82bed7a142c3f4311263e51f22ba190e19d9cf63ef96d2",
      "provenanceSha256": "a42fef62cd2d1b59804f20ce5fadb8bfb33da8072777522c43444cbca48544f8"
    },
    "compair-frame5": {
      "sha256": "50c30f265d071051dfaa8bfbe96377cea1d4d1af2496e7ca059b67f56431ad42",
      "extractedPagesSha256": "ddc410ca05892cd9fdece599493a03d916d7da5582065f136c46bbb22b48c3e2",
      "provenanceSha256": "23677e2fea30e7a345d97837062c380a8311cc35ecb2323582f1876611863185"
    },
    "compair-frame6": {
      "sha256": "a0c71b552a2b46207fa4d740266f85ad6cc874837c3d337bd3b22c8a22258b29",
      "extractedPagesSha256": "0a6e3f3bb4c7020a1a02eaa6ca1f2aee737509f22d9f5b97eaae98c6f564d8de",
      "provenanceSha256": "7dd2655cef1803427120f4b7251281110bd0e1235b2d501e2a4f40b5650b4eff"
    },
    "compair-meta45-55": {
      "sha256": "b730026a7af1c1032c6267733e3ca5502fd4c0289b5ea99a42236b61b909a312",
      "extractedPagesSha256": "570034661caf398849d30f90dbf1c207b83c08d9908054ed50c87d37a262fdaf",
      "provenanceSha256": "8e184ce62b29b953d7ff00501a378dfb5219c6319437d93e95eda7a8c68f6018"
    },
    "ekomak-dmd-leaflet-0": {
      "sha256": "446cfa135d8cebca21f0fbc026fe6e36d7f62b57ef04993ceec36396dc6bf48d",
      "extractedPagesSha256": "aa8edb508afc9ef8e31d6d97edad7ad5769d3ad96b02232a550a11e9d91ca009",
      "provenanceSha256": "52b6098731de57d507b4c54ec1adfbd4d45aad98934005a2248d279219cb39c0"
    },
    "ekomak-dmd-leaflet-1": {
      "sha256": "fd54c02e168a7e0a604263b5b075e20280c649b5647ec0210fed527225764387",
      "extractedPagesSha256": "06948e90d187f271cdda4bd068458e0d4dc52ae8dd979d4804485b1cd89bd4ee",
      "provenanceSha256": "f7420b9f8c2fd10bf3d4f232cc3e499c6fda39bfc2e836c6193d5b753d99fc93"
    },
    "ekomak-dmd-leaflet-2": {
      "sha256": "609ea406512a3dadefd878925a1b50486dc5b4dbe0f307b41f2a45cd726584b8",
      "extractedPagesSha256": "aead1e9a1c7b431e438a828d336a8fa16128dcb696deed326d6303f526cb5fa2",
      "provenanceSha256": "91c12715ffb238f258ea58917eab7ed3d357e753f2944b8e6205733dc6ace8fd"
    },
    "ekomak-extra-1": {
      "sha256": "b30f2f05ef5cc0e1a58c5951233fd76d3f8df91f47dd1754290997ce13418538",
      "extractedPagesSha256": "3c50d572d61d8d18c8661b83ead111b87af1bc7621998edc0f3ea96e2647586b",
      "provenanceSha256": "cad0b680167c4b495c67436756427c08c13d8c4b37868338553c59a18e5dba53"
    },
    "ekomak-extra-7": {
      "sha256": "b314b3c00bd0aaa64a3f5833a01104dcc5d1e000c7e30925ca6c922dfe1b6a41",
      "extractedPagesSha256": "dd0307a7f04d9f3b19b52833d9fca03091e84216f091736dbb64758c9da97875",
      "provenanceSha256": "70b30c2c935732f276b5be677f060ffda2d7dc6d4193c1487adbe99c5cd663b2"
    },
    "ekomak-page-direct-drive-eko-8-22-vst": {
      "sha256": "eff903ce2066d251bbd76e6b34d24cde470338864e897c2300ed6b322aa3563e",
      "extractedPagesSha256": "1aa648c6100615d352cdff371b994bf49e337b82f7537a933660a2c88da26f6f",
      "provenanceSha256": "c31b24b40acaad1abb1761b9b6bbe1b7462e7d634fdf1591e427a087edbc731d"
    },
    "ekomak-page-gear-drive-eko-111-160-cd": {
      "sha256": "a90b5d2f2765df78ec1a7f4f1eeabb871c54b7b841060ab0b1ecf3c93261a704",
      "extractedPagesSha256": "eb2306cadce76356eddf8b9588993a820ceab59b9f43548fbc05daf66eb9b92d",
      "provenanceSha256": "26583b23064dce8b52f4b3255316e7c3c3ab9d9b0b9127480c96e0c26b827b4a"
    },
    "ekomak-page-gear-drive-eko-g-15-22": {
      "sha256": "d5b71da39e7d9b3403ca5b21e29be32c59fa9443b5ae131a5722a057c0879ed9",
      "extractedPagesSha256": "5b1d01867343849dfc8adb4fb2b1e20c0a82eb9c37ef8bb2c8a0fc34ac65df2c",
      "provenanceSha256": "d7b5e987b76f77392cbd998a0f66fb3f8ea248cdee720fbfdd0699329d3ef1d2"
    },
    "gd-esm160-290": {
      "sha256": "3e142b612d0a8fbdf0a0363e8632d23d47d7bf76b44a2756c20e3426451dab16",
      "extractedPagesSha256": "6f9f9ea8aed26a69475bb01cb77e1f8d3d5251f4ec1e3bd564669aa9bf299c37",
      "provenanceSha256": "8fd90945b7054ecf6b4d53962b7ef6a8a9119f28304c63e306ad6c085a7c244f"
    },
    "gd-esm2-6": {
      "sha256": "5a6d2333e7f9f5e04cdc65936f40212a31b7c5fb6d428edfeb9a9896073a85f1",
      "extractedPagesSha256": "5e48f638044daaa7f95a90cfc1d2fe7ba65fda37e0a5b20450ab6162f3627761",
      "provenanceSha256": "81ddb198bb73105c81a5c986f2687431000d4a760c0906caecd6220a7b3d9a38"
    },
    "gd-esm23-29": {
      "sha256": "4c07946c05ac7b89b9c4f76976ee105daabf2a5b94009de0700afd58d86a0c7c",
      "extractedPagesSha256": "034c00861964495ffd9ebb87c1bde08d214c145edf58c72737541120a76fb1cf",
      "provenanceSha256": "300304a7b0cdd15eec7e193d24dae69af1bdeecf2ded5b61d4c5a1e518fcf11b"
    },
    "gd-esm30-45": {
      "sha256": "195ed3aa6dca203b81a6c5c8e35dc7f4d27dd69196e0c5990aa0fac5726bc1fc",
      "extractedPagesSha256": "a9518298adaa65e19d15526b4a67c3623e7c56c205cad570f1bb0b0333fbad7d",
      "provenanceSha256": "6c92d988bbf8e4d78b38b517e4c722acecb584a3c52a15c8854970bfc022095d"
    },
    "gd-esm55-75": {
      "sha256": "609639e97700e7a09e2fcab2cf1dd7e5cca7bf5effc4410c6e9a542368655b65",
      "extractedPagesSha256": "cc9ad7afa8e46602877aeaa549bd541946590c43c062fb6e21f7d9e140a1704f",
      "provenanceSha256": "b2798076de44958cac009dae812cadc803843e98d970bd508de1a8dc6539c51b"
    },
    "gd-esm90-132": {
      "sha256": "92ef20b3f1f84308910d1d4a62646ace9073e185f95f8ff82cbba5550f98c8fa",
      "extractedPagesSha256": "a3d73b9285bae6d79530c115ec5746d5dec355d3f54549272e172d6bf3d25065",
      "provenanceSha256": "510677cc0e8a3be5ebfe0e0cac83dbb83a04c05ef278e43250ec61b4bc1f9180"
    },
    "gd-fourcore110-290": {
      "sha256": "71ae25a7ae57d75a693781a506223b4b871bf5178b04114cae37cab2cad7cccb",
      "extractedPagesSha256": "84e2775e5bcab2475b30e36856e0a86a5e840b0a8e676ba75804da735b4fb5de",
      "provenanceSha256": "a1b2d64bff23f4f979e5feca3af93810cbdf30ad58c019878b42ac4a69253c78"
    },
    "gd-l-catalog": {
      "sha256": "defcf02588a74d40f5217f5446efe6b621bd7360fb6f2cc727a7acc05049d2b2",
      "extractedPagesSha256": "eb449a6e8cdf492ac0dd697e68f40484e18b45425aff3d4659b7f9050fee32c2",
      "provenanceSha256": "517891bbf937000d14a871643c7790e9cf802ec621aa1621e3293b2fa7ab0103"
    },
    "gd-lrs-catalog": {
      "sha256": "d2d522a6a848074ca7ba01e9f27cba5269171fce26d12cac2251b6637e0e49f6",
      "extractedPagesSha256": "c96878d01669502762fc7972505c0772d558cabecff49cd98c3c66fce4921189",
      "provenanceSha256": "d0a225d223dc7c0b6936e3dbc1d739f21e3d07c908e422f349dd29819434634a"
    },
    "ir-rsb15-22": {
      "sha256": "18e0d3f6818b7b0656c8406b227e19fdd2ce5390486cd6c3b867c6eb71dbaabc",
      "extractedPagesSha256": "9c09213f3aabeb9e7d58a0f20b6720a39083d45fdb69ed844cf89c1b7953c87c",
      "provenanceSha256": "9ed0c202ab77d58576e373967a77bd8b143a4ad78ca541d67061a303cac25468"
    },
    "mattei-page-blade-series-15-18-22": {
      "sha256": "df9cc1c6810251b75632ba5dec6600d6221dd01637bcd4877b86f3f0c0a19e24",
      "extractedPagesSha256": "8a59b77e402a43ccd73ec1134ce32869e859f2b82b43ad34a0ac3d22f18f088e",
      "provenanceSha256": "1ab6a89a81a0041fa7d0f2a7de6e8eb65f16dbddd7fb23a41af8fcccef54e447"
    },
    "mattei-page-blade-series-4-5-7-11": {
      "sha256": "af55b56386b1bb00ab7624bf72df799dfa13b044a5602b7d34d70e86359771a0",
      "extractedPagesSha256": "65eff7e53bd9c51f0562d57ab7265a91c80461f911ee1da6a46f8530a53e6203",
      "provenanceSha256": "8be0b1b1720720fba15f9a395978eaa99f17998237ba61157429a604e7acf426"
    },
    "mattei-page-rvx-series-rvx45-55-75-ultra-performance": {
      "sha256": "84b286419b1c9158bc19d6c9872a6e197a27b5b96e0a5a40f0d9789101dc6956",
      "extractedPagesSha256": "d25954cbdf3f1b5442d2fd6d3d5ee3722c58f097a983ef17d86cce7f1988f91f",
      "provenanceSha256": "8cf395f159f710750f523cbfcf1437fc25c1a9f49205972254b97ca24fcbc531"
    },
    "nist-conversions": {
      "sha256": "057d9641caab13e6632aa7f70eeb1b76d676ae3e131b3e6ed73b8bf6ca0c28c3",
      "extractedPagesSha256": "c384f6e13aa3f7de88ec5aa3b563a4ea9505366d8c8d4f06b8e9f64395722f52",
      "provenanceSha256": "5ef43e58b574f5979b8b8b262994afb3eb09238cc18ce1a9ad482fc1ac8ca383"
    },
    "ozen-catalog-2025": {
      "sha256": "cfcfbd23c05cfe5db69ec1bb59c552a6543cf1597869b67811a985d1b7458b60",
      "extractedPagesSha256": "13ad9afd54e51f462d6669d32a22a69e25d05caa792914c2b1ddd10c04e8d150",
      "provenanceSha256": "a9d8192c0e0c6cd97c724c810d0fd9258ffe1c91cffefec2c4b9d6912509f0b3"
    },
    "scr-111": {
      "sha256": "e86e787c4d97a637bd79e4cf3dfa3e90d907e3e463754133dce234111e9538ea",
      "extractedPagesSha256": "845476067bbd65a4426abfb903c38856327cec1f89fdfafd59afa2298bc476a6",
      "provenanceSha256": "0b6e3f0f9373d0fb10818ea1a621d6f6590400f0416ca4fb772f1487e0c81664"
    },
    "scr-173": {
      "sha256": "c8f881898562b28a7db336b4dee5580a73bb2af7a803aff0162aa3a6d7cb7fef",
      "extractedPagesSha256": "2379f9cc7d2d5490fd61bb526da612b9789aeff721aca9edcc18e91b9a0ada1b",
      "provenanceSha256": "db543fd1a23e108d1593d9865d44ad81bf404b367e04798ef6fb2421943c99d7"
    },
    "scr-57": {
      "sha256": "48777369a52d7eb304d60ba9a0e3791f78ea65a94c53d23a110659f6ab4d1e46",
      "extractedPagesSha256": "b3d65b84629d266d28e66497bd00878ca3d308ec79334a210659a1ee30040b8b",
      "provenanceSha256": "fcc5838c9d503741ebcf2640d5d53f7287ad7338080b097e6a4c053cddbe802f"
    },
    "scr-58": {
      "sha256": "8b9140606e8749eaef7a92f2f446ea8b20b1ace97a3b5059e2011e6a66712b03",
      "extractedPagesSha256": "45a7eb7eb19b01ac577a9d29a0997eb92401383475bb9c12d380d885d25fbaf3",
      "provenanceSha256": "8e3dc940d4db5f3409ff5a2ca58a8de2f675abd50fa0b2071fb8da3286a77953"
    },
    "scr-59": {
      "sha256": "a62f53f2a9a024efab7183c6053e620439a81162ab801a7efa11efcf46bf6ddf",
      "extractedPagesSha256": "bd5dc26f53279f2c27638c0be15e007db5cd7dfb93aa7b0d513082463741604d",
      "provenanceSha256": "2237fb9d2516db41856f3ae320894f281e0eef58cd4b8412ad0d10f1b4f73150"
    },
    "scr-61": {
      "sha256": "1f1c4450eaf9248adc2b2a9eace76ee7d7d5bfcb52b7fc3bd6c8c4cea9f9bfb8",
      "extractedPagesSha256": "8e5067581e1f4071c5f5d42c3a33f802c014d9c8a244f2f087b047e6937754d0",
      "provenanceSha256": "d47873c43fd51421ff5807d24428d6fa3cefa5d8f5f0af6c6ea93b77db23c341"
    },
    "scr-62": {
      "sha256": "6324b3cd23a42d70373f60f9155f72fb26cb8a549921850cf2a8a480846d685a",
      "extractedPagesSha256": "849638f552620f689fbfb60f9ec089e99860077b2af851b4708420d0e7734324",
      "provenanceSha256": "9c2cadabe525e64a30ce1d00fcc21c7853c905265edd81d8333b2122aabd6740"
    },
    "scr-63": {
      "sha256": "726c5c42c09cd651ea69b4a8ded1f5b0e8d8fcf90b5b2b8e5c261209596d5a7e",
      "extractedPagesSha256": "74dce7ac6c201cc0d63ad4cc1c795f94d460c7f8cfee154bc656a02159fc2c62",
      "provenanceSha256": "bd2f6e46c2ddbb121a86c0854e00066c89a83a8b46e53548f00d557a1883146b"
    },
    "scr-67": {
      "sha256": "55cc19d0a49c637c9f09d99f326695f1abddd211502db795abf53dc2ba99320d",
      "extractedPagesSha256": "7a4772811d6e0378a5a1fb9e94dc2922755fb3b409dbc9374bd8b8d94c9d6932",
      "provenanceSha256": "29f0ccfb90967445f125a5e03b80105d781df960edce4691044f304cbf26298b"
    },
    "sullair-ls-catalog": {
      "sha256": "b5334d2e14ba868abae9d11191aa45a30e2ea9755e0ccbf4f32c4c8e16b7edc8",
      "extractedPagesSha256": "bcc53290f55d3e36a55114bd204a90af5962a5181f5f7408693db2fcf41df850",
      "provenanceSha256": "39f462429618c3fce875ac6ac8c7bee720b9f44805eaa331aa866cad90b33f1b"
    },
    "sullair-senergy": {
      "sha256": "0bfcedbf70fc8d6c6c7cb4255d260d7d029e3372c9459abec79267e5893786cd",
      "extractedPagesSha256": "0ea664e7a8ee0aeaeadd6d9d5731c4a5f6e5c446af7a4e677e2ce3eb508b54dd",
      "provenanceSha256": "fbe7d4da691820b946af85e71a7cd6e6234ee2a8278abbe2d5c9237178102d70"
    },
    "sullair-single-stage": {
      "sha256": "8320fc427e9a475c0df0a55f3c7acfc927b00528f7da4464c2fb512220387f14",
      "extractedPagesSha256": "818177c68e8d9b79262b9e36cd80ba83d5f28ed82d11334266db3b3f116cadea",
      "provenanceSha256": "f60be34363fcc549bf704c221bfd0d369dfabaaeb83a58ab61fdf34a5fd36fa7"
    }
  }
};
const allowedHosts = new Set(["azure-na-assets.contentstack.com","europe.sullair.com","ozenkompresor.com.tr","www.alup.com","www.ekomak.com","www.matteigroup.com","www.nist.gov","www.scrcompressor.com","www.sullair.com"]);
export function buildDocumentedCompressorsOctober4C(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-compressors-2026-10-04-c' || snapshot.observedDate !== '2026-10-04' || snapshot.baseline?.sha !== '73062f1df852d326376ffa85e8cd623b4da5687d' || !Array.isArray(snapshot.compressors) || snapshot.compressors.length !== 420 || sha(snapshot.compressors) !== reviewedManifest.recordsSha256) throw new Error('Lot ou transcriptions documentaires non reconnus');
 const sources = new Map(snapshot.sources.map(s => [s.id, s]));
 if (sources.size !== snapshot.sources.length || sources.size !== Object.keys(reviewedManifest.sources).length) throw new Error('Sources documentaires dupliquées ou manquantes');
 for (const source of sources.values()) {
  const reviewed = reviewedManifest.sources[source.id];
  if (!reviewed || sha(Object.fromEntries(Object.entries(source).filter(([key]) => !['extractedPages', 'extractedPagesSha256'].includes(key)))) !== reviewed.provenanceSha256 || source.sha256 !== reviewed.sha256 || source.status !== 200 || source.captureMethod !== 'original-response' || !/^2026-10-04T/.test(source.observedAt) || !Number.isInteger(source.bytes) || source.bytes < 1 || !(source.contentType.includes('pdf') || source.contentType.includes('html'))) throw new Error('Provenance primaire invalide');
  for (const address of [source.url, source.resolvedUrl]) { const url = new URL(address); if (url.protocol !== 'https:' || url.username || url.password || !allowedHosts.has(url.hostname)) throw new Error('Adresse primaire non autorisée'); }
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
 const pressure = claim => rounded(numeric(claim, ['bar', 'psig']) * (claim.unit === 'psig' ? PSI_TO_BAR : 1));
 const flow = claim => rounded(numeric(claim, ['L/min', 'm3/min', 'm3/h', 'cfm']) * (claim.unit === 'm3/min' ? 1000 : claim.unit === 'm3/h' ? 1000 / 60 : claim.unit === 'cfm' ? CFM_TO_LPM : 1));
 const seen = new Set(), seenIds = new Set();
 return snapshot.compressors.map(row => {
  const id = slug(`${row.brand} ${row.model}`), key = documentedCompressorIdentity(`${row.brand} ${row.normalizedModel ?? row.model}`);
  if (row.id !== id || row.normalizedIdentity !== key || seen.has(key) || seenIds.has(id) || !documentedCompressorIdentity(original(row.modelProof)).includes(documentedCompressorIdentity(row.model))) throw new Error('Identité primaire altérée ou dupliquée'); seen.add(key); seenIds.add(id);
  const evidence = [], fieldSources = {};
  const add = ref => { original(ref); const source = sources.get(ref.sourceId), pdf = source.contentType.includes('pdf'), eid = `october4c-${slug(source.id)}-p${ref.page}`; if (!evidence.some(e => e.id === eid)) evidence.push({ id: eid, sourceUrl: `${source.url}${pdf ? `#page=${ref.page}` : ''}`, sourceLabel: `${source.sourceLabel}${pdf ? `, page PDF ${ref.page}` : ', document constructeur'}`, sourceType: source.id === 'nist-conversions' ? 'manual' : 'manufacturer', sourceRole: 'primary', retrievedAt: source.observedAt.slice(0, 10), confidence: 'B', notes: `SHA-256 ${source.sha256} de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir.` }); return eid; };
  const conversion = { sourceId: 'nist-conversions', page: 1, quote: 'pound-force per square inch (psi) (lbf/in 2 ) pascal (Pa) 6.894 757 E+03' };
  const conversionFlow = { sourceId: 'nist-conversions', page: 1, quote: 'cubic foot per minute (ft 3 /min) liter per second (L/s) 4.719 474 E-01' };
  const link = (field, refs) => { fieldSources[field] = [...new Set(refs.filter(Boolean).map(add))]; return fieldSources[field]; };
  link('model', [row.modelProof]);
  const maximum = pressure(row.maximum);
  if (maximum <= 0 || !['explicit-maximum-pressure', 'explicit-maximum-working-pressure', 'selected-working-pressure-ceiling'].includes(row.maxPressureBasis)) throw new Error('Pression de configuration non qualifiée');
  link('maxPressureBar', [row.maximum.ref, row.maximum.unit === 'psig' ? conversion : null]);
  let tank;
  if (row.tank === null) { if (row.tankUnqualifiedRaw) add(row.tankUnqualifiedRaw); }
  else if (row.tank?.unit === 'absent-receiver') {
   const raw = original(row.tank.ref), mount = original(row.tank.mountProof);
   if (row.brand !== 'Fini' || row.tank.value !== 0 || !/^[–-]$/.test(raw) || !/^FLOOR MOUNTED$/.test(mount) || row.tank.configuration !== 'floor mounted') throw new Error('Absence de cuve non démontrée');
   tank = 0; link('tankLiters', [row.tank.ref, row.tank.mountProof]);
  } else { tank = numeric(row.tank, ['L']); if (tank <= 0) throw new Error('Cuve inconnue convertie en zéro'); link('tankLiters', [row.tank.ref]); }
  const conditions = row.conditionProofs.map(ref => { add(ref); return original(ref); });
  const measurementPressure = pressure(row.flow?.pressure), delivered = flow(row.flow);
  if (measurementPressure < 0 || measurementPressure > maximum || delivered <= 0 || row.sourceClaimScope !== 'FAD-pressure-qualified' || !conditions.some(text => /F\.?A\.?D\.?|free air deliver(?:y|ed)|ISO\s*1217/i.test(text))) throw new Error('FAD ou pression de mesure non qualifiés');
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
  link('fadCurve', [row.flow.ref, row.flow.rangeMaximum?.ref, row.flow.rangeMinimum?.ref, row.flow.pressure.ref, ...row.conditionProofs, row.flow.unit === 'cfm' ? conversionFlow : null, row.flow.pressure.unit === 'psig' ? conversion : null]);
  let power;
  if (row.power) { power = rounded(numeric(row.power, ['W', 'kW']) * (row.power.unit === 'W' ? .001 : 1)); if (power <= 0) throw new Error('Puissance invalide'); link('powerKw', [row.power.ref]); }
  if (!['oil', 'oil-free', 'unknown'].includes(row.oilType)) throw new Error('Lubrification inconnue');
  if (row.oilType !== 'unknown') { const q = original(row.oilProof); if (!(row.oilType === 'oil-free' ? /oil[ -]?free|100% LIBRE DE ACEITE/i : /oil[ -]?\s*injected|oil[ -]?\s*lubricated|oil splash|flooded/i).test(q)) throw new Error('Lubrification non documentée'); link('oilType', [row.oilProof]); } else if (row.oilProof) throw new Error('Lubrification ambiguë');
  let duty;
  if (row.dutyCycle !== null) { const q = original(row.dutyProof); duty = row.dutyCycle; if (duty !== 1 || !/designed for continuous (?:operation|use|duty)|built for continuous operation|designed to run continuously|capable to run continuously|non-stop operation 24\/7|100\s*% duty cycle|continuous use without cool-down periods/i.test(q)) throw new Error('Cycle non documenté'); link('dutyCycle', [row.dutyProof, row.dutyScopeProof]); } else if (row.dutyProof) throw new Error('Cycle inconnu requalifié');
  if (row.electrical) { const q = original(row.electrical); if (![50,60].includes(row.electrical.frequencyHz) || !new RegExp(`(?<!\\d)${row.electrical.frequencyHz}\\s*(?:Hz\\b|\\/|\\s|$)`, 'i').test(q)) throw new Error('Fréquence de configuration altérée'); add(row.electrical); }
  if (row.mpn) { if (!norm(sources.get(row.sourceId).extractedPages.map(p => p.text).join(' ')).includes(row.mpn)) throw new Error('Code constructeur non documenté'); link('mpn', [row.modelProof]); }
  const limits = [...row.limitations, 'Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.'];
  if (!duty) limits.push('Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.');
  if (!row.electrical && !limits.some(text => /fréquence/.test(text))) limits.push('La fréquence électrique de cette configuration n’est pas documentée.');
  if (tank === undefined) limits.push('Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.');
  if (row.maxPressureBasis === 'selected-working-pressure-ceiling') limits.push('Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.');
  const specs = [{ label: 'Configuration constructeur', value: row.equipment, evidenceIds: fieldSources.model }, { label: row.maxPressureBasis === 'selected-working-pressure-ceiling' ? 'Pression de la configuration retenue' : 'Pression maximale publiée', value: `${fmt(maximum)} bar${row.maximum.unit === 'psig' ? ` (${fmt(row.maximum.value)} psig publiés)` : ''}`, evidenceIds: fieldSources.maxPressureBar }, { label: 'Cuve de stockage', value: tank === undefined ? 'Non documentée en litres' : tank === 0 ? 'Montage au sol sans stockage intégré documenté' : `${fmt(tank)} L`, evidenceIds: fieldSources.tankLiters ?? fieldSources.model }, { label: `${row.capacityBasis === 'minimum-of-published-FAD-range' ? 'FAD minimal déclaré' : row.capacityBasis === 'maximum-of-published-FAD-range' ? 'FAD maximal déclaré' : 'Air livré'} à ${fmt(measurementPressure)} bar`, value: `${fmt(delivered)} L/min${row.flow.unit === 'cfm' ? ` (${fmt(row.flow.value)} cfm publiés)` : ''}`, evidenceIds: fieldSources.fadCurve }];
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
  return { id, slug: id, brand: row.brand, model: row.model, ...(row.mpn ? { mpn: row.mpn } : {}), variant: { familyId: slug(`${row.brand} ${row.normalizedModel ?? row.model}`), label: row.equipment, distinguishingAttributes: { équipement: row.equipment, pressionDeConfiguration: `${fmt(maximum)} bar`, cuve: tank === undefined ? 'Non documentée' : `${fmt(tank)} L`, ...(row.electrical ? { fréquence: `${row.electrical.frequencyHz} Hz` } : {}) } }, ...(tank === undefined ? {} : { tankLiters: tank }), maxPressureBar: maximum, fadCurve: points, ...(duty ? { dutyCycle: duty } : {}), ...(power ? { powerKw: power } : {}), oilType: row.oilType, confidence: 'B', status: 'unknown', image: { src: `/images/products/${id}.svg`, alt: `Repères techniques : ${row.brand} ${row.model}`, sourceUrl: sources.get(row.sourceId).url, sourceLabel: 'Carte technique CompatAir, données déclarées par le constructeur' }, specifications: specs, editorial: { overview: `${row.brand} ${row.model}. ${deliveredText} Configuration constructeur : ${row.equipment}.`, verifiedFacts: [`Pression de la configuration documentée : ${fmt(maximum)} bar.`, ...(tank === undefined ? [] : [tank === 0 ? 'Montage sans réservoir intégré explicitement documenté.' : `Cuve de stockage documentée : ${fmt(tank)} L.`]), `FAD sous pression identifié séparément des valeurs d’aspiration : ${deliveredText}`], limitations: limits }, evidence, fieldSources, notes: ['Portée de la source : FAD-pressure-qualified.', 'Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.', 'Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément.'] };
 });
}
