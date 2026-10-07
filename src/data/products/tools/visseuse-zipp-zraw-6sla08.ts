import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-zipp-zraw-6sla08",
	"slug": "visseuse-zipp-zraw-6sla08",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "ZIPP ZRAW-6SLA08",
	"brand": "ZIPP",
	"model": "ZRAW-6SLA08",
	"mpn": "ZRAW-6SLA08",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 198,
		"typical": 198,
		"max": 198
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-zipp-zraw-6sla08.webp",
		"alt": "Repères techniques : ZIPP ZRAW-6SLA08",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zraw-6sla08",
		"label": "Référence ZRAW-6SLA08",
		"distinguishingAttributes": {
			"reference": "ZRAW-6SLA08",
			"Vitesse à vide": "800 tr/min",
			"Masse": "1.22 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZRAW-6SLA08. Consommation moyenne : 198 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 800 tr/min. Masse : 1.22 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 800 tr/min.",
			"Masse : 1.22 kg.",
			"Référence constructeur : ZRAW-6SLA08."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "800 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p31"
			]
		},
		{
			"label": "Masse",
			"value": "1.22 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p31"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRAW-6SLA08",
			"evidenceIds": [
				"october-b-zipp-tools-p31"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p31"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 31",
			"evidenceIds": [
				"october-b-zipp-tools-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p31",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=31",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p31"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p31"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p31"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p31"
		]
	},
	"notes": [
		"Consommation moyenne : 198 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
