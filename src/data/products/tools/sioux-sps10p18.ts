import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sps10p18",
	"slug": "sioux-sps10p18",
	"brand": "Sioux",
	"model": "SPS10P18",
	"mpn": "SPS10P18",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Sioux SPS10P18",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sps10p18.webp",
		"alt": "Repères techniques Sioux SPS10P18, référence SPS10P18",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=65",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SPS10P18, référence SPS10P18. Le dimensionnement utilise 1 020 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 18000 tr/min. Masse : 0.8 kg. Longueur : 115 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60).",
			"Référence fabricant : SPS10P18.",
			"Vitesse à vide : 18000 tr/min.",
			"Masse : 0.8 kg.",
			"Longueur : 115 mm."
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
				"sioux-sps10p18-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-sps10p18-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18000 tr/min",
			"evidenceIds": [
				"sioux-sps10p18-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.8 kg",
			"evidenceIds": [
				"sioux-sps10p18-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "115 mm",
			"evidenceIds": [
				"sioux-sps10p18-20260927"
			]
		},
		{
			"label": "Sortie",
			"value": "3/8”-24",
			"evidenceIds": [
				"sioux-sps10p18-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sps10p18-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=65",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 65, réf. SPS10P18",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sps10p18-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=65",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 65",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-sps10p18-20260927"
		],
		"workingPressureBar": [
			"sioux-sps10p18-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sps10p18-20260927"
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
