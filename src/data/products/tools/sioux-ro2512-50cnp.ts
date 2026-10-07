import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-ro2512-50cnp",
	"slug": "sioux-ro2512-50cnp",
	"brand": "Sioux",
	"model": "RO2512-50CNP",
	"mpn": "RO2512-50CNP",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Sioux RO2512-50CNP",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-ro2512-50cnp.webp",
		"alt": "Repères techniques Sioux RO2512-50CNP, référence RO2512-50CNP",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=63",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux RO2512-50CNP, référence RO2512-50CNP. Le dimensionnement utilise 360 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 12000 tr/min. Diamètre du plateau : 125 mm. Orbite : 10 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 6.0 L/s (13.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 360 L/min (L/s × 60).",
			"Référence fabricant : RO2512-50CNP.",
			"Vitesse à vide : 12000 tr/min.",
			"Diamètre du plateau : 125 mm.",
			"Orbite : 10 mm."
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
				"sioux-ro2512-50cnp-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.0 L/s (13.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 360 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-ro2512-50cnp-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"sioux-ro2512-50cnp-20260927"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "125 mm",
			"evidenceIds": [
				"sioux-ro2512-50cnp-20260927"
			]
		},
		{
			"label": "Orbite",
			"value": "10 mm",
			"evidenceIds": [
				"sioux-ro2512-50cnp-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"sioux-ro2512-50cnp-20260927"
			]
		},
		{
			"label": "Fixation du plateau",
			"value": "PSA, adhésive",
			"evidenceIds": [
				"sioux-ro2512-50cnp-20260927"
			]
		},
		{
			"label": "Aspiration",
			"value": "Sans aspiration intégrée",
			"evidenceIds": [
				"sioux-ro2512-50cnp-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-ro2512-50cnp-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=63",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 63, réf. RO2512-50CNP",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 6.0 L/s (13.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 360 L/min (L/s × 60)."
		},
		{
			"id": "sioux-ro2512-50cnp-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=63",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 63",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-ro2512-50cnp-20260927"
		],
		"workingPressureBar": [
			"sioux-ro2512-50cnp-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-ro2512-50cnp-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	}
};

export default product;
