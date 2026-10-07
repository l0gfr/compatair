import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-zipp-zp354-5",
	"slug": "ponceuse-orbitale-zipp-zp354-5",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "ZIPP ZP354-5",
	"brand": "ZIPP",
	"model": "ZP354-5",
	"mpn": "ZP354-5",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 70.8,
		"typical": 70.8,
		"max": 70.8
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-zipp-zp354-5.webp",
		"alt": "Repères techniques : ZIPP ZP354-5",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp354-5",
		"label": "Référence ZP354-5",
		"distinguishingAttributes": {
			"reference": "ZP354-5",
			"Vitesse à vide": "12000 tr/min",
			"Masse": "0.8 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP354-5. Consommation moyenne : 70,8 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 12000 tr/min. Masse : 0.8 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 12000 tr/min.",
			"Masse : 0.8 kg.",
			"Référence constructeur : ZP354-5."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p138"
			]
		},
		{
			"label": "Masse",
			"value": "0.8 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p138"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP354-5",
			"evidenceIds": [
				"october-b-zipp-tools-p138"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p138"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 138",
			"evidenceIds": [
				"october-b-zipp-tools-p138"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p138",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=138",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 138",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p138"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p138"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p138"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p138"
		]
	},
	"notes": [
		"Consommation moyenne : 70,8 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
