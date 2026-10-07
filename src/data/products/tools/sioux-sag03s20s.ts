import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sag03s20s",
	"slug": "sioux-sag03s20s",
	"brand": "Sioux",
	"model": "SAG03S20S",
	"mpn": "SAG03S20S",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux SAG03S20S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sag03s20s.webp",
		"alt": "Repères techniques Sioux SAG03S20S, référence SAG03S20S",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=50",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SAG03S20S, référence SAG03S20S. Le dimensionnement utilise 312 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 20000 tr/min. Masse : 0.45 kg. Longueur : 143 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 5.2 L/s (11.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 312 L/min (L/s × 60).",
			"Référence fabricant : SAG03S20S.",
			"Vitesse à vide : 20000 tr/min.",
			"Masse : 0.45 kg.",
			"Longueur : 143 mm."
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
				"sioux-sag03s20s-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 5.2 L/s (11.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 312 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-sag03s20s-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20000 tr/min",
			"evidenceIds": [
				"sioux-sag03s20s-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.45 kg",
			"evidenceIds": [
				"sioux-sag03s20s-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "143 mm",
			"evidenceIds": [
				"sioux-sag03s20s-20260927"
			]
		},
		{
			"label": "Pince",
			"value": "1/4\"",
			"evidenceIds": [
				"sioux-sag03s20s-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sag03s20s-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=50",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 50, réf. SAG03S20S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 5.2 L/s (11.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 312 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sag03s20s-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=50",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 50",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-sag03s20s-20260927"
		],
		"workingPressureBar": [
			"sioux-sag03s20s-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sag03s20s-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 312,
		"typical": 312,
		"max": 312
	}
};

export default product;
