import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-iw38tbp-3p",
	"slug": "sioux-iw38tbp-3p",
	"brand": "Sioux",
	"model": "IW38TBP-3P",
	"mpn": "IW38TBP-3P",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sioux IW38TBP-3P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-iw38tbp-3p.webp",
		"alt": "Repères techniques Sioux IW38TBP-3P, référence IW38TBP-3P",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=39",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux IW38TBP-3P, référence IW38TBP-3P. Le dimensionnement utilise 540 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 8000 tr/min. Couple maximal publié : 95 Nm. Masse : 1.0 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 9.0 L/s (20.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 540 L/min (L/s × 60).",
			"Référence fabricant : IW38TBP-3P.",
			"Vitesse à vide : 8000 tr/min.",
			"Couple maximal publié : 95 Nm.",
			"Masse : 1.0 kg."
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
				"sioux-iw38tbp-3p-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 9.0 L/s (20.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 540 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-iw38tbp-3p-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8000 tr/min",
			"evidenceIds": [
				"sioux-iw38tbp-3p-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "95 Nm",
			"evidenceIds": [
				"sioux-iw38tbp-3p-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.0 kg",
			"evidenceIds": [
				"sioux-iw38tbp-3p-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "160 mm",
			"evidenceIds": [
				"sioux-iw38tbp-3p-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-iw38tbp-3p-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=39",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 39, réf. IW38TBP-3P",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 9.0 L/s (20.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 540 L/min (L/s × 60)."
		},
		{
			"id": "sioux-iw38tbp-3p-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=39",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 39",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-iw38tbp-3p-20260927"
		],
		"workingPressureBar": [
			"sioux-iw38tbp-3p-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-iw38tbp-3p-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	}
};

export default product;
