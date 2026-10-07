import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-id375ap-2q",
	"slug": "sioux-id375ap-2q",
	"brand": "Sioux",
	"model": "ID375AP-2Q",
	"mpn": "ID375AP-2Q",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sioux ID375AP-2Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-id375ap-2q.webp",
		"alt": "Repères techniques Sioux ID375AP-2Q, référence ID375AP-2Q",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=39",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux ID375AP-2Q, référence ID375AP-2Q. Le dimensionnement utilise 720 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 4000 tr/min. Couple maximal publié : 80 Nm. Masse : 1.1 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 12.0 L/s (25.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 720 L/min (L/s × 60).",
			"Référence fabricant : ID375AP-2Q.",
			"Vitesse à vide : 4000 tr/min.",
			"Couple maximal publié : 80 Nm.",
			"Masse : 1.1 kg."
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
				"sioux-id375ap-2q-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 12.0 L/s (25.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 720 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-id375ap-2q-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"sioux-id375ap-2q-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "80 Nm",
			"evidenceIds": [
				"sioux-id375ap-2q-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.1 kg",
			"evidenceIds": [
				"sioux-id375ap-2q-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "216 mm",
			"evidenceIds": [
				"sioux-id375ap-2q-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-id375ap-2q-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=39",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 39, réf. ID375AP-2Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 12.0 L/s (25.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 720 L/min (L/s × 60)."
		},
		{
			"id": "sioux-id375ap-2q-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=39",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 39",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-id375ap-2q-20260927"
		],
		"workingPressureBar": [
			"sioux-id375ap-2q-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-id375ap-2q-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 720,
		"typical": 720,
		"max": 720
	}
};

export default product;
