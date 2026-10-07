import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-iw380mp-4r",
	"slug": "sioux-iw380mp-4r",
	"brand": "Sioux",
	"model": "IW380MP-4R",
	"mpn": "IW380MP-4R",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sioux IW380MP-4R",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-iw380mp-4r.webp",
		"alt": "Repères techniques Sioux IW380MP-4R, référence IW380MP-4R",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux IW380MP-4R, référence IW380MP-4R. Le dimensionnement utilise 600 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 7500 tr/min. Couple maximal publié : 575 Nm. Masse : 1.4 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 10.0 L/s (22.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 600 L/min (L/s × 60).",
			"Référence fabricant : IW380MP-4R.",
			"Vitesse à vide : 7500 tr/min.",
			"Couple maximal publié : 575 Nm.",
			"Masse : 1.4 kg."
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
				"sioux-iw380mp-4r-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 10.0 L/s (22.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 600 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-iw380mp-4r-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7500 tr/min",
			"evidenceIds": [
				"sioux-iw380mp-4r-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "575 Nm",
			"evidenceIds": [
				"sioux-iw380mp-4r-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.4 kg",
			"evidenceIds": [
				"sioux-iw380mp-4r-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "125 mm",
			"evidenceIds": [
				"sioux-iw380mp-4r-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-iw380mp-4r-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=40",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 40, réf. IW380MP-4R",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 10.0 L/s (22.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 600 L/min (L/s × 60)."
		},
		{
			"id": "sioux-iw380mp-4r-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=40",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 40",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-iw380mp-4r-20260927"
		],
		"workingPressureBar": [
			"sioux-iw380mp-4r-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-iw380mp-4r-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	}
};

export default product;
