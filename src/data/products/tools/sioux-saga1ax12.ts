import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-saga1ax12",
	"slug": "sioux-saga1ax12",
	"brand": "Sioux",
	"model": "SAGA1AX12",
	"mpn": "SAGA1AX12",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux SAGA1AX12",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-saga1ax12.webp",
		"alt": "Repères techniques Sioux SAGA1AX12, référence SAGA1AX12",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=51",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SAGA1AX12, référence SAGA1AX12. Le dimensionnement utilise 852 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 12000 tr/min. Masse : 1.5 kg. Longueur : 267 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.2 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 852 L/min (L/s × 60).",
			"Référence fabricant : SAGA1AX12.",
			"Vitesse à vide : 12000 tr/min.",
			"Masse : 1.5 kg.",
			"Longueur : 267 mm."
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
				"sioux-saga1ax12-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.2 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 852 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-saga1ax12-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"sioux-saga1ax12-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.5 kg",
			"evidenceIds": [
				"sioux-saga1ax12-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "267 mm",
			"evidenceIds": [
				"sioux-saga1ax12-20260927"
			]
		},
		{
			"label": "Pince",
			"value": "1/4\"",
			"evidenceIds": [
				"sioux-saga1ax12-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-saga1ax12-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=51",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 51, réf. SAGA1AX12",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.2 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 852 L/min (L/s × 60)."
		},
		{
			"id": "sioux-saga1ax12-20260927-workingpressurebar-1",
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
			"sioux-saga1ax12-20260927"
		],
		"workingPressureBar": [
			"sioux-saga1ax12-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-saga1ax12-20260927"
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
