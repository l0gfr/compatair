import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-ag22d847",
	"slug": "sioux-ag22d847",
	"brand": "Sioux",
	"model": "AG22D847",
	"mpn": "AG22D847",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux AG22D847",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-ag22d847.webp",
		"alt": "Repères techniques Sioux AG22D847, référence AG22D847",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=54",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux AG22D847, référence AG22D847. Le dimensionnement utilise 1 680 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 8400 tr/min. Diamètre de meule : 175 mm. Masse : 3.2 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 28.0 L/s (60.0 scfm) ; 21.0 L/s (45.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1680 L/min (L/s × 60).",
			"Référence fabricant : AG22D847.",
			"Vitesse à vide : 8400 tr/min.",
			"Diamètre de meule : 175 mm.",
			"Masse : 3.2 kg."
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
				"sioux-ag22d847-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 28.0 L/s (60.0 scfm) ; 21.0 L/s (45.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1680 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-ag22d847-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8400 tr/min",
			"evidenceIds": [
				"sioux-ag22d847-20260927"
			]
		},
		{
			"label": "Diamètre de meule",
			"value": "175 mm",
			"evidenceIds": [
				"sioux-ag22d847-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "3.2 kg",
			"evidenceIds": [
				"sioux-ag22d847-20260927"
			]
		},
		{
			"label": "Encombrement axial",
			"value": "315 mm",
			"evidenceIds": [
				"sioux-ag22d847-20260927"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "28 / 21 L/s",
			"evidenceIds": [
				"sioux-ag22d847-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-ag22d847-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=54",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 54, réf. AG22D847",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 28.0 L/s (60.0 scfm) ; 21.0 L/s (45.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1680 L/min (L/s × 60)."
		},
		{
			"id": "sioux-ag22d847-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=54",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 54",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-ag22d847-20260927"
		],
		"workingPressureBar": [
			"sioux-ag22d847-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-ag22d847-20260927"
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
