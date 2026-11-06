import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-stp10s3b12",
	"slug": "sioux-stp10s3b12",
	"brand": "Sioux",
	"model": "STP10S3B12",
	"mpn": "STP10S3B12",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "Sioux STP10S3B12",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-stp10s3b12-20261106.svg",
		"alt": "Repères techniques Sioux STP10S3B12, référence STP10S3B12",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=84",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux STP10S3B12, référence STP10S3B12. Le dimensionnement utilise 840 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 300 tr/min. Couple maximal : 45 Nm. Masse : 1.2 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"Référence fabricant : STP10S3B12.",
			"Vitesse à vide : 300 tr/min.",
			"Couple maximal : 45 Nm.",
			"Masse : 1.2 kg."
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
				"sioux-stp10s3b12-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-stp10s3b12-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "300 tr/min",
			"evidenceIds": [
				"sioux-stp10s3b12-20260927"
			]
		},
		{
			"label": "Couple maximal",
			"value": "45 Nm",
			"evidenceIds": [
				"sioux-stp10s3b12-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"sioux-stp10s3b12-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "240 mm",
			"evidenceIds": [
				"sioux-stp10s3b12-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-stp10s3b12-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=84",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 84, réf. STP10S3B12",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-stp10s3b12-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=84",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 84",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "review:2026-11-06-followup:sioux-stp10s3b12:1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=84",
			"sourceLabel": "Sioux, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P84 :STP10S3B12taraudeuse300rpm/45Nm/1,2kg/240mm,vsS5B12500rpm/37Nm.14Ls sousAirConsumption sans régime;840Lmin restent documentaires, pas encharge par défaut. SHA-256 du document complet : 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-stp10s3b12-20260927"
		],
		"workingPressureBar": [
			"sioux-stp10s3b12-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-stp10s3b12-20260927"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:sioux-stp10s3b12:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"airflowBasis": "unqualified"
};

export default product;
