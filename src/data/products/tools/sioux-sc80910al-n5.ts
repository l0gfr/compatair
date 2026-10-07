import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sc80910al-n5",
	"slug": "sioux-sc80910al-n5",
	"brand": "Sioux",
	"model": "SC80910AL-N5",
	"mpn": "SC80910AL-N5",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Sioux SC80910AL-N5",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sc80910al-n5.webp",
		"alt": "Repères techniques Sioux SC80910AL-N5, référence SC80910AL-N5",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=75",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SC80910AL-N5, référence SC80910AL-N5. Le dimensionnement utilise 360 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Cadence de frappe : 4300 coups/min. Course : 25 mm. Masse : 2.7 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 6.0 L/s (12.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 360 L/min (L/s × 60).",
			"Référence fabricant : SC80910AL-N5.",
			"Cadence de frappe : 4300 coups/min.",
			"Course : 25 mm.",
			"Masse : 2.7 kg."
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
				"sioux-sc80910al-n5-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.0 L/s (12.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 360 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-sc80910al-n5-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "4300 coups/min",
			"evidenceIds": [
				"sioux-sc80910al-n5-20260927"
			]
		},
		{
			"label": "Course",
			"value": "25 mm",
			"evidenceIds": [
				"sioux-sc80910al-n5-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "2.7 kg",
			"evidenceIds": [
				"sioux-sc80910al-n5-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "425 mm",
			"evidenceIds": [
				"sioux-sc80910al-n5-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sc80910al-n5-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=75",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 75, réf. SC80910AL-N5",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 6.0 L/s (12.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 360 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sc80910al-n5-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=75",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 75",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-sc80910al-n5-20260927"
		],
		"workingPressureBar": [
			"sioux-sc80910al-n5-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sc80910al-n5-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	}
};

export default product;
