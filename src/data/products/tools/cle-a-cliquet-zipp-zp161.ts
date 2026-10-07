import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-zipp-zp161",
	"slug": "cle-a-cliquet-zipp-zp161",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "ZIPP ZP161",
	"brand": "ZIPP",
	"model": "ZP161",
	"mpn": "ZP161",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 85,
		"typical": 85,
		"max": 85
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-zipp-zp161.webp",
		"alt": "Repères techniques : ZIPP ZP161",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp161",
		"label": "Référence ZP161",
		"distinguishingAttributes": {
			"reference": "ZP161",
			"Vitesse à vide": "175 tr/min",
			"Masse": "1.18 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP161. Consommation moyenne : 85 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 175 tr/min. Masse : 1.18 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 175 tr/min.",
			"Masse : 1.18 kg.",
			"Référence constructeur : ZP161."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "175 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		},
		{
			"label": "Masse",
			"value": "1.18 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP161",
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
		"Consommation moyenne : 85 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
