import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-iw1000mp-8h8",
	"slug": "sioux-iw1000mp-8h8",
	"brand": "Sioux",
	"model": "IW1000MP-8H8",
	"mpn": "IW1000MP-8H8",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sioux IW1000MP-8H8",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-iw1000mp-8h8.webp",
		"alt": "Repères techniques Sioux IW1000MP-8H8, référence IW1000MP-8H8",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux IW1000MP-8H8, référence IW1000MP-8H8. Le dimensionnement utilise 1 440 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 6500 tr/min. Couple maximal publié : 2300 Nm. Masse : 9.4 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 24.0 L/s (52.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1440 L/min (L/s × 60).",
			"Référence fabricant : IW1000MP-8H8.",
			"Vitesse à vide : 6500 tr/min.",
			"Couple maximal publié : 2300 Nm.",
			"Masse : 9.4 kg."
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
				"sioux-iw1000mp-8h8-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 24.0 L/s (52.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1440 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-iw1000mp-8h8-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6500 tr/min",
			"evidenceIds": [
				"sioux-iw1000mp-8h8-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "2300 Nm",
			"evidenceIds": [
				"sioux-iw1000mp-8h8-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "9.4 kg",
			"evidenceIds": [
				"sioux-iw1000mp-8h8-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "556 mm",
			"evidenceIds": [
				"sioux-iw1000mp-8h8-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-iw1000mp-8h8-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=42",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 42, réf. IW1000MP-8H8",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 24.0 L/s (52.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1440 L/min (L/s × 60)."
		},
		{
			"id": "sioux-iw1000mp-8h8-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=42",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 42",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-iw1000mp-8h8-20260927"
		],
		"workingPressureBar": [
			"sioux-iw1000mp-8h8-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-iw1000mp-8h8-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1440,
		"typical": 1440,
		"max": 1440
	}
};

export default product;
