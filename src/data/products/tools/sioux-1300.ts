import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-1300",
	"slug": "sioux-1300",
	"brand": "Sioux",
	"model": "1300",
	"mpn": "1300",
	"categoryId": "scie",
	"category": "scie",
	"label": "Sioux 1300",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-1300.webp",
		"alt": "Repères techniques Sioux 1300, référence 1300",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=86",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux 1300, référence 1300. Le dimensionnement utilise 1 020 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Cadence : 1800 courses/min. Course : 15 mm. Masse : 3.5 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60).",
			"Référence fabricant : 1300.",
			"Cadence : 1800 courses/min.",
			"Course : 15 mm.",
			"Masse : 3.5 kg."
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
				"sioux-1300-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-1300-20260927"
			]
		},
		{
			"label": "Cadence",
			"value": "1800 courses/min",
			"evidenceIds": [
				"sioux-1300-20260927"
			]
		},
		{
			"label": "Course",
			"value": "15 mm",
			"evidenceIds": [
				"sioux-1300-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "3.5 kg",
			"evidenceIds": [
				"sioux-1300-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "437 mm",
			"evidenceIds": [
				"sioux-1300-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-1300-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=86",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 86, réf. 1300",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60)."
		},
		{
			"id": "sioux-1300-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=86",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 86",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-1300-20260927"
		],
		"workingPressureBar": [
			"sioux-1300-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-1300-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1020,
		"typical": 1020,
		"max": 1020
	}
};

export default product;
