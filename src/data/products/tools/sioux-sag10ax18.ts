import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sag10ax18",
	"slug": "sioux-sag10ax18",
	"brand": "Sioux",
	"model": "SAG10AX18",
	"mpn": "SAG10AX18",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux SAG10AX18",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sag10ax18.webp",
		"alt": "Repères techniques Sioux SAG10AX18, référence SAG10AX18",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=51",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SAG10AX18, référence SAG10AX18. Le dimensionnement utilise 852 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 18000 tr/min. Masse : 1.45 kg. Longueur : 286 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.2 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 852 L/min (L/s × 60).",
			"Référence fabricant : SAG10AX18.",
			"Vitesse à vide : 18000 tr/min.",
			"Masse : 1.45 kg.",
			"Longueur : 286 mm."
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
				"sioux-sag10ax18-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.2 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 852 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-sag10ax18-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18000 tr/min",
			"evidenceIds": [
				"sioux-sag10ax18-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.45 kg",
			"evidenceIds": [
				"sioux-sag10ax18-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "286 mm",
			"evidenceIds": [
				"sioux-sag10ax18-20260927"
			]
		},
		{
			"label": "Pince",
			"value": "1/4\"",
			"evidenceIds": [
				"sioux-sag10ax18-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sag10ax18-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=51",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 51, réf. SAG10AX18",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.2 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 852 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sag10ax18-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=51",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 51",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-sag10ax18-20260927"
		],
		"workingPressureBar": [
			"sioux-sag10ax18-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sag10ax18-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 852,
		"typical": 852,
		"max": 852
	}
};

export default product;
