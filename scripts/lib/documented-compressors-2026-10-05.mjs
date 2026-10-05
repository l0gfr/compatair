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
const reviewedManifest = {
  "recordsSha256": "0f4e3a1d847c523f76759a7c94be1c72f8960a5b2612e4f25f0ed4054ce89d97",
  "sources": {
    "agre-piston-portfolio": {
      "sha256": "04774dd3a9dddf3b99389a7243f5068eda3e456d3e63c736157723a0df12ee67",
      "extractedPagesSha256": "dbcd4163e05f966ff6a53f402300050f748c285e7b38af743acb114e37b3b0a1",
      "provenanceSha256": "f3220694185c61b7595237132a02d70ba63389cc37a8238500829c2ef342c6d6"
    },
    "atlas-cagi-100": {
      "sha256": "3fb0cb475165e69d9b9f21562d258a4f7a7d043a5977a5726c8ed617e09e838c",
      "extractedPagesSha256": "2b46cc4df0ae198c4ecf7a8dcc5df1877dd7d68ce58545ad273008edbf632ab6",
      "provenanceSha256": "2d1d2725f0771a6130e52028d9839c28ecafb98a3dd4f2fc1884c8b29d3b46cc"
    },
    "atlas-cagi-105": {
      "sha256": "0a3337d35d52def8d8eb8cee9c51cf90a30c4b0af5f9cb73c8daa68ce1181567",
      "extractedPagesSha256": "c8c8ffbf85f4814d7a83b38ad67fa8576c2ded588c931c7da006a2e83b55b3f9",
      "provenanceSha256": "d304498695349f94578fae8accceda15ded5a59ffd47383f3ebcaec45d4424b8"
    },
    "atlas-cagi-106": {
      "sha256": "bc772e1e230c66baba4c19d444225cd6396e0d129d6d100b9837c40b5684f91b",
      "extractedPagesSha256": "b1a05ae44cbf64717fef0f5d991cb9a34f2f1fa5de3a26c955d880f1a39646f7",
      "provenanceSha256": "e9f2bffd00c16d9b5fa718254d0f4eee78de24f64b0712e1033d30ec253ec842"
    },
    "atlas-cagi-107": {
      "sha256": "433a39369a1a4f792ffcbef326e14d164a4229b1357fecfd75e38983e0976ae2",
      "extractedPagesSha256": "ce4febf866e9c6a8fe5e9c1c78d7b17ec26858f5efcb666de0b968a9fe08c281",
      "provenanceSha256": "c21ad2bfc8c3d1b812cb7bbc8e4595482a0cbbf3fb1d29e4a1bf89b1d142dde0"
    },
    "atlas-cagi-109": {
      "sha256": "2559792ca5906427298d5f6e0901ed1cb485e0fb5ecca84fdccf2fbe6a7045a4",
      "extractedPagesSha256": "e09347b1aa36f5ef6879e7cb4ce05e47d9dbedbafc05d217ddc73e28bb80e158",
      "provenanceSha256": "ee108440c5a767d88a72bc5d42a4453ac5e343dfbd5bfe2f35b0b7ea0770542a"
    },
    "atlas-cagi-110": {
      "sha256": "3bffee1728b257fae0242c748732f60fa5f0390e6dd99f444bda4cb208671c5c",
      "extractedPagesSha256": "9d7d219c7d61f6278e3f22ca5e22cc47cc3fd1d5f2a493c71dbbcda4d58575c0",
      "provenanceSha256": "c96c85637724c0a9d634ea2d4b73ce5188dba8d6a7566a446a54a69a7d89cd21"
    },
    "atlas-cagi-111": {
      "sha256": "592a244a5978d4b820361e5f4391a03b8f5e0084abfb0617f89db0dea04fc4a6",
      "extractedPagesSha256": "4dc321135682c1a88ba87f5bd20f47801faf03a88c3e37fdb0f7fc221e5b2136",
      "provenanceSha256": "8f3765b921af5a6574de6cd7772a8f0ac7584a07799dd9c1836d3232b0dbd918"
    },
    "atlas-cagi-112": {
      "sha256": "4b3e828d00b2d938f1954d59fd678ab61d522680d8ae97e5163a4e1e7a8cee74",
      "extractedPagesSha256": "6d5c757a801fe5abcf477a86c917a64e821fa1feb8ebce883836552cde60b5a9",
      "provenanceSha256": "690b326fdd04084fcaab447bfff2ce8fecf9a98e0c0dae501ef24c0174d16d23"
    },
    "atlas-cagi-117": {
      "sha256": "558789a191a4e01fb4de20d982539c26e428ad29e1d2f9f464d2db3016936b1c",
      "extractedPagesSha256": "08b6d4f349f754560115b4d3bf87e9ebf8e06ea1b1136b425beef43b82e4c6df",
      "provenanceSha256": "e4d777dc512837191cd9bf94096c584bec9f15de43b2265d01cfd7efd3e6a307"
    },
    "atlas-cagi-118": {
      "sha256": "0e17d4096cfe1d48889b9778beec3eca82651451891ad89e0592d106e2d79295",
      "extractedPagesSha256": "366daab0a752325b4189a5ef0fe6b5efb99637789f7178d31243d426f804900d",
      "provenanceSha256": "7b77f9c7218451e016e05ae03c8baa0c30c643ddffe20d7b464511a8443168c4"
    },
    "atlas-cagi-119": {
      "sha256": "48c751de9c415c9908dedbd00c589959ed6ffa90637dd15c70788951ec088664",
      "extractedPagesSha256": "a3ffe9a5af79b43ae978fcb034cc4dd323db8518a03bc4a9d89560232fdf9776",
      "provenanceSha256": "4228ef429468f4c3c02838719c1a9b27f132e71aec8ab1437c864548450fc7d1"
    },
    "atlas-cagi-120": {
      "sha256": "6e381ece660f36bc53a99b28182321dcf616646ab0bc4458600cb56fc81006c1",
      "extractedPagesSha256": "62d69e6ea05110616be086a214842e56745486dd37c6de9d665d81c7f4c8b7b8",
      "provenanceSha256": "9ebc8160351019db7776387d679e804d554986507def163136f584dae3497bc2"
    },
    "atlas-cagi-121": {
      "sha256": "a8d8a150417a1d2b484bbc890c2ff72e2addac0bab34d6ebeb7006258ac6e76f",
      "extractedPagesSha256": "5b4f0f5f6ec29c606165506d7c277c60124ad6888e7dbb8a0c1643710acf2846",
      "provenanceSha256": "31ea571295a206c74616c229e6d5253aca542253d2e3b181ddb1239735fce2e1"
    },
    "atlas-cagi-122": {
      "sha256": "ee3c691259fdb6093c2671b9a57467bbcdea5b4ac4939031de4d38dc200fceb4",
      "extractedPagesSha256": "067aa446a59cbed6365651039101a24e4f613b107331811b335bae5f41d6840f",
      "provenanceSha256": "ac5fd204c0e4281743a5fd6796807092d97b975d356e287dd0c634ccf987092d"
    },
    "atlas-cagi-123": {
      "sha256": "2c894005bcef72afb50b41b25937c47cd4689cebdb9b31029019d5f02a2b0512",
      "extractedPagesSha256": "ca18092ab156dd59d85d3bd9cf18d0029cb607f968070eaa7293bf116a923b90",
      "provenanceSha256": "70e97bd1a1869bf373e1437909e54060f64d416c9f2c2e1bca209688043627b2"
    },
    "atlas-cagi-124": {
      "sha256": "3076e47f48e373775146521a5ed88f3446180bdc55a47691fb085ab02c9f0e22",
      "extractedPagesSha256": "54de216c79ace56ddcbcc698e7e072b8833effafa77b914896a24c84aa00e227",
      "provenanceSha256": "2d321fee5efa78ca7825f68d7b36dd35a09404f2fc007eb80b797b518dbf3ec2"
    },
    "atlas-cagi-125": {
      "sha256": "924ce26386bf10aa63cd43cd9242850c4c6f960c9b2e2547c965bba431a41b38",
      "extractedPagesSha256": "6a7d0fd270bbfb328ab38f54a5c7f3646296798321804a2d9dff637d37032583",
      "provenanceSha256": "162e7e7f9194db6dcf214038f56e6b1c5321f1c13c38ba80cd28896f5f76be98"
    },
    "atlas-cagi-126": {
      "sha256": "64f68ce194796f5d72e732bf715d9a502d155f6f8b60f428cd0c502ce224b343",
      "extractedPagesSha256": "a7ed074d522b4bbafca7b6bffa62a202265b929aba85d58834102d7beabfc6e7",
      "provenanceSha256": "9bfbfe5221e1fd0bdd8635c1e617693570cccb4b0cd2c73aa3b96d9ee08c6b47"
    },
    "atlas-cagi-127": {
      "sha256": "e7d873a8956dcb586a3ccacd93b7387ad9eb993b24139beedccbea41b8974f6d",
      "extractedPagesSha256": "729361d45836b6106c32c0df5ad6795de8c62e779a3c765b7d3bbae43656fc30",
      "provenanceSha256": "fdb17a4d48756158e63e1ded3d131d5894b64d68e77723cb741457ad16cc8351"
    },
    "atlas-cagi-128": {
      "sha256": "0fb506f1273cf257b7ab9579a8cdad4b446ccd76a33cab4e85b5f815197601fc",
      "extractedPagesSha256": "2bec2c79c5dcbdfc9c438ae77117ea94247cfaa85074ab1b39bf6b9c9164fa2e",
      "provenanceSha256": "71f20885a77d8cf1fa2175e624679bd41b4d3aaa130a22b19c85c7e5e9e643a8"
    },
    "atlas-cagi-129": {
      "sha256": "1ff30c54b7b5990eef098fded44bab3ae090f0c5f5a7bb598ebf4fef92dc38e0",
      "extractedPagesSha256": "d9f4cb770a57ef6484a6aee7b8ce272af583f33fbf061783cd85483a9e93d34c",
      "provenanceSha256": "d66c3743bd8dda51695de62f742962629cfea30b0c02ee251cee74e4b419da50"
    },
    "atlas-cagi-13": {
      "sha256": "15a08503893903c37c03802797db638634c7032c2b25fb3b36960b9db9486e3f",
      "extractedPagesSha256": "d1c6829d7afa6f79955442d2a339afb196c1284070b647ebcfe7f057df69fda4",
      "provenanceSha256": "e3bf5e257f4ced7bb2ed94281c688efe3c0df34abfc9c041fac2901a5f2e1fec"
    },
    "atlas-cagi-130": {
      "sha256": "f08876d4b69df6b232a8527fcf55e9fc342a19ebdf8821c4e62f07c9436e7526",
      "extractedPagesSha256": "74af2266cecef856084023a3b17b8beae037bda96d5b47eec71a5e6582cb9857",
      "provenanceSha256": "2a81bd0d4abb8eddf2f841da94fd98970bd3665d5c45b66d151d7aba045a3df0"
    },
    "atlas-cagi-131": {
      "sha256": "2e11e914ea89f705cb1e1f190c8c4e87443c835443fc981ab6ec1d46678e5da1",
      "extractedPagesSha256": "d7c0b8ee8b206e70e029b7d0c8f5c19c7721c57cc9a78b11de0e7dccbcd10b27",
      "provenanceSha256": "9dc12dec279687e7c74db51ea33a0012e320cc804e03542352b29a0e78e780df"
    },
    "atlas-cagi-132": {
      "sha256": "d9ea8f9d664481b136b9b6d3575c486d0f31eea765b604e3292c29955253aaf5",
      "extractedPagesSha256": "0e6fe9b8e880d3621bf2e0868464631b654164396911608cf71a8197823d3654",
      "provenanceSha256": "bbb0593259bbbd16b71c1eb7ddad5bb74ba10265a3b3e09ea89ce3e1f7b4b2df"
    },
    "atlas-cagi-133": {
      "sha256": "091399f8f4f3477a9e99cc5858bb166205ee85678bf0661d94d0815a0eb62222",
      "extractedPagesSha256": "1fcdee79017cefa0e286d2cf167443e972513c20759d322fc3543cbf4a128107",
      "provenanceSha256": "c41b43d66df672ea1c34c468d7aacb92fb51bf1363ca39c65b474af8b7167566"
    },
    "atlas-cagi-134": {
      "sha256": "6681bba0c7b6d7ad5d0b570994fe8f490d34a631878f65c744094767877651d3",
      "extractedPagesSha256": "e642d2f95ca48d8dbb0e251322e9b3e533dd1b893ca44097f523509678f24354",
      "provenanceSha256": "8fdb12f1ce04958991091f63e4575d67e2ca96ab7de7127acb91d5aa7d19d2ff"
    },
    "atlas-cagi-135": {
      "sha256": "8225dbf32ee6da7b2e4e60147da579878f403e5e51ada0113c611d48f9803896",
      "extractedPagesSha256": "d724f08d7352dc082b6b54a13e079c6cebcfdf07a6b74e3476d84c04ac87c7a7",
      "provenanceSha256": "5689343da8a865973bc9949352421cf795971fb37543092f7e4a335a7ba5b219"
    },
    "atlas-cagi-136": {
      "sha256": "55cec2a320ef2da8039b65e2a1e121a49d1ec6159fd1373dfe14c9a77ed2633e",
      "extractedPagesSha256": "3d5591e74dc6776f4726895c9cc8b6c7f50baec638cf334a1560a339b6677613",
      "provenanceSha256": "faebcefd0bfe78a73dc69655a7ed3d13fd9c185d4652a174424a5c2b363d8d0a"
    },
    "atlas-cagi-137": {
      "sha256": "37e0d3653b1d55f1ea7c69fad8bf945be2b95cb2df1f1305c0d3c93a522d9871",
      "extractedPagesSha256": "22e9630b84033890f76a5f42595b35a2951b0787e5aab6131c38d83e95be5518",
      "provenanceSha256": "d3ee1a699ceb62b0aea44bf94ec8cb79eec4be182598dda51a9726bd8da107ec"
    },
    "atlas-cagi-139": {
      "sha256": "bf858c05cfe2eb5b5db29ca99ed104c0a3d6dba1eeaade844edec0a1f6b766f7",
      "extractedPagesSha256": "4535a6fe728b1a93e5a6eb53ff066fc7fed132dfbf746300ef863da62b1d388c",
      "provenanceSha256": "7962ee720bb13b6ff0cf894b105f9cab061bab748621f76b2f0c166a4b82b16a"
    },
    "atlas-cagi-14": {
      "sha256": "7c8a17e5734752795c1b8a85818439db7ed82ad6945ab6e9b6bdf9434545d26b",
      "extractedPagesSha256": "bc0050db6c653743c9577c2a3be8e98e55120221735a0c5e20d87fed2b9e0bfc",
      "provenanceSha256": "e163b9b22be7543c994039dc32d711a22186061d54d54791c01cae46bc5e4fbd"
    },
    "atlas-cagi-140": {
      "sha256": "8b2511773d741f83264be38d702022b5dff7e6a4241e935974d6828a18825008",
      "extractedPagesSha256": "bbc71b3dfa8eece0b0149fd27263963ab37d341763a6f7f25f1eb2f5d5277f21",
      "provenanceSha256": "a358eb7396c3015407f19a3b6d4a23108f65659569a632756c129d612a00d4e1"
    },
    "atlas-cagi-141": {
      "sha256": "13dce12479fc3d359ad61511c3db4f97e260d6ba309de6d001fc8ca273bb101a",
      "extractedPagesSha256": "8cf29a9bca4cb75abf433fdabade28678b4190b76bced7d296723f45f74d285d",
      "provenanceSha256": "46642b79c0ca4f528128f88da327a67d10f3b1a7ebe68532a2fbfed39cf58490"
    },
    "atlas-cagi-142": {
      "sha256": "a5e6cfca99a3eb53659f6a2c470468d01c258102a00dacde16d1b5407cfd303e",
      "extractedPagesSha256": "18bb759550faa8ffbea4280d8270df6732694159054ac01079e32fc46a7f83ca",
      "provenanceSha256": "9cd08bd2c30154a55ba105319ea785a8748c47abef66ad9215bb2598ff97a053"
    },
    "atlas-cagi-143": {
      "sha256": "7d59e3f5840eb4f7cba54d05858654989ca9d2123c0cf5af74e651cf2f1081be",
      "extractedPagesSha256": "7e6b92d0afe75af4fc29f278e944506b9794a248bc46401edd63411f1446a875",
      "provenanceSha256": "4b4423dc2507f4893e91501eb0698def30e32921518051c80b36ceff773432b7"
    },
    "atlas-cagi-144": {
      "sha256": "0b0130491f2e0618cea3826b85aaf622589432eff0897cacad1b2ee0ceb793c3",
      "extractedPagesSha256": "1eacad57277063780cf34a1cc6ded3bbb4e72ca0f5d9889fee80bc7a99e500c5",
      "provenanceSha256": "0f96dda4dc28c4e9a44526f3af843f24cb2b1b8df7ffdef2905377dbba45d87f"
    },
    "atlas-cagi-145": {
      "sha256": "5ee957ece89e52023b817a86d252c43ac097f84843b6c6b7a1f23945f52037bd",
      "extractedPagesSha256": "fc5805e9241bad3a718a99ceacad9617fead994378baf6c2433bfd0b280e2238",
      "provenanceSha256": "e8ada66a2dbf386615fb2ec768b075faeef509ed179d86521a9c9bf16868ae13"
    },
    "atlas-cagi-146": {
      "sha256": "a661a2901f8fee622d487f4a9e7a45f69028431de03e53646d7c1c84b8eb889b",
      "extractedPagesSha256": "92ec593aae8203136cd8aa39daa5ebb5b212dcbff184a48131f5230395ef47f2",
      "provenanceSha256": "b5b6043f9f7af5a812c8b47bb89e81f55b20ecb6727395ea1fc417d54648e3a8"
    },
    "atlas-cagi-147": {
      "sha256": "09d69d02002886f9ea31ace11ec60f9b045a29fff1bea1bb9ed9ca4f9d20a11f",
      "extractedPagesSha256": "5c4b602a0373043a7cc2eeef23ab1c30f6bf9bdccb3edf8952160ce4e8795f20",
      "provenanceSha256": "b3e50eaa1dc7c12c97ab94b20454fb567c60973574dd0015a3ebafd401c7841b"
    },
    "atlas-cagi-148": {
      "sha256": "d3fdba252e69bb5f52ad2b2c3e90f82520f4a5e4c56c3a6e22a5e9d07379dc1f",
      "extractedPagesSha256": "6fcc43c62c094cbc5162fe7435794d7d195babc1c6070ad453d20ab6434ddfbd",
      "provenanceSha256": "4c88b7b617e1095d7ed416e1411c3e2d8b9215db989ffddce78ee450c9dd40ca"
    },
    "atlas-cagi-149": {
      "sha256": "18ea5c9fd790005983f5cc909e96320d055a2d7d6afeb199a2f782ff4d893b19",
      "extractedPagesSha256": "7ec1ba7b2b390d4d6d82461651c1bc3d05d97f0618d9c2fdfe59eff977565199",
      "provenanceSha256": "aac2e0405cea448257713a628ba77caa28e2d4533c57074906899ebcd5e68aee"
    },
    "atlas-cagi-15": {
      "sha256": "0a4b6eafc4eb14eb730d8f3f0b6a13a7f15119e11b47cb4a3687288be734f6f6",
      "extractedPagesSha256": "dc0afeb2884cb7dc16f70338bcc5fedd516ffb1ccb708eb0f01f7159576d6d2d",
      "provenanceSha256": "f1ea81fceb05229bc1628b0f76d3c1a2c96b27847684ea4ce12d26cb9301fe26"
    },
    "atlas-cagi-150": {
      "sha256": "4412fcc691282f3fcb2a47585e2c8d8e1d2ac324d8aa7c52eaa597b128aca12f",
      "extractedPagesSha256": "e3fc227fd08a9cd5b75095e30a7d691540a68cf9f684e1fb3e5199011d8207a6",
      "provenanceSha256": "5037cdf1abc290e7968d9ce4a01567777cfbaa6536550288b4cfa9e0db043fcc"
    },
    "atlas-cagi-151": {
      "sha256": "559d58f0dc0c50f6e7341c8cf69ed6e532a705d28d565e7888f16c7b99e71a79",
      "extractedPagesSha256": "36f4705fd5b8d3c9a64cc7919b4677e9671627295d738de0a789b63487ee964b",
      "provenanceSha256": "36f51543e5ea10dd5db1ad0f96a496f1a8fb35327edd95a15a46a81617fa6c2c"
    },
    "atlas-cagi-152": {
      "sha256": "cce0d42b3f5510372b890e2e19297f963851e8ae3d091fb8dd28f1a8aa6be1a5",
      "extractedPagesSha256": "726563c5b7dd77d99ca28e8654f66477edd828f92148e1f9ddf67aa41d00834f",
      "provenanceSha256": "e3102fa4b4b8179838c063e395c739e02ef2c1fda5bd4ee6a670b6eab658c8c3"
    },
    "atlas-cagi-153": {
      "sha256": "72b6ffeb83437e6a428d377bc53ff4c70242bf9c9c8a4b3459f5e938b2d002e2",
      "extractedPagesSha256": "414eaf5bef5070e522458892207fb13c8efd1f57b2c7014638306c29087892c8",
      "provenanceSha256": "4c2ebb4c4c19cd09bbffec70a03c8501e9ac39574c172f1eedf07057ffff63ca"
    },
    "atlas-cagi-154": {
      "sha256": "c2661c1b9e89cc02cca73b459880e03bcc5899f047e002c8db89ae87f924aed8",
      "extractedPagesSha256": "3df5bdb022bfcb4092f79ccbf1b58fadccf43b8041c6eea247a463021efe4800",
      "provenanceSha256": "dfd1f33be1cd336a77a16610ad1014dd1bea4b4b4ecc800d854955fc753f71b1"
    },
    "atlas-cagi-155": {
      "sha256": "916518eff91140a1b8a3971d47eed7ab1b2abccf2751de11ae502314ef11be4b",
      "extractedPagesSha256": "e0834567ac384cf7e3625e11bd311c617309d1eff14bd9ebff37affb1a5b972f",
      "provenanceSha256": "f78ab1cc8b21f95e98cdbf4c0ac75daf1f113a3b26db777c52b3d583b27be4f7"
    },
    "atlas-cagi-156": {
      "sha256": "4ff279d5667544981f1030cbf3a6243bcac4859a1bad269a26f9aab3e29c17b4",
      "extractedPagesSha256": "339bed338b960f94f3895eb74baa344afa043ef3fa6e1f61cbfac5bc22665f3a",
      "provenanceSha256": "b04c52c08fff018fdc92c77b0ba528c66d1b4a197542214cb80f2f3ba6c6417e"
    },
    "atlas-cagi-157": {
      "sha256": "d9f12f0e931ce79ab3bae7802e8e6292eb19ae299f8c88c96561a528afd7f492",
      "extractedPagesSha256": "a8bf6f3ad5bc1ec21d83ce28bfb46a10ee35020d17968ef03ee431ee47c0def8",
      "provenanceSha256": "6c425eea4c6ccc2efe8a1f5eebeb7c2f6cf8d7b37ac5238a9e8ac6d784a9a9c6"
    },
    "atlas-cagi-158": {
      "sha256": "9a72d61c0cf1cee637e8303fa1ce20bd8b570218dffe139848fc3923e1d0ca21",
      "extractedPagesSha256": "1500c13e28325c9b7e385ccf6504b0ddbea761fdb5974a234bb4ad03dcdc94a2",
      "provenanceSha256": "62dd0c53cacceda9f710e70c1c62face680d05487123fced739d7019fe62cbf7"
    },
    "atlas-cagi-16": {
      "sha256": "c5b87777bd37a371ff396da99bf9873e234fd723e2fb220be09470a40e376f58",
      "extractedPagesSha256": "283a89b0a2753ae78fcb1c3c0d3d527d4577e97ef08fb2ba0e0f5dac21e64f2e",
      "provenanceSha256": "710a848108c2e06d5d7f7dfd7907ef5030de5066bde7573418ddf8b5e4aa3043"
    },
    "atlas-cagi-160": {
      "sha256": "1406b43939e85d15b8799352905961c0620fd362218e34d44248adec8e207f16",
      "extractedPagesSha256": "630a977dc0389a9b7b7391d1b4f2f5716080d2f926c1f4f222da2b7fc239b643",
      "provenanceSha256": "5c85f1881dc59fa3ea2b3a7a37d85eb254030396d6253675f26d3374fd8f7666"
    },
    "atlas-cagi-161": {
      "sha256": "eefd65cd64aa72eca9d427db6c49b6ad2f978fddf0805be306a6c4f9e79d3849",
      "extractedPagesSha256": "46d0f9d5846ee8e3aa1a38f8b50e18e57ca33ca15aa189232cf42c95dea57053",
      "provenanceSha256": "e81c6fab4470184df8905616698022a0ac28cbb41189c9b245907e7fa65b1e55"
    },
    "atlas-cagi-162": {
      "sha256": "72ea8bc039ca7240c3f60345c4e0c2d21617dd6504c937ea8a5d4c0fe19d1a90",
      "extractedPagesSha256": "9de03a9a6e204510dd3d624001b2bea8538f05a96c512582f0020bc4aeae3fef",
      "provenanceSha256": "6be7ec8860bfa8ae0422ff5869b0deca76afee10bed5a9fcd1efca2fa915c6c9"
    },
    "atlas-cagi-163": {
      "sha256": "19ff6736ad787b69e661536bae6ba10c4849617acb05933d1b108a63fa043023",
      "extractedPagesSha256": "1a344d6abd81251ee3c5ba27af57a9c57dd2f2facc54d97eb1b3d599e13cdfeb",
      "provenanceSha256": "4641768705d24ee2bbadf56a50eedcb8228d2f8d605a4e6d9410cd3a1140fde7"
    },
    "atlas-cagi-164": {
      "sha256": "d748073f03fd86eb49167cc5d34840eba946c3f5c42da0be4b29ac0317f433f3",
      "extractedPagesSha256": "ea31884a6e9983bf2610aca5f10498f376113045b93b627ddee3afaddd7cee17",
      "provenanceSha256": "8bba89610b4108cf3900bfe89037a480349f0b181fac717300249fb40a84eae9"
    },
    "atlas-cagi-165": {
      "sha256": "228e7e8fa3eaaa25cd5ca50c00231876cce3c6b0144ffbb3c53f7ebc872b67c1",
      "extractedPagesSha256": "6c17a5fa13ab06bc27cb9b8140f310a695dafe20bff7e3e2fb00acbaf2cbbcf8",
      "provenanceSha256": "6e71a562906d3df1498d08373548ba512bf1cdea278aa5dbb3ce7f9130915dab"
    },
    "atlas-cagi-166": {
      "sha256": "fe367afd52eae38d325ea84e5986e6ebd784e43d6128e5a897dfa1537c8d1f3a",
      "extractedPagesSha256": "62352e98d8f6681ba7362fa9b4107bd53be9d51edcd9ba0f0b28a63a2386ce87",
      "provenanceSha256": "6e386388bd38c0f08a812d81a26bdd6ff6b41897cf52923accb69bc39ce09d55"
    },
    "atlas-cagi-167": {
      "sha256": "2c058904b3b963e5f663d4808d0af1a16b0cd1727b521f41cc7b31d09e560de7",
      "extractedPagesSha256": "e283beb3febaa80a20c436580040b44225ee2c4500c02167988185d3270b2404",
      "provenanceSha256": "22be0190578163f9cf8372510f1874c1477ac1e9fec23bfa6c514e2b9e3c1a61"
    },
    "atlas-cagi-168": {
      "sha256": "2474eb4d1de8931fc2414300d50d04b3b9eb5008593e3b56dd6633a50d019622",
      "extractedPagesSha256": "a2ada6cc2f359069a08d0295bdaa85d3b98b50babeff9f4729ddaf89ffff94ce",
      "provenanceSha256": "1d47a75ee2216c041f00e21e3c478b4319008f46297fe162ecc46370a2c0ebb1"
    },
    "atlas-cagi-169": {
      "sha256": "8c88965782598aba8609456b938d7272809833fba868f3685b5f3012bdce2997",
      "extractedPagesSha256": "77c09627bf9430dbec8ebe63372ba0f86be2ab42688068b32aaa410a0c67a876",
      "provenanceSha256": "677c1fa5c90d5e6f13ab858dbef7053ca431e005a3ac884e7f7a8401096b63bf"
    },
    "atlas-cagi-17": {
      "sha256": "1a26f91426e3ba3c184ba820052e4084199607973f1576b47f3cc9c46ae657e8",
      "extractedPagesSha256": "add52f2c5b3b27c1b75dae6b100a694f0266c2e8eed2d75cdba9f0fcefd57f9c",
      "provenanceSha256": "6597394ad330368be1542bae580fc0b4cd8ca2942bc1e04cc8b84eae6a0d2368"
    },
    "atlas-cagi-170": {
      "sha256": "feff77e046038978914c639a20997b406b01ea0cb41676a9800ede007afa007e",
      "extractedPagesSha256": "600b0bb66ce9385b0ed80bf950659f426307a7748dd92d74346506f0d77dd224",
      "provenanceSha256": "525340eb073fe5f17c611808451e46c5babcb96adc35aa1f40efd9bbcc1e0699"
    },
    "atlas-cagi-171": {
      "sha256": "31ffb32f860891b75c8bd6f7756bf3360c0ba5748e41ca61896baf7bff4dae8b",
      "extractedPagesSha256": "fc1b80860137f8c817782afe95dc9d92f118886c5ae718263df4751119f7b07d",
      "provenanceSha256": "96a99914af7e7102a6493297f3478577fddf1179975b5951ef6a717474b35f61"
    },
    "atlas-cagi-172": {
      "sha256": "5c12f536098f7e886249e874b4ddfc244387d07752deeb0ebdc65505b565ca42",
      "extractedPagesSha256": "006c1eca4041d1bf2026f61618e08a41908601d89d8b7512aabc8594cd60686c",
      "provenanceSha256": "b7d3de42a8f9aa7b5c5c4f781a303808eeaadf8d966b34df432b37723bca46ab"
    },
    "atlas-cagi-173": {
      "sha256": "32110e5b61fbd8da32f0df4832573742b95e0152346eaabdcf25efdc82b4085a",
      "extractedPagesSha256": "336274e3f85b362ec61d8596dbcb42fb46b3a6e3dc55a7e7b4a05e41fb77535f",
      "provenanceSha256": "07f8983cd3caaeee09f25accc805771d57091e7b4b7973377ba6131181f8850d"
    },
    "atlas-cagi-174": {
      "sha256": "b3e7d419fbf68a08b94d96b8e7b6141d61b2fa13c8689d70f0a3b213c8d1345d",
      "extractedPagesSha256": "aa1c94860c0b9af25cd0a884845d691a4d5d2ff13f4b8fd4c933e62ee8bcb854",
      "provenanceSha256": "45846a81d73853a30101d5105dd0e964b12ec7f1845b7436da5b77cdc20c8305"
    },
    "atlas-cagi-175": {
      "sha256": "eabb6321ad0d356efe93d79938255a2135f1b5dc45125e553011d027a2b1f369",
      "extractedPagesSha256": "5edfb36d23fa6755a1818090265d608cc796ceefcf14e02a24ea6d915016c929",
      "provenanceSha256": "503b296d0cf17f9879afe60224c328afc84726f11579c4e5e1cbfeba0b7b4f85"
    },
    "atlas-cagi-176": {
      "sha256": "94f8dbe5eaa11d563112c05b2751fe418c06f7ae525d9eff465acc93e46410e5",
      "extractedPagesSha256": "d2e7f90c62d66648200d8bee03779bde6b0b0a72cda9060af12798fb5b764142",
      "provenanceSha256": "ace5988f65b72e3a0fb1b4cc0e8f041db509d2787c0f319d1cdfd29557a6ab78"
    },
    "atlas-cagi-177": {
      "sha256": "7b55047e81d6fcf2b4a2a3ab80258f87ce2049333a25da52e022c5e5f9f30885",
      "extractedPagesSha256": "18ffd28c5cd2d274500499cf3470511e19062d8edbbe3460000ce37709308370",
      "provenanceSha256": "46bdc563bc551818dad56780e58d52bf72e51c4c2630356a5db1c4001b5d0d41"
    },
    "atlas-cagi-178": {
      "sha256": "0a634b56f2905fe2bcd44f1e58378cb6ddf672053aa8fff96338d5267f6af558",
      "extractedPagesSha256": "ac71afd9fd1e59fbc78f9f27e11cd92357a07e53bee7cd5127e70ed999e9fd82",
      "provenanceSha256": "3a1232b50e74adfb49cd4eaf5943f954533000a1e23adcd50196d255bc393ea1"
    },
    "atlas-cagi-179": {
      "sha256": "f809f57ffd8087d7ec9f9745d6c98af44d11e6ea08859560eb1723ffc0da6fe3",
      "extractedPagesSha256": "51ccf80837d2e0970642b4f95a5707d0c480d9b1ff0d287dcf8582373a183193",
      "provenanceSha256": "20571a79e1ba36be237f0f248a205665b8b456f6c9a08eda73e90ff0b129b0a8"
    },
    "atlas-cagi-18": {
      "sha256": "6cd4b8c74504eb4aa6d13991716812a415591beee02933bc498787d1f65ff228",
      "extractedPagesSha256": "adaa4a163e7c6c44a84fe615fa92736082b043f2939686d2fb2dea34f41c9c87",
      "provenanceSha256": "32207daee3ffee9a17743bea021b8a80e5cb4fdf657595af8cfb865353dd1ba8"
    },
    "atlas-cagi-19": {
      "sha256": "7397cdc4cdfca49d671dc5c20fc0234ac0c796350f1c7302848a8019f1d54050",
      "extractedPagesSha256": "5b2d27311d951bc7810991b946583814331e65bb7b23ddc010c55b5234030d44",
      "provenanceSha256": "df5bed8e7a2dd2bc7c0323a1f77205b54e76241bbed97175410a22b79f5dcf8b"
    },
    "atlas-cagi-20": {
      "sha256": "3f813b2e77cc483b9319bb7cd8e3411860960f40b2757f4ede64b350ac9831e8",
      "extractedPagesSha256": "91ca4d97d6d72dca246dbd88b94058d630a44899d13d7f14a918d676dadad1cd",
      "provenanceSha256": "ad54fb5448298a14d63b35b392bf4aa405578b73e54474e217653d655a7d2825"
    },
    "atlas-cagi-21": {
      "sha256": "974e0581839c1765071ec93fa7ebdb27dc4ae52d6bf5f0379f7d908b0c6140a2",
      "extractedPagesSha256": "7d55d21180da1c7f79d3dca1769a28741b065ed3140ebdb255edd5abc06c999a",
      "provenanceSha256": "4bd7f60e7682d3bde4cf6d74718be4d38155c51117170cb3bae7973ce5771015"
    },
    "atlas-cagi-22": {
      "sha256": "704511ed7e0cd3ce2e3978b3ab49fa3bab458420ae3f1f7ba9a4331038d7cfd3",
      "extractedPagesSha256": "ae421f8ef8bfc2bb4d093d343e22a3bf72538419029341adf3a3b37ba47c66b4",
      "provenanceSha256": "3f64719b1bf0ef18d27503251bba1c291c8b228dd569309008f1a1c4c8efe972"
    },
    "atlas-cagi-23": {
      "sha256": "723c8a21a31d45fc8a5734dff04d0100f16768c63f65add5659516a8bdf790c2",
      "extractedPagesSha256": "da831d62587849346df4d8cb216c9442920a94ecce32b39c425a77b111094daf",
      "provenanceSha256": "44c183363a341a557ac7437c425f396362282bbefbdbfe3d6b56b2c2aa3a0617"
    },
    "atlas-cagi-24": {
      "sha256": "d407ce02d01156517d7a2045efa0f7821ae63a468f738b1fc739023981ae66a1",
      "extractedPagesSha256": "78e2032c1678e3e190296a039c02981e918fbedde4287707be00be2d84dd3847",
      "provenanceSha256": "ce091b3c53fd8de781da95ed0f2d11568b5e694eeb851d1ed62713d83d0edd30"
    },
    "atlas-cagi-25": {
      "sha256": "f1502544a2fe2d7e728b25dd76438138ffdd1c3c8284569dbc00e0e553bdcf9a",
      "extractedPagesSha256": "bb4a4f87d81ac7988d81faa6007c4a91dd31aaff2d155c3df4717969f99c66f2",
      "provenanceSha256": "8439d9fbf7d9f73f41cae7ffb82332d8a8b8c9d722310c1c761d3a3d8d8fc404"
    },
    "atlas-cagi-49": {
      "sha256": "059a291110c3f1f238510c0488ec53616f323e38fcffb87a655ffdbc2f39b3b7",
      "extractedPagesSha256": "2c9898e8312ad09f046332f6c8c3ed17feeaf6ec8a24c95a3fc3f22ce72332cf",
      "provenanceSha256": "c9854fcfe7d3ad2423774ccbe072a15aa04ff31438088269abfb752248937270"
    },
    "atlas-cagi-50": {
      "sha256": "e5bdefd7f7eaace13b8ad2f7b316643906a4536fb6c0d1a03d8d357ab3f02898",
      "extractedPagesSha256": "d5ab540c9e608cec176e7ffb576b47e796db90c3b6c1f75c8dae0bf3c6a7d0e2",
      "provenanceSha256": "0c098d1a5022f9511d1d52c7b919e6c847d2a9c17cf8c72542c649a5440a5fb8"
    },
    "atlas-cagi-51": {
      "sha256": "a128c1b66c8868b2ccc92b762d1598982a86fd7143293a8fe2fdfbe5d2d298af",
      "extractedPagesSha256": "26b0b3049f741ecffd7bc85fddaf8c002214a8d2d5d4d8c8dbcd5e1e427e2279",
      "provenanceSha256": "17852738cb8c0adf659e398dcef86342ab2d212e9ffcda2b68ecb146e91fa57e"
    },
    "atlas-cagi-52": {
      "sha256": "44dbfa8e9be29ad61f0a2217c318628f14ddcb22ef6caa73fba8e5cf36d817b9",
      "extractedPagesSha256": "0c6d2e603bbedbe28d51daab40caef48f62a80705b42b53191a4ffa02318d667",
      "provenanceSha256": "ebd9bce0d05dd696a9e496ec6c45392e6a1e680ec6f6e9beb8b55c9cfde36571"
    },
    "atlas-cagi-53": {
      "sha256": "c6288cc24828ba2658032d313773c03be8f28dec6317a468baf44ba260b3c3c3",
      "extractedPagesSha256": "50777321368c94c47bd5820749c229cbbddd7ba3bde74c08413d2dd14a94076e",
      "provenanceSha256": "f9af263b0c48d2e4166f359c43772abd5c5164dc4e1b41621a04a2e137daf93e"
    },
    "atlas-cagi-54": {
      "sha256": "2a19a998bb4f52970d1e5b0a7b65fe5b8861fdfc168c550e1d8291762d32a138",
      "extractedPagesSha256": "20a03be0f48027c3897da89154015f90c3b5c04fe918c1ef595da8040c5d1733",
      "provenanceSha256": "9a5d871629aeee86c7adc99dff3faa5b512dbfa93e426da48b280566baf32fd4"
    },
    "atlas-cagi-55": {
      "sha256": "43dca31046c546ea0331e1b8f9e51987672ec9681323ee7c07b4e2eedd94cf14",
      "extractedPagesSha256": "57c2df474033b470a6d5ef3f04ec75f83c59b42b836d6dd978a7b7fc82c8e6bc",
      "provenanceSha256": "8c79efac4615d4c48fd53c2918602f424e1ad1b4b9c4799a343599b053c3aea9"
    },
    "atlas-cagi-56": {
      "sha256": "10f9f8a32e429130cc015ea5d62122ac2bf1302788f062731c36586176fa3292",
      "extractedPagesSha256": "f8585f789dda8251f8c28a2b48888643462a345c2d7f8ce8bbcbd2f2091a27a1",
      "provenanceSha256": "4044a64e582273b3e02b3dd325b95b4a549edec8006c3cd592d32426d8b620ca"
    },
    "atlas-cagi-66": {
      "sha256": "0b717426e1d5995ca19a85fc40556638a085887a28fea110bac869d8fe4fa0e9",
      "extractedPagesSha256": "e2158cdc563dbad202f14bc230d747dc65e00e7882f980dee26c9fed89f9a426",
      "provenanceSha256": "18076d280b05fac74fb405682636f5e75ad0c2e9aa1b7330efb5977990ea9ff9"
    },
    "atlas-cagi-67": {
      "sha256": "b292febc8cc3913bbedaf487a2f389858dc19590f54da6d5f62034b6a6ec8a05",
      "extractedPagesSha256": "3f05b2e094dbe42a233bf9c4dce973e11ccbb3962ac966c39a4922ac513cb8ef",
      "provenanceSha256": "ff8ad09efd2f213f02f332233f9e3bede3b98ecbe616307fc3c80b04b93c5e57"
    },
    "atlas-cagi-68": {
      "sha256": "a0d2bff9abaf0d50de3fb8b027ec5c3c416131d83cb1625d13bd3cfa973b7edf",
      "extractedPagesSha256": "7b7869af482f9383d30e10f62d2f130b7d7eace82c3e7102382f596fce995321",
      "provenanceSha256": "f9c922376f8973157127e573b31664364f9a582ec7311caa83aa6aa363089414"
    },
    "atlas-cagi-69": {
      "sha256": "852e291c89495305dfd345d2394a57468361cdb8cc86bc7e406f5682c65e5a5b",
      "extractedPagesSha256": "b302fcb641493c0e677c594da4f75c7e3bbcbe22a5e719e66432cfbb77897383",
      "provenanceSha256": "3562fd3121717929eaad83fc1f3af8c6a0f5abce52bc249bc35aedb7ea03cda3"
    },
    "atlas-cagi-70": {
      "sha256": "238f21f9f6dabb2ed4266cb9dc8c1752de8cc0834a2844cb9e6e48c426ca76ef",
      "extractedPagesSha256": "9bf008034554b3720706b65718182f7050c7b9967c9f38e2e7663d98c0f2cd53",
      "provenanceSha256": "8abb284dd4b42a58667ee94e24887da87d246287d74f7299f5cc3f4708559626"
    },
    "atlas-cagi-71": {
      "sha256": "85095d2f04ff50774280de384bb822d5f73a4c9eb863c7d49798e51979ed39c7",
      "extractedPagesSha256": "62f44bbb24698d9ceb5b21665eb953d53e359f3e80ea5d4693d8a69e770c5adf",
      "provenanceSha256": "9caf154c51c6ce5780eb85a1061227a2a1100fb659651019ac4a4cec2171a8d0"
    },
    "atlas-cagi-72": {
      "sha256": "bbe5b91f2a8e10a8f8d3a51604858fd7788b266dc8dceec42ee6a3e3285531c2",
      "extractedPagesSha256": "7241741016bcc2744694e71762fba8416ca54359043057e24eefdfec2c448769",
      "provenanceSha256": "fbd9869e77412b5653e053100b6242359a8db062d09a246dcce972b59bac9c49"
    },
    "atlas-cagi-73": {
      "sha256": "44e2b6315a9bd673f87e3d798b948d8529b18290a88a56adec071b759a71c5d3",
      "extractedPagesSha256": "e0f50d4ed55b55f779d4ffd80138dd653f06e5110bdfcb978e35eba6131c1e5e",
      "provenanceSha256": "4749d55da45cd57fd90b34fb603728b283455db15b7b5639e0ef7e58bbc93527"
    },
    "atlas-cagi-75": {
      "sha256": "7203ca84f7f4a8c197afab5903738c35182823e66d8ef522dde2da7235c2b40e",
      "extractedPagesSha256": "289a5bb891d503bbc2f2bd2a25d2396513d4eb0bf90708f40ba125fcd42099c6",
      "provenanceSha256": "7deef45f5989b04af85860302cfd203ecb4b13c2876f482d1b7419e6e3ca087f"
    },
    "atlas-cagi-76": {
      "sha256": "fa324afde703449ee0c2262029d02fd68acd89c29696609022ac9976450c4aea",
      "extractedPagesSha256": "ecc189f1742b56b745f3f9d0d03d5ebad00da29b7e19a871b36ead9f19c80077",
      "provenanceSha256": "d92e8fe89bc0b52ea5cca9f71b299730b8b68f11812fb612f94b074a093c221c"
    },
    "atlas-cagi-77": {
      "sha256": "9bbfc102860fff964f556e0778cde21590f6155ec78d3908a7203b41af92cff9",
      "extractedPagesSha256": "5977da70b96510599a970ce4c89af17026b27f20fd504f3a0f3d0dea573c35e3",
      "provenanceSha256": "c8a77bada3b4ff3bf16ac815b33b7964157b2a99f3e2526874227c9fb9f58c35"
    },
    "atlas-cagi-78": {
      "sha256": "704693a48e2bd7518dbba6f1b79b9b428f24fe4177c1505adda1f8403d15f972",
      "extractedPagesSha256": "0ee8f471631404c227cc9689226e05ec30b7ff0edb2f270e89fdc055964abdab",
      "provenanceSha256": "8c0d839b196149b4246212e0dc88ee36da9dd578adc0a26d93a418e1de12f29f"
    },
    "atlas-cagi-79": {
      "sha256": "ba71edd3466adc013486cc9a4bcb79484ad87086a96f6c2962e259d2ca7e2a6a",
      "extractedPagesSha256": "cd4bcbbe5526ddbd0b98631c84ff89aa37b65d0e5432d5f3b9f7aaeff5689850",
      "provenanceSha256": "06d3b1b5874afbcdb44878f1b8efba2184b4b39815ce9971bf355e4a1f2b898e"
    },
    "atlas-cagi-80": {
      "sha256": "8c0e0c2be72a0ebbefb676f4672fd24d368e9a8b3d07daae36b22b7207cc39ca",
      "extractedPagesSha256": "b6c51bbebb285ca0514e4291222b83b4992bcb5365d80f323511c573d5a288cd",
      "provenanceSha256": "58c0920032c4073447e91c43ec8b6f826a5fc0a12b22925d2fdb487213c8916c"
    },
    "atlas-cagi-81": {
      "sha256": "912da9212eeae36738a7ac633cc92067944127f8400f38ea22e6e19503dd6913",
      "extractedPagesSha256": "a0d9be7a80e3c88402cc2d72012dba21e320aae3e2202bfa9820160f6641fc77",
      "provenanceSha256": "4fee3d5fccf1dcbbd67183517285dc2135db0ebbbdf3ee4853409515bb151489"
    },
    "atlas-cagi-82": {
      "sha256": "bdd370d6ee610f0ecc65308d4215efe2fce07d55c23dc53e5ac78232ccd47402",
      "extractedPagesSha256": "004955d2c7fe44722aeb412228c7641cbc056dde30a3341b7c2b429bf40d8a83",
      "provenanceSha256": "1da329122a413fc321d2c84d017e4efc1bf3d962998cf325518c3c81117ab7d2"
    },
    "atlas-cagi-83": {
      "sha256": "66f4f07819586f3015880c1313cb7af1946d6cb7a98e6c1aff394d23da43135b",
      "extractedPagesSha256": "7bab0be27a171fb6c814496fe00bca57970475d62ae130e39e5c428bbd22c4cf",
      "provenanceSha256": "db32d847f3a987634b9fa8c00ffc51fac0dfa3343c5da14387bef4ad6ec7f2f7"
    },
    "atlas-cagi-84": {
      "sha256": "0b0fdb1ca695d59fefdbbba9a86a69d77a9faf9704847b82c07c740a32a94a51",
      "extractedPagesSha256": "84e118c0d561bac748ee40dfca7a08c2d6ce9b86899b7a19df10cb6b0349d8ec",
      "provenanceSha256": "228e87652cd909cedf0315bdf72803717f800a1cc3d1cc3ca36fecd08b2b6e4b"
    },
    "atlas-cagi-85": {
      "sha256": "cc9511a2d2df576a3cfb6060bbf4f2265524635d1e66605585be2cc45f976ad1",
      "extractedPagesSha256": "cfcdca188e15eeb17fe30c1a1bd190ae0c4531bce023af88cc75f3d2670bc0de",
      "provenanceSha256": "488a066e5b77fa26b951a2fc82a4bc7c7f9bc0c72b9e39fc509402542b9f2bc2"
    },
    "atlas-cagi-86": {
      "sha256": "f65436dd60ad3fa427c74fb8c3f791dda01ea02f5ea9e9bb8b6fa2a9737d901f",
      "extractedPagesSha256": "bfdbb69713df3c7991ea87c632bedece794570bb7225bbb4b9dd83afcca1efef",
      "provenanceSha256": "113a8355503dbadedf35363c8b1ab2059ea528553b7b93550b4b4c1042100974"
    },
    "atlas-cagi-87": {
      "sha256": "c9b6d7d8783ce66f2d0ba83b9aa04d86857203ec781b2a7ae3e8fd6b13e19086",
      "extractedPagesSha256": "9761fbf41dac46e8ca177203b71e8e1ebfc3b3fd50ef386c1609d870d9e9675f",
      "provenanceSha256": "f017dca6d9be9fd277e13bea25ded0eef8d798bedeb9906a21b46c0eaaf81075"
    },
    "atlas-cagi-88": {
      "sha256": "9780d7d06f398132d96c4c73091d7e83393c3800c9af4a4ae85093751817e277",
      "extractedPagesSha256": "3032a9d6f14ad5b6cf0c11285c267b5f627d4925c0ca075cbcc54e217a2ebc7f",
      "provenanceSha256": "5d3c2b089b19ce62a1bf49f2be37bc44db3856e46f4be30d0b004d94cfff08ff"
    },
    "atlas-cagi-94": {
      "sha256": "472d1edf60b8148fda82027537a4160737059f3509164f4443d2f6ec4e4a8c3a",
      "extractedPagesSha256": "765c39ff941dd2c363fc269115267229d3199e6aa5be27ea87da592957978e61",
      "provenanceSha256": "d575dfdfa8fdefdf581563cda864e16beeb594dcb261ff485726fa229f730716"
    },
    "atlas-cagi-95": {
      "sha256": "53408b6c68fc609b85085b4e73f7e7ce28c3442362e162001675a925e9dd736e",
      "extractedPagesSha256": "bfec53f6568145d6c8c322fb851eea223cc47de2a9cf9e88aca4482a3b833028",
      "provenanceSha256": "f0dc4ace943b4d409abf98e58ba33616914b9943287b1f4fc570ca0ddad09e9b"
    },
    "atlas-cagi-96": {
      "sha256": "7e9f1857e5f2adc6853ab026fa252eb8a36b04874839233f62549117165a2089",
      "extractedPagesSha256": "2d6159bcb1fb9d8053f6702e50fa5605b6f253aac80cbcf34d361d7619c43115",
      "provenanceSha256": "ae0040efc14a577dab670e5248f5971a16a401f5bb143983bc19ed075332a3bd"
    },
    "atlas-cagi-97": {
      "sha256": "7ea8fd7837fe43de35cb66f1f03a4483a84efbfa58559bf9085c6958cca95e0f",
      "extractedPagesSha256": "4e998d8c63726e635f061209cf2b01d4f3c5aa8c390295a8b4231bfc7f0ff778",
      "provenanceSha256": "46c77024c0939c52b58b322cc34d51966eedae84f4c3ee917ef5dab0df03a24f"
    },
    "atlas-cagi-98": {
      "sha256": "4364ef73bfea3fac781f3068b1b11c797345d71e820f882528aea60da4d57650",
      "extractedPagesSha256": "577c5c91ac0f77504d00b5bc76dec6bc52d98954ea9d5387c7056c57b97549b5",
      "provenanceSha256": "4ba2979883fd717320709cf3ce2cecf101de9d3202a4e064453659b43fea10d1"
    },
    "atlas-cagi-99": {
      "sha256": "8e63db862fa84a637ac7ba686cd539734eada9c787acf40dc383830feb5d85eb",
      "extractedPagesSha256": "bc60aec7ba761df1448d47ffe552082800cb28818ea1f1eb04b9c705f99fd1d9",
      "provenanceSha256": "f9888b0580921a58a84fcc8ad8689178069c55b1d311e747f1b95ebad58fd12a"
    },
    "balma-unico-page": {
      "sha256": "d84bdc3ed1628d7327d35cff55ab3f0be89baf8a19774747d12725123c6acac3",
      "extractedPagesSha256": "29cac29b1c623657ae453dd54ffdf10660cb10f2f7b82331584f9e95faea34b5",
      "provenanceSha256": "1c8ef981faf5ba31cd315993bfb208422bdff95db8646fdbaed2a3e3656f02ad"
    },
    "balma-unico-page-pdf-8": {
      "sha256": "0a000b7a6ea09229259f2b178ca6c4970974896ea4ee7aee572473f87b01338f",
      "extractedPagesSha256": "3df3c1c0cc6dfde8ff1e531546dbec970875afdf9994aa0fddc5e13f571fb897",
      "provenanceSha256": "5a2dc2a23cb62234dcafe29036260636b0908d00fb1ab7f31fb69a14c2e05615"
    },
    "compair-frame1": {
      "sha256": "7dcdc2b984e1cd8532728006d10d8e24b246245b7e34a1207f46c62ad7e0b53c",
      "extractedPagesSha256": "7af32e5a587ebdad8ebfec2f8cec9062551460304d578a66f83c385b521bd95f",
      "provenanceSha256": "d46917f30922426ed3dd57befd330a1fe55a2edbe5ea8ced199d4523ad97e06b"
    },
    "compair-frame2": {
      "sha256": "50e6da20f6f3f6ac23323d6a8f13f3465900b6e5ad30a942971a35811837d7fe",
      "extractedPagesSha256": "b4a81648979068986bd288755b6fa01122673aacb816ab092889630fcd8ca52e",
      "provenanceSha256": "fc2cb6c4ada6fc23dffebdfbbdcff16d15793c5cc5c858a2d8f0cfb708445899"
    },
    "compair-frame2plus": {
      "sha256": "d6625522a10027708297fbda622e4a4420b4fc767affdcfbf6b5f34b9462e559",
      "extractedPagesSha256": "9bf6ca693ea52ec270fc3a3c9e802eeb9410c6b3d6d04aeba767389b00d3fc04",
      "provenanceSha256": "18fb93f7bf245d594012ffd39e410f205bb31c535bc8493092abfb57a5ea476a"
    },
    "denair-double-stage": {
      "sha256": "a0072a0e9d479eb5aee4a7f73160f0ca838a21d922d7d609c9daa4769ef5e28e",
      "extractedPagesSha256": "7b8ce327ed40752d99ae64aa6d1ce33c2f8ddcfc4129f8c5d0b543ea3737c059",
      "provenanceSha256": "54136b37b39775db768f0b6d38255701b02215aaa99797616c76ee8cecc52e8b"
    },
    "denair-screw": {
      "sha256": "855ce551cd3fa5294b576c1865d99fbb9c2ae58ee346ac5459d24fd79899b9ad",
      "extractedPagesSha256": "336560add19f088c28cfbf9b9b285061bde89c71fe4b17271aabb3da583f5c87",
      "provenanceSha256": "bbf0273db7b49f4db756855efc84cbdaf11136210a28a57901658666b8328648"
    },
    "firstair-fas": {
      "sha256": "ff6409925e188d42aa3847a84ce478e3a7a6bf6957f8d954a8bd40fac0d64fbd",
      "extractedPagesSha256": "3363306daa4e7b58c29bf8f931949d530c00c8bb012890baac3ba70ef8b34f8d",
      "provenanceSha256": "8c5f7c439ea8d8d48a81a85df81662bdbc0077b5f58a0c58887eff1fddf1a8d0"
    },
    "gd-esm23-29": {
      "sha256": "4c07946c05ac7b89b9c4f76976ee105daabf2a5b94009de0700afd58d86a0c7c",
      "extractedPagesSha256": "034c00861964495ffd9ebb87c1bde08d214c145edf58c72737541120a76fb1cf",
      "provenanceSha256": "3b86517c2bf7997e6ea8599152adab458463ec319a42ba12af06ff7084685308"
    },
    "kaishan-krsp": {
      "sha256": "e6c541d4660dda7212e2455f09b4368e93fedc81fa6b701264b32db0f86dac60",
      "extractedPagesSha256": "8eb1a8a33610ac698e454fd88677d65f2d689dbc4c130e3f51f52529be0958d4",
      "provenanceSha256": "9985a64ac6a8775a408c9034a31f75630bae58666fc2637fdebefe0765340b34"
    },
    "kaishan-ox-page-pdf-9": {
      "sha256": "6863792ed17b6fea2f894702232ce428331ddc2eb2bf94e2e1c8fdb5b98cf8bc",
      "extractedPagesSha256": "5db0576e4d3f85585880341e4b455ab362eb466058ab396c3148f0e1f00ed688",
      "provenanceSha256": "3c949f602037d13415c203c51b7c31191fd45c4be819b2c0daebaeedbce278bd"
    },
    "mauguiere-pdf-0": {
      "sha256": "bec42e5260123354eadeb49f6efe5219f3f916b2ff9182db4e98b3b3fa4abeac",
      "extractedPagesSha256": "398d489fd1a8a4c4d75d21f21bcf7007270c3a3b686cd614369f310e3e013d7f",
      "provenanceSha256": "c00876bf79961d5df93093266b0af9ad3194e055089c9f0e9f5ece20174ba8b4"
    },
    "mauguiere-pdf-2": {
      "sha256": "dd22d53e9752ca26d9cc88b6501ebab10e2a8a05ce7bffd988b21cea06fbf424",
      "extractedPagesSha256": "d59e60f381ff877e0421fa9635398d2de5e3b34c8aec1a451998662d040cf126",
      "provenanceSha256": "11a2f413540aaec7ae567fdc2d246852f8455267be06f117e94fa9e3eb1f7ce1"
    },
    "mauguiere-pdf-3": {
      "sha256": "58069817760b71f5b418faa3a6c474821d8fe46ba54f25b672565cf7cee1c2b5",
      "extractedPagesSha256": "32be4247e88724b384949fdbf13a8ee17975df2fcc079c05f9819d7318618519",
      "provenanceSha256": "977f5cded9eed3b248c35d6721f5424fef7f017f357229238c78dfa770402fa9"
    },
    "mauguiere-pdf-4": {
      "sha256": "29520acfdec144eec75a1acd2f89dc9caa7f24ed966a1943ef01f54e70e27721",
      "extractedPagesSha256": "539d56eb183c7a5a7462e0938fb102f80db7427271184d915b62ff756995f2c8",
      "provenanceSha256": "f09452a6f101258e95dc7e5325298bf71776344e19182281e35e1b4bcf2c1641"
    },
    "nist-conversions": {
      "sha256": "a66b8ada84af2d6f8ff8cb88ce6384f0bfe0af8583f166f6f6ffec0b26250180",
      "extractedPagesSha256": "2fc75c02741a961be64143cef616b4eb168f75f6551e41b2cca88446fa095631",
      "provenanceSha256": "59106cdc64f7d46aef4b6e89ce85ed8744147a78791aea83a12555fdd210ea3b"
    },
    "ozen-catalog-2025": {
      "sha256": "cfcfbd23c05cfe5db69ec1bb59c552a6543cf1597869b67811a985d1b7458b60",
      "extractedPagesSha256": "1c8ce4cb58a8d077cd17eccacf70e6f833705ad4533dd6707b8b591626c94379",
      "provenanceSha256": "3fd8b7cc19b7ee5a7d39f397945a71a02ff1385c93d7280673fe3344f6979a75"
    },
    "scr-61": {
      "sha256": "1f1c4450eaf9248adc2b2a9eace76ee7d7d5bfcb52b7fc3bd6c8c4cea9f9bfb8",
      "extractedPagesSha256": "8e5067581e1f4071c5f5d42c3a33f802c014d9c8a244f2f087b047e6937754d0",
      "provenanceSha256": "18c9105c907dff3e61da78ee353e67f2b752957ea059601b3a8b2f78c67b4a8a"
    }
  }
};
const allowedHosts = new Set(["azure-na-assets.contentstack.com","ozenkompresor.com.tr","www.agre.de","www.atlascopco.com","www.balma.com","www.compresseurs-mauguiere.com","www.denair.net","www.firstaircompressor.com","www.kaishan.com.au","www.nist.gov","www.scrcompressor.com"]);
export function buildDocumentedCompressorsOctober5(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-compressors-2026-10-05' || snapshot.observedDate !== '2026-10-05' || snapshot.baseline?.sha !== '21014edebb8e108bcdfbe3a86e54b69c0cf8503f' || !Array.isArray(snapshot.compressors) || snapshot.compressors.length !== 300 || sha(snapshot.compressors) !== reviewedManifest.recordsSha256) throw new Error('Lot ou transcriptions documentaires non reconnus');
 const sources = new Map(snapshot.sources.map(s => [s.id, s]));
 if (sources.size !== snapshot.sources.length || sources.size !== Object.keys(reviewedManifest.sources).length) throw new Error('Sources documentaires dupliquées ou manquantes');
 for (const source of sources.values()) {
  const reviewed = reviewedManifest.sources[source.id];
  if (!reviewed || sha(Object.fromEntries(Object.entries(source).filter(([key]) => !['extractedPages', 'extractedPagesSha256'].includes(key)))) !== reviewed.provenanceSha256 || source.sha256 !== reviewed.sha256 || source.status !== 200 || source.captureMethod !== 'original-response' || !/^2026-10-05T/.test(source.observedAt) || !Number.isInteger(source.bytes) || source.bytes < 1 || !(source.contentType.includes('pdf') || source.contentType.includes('html'))) throw new Error('Provenance primaire invalide');
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
  const id = slug(`${row.brand} ${row.normalizedModel ?? row.model}`), key = documentedCompressorIdentity(`${row.brand} ${row.normalizedModel ?? row.model}`);
  if (row.id !== id || row.normalizedIdentity !== key || seen.has(key) || seenIds.has(id) || !documentedCompressorIdentity(original(row.modelProof)).includes(documentedCompressorIdentity(row.model))) throw new Error('Identité primaire altérée ou dupliquée'); seen.add(key); seenIds.add(id);
  const evidence = [], fieldSources = {};
  const add = ref => { original(ref); const source = sources.get(ref.sourceId), pdf = source.contentType.includes('pdf'), eid = `october5-${slug(source.id)}-p${ref.page}`; if (!evidence.some(e => e.id === eid)) evidence.push({ id: eid, sourceUrl: `${source.url}${pdf ? `#page=${ref.page}` : ''}`, sourceLabel: `${source.sourceLabel}${pdf ? `, page PDF ${ref.page}` : ', document constructeur'}`, sourceType: source.id === 'nist-conversions' ? 'manual' : 'manufacturer', sourceRole: 'primary', retrievedAt: source.observedAt.slice(0, 10), confidence: 'B', notes: `SHA-256 ${source.sha256} de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir.` }); return eid; };
  const conversion = { sourceId: 'nist-conversions', page: 1, quote: 'pound-force per square inch (psi) (lbf/in2) pascal (Pa) 6.894 757 E+03' };
  const conversionFlow = { sourceId: 'nist-conversions', page: 1, quote: 'cubic foot per minute (ft3/min) liter per second (L/s) 4.719 474 E-01' };
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
  link('fadCurve', [row.flow.ref, row.flow.rangeMaximum?.ref, row.flow.rangeMinimum?.ref, row.flow.pressure.ref, ...row.conditionProofs, row.flow.unit === 'cfm' ? conversionFlow : null, row.flow.pressure.unit === 'psig' ? conversion : null]);
  let power;
  if (row.power) { power = rounded(numeric(row.power, ['W', 'kW']) * (row.power.unit === 'W' ? .001 : 1)); if (power <= 0) throw new Error('Puissance invalide'); link('powerKw', [row.power.ref]); }
  if (!['oil', 'oil-free', 'unknown'].includes(row.oilType)) throw new Error('Lubrification inconnue');
  if (row.oilType !== 'unknown') { const q = original(row.oilProof); if (!(row.oilType === 'oil-free' ? /oil[ -]?free|100% LIBRE DE ACEITE/i : /oil[ -]?\s*injected|oil[ -]?\s*lubricated|oil splash|flooded/i).test(q)) throw new Error('Lubrification non documentée'); link('oilType', [row.oilProof]); } else if (row.oilProof) throw new Error('Lubrification ambiguë');
  let duty;
  if (row.dutyCycle !== null) { const q = original(row.dutyProof); duty = row.dutyCycle; if (duty !== 1 || !/^100% continuous duty rated$/.test(q)) throw new Error('Cycle non documenté'); link('dutyCycle', [row.dutyProof, row.dutyScopeProof]); } else if (row.dutyProof) throw new Error('Cycle inconnu requalifié');
  if (row.electrical) { const q = original(row.electrical); if (![50,60].includes(row.electrical.frequencyHz) || !new RegExp(`(?<!\\d)${row.electrical.frequencyHz}\\s*(?:Hz\\b|\\/|\\s|$)`, 'i').test(q)) throw new Error('Fréquence de configuration altérée'); add(row.electrical); }
  if (row.mpn) { if (!norm(sources.get(row.sourceId).extractedPages.map(p => p.text).join(' ')).includes(row.mpn)) throw new Error('Code constructeur non documenté'); link('mpn', [row.modelProof]); }
  const limits = [...row.limitations, 'Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.'];
  if (!duty) limits.push('Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.');
  if (!row.electrical && !limits.some(text => /fréquence/.test(text))) limits.push('La fréquence électrique de cette configuration n’est pas documentée.');
  if (tank === undefined) limits.push('Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.');
  if (row.maxPressureBasis === 'selected-working-pressure-ceiling') limits.push('Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions.');
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
  return { id, slug: id, brand: row.brand, model: row.model, ...(row.mpn ? { mpn: row.mpn } : {}), variant: { familyId: slug(`${row.brand} ${row.normalizedModel ?? row.model}`), label: row.equipment, distinguishingAttributes: { équipement: row.equipment, pressionDeConfiguration: `${fmt(maximum)} bar`, cuve: tank === undefined ? 'Non documentée' : `${fmt(tank)} L`, ...(row.electrical ? { fréquence: `${row.electrical.frequencyHz} Hz` } : {}) } }, ...(tank === undefined ? {} : { tankLiters: tank }), maxPressureBar: maximum, fadCurve: points, ...(duty ? { dutyCycle: duty } : {}), ...(power ? { powerKw: power } : {}), oilType: row.oilType, confidence: 'B', status: 'unknown', image: { src: `/images/products/${id}.svg`, alt: `Repères techniques : ${row.brand} ${row.model}`, sourceUrl: sources.get(row.sourceId).url, sourceLabel: 'Carte technique CompatAir, données déclarées par le constructeur' }, specifications: specs, editorial: { overview: `${row.brand} ${row.model}. ${deliveredText} Configuration constructeur : ${row.equipment}.`, verifiedFacts: [`Pression de la configuration documentée : ${fmt(maximum)} bar.`, ...(tank === undefined ? [] : [tank === 0 ? 'Montage sans réservoir intégré explicitement documenté.' : `Cuve de stockage documentée : ${fmt(tank)} L.`]), `FAD sous pression identifié séparément des valeurs d’aspiration : ${deliveredText}`], limitations: limits }, evidence, fieldSources, notes: ['Portée de la source : FAD-pressure-qualified.', 'Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.', 'Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément.'] };
 });
}
