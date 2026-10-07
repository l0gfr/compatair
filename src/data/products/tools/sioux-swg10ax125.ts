import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-swg10ax125",
	"slug": "sioux-swg10ax125",
	"brand": "Sioux",
	"model": "SWG10AX125",
	"mpn": "SWG10AX125",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux SWG10AX125",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-swg10ax125.webp",
		"alt": "Repères techniques Sioux SWG10AX125, référence SWG10AX125",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=53",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SWG10AX125, référence SWG10AX125. Le dimensionnement utilise 1 020 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 12000 tr/min. Diamètre de meule : 125 mm. Masse : 1.72 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60).",
			"Référence fabricant : SWG10AX125.",
			"Vitesse à vide : 12000 tr/min.",
			"Diamètre de meule : 125 mm.",
			"Masse : 1.72 kg."
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
				"sioux-swg10ax125-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-swg10ax125-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"sioux-swg10ax125-20260927"
			]
		},
		{
			"label": "Diamètre de meule",
			"value": "125 mm",
			"evidenceIds": [
				"sioux-swg10ax125-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.72 kg",
			"evidenceIds": [
				"sioux-swg10ax125-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "285 mm",
			"evidenceIds": [
				"sioux-swg10ax125-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-swg10ax125-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=53",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 53, réf. SWG10AX125",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60)."
		},
		{
			"id": "sioux-swg10ax125-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=53",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 53",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-swg10ax125-20260927"
		],
		"workingPressureBar": [
			"sioux-swg10ax125-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-swg10ax125-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1020,
		"typical": 1020,
		"max": 1020
	}
};

export default product;
