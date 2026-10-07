import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sdgs1s18g",
	"slug": "sioux-sdgs1s18g",
	"brand": "Sioux",
	"model": "SDGS1S18G",
	"mpn": "SDGS1S18G",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux SDGS1S18G",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sdgs1s18g.webp",
		"alt": "Repères techniques Sioux SDGS1S18G, référence SDGS1S18G",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=47",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SDGS1S18G, référence SDGS1S18G. Le dimensionnement utilise 840 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 18000 tr/min. Masse : 0.8 kg. Longueur : 175 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"Référence fabricant : SDGS1S18G.",
			"Vitesse à vide : 18000 tr/min.",
			"Masse : 0.8 kg.",
			"Longueur : 175 mm."
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
				"sioux-sdgs1s18g-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-sdgs1s18g-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18000 tr/min",
			"evidenceIds": [
				"sioux-sdgs1s18g-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.8 kg",
			"evidenceIds": [
				"sioux-sdgs1s18g-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "175 mm",
			"evidenceIds": [
				"sioux-sdgs1s18g-20260927"
			]
		},
		{
			"label": "Pince",
			"value": "1/4\"",
			"evidenceIds": [
				"sioux-sdgs1s18g-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sdgs1s18g-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=47",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 47, réf. SDGS1S18G",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sdgs1s18g-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=47",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 47",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-sdgs1s18g-20260927"
		],
		"workingPressureBar": [
			"sioux-sdgs1s18g-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sdgs1s18g-20260927"
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
