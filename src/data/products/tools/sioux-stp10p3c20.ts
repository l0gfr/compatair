import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-stp10p3c20",
	"slug": "sioux-stp10p3c20",
	"brand": "Sioux",
	"model": "STP10P3C20",
	"mpn": "STP10P3C20",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "Sioux STP10P3C20",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-stp10p3c20.webp",
		"alt": "Repères techniques Sioux STP10P3C20, référence STP10P3C20",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=84",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux STP10P3C20, référence STP10P3C20. Le dimensionnement utilise 840 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 300 tr/min. Couple maximal : 45 Nm. Masse : 1.3 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"Référence fabricant : STP10P3C20.",
			"Vitesse à vide : 300 tr/min.",
			"Couple maximal : 45 Nm.",
			"Masse : 1.3 kg."
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
				"sioux-stp10p3c20-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-stp10p3c20-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "300 tr/min",
			"evidenceIds": [
				"sioux-stp10p3c20-20260927"
			]
		},
		{
			"label": "Couple maximal",
			"value": "45 Nm",
			"evidenceIds": [
				"sioux-stp10p3c20-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"sioux-stp10p3c20-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "185 mm",
			"evidenceIds": [
				"sioux-stp10p3c20-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-stp10p3c20-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=84",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 84, réf. STP10P3C20",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-stp10p3c20-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=84",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 84",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-stp10p3c20-20260927"
		],
		"workingPressureBar": [
			"sioux-stp10p3c20-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-stp10p3c20-20260927"
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
