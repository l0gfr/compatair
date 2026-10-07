import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-swg05s183",
	"slug": "sioux-swg05s183",
	"brand": "Sioux",
	"model": "SWG05S183",
	"mpn": "SWG05S183",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux SWG05S183",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-swg05s183.webp",
		"alt": "Repères techniques Sioux SWG05S183, référence SWG05S183",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=52",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SWG05S183, référence SWG05S183. Le dimensionnement utilise 660 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 18000 tr/min. Diamètre de meule : 75 mm. Masse : 0.91 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 11.0 L/s (23.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 660 L/min (L/s × 60).",
			"Référence fabricant : SWG05S183.",
			"Vitesse à vide : 18000 tr/min.",
			"Diamètre de meule : 75 mm.",
			"Masse : 0.91 kg."
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
				"sioux-swg05s183-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 11.0 L/s (23.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 660 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-swg05s183-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18000 tr/min",
			"evidenceIds": [
				"sioux-swg05s183-20260927"
			]
		},
		{
			"label": "Diamètre de meule",
			"value": "75 mm",
			"evidenceIds": [
				"sioux-swg05s183-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.91 kg",
			"evidenceIds": [
				"sioux-swg05s183-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "178 mm",
			"evidenceIds": [
				"sioux-swg05s183-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-swg05s183-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=52",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 52, réf. SWG05S183",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 11.0 L/s (23.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 660 L/min (L/s × 60)."
		},
		{
			"id": "sioux-swg05s183-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=52",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 52",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-swg05s183-20260927"
		],
		"workingPressureBar": [
			"sioux-swg05s183-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-swg05s183-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	}
};

export default product;
