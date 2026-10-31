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
		"overview": "Sioux SCN12R. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide. Référence fabricant : SCN12R. Vitesse à vide : 1200 tr/min. Couple maximal : 16.4 Nm. Masse : 1.5 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Référence fabricant : SCN12R.",
			"Vitesse à vide : 1200 tr/min.",
			"Couple maximal : 16.4 Nm.",
			"Masse : 1.5 kg.",
			"Consommation de régime non précisé publiée : 840 L/min."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"Le tableau décrit le bloc moteur de pose d’inserts. Le nez et le mandrin adaptés à l’insert doivent être sélectionnés séparément ; la cote A est celle du bloc moteur.",
			"La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
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
			"value": "Consommation de régime non précisé publiée : 840 L/min.",
			"evidenceIds": [
				"sioux-scn12r-reserved-20261031-1",
				"sioux-scn12r-reserved-20261031-2"
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
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":840,\"typical\":840,\"max\":840},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"sioux-scn12r-20260927",
				"sioux-scn12r-reserved-20261031-1",
				"sioux-scn12r-reserved-20261031-2"
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
		},
		{
			"id": "sioux-scn12r-reserved-20261031-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=83",
			"sourceLabel": "Sioux SCN12R : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
		},
		{
			"id": "sioux-scn12r-reserved-20261031-2",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=83",
			"sourceLabel": "Sioux SCN12R : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
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
		],
		"airflowBasis": [
			"sioux-scn12r-reserved-20261031-1",
			"sioux-scn12r-reserved-20261031-2"
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
