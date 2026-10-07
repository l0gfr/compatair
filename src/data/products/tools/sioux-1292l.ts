import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-1292l",
	"slug": "sioux-1292l",
	"brand": "Sioux",
	"model": "1292L",
	"mpn": "1292L",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Sioux 1292L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-1292l.webp",
		"alt": "Repères techniques Sioux 1292L, référence 1292L",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=70",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux 1292L, référence 1292L. Le dimensionnement utilise 1 080 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 3000 tr/min. Diamètre du plateau : 200 mm. Masse : 1.9 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60).",
			"Référence fabricant : 1292L.",
			"Vitesse à vide : 3000 tr/min.",
			"Diamètre du plateau : 200 mm.",
			"Masse : 1.9 kg."
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
				"sioux-1292l-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-1292l-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3000 tr/min",
			"evidenceIds": [
				"sioux-1292l-20260927"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "200 mm",
			"evidenceIds": [
				"sioux-1292l-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.9 kg",
			"evidenceIds": [
				"sioux-1292l-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "180 mm",
			"evidenceIds": [
				"sioux-1292l-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-1292l-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=70",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 70, réf. 1292L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60)."
		},
		{
			"id": "sioux-1292l-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=70",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 70",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-1292l-20260927"
		],
		"workingPressureBar": [
			"sioux-1292l-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-1292l-20260927"
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
