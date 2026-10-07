import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-zipp-zp228",
	"slug": "cisaille-zipp-zp228",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "ZIPP ZP228",
	"brand": "ZIPP",
	"model": "ZP228",
	"mpn": "ZP228",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 104.772,
		"typical": 104.772,
		"max": 104.772
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-zipp-zp228.webp",
		"alt": "Repères techniques : ZIPP ZP228",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zp228",
		"label": "Référence ZP228",
		"distinguishingAttributes": {
			"reference": "ZP228",
			"Vitesse à vide": "2600 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZP228. Consommation moyenne : 104,772 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge. Vitesse à vide : 2600 tr/min. Masse : 1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 2600 tr/min.",
			"Masse : 1 kg.",
			"Référence constructeur : ZP228."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "2600 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p104"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p104"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP228",
			"evidenceIds": [
				"october-b-zipp-tools-p104"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p104"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 104",
			"evidenceIds": [
				"october-b-zipp-tools-p104"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p104",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=104",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 104",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p104"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p104"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p104"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p104"
		]
	},
	"notes": [
		"Consommation moyenne : 104,772 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
