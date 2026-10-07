import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-stxg10s23m6",
	"slug": "sioux-stxg10s23m6",
	"brand": "Sioux",
	"model": "STXG10S23M6",
	"mpn": "STXG10S23M6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux STXG10S23M6",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-stxg10s23m6.webp",
		"alt": "Repères techniques Sioux STXG10S23M6, référence STXG10S23M6",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux STXG10S23M6, référence STXG10S23M6. Le dimensionnement utilise 840 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 23000 tr/min. Masse : 1.0 kg. Longueur : 308 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"Référence fabricant : STXG10S23M6.",
			"Vitesse à vide : 23000 tr/min.",
			"Masse : 1.0 kg.",
			"Longueur : 308 mm."
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
				"sioux-stxg10s23m6-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-stxg10s23m6-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "23000 tr/min",
			"evidenceIds": [
				"sioux-stxg10s23m6-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.0 kg",
			"evidenceIds": [
				"sioux-stxg10s23m6-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "308 mm",
			"evidenceIds": [
				"sioux-stxg10s23m6-20260927"
			]
		},
		{
			"label": "Pince",
			"value": "6 mm",
			"evidenceIds": [
				"sioux-stxg10s23m6-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-stxg10s23m6-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=48",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 48, réf. STXG10S23M6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-stxg10s23m6-20260927-workingpressurebar-1",
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
			"sioux-stxg10s23m6-20260927"
		],
		"workingPressureBar": [
			"sioux-stxg10s23m6-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-stxg10s23m6-20260927"
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
