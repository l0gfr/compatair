import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sxg05s23",
	"slug": "sioux-sxg05s23",
	"brand": "Sioux",
	"model": "SXG05S23",
	"mpn": "SXG05S23",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux SXG05S23",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sxg05s23.webp",
		"alt": "Repères techniques Sioux SXG05S23, référence SXG05S23",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SXG05S23, référence SXG05S23. Le dimensionnement utilise 654 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 23000 tr/min. Masse : 0.95 kg. Longueur : 280 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 10.9 L/s (23.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 654 L/min (L/s × 60).",
			"Référence fabricant : SXG05S23.",
			"Vitesse à vide : 23000 tr/min.",
			"Masse : 0.95 kg.",
			"Longueur : 280 mm."
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
				"sioux-sxg05s23-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 10.9 L/s (23.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 654 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-sxg05s23-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "23000 tr/min",
			"evidenceIds": [
				"sioux-sxg05s23-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.95 kg",
			"evidenceIds": [
				"sioux-sxg05s23-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "280 mm",
			"evidenceIds": [
				"sioux-sxg05s23-20260927"
			]
		},
		{
			"label": "Pince",
			"value": "1/4\"",
			"evidenceIds": [
				"sioux-sxg05s23-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sxg05s23-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=48",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 48, réf. SXG05S23",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 10.9 L/s (23.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 654 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sxg05s23-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=48",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 48",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-sxg05s23-20260927"
		],
		"workingPressureBar": [
			"sioux-sxg05s23-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sxg05s23-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 654,
		"typical": 654,
		"max": 654
	}
};

export default product;
