import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sdg7s18m6f",
	"slug": "sioux-sdg7s18m6f",
	"brand": "Sioux",
	"model": "SDG7S18M6F",
	"mpn": "SDG7S18M6F",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux SDG7S18M6F",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sdg7s18m6f.webp",
		"alt": "Repères techniques Sioux SDG7S18M6F, référence SDG7S18M6F",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=46",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SDG7S18M6F, référence SDG7S18M6F. Le dimensionnement utilise 720 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 18000 tr/min. Masse : 0.6 kg. Longueur : 150 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 12.0 L/s (25.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 720 L/min (L/s × 60).",
			"Référence fabricant : SDG7S18M6F.",
			"Vitesse à vide : 18000 tr/min.",
			"Masse : 0.6 kg.",
			"Longueur : 150 mm."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"evidenceIds": [
				"sioux-sdg7s18m6f-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 12.0 L/s (25.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 720 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-sdg7s18m6f-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18000 tr/min",
			"evidenceIds": [
				"sioux-sdg7s18m6f-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.6 kg",
			"evidenceIds": [
				"sioux-sdg7s18m6f-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "150 mm",
			"evidenceIds": [
				"sioux-sdg7s18m6f-20260927"
			]
		},
		{
			"label": "Pince",
			"value": "6 mm",
			"evidenceIds": [
				"sioux-sdg7s18m6f-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sdg7s18m6f-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=46",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 46, réf. SDG7S18M6F",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 12.0 L/s (25.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 720 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sdg7s18m6f-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=46",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 46",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-sdg7s18m6f-20260927"
		],
		"workingPressureBar": [
			"sioux-sdg7s18m6f-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sdg7s18m6f-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 720,
		"typical": 720,
		"max": 720
	}
};

export default product;
