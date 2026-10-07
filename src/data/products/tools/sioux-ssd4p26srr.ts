import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-ssd4p26srr",
	"slug": "sioux-ssd4p26srr",
	"brand": "Sioux",
	"model": "SSD4P26SRR",
	"mpn": "SSD4P26SRR",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sioux SSD4P26SRR",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-ssd4p26srr.webp",
		"alt": "Repères techniques Sioux SSD4P26SRR, référence SSD4P26SRR",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=30",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SSD4P26SRR, référence SSD4P26SRR. Le dimensionnement utilise 600 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 2600 tr/min. Couple publié : 2.3 Nm. Masse : 0.6 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 10.0 L/s (20.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 600 L/min (L/s × 60).",
			"Référence fabricant : SSD4P26SRR.",
			"Vitesse à vide : 2600 tr/min.",
			"Couple publié : 2.3 Nm.",
			"Masse : 0.6 kg."
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
				"sioux-ssd4p26srr-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 10.0 L/s (20.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 600 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-ssd4p26srr-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2600 tr/min",
			"evidenceIds": [
				"sioux-ssd4p26srr-20260927"
			]
		},
		{
			"label": "Couple publié",
			"value": "2.3 Nm",
			"evidenceIds": [
				"sioux-ssd4p26srr-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.6 kg",
			"evidenceIds": [
				"sioux-ssd4p26srr-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "127 mm",
			"evidenceIds": [
				"sioux-ssd4p26srr-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-ssd4p26srr-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=30",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 30, réf. SSD4P26SRR",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 10.0 L/s (20.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 600 L/min (L/s × 60)."
		},
		{
			"id": "sioux-ssd4p26srr-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=30",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 30",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-ssd4p26srr-20260927"
		],
		"workingPressureBar": [
			"sioux-ssd4p26srr-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-ssd4p26srr-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	}
};

export default product;
