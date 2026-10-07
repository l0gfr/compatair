import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sts10a124",
	"slug": "sioux-sts10a124",
	"brand": "Sioux",
	"model": "STS10A124",
	"mpn": "STS10A124",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Sioux STS10A124",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sts10a124.webp",
		"alt": "Repères techniques Sioux STS10A124, référence STS10A124",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=56",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux STS10A124, référence STS10A124. Le dimensionnement utilise 1 020 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 12000 tr/min. Diamètre du disque : 100 mm. Masse : 1.5 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60).",
			"Référence fabricant : STS10A124.",
			"Vitesse à vide : 12000 tr/min.",
			"Diamètre du disque : 100 mm.",
			"Masse : 1.5 kg."
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
				"sioux-sts10a124-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-sts10a124-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"sioux-sts10a124-20260927"
			]
		},
		{
			"label": "Diamètre du disque",
			"value": "100 mm",
			"evidenceIds": [
				"sioux-sts10a124-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.5 kg",
			"evidenceIds": [
				"sioux-sts10a124-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "240 mm",
			"evidenceIds": [
				"sioux-sts10a124-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sts10a124-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=56",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 56, réf. STS10A124",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sts10a124-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=56",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 56",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-sts10a124-20260927"
		],
		"workingPressureBar": [
			"sioux-sts10a124-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sts10a124-20260927"
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
