import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-3t1630",
	"slug": "sioux-3t1630",
	"brand": "Sioux",
	"model": "3T1630",
	"mpn": "3T1630",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Sioux 3T1630",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-3t1630-20261106.svg",
		"alt": "Repères techniques Sioux 3T1630, référence 3T1630",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=22",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux 3T1630, référence 3T1630. Le dimensionnement utilise 1 020 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 2650 tr/min. Capacité du mandrin : 10 mm. Masse : 3.3 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60).",
			"Référence fabricant : 3T1630.",
			"Vitesse à vide : 2650 tr/min.",
			"Capacité du mandrin : 10 mm.",
			"Masse : 3.3 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"Le régime de consommation publié est non précisé. Cette valeur reste documentaire et le moteur renvoie insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"evidenceIds": [
				"sioux-3t1630-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-3t1630-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2650 tr/min",
			"evidenceIds": [
				"sioux-3t1630-20260927"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "10 mm",
			"evidenceIds": [
				"sioux-3t1630-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "3.3 kg",
			"evidenceIds": [
				"sioux-3t1630-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "889 mm",
			"evidenceIds": [
				"sioux-3t1630-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-3t1630-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=22",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 22, réf. 3T1630",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 17.0 L/s (35.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1020 L/min (L/s × 60)."
		},
		{
			"id": "sioux-3t1630-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=22",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 22",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "review:2026-11-06-followup:sioux-3t1630:1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=22",
			"sourceLabel": "Sioux, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P22 :3T1630mandrin10mm/2650rpm/889mm/3,3kg,contre3T15302150rpm.17Ls sousAirConsumption sans régime; conserver1020Lmin documentaire et noteperformances6,2bar sans conclusion encharge. SHA-256 du document complet : 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-3t1630-20260927"
		],
		"workingPressureBar": [
			"sioux-3t1630-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-3t1630-20260927"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:sioux-3t1630:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1020,
		"typical": 1020,
		"max": 1020
	},
	"airflowBasis": "unqualified"
};

export default product;
