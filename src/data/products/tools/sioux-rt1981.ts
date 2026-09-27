const product = {
	"id": "sioux-rt1981",
	"slug": "sioux-rt1981",
	"brand": "Sioux",
	"model": "RT1981",
	"mpn": "RT1981",
	"categoryId": "detoureuse",
	"category": "detoureuse",
	"label": "Sioux RT1981",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-rt1981.webp",
		"alt": "Repères techniques Sioux RT1981, référence RT1981",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=81",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux RT1981, référence RT1981. Le dimensionnement utilise 1 080 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 20000 tr/min. Pince : 1/2\". Masse : 2.0 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60).",
			"Référence fabricant : RT1981.",
			"Vitesse à vide : 20000 tr/min.",
			"Pince : 1/2\".",
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
				"sioux-rt1981-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-rt1981-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20000 tr/min",
			"evidenceIds": [
				"sioux-rt1981-20260927"
			]
		},
		{
			"label": "Pince",
			"value": "1/2\"",
			"evidenceIds": [
				"sioux-rt1981-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "2.0 kg",
			"evidenceIds": [
				"sioux-rt1981-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "193 mm",
			"evidenceIds": [
				"sioux-rt1981-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-rt1981-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=81",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 81, réf. RT1981",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60)."
		},
		{
			"id": "sioux-rt1981-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=81",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 81",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-rt1981-20260927"
		],
		"workingPressureBar": [
			"sioux-rt1981-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-rt1981-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1080,
		"typical": 1080,
		"max": 1080
	}
};

export default product;
