import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-zipp-zrh-195p",
	"slug": "marteau-a-river-zipp-zrh-195p",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "ZIPP ZRH-195P",
	"brand": "ZIPP",
	"model": "ZRH-195P",
	"mpn": "ZRH-195P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 220,
		"typical": 220,
		"max": 220
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-zipp-zrh-195p-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP ZRH-195P",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zrh-195p",
		"label": "Référence ZRH-195P",
		"distinguishingAttributes": {
			"reference": "ZRH-195P",
			"Cadence": "1560 coups/min",
			"Masse": "2.1 kg"
		}
	},
	"editorial": {
		"overview": "Le ZRH195P est le marteau à river pistolet à emmanchement 0,498 pouce, course 68,3 mm et 1 560 coups/min. Il admet des rivets acier 4,8 mm et aluminium 6,4 mm ; le ZRH197P augmente la course à 147,6 mm avec une autre capacité. Le 195P pèse 2,1 kg et mesure 230 mm. Les 220 L/min sont moyens ; la consigne 6,2 bar ne les qualifie pas pour un besoin continu.",
		"verifiedFacts": [
			"Cadence : 1560 coups/min.",
			"Masse : 2.1 kg.",
			"Référence constructeur : ZRH-195P."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "1560 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		},
		{
			"label": "Masse",
			"value": "2.1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRH-195P",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 90",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p90",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=90",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 90",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:marteau-a-river-zipp-zrh-195p:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le ZRH195P est le marteau à river pistolet à emmanchement 0,498 pouce, course 68,3 mm et 1 560 coups/min. Il admet des rivets acier 4,8 mm et aluminium 6,4 mm ; le ZRH197P augmente la course à 147,6 mm avec une autre capacité. Le 195P pèse 2,1 kg et mesure 230 mm. Les 220 L/min sont moyens ; la consigne 6,2 bar ne les qualifie pas pour un besoin continu. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 90."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p90"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p90"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p90"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p90"
		]
	},
	"notes": [
		"Consommation moyenne : 220 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
