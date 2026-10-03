import { createHash } from 'node:crypto';
const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const positive = value => { if (!Number.isFinite(value) || value <= 0) throw new Error('Positive technical value required'); return value; };
const rounded = value => Number(value.toFixed(3));
const format = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const factors = { 'L/min': 1, 'Nl/min': 1, 'L/s': 60, 'm3/min': 1000, cfm: 28.316846592, 'L/cycle': 1, 'ft3/cycle': 28.316846592 };
const qualifications = ['loaded-flow-qualified', 'per-action-cadence-required', 'insufficient_data'];
const scopes = ['measurement', 'operating-only', 'not-established', 'power-and-speed'];
const bases = ['load', 'maximum', 'average', 'free-speed', 'unqualified', 'per-action', 'missing'];
const approvedSources = [
  {
    "id": "apach-doc-0",
    "sha256": "4d649ce07bf14805cf86dd54f1a5a3579ca7b42d19408596a61056728c2f5be1"
  },
  {
    "id": "apach-doc-1",
    "sha256": "e7b771cf8551b472290de6ef4c86e6b2c8cb3eb57a260ec5a25a32e10fe9adf1"
  },
  {
    "id": "astro-product-1111a",
    "sha256": "94495cdedc784ab9289be2bf968cedc80e02e50ce6ce2f6aab10c32034ade218"
  },
  {
    "id": "astro-product-1114a",
    "sha256": "3f5480e8c3ee34f864d318904af4a777bf33e238504adcf98109ffde0cc09594"
  },
  {
    "id": "astro-product-1115",
    "sha256": "320f920817066080e2399b7cedbc70bec8d7803e11b2a39d48ba21663d633f71"
  },
  {
    "id": "astro-product-1119a",
    "sha256": "7404cd7b1b7aa6bef45ae58f8e011a91948c31d9707cfb2552fa8e7a1912f290"
  },
  {
    "id": "astro-product-1120",
    "sha256": "3a93d754db257696b6aa867f93943a0ddec183372a128d917ff11be0876207b9"
  },
  {
    "id": "astro-product-1124",
    "sha256": "528fb3a1e3532f2ad450b46984c047e08386d655d4028e6dda0c6b183c216318"
  },
  {
    "id": "astro-product-1128",
    "sha256": "754ad988bb6437b44bdd31ce5849f7d8239f6acb83b7609ee719875565f882e2"
  },
  {
    "id": "astro-product-1139",
    "sha256": "183b135f4baa7c3735ec100cdabe93d51930cb759004ad0d96097e688003eee8"
  },
  {
    "id": "astro-product-1205",
    "sha256": "b1250314412f18488a14ecf2e25514f91f3836ac6fb22a42499f28e3c8b660e0"
  },
  {
    "id": "astro-product-1240",
    "sha256": "20599445fc6f72c60b8e2b8f78fb908778c1aac87334c61347f21bcc33fb805c"
  },
  {
    "id": "astro-product-135bt",
    "sha256": "96dd4705c05cd5c775868cb71f294a8956e403d07d5bfd7acb5824243812ca9a"
  },
  {
    "id": "astro-product-136e",
    "sha256": "2454b9871b79e1bae695fb43cbd5fcac2db512d69bd24866f55cf11f6b1cba29"
  },
  {
    "id": "astro-product-157",
    "sha256": "891741c2225db7db8c4468dbb9b4b2f5f28439f700b9484e01cfc65d5d33c293"
  },
  {
    "id": "astro-product-1711",
    "sha256": "88660d6701c1c77568f5b15cb3e5b708df5ebb526c151c976b1d7b42e5497aa4"
  },
  {
    "id": "astro-product-1715",
    "sha256": "78fc31d790d5d17dcaced12ac47c49d08e337bc5b9f53264a75757c05bb5d28c"
  },
  {
    "id": "astro-product-1716",
    "sha256": "271e357f8e797ffffe79d3c1a1e3323958fb57a0f692c9252f8b21c859f44137"
  },
  {
    "id": "astro-product-1717",
    "sha256": "288986a27899479133915010159c145070c2b51e5f8502e45dd86c760f52f7c2"
  },
  {
    "id": "astro-product-1718",
    "sha256": "0f00a68286cc61228fedc7ac87b29acca5c70c033f5e0c38c4112c9b27f8383c"
  },
  {
    "id": "astro-product-1742",
    "sha256": "5ef9fee10c9d291ce51cf9c95ada3c1a9a9aeb7f7ce4cc693469514029ef0bcb"
  },
  {
    "id": "astro-product-1812",
    "sha256": "720d1b82af0328e44855cd8ba80413bf8b7d9b6dfd1bc38f41d81fd3292e5fbd"
  },
  {
    "id": "astro-product-1812l",
    "sha256": "059b66dcd5b556a8a7115a0ea214e58bf0e7cacffbf646aaf909e73e4e51cfa8"
  },
  {
    "id": "astro-product-1822",
    "sha256": "85ece1a332f6b98bd54f79dde0b970d2483db4ceebb75720b9d2868dc96cd770"
  },
  {
    "id": "astro-product-1823",
    "sha256": "8c9f42adbc59512b47b342ebb4e4144e0dbec2f5c24e3dd727901372a9a65f91"
  },
  {
    "id": "astro-product-1828",
    "sha256": "157aa6e6f78faf680e2ff3f48384bfa4d04fce35930759f42fb8d00660a0d0b6"
  },
  {
    "id": "astro-product-1830",
    "sha256": "39ea9dcb85ee0473c74c51250880c6469ed5f6aefb39c57ad7fe2136c4997494"
  },
  {
    "id": "astro-product-1831",
    "sha256": "630b3bcedc3b3835cc42f3d5d084d394a96d4a31ba2345e7ef58964cb652a8c1"
  },
  {
    "id": "astro-product-1832",
    "sha256": "490245c7d59e6135f690627bea621a157935c96b7838770d598ab4b2f8ef813b"
  },
  {
    "id": "astro-product-1833",
    "sha256": "33603ec0a280f8f17bf579902648b064cee7b19675e216fa8ca555c1cd702484"
  },
  {
    "id": "astro-product-1835",
    "sha256": "cbfde1d8176aa7560f79075a86273144ab6f959a1944b0dc974224921e8f36a6"
  },
  {
    "id": "astro-product-1835l",
    "sha256": "b3bfe29ccf4f745da75a2e231299cd6575086ffea40fc636aa5ab20cdae3ae59"
  },
  {
    "id": "astro-product-1838",
    "sha256": "44361e427e40809b6a97930b1334cfe747fb583da78ee77d22b0db12384da9f2"
  },
  {
    "id": "astro-product-1845",
    "sha256": "be6a70bdb9b9ac216c9056f5a3c22aedbbcf342da81ab3c6978582389ba82c4b"
  },
  {
    "id": "astro-product-1848",
    "sha256": "1703d3aef92dc517b946ed835d07e3160bb1f74fba442879de837779c4bd4c3d"
  },
  {
    "id": "astro-product-1849",
    "sha256": "641f669a0bed7503aafdd5439416065aa4f3ef3b9924408d8fb57f9153b5d9bf"
  },
  {
    "id": "astro-product-1868",
    "sha256": "183b852a114d2f97ae8465266d23a7bf6c0175b9974c0306b44f8f7b9f34232f"
  },
  {
    "id": "astro-product-1869",
    "sha256": "1c994b553494eb434304c08322dc6b42ccf7c61e16dc16e02ca72bb3797c1384"
  },
  {
    "id": "astro-product-1873",
    "sha256": "f9310ffcaa8f9dd4b441223b8540f48498ab6437f0221776e79773f437053884"
  },
  {
    "id": "astro-product-1894",
    "sha256": "5a38030ccca4eb322b8c203cc154f830353fa99bef1ee0df2fe8e5abbe532a54"
  },
  {
    "id": "astro-product-1895",
    "sha256": "9133da7fef076eb5e041e478707fe055cb7d0a1a3b69fd52f085ede2037b98d9"
  },
  {
    "id": "astro-product-1896",
    "sha256": "2354cc604a1310cd391ebaf6015e63a9cb0f2ba6e00bfe0058ead5c9d11e76f2"
  },
  {
    "id": "astro-product-201",
    "sha256": "309a6a50bd6e51a95e42d6d159b20f2e5842447d57d27901c24f969142ba6597"
  },
  {
    "id": "astro-product-202",
    "sha256": "cbaf019146bbb86b2646bfeab7aebf2785a72eef10cac4f44f02e9f61bfa1692"
  },
  {
    "id": "astro-product-204",
    "sha256": "6bc24a92d88a95f15900c3957cd945df685db696f546ec75c53913618d21777b"
  },
  {
    "id": "astro-product-205ql",
    "sha256": "916ba6a3dc01810306c4abee0deaca166e7a8cfa1ecf9546c7fdb93d88f5cbd2"
  },
  {
    "id": "astro-product-206ql",
    "sha256": "9b094ba13f8367ddf62673726ed81f090f00f0c29df302260376458ac1c09870"
  },
  {
    "id": "astro-product-208",
    "sha256": "2af3b688d352c25340326ddc8d5322c4e7255525a6265d37175b12ff8581c1dc"
  },
  {
    "id": "astro-product-209",
    "sha256": "08c41cc800e276ef448e3b7210a47c1e5cd8ff240af6c3dd75906da209dbef53"
  },
  {
    "id": "astro-product-210ql",
    "sha256": "07933fceca129a2fc233493a0db5191644962fc2ca870a518bda9cc1e5858c4b"
  },
  {
    "id": "astro-product-216ql",
    "sha256": "3785784fe16fedc23f8c334d30e3fcb43e26ee35cc1bca8da55b0eaec38318da"
  },
  {
    "id": "astro-product-217",
    "sha256": "3900a54f7e593da3bdf801f7e2afc6a02ba6086aa27fd91290d85cfe831a0c32"
  },
  {
    "id": "astro-product-218",
    "sha256": "915b3f29f6044bb836f54c6520eb823b05456c99a9d92ff90253c3b2b140691c"
  },
  {
    "id": "astro-product-233",
    "sha256": "a1fa0afe2b3b15fe4767fc9c4a708c2df49aef581b2a15f6d7dbef3a087ed67b"
  },
  {
    "id": "astro-product-234",
    "sha256": "94cbaabc52f6ee7b2c8d7c47b3ff50100dc93e6bae8bd8ffa09431ef05f65f22"
  },
  {
    "id": "astro-product-235",
    "sha256": "b5aee3ae737b5369d77d39a6f7086e8a0c00be0487cd40ba5cfe3be7812f8007"
  },
  {
    "id": "astro-product-245s",
    "sha256": "aa72c61ad7ff2f619287717b21a38dc18b1b89fb4760fd8a80206002ec29f622"
  },
  {
    "id": "astro-product-247p",
    "sha256": "c307cb9d75f6ff5a00a39aea8844843ae7691ea4f97d6cc4c87eb2cd84ed588d"
  },
  {
    "id": "astro-product-249",
    "sha256": "a05a760dbd643b701a34c142c0c51718db527b1d5a6255cbd4b35007c397aebd"
  },
  {
    "id": "astro-product-250",
    "sha256": "ceaea09afc2acc0edc1c94eb8898cd060400ca3b2ae6fb60ac4708d54f6cc61c"
  },
  {
    "id": "astro-product-260",
    "sha256": "ebd9e1eee70fdb6b870e7ec86d83d657f4a6c90aa52197b695692ec98214960d"
  },
  {
    "id": "astro-product-30045",
    "sha256": "eb3a8ec96d6d6dd02863f4a35563c587d4b752d8b42c3764f2a0aafd0ce0e5b1"
  },
  {
    "id": "astro-product-3006",
    "sha256": "58ef2dd7dc6be09e9d43f0b53b4be07f7586d32021a9ffc76cc369c5b2766e33"
  },
  {
    "id": "astro-product-3035",
    "sha256": "0b4cfcfba910b1fe3dc693a1ad05fadedd64ba1033bf54b3a0a8ce4d54af1248"
  },
  {
    "id": "astro-product-3039",
    "sha256": "6b5827d78c0a59c96f84509fc6a3443faf7048a05ad5546bc0e37d3ca2b7ae70"
  },
  {
    "id": "astro-product-3051",
    "sha256": "8cac11b719891ba3da70ab301482d3ef459528706dfe5ce45bb2fa26cd9c2c27"
  },
  {
    "id": "astro-product-314",
    "sha256": "ba02fc8c2dc3701c3dee9cc53c81f0b809d92c407ae37c5c3e53782371013a6f"
  },
  {
    "id": "astro-product-320",
    "sha256": "2d967a7e65cc6d7e1ca9f7644f52c5aeceb68f7c007264ca640cf27a7fa9e132"
  },
  {
    "id": "astro-product-32020",
    "sha256": "90f53c99c0995ade132096c595ee669ff05d5e1e377569431cb411bdf573f680"
  },
  {
    "id": "astro-product-321",
    "sha256": "2a5813aa4ccc4bf9d9ec8dac90ee1856a57a7fe1d3ab973d4fbe08f2c5a61b2c"
  },
  {
    "id": "astro-product-326p",
    "sha256": "1186f7d097d9f71f7c7243c3d5dd6005be11424b965cc24c5ba56d847fc29b1a"
  },
  {
    "id": "astro-product-332",
    "sha256": "9c9f1abbc437ac15176bc67024c65256ec91e2e65fbdf3afdf769afecbde3741"
  },
  {
    "id": "astro-product-4008",
    "sha256": "28327ab9cb84cc94127af6ab3401c02205f21ee63bc29364df03fde813ec0727"
  },
  {
    "id": "astro-product-409",
    "sha256": "9c11fca9edcefd2d8b01abfb5d0a88441604b9d967b42d68da15efceed24c773"
  },
  {
    "id": "astro-product-4320",
    "sha256": "12e978d1341a4b0c3cd28fddec56a37f7cb7cc9f9bea7edbabe881c2d83aa6c9"
  },
  {
    "id": "astro-product-510aht",
    "sha256": "c1ad6e08901e7b5c0f5499310188c9f0790e2ef20fc9491fcc5fac925e26ec18"
  },
  {
    "id": "astro-product-525c",
    "sha256": "2240b3ef8e8a7fcebc47c8e6974183c4c3c7b9a1029caa276e5c68aaf39b1b8a"
  },
  {
    "id": "astro-product-527c",
    "sha256": "b85fc07359c063694d086521af1740b80ab180525c67d152760808e3d6832302"
  },
  {
    "id": "astro-product-727",
    "sha256": "4b5d0cf44d72103cfa8df65f4dfb313a5a3fe1886c82dcd073ed453c144e3d26"
  },
  {
    "id": "astro-product-810t",
    "sha256": "cbefd737747d76e1bd84f06274e67f76967af7610ff78703a3cfff158743ea4f"
  },
  {
    "id": "astro-product-888s",
    "sha256": "b68bd3532d1d60aea2fdf3d7c4e20dc738adfd2ee0b42839006cbf446e421676"
  },
  {
    "id": "astro-product-936",
    "sha256": "acd287fea82cbd07b92ac363d1f73125e8ca17b1eb2596078a725525d2695256"
  },
  {
    "id": "astro-product-as6s",
    "sha256": "b30f1ebb49d77233034847be31e7faa7bf99dcf54ad2f91ab9047969adc94c19"
  },
  {
    "id": "astro-product-as7sp",
    "sha256": "87a957fce3f89d4f84004fde462a5c746bf8f46c284d8184a8babbe45301fdc9"
  },
  {
    "id": "astro-product-as8s",
    "sha256": "733431ccf785dfda8c20fe09a1983f6b3c7f7e76778fd2131416eef664e1adc9"
  },
  {
    "id": "astro-product-eurohe102",
    "sha256": "d09b86e37ae2254b30003bdcaa7e4e09c18a87ee776b48213eaee8132fa24894"
  },
  {
    "id": "astro-product-eurohe103",
    "sha256": "d958fb8a85ff78dfdf5f6508942e9603ce5dac511cbf5bebd1116beef2332c9d"
  },
  {
    "id": "astro-product-eurohe105",
    "sha256": "2f69963e096277b81d836d094dcd6064cb720b4af6cae8addf9bc62bbb5718fc"
  },
  {
    "id": "astro-product-eurohe107",
    "sha256": "a0d363e2fde4c77528a59b2f032f00c87a2a36736d12a647df1231fe50c0637d"
  },
  {
    "id": "astro-product-eurohe108",
    "sha256": "f801898aba331de952a79ce45fef32f3d8702bed843ab9a15764e86d1ceae6de"
  },
  {
    "id": "astro-product-eurohe109",
    "sha256": "b1a5abf9212153153059d5785a5125a9f797bad39e3de5f326e39685658f72e0"
  },
  {
    "id": "astro-product-eurohv107",
    "sha256": "05344ff973d63f4068305e956569a7641d36852a9d7ceb237dedec37a8b55474"
  },
  {
    "id": "astro-product-eurohv109",
    "sha256": "ad8fc81dbfb092e0b92e5befca057d5f0ed5a661ce1728046093d3769e103174"
  },
  {
    "id": "astro-product-evo4014",
    "sha256": "217422edefb08164456817bf0eb017e849d2da5917fdd439de5939d92643cbac"
  },
  {
    "id": "astro-product-evo4018",
    "sha256": "e71488b09af00e1655524fa791cc65be9c26e50c5dca4b4a9d8e654f8d4e176d"
  },
  {
    "id": "astro-product-evot13",
    "sha256": "60cbd34c7e2b23ca441f3675ed8a7c5dd730109622b5eeea1f1766a5018802dd"
  },
  {
    "id": "astro-product-evot14",
    "sha256": "c6eb965dd61848de4f5e2e06163617e50aa93e4f3c7c6052cc62764789e2aeb0"
  },
  {
    "id": "astro-product-gf14s",
    "sha256": "6c01a3a9f905a198b43916362398d7d7bb7cbc010c8c7c321a1fd586acc064af"
  },
  {
    "id": "astro-product-gf20s",
    "sha256": "938f242b81c6db35c454175c388f6e7a5fba2c7d2f91534c28a6c36db7266382"
  },
  {
    "id": "astro-product-hvlp503",
    "sha256": "e398e189124947b09246d5a1880e79c15e6bc92e8f35e32b988774355ad3fb62"
  },
  {
    "id": "astro-product-hvlp505",
    "sha256": "cb8d1a43d69bd58a13028ac4fe3a6ec37ffe6b223507e91fac860456493a18cb"
  },
  {
    "id": "astro-product-hvlp507",
    "sha256": "58fb85fa1c537d3d5058cb26240dbe41a00393e10d4549f26ee4fd04aec53602"
  },
  {
    "id": "astro-product-hvlp509",
    "sha256": "48b7b519c2b95469f0ccfe1b65b0d66503f92b3112fa7d0f239774da31f94461"
  },
  {
    "id": "astro-product-hvlpd508",
    "sha256": "3d5bfe7bd893ff4b32cf2438162589558b32631c0e02d77de618e8eb0947ea22"
  },
  {
    "id": "astro-product-hvlpd510",
    "sha256": "da6f62f5632536d6f2c51e1c5420f8a36459700d7c7bd41d9505fe11cbd57dfb"
  },
  {
    "id": "astro-product-hvlpd512",
    "sha256": "7c7c519bfd05649e82e8c2f621da9701807a86fb81b4aa44fbba3e1de2596171"
  },
  {
    "id": "astro-product-pr36",
    "sha256": "0e6fa2e6267f162381bad3d106e30894ba01033282f526f72180a36a6896b2c6"
  },
  {
    "id": "astro-product-t210",
    "sha256": "2c1c7df141b539bfd48fb2234d5c3c5116a97fb35817ac9a4b1c548e4bcc611a"
  },
  {
    "id": "astro-product-ucg100",
    "sha256": "d64dfad40a9011d2422ce6274de8ed5bf215a17c236147a51d093fc69d471b08"
  },
  {
    "id": "asturomec2024",
    "sha256": "3e98904da40c114dc0c72eb0d2fe8d181fe2d50d8076d49c633d79c523ea60fd"
  },
  {
    "id": "atlas-uk-current",
    "sha256": "b28b85f5a5cf491bf35f7be2a9076514ef9fb7c158442c40fe49da58583cde32"
  },
  {
    "id": "beck-new-000",
    "sha256": "8ac19d9be8cfe4e21905dc7aef025fc989dcee542799d4ef54456082ad6539e3"
  },
  {
    "id": "beck-new-001",
    "sha256": "68647a2d8da91f4674f9f265182d3d95d4e74bdcc727cf84a6a9754d1b5acdd7"
  },
  {
    "id": "beck-new-002",
    "sha256": "7177694475489fd5a80c0a6bff9f880011388976ffa55f618d10d81f50537869"
  },
  {
    "id": "beck-new-003",
    "sha256": "590963696b585ca2922fac3f42332ce6a7dcc9bf532910e644f828b3f14c270d"
  },
  {
    "id": "beck-new-004",
    "sha256": "c8ac50a3282d85f0acdab0a21c7cebf2249cf80d0faf68c8e06fb6bd782e7c2a"
  },
  {
    "id": "beck-new-005",
    "sha256": "15946f2f9050e75f82554f3be236e60ecf2547b3c4a40a486da05d286522f124"
  },
  {
    "id": "beck-new-006",
    "sha256": "d7ad95ea6c1cdbb1e4e32fcdd0febe064977770d86e874aa23e4dcb1d2d35ad6"
  },
  {
    "id": "beck-new-007",
    "sha256": "c9cf337801106a7d238f12fbfcc820b94b4587f81d2fe6dd201ad8d88436a6e2"
  },
  {
    "id": "beck-new-008",
    "sha256": "5081ed721d4fd2b5d59da855e81b8970a9fcf7bbc6f4c61a847e27ae5d62687c"
  },
  {
    "id": "beck-new-009",
    "sha256": "6d1db72b6a713acdf86d8717bcd1013e03edda51cae4d8b85f65e931e2eec304"
  },
  {
    "id": "beck-new-010",
    "sha256": "d492e36cc1a2d7d1a169dc84868558c540d202d309bc2d2026077759aa5a0114"
  },
  {
    "id": "beck-new-011",
    "sha256": "da8cdfc717cf985edf33cb1e2a13621c8b1c0dbce9d1cb6745ec024d20447b1b"
  },
  {
    "id": "beck-new-012",
    "sha256": "82f193308452b724220fe023292820e9f253441e05953583047ccbd7392d8ac7"
  },
  {
    "id": "beck-new-013",
    "sha256": "38b084376f39d653522ddf40df0605a65ec0118f6fe67be38650b47d03c18657"
  },
  {
    "id": "beck-new-014",
    "sha256": "6824f2c1470386c919b496ee3478ace48f3d19f2af40ffe28b6e022672b5b618"
  },
  {
    "id": "beck-new-015",
    "sha256": "41e07d7d4c9dddad9e24873f56bf5b75f8f4eb589d28b5e23a3fd36ac6671e3f"
  },
  {
    "id": "beck-new-016",
    "sha256": "66b6481879bab0c835d1f6249475e42706ed77048e6321be6fd74b330e9090a1"
  },
  {
    "id": "beck-new-017",
    "sha256": "38d34882c0561a83b9446fb58b5db121ff47e75dbf291a317d3d940e622b8ed7"
  },
  {
    "id": "beck-new-018",
    "sha256": "ab330b42af9bdd4cda8f3566ec2acb522eedb0e5a5a67c8da74a5064fb637378"
  },
  {
    "id": "beck-new-019",
    "sha256": "0f9e84ec368e630b19e9087ee6305d226f3d92dc05267d3042fa1e2601f4985a"
  },
  {
    "id": "beck-new-024",
    "sha256": "a7766426c96d40ea07c968df4d490c563dc24280cb27d01e8a315b541ca592f5"
  },
  {
    "id": "beck-new-025",
    "sha256": "a5cd0a5722384ebacd02c13345fd78fe1053c8464a13848dbbe90bfb7b244628"
  },
  {
    "id": "beck-new-026",
    "sha256": "fef72d301a8b34ee4478bcda32542cf5d9dc6365613a5c658b961534764d946b"
  },
  {
    "id": "beck-new-027",
    "sha256": "4a6e406b39f398609a1043bdc87eb954c622c2a71385aa652388857b5c1b40ff"
  },
  {
    "id": "beck-new-028",
    "sha256": "4bd0cd0b7d186c23d5e037db20b2640dcf65fdee593e41632ce4e856d32c87fc"
  },
  {
    "id": "beck-new-029",
    "sha256": "d6cfbb65a7f2d6889ec0dd265eb5dc1dcce359e8b6b20407765fd0312b09c210"
  },
  {
    "id": "beck-new-030",
    "sha256": "d2593f4dd61038e30290841651560c2bed0ad58c21bb9e6d988b912d958eef4b"
  },
  {
    "id": "beck-new-031",
    "sha256": "9b00f3dcacbc241a9d31105baf896e335fd599f9f8baa51a9aa9745eead2bd37"
  },
  {
    "id": "beck-new-032",
    "sha256": "4deebaa8d83f085bffb6a235ebe3470f4399d9253ef61b5f843329604f57d4f6"
  },
  {
    "id": "beck-new-033",
    "sha256": "c4724fbaad05b4ef73eb02d5f1cc523945402ffa65bdc1a36df89517628ad96f"
  },
  {
    "id": "beck-new-034",
    "sha256": "eaa73a3795d483b86b222014908a058526997ff6a932c5ca9351851b12b2abed"
  },
  {
    "id": "beck-new-035",
    "sha256": "9301a4ded0f846774334eed84e293c73ae5f547669abafbf6b363b9f4eab6e46"
  },
  {
    "id": "beck-new-036",
    "sha256": "edceaba7c6ca2b4471d21d42525246e1d1fc840b49c2bca1055aa72ac87ae2ce"
  },
  {
    "id": "beck-new-037",
    "sha256": "b64496f9f54e645e12f1862ec887fb827e47981c720f60d03cb83a873779d986"
  },
  {
    "id": "beck-new-038",
    "sha256": "e4d157cff3504c587d26d8a05ff5cf1beb2ed7ec6d77d2c94d41cbe7e86b3ecd"
  },
  {
    "id": "beck-new-039",
    "sha256": "861174a932025e7d961a876edd400c094863e38207fffce7d288948c3af2b66b"
  },
  {
    "id": "beck-new-040",
    "sha256": "4e97408f0e7bda4cb8f34fec0e12df5105709630f9b3bb16db0c59c585873bba"
  },
  {
    "id": "beck-new-041",
    "sha256": "11cdca17876731390f603930ee74a2fc898a589e053ef158e4249bc1c965f232"
  },
  {
    "id": "beck-new-042",
    "sha256": "086e3d1d70d79f692cc82f291e0df7ef72266419dbb8289badb52fbe0b686c47"
  },
  {
    "id": "beck-new-043",
    "sha256": "5ff90aa50fa493a715a515601102aefec4ccc13e7304c4bb78735d89962597a7"
  },
  {
    "id": "beck-new-044",
    "sha256": "84860e893eafd0ac67c57c636c7512fac13d8ddf16ed1fab803a5bfafe581907"
  },
  {
    "id": "beck-new-045",
    "sha256": "e734879142fd2f3b45e2f40e80a81a9178f9499531e8f416a09f07d3d64f15a0"
  },
  {
    "id": "beck-new-046",
    "sha256": "121cc16ebdc167d9c031186290476d6f70dabf383ef6a613f0876a07ac0d18f9"
  },
  {
    "id": "beck-new-047",
    "sha256": "4de07760dabf0029136db92e1916a693ab38ee90bd94b1668eaebb950043cac1"
  },
  {
    "id": "beck-new-048",
    "sha256": "b97797ff4ffec5602b876f6e98745fbaf4c2c94916c666e79c54088ef600442d"
  },
  {
    "id": "beck-new-049",
    "sha256": "0e6d82d21c2c7747be8dd69c5b491e1345e09d585e43351b983afe9190c64a56"
  },
  {
    "id": "beck-new-050",
    "sha256": "e8ee16d6069a7096a3f51a72faa7de4421ccbc9c52ca4cfb166ec2c5a0be1958"
  },
  {
    "id": "beck-new-051",
    "sha256": "651b443ba7bbc69dda2a78d78031b2a696c1c567cb90c19da7b46a337f3569ef"
  },
  {
    "id": "beck-new-052",
    "sha256": "a22708d538c592a5b28e4931b166e7174bddb80345d1c25833c503f4efd6d59e"
  },
  {
    "id": "beck-new-053",
    "sha256": "70fdcbba707a91e1b19e7ef5816e09e11bd3bc72935aa7c0aa195292cdf51303"
  },
  {
    "id": "beck-new-054",
    "sha256": "b80934d3e1c674feaa7c64206f90653daea3f5c0f8b0e739f65fc4d6cfe4fa5f"
  },
  {
    "id": "beck-new-055",
    "sha256": "74e79ad00027bd53d518d28cde719c1f433d7b5d6dbd42ed20dcc610af7c1200"
  },
  {
    "id": "beck-new-057",
    "sha256": "bd8d53668b2dc6002b7551a359a56dcc3f844591f85a02016b6fc168f09eadbe"
  },
  {
    "id": "beck-new-058",
    "sha256": "f9e7544b31d32176011677c9f30693b62241e1f20eec8396f498aee1926bfd9f"
  },
  {
    "id": "beck-new-059",
    "sha256": "1c4096fad7c4a1bcbdfaa401773678c7b95df737de91f7f6a6c6d945e236aa07"
  },
  {
    "id": "beck-new-060",
    "sha256": "6855e6432cd946905cb6f8e6048728f79c40b930c5eedb0d344a27b2114576f2"
  },
  {
    "id": "beck-new-061",
    "sha256": "038793e7dbe9b8beed1549b9ff041d87e83e38b640a57f44c62ba7bfa1c2b3d7"
  },
  {
    "id": "beck-new-062",
    "sha256": "7c1070b8b0a6ec4c5cc598fa046206264b8e6fbc4df5a6c598eeaeca522f6744"
  },
  {
    "id": "beck-new-063",
    "sha256": "5c8f326e8aa7c4bda9dc58e57684f4267f40933ae5aee63bdb6f6aea68c77fcc"
  },
  {
    "id": "beck-new-064",
    "sha256": "885a692711786634fb62a457bb4c16592411a9309ec73b13a6310f19b0009c4b"
  },
  {
    "id": "beck-new-065",
    "sha256": "7c94a263fdc4cbadeff9c15881197f2d2db80253c79525b944c995e5a5af89dd"
  },
  {
    "id": "beck-new-066",
    "sha256": "8fda37f939b4d9c0df546f7c835f7895e483cdd560e96c7e170493eb8eaf458f"
  },
  {
    "id": "beck-new-067",
    "sha256": "fdf29f51237aa7018d693e87da5742232f982d1d631158f5fdf0382e95092045"
  },
  {
    "id": "beck-new-068",
    "sha256": "f430d9950bcb9457cc236ffa908b198476704371961ed722741dd4bfe91c3993"
  },
  {
    "id": "beck-new-071",
    "sha256": "89c783064b35dbb07eea4960834bb206b351e68be2c0cec28382dcd2f145d9df"
  },
  {
    "id": "beck-new-073",
    "sha256": "11587c2e27ddfd3d63961edbd5bf964b92c2af16327f5b3dd31e61ef0aa417fd"
  },
  {
    "id": "beck-new-078",
    "sha256": "7aef88356cd30f37effcb800b03aa71d8865e3ab0ac1620b4cbac729f37b9bcb"
  },
  {
    "id": "beck-new-080",
    "sha256": "c44761bcfe3f5065558c4d501d50870943e1caef80cfa80f9927feb75dc7dce2"
  },
  {
    "id": "beck-new-081",
    "sha256": "0996a679c188840926b2f79df896841e098e7adcf4a8cf664458a0133f85db79"
  },
  {
    "id": "beck-new-083",
    "sha256": "2d0ff6a23869be72a4ea995c5ddacdba4655cd2e12c9c5b2cb1f726e13f4c294"
  },
  {
    "id": "beck-new-085",
    "sha256": "e0d2a2bf535820de530c5d04a3d9965a243ec108e89178039dc10669c59bcb78"
  },
  {
    "id": "beck-new-086",
    "sha256": "b9f25d33676c8291bd893d833abf8c54a2d0aa62577a20facc1aad14e993282c"
  },
  {
    "id": "beck-new-087",
    "sha256": "ee0b7c42849ce37f90eab421b4a59d05d51726e70361ff19500b35401c2d4bad"
  },
  {
    "id": "beck-new-088",
    "sha256": "a607540e7636e21acce87577299d6bb16b30bfa4194cd04666bccb6198b3704e"
  },
  {
    "id": "beck-new-089",
    "sha256": "2eb6285c6033738339aed9b6c813cb85b75996974c8897f31b36e0e9f1eb95cd"
  },
  {
    "id": "beck-new-090",
    "sha256": "38dad29a6748861d54067ade16a7f33b08496567fd7ce712fb95af42228c5f52"
  },
  {
    "id": "beck-new-091",
    "sha256": "0e5f08e631a1aa3783098b53f1c5f44f15aa3ff3d024aa580d9a86d055b8d54b"
  },
  {
    "id": "beck-new-092",
    "sha256": "c8165ef58c9c427b24b9f719fba1de8a12447197fbe2586faeaed903191d53a0"
  },
  {
    "id": "beck-new-093",
    "sha256": "ebd5414f676af367ba46a8a9d4148f7cf5d424e056bdcf95ca15caadbd19b1b6"
  },
  {
    "id": "beck-new-094",
    "sha256": "6f8e9d2722dd66c7a1e8dad4e0bfed94539ca15512ec57577878f4b31a93ef7d"
  },
  {
    "id": "beck-new-095",
    "sha256": "947c653d0d4264277abde91787e644c3aaab7fa9325aa315590e51f2c80483d4"
  },
  {
    "id": "beck-new-096",
    "sha256": "2f55398da51a957f025552f401eaee02c2f89a719ecf34cb3a59dd233966b147"
  },
  {
    "id": "beck-new-097",
    "sha256": "72fdcef8aaeab6bab336438d2d569d112acad787c8925b9937b531d26d35c86e"
  },
  {
    "id": "beck-new-098",
    "sha256": "2a893edf2df91881caf159c033b73360b686c22f3456a9520ab24c6d561a180c"
  },
  {
    "id": "beck-new-099",
    "sha256": "38329ff75b65a258cd32039035a7cf76a16109f5b9a31944b6ebe457c298bbf6"
  },
  {
    "id": "beck-new-100",
    "sha256": "46a7b6a6a787099ca704ee75342b5cc2520a1762ee08cfacaac1d380f262eb39"
  },
  {
    "id": "beck-new-101",
    "sha256": "7e9fbe23ca974213b43775565afae14f50e11b14cf13be7d0cdd56bf806da073"
  },
  {
    "id": "beck-new-102",
    "sha256": "883662819bc0fc2531525b497cc118bceb8a80a2ac5b3c4eacc5292cd30cb354"
  },
  {
    "id": "beck-new-103",
    "sha256": "578fdae4bc58a2698e3ee6bba5cdd29088b728ced50e896571d7dd38ce8f06d6"
  },
  {
    "id": "beck-new-105",
    "sha256": "b0253bc50ae4ccbc578c20f479c7fc7a6736760b09317c32f61ddfef51506b3a"
  },
  {
    "id": "beck-product-001",
    "sha256": "11bac117ac52d3950594fdc3630e2a43ef12efed6b9a28849e53bf3324a6ebbd"
  },
  {
    "id": "beck-product-002",
    "sha256": "716ef7d166111c103de434cdbe0c97b3978e88e35441c83863b65d032ca99988"
  },
  {
    "id": "beck-product-003",
    "sha256": "2e62ceb17b2d7ac6733d09cb0f22c9b8d05c203a1c4be962c135c77db43b7e1b"
  },
  {
    "id": "beck-product-004",
    "sha256": "1ef676dc486fbd75234ad2f24bed9f0180d2004fe16c915c82a2774f7d7b51e6"
  },
  {
    "id": "beck-product-005",
    "sha256": "a9d90a6f2df8cf9343fae3539df5b26c3031e4d384a7c66c21b6a73e97b42a96"
  },
  {
    "id": "beck-product-006",
    "sha256": "f93e6707bb667d5097e702d342e0161bd36346021e3b03183464dc01a5a9af42"
  },
  {
    "id": "beck-product-007",
    "sha256": "b99bdc8de432c1715613b7e67e6eaab5a80aa3aebbb93272135ea04bb038276d"
  },
  {
    "id": "beck-product-008",
    "sha256": "fe83be29b2ca7d03423865e30706c3332b990b2ee24536a26ad8d2f3aabc6ad3"
  },
  {
    "id": "beck-product-009",
    "sha256": "600c73c4a37776961b999ab05094c0ea0ff0d5e6f5ba53f12714b0f07c330b21"
  },
  {
    "id": "beck-product-010",
    "sha256": "9ff5eceffbe7e77482e0ce37c612af4a4e39e81aa7a7b1da5c5708a9eaa0e27d"
  },
  {
    "id": "beck-product-011",
    "sha256": "5a8226dee79dfb1783f49871b18de313a49beb60166037c3c6e657d15b5ca86a"
  },
  {
    "id": "beck-sheet-001",
    "sha256": "5e8f9d5d82368ca27fff3d52f13d889e7a5342f19043010f2daad13311f0a559"
  },
  {
    "id": "beck-sheet-003",
    "sha256": "ae5b627df621e4d3c1139adb600d0950d2c36798d50ef8463348b951386dd4ed"
  },
  {
    "id": "beck-sheet-008",
    "sha256": "ee4d09249811609dae5f7ed42bbbe85063d322dd6dd387f8e127bfff5670448b"
  },
  {
    "id": "beck-sheet-010",
    "sha256": "aa0e44ddedaaddf388e27d89b26ac9f0d962fd47d7891d8cc39486bc787a0f12"
  },
  {
    "id": "beck-sheet-012",
    "sha256": "5d29aeff8f81a378c3f78e291a3f13d0911f355fb81e3e4af735b39dd41eda1e"
  },
  {
    "id": "beck-sheet-014",
    "sha256": "ae2e1bedcc3c411875bc95dcb00aa7f224eb3583bef6b4693b6782bf7caea6bd"
  },
  {
    "id": "beck-sheet-016",
    "sha256": "0fbf49b035f0b6e6c84e656b59a087a36051ca8889c0edd07a3134fd00e17373"
  },
  {
    "id": "beck-sheet-017",
    "sha256": "daae7683a8b6f27da74832565ca5f6bc5987b1bc2d5bb62ecc50c31ee62644a8"
  },
  {
    "id": "beck-sheet-019",
    "sha256": "ff4b6a551ddf5aba4bf38eb55f01700c0f3a75006c85fabd9bc9d1aaf79a1162"
  },
  {
    "id": "beck-sheet-021",
    "sha256": "7be99adcd2c3f34cd33ba320996a5d1cb4481ff0c6f412f439fe9f33655b697a"
  },
  {
    "id": "beck-sheet-023",
    "sha256": "ecbe488135e9856ff10691bbdda2f5fa76eae3d1ad39845f3bdc4488f2921f7c"
  },
  {
    "id": "beck-sheet-026",
    "sha256": "c25a025b09bfbc9ac722f57c24664a3d8fd08f0c0b957f14bd3996ac48170ad1"
  },
  {
    "id": "beck-sheet-028",
    "sha256": "e808c51347c284d5f28d5c07da2e2ce2c3d4d7e9fb64a5e32924daa138db9a8c"
  },
  {
    "id": "beck-sheet-029",
    "sha256": "4d25774d041f18d8a4d48d60bab1206dbb3656f269a3e4f3abb03dc15ca89f90"
  },
  {
    "id": "beck-sheet-031",
    "sha256": "7566b65db9840f5d3ab228c366ec9e3802a87c10e5a4df8cc15caf15cd7a985d"
  },
  {
    "id": "beck-sheet-033",
    "sha256": "415ffc1ed9cb3cc03abc27cb2e3a7803a00cfbea4b5fb17b93f74f91a8142a01"
  },
  {
    "id": "beck-sheet-035",
    "sha256": "a00118dfb32b441c12e4f18f1d0d694abfe6fdabe28a4f81f6b8d503e70773b1"
  },
  {
    "id": "beck-sheet-044",
    "sha256": "e0f409d231d97d6fd0a62f1298d420e12632bfe09054172bfd06dd21a30b4b0d"
  },
  {
    "id": "beck-sheet-046",
    "sha256": "b83327fe7ae33e3c6ae331fe640c5475378a6ff4a03d6866a62c4b91ab53bf83"
  },
  {
    "id": "beck-sheet-051",
    "sha256": "e4d184d824abfe1da2fc235e27c2646a4316d55b00a974816bb7757b61ad3667"
  },
  {
    "id": "beck-sheet-053",
    "sha256": "fe28bba9186c62af06c209cf3945efe7b7e7d9272bb63caae02d125d6de128a7"
  },
  {
    "id": "beck-sheet-055",
    "sha256": "ae28489e1c20e220aab922cc636cc2d94aa9d5a8f1317e3d91427e9fae161e09"
  },
  {
    "id": "beck-sheet-057",
    "sha256": "4ff7ad9c3241ec29f8c0ba30c5b21f7c695f87b00b77ae3968a7169f7ec42d7f"
  },
  {
    "id": "beck-sheet-060",
    "sha256": "df0a075581727e99393b58dc1cad1e22507fbaaea71a24f1f76ed2da31dfab53"
  },
  {
    "id": "beck-sheet-071",
    "sha256": "c9115f140ac4c664c162109a84a1c02e0a06c9cd0033b9758df9d76d33af4cac"
  },
  {
    "id": "beck-sheet-081",
    "sha256": "aa7ab70d3b9788ed21e07822e0ce08444169071bd753e41757b62da8062a8759"
  },
  {
    "id": "beck-sheet-082",
    "sha256": "246ffacbd1a01b19b4e88797ee3ef8040537586dc476191d30f656aa3c51ee80"
  },
  {
    "id": "beck-sheet-084",
    "sha256": "c49c0bd8a8df0fea7a38d9cc90e239500f917bd7a113609ab0011b039cd6abb3"
  },
  {
    "id": "beck-sheet-086",
    "sha256": "56814330e2a1ccba2e97c5506df750df81972c0bea2294443b82537a349a1945"
  },
  {
    "id": "beck-sheet-088",
    "sha256": "be621b91f972b4f8c71db57eb17b29515cfdf360dfbe13a50fc478bde2e5b368"
  },
  {
    "id": "beck-sheet-090",
    "sha256": "f506b46ccee7e3102cc346d3eec338ec21a3d293a7403256f1b1a5615d25037a"
  },
  {
    "id": "beck-sheet-093",
    "sha256": "d6e3e0eea24e21ba77db4de0973e79a911c432e1200219683aa724dd9b428729"
  },
  {
    "id": "beck-sheet-094",
    "sha256": "3fe1511352260a8472a8e58558be36890994aa71fb7234358e29f659f9f5c2fc"
  },
  {
    "id": "beck-sheet-096",
    "sha256": "07e7a2d9a74561b1e41abe8dd28e79c71f444bf347a80666b6b4c41b579eac41"
  },
  {
    "id": "beck-sheet-099",
    "sha256": "0bff5c92d0500b41997f4ab851dc8cecbac043881cf49516792025d2b877413a"
  },
  {
    "id": "beck-sheet-101",
    "sha256": "cdc7a52eb01b48b8589d5c4162b96b92bb9048238e62e0667fffc31de5a2bd9e"
  },
  {
    "id": "beck-sheet-102",
    "sha256": "194de2e9ce43da86e1f8b800d02f4496d6fcebdfb6b385b463bcce759c180896"
  },
  {
    "id": "beck-sheet-107",
    "sha256": "eda5d360effaca202f1d0bf574f78ac3a6db562ebb3c12f290a647e7b17c8f36"
  },
  {
    "id": "beck-sheet-110",
    "sha256": "03bd54fd99c84ee4ef5ea2bda3a2247e9ba77dc9ef0e2e010b13d949c6154756"
  },
  {
    "id": "beck-sheet-118",
    "sha256": "089a0426f883037c7e5dd1fb8fae3956770d51b2055f2f281c7d6ac59b4b7de1"
  },
  {
    "id": "beck-sheet-120",
    "sha256": "d36ed9e7bf67217df911246bb918d3af6b714df383bf2e060c28743d664680e1"
  },
  {
    "id": "beck-sheet-121",
    "sha256": "05aa5f72b60b65fa7f4e5fe9dd6a5ecfa2e2079dd04752e39212ad387c5841ee"
  },
  {
    "id": "beck-sheet-124",
    "sha256": "248a833a233be96779d667d9a1b4e27a3c762a38fb6e252e3bfc92b81ffb0861"
  },
  {
    "id": "beck-sheet-126",
    "sha256": "880b30f612b6ad69f1c00263dc013831aa4eddeb932285b0b15aeb23354ff8c4"
  },
  {
    "id": "beck-sheet-128",
    "sha256": "31939a8d1d73c57fcafdf1b5ae190a48ad54730a9c1d1a798880f0a3fa23fda5"
  },
  {
    "id": "beck-sheet-130",
    "sha256": "7f3ab3541d6456a30c19cccf1dabb80f04a13fa845409dcd69dc959fecb95cd0"
  },
  {
    "id": "beck-sheet-133",
    "sha256": "f25f6db52a1ab52a51e0c5f9f57fdc33d4ddd3a526122d6c3ed23064a99b5116"
  },
  {
    "id": "beck-sheet-135",
    "sha256": "6b236c2640141d57b5cc3d302ccfe168458ae32bf1aa2c204ae6b31ba79b500e"
  },
  {
    "id": "beck-sheet-139",
    "sha256": "deaf7ea333c3fa6120e3f7a607283c2b224b91b9f4d4c908c53284049f044b50"
  },
  {
    "id": "beck-sheet-141",
    "sha256": "9cd7eefa327765ad0821d35beee84e8ac68d8d4909e236eb907058b27d71172d"
  },
  {
    "id": "beck-sheet-142",
    "sha256": "aa379601daecbc7deeb3f05bfee6184fee46753ac97e3339f1c3d0ed70497624"
  },
  {
    "id": "beck-sheet-144",
    "sha256": "bd45105a333eca6e2972c49dc7019963d7a5e78a6ec8233edeff2fc3f5cf9ac2"
  },
  {
    "id": "beck-sheet-147",
    "sha256": "ae5cd76426973cdcd1f067dea4d49de0de451f7f20b0a0bffaab89fcd4467af4"
  },
  {
    "id": "beck-sheet-153",
    "sha256": "882138209a5faead3c8fd3530b1d2551573c383f083bee9961cca527ff8f504a"
  },
  {
    "id": "beck-sheet-154",
    "sha256": "4f1361b679a33cd8482d4cf01effd04b0d875c8503b8a6b9faec145fc610c08b"
  },
  {
    "id": "beck-sheet-156",
    "sha256": "2d48f4735cf1d88e1d7480c3d75c80277a8b8bf7e6a36316d3947f58fdea990d"
  },
  {
    "id": "beck-sheet-158",
    "sha256": "4bde7bf86bb666a10fd88f808e01e89f154b10a3831ee1cac5e94464420fb4e7"
  },
  {
    "id": "beck-sheet-159",
    "sha256": "a89bb2d149acfc41ee8d081d1dce7d0a1b5489b3f3232c41392a79090f0c3722"
  },
  {
    "id": "beck-sheet-162",
    "sha256": "bf547a38fa59bf33bfbfe623f89e57d816a4e63ac7a032052296706a60979abf"
  },
  {
    "id": "beck-sheet-164",
    "sha256": "00847c2d9f6c94a66cb15fba262278aa072d0af225d412efbd9e3c9be39308e7"
  },
  {
    "id": "beck-sheet-165",
    "sha256": "80bb9a57883ac9156f8e73f441b3ee31e9630e0f164092c6f5d60fc5a4389807"
  },
  {
    "id": "beck-sheet-168",
    "sha256": "fb05db86ec7a740345c6e5ad2a5117abf7a25f9da25e52ca6884443503d49429"
  },
  {
    "id": "beck-sheet-169",
    "sha256": "433c85a27cabd29b184e7c6da99850814911d24f44d2f23565b28a9cc1c3b68b"
  },
  {
    "id": "beta-action-export-2026",
    "sha256": "093d3c7cbc7938221fb842edb0016a1aeb264a7c7238bda2a33296c76ab0fa03"
  },
  {
    "id": "deprag-cz-catalog",
    "sha256": "5856c1eeb1e3fdeebdc9deb8a325507c11726ed3cb8b2c4926f579818da3858f"
  },
  {
    "id": "deprag-industrial2024",
    "sha256": "b0dfdf24303e4762a7a4f7442fb881a614afff2736ea5bcc02d62e3b769b18e8"
  },
  {
    "id": "everwin-extra-0",
    "sha256": "4a4cbf57f9de93243017e710d40288f0ae2937c3dd6b752c05ff2e429d12395b"
  },
  {
    "id": "everwin-extra-1",
    "sha256": "a798523dd2b8c95391d10ac96a6b4185539b55c9f4455178bc7dcf48d81bd1e3"
  },
  {
    "id": "everwin-extra-2",
    "sha256": "aa31f0e291f733035a9a8b77fa722734ac572d3b78f0fe7f4f48d88d2e4aa336"
  },
  {
    "id": "kihlberg-operating-0",
    "sha256": "98d89b10d6b08e4fed5d51f7d050b666c61a7c70c74cc9c588d3b1733d1bac1d"
  },
  {
    "id": "kihlberg-operating-1",
    "sha256": "31ee32cc3cc4ebfb2c70bf59da2a015a315f10b8e445e22e7ed2bef19b9f5516"
  },
  {
    "id": "kihlberg-operating-10",
    "sha256": "f3aa58c187daf08bac14997b2b8088ec0c4bcfc76774da073c41cb254239ac03"
  },
  {
    "id": "kihlberg-operating-11",
    "sha256": "8b7e64e70b95884667c72a7243ae8d78f9548b0764010df160f5b37d15dff8ea"
  },
  {
    "id": "kihlberg-operating-12",
    "sha256": "b7f79aa82e6c3a6de8ebaab3eef5f4604225e089ef72268b4c60e9a5b3081f2a"
  },
  {
    "id": "kihlberg-operating-13",
    "sha256": "ee2e7394ab9bcabd722670054cac854181202eb44d8a631875ec557b264aabf9"
  },
  {
    "id": "kihlberg-operating-14",
    "sha256": "f99de7fda086a4102e3d77b0f7d05f2e7feee490fbd7ac68a0d6a5b3f5ce93c0"
  },
  {
    "id": "kihlberg-operating-15",
    "sha256": "5b89a762f916a55058ae98b0fea19534dc55305784fbab6e26b2c57ea42383ac"
  },
  {
    "id": "kihlberg-operating-16",
    "sha256": "580eaadc4f9f5a98efc40985d231b062f80af3c17e99a7754dc45073c5fbc284"
  },
  {
    "id": "kihlberg-operating-17",
    "sha256": "10f60ef921d084c998ff09a3635b8285c2a0b78dada985f3f9db37be00073eea"
  },
  {
    "id": "kihlberg-operating-18",
    "sha256": "1371042a59bf2f381ff5cafc2eb6b033b317c6e1af861938338cc906457aad18"
  },
  {
    "id": "kihlberg-operating-23",
    "sha256": "f30b17aa54862440344106de4222d02ec6ea63f57fbdb53989469ab5fefce7a1"
  },
  {
    "id": "kihlberg-operating-26",
    "sha256": "d7686d6f2884a5b83bbe9526f456bafecc953fe419628b782eaf13960f71ba2a"
  },
  {
    "id": "kihlberg-operating-27",
    "sha256": "26553e47bec39b13a8209828c439115d79d16bc740bfb3ad4369e5d256ca10e3"
  },
  {
    "id": "kihlberg-operating-28",
    "sha256": "b81c4f9c7a3437ed16a41805d28130574ecbaf776afbe644086b50e0bd598d51"
  },
  {
    "id": "kihlberg-operating-29",
    "sha256": "b3b9b4c1f6ca39ce2e897041feb971cf1176cd2e661b54cce94fe2d208e099fb"
  },
  {
    "id": "kihlberg-operating-34",
    "sha256": "0c11633a253a890b4db203ff967235e8698763b209129c52f08d6f6290581fe2"
  },
  {
    "id": "kihlberg-operating-35",
    "sha256": "696adb9b674e4a4167493b90fffd54c6897c49cc154fed16970d7bd42d73f8ea"
  },
  {
    "id": "kihlberg-operating-36",
    "sha256": "7b0fa533868fe890ddf617bf371fe446bf5f9a2d4be917e718b8af8b890625d0"
  },
  {
    "id": "kihlberg-operating-37",
    "sha256": "0a5613d65991f477379a3e300430c4a406add29bfbee1a947fb11c0181319fbd"
  },
  {
    "id": "kihlberg-operating-38",
    "sha256": "8a64fb9bf19cfce881f5bbc94ad3106ef7e4bad56481b7d480a65137f3345abe"
  },
  {
    "id": "kihlberg-operating-39",
    "sha256": "1a4191f9f02fcfa2cb5b2b6d7ad9709fafff0264dca9b5c5a5adfbfb9099ae3a"
  },
  {
    "id": "kihlberg-operating-4",
    "sha256": "189948b20a23c66ae64e02d7169e7e4c93df2c2f10a13ed905d2da48b44e8990"
  },
  {
    "id": "kihlberg-operating-40",
    "sha256": "742bbcb24473f1f55ebdd3c0ec3c8f4a35977c8b8f7ad0617986b94caf809a1c"
  },
  {
    "id": "kihlberg-operating-43",
    "sha256": "44f69177d182f53db8e7493f2739633038ab33cbc6a8757cdcf0b74098bb1f9e"
  },
  {
    "id": "kihlberg-operating-44",
    "sha256": "fb2dfa651f5dd11a49010ecacc4fbc893a598a61a511c92e561d87aedb3968e4"
  },
  {
    "id": "kihlberg-operating-45",
    "sha256": "0ccabe4c8dac02bb8df23b91bb0298d6b415052d445aa7ba2e97c17a015f42fb"
  },
  {
    "id": "kihlberg-operating-46",
    "sha256": "b671c1b98d42257c1f42d5c0b369638ec9999d77eb93aa21ff8b27a35c0099e2"
  },
  {
    "id": "kihlberg-operating-47",
    "sha256": "96befa14b93208d9514f19af7a3145f580b03d249e3b652a42415f84400578e7"
  },
  {
    "id": "kihlberg-operating-48",
    "sha256": "231293131c595ddada9a5fe03bc0d37d866b0529594742aa2b19a57742b35692"
  },
  {
    "id": "kihlberg-operating-5",
    "sha256": "1d6b272d063cb01f70fa9283fd76edd0a4a1393188cc6b1f886a7282f68e81ab"
  },
  {
    "id": "kihlberg-operating-6",
    "sha256": "84eee8077f929274f761170cc6264d70d099eeec2d22618027c3b4c001afc770"
  },
  {
    "id": "kihlberg-operating-7",
    "sha256": "fd5f8d05a5754731d3498f818a19deb2bb5d3c9560aaae3310e6a13b8ed7e0e9"
  },
  {
    "id": "kihlberg-operating-8",
    "sha256": "493ae3033e0a9e505560c1f5d4fad37ecc852ba0ca2e8edbe54841fb9eaad911"
  },
  {
    "id": "kihlberg-operating-9",
    "sha256": "1fc3b2b9d682e567609820f0ddf737e156ca3bc07f0a2e152515d1a7a7d27ef7"
  },
  {
    "id": "kihlberg-tool-10",
    "sha256": "a4570c3ba0ca8f4b9a589a452cba53fd9fc4d6c5b68c6f56f5029d768460de20"
  },
  {
    "id": "kihlberg-tool-11",
    "sha256": "0d4293e35199c5e01b7a6e7743b776a8612474324db8836af8c623b26def3d77"
  },
  {
    "id": "kihlberg-tool-15",
    "sha256": "8d111b9876e8e2792c0b426a0c534aa1b3aeee74278f7e47e4167c6015b9b74a"
  },
  {
    "id": "kihlberg-tool-16",
    "sha256": "68fb4f2f05b312ae2d73066394b7e7df6c402da88f22f50501551a9d6cd33d3b"
  },
  {
    "id": "kihlberg-tool-17",
    "sha256": "8907f1f8c782ac19bc50a0a8385e9e8ebb8cb08365b3dc34694ba53478d2473c"
  },
  {
    "id": "kihlberg-tool-18",
    "sha256": "67ad1d462b33e7a9faef582f1c8a30edf5365ff48d4f6ca4ad06e375e2a2c0a7"
  },
  {
    "id": "kihlberg-tool-19",
    "sha256": "a80621dce98b75e34bed95eed40e8aa3c9dbf21854c8e6cf79c1c862e7dd282a"
  },
  {
    "id": "kihlberg-tool-20",
    "sha256": "314edd5afcd7b11a78b17a7a985e20352625dbf4742d60bf280f7b6208ff3583"
  },
  {
    "id": "kihlberg-tool-21",
    "sha256": "b95b3d2a7c62c60aa045007284b299c06e33110125b984e913d89e3fae3934c8"
  },
  {
    "id": "kihlberg-tool-22",
    "sha256": "98da02377369eafa3f9d9ee2485e40c4d1a093d5d5fcf4f310e3d2fa154a7932"
  },
  {
    "id": "kihlberg-tool-23",
    "sha256": "fcab42838adb2525585bd6cfcd5589da142588f5166fc2ae2bf8b8c22ec2c411"
  },
  {
    "id": "kihlberg-tool-24",
    "sha256": "c1ad06fd34f1933d5a0bbde1cae8783e0e5ff6528c395cd4075fcee88f9f4fcf"
  },
  {
    "id": "kihlberg-tool-25",
    "sha256": "680f3d951688b523d32f3c26eb629727865f8cb72ed4a0fe3f214f54222375a9"
  },
  {
    "id": "kihlberg-tool-26",
    "sha256": "912a32c0fa5ce8cdd97dcf48d86662762ddb20f2db4d819fa722254c88f8eb0b"
  },
  {
    "id": "kihlberg-tool-27",
    "sha256": "5343656158463894426c019d20080e3470aba742729dc0960bb80f2d490064c9"
  },
  {
    "id": "kihlberg-tool-28",
    "sha256": "2d8e5b731c86c08d14c56b314396100901d1cf6d96770429c209f4fb2d739204"
  },
  {
    "id": "kihlberg-tool-33",
    "sha256": "3c159f903c2c4ac2f8997776c833e09f89730e28a217b4cb01831110ef4f5072"
  },
  {
    "id": "kihlberg-tool-36",
    "sha256": "e57d85ac5a01dd520fa7c0bec472c5257b0d2ed3f0ab3f89cfd20d99345771b1"
  },
  {
    "id": "kihlberg-tool-37",
    "sha256": "1fb52fef9a3fc1277797afb4fc402dab82520e66029657fdaa1c9f4402606ee1"
  },
  {
    "id": "kihlberg-tool-38",
    "sha256": "071f6298d8bbf5e0c477f811c03618b430afae55883440ca4131df05d2d4cdb4"
  },
  {
    "id": "kihlberg-tool-39",
    "sha256": "532c14cd35abb31813463ed70a941e52705d30bfcb5338d5c208cb6fd81e7a0d"
  },
  {
    "id": "kihlberg-tool-41",
    "sha256": "42f6bc229b528a2c8403989c65b4172e1f0131873ce80ea056f4d73e945ea454"
  },
  {
    "id": "kihlberg-tool-46",
    "sha256": "84d2e8dd015655a7875a9435346d66cc6c2765d99d3298b5e715ddae9d1d5334"
  },
  {
    "id": "kihlberg-tool-47",
    "sha256": "f357d76105c8aabc3f60006cdcbdf065487cb3ddbe6a41b3a11e618270e755cb"
  },
  {
    "id": "kihlberg-tool-48",
    "sha256": "dc3ce87810f14e0fd8e9625f970acf42197d835a5f34ec50701364f4e52a56b8"
  },
  {
    "id": "kihlberg-tool-49",
    "sha256": "0150b1306ad31981dc5a598bc8f421c3fe565ccbf086a4e5b75877c0d3177b79"
  },
  {
    "id": "kihlberg-tool-50",
    "sha256": "b9e6defad05d0bbf31d28f1cbd85e0dc76a9275c3a9fcfa842d94dba3415b86d"
  },
  {
    "id": "kihlberg-tool-51",
    "sha256": "d7f1601f264485fd54293894b20ff865f9bf2ccdf64f81b391e3b95cb69c18a9"
  },
  {
    "id": "kihlberg-tool-52",
    "sha256": "f94c341c7eb3ef7462411d02a395a6170c7d1aa086854a762c63d048f830e8e6"
  },
  {
    "id": "kihlberg-tool-55",
    "sha256": "d150be2127fcdf0db4b9a8eda3381ac7d2fc8ebc1a55f56a12526ae443fcceb9"
  },
  {
    "id": "kihlberg-tool-56",
    "sha256": "09b5ac728615f8ca8c7961721419c4269a74bf5cdbd4ad6110690880dd5c8274"
  },
  {
    "id": "kihlberg-tool-57",
    "sha256": "9781dfe4850b3e7f40549c1e5c6a24d92e14c74b340b2d089d626f69707aa1fa"
  },
  {
    "id": "kihlberg-tool-58",
    "sha256": "86f1ea75955490f7cf4e79a60bcf4c026512adfdca12d936e025c260ec691174"
  },
  {
    "id": "kihlberg-tool-7",
    "sha256": "c7a8fb17418d750d01bfbb0e2ae6b876cda0e542a107c679649f4a223ef3a0f6"
  },
  {
    "id": "kihlberg-tool-9",
    "sha256": "e81344761cbeb220541c51ad6082a0d9f57459c71c4c2754dab1bb171cffb7af"
  },
  {
    "id": "pneutools-product-00",
    "sha256": "80d59d6814ab009cbe2ddb92b66ecdd611f2e8cc0035c05a78d1dc1a0872fead"
  },
  {
    "id": "pneutools-product-01",
    "sha256": "ca5073bae7b5bf092b4ca8ba06ec75b105af70f8b1e5f880bde99bf359c046b1"
  },
  {
    "id": "pneutools-product-02",
    "sha256": "053b74b5e7234f0408cbfe311fc92f7fcc3dc5b996240752547e5bc8c87fbd39"
  },
  {
    "id": "pneutools-product-03",
    "sha256": "564f6d6dcdfb8ac6a53f13d4909d05c7dfaf9d16501e276d868b78599ff14b91"
  },
  {
    "id": "pneutools-product-04",
    "sha256": "410c3035fd9efd9a5dea442bf038bbb2ac5747b34d26bfdc5363280ee9ddf274"
  },
  {
    "id": "pneutools-product-05",
    "sha256": "66f431bb98bc5187d558ed06a5a9b83721abf4d7ac0d46e86a726c344cde3045"
  },
  {
    "id": "pneutools-product-07",
    "sha256": "0ef39fc69d06b15392db36cd3374063684623f42d317ea68a388ac33718aff7a"
  },
  {
    "id": "pneutools-product-09",
    "sha256": "9a5388af70335ee8ce1df7f853a055e4be0a0da11e0c5bd5aae0354e92ae078b"
  },
  {
    "id": "pneutools-product-10",
    "sha256": "ec22c41effcc310cd054c92f610abc19a40b50c529a6c2c403a6372a4b6b695a"
  },
  {
    "id": "pneutools-product-11",
    "sha256": "bbd073b264185262a70cf547745da89de3f7d4ac3060c87f0617bb154e91c4d9"
  },
  {
    "id": "pneutools-product-extra-03",
    "sha256": "4789e7e29d0d4e87e14fa6fde7c67db86845453ec14a7e79fb862fcca119140c"
  },
  {
    "id": "pneutools-product-extra-04",
    "sha256": "f9b89f5cf0b1243e839d68808a4b04190d1fed5434f8c61605f18b09fb56666d"
  },
  {
    "id": "pneutools-product-extra-05",
    "sha256": "02891a509a4db2ab1aa0f10d0461907f4ce604a77547d43ae61f550e619d6802"
  },
  {
    "id": "pneutools-product-extra-06",
    "sha256": "dc9ff6c85853fb4a24b149326eb5dfa3be7f124a0157fc43c98c25e272f32cb5"
  },
  {
    "id": "pneutools-product-extra-07",
    "sha256": "43f5ba8f41cf920411c723093f43f47b61336fc26fbd9a25199d676581059ae8"
  },
  {
    "id": "pneutools-product-extra-08",
    "sha256": "74a75922507f71a59d7c251ef5f319025794ca4dc33cadca2b5a016b9b34844f"
  },
  {
    "id": "pneutools-product-extra-09",
    "sha256": "a99e8384141998419c0d132cc2abed2f084a14a79c4a533dca3e0bd74cd0db5b"
  },
  {
    "id": "pneutools-product-extra-10",
    "sha256": "cc999dc7c995d1a9a3784e2d56542c91a62c883fe2f7fd2aeaeed18d353fbd77"
  },
  {
    "id": "pneutools-product-extra-11",
    "sha256": "af13bf5e18b60209a45098b0376e5e10beec103bdff7ba31f33e68c13b9c9d15"
  },
  {
    "id": "pneutools-product-extra-12",
    "sha256": "19f8eeefe539e08d43c385de0ac26fb15cf7871f29552c2f23abff64579672b8"
  },
  {
    "id": "pneutools-product-extra-13",
    "sha256": "2358fb6b52e8f203dab7d413e317f3dda622edb2ff2aeec7d87e89e81c10d45d"
  },
  {
    "id": "pneutools-product-extra-14",
    "sha256": "2180613139af65fac3e323a9307e742b8ae8dde795ffc0ddcf3e5eaa5f2633a3"
  },
  {
    "id": "pneutools-product-extra-15",
    "sha256": "b581e6f287488c3e87dabe9c6a777dd21e5fe2278d8636bb1b7a0d31f32d237b"
  },
  {
    "id": "pneutools-product-extra-16",
    "sha256": "bd1549929bad96d30770e88e7ed727fe63ccccac504ecb5fdf69fe7fde54da15"
  },
  {
    "id": "pneutools-product-extra-17",
    "sha256": "431be706786b64883beba1d0dd8a6998c7e634648b886ae8cd2e13d2040be4f9"
  },
  {
    "id": "pneutools-product-extra-20",
    "sha256": "a954a95fe257a6ee9ecb96f9c0cc08c1af729a8db13fe9366e130fa6bfecb5e5"
  },
  {
    "id": "pneutools-product-extra-21",
    "sha256": "aba826055b9960161f39c704066797149110b594c4ef06e3e872abb9819c5521"
  },
  {
    "id": "pneutools-product-extra-22",
    "sha256": "ce7b9703b83d1a17cb8b2a912aa33479f0cb91429d5877995a843852e275e397"
  },
  {
    "id": "pneutools-product-extra-23",
    "sha256": "d30e37dd8c61223c1f59248ca39526776b91a3226b2b33a1ca1ea1ff18610263"
  },
  {
    "id": "pneutools-product-extra-24",
    "sha256": "61c818a3dee0fbbbeaf3328c4872fbda685a04562bc516615280ecf2bff2e6eb"
  },
  {
    "id": "pneutools-product-extra-25",
    "sha256": "b7a521629328680a6ef8386e7b4cf426996ecd6a2b33bf87945a11ab33a63ef3"
  },
  {
    "id": "pneutools-product-extra-26",
    "sha256": "712c102116e21d3bc823641c693ef1e029b396c70cd4559cd751d129171f5358"
  },
  {
    "id": "pneutools-product-extra-27",
    "sha256": "41ce34f0ba035447e3db3f7ec29696880122a1dec7f8689fd2497a58f09cada7"
  },
  {
    "id": "pneutools-product-extra-28",
    "sha256": "5468bb06ff9a0158e7fcc0f490c940121a0434f80adc71b42ed15ddc4d421244"
  },
  {
    "id": "pneutools-product-extra-29",
    "sha256": "fd2ea681373472e6158bf6346a8a534ee3b3f8bd1fa833833b21131b03236159"
  },
  {
    "id": "pneutools-product-extra-30",
    "sha256": "77e6e5f442eceda02b5355a5b400b29911d5627197bf59ad804e14fb49f87bf9"
  },
  {
    "id": "pneutools-product-extra-31",
    "sha256": "8a5420c3f6bc53f06fb5166c662ad33ceb616182fa5e97814759e520dec151f5"
  },
  {
    "id": "pneutools-product-extra-32",
    "sha256": "ed5227430ee90860fb3bf25a6f1faa7d932b664d41c6a02f43dba09226704143"
  },
  {
    "id": "pneutools-product-extra-33",
    "sha256": "011fd20673d64b399b9043ae556d089a42e5d684bc694a7c1ad2f2c37043196e"
  },
  {
    "id": "pneutools-product-extra-34",
    "sha256": "b64742f7dc7d7d19b7f7842f9a1a51d82d9c1103e2fcb67512032e904d420a22"
  },
  {
    "id": "sata-1000b-actual-manual",
    "sha256": "a30c850606ad45007123a6408a14ab382fcf0da230810e1400f9c8f678458608"
  },
  {
    "id": "sata-baseline-1200170-recheck",
    "sha256": "312c535866c267658fb7435ba49696b596b75a6761c10dc8fa0bfa9875ea8487"
  },
  {
    "id": "sata-current-catalog-2025",
    "sha256": "5642cd50517b288bdf8e546c87fb3a5b35a3528607fd9bda6cf17fa0cd85582a"
  },
  {
    "id": "sata-family-1000kh-manual-0",
    "sha256": "230aebbfe6da164fe4b8b34edcdd31eae4493aff04c34cea3685a85129fd4785"
  },
  {
    "id": "sata-family-100b-manual-0",
    "sha256": "e48714e4996ae4bf60138898217dea547b8f7009decb134955fc68280da2fb58"
  },
  {
    "id": "sata-family-5500-manual-0",
    "sha256": "2ad3017a91c08d70d4f949cb306fdb851be6ba4270f72198019cc19ee6b65788"
  },
  {
    "id": "sata-more-jet-x-manual-85",
    "sha256": "031a9897c610608a54283fd14dbb1fa0a47dd8aec8aa00eeefe4f6086f5bd379"
  }
];
const approvedRows = [
  {
    "documentRowId": "fasco-11368a-beck-new-000-p1",
    "sha256": "e83281589087ddeb17aca0af898d137a563672f8941579ab935e1d0a2952ab94"
  },
  {
    "documentRowId": "fasco-11387-beck-new-001-p1",
    "sha256": "fc03b42f2b0544df3eb777741809d6a2a716200f2e3b3bb49b366e85433d7206"
  },
  {
    "documentRowId": "fasco-11179-beck-new-002-p1",
    "sha256": "5f0049655ae3e7c22b922a590033cd648cfaad26962e4c880aa12581d38217c3"
  },
  {
    "documentRowId": "fasco-11206-beck-new-003-p1",
    "sha256": "aef42251f7496d38603160fe6f820e16e48c4c98203a1328155cf6d9b46451b5"
  },
  {
    "documentRowId": "fasco-11571-beck-new-004-p1",
    "sha256": "a36c8c64cbaf6f492fc6a69d9461afa4462c1b0a9b74540dc8fae1ffd944a425"
  },
  {
    "documentRowId": "fasco-11578-beck-new-005-p1",
    "sha256": "05e4f94f83215233ebfe696be6fe9b9cd0ed55c95cf89251072a1074b2aee2df"
  },
  {
    "documentRowId": "fasco-11185-beck-new-006-p1",
    "sha256": "98603ab4bc96ceb3445eeb2e5cca08ebe9763fb17ded4bde740e6b5e151e5b47"
  },
  {
    "documentRowId": "fasco-11467-beck-new-007-p1",
    "sha256": "b4a22267f781f2423e76d0dacfcdda9fd27703c06169429e1e05e09339febc85"
  },
  {
    "documentRowId": "fasco-11147-beck-new-008-p1",
    "sha256": "e0f2477767b0ccfc003b2c69d22d0c4746b174cc369d2306d69afa7edd8a84b3"
  },
  {
    "documentRowId": "fasco-11592-beck-new-009-p1",
    "sha256": "9eb10bb59df333ad615380d804fc90f32f9e3246cf7b53e199dd633bcfc1c17b"
  },
  {
    "documentRowId": "fasco-11644-beck-new-010-p1",
    "sha256": "1c0f00be7fd9baf3a08cb5b1e6cac727fdcc4e00c84f60574319844e57a9af43"
  },
  {
    "documentRowId": "fasco-11658-beck-new-011-p1",
    "sha256": "63801846fd5e8aabdc59e3044c27f703befd375de3236ea9e9c08b79b705d88c"
  },
  {
    "documentRowId": "fasco-11660-beck-new-012-p1",
    "sha256": "55e77019bb938551d70f315ae498090ecc3cb1bdb0f86660ac08b1c5bfa6e4b3"
  },
  {
    "documentRowId": "fasco-11120a-beck-new-013-p1",
    "sha256": "7277d17c5489e9313253e7c1d0b0cff7163de91c6d51d2e68b0dc6d443d89e6d"
  },
  {
    "documentRowId": "fasco-11109a-beck-new-014-p1",
    "sha256": "6c850f4951289759c68adf551d1e62284b85430c7521dda36c67719482759cb2"
  },
  {
    "documentRowId": "fasco-11122a1-beck-new-015-p1",
    "sha256": "c9557b35c74d7a69367bae2510fc384fb72ca46f839f7e82428a2a1518194dc4"
  },
  {
    "documentRowId": "fasco-11198a-beck-new-016-p1",
    "sha256": "c9b14753538405fb03073c2d45e2fc360bde4835678cebf3e3a9805e65c414e3"
  },
  {
    "documentRowId": "fasco-11464-beck-new-017-p1",
    "sha256": "d58c5ef03979b333df9f5cc567dafeda06b663827ba4652ede7a00c4b3569f16"
  },
  {
    "documentRowId": "fasco-11785-beck-new-018-p1",
    "sha256": "c9145ada957df9b8d08be45cf502aa1d2febb1b6d9be0ab547b693d8c3787cc3"
  },
  {
    "documentRowId": "fasco-11786-beck-new-019-p1",
    "sha256": "21b1683f0b5bc556527f4a2d5cfa2a85bb0013fd8a3c17a7aaced53950ebd205"
  },
  {
    "documentRowId": "fasco-1169101-beck-new-024-p1",
    "sha256": "ea5f97e5832ef9231b7fbae42d5acc63bf44a5de1654d96c2139d80439c3ad45"
  },
  {
    "documentRowId": "fasco-1108101-beck-new-025-p1",
    "sha256": "58ba1f4f925558206668d6d42c353f2180378be7741e57ffd96fd125445c973a"
  },
  {
    "documentRowId": "fasco-1118401-beck-new-026-p1",
    "sha256": "267be34639e4387f0fa65d7b35ed82bd7c71e2d4c7ced7f50ae3c423ebf510c1"
  },
  {
    "documentRowId": "fasco-11371-beck-new-027-p1",
    "sha256": "1bd1fd4240473d73a3cca2ecd146267afff88ae84655f0e59ee5f4c881df6319"
  },
  {
    "documentRowId": "fasco-1157402-beck-new-028-p1",
    "sha256": "b866917c272504ce25ceb282ea0134e35b458109cf8618fbff0f2cd0dddbe23b"
  },
  {
    "documentRowId": "fasco-1157201-beck-new-029-p1",
    "sha256": "89d381e03a39bd0db090ebd67d35fa483035ee6706e2c5c4d1c61edd7c263ee0"
  },
  {
    "documentRowId": "fasco-1114502-beck-new-030-p1",
    "sha256": "df01f8b5b56d66de84ff18ef72ddc3659d020742e4b3cb7791f3ca45e85b596c"
  },
  {
    "documentRowId": "fasco-1118601-beck-new-031-p1",
    "sha256": "62e7eca9104d3b17f6a85e2a9a730c8776a2eacda5d3a3fc9bf9dc9b6205a900"
  },
  {
    "documentRowId": "fasco-11284-beck-new-032-p1",
    "sha256": "515b3dcd1c50aa495b98e812429cc550f69214007fa130ad0c9621fcce37d789"
  },
  {
    "documentRowId": "fasco-1107703-beck-new-033-p1",
    "sha256": "b0c454e5cee84972f40eb07df2467fc0a4ef30a10600aa9e41707bd795c87577"
  },
  {
    "documentRowId": "fasco-1108302-beck-new-034-p1",
    "sha256": "6e9f95d37210d4244b8165099eac00703eacafd5e5ba6d119f95d47c194b3b17"
  },
  {
    "documentRowId": "fasco-11613-beck-new-035-p1",
    "sha256": "5a5ffe923e960ca848c19882ec229edf328a3966b9dec2d50b24cc8159686aca"
  },
  {
    "documentRowId": "fasco-11800-beck-new-036-p1",
    "sha256": "054fa2545d9baea9ead714a936a3317739fadfc3db22188ce4acad9172ef2249"
  },
  {
    "documentRowId": "fasco-11772-beck-new-037-p1",
    "sha256": "02486de89ffc15ea48a04fbac19d2ba277ccad5ea96bdb1e816183fba30ffd6c"
  },
  {
    "documentRowId": "fasco-1118101-beck-new-038-p1",
    "sha256": "404b586a9b3bf85a59f9eec9262473e8f98f081bf4c6d769709a85a6dc21cc8a"
  },
  {
    "documentRowId": "fasco-11798-beck-new-039-p1",
    "sha256": "1b61b3fe4e450822d028c78b2b00fc1ba5e2e35eec99d911c2e7702de6032398"
  },
  {
    "documentRowId": "fasco-1118201-beck-new-040-p1",
    "sha256": "c6c9db3fd9046b6e55776548c4b00e41b22acef8581108c307943fe597cad008"
  },
  {
    "documentRowId": "fasco-1107403-beck-new-041-p1",
    "sha256": "1935a3061b1b6c34f8085f5d2488d2b0c3728a3402e64fc2ddf3d1ba69fc8f33"
  },
  {
    "documentRowId": "fasco-1118701-beck-new-042-p1",
    "sha256": "fede4210de3529d3d96051d7a63cdea89ba6effd68e435fc82d96be14d9ddcca"
  },
  {
    "documentRowId": "fasco-1121002-beck-new-043-p1",
    "sha256": "979c0fc7e78edbacbf8b681a6c9ee15dd5578dcb880b0ddfcf2cf3e6e0ddbe15"
  },
  {
    "documentRowId": "fasco-1138601-beck-new-044-p1",
    "sha256": "77b978f1222a80b1be2b19cc75909676d8eaa4805774cc9c935041a2b36d3737"
  },
  {
    "documentRowId": "fasco-1148201-beck-new-045-p1",
    "sha256": "71d2934aff65ecae94d1aecc7549c7525e3f2dcff2a7b9fb5e2b7464c98a2053"
  },
  {
    "documentRowId": "fasco-1107303-beck-new-046-p1",
    "sha256": "6cdc13ac660f01b8b37d6fb1585fac8cfe6cb55d3e9fd6359962da106abf1e28"
  },
  {
    "documentRowId": "fasco-1118301-beck-new-047-p1",
    "sha256": "d3af393e4f752d4e6c50662c0abdaa5aa33fe5c9bea8193dcab83c837f5137e2"
  },
  {
    "documentRowId": "fasco-1118901-beck-new-048-p1",
    "sha256": "776694c46439a30b6b18734a65cab9050040a15530d6c28453df1397fcc16d58"
  },
  {
    "documentRowId": "fasco-1108501-beck-new-049-p1",
    "sha256": "a3b3908a803e5b6deac4563c12d63cf5bb3e185ef7abd4fcfb2143313165f4c3"
  },
  {
    "documentRowId": "fasco-1108402-beck-new-050-p1",
    "sha256": "106953cde198be2c9e618573639c4241d4a3d180434e363f3c1d42ec28e08138"
  },
  {
    "documentRowId": "fasco-1148101-beck-new-051-p1",
    "sha256": "b7548e3039be06398a27cf05983183d1209c570686295b3386c85633ed55a594"
  },
  {
    "documentRowId": "fasco-1169201-beck-new-052-p1",
    "sha256": "32d51a839ee7244bc6b8b0ba60a2dd10fb3b4d43fe68f8141be39ec3b752b66d"
  },
  {
    "documentRowId": "fasco-1114001-beck-new-053-p1",
    "sha256": "004b6cb6fb8753889a26141a62c5f89cc699a678d40a90d23e6c06ca4a810ef0"
  },
  {
    "documentRowId": "fasco-1114101-beck-new-054-p1",
    "sha256": "9575a117b22ba236fa043af73e9b29229648c5c2ae493c4c6769a5f12a940775"
  },
  {
    "documentRowId": "fasco-1157901-beck-new-055-p1",
    "sha256": "3020ffe5676272d5eb397110d9c6d643204d5af200261e520c75c3675243d9d2"
  },
  {
    "documentRowId": "fasco-11619-beck-new-057-p1",
    "sha256": "ebdf20b1c8e3aac1c876b6ea9d883bd4b20d14bcb8a6390b8011d22655c21ca0"
  },
  {
    "documentRowId": "fasco-1161701-beck-new-058-p1",
    "sha256": "0505ff0682564fbcc1be705a77191de837ea643888baad09464cde27e41dd6e1"
  },
  {
    "documentRowId": "fasco-11880-beck-new-059-p1",
    "sha256": "dbb79dac815e01e21df502f7a00a879ba7933f1b4a0fd0909e20f46f2c54177d"
  },
  {
    "documentRowId": "fasco-11777-beck-new-060-p1",
    "sha256": "be778b7fdf7d04e3f786e062d176d4685ba132494b1557577acc1c702ea86338"
  },
  {
    "documentRowId": "fasco-11420-beck-new-061-p1",
    "sha256": "3db58f2279d13c336500ab74bfeff3f2efaefbaa8dd75c2a5bdbd08842861e69"
  },
  {
    "documentRowId": "fasco-11421-beck-new-062-p1",
    "sha256": "7b4c9dce591803007255b4037d28eb91c3bbcf3c021d41dd47e132ac482346c6"
  },
  {
    "documentRowId": "fasco-1155101-beck-new-063-p1",
    "sha256": "6d522307f36f52c5632d0e9b3016079ebbb69d2a273dcb327a6dffd8fcb507ba"
  },
  {
    "documentRowId": "fasco-1167501-beck-new-064-p1",
    "sha256": "33b218409fe53a76adbe9c01709f0804bacbb8872869d4cea413e9a8d3e1436f"
  },
  {
    "documentRowId": "fasco-1175302-beck-new-065-p1",
    "sha256": "4284f609ea98afb70d50e2e0ca66539fd4608aa269cd062b1458b34ca642cdfd"
  },
  {
    "documentRowId": "fasco-11639-beck-new-066-p1",
    "sha256": "6a5c5517848bf5528e4e42a369fc0818933654d2157270620c32e12d2b23a65d"
  },
  {
    "documentRowId": "fasco-1185101-beck-new-067-p1",
    "sha256": "e74a18799fea8e890523e5d58d241fd02a3372945736c0738aba797f23b36b2d"
  },
  {
    "documentRowId": "fasco-1159601-beck-new-068-p1",
    "sha256": "36110b1a9c72f613498714d6989290c0389461cdcadba36e6942c5c12fd60ff7"
  },
  {
    "documentRowId": "fasco-1130302-beck-new-071-p1",
    "sha256": "79ab6615270fed5fb4982a941e55082de6145b08c89dbcd51c5dac9227812f9e"
  },
  {
    "documentRowId": "fasco-1130203-beck-new-073-p1",
    "sha256": "937acd6ae451af22c4ba6823b77ccaefb6dc72f301099ac56d73a79965371867"
  },
  {
    "documentRowId": "fasco-11911-beck-new-078-p1",
    "sha256": "8d3b2a7cf2f48a17d8cea5857f3722c42e8a8644b9a9be77b013cdd50b2c5b4f"
  },
  {
    "documentRowId": "fasco-11910-beck-new-080-p1",
    "sha256": "2d86447a7c04b87c8b6d6d2c4372affc6d8367e4f602ca2768642de290ec6462"
  },
  {
    "documentRowId": "fasco-11912-beck-new-081-p1",
    "sha256": "8ed0bcab986854ec090460ba4a1d19bb19bc5990c21debc22abaaf457c4352fe"
  },
  {
    "documentRowId": "fasco-1154703-beck-new-083-p1",
    "sha256": "0583d8b7529a8bb6bcd1c206aebe2dec4f28dd85ef9f54767d19455f61a118b4"
  },
  {
    "documentRowId": "fasco-11914-beck-new-085-p1",
    "sha256": "458e4519153fc92d0dfe3820e0c7e7820bafc21cd8ac0212e1f7c6164614d70c"
  },
  {
    "documentRowId": "fasco-11078-beck-new-086-p1",
    "sha256": "867957bbf86c98ad556a1a5bc01d5dbb6710d6f04351c6d0a78a457cd46ab0b5"
  },
  {
    "documentRowId": "fasco-11088-beck-new-087-p1",
    "sha256": "9c2ffbb098e0ebcaf2fea291d89427f4bb5065c5a22e3d075d3bd2143c09da65"
  },
  {
    "documentRowId": "fasco-11126-beck-new-088-p1",
    "sha256": "536a8f8ea38baa74ae0da8a1dd950e183e1e793d4386e6e891feddd6812454cf"
  },
  {
    "documentRowId": "fasco-11079-beck-new-089-p1",
    "sha256": "30ac7a35a23663d59f84de3a2c3702bf64bcdea00650163ffbeed4512ec0b05b"
  },
  {
    "documentRowId": "fasco-11204-beck-new-090-p1",
    "sha256": "dfcd8f6f71659783b3d559fd145297efec222cc0eee11d3c906d439faed6c820"
  },
  {
    "documentRowId": "fasco-11124-beck-new-091-p1",
    "sha256": "afa09a6681aeb29448b5b32b22af944afc86de3f9f79f6676890fbeeca1369cd"
  },
  {
    "documentRowId": "fasco-11082-beck-new-092-p1",
    "sha256": "ec77eeeab96ebdf025c329fd7653abce608065db46fe193a4b87a4da85c637aa"
  },
  {
    "documentRowId": "fasco-11139-beck-new-093-p1",
    "sha256": "b45a857544a544ef1e3ad9533764eda7ab7caa19f6d8a9e6fd2122baf403be28"
  },
  {
    "documentRowId": "fasco-11086-beck-new-094-p1",
    "sha256": "d800cd6f8c920003a936e58b8322ecc2f001351d351889d53d9681c9240b8fc2"
  },
  {
    "documentRowId": "fasco-11087-beck-new-095-p1",
    "sha256": "cf8ccaf7e47fa4d4ba13f85ae7575a454e0be0b35d23cc8ab4c0c5c83d52e64d"
  },
  {
    "documentRowId": "fasco-11106a-beck-new-096-p1",
    "sha256": "15bc5ee8be906ac2db61f1e555f1ba7f87f6065bd80637df5400f0647ba657db"
  },
  {
    "documentRowId": "fasco-1169901-beck-new-097-p1",
    "sha256": "7157ce6eaac2d9c40a1740ce308b1ad38e49a8fdf583e44ebf21db3d1846a711"
  },
  {
    "documentRowId": "fasco-11706-beck-new-098-p1",
    "sha256": "c76168996c0b31fe248248834237db23dbab7aa939445433bfb8f860b8f276b8"
  },
  {
    "documentRowId": "fasco-j01087405-beck-new-099-p1",
    "sha256": "0acf96319572d7baa295b4c1513a5c71634e2bc8475e3c749ba56231366487ea"
  },
  {
    "documentRowId": "fasco-11132a-beck-new-100-p1",
    "sha256": "61d7f0c2c327c75c5e0b40efb151f54f17720e044f086f553ef3f8d4d70187b7"
  },
  {
    "documentRowId": "fasco-11166a2-beck-new-101-p1",
    "sha256": "e8eec6f0b389675dabdd8c5c00da858d8dfbd7061110fdd6796911cde2c1314e"
  },
  {
    "documentRowId": "fasco-1159401-beck-new-102-p1",
    "sha256": "c6064082a7e8ab90bfa616f8efce491acfe9b0cdc7dcf3e1d5dcf4fa0ee7b58a"
  },
  {
    "documentRowId": "fasco-1171902-beck-new-103-p1",
    "sha256": "e88ff1f5f728677e538c97eb4053e2d8b3fbab8d8f7c82813505e79269641984"
  },
  {
    "documentRowId": "fasco-11626-beck-new-105-p1",
    "sha256": "cd36aca812c92705121b0ba42c3e08b7d6e4eaee6d0e9afc4bceb81806bc050a"
  },
  {
    "documentRowId": "fasco-1135003-beck-product-001-p1",
    "sha256": "2bec1325176cb202eae9ec5aafc569ff140288eaff50e2a8c4fecba27240d8f2"
  },
  {
    "documentRowId": "fasco-11907-beck-product-002-p1",
    "sha256": "d07c04a66e311f0638669dfe197871af7ab4ba33e834b6fef63e534a4dfd712c"
  },
  {
    "documentRowId": "fasco-11366-beck-product-003-p1",
    "sha256": "470f5b353691000e0eec4e4b489d30a6bf35f22fe47ff2b7453cc1273032d2c1"
  },
  {
    "documentRowId": "fasco-11365-beck-product-004-p1",
    "sha256": "bf2c820ad5728b383388fb163664d26726b58327b68afdf3bef353066b468a08"
  },
  {
    "documentRowId": "fasco-1140201-beck-product-005-p1",
    "sha256": "1ea42049826b2271dfe2cdc0e16c61d5dbb4dbd85af6eecc974f843decbccf52"
  },
  {
    "documentRowId": "fasco-1173601-beck-product-006-p1",
    "sha256": "75c840ff39aa6e6d30746ca95c31fea9d9ff0940db15bcd94b570d837bbb0ffe"
  },
  {
    "documentRowId": "fasco-1184902-beck-product-007-p1",
    "sha256": "9eb7a3438faba2d97738a04c04a93c73275dc4aeac8a1a438c710722cb39749e"
  },
  {
    "documentRowId": "fasco-1155301-beck-product-008-p1",
    "sha256": "45ffe46e5a35973c11eb894eee14255b935b204a940f092a322d4216b6b694a8"
  },
  {
    "documentRowId": "fasco-11843-beck-product-009-p1",
    "sha256": "9007c70b2c5e3860ba4613c1fbc401f0d19cadbb0231fa4d32c72ba0bb494b93"
  },
  {
    "documentRowId": "fasco-11664-beck-product-010-p1",
    "sha256": "214dbebb103ccb35a2fac49917e34da34b3de13ccd57f5468192b941b51861f3"
  },
  {
    "documentRowId": "fasco-1168701-beck-product-011-p1",
    "sha256": "3e6a3c983f9e9c52c1a7d7c689f768c41ee864767bee16af068f5da8c78f6d65"
  },
  {
    "documentRowId": "deprag-6061139a-deprag-cz-catalog-p4",
    "sha256": "859485caa80edb2af25a05dc3a2b6319b208400c70c340073adcaeaa491e203e"
  },
  {
    "documentRowId": "deprag-6060546a-deprag-cz-catalog-p4",
    "sha256": "5434b738c64251a11704959881fa2586fe80a3ce076decc1ce837268e37d9d29"
  },
  {
    "documentRowId": "deprag-6060545a-deprag-cz-catalog-p4",
    "sha256": "11027a5fdfab35cdcb3f0683f0cc3e59f75b8f853625bf37c425147a270783cc"
  },
  {
    "documentRowId": "deprag-6061275a-deprag-cz-catalog-p4",
    "sha256": "8dc773d57ab85cca05459d26e16faf68586d9a2da65ce567e0e43025f79f9acd"
  },
  {
    "documentRowId": "deprag-6061275b-deprag-cz-catalog-p4",
    "sha256": "0081024b77c3aa19150274f1e080f4b80c393966428fa609e6cd7fb5c56a4f13"
  },
  {
    "documentRowId": "deprag-6061275c-deprag-cz-catalog-p5",
    "sha256": "fa6324c62bb170682c5bae78f80c2ea316eb439d6ce3c472a4c2cfdb46503ce1"
  },
  {
    "documentRowId": "deprag-6060970c-deprag-cz-catalog-p5",
    "sha256": "4e62558bfb10efdfcf406935ad176d79ec11f9cbeb3be3ebfcc4ce71c8fd3b5d"
  },
  {
    "documentRowId": "deprag-6061275d-deprag-cz-catalog-p5",
    "sha256": "7df72158f2a89620cfb26fad27cf1286c32e45ae34d6f98525bbd02635489ca1"
  },
  {
    "documentRowId": "deprag-6060971c-deprag-cz-catalog-p5",
    "sha256": "5d6fba24d8b8b5e5e9b53aa4014847155b7bd04b0a903410b91c48aea786df3a"
  },
  {
    "documentRowId": "deprag-310519b-deprag-cz-catalog-p6",
    "sha256": "9de47f8057418a34ccdbb2e6ba109f214f38ac7debf997482412bffe77666c6a"
  },
  {
    "documentRowId": "deprag-310519h-deprag-cz-catalog-p6",
    "sha256": "46b244ac5700633084f63634cbc7a0ea56e360e42e0790d336149316d897bbbd"
  },
  {
    "documentRowId": "deprag-310519c-deprag-cz-catalog-p6",
    "sha256": "924643a01d169407a5999dee64464db9e1e8562e6244e7f4c0f483b5cbb5bf03"
  },
  {
    "documentRowId": "deprag-310519f-deprag-cz-catalog-p6",
    "sha256": "778a0da3e027c544a8b000c191c70889756d1386479fc18d8844e1650cba7627"
  },
  {
    "documentRowId": "deprag-310687c-deprag-cz-catalog-p6",
    "sha256": "08803f7955a473e5044dadc7c2d266e230949da2cdd9c5e15e291b09c0923d86"
  },
  {
    "documentRowId": "deprag-310687a-deprag-cz-catalog-p6",
    "sha256": "d51a1ad3a9593fb11ad372b135b37bb153ff80b8439b3a3d8dcc07b05b31d9d4"
  },
  {
    "documentRowId": "deprag-310687d-deprag-cz-catalog-p6",
    "sha256": "d41ec4d6ee9793ee12f0b0850af94b5fda0621d6bf0ce92dcf3ccce6d087700f"
  },
  {
    "documentRowId": "deprag-418193f-deprag-cz-catalog-p7",
    "sha256": "f2cf9822e79449d1c0affc88d5dc5936c79fd5c3c538db32e2480f9abba311d2"
  },
  {
    "documentRowId": "deprag-418193g-deprag-cz-catalog-p7",
    "sha256": "4a47253317fb4efc9f1d510c5606e1dcd3c5fa577d224263424d683cba99de84"
  },
  {
    "documentRowId": "sata-151183-sata-current-catalog-2025-p36",
    "sha256": "5b101b05375a3b04781c4a3b0cdc4c57ed525a7480ce97cb52efa17b981ccdf6"
  },
  {
    "documentRowId": "sata-151191-sata-current-catalog-2025-p36",
    "sha256": "6843547d306123ff86180ba25d0a9e25b06c52c49435021a529691a0f262f165"
  },
  {
    "documentRowId": "sata-149302-sata-current-catalog-2025-p36",
    "sha256": "58e0aa53a22bc9b42f5fd186e4ab8c16ba6d995c37986d033e779332d36b2513"
  },
  {
    "documentRowId": "sata-149310-sata-current-catalog-2025-p36",
    "sha256": "a9ddc3d8675a7e3362d3aea187bd7eed71e1acc1c39c39a23c5963ecae2a2435"
  },
  {
    "documentRowId": "sata-150391-sata-current-catalog-2025-p36",
    "sha256": "c0cc4700b2d64c693ef385b7b600f9f3e32d805b8b330f43b656c9cf8710fb8c"
  },
  {
    "documentRowId": "sata-149328-sata-current-catalog-2025-p36",
    "sha256": "603cfef1b338db4c80f98f761ddaceaa03e8f3cebf2b710858c799ae3b844a07"
  },
  {
    "documentRowId": "sata-151209-sata-current-catalog-2025-p36",
    "sha256": "7ab0571219ef37ada4f8d2b0c47bc7049997e7218d43e5351c58084bc9e79527"
  },
  {
    "documentRowId": "sata-151217-sata-current-catalog-2025-p36",
    "sha256": "738881b9cec309c9c671d5a15d831e62686715756bb8343ef567023f94426b3f"
  },
  {
    "documentRowId": "sata-1003194-sata-current-catalog-2025-p36",
    "sha256": "57154f683beb911def89859a3cbca963a05a43e88ceb5e6182396fd61ad85cd8"
  },
  {
    "documentRowId": "sata-1003201-sata-current-catalog-2025-p36",
    "sha256": "66de6502b4427c84dd2459b3f77b1baabbf5e40531f574bd0e2e8c89af1b1c8c"
  },
  {
    "documentRowId": "sata-154161-sata-current-catalog-2025-p36",
    "sha256": "b3054e8d7be2ef9cef6ae9d97353d3419cc608f03d84c322737ef59209535e98"
  },
  {
    "documentRowId": "sata-149377-sata-current-catalog-2025-p38",
    "sha256": "be5fc4dc51101051452d2eb94cf0fc1746a739366603561cd43de3d5dba19823"
  },
  {
    "documentRowId": "sata-149385-sata-current-catalog-2025-p38",
    "sha256": "b500f88ac643f7877d706ffefa90b846ae58ef5c24a562f6ccad19cc640efcf5"
  },
  {
    "documentRowId": "sata-149393-sata-current-catalog-2025-p38",
    "sha256": "a3438f6a2242c42d9ab584664dffc9968c8148afb87f20c79d2d34317c40b1fa"
  },
  {
    "documentRowId": "sata-149401-sata-current-catalog-2025-p38",
    "sha256": "de65fe9670692dea7e47ef1ce791635c3cf7d1cd177d58be1d2c7bf49b6f9f5c"
  },
  {
    "documentRowId": "atlascopco-8431038230-atlas-uk-current-p24",
    "sha256": "a0b2cff875703e4a8a3ef55ee269ce3d9031baa75b6ea4eda9a02865352f93ed"
  },
  {
    "documentRowId": "atlascopco-8431038240-atlas-uk-current-p24",
    "sha256": "b8b219b6e8c1b1270a1ae2cdc3134cf7e49f1703450638da169052c9b19cd0c5"
  },
  {
    "documentRowId": "atlascopco-8431038250-atlas-uk-current-p24",
    "sha256": "7a160ebfac36c2d6144235049af1be656ab84b335dd2c9ffe940555a9bb02cda"
  },
  {
    "documentRowId": "atlascopco-8431038255-atlas-uk-current-p24",
    "sha256": "0c68e7ffeca83576cad904d8fb0ef2fbec9755b693c798d76b4d38943c52bd39"
  },
  {
    "documentRowId": "atlascopco-8431038260-atlas-uk-current-p24",
    "sha256": "85b70ddbf92b251ef1b55a318a3cd0629e711adbf77f50d31c0e6f48956e61ab"
  },
  {
    "documentRowId": "atlascopco-8431038265-atlas-uk-current-p24",
    "sha256": "04e4814cc13589a4580ed3fe59c7a4987836fffbacec6f26c68971bc922e8e9d"
  },
  {
    "documentRowId": "atlascopco-8431038270-atlas-uk-current-p24",
    "sha256": "8015dfbac50d8a2c61183dbf3759d351398e360db59c9be0ca2d738ade7efa7f"
  },
  {
    "documentRowId": "sata-1061548-sata-current-catalog-2025-p24",
    "sha256": "984cde2ba1178401d5e480347b9e66bbe307c2cb6ce167bc721e2262d1129b7d"
  },
  {
    "documentRowId": "sata-1061556-sata-current-catalog-2025-p24",
    "sha256": "8ade6ab30e662c81a01026f598ec1e1bcb55800a508b1f4babbb8f5f62cad5b1"
  },
  {
    "documentRowId": "sata-1061564-sata-current-catalog-2025-p24",
    "sha256": "269f8431b58b1ee11c69a98787e7c560eb3548f58494c6466b8403357246b1f1"
  },
  {
    "documentRowId": "sata-1061572-sata-current-catalog-2025-p24",
    "sha256": "f18a700e46721e927c81147747daee7f63a7bab37ddc7d3a464b00e2af293da4"
  },
  {
    "documentRowId": "sata-1106534-sata-current-catalog-2025-p24",
    "sha256": "0754f61da76e25d1db52c1719289ae85bdeb5ae48b8cfadd2a017f979d6cfa76"
  },
  {
    "documentRowId": "sata-1106542-sata-current-catalog-2025-p24",
    "sha256": "5ea9f1c192b85e1816ba6568091c6695b01b62614836cee8fdff7afba986da03"
  },
  {
    "documentRowId": "sata-1126889-sata-current-catalog-2025-p24",
    "sha256": "5a520e1a07bdd923403b4a1551c5df17380e19bfdf7c61c6408b5be114d249d5"
  },
  {
    "documentRowId": "sata-1061895-sata-current-catalog-2025-p24",
    "sha256": "4d67c7f3f39a04a759905f41f6a180502a8f64f233418496c4cb48c296e947b1"
  },
  {
    "documentRowId": "sata-1061902-sata-current-catalog-2025-p24",
    "sha256": "6140bd4552804d0c3d4518b604e07ac10c40a2fab3a34dfd090cb1676a923d42"
  },
  {
    "documentRowId": "sata-1061887-sata-current-catalog-2025-p24",
    "sha256": "ba1a1de90b3a59799759802e81cf703913c2033e45ca75699587b2f32e1ac17b"
  },
  {
    "documentRowId": "sata-1061910-sata-current-catalog-2025-p24",
    "sha256": "45e4e0c7ae5c04c4eab8dca3e14bbe3c0eb25f26b1516072c1c6338b16c71cd4"
  },
  {
    "documentRowId": "sata-1061928-sata-current-catalog-2025-p24",
    "sha256": "16c97cbc352b39aad661aebe4b537a03bbd286d5f225b0a9a8d12388fe74776c"
  },
  {
    "documentRowId": "sata-1061580-sata-current-catalog-2025-p25",
    "sha256": "2264c63fc090b1b19ea85444bd958bcc74962cfb43f5674bcd2407307b4edb68"
  },
  {
    "documentRowId": "sata-1061598-sata-current-catalog-2025-p25",
    "sha256": "69cb90200f83b68244c8a1f02f1cf2bf452c35cedfab4cd2f73751fe72a6ba2f"
  },
  {
    "documentRowId": "sata-1061605-sata-current-catalog-2025-p25",
    "sha256": "5b730c06675e13114db8c217b27c13da2f13af92e23534966c6233d7ff955313"
  },
  {
    "documentRowId": "sata-1061613-sata-current-catalog-2025-p25",
    "sha256": "e7b933d3a4d42f2af785a2d96c055d4b417a4cf8749b041bdab39d9cad93f3f7"
  },
  {
    "documentRowId": "sata-1106550-sata-current-catalog-2025-p25",
    "sha256": "9193571b6950f67ec0ff19bc73136f18b47581fd33a3b09d50de297a475e0966"
  },
  {
    "documentRowId": "sata-1106568-sata-current-catalog-2025-p25",
    "sha256": "e9921ad4a7ae4c5e3cb5bf2d3ad831b7e22c5ab8705e2ef3244941a1de95ab33"
  },
  {
    "documentRowId": "sata-1126897-sata-current-catalog-2025-p25",
    "sha256": "9088982bbc2fabf35831b5d33c9914ce829a22fd64221cd9587272b02cbd9835"
  },
  {
    "documentRowId": "sata-1061936-sata-current-catalog-2025-p25",
    "sha256": "94b949995f29ce41beaaf9b71abc0ec9b1ac8d527e8f3d8b13d409a151a8e394"
  },
  {
    "documentRowId": "sata-1061944-sata-current-catalog-2025-p25",
    "sha256": "4acf6a909b90c6bd4b21f94d9e33db980c2db7b67d8bf205bcbbdc6661eee428"
  },
  {
    "documentRowId": "sata-1061952-sata-current-catalog-2025-p25",
    "sha256": "1ed9ac0b5149317e07b50de644fc64ecd7c182ceb6a00f49c33ff3d405e4f88e"
  },
  {
    "documentRowId": "sata-1061960-sata-current-catalog-2025-p25",
    "sha256": "f15912b5707eaaa5c4b82a07d1b0134b2baf6668bbd7ee14139911ffdd547f7a"
  },
  {
    "documentRowId": "sata-1061978-sata-current-catalog-2025-p25",
    "sha256": "fde3a700e569e5dc1675d25070d52dffbd3bda40d5f796e3995a83799d18afb6"
  },
  {
    "documentRowId": "sata-146969-sata-current-catalog-2025-p34",
    "sha256": "4b36f2c6de792334e619bb4f8bbed5042236adab64d78b76befe4a3c7a1d8703"
  },
  {
    "documentRowId": "sata-145193-sata-current-catalog-2025-p34",
    "sha256": "1b2cc98e48739e60794aaf324de858a800a8bd12f52148b1530a0d9212d3d103"
  },
  {
    "documentRowId": "sata-145201-sata-current-catalog-2025-p34",
    "sha256": "94944e5c36eeee70cb0c3f14453c28086451be9442503bf06ca72795dd8912bd"
  },
  {
    "documentRowId": "sata-145219-sata-current-catalog-2025-p34",
    "sha256": "d51d713e2c18ebabde477add8e9eb98953756f7f95547cbb9a86ebb509c911cc"
  },
  {
    "documentRowId": "sata-146373-sata-current-catalog-2025-p34",
    "sha256": "86823ddfac1d5fe264218d1ea321695a1032a765a758488cbd5a2be793f0840c"
  },
  {
    "documentRowId": "sata-145722-sata-current-catalog-2025-p34",
    "sha256": "97a2a7d6340929733aade4b0ae44cb2f5c3aa5b30ccd20de16a185ff0305ff98"
  },
  {
    "documentRowId": "sata-145730-sata-current-catalog-2025-p34",
    "sha256": "46b34aeb73c04ef23742a4428889c8f800a37ceae8e29c7e73a8f9e306c64ac6"
  },
  {
    "documentRowId": "sata-145748-sata-current-catalog-2025-p34",
    "sha256": "6078177eff7f919de9e3706d33020f85f96c6489bd8c315424f9896386163eed"
  },
  {
    "documentRowId": "sata-182592-sata-current-catalog-2025-p34",
    "sha256": "fdaf2fed840639677c3fe6f7750807a605aae61af2d04f0659b5b990176de9ba"
  },
  {
    "documentRowId": "sata-145185-sata-current-catalog-2025-p34",
    "sha256": "ac77d7b5e27432d047edf51c5c9a2648a102cf55e1a11cfd10109974bb84e968"
  },
  {
    "documentRowId": "sata-132092-sata-current-catalog-2025-p48",
    "sha256": "b094a857cbf38fb24dd07019c1b56a32d966edeb1a08921b9a59430990144f9c"
  },
  {
    "documentRowId": "sata-132100-sata-current-catalog-2025-p48",
    "sha256": "811b2a7166b5fc33dab7a37d0f61cc8cd1ef5407e83c3d75ab00d5d7cf63ee20"
  },
  {
    "documentRowId": "sata-132118-sata-current-catalog-2025-p48",
    "sha256": "6f4c248ab749e98c6289c1f25d82b097a44837ccf6a14d7af4ea14fb6e0fea0e"
  },
  {
    "documentRowId": "sata-132126-sata-current-catalog-2025-p48",
    "sha256": "776a93f2d609b854e0055e5d579e8286e0b8cce8059e8a4639485830b8047417"
  },
  {
    "documentRowId": "sata-132134-sata-current-catalog-2025-p48",
    "sha256": "39c2e6deb72a958af0d14f43262a7e3be49ddfee790dc6bc8b1104898f7e2a42"
  },
  {
    "documentRowId": "sata-132142-sata-current-catalog-2025-p48",
    "sha256": "04f70ed49c3abe5e44a792057c833016a5594aaee6f8710cf05814355b3353ff"
  },
  {
    "documentRowId": "sata-153486-sata-current-catalog-2025-p48",
    "sha256": "18609b3f29b4c67eb04d859113d41938b2b905a55672386058fd8f51ae8724b0"
  },
  {
    "documentRowId": "sata-153494-sata-current-catalog-2025-p48",
    "sha256": "f7e9b2e36488c74da6fb03e1251c86b0b30682b3d3be12d6e5769dc4df84efe4"
  },
  {
    "documentRowId": "sata-154336-sata-current-catalog-2025-p48",
    "sha256": "7f1892f6d4e0cd24be83dbd029e6e97349917fbbbb55eb0333b7e1fa15e553fe"
  },
  {
    "documentRowId": "sata-154344-sata-current-catalog-2025-p48",
    "sha256": "922104a46cb4e12f185252afce9371d07e92d259694864407a24743112c0df0c"
  },
  {
    "documentRowId": "sata-154351-sata-current-catalog-2025-p48",
    "sha256": "9f075696f5c1bcc419fec672700fc316fd00722ccb3162f72e07cc707bf7b095"
  },
  {
    "documentRowId": "sata-154369-sata-current-catalog-2025-p48",
    "sha256": "a99c05760026589127d5ef8a09d2da2cf680ebd201840d858520cc9573e5ff25"
  },
  {
    "documentRowId": "sata-161232-sata-current-catalog-2025-p48",
    "sha256": "c89d1b810c89db3d79491dabfb43df89c1cbb3cddc1669b41370b29a512588e0"
  },
  {
    "documentRowId": "sata-211979-sata-current-catalog-2025-p48",
    "sha256": "b1d73b31c722d5c9967d1fca568a4be055c0cd5b9169c650a8b5c29fef2e70a5"
  },
  {
    "documentRowId": "sata-139196-sata-current-catalog-2025-p49",
    "sha256": "ce30c4c3f901c4a20107f07b43e2fb29327eb544aab78f8a379b7651596c1909"
  },
  {
    "documentRowId": "sata-139204-sata-current-catalog-2025-p49",
    "sha256": "23cb0c18c2cba58bf761606f2a2a19f9e84be95d2bfd0404a2fb6661c047fbd8"
  },
  {
    "documentRowId": "sata-139212-sata-current-catalog-2025-p49",
    "sha256": "a9189ecde6d0cf1c402fa802bcbca388f6c5770586d06a2b3bac8a34a69bf6ff"
  },
  {
    "documentRowId": "sata-193664-sata-current-catalog-2025-p49",
    "sha256": "72fb5551ef1d9b4c21968f0c08bac7cbcde1876aa645a04f3a25f6fbe5384dc1"
  },
  {
    "documentRowId": "sata-139220-sata-current-catalog-2025-p49",
    "sha256": "e8413249040d04266a6cbcd4ec307253f26c343c88f87b3a42adf48463e36022"
  },
  {
    "documentRowId": "sata-139238-sata-current-catalog-2025-p49",
    "sha256": "7ea40c4bbec972bbb567dc0b7b2ad53365544bccad47ce75dc6aa07d015996ce"
  },
  {
    "documentRowId": "sata-161034-sata-current-catalog-2025-p58",
    "sha256": "bf3d39f53c21e64573c3302af25250f561b98a5039fb7d191061f95211dbc114"
  },
  {
    "documentRowId": "sata-151266-sata-current-catalog-2025-p58",
    "sha256": "8a7bea986490acd7ef2808eb359e4324b8c350e8677a584b87b4552c914f46a1"
  },
  {
    "documentRowId": "sata-151274-sata-current-catalog-2025-p58",
    "sha256": "f98f89a525d4a7fac343fed6a40262a083a42fb23ac469f59948eaa543f9e53d"
  },
  {
    "documentRowId": "sata-153353-sata-current-catalog-2025-p58",
    "sha256": "ba1fb472e0b6886ab5bbeac7326b0f04d94aaa67ab695cf046bf9efe117abebc"
  },
  {
    "documentRowId": "everwin-fsn2283a-everwin-extra-1-p9",
    "sha256": "64d70b1e469932e963d76bad2a238927946c06a866b6ac32fe84d78487de3cca"
  },
  {
    "documentRowId": "everwin-fsn2283ad-everwin-extra-1-p9",
    "sha256": "984c7ab6e9932b82f4078fc18b201debcdad387319e5bf66ce46b7853ddb9e6c"
  },
  {
    "documentRowId": "everwin-fsn2283b-everwin-extra-1-p9",
    "sha256": "d4f6305b5e7c0ebf8e7f523fba991cde6d31e125857c18b86437b2db6bb5f366"
  },
  {
    "documentRowId": "everwin-fsn2283bd-everwin-extra-1-p9",
    "sha256": "35c6270e707c99c272f5efe3a9f46d8be017611a4bf685fe9c495859ff385bd5"
  },
  {
    "documentRowId": "everwin-fsn3490b-everwin-extra-1-p9",
    "sha256": "26ba9c775e50fa33e6ef0fe5ae69197762b5e645e6f8b9635fb3286ba4158f67"
  },
  {
    "documentRowId": "everwin-fsn34100-everwin-extra-1-p9",
    "sha256": "c063acc1c766452195d02cb6d275c40be6169e6f1c427957431762ac77ac5822"
  },
  {
    "documentRowId": "everwin-fsn34100lm2-everwin-extra-1-p9",
    "sha256": "511fca2f27c84cdd9b7f60685f46b5b7e4ec39a5113444cf74c18f04a479b3b0"
  },
  {
    "documentRowId": "josefkihlberg-125006-kihlberg-tool-10-p1",
    "sha256": "c9e5ece9f6224c5be6e0efc26746df14086624822055ca48171fbee9fe956988"
  },
  {
    "documentRowId": "josefkihlberg-125003-kihlberg-tool-11-p1",
    "sha256": "6ec0fdf21d84427a0bbd13e8009ed9996a789f1d43b095ce6d96b82ba111fb82"
  },
  {
    "documentRowId": "josefkihlberg-120591-kihlberg-tool-15-p1",
    "sha256": "2b277e480860b70cd075e0996905e44d7968f67c9a7de6bae2fa551c4d5d2ca5"
  },
  {
    "documentRowId": "josefkihlberg-36342-kihlberg-tool-16-p1",
    "sha256": "236b2d44466344caee1b876527c0f6826027cc5a9ed0b91d835be4edeee73937"
  },
  {
    "documentRowId": "josefkihlberg-126141-kihlberg-tool-17-p1",
    "sha256": "99f780d2b32520339c48ea964a0e291ceb1fb0a242d135de120b6673e19ed6de"
  },
  {
    "documentRowId": "josefkihlberg-126152-kihlberg-tool-18-p1",
    "sha256": "5d830a02f8dc36e72d9b6a6cb19b73f84ce301c932af50f5f84819e954077c2b"
  },
  {
    "documentRowId": "josefkihlberg-126202-kihlberg-tool-19-p1",
    "sha256": "cc519f7370fa1cb0ae6dff72bdbc2e1f461614a52a848f398d9ca837bee99f9a"
  },
  {
    "documentRowId": "josefkihlberg-126138-kihlberg-tool-20-p1",
    "sha256": "7070b28933e88177cf3ee6757753fbc9792ccba8fe83dbae9ba37fc1c57b2b15"
  },
  {
    "documentRowId": "josefkihlberg-126094-kihlberg-tool-21-p1",
    "sha256": "0b4fc6611fd0deb41f37eed3c0a5206dc857c50e576c4c3f9d89a2f8f4ef8736"
  },
  {
    "documentRowId": "josefkihlberg-126038-kihlberg-tool-22-p1",
    "sha256": "adcccf415e3996f19f945b5cfd658e4f73d54343892033f5ae98930829ad66f6"
  },
  {
    "documentRowId": "josefkihlberg-126033-kihlberg-tool-23-p1",
    "sha256": "e60c90b175b249e98d08f64ab84113fe9810cf16bed22120f2aea147ba8ef063"
  },
  {
    "documentRowId": "josefkihlberg-126032-kihlberg-tool-24-p1",
    "sha256": "acfcecc1670dfa5159699db017f8f9fb8032f56228c78b1ee49c24856d0df7bf"
  },
  {
    "documentRowId": "josefkihlberg-126030-kihlberg-tool-25-p1",
    "sha256": "d71c06bc920082909dfa5678499db3788647f4e02954f7cb064e97d710bc131d"
  },
  {
    "documentRowId": "josefkihlberg-126037-kihlberg-tool-26-p1",
    "sha256": "a9ab58b0b4ec5da20309ce6759731d64d4ef5e956e253c4e88d1cd26f3899e2b"
  },
  {
    "documentRowId": "josefkihlberg-126036-kihlberg-tool-27-p1",
    "sha256": "d0f6086b9514a6623856520b99bdfa56ad5f97f400b5b4b4670d402380949f0f"
  },
  {
    "documentRowId": "josefkihlberg-126034-kihlberg-tool-28-p1",
    "sha256": "bf407658e337ed5ccae9c8af1373091d333dfbb03691178f8fc9117bf3bfea7b"
  },
  {
    "documentRowId": "josefkihlberg-120556-kihlberg-tool-33-p1",
    "sha256": "cee52fc258a8873bd73513ff9d5348766ffbf3e43a3fba795af2152971d6f27e"
  },
  {
    "documentRowId": "josefkihlberg-126167-kihlberg-tool-36-p1",
    "sha256": "ee0b12e613a36ea958ab6ea4f12a6d934c7e894410ef0040f9a06dc58c092091"
  },
  {
    "documentRowId": "josefkihlberg-126305-kihlberg-tool-37-p1",
    "sha256": "5c62af6ce10825749c923841daf0394b9883612a544d32e6240b35cbc2322b6f"
  },
  {
    "documentRowId": "josefkihlberg-126365-kihlberg-tool-38-p1",
    "sha256": "93d2a3733b022aeadf97a4a7d1a458d6ce148af37a7c97e4d772ff19b4b972d0"
  },
  {
    "documentRowId": "josefkihlberg-126366-kihlberg-tool-39-p1",
    "sha256": "f0fe4808450680ad0a934542512d2f348df6edd2898b751beeac4486aebe0f9d"
  },
  {
    "documentRowId": "josefkihlberg-120560-kihlberg-tool-41-p1",
    "sha256": "626c8486606a4f640a168c9bbe05a173e37616800890b1eecfa22b15f9a20918"
  },
  {
    "documentRowId": "josefkihlberg-33399-kihlberg-tool-46-p1",
    "sha256": "76ba6fb727d532fe02c419a1fe8b733eabf95ea48225b801e627d913ef413467"
  },
  {
    "documentRowId": "josefkihlberg-126289-kihlberg-tool-47-p1",
    "sha256": "df7a5e4f580264110c3c79a435db870a4945b92eddbfabf154f2c536bbbde3f2"
  },
  {
    "documentRowId": "josefkihlberg-120568-kihlberg-tool-48-p1",
    "sha256": "516a85f45b8523741167de3162b5d4e073b124f358ab05e1403c3ad37165c866"
  },
  {
    "documentRowId": "josefkihlberg-120564-kihlberg-tool-49-p1",
    "sha256": "ecda636513c98a34e2c2dd9b53e7bdb7cc716d205f0f08549bec638be843bbc6"
  },
  {
    "documentRowId": "josefkihlberg-125111-kihlberg-tool-50-p1",
    "sha256": "5d50ff9c2ce4c1689db36c26f572b3e934558611dc6430d37975dae8e8d230fa"
  },
  {
    "documentRowId": "josefkihlberg-125108-kihlberg-tool-51-p1",
    "sha256": "93b18e9baa70bf93dadaafe6edba96318555f74078c1715906aca70d26800602"
  },
  {
    "documentRowId": "josefkihlberg-120593-kihlberg-tool-52-p1",
    "sha256": "ed4040835fb26191b0fb06b7ae5de4097e8a3820d9e144519a6906ea6a9ee663"
  },
  {
    "documentRowId": "josefkihlberg-125107-kihlberg-tool-55-p1",
    "sha256": "ea839d8832027e60559ccb2ad3e6422e128eb9d83e86584a4eea8b0fc38379c7"
  },
  {
    "documentRowId": "josefkihlberg-125105-kihlberg-tool-56-p1",
    "sha256": "863125e177fa789d6e584d0166d9f53d7cce3d74e2320e5c724337224fbf9e4d"
  },
  {
    "documentRowId": "josefkihlberg-125103-kihlberg-tool-57-p1",
    "sha256": "949f71ddad723399082526efff31f20d022a016c6a3402871f73e72c6d702079"
  },
  {
    "documentRowId": "josefkihlberg-125101-kihlberg-tool-58-p1",
    "sha256": "eca9c0e3ef8d6a191019d941cfa6c26a9d4ad5167093b3f4c5e17683dcc7053d"
  },
  {
    "documentRowId": "josefkihlberg-126374-kihlberg-tool-7-p1",
    "sha256": "aabec840c881a52b4d5a3b561e9d751fe843f13a5e7b8e52f24bbabd5068eb0e"
  },
  {
    "documentRowId": "josefkihlberg-126311-kihlberg-tool-9-p1",
    "sha256": "0588e27e944d7a19df9dec5adf085e37e990cb22b9e145defe9ec7d971ae974f"
  },
  {
    "documentRowId": "deprag-3146441e-deprag-industrial2024-p6",
    "sha256": "f98e1a9ee11af088fd7bde11159ffb76e4e48acb8e4299fadda00a2fe3689198"
  },
  {
    "documentRowId": "deprag-831050a-deprag-industrial2024-p6",
    "sha256": "7a3adbe045231444c04b0845c87a3b608989657c37c44465340934f8e0965a62"
  },
  {
    "documentRowId": "deprag-6061249a-deprag-industrial2024-p6",
    "sha256": "6d8fc5e08fc0ef68e306b485935cb0dd079338bc2df232310c6a46083cd7d170"
  },
  {
    "documentRowId": "deprag-830266b-deprag-industrial2024-p6",
    "sha256": "a68f33859c12970f630a73074ed44eab790f3a1429352dc3c7d834673e430549"
  },
  {
    "documentRowId": "deprag-830266a-deprag-industrial2024-p6",
    "sha256": "1ed064f7be6e099436f63290e2f5edf4afe3da9e35d8727ec17a6684ca97e27f"
  },
  {
    "documentRowId": "deprag-3147401e-deprag-industrial2024-p6",
    "sha256": "f7ae539f85af7fe966d0b1cfd0095552455e33615d823a04408b2c5d98ca3ba8"
  },
  {
    "documentRowId": "deprag-3147401d-deprag-industrial2024-p6",
    "sha256": "0e6392d63b8482dedd61e803660aded8ac200bee91b97468a682cab79920c068"
  },
  {
    "documentRowId": "deprag-6060839a-deprag-industrial2024-p6",
    "sha256": "4eaffbe67a6be1928d74aa1f1e1fc0fe7f35546d5b5b189188b594e65ec41491"
  },
  {
    "documentRowId": "deprag-3148457d-deprag-industrial2024-p6",
    "sha256": "8881d9c8d8eb6d8a0df58252825f1ad8f684953765a87d93036d0c486dafea04"
  },
  {
    "documentRowId": "deprag-3148457c-deprag-industrial2024-p6",
    "sha256": "c9e8661cd9856464baf213debb7d01bdbaa35d297309e20f243d3a0886d22891"
  },
  {
    "documentRowId": "deprag-3148457g-deprag-industrial2024-p6",
    "sha256": "d065980fb1b37fa07261de6cce06c3e7ed491c13f81316ddbd31c61e0698fcb8"
  },
  {
    "documentRowId": "deprag-3148457f-deprag-industrial2024-p6",
    "sha256": "3d3fad6e568394720c2fa0fec54142a9d0faa1277bb6595ee805b3c6ede9a032"
  },
  {
    "documentRowId": "deprag-3148457b-deprag-industrial2024-p6",
    "sha256": "e21f623896e69ef065d760fd452643b27eee2ccd07f7b8eaa05a0e510b59a294"
  },
  {
    "documentRowId": "deprag-3148457a-deprag-industrial2024-p6",
    "sha256": "35107f69236f8b8c25df3d8a7bcc6c31d6c5878b0d58b67124b9267b05e99f40"
  },
  {
    "documentRowId": "deprag-6060854a-deprag-industrial2024-p6",
    "sha256": "102a5b4f3ffdfcb4c766f6e89344f91e125aa642cba8a8f6bbce30e7ee06493b"
  },
  {
    "documentRowId": "deprag-6060853a-deprag-industrial2024-p6",
    "sha256": "a465c3122cd832533ee6754019fa9bfe09267275f423d37adb634f2500191c2f"
  },
  {
    "documentRowId": "deprag-6060850a-deprag-industrial2024-p6",
    "sha256": "69528f23e52e30bb84623c3e8bebf0a6251233dda5b59cfda8a4d63d1d315e67"
  },
  {
    "documentRowId": "deprag-6060849a-deprag-industrial2024-p6",
    "sha256": "526ce41131ba4bb2790accec4845f001a277c50b09d7864ca0bec6a9dadd248e"
  },
  {
    "documentRowId": "deprag-6061300a-deprag-industrial2024-p6",
    "sha256": "1d1c664bba90addff5070ce39dfea2718220d882d3f323df10b05c87502a2a46"
  },
  {
    "documentRowId": "deprag-6061300c-deprag-industrial2024-p6",
    "sha256": "6609e60011fdce9c4f347411a905ebb186aad742e1f211510e09d42e3b56da7c"
  },
  {
    "documentRowId": "deprag-6060560a-deprag-industrial2024-p6",
    "sha256": "afac361efca7efea4274ac3c005c4245579e1305fdacddca7600887e1e3fe821"
  },
  {
    "documentRowId": "deprag-6060559a-deprag-industrial2024-p6",
    "sha256": "1d7cc7ba3bf761ab862c428b37d82babfce7ed55fac7c5a49824ba7d60b6de73"
  },
  {
    "documentRowId": "deprag-6060846a-deprag-industrial2024-p6",
    "sha256": "d6fcb99b6b24309859a02d3db05a0d60c29db0c4e595228607ea3d489787668f"
  },
  {
    "documentRowId": "deprag-6060845a-deprag-industrial2024-p6",
    "sha256": "8b167df1cc52310d4c954b2db7450947d40b9ca19dba9469a8e169a98c118292"
  },
  {
    "documentRowId": "deprag-6061300b-deprag-industrial2024-p6",
    "sha256": "5767a4141770c5462ccb4b9efcc18b93718f5b1109e0fe7e19cf14c4d2d945ba"
  },
  {
    "documentRowId": "deprag-830495a-deprag-industrial2024-p6",
    "sha256": "d777d8827a2f6351681d98bdb3afa665b93ebe985bb3ab0a885d80474e206510"
  },
  {
    "documentRowId": "deprag-830495b-deprag-industrial2024-p6",
    "sha256": "6cf0454bbad477db550e8e0569f9daf5a382be3ed02ac5ef62cd0da79eccef7c"
  },
  {
    "documentRowId": "deprag-830496a-deprag-industrial2024-p6",
    "sha256": "cb7dc3c917b15571dfdcb450ba74543c26c8b4cb2d7989bdd79d6b95df71b3a8"
  },
  {
    "documentRowId": "deprag-830496b-deprag-industrial2024-p6",
    "sha256": "5d4f0932f004e4e6979bff47da6e5a3b4ea75b7d15ba12d349bf65d725f7a85a"
  },
  {
    "documentRowId": "deprag-6060516a-deprag-industrial2024-p6",
    "sha256": "1446c87141aa8ce4f25a5192c388a34f12d87ae525572f31b7bc87b1f17c719e"
  },
  {
    "documentRowId": "deprag-830495d-deprag-industrial2024-p6",
    "sha256": "046eb6a90714a81f9a46138c7a25ade8c4d9ee5b8928e9948c8aeb40840b5603"
  },
  {
    "documentRowId": "deprag-830496c-deprag-industrial2024-p6",
    "sha256": "b279ec7ae6d51dcf6ec291ffe6c70e724aeba6a76d554d4d8665d07d85586d22"
  },
  {
    "documentRowId": "deprag-830496d-deprag-industrial2024-p6",
    "sha256": "6790339190b658179c9112abe627012402855e425086305c0279067ab8ee8713"
  },
  {
    "documentRowId": "deprag-6060856a-deprag-industrial2024-p6",
    "sha256": "c11c45d007e563675f7c627a119e3a25d8fb6903ae5dba12da55358f1d4764fc"
  },
  {
    "documentRowId": "deprag-6060855a-deprag-industrial2024-p6",
    "sha256": "e739ab93c9190cc47a577bce24595f8696d8f577a83820a0adf3595bcca0b8dd"
  },
  {
    "documentRowId": "deprag-6060852a-deprag-industrial2024-p6",
    "sha256": "ef36df1b5452eb8f86fabd2f369f50e77b8d56524e3bcbb0bb80c496646b5f20"
  },
  {
    "documentRowId": "deprag-6060851a-deprag-industrial2024-p6",
    "sha256": "7735cf923502a0c15a54701a8e14418bfbae9f430191af053c5157cda4a02893"
  },
  {
    "documentRowId": "deprag-6060562a-deprag-industrial2024-p7",
    "sha256": "1916c902a3a27a768f83a1c200bb853e2cab0309478646c105b8da134e63a3d7"
  },
  {
    "documentRowId": "deprag-6060561a-deprag-industrial2024-p7",
    "sha256": "2d978820a9412bf880ab877923fd4bb9b45e6fb7f760d06f137267e543221d5f"
  },
  {
    "documentRowId": "deprag-6060848a-deprag-industrial2024-p7",
    "sha256": "7d65e5d220b4be941be69302f083582a4d42bfb0a374c07e84aae2c819f6822c"
  },
  {
    "documentRowId": "deprag-6060847a-deprag-industrial2024-p7",
    "sha256": "78c3d66e8163c4867f0f88e36c4f64aac7687b449e169a082339417e53d29c8b"
  },
  {
    "documentRowId": "deprag-830495c-deprag-industrial2024-p7",
    "sha256": "7ebb97a85310286316bfe02eecd63aa9ab9c2c97b831b0f18cc429f43b7c92ba"
  },
  {
    "documentRowId": "deprag-828928e-deprag-industrial2024-p7",
    "sha256": "fffa92f89e5f04c2cc1f9242469799010cd9558d357823e9f74bb9dc73629b57"
  },
  {
    "documentRowId": "deprag-6060518a-deprag-industrial2024-p7",
    "sha256": "bc7fcc8dad54427d1dded3012f833c566c89b0b4ca238ead72a7809cb929aaee"
  },
  {
    "documentRowId": "deprag-6060517a-deprag-industrial2024-p7",
    "sha256": "5fbb0c23bf6951319d8f98672780e314c01272a012f88dd82e530204a680c7c3"
  },
  {
    "documentRowId": "deprag-6060906a-deprag-industrial2024-p7",
    "sha256": "313774a74ff4631ae8844418ee5026b0f34fedf01e102076c666a8599b78672e"
  },
  {
    "documentRowId": "deprag-6060904a-deprag-industrial2024-p7",
    "sha256": "5bf8267363efffa8b794eed6322e3463b5c985f585335bb494d49745599f347e"
  },
  {
    "documentRowId": "deprag-3150571b-deprag-industrial2024-p7",
    "sha256": "d7325069663430c18cee18ce737ca943687844e16f5e317e04ffaea610b1047d"
  },
  {
    "documentRowId": "deprag-3150571a-deprag-industrial2024-p7",
    "sha256": "0547185759607b713f74f1b0604b623170b577bf3adc6762030299d22ffaa3be"
  },
  {
    "documentRowId": "deprag-6061007a-deprag-industrial2024-p7",
    "sha256": "f08562b0f0630919a49ca6cf08dfd45898d4a5eca7947684a88b9d30ac3b181e"
  },
  {
    "documentRowId": "deprag-6061015a-deprag-industrial2024-p7",
    "sha256": "5451da2c20401c4f189a734ab1432ad5953ca00b316f16110a9c11f38cb3c68b"
  },
  {
    "documentRowId": "deprag-6060991a-deprag-industrial2024-p7",
    "sha256": "7745eb33e1260505aaf1855e249f19fe50569201f8e5cf2acb9c6f48a03c0da9"
  },
  {
    "documentRowId": "deprag-6061014a-deprag-industrial2024-p7",
    "sha256": "4a14bf19e213b0336d44ed442b212c9aa513ac509d2b9e4c95ef0613908a488f"
  },
  {
    "documentRowId": "deprag-6060990a-deprag-industrial2024-p7",
    "sha256": "78d6b9d84ca080d68c54d295b526afb8b22628b77aea990c89ef91877f6f4cc1"
  },
  {
    "documentRowId": "deprag-6061013a-deprag-industrial2024-p7",
    "sha256": "e19cf5bb0668d9e4ec3d4880b666241a7ece1fe9a7bb09760f939408fd31675b"
  },
  {
    "documentRowId": "deprag-6060948a-deprag-industrial2024-p7",
    "sha256": "15a621e9d08c9424c291e22a57dd34039081108a1f9e4b7ad87e8604d0bb76c0"
  },
  {
    "documentRowId": "deprag-6061012a-deprag-industrial2024-p7",
    "sha256": "dc2252941fe818a55e3c3e5d8a0694f2caed3007472058266a3a3e3d2e7b0b58"
  },
  {
    "documentRowId": "deprag-6061010a-deprag-industrial2024-p7",
    "sha256": "71f7152b6cef865dd93c38f3b01cd568d9d8f762e9fe9e9eaa269ab8eddbb280"
  },
  {
    "documentRowId": "deprag-6061027a-deprag-industrial2024-p7",
    "sha256": "184b007cfe9fabbcd597c2c0959ecec29053067d4c1fe54a6bd30bb857647cca"
  },
  {
    "documentRowId": "deprag-6061006a-deprag-industrial2024-p7",
    "sha256": "bbdc843524e740c373ee711d29244067426a8d71719eb4250b88ed5c7398e45b"
  },
  {
    "documentRowId": "deprag-6061026a-deprag-industrial2024-p7",
    "sha256": "3e6504ed1cfd3f022501d17bdac6773ece8996b630005c416e7ba79a68feda9f"
  },
  {
    "documentRowId": "deprag-6061005a-deprag-industrial2024-p7",
    "sha256": "43eda7e1f61575893ea8d60d533467713cfd574db47669a62b5f9538793116a3"
  },
  {
    "documentRowId": "deprag-6061025a-deprag-industrial2024-p7",
    "sha256": "96e3ab1b8da103b42ad39faa30a1b6d0061c65d317a651b7dcb1913e40917c1d"
  },
  {
    "documentRowId": "deprag-6060996a-deprag-industrial2024-p7",
    "sha256": "b6385aa486331c4db70b710a75fe85aca7501e9e5f8ed94637aac597d8abab1d"
  },
  {
    "documentRowId": "deprag-6061024a-deprag-industrial2024-p7",
    "sha256": "d40a923a32b78f576f6e25f80874d7187e0a11e0719b26f64a6c96f7f4c47da2"
  },
  {
    "documentRowId": "deprag-6061002a-deprag-industrial2024-p7",
    "sha256": "d90c3a5b5afd44d1bc95af75fe3b7054f50b2e2a5439670042c801dbb7da94d7"
  },
  {
    "documentRowId": "deprag-6061018a-deprag-industrial2024-p7",
    "sha256": "3df16138fdf9457271b4945d01e50e5cce0d70ba5b173ec7ec42551ae1bb5bfc"
  },
  {
    "documentRowId": "deprag-6061001a-deprag-industrial2024-p7",
    "sha256": "30c80ab2fe465e9fe197dc937f4009dd58550d483c774ca0ad866e6f5115e4ae"
  },
  {
    "documentRowId": "deprag-6061017a-deprag-industrial2024-p7",
    "sha256": "ae0a4f1bdb5684bd1d6e411f59f47e2c715500e11fd37e10b683221dc501464e"
  },
  {
    "documentRowId": "deprag-6060997a-deprag-industrial2024-p7",
    "sha256": "bdaa44a6e72c4ffc3812dd56fae534d38de26bb9c2e68eef4a5c85f15f183bbe"
  },
  {
    "documentRowId": "deprag-6061016a-deprag-industrial2024-p7",
    "sha256": "3adac07a25fa623f95406b352c4c56a28237ccb5eabe247394c60e972dd701f5"
  },
  {
    "documentRowId": "deprag-6061009a-deprag-industrial2024-p7",
    "sha256": "ebf7c994c42f813b329a354c0bbdc3ed36392fd9da4b1608d210959b619284ce"
  },
  {
    "documentRowId": "deprag-6061023a-deprag-industrial2024-p7",
    "sha256": "adb4b623bdf39233fa86aaf3b1a642bae3c36d5bc75594a9815634d4eb1e0e7a"
  },
  {
    "documentRowId": "deprag-6061004a-deprag-industrial2024-p7",
    "sha256": "4abd78a6e5f0f84cf15da3da3c13d5c3c875be843fd8c85c2f37ab27264ce0f0"
  },
  {
    "documentRowId": "deprag-6061022a-deprag-industrial2024-p7",
    "sha256": "05f9528bf8c37c69ea848c72895bfca2146a48248de9d0f4965f4e78ad4f61a3"
  },
  {
    "documentRowId": "deprag-6060998a-deprag-industrial2024-p7",
    "sha256": "c147bae9da8a9b7bd5f727bb3d18d6b349186ba8ec925de53f0fb79abea578ec"
  },
  {
    "documentRowId": "deprag-6061020a-deprag-industrial2024-p7",
    "sha256": "d4953041d03351cc3477cdbd465ea65416b01b8e5922e02e94b310551458ac82"
  },
  {
    "documentRowId": "deprag-6061040a-deprag-industrial2024-p7",
    "sha256": "a96d0542676b06d3b91eb065dbd40d9501a74bed688079ce635c8a389d554c09"
  },
  {
    "documentRowId": "deprag-6060606a-deprag-industrial2024-p8",
    "sha256": "e70ba9a16fb4e0b841b2ad4e71a686a0ac96189cecf2e16beb5931c3b5cf157d"
  },
  {
    "documentRowId": "deprag-6060905a-deprag-industrial2024-p8",
    "sha256": "255dbb07dd4417fb76216cc9b87099d2f0aa5be481d5f77d397088e74adfbd0c"
  },
  {
    "documentRowId": "deprag-6060573a-deprag-industrial2024-p8",
    "sha256": "39b1e0a7f5adb8d80c5b6ccf23099e606172a70ad9d65878768c482915960756"
  },
  {
    "documentRowId": "deprag-6060888a-deprag-industrial2024-p8",
    "sha256": "79df6d86775224f1432f3accd93703571622a838feba70b0107221ff44745544"
  },
  {
    "documentRowId": "deprag-6060588a-deprag-industrial2024-p8",
    "sha256": "8e1594f986029ea7414d7e8d019106b2cf72a85eb23276c61e4199b7ea5bf87e"
  },
  {
    "documentRowId": "deprag-6060887a-deprag-industrial2024-p8",
    "sha256": "3fbc176936e38fdc4615f0385ab6330808e5f837b085ab41ecb0fb886de720f2"
  },
  {
    "documentRowId": "deprag-6060587a-deprag-industrial2024-p8",
    "sha256": "34df08d9485e4a2037f74f5a15475ab9572066d05d9d61c62d7da1b4698489d3"
  },
  {
    "documentRowId": "deprag-6060885a-deprag-industrial2024-p8",
    "sha256": "d05515d6e18c33710a971c4e59119d2710dd1430e1ba687784b531dd9c9b204c"
  },
  {
    "documentRowId": "deprag-6060589a-deprag-industrial2024-p8",
    "sha256": "e37f61b1c5663bf6ea25103a5edf3a7ad17ba33d21ac4854523fe31a55f999c1"
  },
  {
    "documentRowId": "deprag-6060889a-deprag-industrial2024-p8",
    "sha256": "c964fd09c16ccbaa82e2365604840d62fdcee4035c1abb78a477266b3a8a066b"
  },
  {
    "documentRowId": "deprag-6060989a-deprag-industrial2024-p8",
    "sha256": "a388151608dabf3e9da4f15be5b295bb85b6f790389f52c07d6c24c4ba3b91da"
  },
  {
    "documentRowId": "deprag-6060566a-deprag-industrial2024-p8",
    "sha256": "2b296758be9e2dfc477dbbf19931a8075beb66663d601cfb4fb22212e650aa90"
  },
  {
    "documentRowId": "deprag-6060886a-deprag-industrial2024-p8",
    "sha256": "e02b6f54ffa160272de46db5a9218e9874aca773ba76fb554ed5a28a3d46ccf3"
  },
  {
    "documentRowId": "deprag-6060590a-deprag-industrial2024-p8",
    "sha256": "a7383fc7843297c62c9c2113008bc191b32995a88e96d63320e83d55a80afdb2"
  },
  {
    "documentRowId": "deprag-6060890a-deprag-industrial2024-p8",
    "sha256": "273748dbbcc98784a0b5baa406817c9c54e1965552c006bd444b1a23d9a0f629"
  },
  {
    "documentRowId": "deprag-6060608a-deprag-industrial2024-p8",
    "sha256": "1a1677319bb466d68800d37cf35a27963bee40f981378c42d99f2a87315f22f7"
  },
  {
    "documentRowId": "deprag-6060574a-deprag-industrial2024-p8",
    "sha256": "41d0f79e48d285c08106504ee7674c4a6f66dc4478660682d5ed08649eefd80d"
  },
  {
    "documentRowId": "deprag-6060881a-deprag-industrial2024-p8",
    "sha256": "d3454753492c46288dd492a1799f8106b13e31bbe3740c3f0a55bf3c416ef701"
  },
  {
    "documentRowId": "deprag-6060599a-deprag-industrial2024-p8",
    "sha256": "ad1bc2339598ff0a55527e3a833a99e048c2f6a5a4ff10420902ca094c595666"
  },
  {
    "documentRowId": "deprag-6060882a-deprag-industrial2024-p8",
    "sha256": "c2f33728e6ee608d8d3293cd18158e4971dc9e52379513e50e0a8b6d54f00e1c"
  },
  {
    "documentRowId": "deprag-6060983a-deprag-industrial2024-p8",
    "sha256": "03f808da4e5a3a958d3014de70f96bb021d40e41787e36d7b3a2ad4267247b35"
  },
  {
    "documentRowId": "deprag-6060569a-deprag-industrial2024-p8",
    "sha256": "3c86763112b5527e048807e05a8b04c4af24a63d77e130742eb525401a2a6490"
  },
  {
    "documentRowId": "deprag-6060883a-deprag-industrial2024-p8",
    "sha256": "705ff573706b660b0c76a77548e71925c7660e9079d7d19a85fe82bf81195f9a"
  },
  {
    "documentRowId": "deprag-6060595a-deprag-industrial2024-p8",
    "sha256": "8c98fb3be0a0e6abb4fca750e719ff2a413cb0dc9e1ba0d65293d8efe4951449"
  },
  {
    "documentRowId": "deprag-6060884a-deprag-industrial2024-p8",
    "sha256": "ed07378dc74cc3c231237df8115936dbb1a085dcca9db833dd9f74d011cdd537"
  },
  {
    "documentRowId": "deprag-6060596a-deprag-industrial2024-p8",
    "sha256": "67360d4c753246ebe8a17f79a8c7f0fc110e0a0afee8eed3b62de6a0c139b300"
  },
  {
    "documentRowId": "deprag-6060879a-deprag-industrial2024-p8",
    "sha256": "75e3acdd4e162f512f960692fe1e400ca2907b222837549865f7537da00768f1"
  },
  {
    "documentRowId": "deprag-6060984a-deprag-industrial2024-p8",
    "sha256": "df5f7d7a5ee20994f8061d82db81a83f1ec79329d0854c7b71b936b33d9f4bc4"
  },
  {
    "documentRowId": "deprag-6060597a-deprag-industrial2024-p8",
    "sha256": "d6a9efb24833c2aef8d9a14af3ca7fece0c184111a5ea568b11661812d670a35"
  },
  {
    "documentRowId": "deprag-6060880a-deprag-industrial2024-p8",
    "sha256": "0408ff340204b1250d58faa077f35c802f57a0a71d02ff35c26dd18e38c2bfb4"
  },
  {
    "documentRowId": "deprag-6060581a-deprag-industrial2024-p8",
    "sha256": "bbb4cf2497af72fa1e3f5aa7c901dafcd500ea293cb26963350026143e9219bc"
  },
  {
    "documentRowId": "deprag-6060891a-deprag-industrial2024-p8",
    "sha256": "847f801d30621014d33c1cfdac1d709b2335c65752d7848ccb23e9ba97e2abb7"
  },
  {
    "documentRowId": "deprag-6060582a-deprag-industrial2024-p8",
    "sha256": "a434e6662ef242b7ea6d9fa4ce7aa0d99b9c9dddd2e007420b62d11cd9822e13"
  },
  {
    "documentRowId": "deprag-6060583a-deprag-industrial2024-p8",
    "sha256": "ebf3ca2e6703726dd7b8ddc6b257575e55156f37f206382eb2b921726ae61bee"
  },
  {
    "documentRowId": "deprag-6060584a-deprag-industrial2024-p8",
    "sha256": "7383e50e97f9b4b549cb8d44bbfd7a4afbbf3de2f9ae77e63c1c0a168746e365"
  },
  {
    "documentRowId": "deprag-6060585a-deprag-industrial2024-p8",
    "sha256": "b2c3b3fb45a0b5fefa0fadd4beb8e686be7130924fb10592001ca208cb4cb9eb"
  },
  {
    "documentRowId": "deprag-6061137a-deprag-industrial2024-p8",
    "sha256": "b72eb733b842c8cba1d1d76dcdcb6fbc3bae758678cb1489df9fb18d933350fd"
  },
  {
    "documentRowId": "deprag-6060586a-deprag-industrial2024-p9",
    "sha256": "930b8396fc749ba873ee2d449b3f02d25e5289087fc6a77e048b51098def95d5"
  },
  {
    "documentRowId": "deprag-6060896a-deprag-industrial2024-p9",
    "sha256": "45daca87e5d9b8e999cec83cf770224a0dd3e1856ee70a54d4d935d26fc21b63"
  },
  {
    "documentRowId": "deprag-6060570a-deprag-industrial2024-p9",
    "sha256": "3271135c818389dd9cae88d41218f151c8b5d75d66cbe68f704726a54b2f22f6"
  },
  {
    "documentRowId": "deprag-6060897a-deprag-industrial2024-p9",
    "sha256": "389ff20cbe90fa34e8d3badcb821baae8635c79a05d58181a80d8895fa494e94"
  },
  {
    "documentRowId": "deprag-6060575a-deprag-industrial2024-p9",
    "sha256": "1b88bc1789b1adece8bbe09a184fcbaf733a835dab1bb97fd3c6b8d83e4e48b0"
  },
  {
    "documentRowId": "deprag-6060898a-deprag-industrial2024-p9",
    "sha256": "92a42be68dbf18e7ecc6c516590727a79db7bbe23604f817d01c1ebd3a9418f0"
  },
  {
    "documentRowId": "deprag-6060571a-deprag-industrial2024-p9",
    "sha256": "1baa44101bd5583d5ac65bb0b8e25ab78093927f2edb882aafb11d4d052409dd"
  },
  {
    "documentRowId": "deprag-6060899a-deprag-industrial2024-p9",
    "sha256": "661fe699a60af43f86d411722e132c230749f59db05735d67f9f7d33be3ac853"
  },
  {
    "documentRowId": "deprag-6060594a-deprag-industrial2024-p9",
    "sha256": "45afba521bad683d0a9fd7a67cb445772009ffc8dd96d5b23fcc7159363f81a2"
  },
  {
    "documentRowId": "deprag-6060900a-deprag-industrial2024-p9",
    "sha256": "c0ab18d18289edb2d08eb2e88787ae7c4be3087f7c70073a41a72972198d56f9"
  },
  {
    "documentRowId": "deprag-6060591a-deprag-industrial2024-p9",
    "sha256": "50e1315fae0c613477d09fe2b344ec71b6ea8b6a76b4a39dd403bafa9c4604de"
  },
  {
    "documentRowId": "deprag-830516a-deprag-industrial2024-p9",
    "sha256": "258cb4ebefd99025041964104cf27f01d45b64c2832dabb3238dbba95df2ea76"
  },
  {
    "documentRowId": "deprag-6060840a-deprag-industrial2024-p9",
    "sha256": "e1497bcf869dd707c9d34c4cd2eeccd9b88994f749b87c73a9722b8c0820984f"
  },
  {
    "documentRowId": "deprag-830516b-deprag-industrial2024-p9",
    "sha256": "0008da2c51af3aff926ee844bc6b11631b9f2bde335751dd4a70caa15b2b23de"
  },
  {
    "documentRowId": "deprag-830516c-deprag-industrial2024-p9",
    "sha256": "f35554c290347b7615f3b5b6e78d7f3f8e6c3ca5c8b4fc97ade89925c810e488"
  },
  {
    "documentRowId": "deprag-6060579a-deprag-industrial2024-p9",
    "sha256": "41432cd8962d2f88cf013760281cc5827e965576ef6bf9eec18383d58f6ac1e8"
  },
  {
    "documentRowId": "deprag-6060580a-deprag-industrial2024-p9",
    "sha256": "616f5d23a53298c2b3ae5f4d2a8a410453c349777c5acce70b3a595461602de1"
  },
  {
    "documentRowId": "deprag-6061163a-deprag-industrial2024-p9",
    "sha256": "c70f874bbede01b80df3ed750dd8978e6e13f187debc78327f033748c1c69b49"
  },
  {
    "documentRowId": "deprag-830494a-deprag-industrial2024-p10",
    "sha256": "8bcfe46f0920dfe1aeb83109eed0c3e83564489723615ead0b360936dd585ee5"
  },
  {
    "documentRowId": "deprag-830494b-deprag-industrial2024-p10",
    "sha256": "e9246862a88c2785b580bdd0803868397dcb62eaf7765a1ce7ac35ca6947b441"
  },
  {
    "documentRowId": "deprag-6060950a-deprag-industrial2024-p10",
    "sha256": "0d0f6b09dee145e7fde60cbbf27febb1de706f1d48ea8fcf6db344468927f1bb"
  },
  {
    "documentRowId": "deprag-6060949a-deprag-industrial2024-p10",
    "sha256": "2fe084dddc1fe72e8a463da90934d20f4806eae1859c3199b2445563e453612b"
  },
  {
    "documentRowId": "deprag-6060955a-deprag-industrial2024-p10",
    "sha256": "8cf5f5580c7fe6b3721a88e35ef874282482db98b1cbdb9024a70e5c78255de7"
  },
  {
    "documentRowId": "deprag-6060954a-deprag-industrial2024-p10",
    "sha256": "95220d40351b656367f2d60f591baf8f9bdaea605bf24481d4065bd4a51ab2b7"
  },
  {
    "documentRowId": "deprag-6061260a-deprag-industrial2024-p10",
    "sha256": "971c72b6913dfae779da8f2bfc0c41184528d364a36ef6fb1208b3ff3c117be7"
  },
  {
    "documentRowId": "deprag-6061260b-deprag-industrial2024-p10",
    "sha256": "b53fb5536e9dbfecb6b2c32566b6ce57043634ae355d68c30f0701805ec6247c"
  },
  {
    "documentRowId": "deprag-6060953a-deprag-industrial2024-p10",
    "sha256": "62ab1cc407b5a8dad19027198a87f536f0ff6ce12522d57b0e2595536c270a6d"
  },
  {
    "documentRowId": "deprag-6060958a-deprag-industrial2024-p10",
    "sha256": "ce78df840ac223339df561bf3c6d91f778796cfc7cc164adc666a9f89933cb96"
  },
  {
    "documentRowId": "deprag-6060960a-deprag-industrial2024-p10",
    "sha256": "dfdaf6edcdc3ce7ab2d9a3c4484e711ca37ef135a4a197f79fedf4f6df6b3a49"
  },
  {
    "documentRowId": "deprag-6060959a-deprag-industrial2024-p10",
    "sha256": "7ba40749db9a28c05df7e91b920d3b2bdc44f1fca9c5fa9121c5def215c685e1"
  },
  {
    "documentRowId": "deprag-6060965a-deprag-industrial2024-p10",
    "sha256": "a2a807b16ee0e96ff73bb929e5de3b7a3ee23f826f20b9115a2a9ada6cb7ff60"
  },
  {
    "documentRowId": "deprag-6060964a-deprag-industrial2024-p10",
    "sha256": "104478eb9585956f3481a4e76048d7b6f11418cd71e54953968a840c72ea53bd"
  },
  {
    "documentRowId": "deprag-6060963a-deprag-industrial2024-p10",
    "sha256": "061125267a76f1a12df1b1cc1042edb3b7a3a570dc6074b747c3ab7e304e0df7"
  },
  {
    "documentRowId": "deprag-6060968a-deprag-industrial2024-p10",
    "sha256": "f9a076224c0d1b91a282ff251f02272bb2013cef847e3caebe2a47ce6f201f5d"
  },
  {
    "documentRowId": "deprag-6060925a-deprag-industrial2024-p10",
    "sha256": "606be0f8941fec0c0da8fbed3e8a84d149a5003a45d325a4a27b4392caa65d4a"
  },
  {
    "documentRowId": "deprag-830497a-deprag-industrial2024-p10",
    "sha256": "6c24ad368f16577d31711c96a2468fb954a8b9ab1d52aac3e6b8d0cea0c5f26c"
  },
  {
    "documentRowId": "deprag-830497c-deprag-industrial2024-p10",
    "sha256": "043ef902a3dce028583cb34a4bd68d8605d99d6ab1f0c7956525bda955420878"
  },
  {
    "documentRowId": "deprag-830497e-deprag-industrial2024-p10",
    "sha256": "a35e6f02fd6f08d81d97949f5331964798912f972d35374ba11558eb9f093ab4"
  },
  {
    "documentRowId": "deprag-6061141a-deprag-industrial2024-p11",
    "sha256": "9bcddf91df4c402904c777fa03bd2ced0dc11979db8c059932dc5d77aa97069a"
  },
  {
    "documentRowId": "deprag-6061228a-deprag-industrial2024-p11",
    "sha256": "06ee0aafa691c47fefbb80171fc8408b9c5fbeef2af8552ba9ff539e3151fd89"
  },
  {
    "documentRowId": "deprag-6061228b-deprag-industrial2024-p11",
    "sha256": "8a2da7a4d010f4f2a079737e617c73a8ab3cd4f45fc7dd85e49410e3dee3c029"
  },
  {
    "documentRowId": "deprag-6061289a-deprag-industrial2024-p11",
    "sha256": "23bc8f7546ce80f10e3be6c86669f69d29eda1cf1f3d6dbc8ee34010658bdd2a"
  },
  {
    "documentRowId": "deprag-6061301a-deprag-industrial2024-p11",
    "sha256": "b7546afab0ce9430c87967486c7bfb39af0ab882efe4276b6891ca07ea05af4e"
  },
  {
    "documentRowId": "deprag-6061296a-deprag-industrial2024-p11",
    "sha256": "bc68aead0d1ab20cbf6cb87cb3677b175cc91413eb92f393f998b5947bbb23c9"
  },
  {
    "documentRowId": "deprag-6061296b-deprag-industrial2024-p11",
    "sha256": "a6881abee08fbd129da76ea5a042026677937a0eb019e3bedc6edbdc67d75394"
  },
  {
    "documentRowId": "deprag-6061307b-deprag-industrial2024-p11",
    "sha256": "8a5cfe3aa93e4bfaeb467c2951b417e9254abaf366fc5e735f698d9059c22f63"
  },
  {
    "documentRowId": "deprag-826309a-deprag-industrial2024-p12",
    "sha256": "b89a5527884f258731e962a29b885d498426ebf8b439f01b5071d19842881dad"
  },
  {
    "documentRowId": "deprag-6060457a-deprag-industrial2024-p12",
    "sha256": "411638a836168475e2255ab4d2011d35897875a2bfe29ea3c50cda6fa11d7a0d"
  },
  {
    "documentRowId": "deprag-830426a-deprag-industrial2024-p12",
    "sha256": "76a6af107a36f3b88b288990fe2a2daa4425211fbf8840ab899dab046fa21e63"
  },
  {
    "documentRowId": "deprag-6060455a-deprag-industrial2024-p12",
    "sha256": "6c6d591cda141830a05dc54f5f07f4d43cdc6b7c4f613be4b9bb795e6d48274a"
  },
  {
    "documentRowId": "deprag-826310a-deprag-industrial2024-p12",
    "sha256": "ce8e4ae8017b05388f27c9e35435163a773abd5849ba633c54eea88fbf73141e"
  },
  {
    "documentRowId": "deprag-826311a-deprag-industrial2024-p12",
    "sha256": "fc8870deb8480d0577999c91c907e006d4be1bd62a0abf471f3f485d21748bac"
  },
  {
    "documentRowId": "deprag-826312a-deprag-industrial2024-p12",
    "sha256": "4af21c0e223153ac23c93e99903d69659deb8d75e22a5397e50b589882796aa9"
  },
  {
    "documentRowId": "deprag-830498a-deprag-industrial2024-p14",
    "sha256": "067ac124c4a156a8e8bde162ee62d4c8eadd0502290129dee3fba09bd899f690"
  },
  {
    "documentRowId": "deprag-830498b-deprag-industrial2024-p14",
    "sha256": "2cbf2981ece01f891eb2ac87a1500498307719571d5024bd1f867e581cab860a"
  },
  {
    "documentRowId": "deprag-6060932a-deprag-industrial2024-p14",
    "sha256": "53faf14f9d89994d65eea8100ee923f186fd7f803ee9eb3b984fea1cb96baa6f"
  },
  {
    "documentRowId": "deprag-6060670a-deprag-industrial2024-p16",
    "sha256": "6fd27fae5e66cd32b201c3e826b6308dff1d98c10d7c786f0fe5510f21c6a35d"
  },
  {
    "documentRowId": "deprag-6060671a-deprag-industrial2024-p16",
    "sha256": "547d835fb33a3a2ac2af8db67d4fc71023fce5b61984ab5673d764e254381c3e"
  },
  {
    "documentRowId": "deprag-830499a-deprag-industrial2024-p16",
    "sha256": "1331534a38978eb1e8d2c1b210da586a5ebee53d016d441c204cf5baf7d78b04"
  },
  {
    "documentRowId": "deprag-830499b-deprag-industrial2024-p16",
    "sha256": "096b87de8a1dbc708b6942152c8ae92a43bf2759a27fd5c8cce4d91d07272c9c"
  },
  {
    "documentRowId": "deprag-3149172b-deprag-industrial2024-p16",
    "sha256": "ea6b1dd93dfad8ae45dc30c2514da9235dc2d8ad038a63e0f4b463569114ffdc"
  },
  {
    "documentRowId": "deprag-3149172c-deprag-industrial2024-p16",
    "sha256": "ec5366c1200c23d2e20b0115589e551cf6d7f9ed3d3a751c08fca264b5d6092d"
  },
  {
    "documentRowId": "deprag-3149172d-deprag-industrial2024-p16",
    "sha256": "b82752987ce66e9060412b3a086dcb3c789ef942889d3396be9975105b688439"
  },
  {
    "documentRowId": "deprag-300146a-deprag-industrial2024-p16",
    "sha256": "a2943ad8fd8bd61931380a8ff58423c1e0b86ed5a9c4287448c85b7ebce4099e"
  },
  {
    "documentRowId": "deprag-826313a-deprag-industrial2024-p16",
    "sha256": "c33682f8dea4aa9453661d5bc4cadeae4d7d68d54b4007106b569902da1b4de1"
  },
  {
    "documentRowId": "deprag-826314a-deprag-industrial2024-p16",
    "sha256": "4d660ae34cdaf9e749202d8c53b99c438371eba9e218d1468608bd5f872fd9ca"
  },
  {
    "documentRowId": "deprag-830499c-deprag-industrial2024-p16",
    "sha256": "e7e9caed410e8197042522da796bd157d77b544a53ca03d11873d633b681da6a"
  },
  {
    "documentRowId": "deprag-6060663a-deprag-industrial2024-p16",
    "sha256": "f1faa7f72010f4599d4ca1fa84d94d50e5d84c8f2089bc2ae48e3000a5569a12"
  },
  {
    "documentRowId": "deprag-826716a-deprag-industrial2024-p16",
    "sha256": "faae3a70e1106ed148dcf0713fe9c0290cd5da5dfe3e50d9ff0cf6a73994f70b"
  },
  {
    "documentRowId": "deprag-310687g-deprag-industrial2024-p16",
    "sha256": "4b0779b26bf0fc272bfaea0ddf4fbe1a67aa5af356ff840610e4d4f1cbeaba85"
  },
  {
    "documentRowId": "deprag-828312a-deprag-industrial2024-p17",
    "sha256": "074d22ea1df2a4bf69aab571faefbb31b0c952f49ee72dce9a89564d7ede8114"
  },
  {
    "documentRowId": "deprag-300157a-deprag-industrial2024-p17",
    "sha256": "10078d4c2d3da70ba587b6d982ac008ba15863d3a113d0e5b7b98ddf6271d3c9"
  },
  {
    "documentRowId": "deprag-300032a-deprag-industrial2024-p18",
    "sha256": "81f292bae3ec0232f5f136df46933633c3742e459c507a361230dcd4dac80673"
  },
  {
    "documentRowId": "deprag-3922131c-deprag-industrial2024-p18",
    "sha256": "6647865db42d2584842d90f90cf00375507c23c4458aaf7987c4fa896ee18206"
  },
  {
    "documentRowId": "deprag-3922131a-deprag-industrial2024-p18",
    "sha256": "8c202de3fd189192444246b7870df16f3f81287d6f32f862f3f5fadaa72dad5b"
  },
  {
    "documentRowId": "deprag-3922131b-deprag-industrial2024-p18",
    "sha256": "19beb643de99acad500bb4ac1f0194b344babba447a8ebf1a9d8e95fb04d7dde"
  },
  {
    "documentRowId": "deprag-3005661a-deprag-industrial2024-p18",
    "sha256": "1b12be20baf743596571e7cc9fb9d12138baa5d44a2809d07580c7c4a6ffaa0e"
  },
  {
    "documentRowId": "deprag-3017171a-deprag-industrial2024-p18",
    "sha256": "a4cafbeb21ca3a6275334dc96ea647a33ca7c82804b199abc836d641e079c363"
  },
  {
    "documentRowId": "deprag-3017171b-deprag-industrial2024-p18",
    "sha256": "23bbe603e25124c22a81998b0e1fdfce6261edaa7b6b9a9882c64e7f5a2a44cf"
  },
  {
    "documentRowId": "deprag-3148954a-deprag-industrial2024-p19",
    "sha256": "0323db758f31666f83ba7f69f2a995e704815f40a2a8fdd6049f0dee72fdecf2"
  },
  {
    "documentRowId": "deprag-3149191b-deprag-industrial2024-p19",
    "sha256": "ca5938abf8eb429d3cc59ec0fd0b333c0f21e92d6aad2b3d355910691832433b"
  },
  {
    "documentRowId": "deprag-3149191a-deprag-industrial2024-p19",
    "sha256": "93c25fca80bb9c2663751854c5fb0f21c4ed095e9542dce255070fa51b10f84a"
  },
  {
    "documentRowId": "deprag-3027201l-deprag-industrial2024-p19",
    "sha256": "a99a979806226bad73e8dde530313b6052db6bf077b6cfbc5fb84c670ee57ca7"
  },
  {
    "documentRowId": "deprag-3014471a-deprag-industrial2024-p19",
    "sha256": "6e76922642de5c02f969ddd33f6e85f0e708c38feb469759b3cd9f1653670a8c"
  },
  {
    "documentRowId": "deprag-3010671a-deprag-industrial2024-p19",
    "sha256": "fae497c095340f4ace4c964c45c0eca7ee1e08e392a3fcf1aaf2685de893c267"
  },
  {
    "documentRowId": "deprag-3010681a-deprag-industrial2024-p19",
    "sha256": "bec1f35141e967f714869f4bab8d22fc5edf42c5d4ec7449e22c8a9a7234b2bf"
  },
  {
    "documentRowId": "deprag-3010691a-deprag-industrial2024-p19",
    "sha256": "26ddc4011ed56e71e58fc64cbdeaeaae18d8d8c410e67a876e39fdfc5d078f7c"
  },
  {
    "documentRowId": "deprag-3010701a-deprag-industrial2024-p19",
    "sha256": "94e53b4bbbf2f9214e92cd1443f01bdb553409005567e730ad66c7d1b2dcf0db"
  },
  {
    "documentRowId": "deprag-3015531a-deprag-industrial2024-p19",
    "sha256": "e8bc32bf5fb745044af73c8b04bc6b2aa399f68554507f3423dfd23d484799bc"
  },
  {
    "documentRowId": "deprag-3020181a-deprag-industrial2024-p20",
    "sha256": "af37856d38f4b8f547c95ace3449ea80e4df600396e178d19cd45eeffb6c34cc"
  },
  {
    "documentRowId": "deprag-826290a-deprag-industrial2024-p20",
    "sha256": "fb1d3df71a6366ac6884cc83f98dcea2c9858a3bf641b303705fc939f3a2fb90"
  },
  {
    "documentRowId": "deprag-6060081a-deprag-industrial2024-p20",
    "sha256": "637f3137d7ef3a895c071d6ecfc817bce49edc65c526c3e1854b5c8ec15123a5"
  },
  {
    "documentRowId": "deprag-830500a-deprag-industrial2024-p20",
    "sha256": "00d1a4163329365d45e280cc93e7c6198a74a3d75d6942b7b8fbbfcb6a4edc15"
  },
  {
    "documentRowId": "deprag-6060082a-deprag-industrial2024-p20",
    "sha256": "10caf17aed12112f040c07267b8eb82c43f3583cec5c4b0535805aea9edccf1b"
  },
  {
    "documentRowId": "deprag-826290b-deprag-industrial2024-p20",
    "sha256": "593dc7f42a1ff8986e6e30f95f8bba4132ce2b28bff7cf542d2d66c1b11ec904"
  },
  {
    "documentRowId": "deprag-6060083a-deprag-industrial2024-p20",
    "sha256": "3e0ee7f92c646f6b11ddd71807420bf81f15098c4ea67cb52eecd834a7486746"
  },
  {
    "documentRowId": "deprag-3027101f-deprag-industrial2024-p20",
    "sha256": "880d56fb7ecbf036d25cd8e600045b69cf5a24b7a328d212cc29b66cb27e68cf"
  },
  {
    "documentRowId": "deprag-3027101a-deprag-industrial2024-p20",
    "sha256": "0b6719c165d710d69155d0493a12dad2fcc4da120d5a35aece9025e26be812fd"
  },
  {
    "documentRowId": "deprag-3027101c-deprag-industrial2024-p20",
    "sha256": "a3a34ca00f0e2c44d642109800aca63fe278886287ba8d73d7443df649558877"
  },
  {
    "documentRowId": "deprag-3027101b-deprag-industrial2024-p20",
    "sha256": "a9d3fb2cdecbd95b69b99671142c34b43a90ef2fbff344422d44bdb4aff657cc"
  },
  {
    "documentRowId": "deprag-3027101d-deprag-industrial2024-p20",
    "sha256": "436a0c60337bac9fce02c4bc5dbe4eff950a195dc6dcc2c655355ae619df0318"
  },
  {
    "documentRowId": "deprag-3027101e-deprag-industrial2024-p20",
    "sha256": "25b87d586abd0cd5ffd8ecb668117b31415aaa54c092c1e0cc14defb3c1fa1fd"
  },
  {
    "documentRowId": "deprag-3027101g-deprag-industrial2024-p20",
    "sha256": "a8e519c01b1037f623aaefbb93a6b0c998ade507761dc29a9696f1fed86cb8ac"
  },
  {
    "documentRowId": "deprag-3027101h-deprag-industrial2024-p20",
    "sha256": "f8a228cf1af7746ecd6aa6723b93520e99a2ac362d708c5665fd113046397e0f"
  },
  {
    "documentRowId": "deprag-6061165a-deprag-industrial2024-p20",
    "sha256": "c9db80e025374b0a4556dd07976ff79f97d457b3d9956e51f0d64912e5eaa655"
  },
  {
    "documentRowId": "deprag-830500b-deprag-industrial2024-p20",
    "sha256": "57009c4c15b81447721b204f54e5f76040ffe005d87f83bc3bbf3c21006c520b"
  },
  {
    "documentRowId": "deprag-302965a-deprag-industrial2024-p20",
    "sha256": "b9a9b6dfc87d922b738301af77103cac614c564ef11c90a363961ae848a4a84d"
  },
  {
    "documentRowId": "deprag-826291a-deprag-industrial2024-p20",
    "sha256": "c9223f496b5c99472113bec350638ebae40ed5e10eaf602ddc1e0784f0e0ff7b"
  },
  {
    "documentRowId": "deprag-826292a-deprag-industrial2024-p20",
    "sha256": "41064f06e76f3f7c7727ba5b58525d4d8a2371199f7697c930b2664342c70241"
  },
  {
    "documentRowId": "deprag-6061155a-deprag-industrial2024-p20",
    "sha256": "6b30f9e52ea1354ec23829027795481963842e8c79df5dfa4adbbb2488457e17"
  },
  {
    "documentRowId": "deprag-6061155b-deprag-industrial2024-p20",
    "sha256": "1644c4c979b3b31fe4f7b3d931e2158d23721364eac3517504781a5fdd28be13"
  },
  {
    "documentRowId": "deprag-830500c-deprag-industrial2024-p20",
    "sha256": "2499330e08eea735f6e9f6501c7c30f8b3f35ec9e165e32ba4d87024001d7501"
  },
  {
    "documentRowId": "deprag-827119a-deprag-industrial2024-p20",
    "sha256": "ce3b275bcf40c01d13c52959a4387645c78e3d5fdb41267d1a455e4902454fe6"
  },
  {
    "documentRowId": "deprag-3027701a-deprag-industrial2024-p21",
    "sha256": "bff830c35c822ec7b1c471b55c8b7e2cc2e425d5e5d02582de86f4a99e8cfbdc"
  },
  {
    "documentRowId": "deprag-3028501b-deprag-industrial2024-p21",
    "sha256": "e42c852b75c6461ce219d1db2b09695dba9c74ac3386c8de81059c67d72bc5b0"
  },
  {
    "documentRowId": "deprag-3235131c-deprag-industrial2024-p21",
    "sha256": "d7815dec931e9a25e20d4ec1a3cae27f26004b8e289de49a0870631b2e843e23"
  },
  {
    "documentRowId": "deprag-3023731a-deprag-industrial2024-p21",
    "sha256": "692e09583854039a5db56cabdc456bfdf0df1a149b73fa5af457009b6b55eef5"
  },
  {
    "documentRowId": "deprag-302964a-deprag-industrial2024-p21",
    "sha256": "d910f280f18300f0854eb8f8d85361b84b4c258da784e2f1616a110eee5d277a"
  },
  {
    "documentRowId": "deprag-6061166a-deprag-industrial2024-p22",
    "sha256": "5ef5ad222fa12e026d2add95f9ea829e9f535ea4f6db25e1397a1973f3ee8fbe"
  },
  {
    "documentRowId": "deprag-6061149a-deprag-industrial2024-p22",
    "sha256": "f503725be5eff38e39bed0f558a625f36f06d728d2bd1f4df86e8319f54c3224"
  },
  {
    "documentRowId": "deprag-6061210a-deprag-industrial2024-p22",
    "sha256": "d4b0796a80d43d13ba42a72a9f31662b7a7d699372c903283e37fbfd062c6675"
  },
  {
    "documentRowId": "deprag-826319a-deprag-industrial2024-p22",
    "sha256": "33ecc04d9723682ddaa2a67d6273176c10e5296dd782a0e5f658cb308164e260"
  },
  {
    "documentRowId": "deprag-826320a-deprag-industrial2024-p22",
    "sha256": "2f3e9ba147de8b978943c8c1a0d93ca46bf0cfdc2e7912ff7350648e7a217718"
  },
  {
    "documentRowId": "deprag-6061222a-deprag-industrial2024-p22",
    "sha256": "9ef00a972671f2d1193b9b5b5e713c4e013ce79776827f2810451de882a485f9"
  },
  {
    "documentRowId": "deprag-2104091a-deprag-industrial2024-p23",
    "sha256": "6742dde9be2999588ae159a1b2d1d361567d38c139fc7785ae9a864c6d3fb384"
  },
  {
    "documentRowId": "deprag-2104091b-deprag-industrial2024-p23",
    "sha256": "3ca182a686db04b5059971150f35f63d6de523b91c6b3579edc1960d11e59f77"
  },
  {
    "documentRowId": "deprag-2103682a-deprag-industrial2024-p23",
    "sha256": "b85fdf77ea0906dc41d73d3cabd89b772b3e406aa6e3675d2422f63b59380312"
  },
  {
    "documentRowId": "deprag-2103682b-deprag-industrial2024-p23",
    "sha256": "f86b657382dac7f48bd11cf0f463d1412a20a9a69feab37f94585a91552e1cb5"
  },
  {
    "documentRowId": "deprag-2103441b-deprag-industrial2024-p23",
    "sha256": "b68e095091d010cfeea1875d3d7a17979ea2d93a42e17429c7a3f57524a1a70e"
  },
  {
    "documentRowId": "deprag-2103461a-deprag-industrial2024-p23",
    "sha256": "ed7ba5c35fee63f0bb8db9d8f7823407b24c5861ac6da3acc179e711a3d51425"
  },
  {
    "documentRowId": "deprag-2103461b-deprag-industrial2024-p23",
    "sha256": "f7ea3f1317d50bc43c1402a8b6da68a2c43e7e996a0e9cbc9359593e4ebc98a8"
  },
  {
    "documentRowId": "deprag-8119841a-deprag-industrial2024-p23",
    "sha256": "85fdbcf1fc1fa52c513b01d740f79fba2689460db01e5f3d92279da2273aafb5"
  },
  {
    "documentRowId": "deprag-6060006a-deprag-industrial2024-p23",
    "sha256": "825cc485f37424c636d85c1fe87d934936dc1773132712b896b5fdbd2fc0f891"
  },
  {
    "documentRowId": "deprag-831332a-deprag-industrial2024-p23",
    "sha256": "93c959b6f8aa2ced41e2f25ffa9113c1ce2340e7e0f9df1275d429227c1ce848"
  },
  {
    "documentRowId": "deprag-6060008a-deprag-industrial2024-p23",
    "sha256": "2dd74e67091fdc4a674f45d88c1e2ed016361dfdcfd71ee4d07dca99e8be0cc2"
  },
  {
    "documentRowId": "deprag-6060008c-deprag-industrial2024-p23",
    "sha256": "aee58b87719296ecafca6d1d7d8b0e69f1f949b20a28f84689d3e4fb07b1ea73"
  },
  {
    "documentRowId": "deprag-6060008b-deprag-industrial2024-p23",
    "sha256": "aca751183eba4de9c4f26b44fe812d254e554000ad6ecb887066c6213bd80355"
  },
  {
    "documentRowId": "deprag-6060009a-deprag-industrial2024-p23",
    "sha256": "5995c67d16147ab4e56883f0ec6d4795b7c9e21d2c00572812358d0fd70295ed"
  },
  {
    "documentRowId": "deprag-6060009c-deprag-industrial2024-p23",
    "sha256": "0862afe64952ce03fc68e6f428343934065572f8e580934b617a09bccdc9e1c5"
  },
  {
    "documentRowId": "deprag-6060009b-deprag-industrial2024-p23",
    "sha256": "69aca57f784d0ac53bb0aef265b078459c52e156d348adbe2fa2b3d5fd8f851a"
  },
  {
    "documentRowId": "deprag-6060010a-deprag-industrial2024-p23",
    "sha256": "df8e19e4e98d106da07ac0422578b4ecc24aa0c9f471bdf0d4c467d1ab21af42"
  },
  {
    "documentRowId": "deprag-6060010c-deprag-industrial2024-p23",
    "sha256": "c9bd5b46f7c5df69b60f4ff5c0649f28083cc485ca8d3cec0220cd5cf44b6d78"
  },
  {
    "documentRowId": "deprag-6060010b-deprag-industrial2024-p23",
    "sha256": "959e9bce3bbceac1f3a59bfd7da978ff31ab6b65ee0b4765d5e27ec850c26ef0"
  },
  {
    "documentRowId": "deprag-8119811c-deprag-industrial2024-p23",
    "sha256": "0b9559513ed98548c962abc30cd7359fe55b7972cc4d7ee6d83a28ce49edb8db"
  },
  {
    "documentRowId": "deprag-6060011a-deprag-industrial2024-p24",
    "sha256": "98355136385e2c64f1545da9a53e7aafe6433399a1f97585a8be680ecf6cb018"
  },
  {
    "documentRowId": "deprag-6060012a-deprag-industrial2024-p24",
    "sha256": "35192bb3ddb54390b00a2c10aeed8b603010d5f990dcc83df959ad038112a8a1"
  },
  {
    "documentRowId": "deprag-6060013a-deprag-industrial2024-p24",
    "sha256": "4bbc7c584a7cb8a7e6097bf07fcf0e672cd18c5b4a5dc2a8fa204cd03f35028c"
  },
  {
    "documentRowId": "deprag-6060014a-deprag-industrial2024-p24",
    "sha256": "aaaf042928c83251e364612ba5a9f1ffbb7d765d1d042451d8b420eefbbf4c7f"
  },
  {
    "documentRowId": "deprag-2501841a-deprag-industrial2024-p24",
    "sha256": "2922d79f88e9f9d31352eeda2cf2bff5dd6834a072017906a6fd3c2a9e65bd7b"
  },
  {
    "documentRowId": "deprag-2501841b-deprag-industrial2024-p24",
    "sha256": "46efcbb4e734079ff87281185d8b26149a0ed2a0270a8facf75b52b2093316d8"
  },
  {
    "documentRowId": "deprag-6060015a-deprag-industrial2024-p24",
    "sha256": "25ba8c2fcb2e13a292506a0eea4d973aaa00bd6adcc0fee50ee77acb14870475"
  },
  {
    "documentRowId": "deprag-6060016a-deprag-industrial2024-p24",
    "sha256": "35ad38b0c1d2cd9adf6e25b857115c033a1be00ae5abe156f45913023a83dec2"
  },
  {
    "documentRowId": "deprag-6060020a-deprag-industrial2024-p24",
    "sha256": "1107675c39ef4bbf53c9e566b3a662f8a8403994db6124b2fe0da28f7fd358bc"
  },
  {
    "documentRowId": "deprag-6060021a-deprag-industrial2024-p24",
    "sha256": "1ad0f675d9a46d4a8ae299b7b1f553e151b84cc32a6d0a89db5ef02d8f02d85a"
  },
  {
    "documentRowId": "deprag-6060022a-deprag-industrial2024-p24",
    "sha256": "c0b0f434ab2dc81e80deb314cad7e62f41562237634ce4bbd07e80383971e5b1"
  },
  {
    "documentRowId": "deprag-2701441a-deprag-industrial2024-p24",
    "sha256": "6ba5f0edb3d1e7d8cfbb8f3236371d15de19742750096873514a18cadfaa2af5"
  },
  {
    "documentRowId": "deprag-2701091a-deprag-industrial2024-p24",
    "sha256": "d7e8e56adf9053d8222e3260ad4eb96f9206277a1cc655c272b79c6d896ae7dc"
  },
  {
    "documentRowId": "deprag-2701571a-deprag-industrial2024-p24",
    "sha256": "c243671016dcc2e96302f5aff77fc963dbe7dff73b96d49da4b192f8e6685bef"
  },
  {
    "documentRowId": "deprag-6060023a-deprag-industrial2024-p24",
    "sha256": "77b4911a352b0584e6865af29c3b676851633974d957381e5f62e94de8091280"
  },
  {
    "documentRowId": "deprag-831125a-deprag-industrial2024-p25",
    "sha256": "d3d5d958df084855d6cc407c9fe71313cd49b42232f80c014b9d5478914bbbc3"
  },
  {
    "documentRowId": "deprag-831124a-deprag-industrial2024-p25",
    "sha256": "e75f330438e910436e550c8626b776cc2fe9b442597a688cb3447aa3aa141912"
  },
  {
    "documentRowId": "deprag-831126a-deprag-industrial2024-p25",
    "sha256": "6ee088f90069b979c99d952bf27411e1224ad7254287c3cb2493525c269277c5"
  },
  {
    "documentRowId": "deprag-831127a-deprag-industrial2024-p25",
    "sha256": "dc19572a2df1352b58522571417e78572f2fed199ee1b5b31f8f880fcae0e1b8"
  },
  {
    "documentRowId": "deprag-3240971c-deprag-industrial2024-p26",
    "sha256": "f62c714ef508cd51c37d98fb716d30b2f906555c6cd9e812344f212867b9eb8a"
  },
  {
    "documentRowId": "deprag-3388471a-deprag-industrial2024-p26",
    "sha256": "208056630d698bf67d0780e2684a83d4aa6ac98b2e45106f05e49a3f6fa6d31d"
  },
  {
    "documentRowId": "deprag-830503a-deprag-industrial2024-p30",
    "sha256": "245e574038adab48c83b2c5bf52d9168f140e89075b1b72b49272d70b6987745"
  },
  {
    "documentRowId": "deprag-6060835a-deprag-industrial2024-p30",
    "sha256": "d503e2474b17179cf97020650081fcad0fe686f10e53273927fe5b1ad4d2dc58"
  },
  {
    "documentRowId": "deprag-6061125a-deprag-industrial2024-p30",
    "sha256": "4abed8d6eb6ab7931f0b98749f9908f0bf58ef84a57920c32894d12474230e48"
  },
  {
    "documentRowId": "deprag-6061104a-deprag-industrial2024-p31",
    "sha256": "f3b3fc19220a87bcca2c0ee933b018c08d5599fe9af511c82de6becaa8c4f0aa"
  },
  {
    "documentRowId": "deprag-6061097a-deprag-industrial2024-p31",
    "sha256": "68f1033bbc9fc4d44970596c13e58c87b381b6fdf4ffe52104f495052ddfd174"
  },
  {
    "documentRowId": "deprag-6061105a-deprag-industrial2024-p31",
    "sha256": "f7345aaeb4da421dcb5be812ec12f931b1df8bfafb1b7b518d0a7f0c0826960b"
  },
  {
    "documentRowId": "deprag-6061106a-deprag-industrial2024-p31",
    "sha256": "423dec2c420485d8eef5a4beb3cc4653c10c67d3dd79e9bed609cae0eb16b06e"
  },
  {
    "documentRowId": "deprag-6061222b-deprag-industrial2024-p31",
    "sha256": "9f62f6372322c6d8afb690db5f8f0dc8140129c39830eefcc4e34c6629e5722d"
  },
  {
    "documentRowId": "deprag-6061107a-deprag-industrial2024-p31",
    "sha256": "be0779e37ebb3c763509ac6f8e594ca3eb9ee6ae61eb121562c089eb0d8a5ca5"
  },
  {
    "documentRowId": "deprag-6061253a-deprag-industrial2024-p31",
    "sha256": "4908b3ea2a525bebdab3e23af102b2212c7cdf6ffdbb659a67744027d48c6e70"
  },
  {
    "documentRowId": "deprag-6061238a-deprag-industrial2024-p32",
    "sha256": "40bd932b99220c6099cf6f9cfb3ac31c7f680ac7bd92b466efc3b8a11c014c57"
  },
  {
    "documentRowId": "deprag-6061293a-deprag-industrial2024-p32",
    "sha256": "1579625e887dfeeb9fbed196f784e95cbf9b4dd84cab3997fe1ee0e7fba45a97"
  },
  {
    "documentRowId": "deprag-6061407a-deprag-industrial2024-p32",
    "sha256": "06197608adabbf1a24f0f66817e74ae0e597ee541e6e2c3e24b565a003791ee0"
  },
  {
    "documentRowId": "pneutools-rcn100-pneutools-product-00-p1",
    "sha256": "42984126a2cfd5eee60447da85c9af4a4c04ec3380029318d57c9ddf3e597b2b"
  },
  {
    "documentRowId": "pneutools-rcs150-pneutools-product-01-p1",
    "sha256": "6eb8755abf042ee8fd2eef60c843f78aa7c85a10ee21cd4fd7b820ee240b85e2"
  },
  {
    "documentRowId": "pneutools-sn3483h-pneutools-product-02-p1",
    "sha256": "df163c0d39745cc4c11db338aec7fad0110ad478227680450878fa91d273a186"
  },
  {
    "documentRowId": "pneutools-cn75-pneutools-product-03-p1",
    "sha256": "ac946ac1f7aef28bc2cb6f3e86f1975372b5c25c083dc4199c541fbe6cf06e93"
  },
  {
    "documentRowId": "pneutools-cn90fii-pneutools-product-04-p1",
    "sha256": "b610d6d357c59b9023203c51b4650c458555cd55fad04c823345f034c9fd7350"
  },
  {
    "documentRowId": "pneutools-mpn1-pneutools-product-05-p1",
    "sha256": "50f279749d10c67c4cfb67cf41c55e383c2878ba4b471934f3cfefbe9118e401"
  },
  {
    "documentRowId": "pneutools-pn1-pneutools-product-07-p1",
    "sha256": "9039b53c8314b77c204a82e4db1b62c549a4c6169be1fb6c8c0fd28f544c8d06"
  },
  {
    "documentRowId": "pneutools-rn150-pneutools-product-09-p1",
    "sha256": "dccaf04fb8be7256c134af04439b49e5dbf658520e38894c22bf5ba0bdb0c499"
  },
  {
    "documentRowId": "pneutools-rn250-pneutools-product-10-p1",
    "sha256": "4366cdbf5b36ea05ec175ad68109f499a27dda2e00064862a711abda144f04cc"
  },
  {
    "documentRowId": "pneutools-mc150-pneutools-product-11-p1",
    "sha256": "7842ca13377aab175c97fb0f8860dd24936ea91d166784220712a781eea90b5f"
  },
  {
    "documentRowId": "pneutools-cf16-pneutools-product-extra-03-p1",
    "sha256": "640d7b5742a4ba310890abd27b87e7dc1d139e8774d6b0122cd1f24096cc4227"
  },
  {
    "documentRowId": "pneutools-cn100-pneutools-product-extra-04-p1",
    "sha256": "ca53b8ea421dd5e260c165eadc96cecbed7e76898d025c066d5059c85c6856b8"
  },
  {
    "documentRowId": "pneutools-cn130-pneutools-product-extra-05-p1",
    "sha256": "b861655a0a1323624048f4a4285a96f135b1ea4cb8cab96855eec4c8b75c4fca"
  },
  {
    "documentRowId": "pneutools-cn45h-pneutools-product-extra-06-p1",
    "sha256": "122e7503ed0d2575167f77fa671a9ca43edcc24fa01739f6dba2bb80a201b4d0"
  },
  {
    "documentRowId": "pneutools-cn57-pneutools-product-extra-07-p1",
    "sha256": "acff1ef5b0436416c9b71e7e35fa99d03def6c95e3f2795690805c0730bfe698"
  },
  {
    "documentRowId": "pneutools-cn65s-pneutools-product-extra-08-p1",
    "sha256": "600e0dd5d0484787ef398bc4d085f384d94d86a1acbe067a5fa36ae114331500"
  },
  {
    "documentRowId": "pneutools-cn65s3-pneutools-product-extra-09-p1",
    "sha256": "f075dc2f678f99ec1d6e64e6e82314d18dee17f455136c90e69ea7ebbf9c42bd"
  },
  {
    "documentRowId": "pneutools-cn65sp-pneutools-product-extra-10-p1",
    "sha256": "da97485de3774bc9496764eafb0939e7ee4661aa114376e92ebafff743ad5439"
  },
  {
    "documentRowId": "pneutools-cn65z-pneutools-product-extra-11-p1",
    "sha256": "16b0eb429ff34d414b26abe7859bca8b75b3bfc7c12ed5cd3307f5e73b07ae23"
  },
  {
    "documentRowId": "pneutools-cn70-pneutools-product-extra-12-p1",
    "sha256": "30238f39d857ff54d8a9247bf017cbd6be4cf91fce8f10e2a550094d7978ab79"
  },
  {
    "documentRowId": "pneutools-cn83-pneutools-product-extra-13-p1",
    "sha256": "d2c7883e51be9728f5ed3184d009b634ebc5a1b53121a8421cff358faa5c8667"
  },
  {
    "documentRowId": "pneutools-cn83had-pneutools-product-extra-14-p1",
    "sha256": "46f3b54d970174ce8e32d278c606ecf5a45a330d86f44ba99fea633fc70c69df"
  },
  {
    "documentRowId": "pneutools-cn90-pneutools-product-extra-15-p1",
    "sha256": "4f8482e3fba688b4acce4f12523703bfa712e69d985bf6f39f8c24477bccb483"
  },
  {
    "documentRowId": "pneutools-fn1564-pneutools-product-extra-16-p1",
    "sha256": "dda122a9aec3f2d61a4446993c0519352786a658ff615c7bf2c668a8331600db"
  },
  {
    "documentRowId": "pneutools-fs9040-pneutools-product-extra-17-p1",
    "sha256": "92d8d6e30f1f09cfa48dcd5d5e6567ee36c32a65dd897727271a30d4ddf9e47d"
  },
  {
    "documentRowId": "pneutools-hp2350-pneutools-product-extra-20-p1",
    "sha256": "07eded2c1e5367d1916a89a60852a795457af004e49cecc28bb9d14df8640475"
  },
  {
    "documentRowId": "pneutools-ms1650-pneutools-product-extra-21-p1",
    "sha256": "47a3f38f1fb925cd0a2359064c57b164c52fb1c88f54ed8a5cc1ebe3ccc36bc3"
  },
  {
    "documentRowId": "pneutools-ms1650p-pneutools-product-extra-22-p1",
    "sha256": "df576207ecfca652a887055d70c30af997f1c0c916381e8731144ba26f413490"
  },
  {
    "documentRowId": "pneutools-ns1840ind-pneutools-product-extra-23-p1",
    "sha256": "a8545857c11d2f4074f3ede7392c3388d4a9cd61db67b2dd0df04d370f4aeb0e"
  },
  {
    "documentRowId": "pneutools-rf45t-pneutools-product-extra-24-p1",
    "sha256": "35c14c3f5aa4a4515a8b1bf9aeabf538f28b1f60f19c2ce10dcebd43ddf2e987"
  },
  {
    "documentRowId": "pneutools-rns150ii-pneutools-product-extra-25-p1",
    "sha256": "4b53c31522be64ac6de53c0c26eb3e1de84cb51546c2ea26a5ea2a62ad86b8ed"
  },
  {
    "documentRowId": "pneutools-rns250ii-pneutools-product-extra-26-p1",
    "sha256": "90dbbf7badd17d12e3e5b34c3d4ebbb0ce2acc4d11b11d4f1514874943f7782f"
  },
  {
    "documentRowId": "pneutools-sn22130ii-pneutools-product-extra-27-p1",
    "sha256": "0aacbc11c96bd5a4977a647f37eb9485b10c1b8ecf56fd8051f1065101db6da8"
  },
  {
    "documentRowId": "pneutools-sn22160ii-pneutools-product-extra-28-p1",
    "sha256": "7a8100bbd0a628951fc728233f02cf5c7f024fa11565fd6134e53ee523b78c27"
  },
  {
    "documentRowId": "pneutools-sn2283h-pneutools-product-extra-29-p1",
    "sha256": "a9508cc952833f9ff3eb43192407a855ed2aab2d2fdc3d78aa345903f93fc66d"
  },
  {
    "documentRowId": "pneutools-sn2283had-pneutools-product-extra-30-p1",
    "sha256": "ceb727a5421fc59dac9103ac3f628205363b1220fc998a82c24012a97618e8c5"
  },
  {
    "documentRowId": "pneutools-tn65-pneutools-product-extra-31-p1",
    "sha256": "476f170abf13e35aba34c31e49cfe0fddfb4fc47937dc64ca2867e91f2fe2873"
  },
  {
    "documentRowId": "pneutools-us1116lma-pneutools-product-extra-32-p1",
    "sha256": "4b1840929da85dada328f7e68ba5e82f9befe7f8c2db7498504781474a858929"
  },
  {
    "documentRowId": "pneutools-ws1638b-pneutools-product-extra-33-p1",
    "sha256": "c4238d3d776841fcf259dd9719fdbb584f74c7ddd2e9a3bffab888a102460935"
  },
  {
    "documentRowId": "pneutools-ws1638s-pneutools-product-extra-34-p1",
    "sha256": "ac4cbe8ea9fb5a0d870f7a758ce93c35cbf9e1fe4b2fac3b48f1bcf76bd04179"
  },
  {
    "documentRowId": "everwin-scn51-everwin-extra-0-p10",
    "sha256": "52a50475c5e9de78788e871c98186d0bb373e16acd298ec027ceea2965c5e909"
  },
  {
    "documentRowId": "everwin-pn57b-everwin-extra-0-p11",
    "sha256": "bb507be1261f54598c640df54ec829a4d2223e11c004a06cda7f10dac36b6214"
  },
  {
    "documentRowId": "everwin-pn58-everwin-extra-0-p11",
    "sha256": "d0e882a0a551c939d4b6e6c9acb3300a06baeee5c6259ad8a51e850c73e1c09c"
  },
  {
    "documentRowId": "everwin-pn59-everwin-extra-0-p12",
    "sha256": "775b9e7754e75c6b915e46e72c3ccc7c2aef37a4c000fe866141ad3d2f297d6d"
  },
  {
    "documentRowId": "everwin-pn65m-everwin-extra-0-p12",
    "sha256": "e1dbab0333c0f38d58faf579904e689cc2359ce22c3ac7fe8f4f1c8d4072c843"
  },
  {
    "documentRowId": "everwin-pn70-everwin-extra-0-p13",
    "sha256": "07034fdcf44d17d82c470f420dd845cce3fa35ae2c71ec18d3f0f8044bba208c"
  },
  {
    "documentRowId": "everwin-pn70pal-everwin-extra-0-p13",
    "sha256": "f55f22928e33a7c2f8565fa23d2fc92ba017fab27d99b5739c45263d69951c36"
  },
  {
    "documentRowId": "everwin-pn80-everwin-extra-0-p15",
    "sha256": "35974e102b3413c0602f148b6294e27d970718f0010e56aa369475530c574eea"
  },
  {
    "documentRowId": "everwin-pn90-everwin-extra-0-p15",
    "sha256": "d168bc8e3f8ad0c712d28b8b44f7cefd459c4a4d06854cfb176d08cddefad0fb"
  },
  {
    "documentRowId": "everwin-pn130b-everwin-extra-0-p17",
    "sha256": "613dfb9ac680f64bd227c35c4e9b85a87eb7c86f166e3300ca09ce34cb5fb003"
  },
  {
    "documentRowId": "everwin-rcn45-everwin-extra-0-p19",
    "sha256": "0716380d5b35ac1c7b27223c310b111b6ca84e9cee24a9089912bf5fe8df8dc1"
  },
  {
    "documentRowId": "everwin-scn66b-everwin-extra-0-p21",
    "sha256": "15c8b54a82e91552a0ce9a267c17a9539641161bf84239c62ccbfab74926e318"
  },
  {
    "documentRowId": "everwin-scn65c-everwin-extra-0-p21",
    "sha256": "26cec8ddbc92c242781935fd84739b6ba6f6c0398c645b85aa323821a7220fea"
  },
  {
    "documentRowId": "everwin-fcn90b-everwin-extra-0-p22",
    "sha256": "54a344ca1fb28af8e22f5961944f68788ab843be7ab7437b503ac244b7f3e707"
  },
  {
    "documentRowId": "everwin-scn90l-everwin-extra-0-p24",
    "sha256": "781876b517450b0de352ee5f88582545802b17029750ecfcd01fec4c9fde15d0"
  },
  {
    "documentRowId": "everwin-fcn90lb-everwin-extra-0-p24",
    "sha256": "f9fc12f23638e2f3e8cc0204da223dd8422817e4cad931e2fbface39ed61e8bf"
  },
  {
    "documentRowId": "everwin-fsn160-everwin-extra-0-p29",
    "sha256": "8b057a8e8368104feabf68189d6aee6875eb36b037a6c2269b8821ffb0a499f7"
  },
  {
    "documentRowId": "everwin-mcn40b-everwin-extra-0-p31",
    "sha256": "213b2067d4076d1fe3393136a23898eff465c822bcb1ba4dbc4e204e9d9eed74"
  },
  {
    "documentRowId": "everwin-fn1850-everwin-extra-0-p34",
    "sha256": "fb40090df6764d29a5bba9f590da5febfe2b951e9197bde544efe33926fa79d5"
  },
  {
    "documentRowId": "everwin-fn1565-everwin-extra-0-p35",
    "sha256": "dd3dd6ab3cbae351e67f70434e1ed4e25fd98c7f7a2f7f41a3c9127d559e2296"
  },
  {
    "documentRowId": "everwin-fn1665-everwin-extra-0-p37",
    "sha256": "36579984ecdae27bb8ee6893e0eb20c019c02f8fe8d9905ce8635df025788558"
  },
  {
    "documentRowId": "everwin-p635-everwin-extra-0-p38",
    "sha256": "955198993a2a6dd1b705160fc8ef9bec43d3633c4e93556d862c380cd0fe3e87"
  },
  {
    "documentRowId": "everwin-p635b-everwin-extra-0-p38",
    "sha256": "b93cee613951bd81fdaf73a4df59f7f3fdbe238048c0582a604d0b3ab2d4211e"
  },
  {
    "documentRowId": "everwin-p650-everwin-extra-0-p39",
    "sha256": "08db93a2cfa339a14117cd60d04c8ca4628743a0a8b594024fee61c597b36679"
  },
  {
    "documentRowId": "everwin-p850-everwin-extra-0-p39",
    "sha256": "32ddbae68210a25b9f359080b8c5f24644d190d9f1a11a1823cb91f0eb4a6b9c"
  },
  {
    "documentRowId": "everwin-fs9040-everwin-extra-0-p44",
    "sha256": "4e7bd779bd747fc0633095a9c67d5cd0d2780728690e0e9cb2ca6e9ed6b3a3fa"
  },
  {
    "documentRowId": "everwin-fs9240-everwin-extra-0-p44",
    "sha256": "6d820cd42c951c18a967475807cfb9a9691b501af55afef897623a0e9ff574e2"
  },
  {
    "documentRowId": "everwin-sn65q-everwin-extra-0-p45",
    "sha256": "af1ba4d37a082071e4c4aafa7a504a2ee071b9c59e8b2f76872babe5bbf016a3"
  },
  {
    "documentRowId": "everwin-sn41s2-everwin-extra-0-p49",
    "sha256": "289ba872b4e88ecf0fb8d7c8829808168c0dd9fb084288ee3328048f4f1261d7"
  },
  {
    "documentRowId": "everwin-sn412s2-everwin-extra-0-p49",
    "sha256": "8d6ad45810dabd431ba7053b7b752763262f1460e5abf1fe159a1da68caa104c"
  },
  {
    "documentRowId": "everwin-sn41s4-everwin-extra-0-p50",
    "sha256": "167791ea0269ad8e93411542c96345bdc608f8f439254cf053872b740623a059"
  },
  {
    "documentRowId": "everwin-sn41s5-everwin-extra-0-p50",
    "sha256": "da2131a9aac173762ec65a6205bb2e013a3f6adcbcd564153f19e199e0873bfa"
  },
  {
    "documentRowId": "everwin-fs9240bc-everwin-extra-0-p51",
    "sha256": "32c88321b12a1f476016ef1fabf2834a3caf7942ec8de9bec34758ac09d313c5"
  },
  {
    "documentRowId": "everwin-sn32590w-everwin-extra-0-p58",
    "sha256": "7952fc334a6d03ed80f09b63c75495665dfb8def4776f2ad6c67f73a59b4d49f"
  },
  {
    "documentRowId": "everwin-ps32590-everwin-extra-0-p58",
    "sha256": "4712905d763cc5431f1764e4a9cdc186c612b85ef664e44c2f53276027ab3833"
  },
  {
    "documentRowId": "everwin-c3040-everwin-extra-0-p64",
    "sha256": "bc48798d6087c3d4bae6726675ad1d73d753a12cf5bb11fe9875954faea3db1d"
  },
  {
    "documentRowId": "everwin-ews589-everwin-extra-0-p71",
    "sha256": "0cde84c5563df67e993510a47c33d1c80b652604e7426e3f3463a5cda8688639"
  },
  {
    "documentRowId": "everwin-ews202-everwin-extra-0-p72",
    "sha256": "61a90751151ff7dd7cc0813444f40cc191aa47a8d8eaf5979e476d08c4884ded"
  },
  {
    "documentRowId": "everwin-ews897500-everwin-extra-0-p72",
    "sha256": "3ee35f5d8679e48004c8a151822a71a3c1032af0627b6c492762af638b70a68d"
  },
  {
    "documentRowId": "apach-cn571-apach-doc-0-p4",
    "sha256": "780b3d1d872a6c49f04ab01cb7149bc420180a01e6d22da6f2ff9b05838b28e6"
  },
  {
    "documentRowId": "apach-cn57e-apach-doc-0-p4",
    "sha256": "376fbbd00b20daccf6d2ca3fca6784f0ccf3bb979868c07be7d4a24bc794abd0"
  },
  {
    "documentRowId": "apach-cn651-apach-doc-0-p4",
    "sha256": "c790fa3a5e96e4c727439f665dfa17020bff9da2bc8c1315434e0440a96b40d5"
  },
  {
    "documentRowId": "apach-cn701-apach-doc-0-p4",
    "sha256": "e36f8a97ce127552aff6a1078eda0ba6796b6f4b9080bafeaa9b8e7fe23bed31"
  },
  {
    "documentRowId": "apach-cn70e-apach-doc-0-p5",
    "sha256": "242a5f47160c662b6c3eceac4a030e3c3223bc53941127292860eb493a61b386"
  },
  {
    "documentRowId": "apach-cn70e2-apach-doc-0-p5",
    "sha256": "5189a2ce9ef367f3adf8f6fb038b407b4866522abe534cf6c17b9c81dabe4a41"
  },
  {
    "documentRowId": "apach-cn831-apach-doc-0-p5",
    "sha256": "dbb415cfb36f203da542b29f12abb47e98dbdbb9399bdcb580503fd1c4b0febf"
  },
  {
    "documentRowId": "apach-cn83e-apach-doc-0-p5",
    "sha256": "cd8a4c1c017462fc033af761ea5203917009653727feb8375edb02f46770f913"
  },
  {
    "documentRowId": "apach-cn83f-apach-doc-0-p6",
    "sha256": "394a27b9b5724a61de4242ffd7bcef75874bcd48a3460cc9aeb600dfd159c4c4"
  },
  {
    "documentRowId": "apach-cn901l-apach-doc-0-p6",
    "sha256": "02ff9116bb7e408fb4e7874a7b79b03041a424e821412e588d520554ee74ba05"
  },
  {
    "documentRowId": "apach-cn901lc-apach-doc-0-p6",
    "sha256": "b5980d2190f834154e9161796c41c54d5dd6bd4689e30feb19776bdf0266017c"
  },
  {
    "documentRowId": "apach-cn90lh-apach-doc-0-p6",
    "sha256": "6aa0a9dd1b91a36abd1da157947a7930897f7fb3787a222481b8e4e7beba3a62"
  },
  {
    "documentRowId": "apach-cn100e-apach-doc-0-p7",
    "sha256": "9869aa6e11b699107c410bf3a75abece4cdacf231d0e963bd039b439e16a94b2"
  },
  {
    "documentRowId": "apach-cn100epal-apach-doc-0-p7",
    "sha256": "34d6ec8ca6f76c12f8b08fff2abdb95b5844ac3c0e057607c57997e5ad02a686"
  },
  {
    "documentRowId": "apach-cn130e-apach-doc-0-p7",
    "sha256": "9b84c4a7c13d6cb4152ae583470d439d9c05cb8de980787060a7093235a68477"
  },
  {
    "documentRowId": "apach-cn565s-apach-doc-0-p8",
    "sha256": "c5decd63472caa52ccb7fd20f3ef346e09ea8289787f49ff549fe0d6b0cc6a43"
  },
  {
    "documentRowId": "apach-rn45e2-apach-doc-0-p8",
    "sha256": "0f541a634bb75fac908bf970d8c70f533590193eb7ff64c3b75a2c0d26243195"
  },
  {
    "documentRowId": "apach-an90211-apach-doc-0-p9",
    "sha256": "5e44c58c0855bdf7bdb964a8ef155f7e0adf6a3abbce2b2e542c6f195cc5f1c2"
  },
  {
    "documentRowId": "apach-an100341-apach-doc-0-p9",
    "sha256": "f1d6e86c6ca90a86cca248bcadcf2fdf8d82ee27975127da0ec50ac1f95e6768"
  },
  {
    "documentRowId": "apach-an90341-apach-doc-0-p9",
    "sha256": "1794c73c425e9ca48858c558ea2431f29f3686dab7d72b2f327a944e0a43f555"
  },
  {
    "documentRowId": "apach-an13021e-apach-doc-0-p10",
    "sha256": "53951dfa69840c0f4c17a65ebf32d69cc8b2289de113c622e79fd9afa473b956"
  },
  {
    "documentRowId": "apach-an16021e-apach-doc-0-p10",
    "sha256": "29209a9b620afb935481eca5f5d6b0f7674ee1f7435c7f3a395f415fbba308c0"
  },
  {
    "documentRowId": "apach-pt630-apach-doc-0-p11",
    "sha256": "06a3b26f690aa3c361af013b22cb17d5ef5718ceec08f8be0af6257d6e8e4721"
  },
  {
    "documentRowId": "apach-pt635-apach-doc-0-p11",
    "sha256": "4e959e0e9bcd46e251543b0845d227d797f233f99e22f04a46ea90eea56b18fc"
  },
  {
    "documentRowId": "apach-lmf40lac-apach-doc-0-p11",
    "sha256": "f4d2fd39be909f717f51ee7570d60c2ab7caa4d6c79f5d849349fde910d22983"
  },
  {
    "documentRowId": "apach-lnf32ac-apach-doc-0-p11",
    "sha256": "a48a59fc6df4cf5d594d88c5c5f0046eb5ec685c98bcb5473a550d6c1d5f8c20"
  },
  {
    "documentRowId": "apach-lnf50ac-apach-doc-0-p12",
    "sha256": "06e9c616230df65b2f41c0ccdfc72c6faeaf3d18168e9757954119742b326680"
  },
  {
    "documentRowId": "apach-lnf50ac1-apach-doc-0-p12",
    "sha256": "d7ab02e584444b33a3885976e05ef0fc2ff7553d90912c458706f2933f5e66ca"
  },
  {
    "documentRowId": "apach-lt50lac-apach-doc-0-p12",
    "sha256": "825124ac8f8791eb07f5b68a6529b1ea82db28f224a5ee6e922bf9767e1d23e2"
  },
  {
    "documentRowId": "apach-lu50fac-apach-doc-0-p12",
    "sha256": "d5b39b44e47351b5df5bc2873d8089347a6b417ae1ef349fe7cccb9b3bff8db5"
  },
  {
    "documentRowId": "apach-lt1650-apach-doc-0-p13",
    "sha256": "9e8a3fc7bd5ee70d2e7944554bd461cc8607d447025fcfac2cf30ffe927211e8"
  },
  {
    "documentRowId": "apach-lt50llac-apach-doc-0-p13",
    "sha256": "35596ad0f8b1690e640c48273c11a816a16e37cf6e73822a82c47fba2eabe57b"
  },
  {
    "documentRowId": "apach-lt1650ac-apach-doc-0-p13",
    "sha256": "840960fbb509ddaeaa1fe3e8f108fe788525ec005eb765a194256ddd7c2a28af"
  },
  {
    "documentRowId": "apach-lt1664ac-apach-doc-0-p13",
    "sha256": "e19175ce073603032f1bb7384a3aad693d320181874d6c5fab5168a0373a4f3c"
  },
  {
    "documentRowId": "apach-da64e1-apach-doc-0-p14",
    "sha256": "7f8cb254eb666d00180371c65766e417ca3e75a965946fb1a45d74a17e6da009"
  },
  {
    "documentRowId": "apach-lt1664eb-apach-doc-0-p14",
    "sha256": "fd6c4f16d182219f85b5c24b7ff749e4fc96427791fe999463c2acf88e9aff6b"
  },
  {
    "documentRowId": "apach-lht38-apach-doc-0-p14",
    "sha256": "81c3c689f05f9ac3617969ef8829cd31ddaa85bc1ea5de23d651d7f26d7195b0"
  },
  {
    "documentRowId": "apach-lht64-apach-doc-0-p14",
    "sha256": "233412d232a23a33051f2b49ab7db16fb1890347f9b4d6d0793dde0ff89b5a65"
  },
  {
    "documentRowId": "apach-lusjk16f-apach-doc-0-p15",
    "sha256": "4de65e5fceea416d1e5adfff7290a6ac383919f982caea3d1949ce88c7a19a8e"
  },
  {
    "documentRowId": "apach-lu7116ac-apach-doc-0-p16",
    "sha256": "3f523749a0216f6cb49166deb5172e4d4afb60319d707819f296a4ae06247cf5"
  },
  {
    "documentRowId": "apach-lu7116f-apach-doc-0-p16",
    "sha256": "70d2725f579f994d20e0468fb1c15291c0a520640c17dc05e30731b1d4952af0"
  },
  {
    "documentRowId": "apach-lu71161auto-apach-doc-0-p16",
    "sha256": "96448cc38b314bb8684281aac6fbbb7441b3cf2555921e346d152daf017dd224"
  },
  {
    "documentRowId": "apach-lu7116lac-apach-doc-0-p16",
    "sha256": "d7f315b715ce040e051284b96e9909f2401c2a01341eabc7fe3c86b9d00d3cd9"
  },
  {
    "documentRowId": "apach-lu1416ac-apach-doc-0-p17",
    "sha256": "c6af1ee9b5d5194cc8d903b2367a49d29cf63f036a82d83025cf9167bb3b482a"
  },
  {
    "documentRowId": "apach-lu71161autolm-apach-doc-0-p17",
    "sha256": "746e877377560042e13981457d28ba6c28b8772973f2a33ad8b0a535729d51ec"
  },
  {
    "documentRowId": "apach-lu2316f-apach-doc-0-p17",
    "sha256": "e69a382913d558ca0ec249f9115ff109e38212dce459efa873fa5ce365766d61"
  },
  {
    "documentRowId": "apach-lu9716f-apach-doc-0-p17",
    "sha256": "1d33b1de28a18b792b6e63d1e84df4d2bb5ed3db68702edc3e8ac6ca1c4af0e9"
  },
  {
    "documentRowId": "apach-lu8416ac-apach-doc-0-p18",
    "sha256": "8b9e20f1735dfd3d6a2b916f38e01460b8095f5f8c44abff8b0e9c61d9635620"
  },
  {
    "documentRowId": "apach-lu9725ac-apach-doc-0-p18",
    "sha256": "4f94588ea3f77b5670dd62a69dcde3d4aa7922bb4b14e5ca4613a730c0b5fdfa"
  },
  {
    "documentRowId": "apach-lu8016ac1-apach-doc-0-p18",
    "sha256": "0e3376063262a24466f270522335044acda0c0b98581f781e9fd5f5b5f2dfc1c"
  },
  {
    "documentRowId": "apach-lu8016f-apach-doc-0-p18",
    "sha256": "70c06261afade3d08f255c042f59451fa8470c01a3ead2a5eb93a617439c3564"
  },
  {
    "documentRowId": "apach-lu80161auto-apach-doc-0-p19",
    "sha256": "97e881de8b51b77a62f091b1913db2b5c8a2005bc149486fd399d449905acf66"
  },
  {
    "documentRowId": "apach-lu80161autolm-apach-doc-0-p19",
    "sha256": "19889b881b0e1315bb1f4b7ada63bf1657b90fe2edf3660e81a16a680e3a2a84"
  },
  {
    "documentRowId": "apach-lu425jac-apach-doc-0-p19",
    "sha256": "5ec2adc76e4af51b93c82faf017816d5d205b3065372527085be1cc8670a3d8c"
  },
  {
    "documentRowId": "apach-lu8025ac-apach-doc-0-p19",
    "sha256": "58f5db2cfdb92c6fa9ab56f6b6ad4662877db3b858c6b2df0936b56343820460"
  },
  {
    "documentRowId": "apach-lu1016f-apach-doc-0-p20",
    "sha256": "21859e6c83dcf80c7280731ef2b278d3ef988de91e5c36444be61f9ae572dbe2"
  },
  {
    "documentRowId": "apach-lu1016j-apach-doc-0-p20",
    "sha256": "553e5123c58d734052a66adbf1bfd2425d601c42ab7c6d3f2f9e33800a9f0a21"
  },
  {
    "documentRowId": "apach-lu1016auto-apach-doc-0-p20",
    "sha256": "82c15e5f94fd21b38ba4e92be37414891f8cb2deba9dae00622e5e06e154929c"
  },
  {
    "documentRowId": "apach-lu1025jac-apach-doc-0-p20",
    "sha256": "c6970cb3c6d09072ff00257fc55f1fadda1b1caf4fffd999b8ffb14e6ff0b108"
  },
  {
    "documentRowId": "apach-lu5018ac-apach-doc-0-p21",
    "sha256": "a7d23ba110a890c734ac03149b6be0da8fd9f6f4f2f5726dec4201975731956e"
  },
  {
    "documentRowId": "apach-lu9025ac-apach-doc-0-p21",
    "sha256": "886d0b7314ac3c82ed844773983ed841fcb5cecbb02b02e15952726316f0349b"
  },
  {
    "documentRowId": "apach-lu9032ac-apach-doc-0-p21",
    "sha256": "938a927f48ecd443a89f816d7aca2b9abf0e8de5d24cb09399c895fffca5135b"
  },
  {
    "documentRowId": "apach-lu9040lac-apach-doc-0-p21",
    "sha256": "389c51c9e68c832183d7a02a84772914e79c5814ca22768be13659fc7ecd33ba"
  },
  {
    "documentRowId": "apach-lu9040hac-apach-doc-0-p22",
    "sha256": "c6d90a8268bda71257a2722ec09f256a9fda826777a78d8e81ab2a7151d3cdea"
  },
  {
    "documentRowId": "apach-lu9040lad-apach-doc-0-p22",
    "sha256": "fbc0ff7431121bbb851c836ba0a47111b5fc4650ebf18f6526c3de22e0ed9d5e"
  },
  {
    "documentRowId": "apach-lu9040kt-apach-doc-0-p22",
    "sha256": "44892735d0a25c553ba3be1038db0cb9382691214c9a3663011007bd2f8c1507"
  },
  {
    "documentRowId": "apach-lu9225ac-apach-doc-0-p22",
    "sha256": "807e9d4a980e3316e4ca6096c4cf504597026dbb457d6de3bae514d1502a354e"
  },
  {
    "documentRowId": "apach-lu9240hac-apach-doc-0-p23",
    "sha256": "a36b4952769799f10c8ece6bfd1ee00b1924c05a9ac8c85d7f6bacba4fa5c613"
  },
  {
    "documentRowId": "apach-lu9240lac-apach-doc-0-p23",
    "sha256": "7ec72a0b7120248e5537c19b4ecc692e3a65a69a3027510ffcd5220698b4bda1"
  },
  {
    "documentRowId": "apach-lug25ac-apach-doc-0-p23",
    "sha256": "3f62fe8608f1f2144512b263a2efb5737c15af12d11f990cf941359cc324e801"
  },
  {
    "documentRowId": "apach-lug32hac-apach-doc-0-p23",
    "sha256": "70600f79d5b0d8cfdcfc6a2cf4533bf24733705d9faa9301f158d8933160d780"
  },
  {
    "documentRowId": "apach-lu50040lac-apach-doc-0-p24",
    "sha256": "799f18cc81cf9c261bf0e1d1327103c0d03fc7b010f17190afbb4eadd57e4f24"
  },
  {
    "documentRowId": "apach-lug40lac-apach-doc-0-p24",
    "sha256": "504ed540be746a5bee6b78dab7cfe37cbf61dc6ebe41396e70da8603f5a7c5c5"
  },
  {
    "documentRowId": "apach-lu9438ac-apach-doc-0-p24",
    "sha256": "ce758a02826df3c64a1a1d49016f0dd1ef76005d87ad778f14355f42c3ab4182"
  },
  {
    "documentRowId": "apach-lu851lc1-apach-doc-0-p25",
    "sha256": "96c74a8c502b2477152c17536330ebe47ad8f7018a36c094dee338b67c579efe"
  },
  {
    "documentRowId": "apach-lu851f2-apach-doc-0-p25",
    "sha256": "4ce6383a2e85669144d1e4bb9bd5ddfd50573985244a04c5961505611370e2a8"
  },
  {
    "documentRowId": "apach-lu851f2lm-apach-doc-0-p25",
    "sha256": "fc7c5b12cd4e91f5b187fef382dcb78d888d69411074fdac6419a560de3b4776"
  },
  {
    "documentRowId": "apach-lu851kgf2-apach-doc-0-p26",
    "sha256": "abce3f8f817d156782bf0713b1333f0f54ee70ec99f9dd3be54eef3345452330"
  },
  {
    "documentRowId": "apach-lu864f-apach-doc-0-p26",
    "sha256": "7dcf192136ff976440c49855998768e91b1ac7212c9b7d404a5f456015afd967"
  },
  {
    "documentRowId": "apach-lu864kgf-apach-doc-0-p26",
    "sha256": "8f478cfcd79df8679d344b0a93a574cc08da89c517311c96b51349c0f27c64e8"
  },
  {
    "documentRowId": "apach-lu951f2-apach-doc-0-p26",
    "sha256": "8c6227c61113cf7311b3eb37fa41f127392d798100f1426c284a505113e10f2f"
  },
  {
    "documentRowId": "apach-lu1580f-apach-doc-0-p27",
    "sha256": "1cc67d387b2ab9d9c8431259c7f3f3987c44ffe5a28fe5563a71bc8296f9758a"
  },
  {
    "documentRowId": "apach-lu964f-apach-doc-0-p27",
    "sha256": "27e7370b4fe56a9a3eafaafd53410a74d4de943d9f958cddf626886c32312ddf"
  },
  {
    "documentRowId": "apach-lu1438-apach-doc-0-p27",
    "sha256": "26b1eb1c5f99f0a822d784a3b3a9a9ccee71861b5b8b87b3ea281438b4dec528"
  },
  {
    "documentRowId": "apach-lu24381-apach-doc-0-p27",
    "sha256": "edb19dad83008e7e5cee821d33cc3d43b63217b17eb23702562dd21d2d052da8"
  },
  {
    "documentRowId": "apach-lu24381ws-apach-doc-0-p28",
    "sha256": "c5a2cdeca9b21f25307e14a82b8e26ee8ae38c3b3ce7b8020e25d2da774c3f0e"
  },
  {
    "documentRowId": "apach-lu25381-apach-doc-0-p28",
    "sha256": "05bae4c25cac3174ac3ff341112596c8eb4b92c78b2914e9494e0870829b208f"
  },
  {
    "documentRowId": "apach-lu25381ws-apach-doc-0-p28",
    "sha256": "ed10f0c6a7fa3ac935a19ee09d4f7a4756a7935388ffb09c4d66bbaf2db28abb"
  },
  {
    "documentRowId": "apach-lu2538-apach-doc-0-p29",
    "sha256": "d9fa4f03c53643ab7b23686fefde00c56855cb7410e013ebe03c1e6b0301aa23"
  },
  {
    "documentRowId": "apach-lu26381-apach-doc-0-p29",
    "sha256": "c534164384df1bb0692c25f019bd38fe64b611d386d9301883f77551d85f28d5"
  },
  {
    "documentRowId": "apach-lu2638-apach-doc-0-p29",
    "sha256": "9184103ad979208be08207f827a9efe7aaed46707bfcb25e5f632d2e9fc321de"
  },
  {
    "documentRowId": "apach-lu26381ws-apach-doc-0-p29",
    "sha256": "26fdab9b48543842191f8c9e1d443953a032c03f0f6a3ccef08fbfee64a49cfe"
  },
  {
    "documentRowId": "apach-lphca515s-apach-doc-0-p31",
    "sha256": "136c70996e9c4fa5451474362d6660af5b60ad01faf441032d575aee897876df"
  },
  {
    "documentRowId": "apach-lphca516s-apach-doc-0-p31",
    "sha256": "33cee7d0f9a9246d3abdb145e16de40920a15b05d4ca205e3fc09b9f8284a7bb"
  },
  {
    "documentRowId": "apach-lphca815l-apach-doc-0-p31",
    "sha256": "e70c321417bf4c2b38b2859052680de0fa38844c247c0e389461b317a813ebd3"
  },
  {
    "documentRowId": "apach-lphca815m-apach-doc-0-p31",
    "sha256": "357211d2f2370f89df63ba81148aa310ba384d52fcceb779a67a9d62bd467328"
  },
  {
    "documentRowId": "apach-lphca815s-apach-doc-0-p31",
    "sha256": "0d5e865052bb9cd5b5d37768c2ce8611116ee84c1ca583c6c147c8eac4ea5cc1"
  },
  {
    "documentRowId": "apach-lphca816l-apach-doc-0-p31",
    "sha256": "52947ac4cbb030e55dc59813f9f0530bad5a61f87c24ba7f867887174eb60528"
  },
  {
    "documentRowId": "apach-lphca816m-apach-doc-0-p31",
    "sha256": "2840a9ab8fdf1e96e575739a0d56458348af177044642f851a23765c307cc6cb"
  },
  {
    "documentRowId": "apach-lphca816s-apach-doc-0-p31",
    "sha256": "4e18fe908ff0f6a03d4603fe0e37abbf8d753eb7e1f85edbf68b75a17161904e"
  },
  {
    "documentRowId": "apach-lphcc316s-apach-doc-0-p31",
    "sha256": "0c625103b8dc98a7f0bd5b42237fc97662caf4e1c4ffb693d56cc24aed5fb425"
  },
  {
    "documentRowId": "apach-lphcna815l-apach-doc-0-p31",
    "sha256": "5643f4e8779bf6dd38f15a4b3ae7b224bfa34912b0a49e8c38a7008d0d728bc8"
  },
  {
    "documentRowId": "apach-lphcna815m-apach-doc-0-p31",
    "sha256": "efbb1d8ce81ae1ed69e2b9efab8aad3d78e573655e2adce2e8ab5c53f3466fbd"
  },
  {
    "documentRowId": "apach-lphcna815s-apach-doc-0-p31",
    "sha256": "7860abbc0a7d8137e1a3d54353448d431618b6ea7d44a05124f968cd541143e8"
  },
  {
    "documentRowId": "apach-ms1619-apach-doc-0-p32",
    "sha256": "2e48fc012041700bb5470e756273aab372d0849126cde55976e62793e02b9ae4"
  },
  {
    "documentRowId": "apach-ms1619s-apach-doc-0-p32",
    "sha256": "b0b251003903fa51ce9ece2c0c2a309434abd2ea7d083b66bfc0dac91cfd81cf"
  },
  {
    "documentRowId": "apach-ms1625-apach-doc-0-p32",
    "sha256": "356a7b6ba535516f7374b33210b05c29a76fff1c714b6fdbc6403d23d2444120"
  },
  {
    "documentRowId": "apach-ms1625s-apach-doc-0-p32",
    "sha256": "9b1edef63815a8c0156ae800e6f25faf9a5e3de5b50a09c62188bd1324ac55fb"
  },
  {
    "documentRowId": "apach-cf15aa-apach-doc-0-p33",
    "sha256": "ef63adef658d197bd05f417b730a7657d4dee125ef04dafaf4fa90bf3524a000"
  },
  {
    "documentRowId": "apach-cf15ap-apach-doc-0-p33",
    "sha256": "743cb255a41e8bbd0f75cd243ad1c1ff124ec890c045035189b1df86999e6c0f"
  },
  {
    "documentRowId": "apach-pts8400-apach-doc-0-p34",
    "sha256": "64f5e2d7751ac704c44f483172391097e2543f20fa8636feac1d3c13a368d7a8"
  },
  {
    "documentRowId": "apach-amc38-apach-doc-0-p34",
    "sha256": "e4afaa8da19a2016bf4f194e9fb29d34bb307161f8612560211ecdc5e289b01d"
  },
  {
    "documentRowId": "apach-lu8016fp-apach-doc-0-p34",
    "sha256": "164634af123e8e5441f378e47d8e09b0496cb4a186394be0c60bbf9e2b2d1ec7"
  },
  {
    "documentRowId": "apach-cn70cl-apach-doc-0-p35",
    "sha256": "a80a348d7254a3292d141bfb23a33c04446260aae476e904260ee28a0c05c5ab"
  },
  {
    "documentRowId": "apach-cn57erbm-apach-doc-0-p35",
    "sha256": "3d9c198c7d1f9994c66e6a7a3cc30118fc779b8c7f913bbb413cc15bc8974520"
  },
  {
    "documentRowId": "apach-cn70erbm-apach-doc-0-p35",
    "sha256": "56e705db812911f10be05882126e8a73412e2d972531dc2764c1e8516dff995d"
  },
  {
    "documentRowId": "apach-cn83erbm-apach-doc-0-p35",
    "sha256": "a051ff9643c7668c9fa7a9da42710bdbc86375cd144e2d59a1df9268f66c7695"
  },
  {
    "documentRowId": "apach-cs19a-apach-doc-0-p36",
    "sha256": "cdf55272630ecccb3679747b5e1a8baabc32a436579b4be7b98c60d3851cd70a"
  },
  {
    "documentRowId": "apach-cs19c-apach-doc-0-p36",
    "sha256": "113c4a08dfa3689cc4d2e312c4ffdbeea4e663cece65e83461a8843f5c86f54d"
  },
  {
    "documentRowId": "apach-cs19sw-apach-doc-0-p36",
    "sha256": "a8c2bee8e672624823023265648905513014739ffa82301cf072d57af3e3a543"
  },
  {
    "documentRowId": "apach-cs229040-apach-doc-0-p36",
    "sha256": "345101bdd7b954fc45a08b0890eb1eb2978a4d9b8bf1a49f604f366ae1c221be"
  },
  {
    "documentRowId": "apach-cs22a-apach-doc-0-p36",
    "sha256": "858a9a9e6e0a9ed8c2b1a5c0f55701c2686398ff7c13b71bfdf15979e8aa619e"
  },
  {
    "documentRowId": "apach-cs22c-apach-doc-0-p36",
    "sha256": "f91d40532f756ceb1938d41f949fb4d8e6f12d8e86626ca9508da8f618cf080f"
  },
  {
    "documentRowId": "apach-ccs19gr-apach-doc-0-p37",
    "sha256": "ff3eec6844738eed37fcce25ab52b74b337c5787794f78ef8f0b8a191beff0da"
  },
  {
    "documentRowId": "apach-ccs19rr-apach-doc-0-p37",
    "sha256": "690f79be36967676208fe5f5112d76f6a5d91ff12cd7757f6096315a1f83d91b"
  },
  {
    "documentRowId": "apach-ccs19swc-apach-doc-0-p37",
    "sha256": "3e04f98ae0c1749f7423b5b8690089200620f8b778f527b6ae8f356a5afb4f5b"
  },
  {
    "documentRowId": "apach-ccs19t-apach-doc-0-p37",
    "sha256": "66704fbb6b37165b5b84a09c411c57533e608fe847fac0eb345e36e2cdc0d00f"
  },
  {
    "documentRowId": "apach-ccs22gr-apach-doc-0-p37",
    "sha256": "b63a9a0235ae7ea1c7850791347364218bf6bfb4119e940e1301452b36e3985c"
  },
  {
    "documentRowId": "apach-lpb19sw-apach-doc-0-p38",
    "sha256": "057da87089d12e945f864d222dcd107c3462dacffdd45cb944981cce269b3383"
  },
  {
    "documentRowId": "apach-lpb229040-apach-doc-0-p38",
    "sha256": "0680da2f93e9c0f341fee70f16827cd6dd07dae7c4c424e5db71d91999860afe"
  },
  {
    "documentRowId": "apach-lpb22a-apach-doc-0-p38",
    "sha256": "6757e8a3af3be253c564164bf3afaacfdec1df2baaaee2c9c0f6e9b220789eb8"
  },
  {
    "documentRowId": "apach-lpb22c-apach-doc-0-p38",
    "sha256": "beb960f939882c9e4bcab548d123bf1ddf458002ca05616382ba7de889d2153e"
  },
  {
    "documentRowId": "apach-lps19sw-apach-doc-0-p38",
    "sha256": "d64435671663fa7191047db3441b8352db2454d7c1c3cb2301fcea4d3ebfc265"
  },
  {
    "documentRowId": "apach-lps229040-apach-doc-0-p38",
    "sha256": "ddc34798768745e80a187dbb471fbe6ce690304fca2cd5faa40ac1079fa82139"
  },
  {
    "documentRowId": "apach-lps22a-apach-doc-0-p38",
    "sha256": "97953711093460bd81f42c4e162e34906e3b665d5b9d3907cb62cdbc6d905964"
  },
  {
    "documentRowId": "apach-lps22c-apach-doc-0-p38",
    "sha256": "bc18489109a912d63263b702f94cdffa790d3d820b2c64d2adf7c6225daaa668"
  },
  {
    "documentRowId": "apach-cj25-apach-doc-0-p38",
    "sha256": "9f408054a6e39d54b4c8992c724a299defc70fd6cfc1110efd399972ac19b4cf"
  },
  {
    "documentRowId": "apach-cj32-apach-doc-0-p38",
    "sha256": "b7b7b06e1275545068a253e7e412f0923d7d12127a9a96319df16a09503e7881"
  },
  {
    "documentRowId": "apach-cj38-apach-doc-0-p38",
    "sha256": "71443975e73f73d77eb0cee2b2fac85ad34bc8fee6548a36f80b264c21636b0b"
  },
  {
    "documentRowId": "apach-sp5010ba-apach-doc-0-p39",
    "sha256": "1fa3c3613521d852caa17aa2f523409bd4dca87ab4ad51cd3a706c39f274f494"
  },
  {
    "documentRowId": "apach-sp505ba-apach-doc-0-p39",
    "sha256": "e30fc862dabdb788b71e03d535ad4199048fb77622c5aa437fa0f503d3387ae5"
  },
  {
    "documentRowId": "apach-sp50777a-apach-doc-0-p39",
    "sha256": "c7c5b62ebc7d8b610414f8821296d64ece5114e18d21f422c6fc638b8d580541"
  },
  {
    "documentRowId": "apach-sp50779a-apach-doc-0-p39",
    "sha256": "3337c6bc96c5d27142f0cde00c81705be5baf6175e2e7f0003e64498d95441cb"
  },
  {
    "documentRowId": "apach-aw050j-apach-doc-1-p4",
    "sha256": "53798bfbe9efddb5188d4069ac976c4ed2cf590a26d6670d28b54d1a928f0f98"
  },
  {
    "documentRowId": "apach-aw050h-apach-doc-1-p4",
    "sha256": "5a3d1e8549e316408a9062580126f737eff3b14f643481605747c70cbfd1ed2b"
  },
  {
    "documentRowId": "apach-aw070e-apach-doc-1-p4",
    "sha256": "1ef4a2fc65b73cb45b41cde4c2df0c5819a8441ce54390e3deb72b06e47d5efa"
  },
  {
    "documentRowId": "apach-aw050k-apach-doc-1-p5",
    "sha256": "5dd5add44705e8c3e3d8b19a82a0e7d04d87acf400775f51505603426a9d8363"
  },
  {
    "documentRowId": "apach-aw070d-apach-doc-1-p5",
    "sha256": "54118c0a295509aca99438928c8984d6e382ea000c990ab77df1cf8cad15265e"
  },
  {
    "documentRowId": "apach-adr001t-apach-doc-1-p5",
    "sha256": "0f1af0064e2fcccc405b2bccc9af794ce8493b49c25c3d826ca43c544170e91e"
  },
  {
    "documentRowId": "apach-aw050g-apach-doc-1-p6",
    "sha256": "b180ca12d3dd76cf6d4f476aafbc8dbe7ff147e802e7f7a53646b9cbb91be7d2"
  },
  {
    "documentRowId": "apach-aw050i-apach-doc-1-p6",
    "sha256": "16ff9bf0271f6accdb629cf77ae685208682f2d4525cfccfdf513a6b50700c5c"
  },
  {
    "documentRowId": "apach-aw120c-apach-doc-1-p6",
    "sha256": "65786cb89240f7f24550600b35c230bc4cf87f96d7bca47399abe397911676b3"
  },
  {
    "documentRowId": "apach-aw030d-apach-doc-1-p6",
    "sha256": "e7a6bfca71b88b493669ce63b15464d560281b99dd7c599f65d5ad305106ee9c"
  },
  {
    "documentRowId": "apach-aw120d-apach-doc-1-p6",
    "sha256": "fff65c74d1979bfe9944ef2266b175ef59ce6dbdf8f812d8f920327e036663c5"
  },
  {
    "documentRowId": "apach-aw350a-apach-doc-1-p6",
    "sha256": "ab73073195d1b37e34cce219ce4e33ec2c40632370ab3c72d9f442ceaa1235f1"
  },
  {
    "documentRowId": "apach-aw180b-apach-doc-1-p8",
    "sha256": "4785db9a2a3c37ac54188f7b51c581c86c1f18461d3f6a013f04168d8365c655"
  },
  {
    "documentRowId": "apach-aw200a-apach-doc-1-p8",
    "sha256": "0d0071b1f5c4e5c780d20d853b2e0f8c2c5c3219783e087f3c51a7c628d1c5be"
  },
  {
    "documentRowId": "apach-aw200c-apach-doc-1-p8",
    "sha256": "32941e6ae6e1ede9807922741f5a21530f952050129e0b0fdfc9eb14d84b0796"
  },
  {
    "documentRowId": "apach-aw150b-apach-doc-1-p8",
    "sha256": "75a586b5ccc4c16b6e7b817e959e455a7d8b98de076f1a6a6b783db229fede03"
  },
  {
    "documentRowId": "apach-aw201a-apach-doc-1-p8",
    "sha256": "4862ba674d789add58a33bead1a564725a380c1250290a2a034422d2611edf7e"
  },
  {
    "documentRowId": "apach-aw221a-apach-doc-1-p8",
    "sha256": "2b8f455d8dfee13ad151062da9a18a6b3e1b1fecb26613be53151493c3cb3269"
  },
  {
    "documentRowId": "sata-1200295-sata-current-catalog-2025-p14",
    "sha256": "11ed66cd87fa58e64d7cd2b932a9e8b42a443b84425f952dfcb836be22add4d3"
  },
  {
    "documentRowId": "sata-1200378-sata-current-catalog-2025-p14",
    "sha256": "bda1124f621f6ab80ce4b6a39385e711237139d2e26b41ad27153cc3cfe07496"
  },
  {
    "documentRowId": "sata-1200451-sata-current-catalog-2025-p14",
    "sha256": "1859ef7eabae0751074faa85c4f1042732ff798415d9f05fc267f30b13b03f91"
  },
  {
    "documentRowId": "sata-1201954-sata-current-catalog-2025-p14",
    "sha256": "57477b20de94db192f13f3a40572419c23f715c1a801519d8cdc5ff438f75b0a"
  },
  {
    "documentRowId": "sata-1200013-sata-current-catalog-2025-p14",
    "sha256": "d994432b100892409aede0635368a92a623a704dff00bb94411b5d19a3729c2f"
  },
  {
    "documentRowId": "sata-1200097-sata-current-catalog-2025-p14",
    "sha256": "037c952aff6de2881a798548da52cec3030649d51e58e2d0884e8c2b49497fac"
  },
  {
    "documentRowId": "sata-1200534-sata-current-catalog-2025-p14",
    "sha256": "adb452d63017750f8a990adb08ef3f4b75987af85dfc0d130cca854b229dec14"
  },
  {
    "documentRowId": "sata-1200336-sata-current-catalog-2025-p15",
    "sha256": "78e4b075d88ff45904b86182637f9c9f4ad9a83c5b41ee3214836715cac5ffde"
  },
  {
    "documentRowId": "sata-1200419-sata-current-catalog-2025-p15",
    "sha256": "39685b11dda5c42d16f5eaebb10e3f3eaa29efbdd87934e70b83420b487c51ec"
  },
  {
    "documentRowId": "sata-1200493-sata-current-catalog-2025-p15",
    "sha256": "50bb62b068dc2348a6e82ce7df2a9c6a7d7eccf862b809a254419a17538349e6"
  },
  {
    "documentRowId": "sata-1200550-sata-current-catalog-2025-p15",
    "sha256": "9304a1e7e7839bdc9aa2951e2e5a38a2f1e0c5a59cd7bf1f3d524f703c874e45"
  },
  {
    "documentRowId": "sata-1200055-sata-current-catalog-2025-p15",
    "sha256": "8d6b7ea27f695801fb1fd11bf19d547583315a0e4bbc526c0b3a58be283f9346"
  },
  {
    "documentRowId": "sata-1200138-sata-current-catalog-2025-p15",
    "sha256": "10479ca9130c228971633837689ca7709288012bbfad095657dad07de0d78d34"
  },
  {
    "documentRowId": "sata-1200211-sata-current-catalog-2025-p15",
    "sha256": "ced8d33f20a9500ac4b8584af628af19fac3f0b9e7f7c30b65ded9f35fbb4ee3"
  },
  {
    "documentRowId": "sata-1200253-sata-current-catalog-2025-p15",
    "sha256": "9f0f07dd09f95848b105b1170cfb97f3db500b18940f4b8f88a8e5bee9498180"
  },
  {
    "documentRowId": "asturomec-27312-asturomec2024-p18",
    "sha256": "8c514a8db2afab7028de4d0842c79197cd0e47403dbf4e684d911d817809d982"
  },
  {
    "documentRowId": "asturomec-27314-asturomec2024-p18",
    "sha256": "254cb63c30ce160ae58e074e01884d5ec5b164c4e0b89282e0c59f1d80520068"
  },
  {
    "documentRowId": "asturomec-27317-asturomec2024-p18",
    "sha256": "70bbaa2e2e2a9043a335c67ed35d3d1ed1eae38157ac0cba7a988cdefa1048c9"
  },
  {
    "documentRowId": "asturomec-27318-asturomec2024-p18",
    "sha256": "02f20b1fce4ffce20fd05ebadd2e24eaa2cbba8833ff0d9f16a08a7aa6c2ed8b"
  },
  {
    "documentRowId": "asturomec-27319-asturomec2024-p18",
    "sha256": "8b35ef0225b8005cd5a18d91fe6a303df5cd4d3e7081688c5ec58feae284a6c6"
  },
  {
    "documentRowId": "asturomec-27322-asturomec2024-p18",
    "sha256": "55fef585dfe8ae66a6fca4535b38889c738beca5485c4bb1eab8e1445095fdb3"
  },
  {
    "documentRowId": "asturomec-27325-asturomec2024-p18",
    "sha256": "944472d3b87ab33e0fd24c827dd09836686893db44f59ade8913e426849336c5"
  },
  {
    "documentRowId": "asturomec-27330-asturomec2024-p18",
    "sha256": "d9d36914440c56984d93b44aef106633299feccb07d2edbfbca47b8483d87642"
  },
  {
    "documentRowId": "asturomec-27012-asturomec2024-p18",
    "sha256": "1409e1a521390cd181930b0e309c6bccf5e6478b27524ae8dc67a2971e2bc616"
  },
  {
    "documentRowId": "asturomec-27014-asturomec2024-p18",
    "sha256": "3628d00cb2a6e279c2e13e762a10c9c89a46f2241cdc25a7cb68dff6e301f753"
  },
  {
    "documentRowId": "asturomec-27017-asturomec2024-p18",
    "sha256": "3b01e7518ba636530e6d3410f7108df9323c312605677e1ecbf7a2354ed7ae19"
  },
  {
    "documentRowId": "asturomec-27018-asturomec2024-p18",
    "sha256": "b3001135994d8b95a46c93bc50eaa2035e98885f8f4939531cda3af9c0653f24"
  },
  {
    "documentRowId": "asturomec-27019-asturomec2024-p18",
    "sha256": "95a2f3cd659c24bea4476ba8f652e2e1ff71756a9641d7b2283d71f609ad7f53"
  },
  {
    "documentRowId": "asturomec-27022-asturomec2024-p18",
    "sha256": "e544ce0f47c8e4734118f6b80022d6be522f691b6ba911d356b6774957f59115"
  },
  {
    "documentRowId": "asturomec-27025-asturomec2024-p18",
    "sha256": "033fb02d81a5827eac935da8fbe67dea9c1d507fc6ef6b5ebfebe9cdd45eefd7"
  },
  {
    "documentRowId": "asturomec-27030-asturomec2024-p18",
    "sha256": "ccd4ecd4145f2ebf409fc0879835091ada8b829c5ca84817e13566b24e608df8"
  },
  {
    "documentRowId": "asturomec-29612-asturomec2024-p93",
    "sha256": "b388c563612d9f760b8ce6e384b73634157a2092efdaf9b7245482803c565a99"
  },
  {
    "documentRowId": "asturomec-29615-asturomec2024-p93",
    "sha256": "921f991b3da7a13fa7498bd9f2d94e658b3b629f678c4b63c6be781cc38ccc5c"
  },
  {
    "documentRowId": "asturomec-29617-asturomec2024-p93",
    "sha256": "840d80994617a8c029599d08ca672028c99018461282218ef45b5de7aa6486a4"
  },
  {
    "documentRowId": "asturomec-29618-asturomec2024-p93",
    "sha256": "453d19cce4688db00fd7b5f9c1a3d7ff664a8b7bbcebbf42682c905620c162d6"
  },
  {
    "documentRowId": "asturomec-29620-asturomec2024-p93",
    "sha256": "f1703979f14db1f5407a68cf5fbe73483365c39d1701641af73805604f3271db"
  },
  {
    "documentRowId": "asturomec-29625-asturomec2024-p93",
    "sha256": "3a65d7b23bf6cd47d4342798fefd7c6e65370051a19157b413bdab810118f51f"
  },
  {
    "documentRowId": "asturomec-29512-asturomec2024-p93",
    "sha256": "203eb74a3ba59718ecc9c73d9b81f66e9ae3af1427e91ef5a7a8eecd802c7c96"
  },
  {
    "documentRowId": "asturomec-29515-asturomec2024-p93",
    "sha256": "9c8f7e7e4596144ea4e9057c6b42e3ba12cb8ef7df1e3ffb551518fd5a9b140e"
  },
  {
    "documentRowId": "asturomec-29517-asturomec2024-p93",
    "sha256": "b9ad070fa11b8506f60db483a59a84290557cb3c2d1c9681004ac98d144a2b81"
  },
  {
    "documentRowId": "asturomec-29518-asturomec2024-p93",
    "sha256": "4a190252ec7120943606c214a2df30a3918622d5e7a04881ca115bf668b7656f"
  },
  {
    "documentRowId": "asturomec-29520-asturomec2024-p93",
    "sha256": "8a5cf90991266c55a30654e179b06d965b8102128c7152375717357c6e7dcb5d"
  },
  {
    "documentRowId": "asturomec-29525-asturomec2024-p93",
    "sha256": "fa30b73d3579ada4b038776a87de19041a5d9dd135faa211cceb92d99d99e801"
  },
  {
    "documentRowId": "asturomec-50000-asturomec2024-p42",
    "sha256": "6ab255aebe460eb88404a428414d56a0f48d3ae50d9e4d2bf8d1033d31a0a22a"
  },
  {
    "documentRowId": "asturomec-50001-asturomec2024-p42",
    "sha256": "dcb4e8ea8ba310b5abc59548e80688dcf837015fe9973e79ecbf67fb24f104ac"
  },
  {
    "documentRowId": "asturomec-50003-asturomec2024-p42",
    "sha256": "406e282d126fc93c4cead1bbcc9216a1846c85bcb8fea6fc091c065382e5455d"
  },
  {
    "documentRowId": "asturomec-50004-asturomec2024-p42",
    "sha256": "dacb7475177d6c5a04c081d46e95be72a41e9a6614bd8f68df6c4aa40ff55eec"
  },
  {
    "documentRowId": "asturomec-50006-asturomec2024-p43",
    "sha256": "315409421190a19d8ded72158e484e4d76bcdd0f7adc282b568794bb796493b0"
  },
  {
    "documentRowId": "asturomec-50007-asturomec2024-p43",
    "sha256": "aa08a16c2ca01d3fc6c597b02df64da03f397d11f1509b503770d68b440f1ac6"
  },
  {
    "documentRowId": "asturomec-50008-asturomec2024-p43",
    "sha256": "24ebad170eb614e01dc2ffd624e5092a4b1cbb68d65dc8e9af76aa32a08d7af4"
  },
  {
    "documentRowId": "asturomec-50009-asturomec2024-p44",
    "sha256": "92d6f5defdd28355b34c72a5753e7e95acbe92fae97f930f5202a085cac54813"
  },
  {
    "documentRowId": "asturomec-50065-asturomec2024-p44",
    "sha256": "2741b7ccb127700bf8d6b39d2c78fba6a56fa4ca3d0c48e94f45f326eaa584fb"
  },
  {
    "documentRowId": "asturomec-50066-asturomec2024-p44",
    "sha256": "c3cfa416da9e58397b7215fabe91bc2d49d7f134b1192e3c7c6c29b08987bf84"
  },
  {
    "documentRowId": "asturomec-50067-asturomec2024-p44",
    "sha256": "8e80508ffccd2c284a8b7ea9e4c54f740decb226bb17cc607dc1835543d291e3"
  },
  {
    "documentRowId": "asturomec-50068-asturomec2024-p44",
    "sha256": "832839fb19fcf2077a71028eac626aa3d5c6f364a8af3a49c05abc7a73102616"
  },
  {
    "documentRowId": "asturomec-50047-asturomec2024-p45",
    "sha256": "3c20943b117ed30d8c2bf490352327c328aeaceb2d4944ce9a2b5461db132f6e"
  },
  {
    "documentRowId": "asturomec-50048-asturomec2024-p45",
    "sha256": "7010a4f8e1b5a8f91c5879c88c5c66dacc88fae55d91d017938d60beea902104"
  },
  {
    "documentRowId": "asturomec-50049-asturomec2024-p45",
    "sha256": "cab4eb93cd81e4488deb4b1c90ff795889953ac919f8ca9d38fb692f46c80092"
  },
  {
    "documentRowId": "asturomec-50050-asturomec2024-p45",
    "sha256": "265306430aff5a8fbd982e31cd618f1fed5147e15ae660fdaa610fc1bdb592f3"
  },
  {
    "documentRowId": "asturomec-50071-asturomec2024-p45",
    "sha256": "a9e9697e74fbd944c885fe8bc993d7c4a845015082aed7cf773ee470411cb2ca"
  },
  {
    "documentRowId": "asturomec-50072-asturomec2024-p46",
    "sha256": "f469a9ea50086687de29d18794bc17fd46b32e2d9c17813a90eaf4ead8c4d62a"
  },
  {
    "documentRowId": "asturomec-50073-asturomec2024-p46",
    "sha256": "cdfae4bd74e79390c761199430af057f952b31218e9118ccb8aeeb2b7b68009b"
  },
  {
    "documentRowId": "asturomec-50046-asturomec2024-p46",
    "sha256": "31a406bfedd2a441878c1be21e074a1f5d539aaecf3eddb70292cb91e0f224d7"
  },
  {
    "documentRowId": "asturomec-50070-asturomec2024-p46",
    "sha256": "4888e8ab0941011db7176d0327bdf65475cc3dd4f3c405c3ca54c0f0426a98f4"
  },
  {
    "documentRowId": "asturomec-50020-asturomec2024-p46",
    "sha256": "07f4008b4350c67e7f755ede4e70bd4422895d321a6848c804178b939b9bdecb"
  },
  {
    "documentRowId": "asturomec-50026-asturomec2024-p46",
    "sha256": "52dd5a88e465dfeef2715f9f424338198c32bac3d3784f50929640e65189efdb"
  },
  {
    "documentRowId": "asturomec-50005-asturomec2024-p43",
    "sha256": "455867297fe327524c548f8a41905cfd5c12c8d10e53fb27607c50685c92df59"
  },
  {
    "documentRowId": "asturomec-50180o-asturomec2024-p50",
    "sha256": "532f525d621dc3fc49e9ac5c5014274bd1cab49c70e39903c888480f839e4d88"
  },
  {
    "documentRowId": "asturomec-50181o-asturomec2024-p50",
    "sha256": "c1011f299cb9cd61e39f735366af0a4abe35e66894bc788ba28d21ac012db384"
  },
  {
    "documentRowId": "asturomec-50182-asturomec2024-p50",
    "sha256": "77ee9a4ac7469b8b1a344eef8b0fb9d870a7e8c7b19c4fbb38ab4864d01c0fb0"
  },
  {
    "documentRowId": "asturomec-50183-asturomec2024-p50",
    "sha256": "16a875c5f08cf0d4c873d6c6dc2b5a61370224ec64024c7133c05ef229a96cd5"
  },
  {
    "documentRowId": "asturomec-50108o-asturomec2024-p51",
    "sha256": "39e5aa52afce159d76b1503aca92a6d1eb1dc28d7cc8c67db7b3d8a0b47dc43b"
  },
  {
    "documentRowId": "asturomec-50109o-asturomec2024-p51",
    "sha256": "e696ca4cb07cfd6661aae4c2de320f1938c696e53a65723a85f71bffec6e31cf"
  },
  {
    "documentRowId": "asturomec-50106-asturomec2024-p51",
    "sha256": "304b915e30cd557dde8a33c818ab4785c9f80d4a85a7b24ff671d3313017c3ac"
  },
  {
    "documentRowId": "asturomec-50107-asturomec2024-p51",
    "sha256": "031044de02b9de38d67c15f46fc3e3235db60ed9dc860ac7e508b51de6a2c3de"
  },
  {
    "documentRowId": "asturomec-50171-asturomec2024-p54",
    "sha256": "a63a0715d91f16805109a0bca88444bc2ca3e75abed15ed69abed6a57d85b7b7"
  },
  {
    "documentRowId": "asturomec-50172-asturomec2024-p54",
    "sha256": "4c55363a8fea4f93f70589fb3adf86effee0ec8c9fbf60d07ca0d775e259face"
  },
  {
    "documentRowId": "asturomec-50173-asturomec2024-p54",
    "sha256": "3c022a42d1ee0288554e452e5509798f23e6d59cbdb3408cb12568ff3d730b7d"
  },
  {
    "documentRowId": "asturomec-50165-asturomec2024-p54",
    "sha256": "06debfc1d7c0bc1d59c41608240090119a5cfdc8a580ec245497676fde4622ae"
  },
  {
    "documentRowId": "asturomec-50160b-asturomec2024-p54",
    "sha256": "3be70f4ed75122223cb11f8095a8e71560926ae6b47c5cb663e5b341aa880455"
  },
  {
    "documentRowId": "asturomec-50210-asturomec2024-p56",
    "sha256": "d1a90dc9da8d48f4c0c68c88198ce00eb2734008c40df0fd5bbcb9c051f892d3"
  },
  {
    "documentRowId": "asturomec-50212-asturomec2024-p56",
    "sha256": "ccbcd57b17f8099ac0c26bbc3823934d8d5ec0c9bf6c13007471faf625b8f501"
  },
  {
    "documentRowId": "asturomec-50314-asturomec2024-p56",
    "sha256": "4245ade26aaffce3c7d8a1d309b11b0b6ca7547d9a82007efe6f1698a1867157"
  },
  {
    "documentRowId": "asturomec-50316-asturomec2024-p56",
    "sha256": "16a8d27c7c66a2016dadc241fbf2c597bfd3bfe9604ddc82825542399c12c48f"
  },
  {
    "documentRowId": "asturomec-50090-asturomec2024-p95",
    "sha256": "cf08b78776b647b0564d0ffa5193c473411a822483db7caa167cc9c2d6855dc7"
  },
  {
    "documentRowId": "asturomec-50091-asturomec2024-p95",
    "sha256": "93ef09de7984134dc189a547a6e3d4f36efa2d2775072543f90b834732160ca3"
  },
  {
    "documentRowId": "asturomec-50300-asturomec2024-p57",
    "sha256": "8b02077d406be96cfff6655889c18376fc4564909482845564c2e7ae143dfc8e"
  },
  {
    "documentRowId": "asturomec-50301-asturomec2024-p57",
    "sha256": "95283f596a0ca088f81fbca8792e5b6b6c561557750908bd89e6289bc94177ec"
  },
  {
    "documentRowId": "asturomec-50254-asturomec2024-p59",
    "sha256": "c70171c33d77a67615b6179d9d6fa48f43f641fc48cd86876b9a2218c69199a5"
  },
  {
    "documentRowId": "asturomec-50253-asturomec2024-p59",
    "sha256": "4ec5a0c9f250c0b089b6e798d2a770abe93247a16f66d9b33fdd6359c69d022f"
  },
  {
    "documentRowId": "asturomec-50242-asturomec2024-p59",
    "sha256": "45e26b4419f32b6fa8a0fd1df3b398a91404204574fb34ee9ef26418b7d66b59"
  },
  {
    "documentRowId": "asturomec-50243-asturomec2024-p59",
    "sha256": "eb2dbe2e24958578bf65aa3ad974d2af9f8476cde3c47b52c914b0606d07f619"
  },
  {
    "documentRowId": "asturomec-50244-asturomec2024-p60",
    "sha256": "800f78d6682e50d23f7b7a89acf32e66f1950c818a11956e872d8d05232351da"
  },
  {
    "documentRowId": "asturomec-50247-asturomec2024-p60",
    "sha256": "816a8d84716f8c421f1195c6b835fff26bd1094d492d3858fd2afb2237f8c2fa"
  },
  {
    "documentRowId": "asturomec-50150-asturomec2024-p63",
    "sha256": "b58661fcf0fdfe4c7ea8048581519c0503887fe16996f161a92be6d6e6489f7e"
  },
  {
    "documentRowId": "asturomec-50080-asturomec2024-p94",
    "sha256": "167022195fe2afb08adc2546a160d50b31509b94581773f8b230a4ccd34d08d8"
  },
  {
    "documentRowId": "asturomec-50081-asturomec2024-p94",
    "sha256": "104a27a35e3335ec773c8f43390b1d4ef0ba50f1aab896389775215c0384e0b6"
  },
  {
    "documentRowId": "asturomec-50086-asturomec2024-p94",
    "sha256": "b344a64dbc930885c8068e1516e848ae659a487f2cba2efdfc39918e6c1362f0"
  },
  {
    "documentRowId": "asturomec-50085-asturomec2024-p94",
    "sha256": "1ec43789394444878416605bb66b4baf5826b896b7f70bc3211fa695d2fdd6db"
  },
  {
    "documentRowId": "asturomec-50096-asturomec2024-p95",
    "sha256": "8ff2a5e899b2ade636b465472611fb060f1627daf5cfa265da10136cce2be6de"
  },
  {
    "documentRowId": "asturomec-50095-asturomec2024-p95",
    "sha256": "da3d3810eb25bd0cc64869c4a6bc58b97a49b431181df6860833481d3cba83f4"
  },
  {
    "documentRowId": "astropneumatic-1111a-astro-product-1111a-p1",
    "sha256": "7c7a53d7158a66de5a0bd302dedce74f74b4ecd78c1e2b9d14803310df4410f3"
  },
  {
    "documentRowId": "astropneumatic-1114a-astro-product-1114a-p1",
    "sha256": "142d0131d4367a7e688139abbed559e100bcbab088d79284e36ac7c5fbdbd035"
  },
  {
    "documentRowId": "astropneumatic-1115-astro-product-1115-p1",
    "sha256": "d6eaec326d93f9419ec3b8146231f082fc16a377f74556a9c545f621465263a0"
  },
  {
    "documentRowId": "astropneumatic-1119a-astro-product-1119a-p1",
    "sha256": "7baed5ba70735350d2acd9bbe3954d8244919d7de7777f825940be6cd5640986"
  },
  {
    "documentRowId": "astropneumatic-1120-astro-product-1120-p1",
    "sha256": "c359507d7c4c9bbce6dc68b467cbf1d6015dab3ba60e83a63013713da2f4ec20"
  },
  {
    "documentRowId": "astropneumatic-1124-astro-product-1124-p1",
    "sha256": "b8e8c42828dac5480e04cafc19266a1e4827760c1240f05069d56f7f86601531"
  },
  {
    "documentRowId": "astropneumatic-1128-astro-product-1128-p1",
    "sha256": "6bb035fecb02f0e6fd37d216f84002ec58502dbd9870ada7dbb7ea1581a04025"
  },
  {
    "documentRowId": "astropneumatic-1139-astro-product-1139-p1",
    "sha256": "82eac5e185eccc0f8cf79abcad39468bf3b29f564d0081ae0510a023d2f6426c"
  },
  {
    "documentRowId": "astropneumatic-1205-astro-product-1205-p1",
    "sha256": "0135ae3295a7f80c0ddbe0dab565afaa1bf907fda65d82f91c84d1409765a130"
  },
  {
    "documentRowId": "astropneumatic-1240-astro-product-1240-p1",
    "sha256": "577dad75d6d38e403f9ea58af51566dcc2c97a3b80ed20976370c491f853f47c"
  },
  {
    "documentRowId": "astropneumatic-135bt-astro-product-135bt-p1",
    "sha256": "e4f86daa3e0f9c1b287478d465502fdabecf92e19218ad55b2b07650e551eb1c"
  },
  {
    "documentRowId": "astropneumatic-136e-astro-product-136e-p1",
    "sha256": "1c09bad33e0ac0cd8e0307261c345cba7d0ca7c13c5e819cd453ec9f83bcbd2f"
  },
  {
    "documentRowId": "astropneumatic-157-astro-product-157-p1",
    "sha256": "015d823f287bcf564181957b543b9256b1788e81abfc914665395de7aae71bbe"
  },
  {
    "documentRowId": "astropneumatic-1711-astro-product-1711-p1",
    "sha256": "f2bf70c94d4fd5d51248ef14cc975e0f2fecf58df246f95b208ed30ba955ac89"
  },
  {
    "documentRowId": "astropneumatic-1715-astro-product-1715-p1",
    "sha256": "937ebe016419b06b2ed6c70692a72e1ba743d74efa56e5707436bf243b6d8876"
  },
  {
    "documentRowId": "astropneumatic-1716-astro-product-1716-p1",
    "sha256": "f110232fb58fcf0a70a47b8bc69aca1a09e5991781e611023fc737051b9741e9"
  },
  {
    "documentRowId": "astropneumatic-1717-astro-product-1717-p1",
    "sha256": "8f233b7b4ca5a0a92d55cc51b73b26836e6787ba4e083515c89efe111c10046a"
  },
  {
    "documentRowId": "astropneumatic-1718-astro-product-1718-p1",
    "sha256": "0d46b88bfadca1c0485fe433736cbcdbe5311ccbab23400cc2d64df7a2185775"
  },
  {
    "documentRowId": "astropneumatic-1742-astro-product-1742-p1",
    "sha256": "8fe2ba7e9ac59839de41082376a91df02af98165f8298287ac25f2f2c429a296"
  },
  {
    "documentRowId": "astropneumatic-t210-astro-product-t210-p1",
    "sha256": "9fcbf86f3a13d48c88157fa2d1c8f46ddd4bd5f5e9140bd958e86e7d34501aed"
  },
  {
    "documentRowId": "astropneumatic-ucg100-astro-product-ucg100-p1",
    "sha256": "8a903e67e36f77d6df6e57bc22791387f9bfb01f9fc1742c19d63d7aa785060b"
  },
  {
    "documentRowId": "astropneumatic-1812-astro-product-1812-p1",
    "sha256": "09b8e679b9f3c464c9f2523ff680dd7d6568dfb2e4319720885daae45dbca011"
  },
  {
    "documentRowId": "astropneumatic-1812l-astro-product-1812l-p1",
    "sha256": "fe4c0912db059ba6f3412f42e03a042336b6a635bcc24bfcb3c2ad5ca04c7700"
  },
  {
    "documentRowId": "astropneumatic-1822-astro-product-1822-p1",
    "sha256": "7ed6c754c28961cfcc5ce7991de52d3bd092be105274654d86178b1228adbcf6"
  },
  {
    "documentRowId": "astropneumatic-1823-astro-product-1823-p1",
    "sha256": "a100855d8de651a88f78ad6ee9b1a1c93256e99ca81b66139d061fcf3b9056b9"
  },
  {
    "documentRowId": "astropneumatic-1828-astro-product-1828-p1",
    "sha256": "b1b492b1d9d99c60fc55873cb3b17a7a195d169221cbfb86f6106ff7e31350c4"
  },
  {
    "documentRowId": "astropneumatic-1830-astro-product-1830-p1",
    "sha256": "ac9784662d63a33c363a2746ed0e52382eca8c0bb025457688a064a5cd6326bd"
  },
  {
    "documentRowId": "astropneumatic-1831-astro-product-1831-p1",
    "sha256": "f4fbf179705de191a3ac26fb4c5ce9ba696385388bfb7128fa167af580bf88ae"
  },
  {
    "documentRowId": "astropneumatic-1832-astro-product-1832-p1",
    "sha256": "bdfb1beac9b739ad7ee6d5870c0446d44a3890cdbd0b14ce8d0f4dc417e65fc8"
  },
  {
    "documentRowId": "astropneumatic-1833-astro-product-1833-p1",
    "sha256": "e41a878010acfe542e8aaa60069e1bdeed17acfd95bea59549f7edf5dca7b903"
  },
  {
    "documentRowId": "astropneumatic-1835-astro-product-1835-p1",
    "sha256": "ff76e31c98f20738fb7923fb636468f3a5737732e048ed25d84e2a7c679c4ee6"
  },
  {
    "documentRowId": "astropneumatic-1835l-astro-product-1835l-p1",
    "sha256": "cf05bb6e42184d74b5275aadc0ae1ba581ca3df9c70828ee008c64ff576f984a"
  },
  {
    "documentRowId": "astropneumatic-1838-astro-product-1838-p1",
    "sha256": "c7e16a70728bd62955e44de549b01fa4e43e6ca8e98832d7ffba73ee66c70ac3"
  },
  {
    "documentRowId": "astropneumatic-1845-astro-product-1845-p1",
    "sha256": "db58cbbfefa17a3c37b63b3e5949b008f668eff60333d9f5e6f4fcbedc52dd9e"
  },
  {
    "documentRowId": "astropneumatic-1848-astro-product-1848-p1",
    "sha256": "2dd59042e2809de7597d2283fbd12bbcf629a89d02fe97fe271d23546d7157b1"
  },
  {
    "documentRowId": "astropneumatic-1849-astro-product-1849-p1",
    "sha256": "a0a4bfaf68849de69e19d59f806ec03cbd809cc094112840da08e952c83ac4af"
  },
  {
    "documentRowId": "astropneumatic-1868-astro-product-1868-p1",
    "sha256": "98955f22af419a0ebb762b6a2f4489a557480c2502446da130add907f155a27c"
  },
  {
    "documentRowId": "astropneumatic-1869-astro-product-1869-p1",
    "sha256": "ef6c3461aaeee3285ec54047facaa272b7eb48c0888ec57ca492bec8a9987f8d"
  },
  {
    "documentRowId": "astropneumatic-1873-astro-product-1873-p1",
    "sha256": "b968a8869bfcdfe37f0e8ebdc4d39afd27a02de5e7ac8606f85b67a2628a6663"
  },
  {
    "documentRowId": "astropneumatic-1894-astro-product-1894-p1",
    "sha256": "1a5e87efa02e0a3bc0bf50d8df54e6fc41895bfcde59d94707b196b889c945b4"
  },
  {
    "documentRowId": "astropneumatic-1895-astro-product-1895-p1",
    "sha256": "b9bad05d62ba6845f9d559d1ceab04767f5fc27c3c771d56f25fb07a0b9c1418"
  },
  {
    "documentRowId": "astropneumatic-1896-astro-product-1896-p1",
    "sha256": "6ff068a1c16a1504e1db769acf6b9553a90a9daf4f904585cc8244a3ff7bf518"
  },
  {
    "documentRowId": "astropneumatic-201-astro-product-201-p1",
    "sha256": "ec74dd4c5707db866a49b0be97f946a4f5ac447a063ea5641a0cd9c5ca98b4e3"
  },
  {
    "documentRowId": "astropneumatic-202-astro-product-202-p1",
    "sha256": "97447eacb927202fbcab88b811500ed6dafcbc8620a61d3a4e6ca2f85a809d82"
  },
  {
    "documentRowId": "astropneumatic-204-astro-product-204-p1",
    "sha256": "1c5e838dd6da71f0226b9162a39900e928cb781b0e9a2f857a9b857afaedb6ef"
  },
  {
    "documentRowId": "astropneumatic-205ql-astro-product-205ql-p1",
    "sha256": "4b068c713e6305d6f87d329f41b80ed7d80dda39122978f2b7e690ed2f1431e8"
  },
  {
    "documentRowId": "astropneumatic-206ql-astro-product-206ql-p1",
    "sha256": "64c64ff8d2aa54a453e964860607faf1ef76a3b88d52c296db1c1add99d9c3c4"
  },
  {
    "documentRowId": "astropneumatic-208-astro-product-208-p1",
    "sha256": "9dad5ff9c7c092cb03aa9c351f051fe60191b78a1a9d8fa9ff71666eb80d6410"
  },
  {
    "documentRowId": "astropneumatic-209-astro-product-209-p1",
    "sha256": "b4c5b88dc45d01419301313f26d08f71f0553c4e0a670270a84222720e811e24"
  },
  {
    "documentRowId": "astropneumatic-210ql-astro-product-210ql-p1",
    "sha256": "5ed3136d63a8983d0c79f13465bdee2d3c1571dea5b642b80ace773f5a3de558"
  },
  {
    "documentRowId": "astropneumatic-216ql-astro-product-216ql-p1",
    "sha256": "98787366af0db5d37604d24dd1b6be5c1e2c3653892aa33041b51200c3e84c77"
  },
  {
    "documentRowId": "astropneumatic-217-astro-product-217-p1",
    "sha256": "1b774b0b48d632b946c9c95da76c02645c6cc43e30f5bab2917c444a431bdb6f"
  },
  {
    "documentRowId": "astropneumatic-218-astro-product-218-p1",
    "sha256": "707851947d8e2b076ce0e9bccd6af2c23c7f06d25ae7c29bea52a886a49d6489"
  },
  {
    "documentRowId": "astropneumatic-233-astro-product-233-p1",
    "sha256": "b928ab28acf35eb0b0812407f5821b33071be75ff6aeed6a66f8a9f37f655c30"
  },
  {
    "documentRowId": "astropneumatic-234-astro-product-234-p1",
    "sha256": "e8af43991996e1c169dc5b1dc3f1be613ba1e4231abec19555f5f00aded9b85f"
  },
  {
    "documentRowId": "astropneumatic-235-astro-product-235-p1",
    "sha256": "8ad00e6bfab6df6a60320f2cb872eb229f8cc134189d3f4927d666e46fb57e21"
  },
  {
    "documentRowId": "astropneumatic-245s-astro-product-245s-p1",
    "sha256": "6ac704c4d77cb768c8db887f99532629e55916c5c5f125ccc5035cc799e857a7"
  },
  {
    "documentRowId": "astropneumatic-247p-astro-product-247p-p1",
    "sha256": "1401e74859d758e63097688e86a2038860cbeb647000ebba00e583ce99dd6f33"
  },
  {
    "documentRowId": "astropneumatic-249-astro-product-249-p1",
    "sha256": "1f29d79f08dfbb7e6b4b6b3b6337ebb2c0c913576543fcb3f1582d63640a70c9"
  },
  {
    "documentRowId": "astropneumatic-250-astro-product-250-p1",
    "sha256": "6ede9dbc193b533acb1f93382304c9652a5ac8b4f0ab05b6ad8b13aadeee8e0b"
  },
  {
    "documentRowId": "astropneumatic-260-astro-product-260-p1",
    "sha256": "342bedefadd3e1556cab5924e046f79569d6bb5415d88ec428c3c3a1940b1183"
  },
  {
    "documentRowId": "astropneumatic-30045-astro-product-30045-p1",
    "sha256": "84227b9f92b23160842d4bd76dc82c86846a07c8ada52e0175ae69ce18d0f301"
  },
  {
    "documentRowId": "astropneumatic-3006-astro-product-3006-p1",
    "sha256": "63ba84e1a62e9b38117d5d9672f0a20bdb11d48f8677fbc9b654a1781d8b82c2"
  },
  {
    "documentRowId": "astropneumatic-3035-astro-product-3035-p1",
    "sha256": "208dba4206ef9bfc081d5027c6f65341d748c2b41ba99fba67fc13b515c0b401"
  },
  {
    "documentRowId": "astropneumatic-3039-astro-product-3039-p1",
    "sha256": "397821ac2e9426d14bdaf54526f80e8bc9cc0e591186c62a503deabd238c7225"
  },
  {
    "documentRowId": "astropneumatic-3051-astro-product-3051-p1",
    "sha256": "96e732c73fbf5ff176feae5049975cee056ed619ffde210dbbba9e4e0eef5e2a"
  },
  {
    "documentRowId": "astropneumatic-314-astro-product-314-p1",
    "sha256": "be35e77c45ce5cc0617409a751777f23447ff8c875364e9e8a432a22bc7033c3"
  },
  {
    "documentRowId": "astropneumatic-320-astro-product-320-p1",
    "sha256": "6175df3f016346c51b551424f2975a57679d6c6b4e05eb1e5e9f02577612def2"
  },
  {
    "documentRowId": "astropneumatic-32020-astro-product-32020-p1",
    "sha256": "922b68f2d5496b59fdd1fc587a469393b6be1088afc0e57fa5a5515d70b3c112"
  },
  {
    "documentRowId": "astropneumatic-321-astro-product-321-p1",
    "sha256": "20ddb3dc7d6e988d25b90db65076bce76ac5b78e43bf5f7101c576a3b59d19ad"
  },
  {
    "documentRowId": "astropneumatic-326p-astro-product-326p-p1",
    "sha256": "b6c87855a4419ce0e4b9085f4f7ff8ceca2e3b2d7c6a6584f70bf0dc246fd803"
  },
  {
    "documentRowId": "astropneumatic-332-astro-product-332-p1",
    "sha256": "1813934edc8220cce9b581d7983d8caf4c0589a84357699741cd133f8d6b79d7"
  },
  {
    "documentRowId": "astropneumatic-4008-astro-product-4008-p1",
    "sha256": "52a282513ae05e4bcba87d2ba39eaea87bba59b69b5271bb7457c0e320116083"
  },
  {
    "documentRowId": "astropneumatic-409-astro-product-409-p1",
    "sha256": "d4ca85b8b152d65e81e31b0eef7cb60385aaea064938c52bf8d316a44f1f6d32"
  },
  {
    "documentRowId": "astropneumatic-4320-astro-product-4320-p1",
    "sha256": "ede01c2af39ee2f1e9ec5b8fe75f1df108d5e7a5de4fd10ead3fd2ee2e39b580"
  },
  {
    "documentRowId": "astropneumatic-510aht-astro-product-510aht-p1",
    "sha256": "89171a1f3852f32a36fb14e91820b188efcf4b1d5f2ccb12a00455e0b0f78748"
  },
  {
    "documentRowId": "astropneumatic-525c-astro-product-525c-p1",
    "sha256": "14e604c7f19ffdf45234fd2f71ea64be8dcaca3cc87a3e8abb77976543fe4115"
  },
  {
    "documentRowId": "astropneumatic-527c-astro-product-527c-p1",
    "sha256": "636d79718d87f722b6f56a23b155cad26b69d7c62f2da94c1d00b57ac2bb8a9d"
  },
  {
    "documentRowId": "astropneumatic-727-astro-product-727-p1",
    "sha256": "db8780c1cd2989ac9642fc3c9d63e08369c5d0d19c2da4865828ef275f436cea"
  },
  {
    "documentRowId": "astropneumatic-810t-astro-product-810t-p1",
    "sha256": "1fcf92f6eab15fc50a6977284e80fb197b7efb551b4504fd5b25cd23c61c8fc8"
  },
  {
    "documentRowId": "astropneumatic-888s-astro-product-888s-p1",
    "sha256": "cf30f94d41c523aceca4e7e07ddd0f1790d6dc42c33c581ca7eae836b5be8320"
  },
  {
    "documentRowId": "astropneumatic-936-astro-product-936-p1",
    "sha256": "217d34d0b0ea0436416821edad6cd8bc20ffaad9a8058222b2fb4bdcb2c605ea"
  },
  {
    "documentRowId": "astropneumatic-as6s-astro-product-as6s-p1",
    "sha256": "2a45b43b88827da52b6ac139b2fe233ebb3532e5755d51b63eb0b439776a5a68"
  },
  {
    "documentRowId": "astropneumatic-as7sp-astro-product-as7sp-p1",
    "sha256": "b9c52ddaafba944b73d17b932f38702a4588f68c04825c4ebde9cefbd19fd763"
  },
  {
    "documentRowId": "astropneumatic-as8s-astro-product-as8s-p1",
    "sha256": "4128570252fac2f13e6d6647029b493382dfbe6b1a0f11fe4af20394840fd00f"
  },
  {
    "documentRowId": "astropneumatic-eurohe102-astro-product-eurohe102-p1",
    "sha256": "f00332f7e43259e68c85a714af988e71dc800c47ed577fbd086b7c55f0c963b4"
  },
  {
    "documentRowId": "astropneumatic-eurohe103-astro-product-eurohe103-p1",
    "sha256": "681c105541c8bbf01391c3e0178871b564dad430edbf29de1198628903460d02"
  },
  {
    "documentRowId": "astropneumatic-eurohe105-astro-product-eurohe105-p1",
    "sha256": "a4182c8d920baf6305a613943a7cd1ec363c2cc90a0099ca5ed7930d22c5d522"
  },
  {
    "documentRowId": "astropneumatic-eurohe107-astro-product-eurohe107-p1",
    "sha256": "d430c77d2962aabc756374b9efc834844865e51ca7510a0cdb24bd72a902332d"
  },
  {
    "documentRowId": "astropneumatic-eurohe108-astro-product-eurohe108-p1",
    "sha256": "56aec2a942cbc9b9cba9d069295387f39b51a19f6c07209878ddc1fc408a1b35"
  },
  {
    "documentRowId": "astropneumatic-eurohe109-astro-product-eurohe109-p1",
    "sha256": "ae1009df88f45df5f06f432043cad91fe8d1840d527067a30e13b5749a058164"
  },
  {
    "documentRowId": "astropneumatic-eurohv107-astro-product-eurohv107-p1",
    "sha256": "72df5b6d161d7e80f16602f99b26cd580804dcb7eb74b2aaa2934aedef4d1862"
  },
  {
    "documentRowId": "astropneumatic-eurohv109-astro-product-eurohv109-p1",
    "sha256": "76b843421ceca77810cf663f8d56ae2604481efe0546e175bcb00818be96cb93"
  },
  {
    "documentRowId": "astropneumatic-evo4014-astro-product-evo4014-p1",
    "sha256": "61a02ff99a48b7293d2d8acc6a6a722c24b471895b905dbe27a2b9f923a2a550"
  },
  {
    "documentRowId": "astropneumatic-evo4018-astro-product-evo4018-p1",
    "sha256": "f78e5124776134a2c6254bc83e3b323c2284ecc8623682ed114cf9e87eba584b"
  },
  {
    "documentRowId": "astropneumatic-evot13-astro-product-evot13-p1",
    "sha256": "197710b2c2401e1df8d950a4d59909dd7e6ed4cfbd17d6754579288250564d2d"
  },
  {
    "documentRowId": "astropneumatic-evot14-astro-product-evot14-p1",
    "sha256": "99963c988e4c77a92188e197689d289e9652186bda3db15d0c2240a98fc07d86"
  },
  {
    "documentRowId": "astropneumatic-gf14s-astro-product-gf14s-p1",
    "sha256": "c4d79b23325bf290c7bae04eeda85ce99c3b0234526b9532f1930c6c8d99e46e"
  },
  {
    "documentRowId": "astropneumatic-gf20s-astro-product-gf20s-p1",
    "sha256": "70ed122f6fbbca70ee6f338baa9c44b1053271c6c305324946e6d21cb875971e"
  },
  {
    "documentRowId": "astropneumatic-hvlp503-astro-product-hvlp503-p1",
    "sha256": "a2f63a3738d6e4155b09e3034cda3c3b6f92ebe4c6f3ceb9b09304c90c82ce0d"
  },
  {
    "documentRowId": "astropneumatic-hvlp505-astro-product-hvlp505-p1",
    "sha256": "cb5dafdf34e457b284b176180b38467e628226d711e143feebbd5474a92afc71"
  },
  {
    "documentRowId": "astropneumatic-hvlp507-astro-product-hvlp507-p1",
    "sha256": "ec9885fc0c1ca42b7989e1e7d515187b2183ee117acdbf11becd0932da071c42"
  },
  {
    "documentRowId": "astropneumatic-hvlp509-astro-product-hvlp509-p1",
    "sha256": "24b1c6a9072ed7e32c973b302b27a204026d3b89f209dacad025a38b6c9c1412"
  },
  {
    "documentRowId": "astropneumatic-hvlpd508-astro-product-hvlpd508-p1",
    "sha256": "2706eaeb8243af9fd1ea169b71053c3222ad101de832fa1c04573069f42d08e5"
  },
  {
    "documentRowId": "astropneumatic-hvlpd510-astro-product-hvlpd510-p1",
    "sha256": "aa493182beaacac052d5ca5952119c39c3f8b156afee47976b231d612466e7af"
  },
  {
    "documentRowId": "astropneumatic-hvlpd512-astro-product-hvlpd512-p1",
    "sha256": "249530a449eef4414ab7a51d38cf24e3a4eda66bb73541522195078e5dd97097"
  },
  {
    "documentRowId": "astropneumatic-pr36-astro-product-pr36-p1",
    "sha256": "9c7704e984af124a466ee756134f56f9e52a24ca9ab603705a61881928902748"
  },
  {
    "documentRowId": "betatools-019270010-beta-action-export-2026-p90",
    "sha256": "5da7e7dc000b9ba3fac28696453d9089c5cf8a5ed69d14dcc54eef8f3662c600"
  },
  {
    "documentRowId": "betatools-019270008-beta-action-export-2026-p90",
    "sha256": "22e3d0072d8b27e1032886116932bb682eefe72539e9ed419eda447c5fcb8bc7"
  },
  {
    "documentRowId": "betatools-019270006-beta-action-export-2026-p91",
    "sha256": "528310e04537371a3264b9573592b2585c05fe06cbf63bef6ba67dabfe3e884a"
  },
  {
    "documentRowId": "betatools-019270005-beta-action-export-2026-p91",
    "sha256": "88e8a1a6efc80d6a1972e15dce324503fa4c38b4b2f6201ee1a4746191cef858"
  },
  {
    "documentRowId": "betatools-019270030-beta-action-export-2026-p91",
    "sha256": "cbae8aebe21ccfaea141731d940205f7faa6cfca2f1e410ef0254f47517f60fb"
  },
  {
    "documentRowId": "betatools-019280030-beta-action-export-2026-p92",
    "sha256": "90db98d13be8ee8173a12f71e10c1427b9a983e2021ca002b797e8a5bf4faca7"
  },
  {
    "documentRowId": "betatools-019280006-beta-action-export-2026-p92",
    "sha256": "1f817743d707c7a363c64fd95e65e0c90a41306f7a8f0d5e2e2c4a82593d2e8b"
  },
  {
    "documentRowId": "betatools-019300030-beta-action-export-2026-p92",
    "sha256": "df0412ba1764c882464e077a58abae3eb6246a2eae4fb767fdc53dfa9d2273f7"
  },
  {
    "documentRowId": "betatools-019220013-beta-action-export-2026-p93",
    "sha256": "8493709a1deb9c8ed5c620b0986720a0400699cee3375dd6473a3e0c33d6630b"
  },
  {
    "documentRowId": "betatools-019330001-beta-action-export-2026-p94",
    "sha256": "746af4b32855813c9d81a3ce5df602367bb593ec5d5c4c4dfc8b0c752a54fa76"
  },
  {
    "documentRowId": "betatools-019330015-beta-action-export-2026-p94",
    "sha256": "a0274e69ec12b4db241de38dbdfcb2297d23aac1fa188f196b53f3d36ecf25b8"
  },
  {
    "documentRowId": "betatools-019360024-beta-action-export-2026-p94",
    "sha256": "a0bdba9fa63fdc769389dce521cbc6901bdd2c8bfc5ead5db29af00ddd95fdd3"
  },
  {
    "documentRowId": "betatools-019360025-beta-action-export-2026-p94",
    "sha256": "02d6d3cd238660d928212d1596b056e5da2aa013cdb220536f3e26cdc219b8d3"
  },
  {
    "documentRowId": "betatools-019420000-beta-action-export-2026-p94",
    "sha256": "7543e9119e27a7a1b5a6a9863a3542136ebd9be40bcf1766dd073f9e9a0e9b10"
  },
  {
    "documentRowId": "betatools-019460001-beta-action-export-2026-p95",
    "sha256": "4996e11d4caf7158d25ed6c26a5b7db3ef61b3ae3450325f3872d39d05015484"
  },
  {
    "documentRowId": "betatools-019460008-beta-action-export-2026-p95",
    "sha256": "00dcb61cddc6c028122f4a17b017c09183565adbef4ce28b52af4867adb39699"
  },
  {
    "documentRowId": "betatools-019490028-beta-action-export-2026-p95",
    "sha256": "95f9a0d88ad6c8cdccad686b5840d8df8e1c108d18391662dbd656ccb128c37c"
  },
  {
    "documentRowId": "betatools-019480001-beta-action-export-2026-p95",
    "sha256": "015adc102f6c6366aa0354eebba48b2cb04e6ee763c2e31c6272bac0d5cad248"
  }
];
const expectedCount = 1000;

