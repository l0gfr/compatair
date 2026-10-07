import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-iw750mp-6h",
	"slug": "sioux-iw750mp-6h",
	"brand": "Sioux",
	"model": "IW750MP-6H",
	"mpn": "IW750MP-6H",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sioux IW750MP-6H",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-iw750mp-6h.webp",
		"alt": "Repères techniques Sioux IW750MP-6H, référence IW750MP-6H",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=41",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux IW750MP-6H, référence IW750MP-6H. Le dimensionnement utilise 1 560 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 6700 tr/min. Couple maximal publié : 1420 Nm. Masse : 3.44 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 26.0 L/s (55.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1560 L/min (L/s × 60).",
			"Référence fabricant : IW750MP-6H.",
			"Vitesse à vide : 6700 tr/min.",
			"Couple maximal publié : 1420 Nm.",
			"Masse : 3.44 kg."
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
				"sioux-iw750mp-6h-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 26.0 L/s (55.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1560 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-iw750mp-6h-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6700 tr/min",
			"evidenceIds": [
				"sioux-iw750mp-6h-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "1420 Nm",
			"evidenceIds": [
				"sioux-iw750mp-6h-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "3.44 kg",
			"evidenceIds": [
				"sioux-iw750mp-6h-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "215 mm",
			"evidenceIds": [
				"sioux-iw750mp-6h-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-iw750mp-6h-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=41",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 41, réf. IW750MP-6H",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 26.0 L/s (55.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1560 L/min (L/s × 60)."
		},
		{
			"id": "sioux-iw750mp-6h-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=41",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 41",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-iw750mp-6h-20260927"
		],
		"workingPressureBar": [
			"sioux-iw750mp-6h-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-iw750mp-6h-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1560,
		"typical": 1560,
		"max": 1560
	}
};

export default product;
