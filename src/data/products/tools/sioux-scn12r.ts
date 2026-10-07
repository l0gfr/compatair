import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-scn12r",
	"slug": "sioux-scn12r",
	"brand": "Sioux",
	"model": "SCN12R",
	"mpn": "SCN12R",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sioux SCN12R",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-scn12r.webp",
		"alt": "Repères techniques Sioux SCN12R, référence SCN12R",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=83",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SCN12R, référence SCN12R. Le dimensionnement utilise 840 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 1200 tr/min. Couple maximal : 16.4 Nm. Masse : 1.5 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"Référence fabricant : SCN12R.",
			"Vitesse à vide : 1200 tr/min.",
			"Couple maximal : 16.4 Nm.",
			"Masse : 1.5 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"Le tableau décrit le bloc moteur de pose d’inserts. Le nez et le mandrin adaptés à l’insert doivent être sélectionnés séparément ; la cote A est celle du bloc moteur."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"evidenceIds": [
				"sioux-scn12r-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-scn12r-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1200 tr/min",
			"evidenceIds": [
				"sioux-scn12r-20260927"
			]
		},
		{
			"label": "Couple maximal",
			"value": "16.4 Nm",
			"evidenceIds": [
				"sioux-scn12r-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.5 kg",
			"evidenceIds": [
				"sioux-scn12r-20260927"
			]
		},
		{
			"label": "Cote A du bloc moteur",
			"value": "279 mm",
			"evidenceIds": [
				"sioux-scn12r-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-scn12r-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=83",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 83, réf. SCN12R",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-scn12r-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=83",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 83",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-scn12r-20260927"
		],
		"workingPressureBar": [
			"sioux-scn12r-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-scn12r-20260927"
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
