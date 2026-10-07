import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-iw375ap-3f",
	"slug": "sioux-iw375ap-3f",
	"brand": "Sioux",
	"model": "IW375AP-3F",
	"mpn": "IW375AP-3F",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Sioux IW375AP-3F",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-iw375ap-3f.webp",
		"alt": "Repères techniques Sioux IW375AP-3F, référence IW375AP-3F",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=39",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux IW375AP-3F, référence IW375AP-3F. Le dimensionnement utilise 720 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 4000 tr/min. Couple maximal publié : 135 Nm. Masse : 1.1 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 12.0 L/s (25.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 720 L/min (L/s × 60).",
			"Référence fabricant : IW375AP-3F.",
			"Vitesse à vide : 4000 tr/min.",
			"Couple maximal publié : 135 Nm.",
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
				"sioux-iw375ap-3f-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 12.0 L/s (25.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 720 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-iw375ap-3f-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"sioux-iw375ap-3f-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "135 Nm",
			"evidenceIds": [
				"sioux-iw375ap-3f-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.1 kg",
			"evidenceIds": [
				"sioux-iw375ap-3f-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "216 mm",
			"evidenceIds": [
				"sioux-iw375ap-3f-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-iw375ap-3f-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=39",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 39, réf. IW375AP-3F",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 12.0 L/s (25.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 720 L/min (L/s × 60)."
		},
		{
			"id": "sioux-iw375ap-3f-20260927-workingpressurebar-1",
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
			"sioux-iw375ap-3f-20260927"
		],
		"workingPressureBar": [
			"sioux-iw375ap-3f-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-iw375ap-3f-20260927"
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
