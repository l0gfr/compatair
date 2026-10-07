import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-ssd10s20ac",
	"slug": "sioux-ssd10s20ac",
	"brand": "Sioux",
	"model": "SSD10S20AC",
	"mpn": "SSD10S20AC",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sioux SSD10S20AC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-ssd10s20ac.webp",
		"alt": "Repères techniques Sioux SSD10S20AC, référence SSD10S20AC",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=33",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SSD10S20AC, référence SSD10S20AC. Le dimensionnement utilise 840 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 2000 tr/min. Couple publié : 9.0 Nm. Masse : 1.15 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"Référence fabricant : SSD10S20AC.",
			"Vitesse à vide : 2000 tr/min.",
			"Couple publié : 9.0 Nm.",
			"Masse : 1.15 kg."
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
				"sioux-ssd10s20ac-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-ssd10s20ac-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2000 tr/min",
			"evidenceIds": [
				"sioux-ssd10s20ac-20260927"
			]
		},
		{
			"label": "Couple publié",
			"value": "9.0 Nm",
			"evidenceIds": [
				"sioux-ssd10s20ac-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.15 kg",
			"evidenceIds": [
				"sioux-ssd10s20ac-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "285 mm",
			"evidenceIds": [
				"sioux-ssd10s20ac-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-ssd10s20ac-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=33",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 33, réf. SSD10S20AC",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-ssd10s20ac-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=33",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 33",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-ssd10s20ac-20260927"
		],
		"workingPressureBar": [
			"sioux-ssd10s20ac-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-ssd10s20ac-20260927"
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
