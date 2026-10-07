import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-go459-80srp",
	"slug": "sioux-go459-80srp",
	"brand": "Sioux",
	"model": "GO459-80SRP",
	"mpn": "GO459-80SRP",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Sioux GO459-80SRP",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-go459-80srp.webp",
		"alt": "Repères techniques Sioux GO459-80SRP, référence GO459-80SRP",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux GO459-80SRP, référence GO459-80SRP. Le dimensionnement utilise 420 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 900 tr/min. Diamètre du plateau : 200 mm. Masse : 2.0 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 7.0 L/s (15.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 420 L/min (L/s × 60).",
			"Référence fabricant : GO459-80SRP.",
			"Vitesse à vide : 900 tr/min.",
			"Diamètre du plateau : 200 mm.",
			"Masse : 2.0 kg."
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
				"sioux-go459-80srp-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 7.0 L/s (15.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 420 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-go459-80srp-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "900 tr/min",
			"evidenceIds": [
				"sioux-go459-80srp-20260927"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "200 mm",
			"evidenceIds": [
				"sioux-go459-80srp-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "2.0 kg",
			"evidenceIds": [
				"sioux-go459-80srp-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "127 mm",
			"evidenceIds": [
				"sioux-go459-80srp-20260927"
			]
		},
		{
			"label": "Fixation du plateau",
			"value": "PSA, adhésive",
			"evidenceIds": [
				"sioux-go459-80srp-20260927"
			]
		},
		{
			"label": "Aspiration",
			"value": "Aspiration distante",
			"evidenceIds": [
				"sioux-go459-80srp-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-go459-80srp-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 64, réf. GO459-80SRP",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 7.0 L/s (15.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 420 L/min (L/s × 60)."
		},
		{
			"id": "sioux-go459-80srp-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 64",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-go459-80srp-20260927"
		],
		"workingPressureBar": [
			"sioux-go459-80srp-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-go459-80srp-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	}
};

export default product;
