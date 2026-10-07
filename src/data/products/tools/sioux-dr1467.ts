import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-dr1467",
	"slug": "sioux-dr1467",
	"brand": "Sioux",
	"model": "DR1467",
	"mpn": "DR1467",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Sioux DR1467",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-dr1467.webp",
		"alt": "Repères techniques Sioux DR1467, référence DR1467",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=22",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux DR1467, référence DR1467. Le dimensionnement utilise 840 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 375 tr/min. Capacité du mandrin : 13 mm. Masse : 3 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"Référence fabricant : DR1467.",
			"Vitesse à vide : 375 tr/min.",
			"Capacité du mandrin : 13 mm.",
			"Masse : 3 kg."
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
				"sioux-dr1467-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-dr1467-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "375 tr/min",
			"evidenceIds": [
				"sioux-dr1467-20260927"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "13 mm",
			"evidenceIds": [
				"sioux-dr1467-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "3 kg",
			"evidenceIds": [
				"sioux-dr1467-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "340 mm",
			"evidenceIds": [
				"sioux-dr1467-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-dr1467-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=22",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 22, réf. DR1467",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-dr1467-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=22",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 22",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-dr1467-20260927"
		],
		"workingPressureBar": [
			"sioux-dr1467-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-dr1467-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	}
};

export default product;
