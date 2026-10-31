import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-go459-60snh",
	"slug": "sioux-go459-60snh",
	"brand": "Sioux",
	"model": "GO459-60SNH",
	"mpn": "GO459-60SNH",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Sioux GO459-60SNH",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-go459-60snh.webp",
		"alt": "Repères techniques Sioux GO459-60SNH, référence GO459-60SNH",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux GO459-60SNH. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide. Référence fabricant : GO459-60SNH. Vitesse à vide : 900 tr/min. Diamètre du plateau : 150 mm. Masse : 2.0 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Référence fabricant : GO459-60SNH.",
			"Vitesse à vide : 900 tr/min.",
			"Diamètre du plateau : 150 mm.",
			"Masse : 2.0 kg.",
			"Consommation de régime non précisé publiée : 420 L/min."
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
				"sioux-go459-60snh-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 420 L/min.",
			"evidenceIds": [
				"sioux-go459-60snh-reserved-20261031-1",
				"sioux-go459-60snh-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "900 tr/min",
			"evidenceIds": [
				"sioux-go459-60snh-20260927"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "150 mm",
			"evidenceIds": [
				"sioux-go459-60snh-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "2.0 kg",
			"evidenceIds": [
				"sioux-go459-60snh-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "127 mm",
			"evidenceIds": [
				"sioux-go459-60snh-20260927"
			]
		},
		{
			"label": "Fixation du plateau",
			"value": "H & L, autoagrippante",
			"evidenceIds": [
				"sioux-go459-60snh-20260927"
			]
		},
		{
			"label": "Aspiration",
			"value": "Sans aspiration intégrée",
			"evidenceIds": [
				"sioux-go459-60snh-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":420,\"typical\":420,\"max\":420},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"sioux-go459-60snh-20260927",
				"sioux-go459-60snh-reserved-20261031-1",
				"sioux-go459-60snh-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-go459-60snh-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 64, réf. GO459-60SNH",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 7.0 L/s (15.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 420 L/min (L/s × 60)."
		},
		{
			"id": "sioux-go459-60snh-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 64",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "sioux-go459-60snh-reserved-20261031-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
			"sourceLabel": "Sioux GO459-60SNH : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
		},
		{
			"id": "sioux-go459-60snh-reserved-20261031-2",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
			"sourceLabel": "Sioux GO459-60SNH : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-go459-60snh-20260927"
		],
		"workingPressureBar": [
			"sioux-go459-60snh-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-go459-60snh-20260927"
		],
		"airflowBasis": [
			"sioux-go459-60snh-reserved-20261031-1",
			"sioux-go459-60snh-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	},
	"airflowBasis": "unqualified"
};

export default product;
