import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-270a-4",
	"slug": "sioux-270a-4",
	"brand": "Sioux",
	"model": "270A-4",
	"mpn": "270A-4",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Sioux 270A-4",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-270a-4.webp",
		"alt": "Repères techniques Sioux 270A-4, référence 270A-4",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=76",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux 270A-4, référence 270A-4. Le dimensionnement utilise 240 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Cadence de frappe : 1700 coups/min. Course : 100 mm. Masse : 1.6 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 4.0 L/s (8.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 240 L/min (L/s × 60).",
			"Référence fabricant : 270A-4.",
			"Cadence de frappe : 1700 coups/min.",
			"Course : 100 mm.",
			"Masse : 1.6 kg."
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
				"sioux-270a-4-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 4.0 L/s (8.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 240 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-270a-4-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "1700 coups/min",
			"evidenceIds": [
				"sioux-270a-4-20260927"
			]
		},
		{
			"label": "Course",
			"value": "100 mm",
			"evidenceIds": [
				"sioux-270a-4-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.6 kg",
			"evidenceIds": [
				"sioux-270a-4-20260927"
			]
		},
		{
			"label": "Capacité de rivet acier",
			"value": "6.4 mm",
			"evidenceIds": [
				"sioux-270a-4-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-270a-4-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=76",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 76, réf. 270A-4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 4.0 L/s (8.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 240 L/min (L/s × 60)."
		},
		{
			"id": "sioux-270a-4-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=76",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 76",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-270a-4-20260927"
		],
		"workingPressureBar": [
			"sioux-270a-4-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-270a-4-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 240,
		"typical": 240,
		"max": 240
	}
};

export default product;
