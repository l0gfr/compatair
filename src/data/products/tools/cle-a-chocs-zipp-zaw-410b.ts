import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-zipp-zaw-410b",
	"slug": "cle-a-chocs-zipp-zaw-410b",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ZIPP ZAW-410B",
	"brand": "ZIPP",
	"model": "ZAW-410B",
	"mpn": "ZAW-410B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 212,
		"typical": 212,
		"max": 212
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-zipp-zaw-410b.webp",
		"alt": "Repères techniques : ZIPP ZAW-410B",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zaw-410b",
		"label": "Référence ZAW-410B",
		"distinguishingAttributes": {
			"reference": "ZAW-410B",
			"Vitesse à vide": "8300 tr/min",
			"Masse": "0.98 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAW-410B. Consommation moyenne : 212 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 8300 tr/min. Masse : 0.98 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 8300 tr/min.",
			"Masse : 0.98 kg.",
			"Référence constructeur : ZAW-410B."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8300 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p9"
			]
		},
		{
			"label": "Masse",
			"value": "0.98 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p9"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAW-410B",
			"evidenceIds": [
				"october-b-zipp-tools-p9"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p9"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 9",
			"evidenceIds": [
				"october-b-zipp-tools-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p9",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=9",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p9"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p9"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p9"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p9"
		]
	},
	"notes": [
		"Consommation moyenne : 212 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
