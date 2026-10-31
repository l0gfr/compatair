import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-srw03s-25",
	"slug": "sioux-srw03s-25",
	"brand": "Sioux",
	"model": "SRW03S-25",
	"mpn": "SRW03S-25",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Sioux SRW03S-25",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-srw03s-25.webp",
		"alt": "Repères techniques Sioux SRW03S-25, référence SRW03S-25",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=37",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SRW03S-25. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide. Référence fabricant : SRW03S-25. Vitesse à vide : 235 tr/min. Couple publié : 47 Nm. Carré : 6 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Référence fabricant : SRW03S-25.",
			"Vitesse à vide : 235 tr/min.",
			"Couple publié : 47 Nm.",
			"Carré : 6 mm.",
			"Consommation de régime non précisé publiée : 312 L/min."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"evidenceIds": [
				"sioux-srw03s-25-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 312 L/min.",
			"evidenceIds": [
				"sioux-srw03s-25-reserved-20261031-1",
				"sioux-srw03s-25-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "235 tr/min",
			"evidenceIds": [
				"sioux-srw03s-25-20260927"
			]
		},
		{
			"label": "Couple publié",
			"value": "47 Nm",
			"evidenceIds": [
				"sioux-srw03s-25-20260927"
			]
		},
		{
			"label": "Carré",
			"value": "6 mm",
			"evidenceIds": [
				"sioux-srw03s-25-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.6 kg",
			"evidenceIds": [
				"sioux-srw03s-25-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":312,\"typical\":312,\"max\":312},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"sioux-srw03s-25-20260927",
				"sioux-srw03s-25-reserved-20261031-1",
				"sioux-srw03s-25-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-srw03s-25-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=37",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 37, réf. SRW03S-25",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 5.2 L/s (11.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 312 L/min (L/s × 60)."
		},
		{
			"id": "sioux-srw03s-25-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=37",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 37",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "sioux-srw03s-25-reserved-20261031-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=37",
			"sourceLabel": "Sioux SRW03S-25 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
		},
		{
			"id": "sioux-srw03s-25-reserved-20261031-2",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=37",
			"sourceLabel": "Sioux SRW03S-25 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-srw03s-25-20260927"
		],
		"workingPressureBar": [
			"sioux-srw03s-25-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-srw03s-25-20260927"
		],
		"airflowBasis": [
			"sioux-srw03s-25-reserved-20261031-1",
			"sioux-srw03s-25-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 312,
		"typical": 312,
		"max": 312
	},
	"airflowBasis": "unqualified"
};

export default product;