export function documentedIdentityKey(brand, identity) {
 const normal = value => value.normalize('NFKC').toUpperCase().replace(/[^A-Z0-9]/g, '');
 const name = normal(brand);
 return `${['HIKOKI', 'HITACHI', 'METABOHPT'].includes(name) ? 'METABOHPT' : name}:${normal(identity)}`;
}

function evidence(source, page) {
 const pdf = source.documentFormat === 'pdf';
 return { id: `october3d-tools-${slug(source.id)}-p${page}`, sourceUrl: source.url + (pdf ? `#page=${page}` : ''), sourceLabel: source.sourceLabel + (pdf ? `, page PDF ${page}` : ''), sourceType: pdf ? 'manual' : 'manufacturer', sourceRole: 'primary', retrievedAt: source.observedAt.slice(0, 10), confidence: 'B', notes: `Réponse primaire SHA-256 ${source.sha256}. Déclaration constructeur, sans essai physique CompatAir.` };
}

function sourceDefinedReference(row) {
 const record = row.manufacturerReferenceConstruction;
 if (!record) return false;
 const patterns = {
  '273**': { page: 18, diameters: [1.2, 1.4, 1.7, 1.8, 1.9, 2.2, 2.5, 3], example: '27314/B', exampleDiameter: 1.4 },
  '270**': { page: 18, diameters: [1.2, 1.4, 1.7, 1.8, 1.9, 2.2, 2.5, 3], example: '27017/B', exampleDiameter: 1.7 },
  '296**': { page: 93, diameters: [1.2, 1.5, 1.7, 1.8, 2, 2.5], example: '29615/B', exampleDiameter: 1.5 },
  '295**': { page: 93, diameters: [1.2, 1.5, 1.7, 1.8, 2, 2.5], example: '29517/B', exampleDiameter: 1.7 },
 };
 const convention = patterns[record.referencePattern];
 const suffix = Number(record.diameterOriginal) * 10;
 const expected = convention ? record.referencePattern.slice(0, 3) + String(Math.round(suffix)).padStart(2, '0') : '';
 if (row.brand !== 'Asturomec' || row.sourceId !== 'asturomec2024' || row.edition !== 'Catalogo 2024 IT' || row.categoryId !== 'pistolet-peinture' || !convention || record.sourceId !== row.sourceId || record.instructionPage !== convention.page || row.page !== convention.page || record.unit !== 'not-stated-in-published-list' || !Number.isFinite(record.diameterOriginal) || !convention.diameters.includes(record.diameterOriginal) || Math.abs(suffix - Math.round(suffix)) > 1e-9 || JSON.stringify(record.publishedDiametersOriginal) !== JSON.stringify(convention.diameters) || record.instructionQuote !== 'aggiungere il Ø alla Ref. (**)' || record.exampleMpn !== convention.example || record.exampleDiameterOriginal !== convention.exampleDiameter || record.examplePage !== 96 || record.examplePackagingSuffix !== '/B' || record.examplePackagingQualification !== 'blister-packaging-only' || record.qualification !== 'source-defined-reference-not-observed-sku' || record.expectedMpn !== expected || row.mpn !== expected || !row.rawLine.includes(record.referencePattern) || !row.rawLine.includes(record.instructionQuote) || !row.rawLine.includes(record.exampleMpn) || !row.rawLine.includes(String(record.diameterOriginal).replace('.', ',')) || row.measurementQualification !== 'insufficient_data' || row.flowOriginal !== null || row.pressureBar !== null || row.pressureScope === 'measurement' || !row.sourceLimitations.some(text => text.includes('SKU nu et disponibilité non observés'))) throw new Error('Unestablished manufacturer reference construction');
 return true;
}

