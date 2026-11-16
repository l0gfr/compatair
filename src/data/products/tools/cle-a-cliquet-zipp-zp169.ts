import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-zipp-zp169",
	"slug": "cle-a-cliquet-zipp-zp169",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "ZIPP ZP169",
	"brand": "ZIPP",
	"model": "ZP169",
	"mpn": "ZP169",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 70,
		"typical": 70,
		"max": 70
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-zipp-zp169-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP ZP169",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zp169",
		"label": "Référence ZP169",
		"distinguishingAttributes": {
			"reference": "ZP169",
			"Vitesse à vide": "260 tr/min",
			"Masse": "0.45 kg"
		}
	},
	"editorial": {
		"overview": "Le ZP169 est le cliquet court à carré 3/8 pouce, 133 mm et 0,45 kg. Le ZP168 remplace le carré par du 1/4 pouce avec les mêmes 260 tr/min et 27 Nm ; le ZP163 à moteur 0,5 hp est une autre configuration. Les 70 L/min sont une moyenne publiée à côté de la pression de service. Le moteur ne les utilise pas comme consommation en charge.",
		"verifiedFacts": [
			"Vitesse à vide : 260 tr/min.",
			"Masse : 0.45 kg.",
			"Référence constructeur : ZP169."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "260 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		},
		{
			"label": "Masse",
			"value": "0.45 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP169",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 19",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p19",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=19",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-cliquet-zipp-zp169:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le ZP169 est le cliquet court à carré 3/8 pouce, 133 mm et 0,45 kg. Le ZP168 remplace le carré par du 1/4 pouce avec les mêmes 260 tr/min et 27 Nm ; le ZP163 à moteur 0,5 hp est une autre configuration. Les 70 L/min sont une moyenne publiée à côté de la pression de service. Le moteur ne les utilise pas comme consommation en charge. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 19."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p19"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p19"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p19"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p19"
		]
	},
	"notes": [
		"Consommation moyenne : 70 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
