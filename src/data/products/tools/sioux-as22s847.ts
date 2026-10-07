import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-as22s847",
	"slug": "sioux-as22s847",
	"brand": "Sioux",
	"model": "AS22S847",
	"mpn": "AS22S847",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Sioux AS22S847",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-as22s847.webp",
		"alt": "Repères techniques Sioux AS22S847, référence AS22S847",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=67",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux AS22S847, référence AS22S847. Le dimensionnement utilise 1 680 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 8400 tr/min. Diamètre du plateau : 175 mm. Masse : 2.8 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 28.0 L/s (60.0 scfm) ; 21.0 L/s (45.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1680 L/min (L/s × 60).",
			"Référence fabricant : AS22S847.",
			"Vitesse à vide : 8400 tr/min.",
			"Diamètre du plateau : 175 mm.",
			"Masse : 2.8 kg."
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
				"sioux-as22s847-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 28.0 L/s (60.0 scfm) ; 21.0 L/s (45.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1680 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-as22s847-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8400 tr/min",
			"evidenceIds": [
				"sioux-as22s847-20260927"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "175 mm",
			"evidenceIds": [
				"sioux-as22s847-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "2.8 kg",
			"evidenceIds": [
				"sioux-as22s847-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "315 mm",
			"evidenceIds": [
				"sioux-as22s847-20260927"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "28 / 21 L/s",
			"evidenceIds": [
				"sioux-as22s847-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-as22s847-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=67",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 67, réf. AS22S847",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 28.0 L/s (60.0 scfm) ; 21.0 L/s (45.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1680 L/min (L/s × 60)."
		},
		{
			"id": "sioux-as22s847-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=67",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 67",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-as22s847-20260927"
		],
		"workingPressureBar": [
			"sioux-as22s847-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-as22s847-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1680,
		"typical": 1680,
		"max": 1680
	}
};

export default product;
