import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sas10a152-20",
	"slug": "sioux-sas10a152-20",
	"brand": "Sioux",
	"model": "SAS10A152-20",
	"mpn": "SAS10A152-20",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Sioux SAS10A152-20",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sas10a152-20.webp",
		"alt": "Repères techniques Sioux SAS10A152-20, référence SAS10A152-20",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=66",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SAS10A152-20, référence SAS10A152-20. Le dimensionnement utilise 840 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 15000 tr/min. Masse : 0.98 kg. Longueur : 190 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"Référence fabricant : SAS10A152-20.",
			"Vitesse à vide : 15000 tr/min.",
			"Masse : 0.98 kg.",
			"Longueur : 190 mm."
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
				"sioux-sas10a152-20-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-sas10a152-20-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15000 tr/min",
			"evidenceIds": [
				"sioux-sas10a152-20-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.98 kg",
			"evidenceIds": [
				"sioux-sas10a152-20-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "190 mm",
			"evidenceIds": [
				"sioux-sas10a152-20-20260927"
			]
		},
		{
			"label": "Sortie",
			"value": "1/4\"-20",
			"evidenceIds": [
				"sioux-sas10a152-20-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sas10a152-20-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=66",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 66, réf. SAS10A152-20",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sas10a152-20-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=66",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 66",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-sas10a152-20-20260927"
		],
		"workingPressureBar": [
			"sioux-sas10a152-20-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sas10a152-20-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	}
};

export default product;
