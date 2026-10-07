import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-1982a",
	"slug": "sioux-1982a",
	"brand": "Sioux",
	"model": "1982A",
	"mpn": "1982A",
	"categoryId": "detoureuse",
	"category": "detoureuse",
	"label": "Sioux 1982A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-1982a.webp",
		"alt": "Repères techniques Sioux 1982A, référence 1982A",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=81",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux 1982A, référence 1982A. Le dimensionnement utilise 1 080 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 20000 tr/min. Pince : 1/4\". Masse : 3.4 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60).",
			"Référence fabricant : 1982A.",
			"Vitesse à vide : 20000 tr/min.",
			"Pince : 1/4\".",
			"Masse : 3.4 kg."
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
				"sioux-1982a-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-1982a-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20000 tr/min",
			"evidenceIds": [
				"sioux-1982a-20260927"
			]
		},
		{
			"label": "Pince",
			"value": "1/4\"",
			"evidenceIds": [
				"sioux-1982a-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "3.4 kg",
			"evidenceIds": [
				"sioux-1982a-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "211 mm",
			"evidenceIds": [
				"sioux-1982a-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-1982a-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=81",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 81, réf. 1982A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60)."
		},
		{
			"id": "sioux-1982a-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=81",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 81",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-1982a-20260927"
		],
		"workingPressureBar": [
			"sioux-1982a-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-1982a-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1080,
		"typical": 1080,
		"max": 1080
	}
};

export default product;
