import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-1291",
	"slug": "sioux-1291",
	"brand": "Sioux",
	"model": "1291",
	"mpn": "1291",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Sioux 1291",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-1291.webp",
		"alt": "Repères techniques Sioux 1291, référence 1291",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=55",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux 1291. La ligne Sioux publie N/A sous charge et 18 L/s à vide, à 90 psig (6,2 bar). Les 1 080 L/min conservés sont un débit à vide, pas une consommation en charge. Référence fabricant : 1291. Vitesse à vide : 5000 tr/min. Diamètre de meule : 175 mm. Masse : 2.3 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Référence fabricant : 1291.",
			"Vitesse à vide : 5000 tr/min.",
			"Diamètre de meule : 175 mm.",
			"Masse : 2.3 kg.",
			"Consommation à vide publiée : 1080 L/min."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"La ligne Sioux publie N/A sous charge et 18 L/s à vide, à 90 psig (6,2 bar). Les 1 080 L/min conservés sont un débit à vide, pas une consommation en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"evidenceIds": [
				"sioux-1291-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation à vide publiée : 1080 L/min.",
			"evidenceIds": [
				"sioux-1291-reserved-20261031-1",
				"sioux-1291-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5000 tr/min",
			"evidenceIds": [
				"sioux-1291-20260927"
			]
		},
		{
			"label": "Diamètre de meule",
			"value": "175 mm",
			"evidenceIds": [
				"sioux-1291-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "2.3 kg",
			"evidenceIds": [
				"sioux-1291-20260927"
			]
		},
		{
			"label": "Encombrement axial",
			"value": "183 mm",
			"evidenceIds": [
				"sioux-1291-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":1080,\"typical\":1080,\"max\":1080},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"sioux-1291-20260927",
				"sioux-1291-reserved-20261031-1",
				"sioux-1291-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-1291-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=55",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 55, réf. 1291",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60)."
		},
		{
			"id": "sioux-1291-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=55",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 55",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "sioux-1291-reserved-20261031-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=55",
			"sourceLabel": "Sioux 1291 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. La ligne Sioux publie N/A sous charge et 18 L/s à vide, à 90 psig (6,2 bar). Les 1 080 L/min conservés sont un débit à vide, pas une consommation en charge."
		},
		{
			"id": "sioux-1291-reserved-20261031-2",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=55",
			"sourceLabel": "Sioux 1291 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. La ligne Sioux publie N/A sous charge et 18 L/s à vide, à 90 psig (6,2 bar). Les 1 080 L/min conservés sont un débit à vide, pas une consommation en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-1291-20260927"
		],
		"workingPressureBar": [
			"sioux-1291-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-1291-20260927"
		],
		"airflowBasis": [
			"sioux-1291-reserved-20261031-1",
			"sioux-1291-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1080,
		"typical": 1080,
		"max": 1080
	},
	"airflowBasis": "free-speed"
};

export default product;
