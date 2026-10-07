import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-zipp-zrh-131s",
	"slug": "marteau-a-river-zipp-zrh-131s",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "ZIPP ZRH-131S",
	"brand": "ZIPP",
	"model": "ZRH-131S",
	"mpn": "ZRH-131S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 180,
		"typical": 180,
		"max": 180
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-zipp-zrh-131s.webp",
		"alt": "Repères techniques : ZIPP ZRH-131S",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zrh-131s",
		"label": "Référence ZRH-131S",
		"distinguishingAttributes": {
			"reference": "ZRH-131S",
			"Cadence": "2850 coups/min",
			"Masse": "0.86 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRH-131S. Consommation moyenne : 180 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Cadence : 2850 coups/min. Masse : 0.86 kg.",
		"verifiedFacts": [
			"Cadence : 2850 coups/min.",
			"Masse : 0.86 kg.",
			"Référence constructeur : ZRH-131S."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "2850 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		},
		{
			"label": "Masse",
			"value": "0.86 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRH-131S",
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
		"Consommation moyenne : 180 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
