import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-zipp-zat22akh",
	"slug": "taraudeuse-zipp-zat22akh",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "ZIPP ZAT22AKH",
	"brand": "ZIPP",
	"model": "ZAT22AKH",
	"mpn": "ZAT22AKH",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 184,
		"typical": 184,
		"max": 184
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-zipp-zat22akh.webp",
		"alt": "Repères techniques : ZIPP ZAT22AKH",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zat22akh",
		"label": "Référence ZAT22AKH",
		"distinguishingAttributes": {
			"reference": "ZAT22AKH",
			"Vitesse à vide": "150 tr/min",
			"Masse": "1.72 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAT22AKH. Consommation moyenne : 184 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 150 tr/min. Masse : 1.72 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 150 tr/min.",
			"Masse : 1.72 kg.",
			"Référence constructeur : ZAT22AKH."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "150 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Masse",
			"value": "1.72 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAT22AKH",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Specification(air pressure at 90psi, 6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 157",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p157",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=157",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 157",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p157"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p157"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p157"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p157"
		]
	},
	"notes": [
		"Consommation moyenne : 184 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