export function buildDocumentedToolsOctober3D(snapshot) {
 if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-tools-2026-10-03-d' || snapshot.reviewedAt !== '2026-10-03' || snapshot.toolCount !== expectedCount || snapshot.tools.length !== expectedCount || snapshot.technicalRows.length !== expectedCount) throw new Error('Unrecognized reviewed batch');
 const sources = new Map(snapshot.sources.map(source => [source.id, source]));
 if (sources.size !== snapshot.sources.length || sources.size !== approvedSources.length) throw new Error('Duplicate or unreviewed source');
 for (const source of sources.values()) {
  const approval = approvedSources.find(item => item.id === source.id);
  if (!approval || digest(source) !== approval.sha256) throw new Error('Modified source provenance');
  for (const url of [source.url, source.resolvedUrl]) { const parsed = new URL(url); if (parsed.protocol !== 'https:' || parsed.username || parsed.password) throw new Error('Unsafe source URL'); }
  if (source.httpStatus !== 200 || !Number.isInteger(source.bytes) || source.bytes <= 0 || !/^[a-f0-9]{64}$/.test(source.sha256) || !Number.isFinite(Date.parse(source.observedAt)) || !source.brands.length) throw new Error('Invalid captured source');
 }
 const mirrors = new Map(snapshot.technicalRows.map(row => [row.documentRowId, row]));
 if (mirrors.size !== expectedCount) throw new Error('Duplicate documentary row');
 const identities = new Set();
 return snapshot.tools.map(row => {
  const source = sources.get(row.sourceId), consumption = sources.get(row.consumptionSourceId);
  const approved = approvedRows.find(item => item.documentRowId === row.documentRowId);
  if (!approved || digest(row) !== approved.sha256 || !mirrors.has(row.documentRowId) || digest(mirrors.get(row.documentRowId)) !== approved.sha256) throw new Error('Unreviewed or modified documentary interpretation');
  const constructedReference = sourceDefinedReference(row);
  if (!source?.brands.includes(row.brand) || !row.model || !row.mpn || !(constructedReference || row.rawLine.includes(row.mpn) || (row.brand === 'Atlas Copco' && row.rawLine.replace(/\s/g, '').includes(row.mpn))) || !Number.isInteger(row.page) || row.page < 1 || row.details.length < 2 || !qualifications.includes(row.measurementQualification) || !scopes.includes(row.pressureScope) || !bases.includes(row.flowBasis)) throw new Error('Invalid identity, scope or regime');
  const identity = documentedIdentityKey(row.brand, row.mpn);
  if (identities.has(identity)) throw new Error('Duplicate physical reference');
  identities.add(identity);
  const qualified = row.measurementQualification !== 'insufficient_data';
  if (row.flowOriginal !== null && (!Object.hasOwn(factors, row.flowUnit) || !consumption?.brands.includes(row.brand) || !Number.isInteger(row.consumptionPage) || row.consumptionPage < 1 || !row.flowQuote)) throw new Error('Unidentified original consumption');
  if (qualified) {
   if (row.pressureScope !== 'measurement' || !Number.isFinite(row.pressureBar) || row.pressureUnit !== 'bar' || row.pressureBar !== row.pressureOriginal || row.documentedConsumptionPoint?.pressure !== row.pressureBar || row.documentedConsumptionPoint?.unit !== 'bar' || row.documentedConsumptionPoint?.usableAtDeclaredService !== true || row.familyConsumptionRecord?.appliesToCurrentMpn === false || row.sourceUnitContradiction === true || row.sourceConsumptionContradiction === true) throw new Error('Unqualified consumption point or identity revision');
   positive(row.pressureBar);
   if (row.operatingPressureRange && !(row.operatingPressureRange.min <= row.pressureBar && row.pressureBar <= row.operatingPressureRange.max)) throw new Error('Point outside documented service range');
   const point = consumption.measurementRecords.find(item => item.documentRowId === row.documentRowId);
   for (const key of ['brand', 'model', 'mpn', 'consumptionPage', 'flowOriginal', 'flowUnit', 'flowBasis', 'flowQuote', 'pressureBar', 'pressureOriginal', 'pressureUnit', 'pressureQuote', 'standardVolumeUnit', 'standardVolumeOriginal', 'measurementQualification', 'measurementProtocolRecords', 'freeAirAtCadenceRecord']) if (!point || JSON.stringify(point[key]) !== JSON.stringify(row[key])) throw new Error('Measurement record differs from reviewed primary evidence');
   if (row.measurementQualification === 'per-action-cadence-required') {
    if (row.flowBasis !== 'per-action') throw new Error('Standard per-action volume not established');
    if (row.freeAirAtCadenceRecord) {
     const cadence = row.freeAirAtCadenceRecord;
     if (row.brand !== 'EVERWIN' || row.consumptionSourceId !== 'everwin-extra-1' || row.consumptionPage !== 10 || row.flowUnit !== 'L/s' || row.standardVolumeUnit !== 'free-air' || row.pressureBar !== 6.3 || cadence.sourceId !== row.consumptionSourceId || cadence.page !== 10 || cadence.actionsPerMinute !== 60 || cadence.actionUnit !== 'nails/min' || cadence.flowUnit !== 'L/s' || cadence.flowOriginal !== row.flowOriginal || !/of free air to operate at the rate of 60 nails per\s+minute, at 6\.3 bar/.test(cadence.quote) || !cadence.quote.includes(row.mpn === 'FSN3490B' ? 'FSN3490(B)' : row.mpn) || !cadence.scalingQuote.includes('30 nails per minute') || !cadence.scalingQuote.includes('50%')) throw new Error('Free-air cadence conversion not established');
    } else {
     if (row.brand !== 'FASCO' || !/^beck-sheet-\d{3}$/.test(row.consumptionSourceId) || row.flowUnit !== 'L/cycle' || row.standardVolumeUnit !== 'SCF' || row.pressureBar !== 6.2 || !/per\s+(?:shot|cycle|driving operation)\b/i.test(row.flowQuote) || !/(?:Performance at|Leistung bei) 90 psi \| 6[.,]2 bar/i.test(row.pressureQuote)) throw new Error('Standard per-action volume not established');
     const standard = positive(Number(row.standardVolumeOriginal));
     if (Math.abs(row.flowOriginal - standard * factors['ft3/cycle']) > .025) throw new Error('Contradictory paired cycle units');
    }
   } else {
    if (row.flowBasis !== 'load') throw new Error('Consumption is not in the documented operating regime');
    if (!['DEPRAG', 'Atlas Copco', 'SATA'].includes(row.brand)) throw new Error('No reviewed loaded consumption convention for this manufacturer');
    if (row.brand === 'DEPRAG') {
     const cell = row.sourceTechnicalCells.find(item => item.label === 'Air consumption (under load) m3/min (cfm)');
     const original = cell?.value.match(/^([0-9]+(?:[.,][0-9]+)?)/)?.[1];
     if (row.consumptionSourceId !== 'deprag-cz-catalog' || row.flowUnit !== 'm3/min' || row.pressureBar !== 6.3 || row.pressureQuote !== 'Specifications at 90 psi (6,3 bar)' || !original || Number(original.replace(',', '.')) !== row.flowOriginal) throw new Error('DEPRAG loaded point not established');
    }
    if (row.brand === 'Atlas Copco' && (row.consumptionSourceId !== 'atlas-uk-current' || row.flowUnit !== 'L/s' || row.pressureBar !== 4 || !row.pressureQuote.includes(`${row.pressureBar} bar`) || !row.measurementProtocolRecords?.some(record => record.quote.includes('relates to free air')) || !row.measurementProtocolRecords.some(record => record.quote.includes('6.3 bar') && record.quote.includes('maximum air consumption')))) throw new Error('Atlas consumption convention not established');
    if (!/under load/i.test(row.flowQuote)) {
     const normalSpraySources = {
      'sata-1000b-actual-manual': { family: /^SATAjet 1000 B /, pressure: 2, flows: { RP: 275, HVLP: 350 }, minimumVolume: true },
      'sata-family-5500-manual-0': { family: /^SATAjet X 5500 /, pressure: 2, flows: { RP: 290, HVLP: 430 }, minimumVolume: true },
      'sata-family-100b-manual-0': { family: /^SATAjet 100 B(?: F)? /, pressure: 2, flows: { P: 245, RP: 290, HVLP: 350 }, minimumVolume: false },
      'sata-family-1000kh-manual-0': row.model.startsWith('SATAjet 1000 K ') ? { family: /^SATAjet 1000 K /, pressure: 2.5, flows: { RP: 410, HVLP: 530 }, minimumVolume: false } : { family: /^SATAjet 1000 H /, pressure: 2, flows: { RP: 275 }, minimumVolume: false },
     };
     const convention = normalSpraySources[row.consumptionSourceId];
     const protocol = row.measurementProtocolRecords;
     const technology = row.model.match(/(?:^|\s)(RP|HVLP|P)(?:\s|$)/)?.[1];
     const pointText = `at ${row.pressureBar.toFixed(1).replace('.', ',')} bar`;
     if (row.brand !== 'SATA' || !convention?.family.test(row.model) || convention.pressure !== row.pressureBar || convention.flows[technology] !== row.flowOriginal || !['pistolet-peinture', 'pistolet-peinture-hvlp'].includes(row.categoryId) || row.flowUnit !== 'Nl/min' || !row.flowQuote.startsWith('Air consumption') || !row.flowQuote.includes(pointText) || !Array.isArray(protocol) || protocol.length < 3 || protocol.some(record => record.sourceId !== row.consumptionSourceId) || (convention.minimumVolume && !protocol.some(record => record.quote.includes('minimum compressed air volume'))) || !protocol.some(record => /fully\s+opened/.test(record.quote)) || !protocol.some(record => /Pull trigger.*right back|Pull the trigger fully|Fully pull trigger for painting/.test(record.quote))) throw new Error('Normal spray operation not tied to consumption');
    }
   }
  } else if (row.pressureBar !== null && row.pressureScope !== 'measurement') throw new Error('Service pressure promoted to measurement');
  const refs = [{ sourceId: row.sourceId, page: row.page }, ...(row.consumptionSourceId ? [{ sourceId: row.consumptionSourceId, page: row.consumptionPage }] : []), ...row.details.filter(item => item.evidenceSourceId).map(item => ({ sourceId: item.evidenceSourceId, page: item.evidencePage })), ...(row.measurementProtocolRecords ?? []).map(item => ({ sourceId: item.sourceId, page: item.page }))];
  const proofs = [], proofKeys = new Set();
  for (const ref of refs) {
   const doc = sources.get(ref.sourceId);
   if (!doc?.brands.includes(row.brand) || !Number.isInteger(ref.page) || ref.page < 1) throw new Error('Unidentified fact provenance');
   const proof = evidence(doc, ref.page);
   if (!proofKeys.has(proof.id)) { proofKeys.add(proof.id); proofs.push(proof); }
  }
  const primary = evidence(source, row.page), demandProof = consumption ? evidence(consumption, row.consumptionPage) : primary;
  const specifications = row.details.map(item => { const proof = evidence(sources.get(item.evidenceSourceId ?? row.sourceId), item.evidencePage ?? row.page); return { label: item.label, value: item.value, evidenceIds: [proof.id] }; });
  if (constructedReference) specifications.push({ label: 'Référence composée selon le catalogue', value: `${row.mpn} ; SKU nu non observé`, evidenceIds: [primary.id, evidence(source, 96).id] });
  if (row.flowOriginal !== null) specifications.push({ label: qualified ? 'Consommation dans son unité originale' : 'Consommation publiée, hors calcul', value: `${row.flowOriginal} ${row.flowUnit}`, evidenceIds: [demandProof.id] });
  specifications.push({ label: 'Portée de la pression dans la source', value: row.pressureQuote, evidenceIds: [row.pressureScope === 'measurement' ? demandProof.id : primary.id] });
  if (row.standardVolumeUnit === 'SCF' && row.familyConsumptionRecord?.appliesToCurrentMpn !== false) specifications.push({ label: 'Volume par tir, unité alternative constructeur', value: `${row.standardVolumeOriginal} SCF/cycle`, evidenceIds: [demandProof.id] });
  const flow = row.flowOriginal === null ? null : rounded(positive(Number(row.flowOriginal)) * factors[row.flowUnit] / (row.freeAirAtCadenceRecord ? positive(row.freeAirAtCadenceRecord.actionsPerMinute) : 1));
  let demand;
  const explanation = row.sourceConsumptionContradiction ? 'Les sources constructeur publient des consommations divergentes pour cette famille ; aucune valeur n’est arbitrée pour calculer un débit.' : row.sourceUnitContradiction ? 'Les unités de consommation publiées sont contradictoires ; aucune valeur n’est arbitrée pour calculer un débit.' : row.familyConsumptionRecord?.appliesToCurrentMpn === false ? 'Le document de consommation vise une autre désignation ou révision ; sa demande n’est pas transférée à cette référence.' : row.documentedConsumptionPoint?.usableAtDeclaredService === false ? 'Le volume par action est publié à une pression hors de la plage de service ; aucune valeur à la pression requise n’est extrapolée.' : 'Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.';
  if (!qualified) {
   const range = row.operatingPressureRange;
   if (range && (range.unit !== 'bar' || !Number.isFinite(range.min) || !Number.isFinite(range.max) || range.min > range.max)) throw new Error('Invalid service range');
   demand = { demandModel: 'variable-volume', workingPressureBar: range ? { min: positive(range.min), max: positive(range.max) } : {}, demandExplanation: explanation };
  } else {
   const pressure = { min: row.pressureBar, typical: row.pressureBar, max: row.pressureBar };
   demand = row.flowBasis === 'per-action' ? { demandModel: 'per-action', workingPressureBar: pressure, airPerActionLiters: flow, actionLabel: 'cycle de pose' } : { demandModel: 'fixed-flow', workingPressureBar: pressure, airflowLpm: { min: flow, typical: flow, max: flow } };
  }
  const id = slug(`${row.categoryId}-${row.brand}-${row.model}${row.mpn !== row.model ? `-${row.mpn}` : ''}`), label = `${row.brand} ${row.model}${row.mpn !== row.model ? constructedReference ? ` (configuration ${row.mpn})` : ` (réf. ${row.mpn})` : ''}`;
  const summary = !qualified ? explanation : row.flowBasis === 'per-action' ? `Volume déclaré : ${format(flow)} L par cycle à ${format(row.pressureBar)} bar. Renseigner la cadence de pose.` : `Consommation de référence en fonctionnement : ${format(flow)} L/min à ${format(row.pressureBar)} bar.`;
  const hose = row.hoseInternalDiameterMm;
  return { id, slug: id, categoryId: row.categoryId, category: row.categoryId, label, brand: row.brand, model: row.model, ...(!constructedReference ? { mpn: row.mpn } : {}), ...demand, ...(hose ? { recommendedHose: { innerDiameterMm: positive(hose) } } : {}), confidence: 'B', image: { src: `/images/products/${id}.svg`, alt: `Repères techniques : ${label}`, sourceUrl: source.url, sourceLabel: 'Carte technique CompatAir, données déclarées par le fabricant' }, variant: { familyId: slug(`${row.brand}-${row.model}`), label: constructedReference ? `Configuration ${row.mpn}, référence composée` : `Référence ${row.mpn}`, distinguishingAttributes: { [constructedReference ? 'sourceDefinedReference' : 'reference']: row.mpn, ...Object.fromEntries(row.details.slice(0, 2).map(item => [item.label, item.value])) } }, editorial: { overview: `${label}. ${summary}`, verifiedFacts: row.details.map(item => `${item.label} : ${item.value}.`), limitations: [!qualified ? explanation : row.flowBasis === 'per-action' ? 'La cadence réelle est indispensable au calcul moyen ; aucun rythme de travail ni besoin instantané de tir n’est supposé.' : 'La demande au point documenté n’est réduite par aucun facteur de marche implicite.', ...row.sourceLimitations, 'Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué.'] }, specifications, evidence: proofs, fieldSources: { ...(!constructedReference ? { mpn: [primary.id] } : { model: [primary.id], variant: [primary.id, evidence(source, 96).id] }), workingPressureBar: [qualified ? demandProof.id : primary.id], ...(hose ? { recommendedHose: row.details.filter(item => /intérieur.*flexible|I.D.*hose/i.test(item.label)).map(item => evidence(sources.get(item.evidenceSourceId), item.evidencePage).id) } : {}), ...(!qualified ? { demandExplanation: proofs.map(item => item.id) } : row.flowBasis === 'per-action' ? { airPerActionLiters: [demandProof.id], actionLabel: [demandProof.id] } : { airflowLpm: [demandProof.id] }) }, notes: [summary] };
 });
}
