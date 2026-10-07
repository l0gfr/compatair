import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-ssd10p12s",
	"slug": "sioux-ssd10p12s",
	"brand": "Sioux",
	"model": "SSD10P12S",
	"mpn": "SSD10P12S",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sioux SSD10P12S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-ssd10p12s.webp",
		"alt": "Repères techniques Sioux SSD10P12S, référence SSD10P12S",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=30",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SSD10P12S, référence SSD10P12S. Le dimensionnement utilise 840 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 1200 tr/min. Couple publié : 16.4 Nm. Masse : 1.17 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"Référence fabricant : SSD10P12S.",
			"Vitesse à vide : 1200 tr/min.",
			"Couple publié : 16.4 Nm.",
			"Masse : 1.17 kg."
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
				"sioux-ssd10p12s-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-ssd10p12s-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1200 tr/min",
			"evidenceIds": [
				"sioux-ssd10p12s-20260927"
			]
		},
		{
			"label": "Couple publié",
			"value": "16.4 Nm",
			"evidenceIds": [
				"sioux-ssd10p12s-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.17 kg",
			"evidenceIds": [
				"sioux-ssd10p12s-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "191 mm",
			"evidenceIds": [
				"sioux-ssd10p12s-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-ssd10p12s-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=30",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 30, réf. SSD10P12S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-ssd10p12s-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=30",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 30",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-ssd10p12s-20260927"
		],
		"workingPressureBar": [
			"sioux-ssd10p12s-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-ssd10p12s-20260927"
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
