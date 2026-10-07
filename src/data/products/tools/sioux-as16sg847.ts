import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-as16sg847",
	"slug": "sioux-as16sg847",
	"brand": "Sioux",
	"model": "AS16SG847",
	"mpn": "AS16SG847",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Sioux AS16SG847",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-as16sg847.webp",
		"alt": "Repères techniques Sioux AS16SG847, référence AS16SG847",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=67",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux AS16SG847, référence AS16SG847. Le dimensionnement utilise 1 140 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 8400 tr/min. Diamètre du plateau : 175 mm. Masse : 2.0 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 19.0 L/s (41.0 scfm) ; 16.0 L/s (33.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1140 L/min (L/s × 60).",
			"Référence fabricant : AS16SG847.",
			"Vitesse à vide : 8400 tr/min.",
			"Diamètre du plateau : 175 mm.",
			"Masse : 2.0 kg."
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
				"sioux-as16sg847-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 19.0 L/s (41.0 scfm) ; 16.0 L/s (33.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1140 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-as16sg847-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8400 tr/min",
			"evidenceIds": [
				"sioux-as16sg847-20260927"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "175 mm",
			"evidenceIds": [
				"sioux-as16sg847-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "2.0 kg",
			"evidenceIds": [
				"sioux-as16sg847-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "280 mm",
			"evidenceIds": [
				"sioux-as16sg847-20260927"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "19 / 16 L/s",
			"evidenceIds": [
				"sioux-as16sg847-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-as16sg847-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=67",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 67, réf. AS16SG847",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 19.0 L/s (41.0 scfm) ; 16.0 L/s (33.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1140 L/min (L/s × 60)."
		},
		{
			"id": "sioux-as16sg847-20260927-workingpressurebar-1",
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
			"sioux-as16sg847-20260927"
		],
		"workingPressureBar": [
			"sioux-as16sg847-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-as16sg847-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1140,
		"typical": 1140,
		"max": 1140
	}
};

export default product;
