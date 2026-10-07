import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-ssh10p18",
	"slug": "sioux-ssh10p18",
	"brand": "Sioux",
	"model": "SSH10P18",
	"mpn": "SSH10P18",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Sioux SSH10P18",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-ssh10p18.webp",
		"alt": "Repères techniques Sioux SSH10P18, référence SSH10P18",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=87",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SSH10P18, référence SSH10P18. Le dimensionnement utilise 840 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Puissance : 1 hp. Masse : 1.3 kg. Longueur : 255 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"Référence fabricant : SSH10P18.",
			"Puissance : 1 hp.",
			"Masse : 1.3 kg.",
			"Longueur : 255 mm."
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
				"sioux-ssh10p18-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-ssh10p18-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "1 hp",
			"evidenceIds": [
				"sioux-ssh10p18-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"sioux-ssh10p18-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "255 mm",
			"evidenceIds": [
				"sioux-ssh10p18-20260927"
			]
		},
		{
			"label": "Distance axe-bord",
			"value": "22 mm",
			"evidenceIds": [
				"sioux-ssh10p18-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-ssh10p18-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=87",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 87, réf. SSH10P18",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-ssh10p18-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=87",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 87",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-ssh10p18-20260927"
		],
		"workingPressureBar": [
			"sioux-ssh10p18-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-ssh10p18-20260927"
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
