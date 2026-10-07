import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-rs10ka",
	"slug": "sioux-rs10ka",
	"brand": "Sioux",
	"model": "RS10KA",
	"mpn": "RS10KA",
	"categoryId": "scie",
	"category": "scie",
	"label": "Sioux RS10KA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-rs10ka.webp",
		"alt": "Repères techniques Sioux RS10KA, référence RS10KA",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=86",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux RS10KA, référence RS10KA. Le dimensionnement utilise 420 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Cadence : 9000 courses/min. Course : 16 mm. Masse : 0.70 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 7.0 L/s (15.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 420 L/min (L/s × 60).",
			"Référence fabricant : RS10KA.",
			"Cadence : 9000 courses/min.",
			"Course : 16 mm.",
			"Masse : 0.70 kg."
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
				"sioux-rs10ka-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 7.0 L/s (15.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 420 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-rs10ka-20260927"
			]
		},
		{
			"label": "Cadence",
			"value": "9000 courses/min",
			"evidenceIds": [
				"sioux-rs10ka-20260927"
			]
		},
		{
			"label": "Course",
			"value": "16 mm",
			"evidenceIds": [
				"sioux-rs10ka-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.70 kg",
			"evidenceIds": [
				"sioux-rs10ka-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "235 mm",
			"evidenceIds": [
				"sioux-rs10ka-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-rs10ka-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=86",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 86, réf. RS10KA",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 7.0 L/s (15.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 420 L/min (L/s × 60)."
		},
		{
			"id": "sioux-rs10ka-20260927-workingpressurebar-1",
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
			"sioux-rs10ka-20260927"
		],
		"workingPressureBar": [
			"sioux-rs10ka-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-rs10ka-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	}
};

export default product;
