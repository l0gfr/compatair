import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-srs10p21-10",
	"slug": "sioux-srs10p21-10",
	"brand": "Sioux",
	"model": "SRS10P21-10",
	"mpn": "SRS10P21-10",
	"categoryId": "araseuse-de-rivets",
	"category": "araseuse-de-rivets",
	"label": "Sioux SRS10P21-10",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-srs10p21-10.webp",
		"alt": "Repères techniques Sioux SRS10P21-10, référence SRS10P21-10",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=85",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SRS10P21-10. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide. Référence fabricant : SRS10P21-10. Vitesse à vide : 21000 tr/min. Diamètre de fraise : 16 mm. Masse : 1.2 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Référence fabricant : SRS10P21-10.",
			"Vitesse à vide : 21000 tr/min.",
			"Diamètre de fraise : 16 mm.",
			"Masse : 1.2 kg.",
			"Consommation de régime non précisé publiée : 720 L/min."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"Le diamètre publié concerne la capacité de fraise ; le catalogue précise que les fraises ne sont pas fournies.",
			"La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"evidenceIds": [
				"sioux-srs10p21-10-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 720 L/min.",
			"evidenceIds": [
				"sioux-srs10p21-10-reserved-20261031-1",
				"sioux-srs10p21-10-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "21000 tr/min",
			"evidenceIds": [
				"sioux-srs10p21-10-20260927"
			]
		},
		{
			"label": "Diamètre de fraise",
			"value": "16 mm",
			"evidenceIds": [
				"sioux-srs10p21-10-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"sioux-srs10p21-10-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "205 mm",
			"evidenceIds": [
				"sioux-srs10p21-10-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":720,\"typical\":720,\"max\":720},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"sioux-srs10p21-10-20260927",
				"sioux-srs10p21-10-reserved-20261031-1",
				"sioux-srs10p21-10-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-srs10p21-10-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=85",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 85, réf. SRS10P21-10",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 12.0 L/s (25.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 720 L/min (L/s × 60)."
		},
		{
			"id": "sioux-srs10p21-10-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=85",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 85",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "sioux-srs10p21-10-reserved-20261031-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=85",
			"sourceLabel": "Sioux SRS10P21-10 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
		},
		{
			"id": "sioux-srs10p21-10-reserved-20261031-2",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=85",
			"sourceLabel": "Sioux SRS10P21-10 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. La ligne propre au modèle Sioux donne un débit en L/s à 90 psig (6,2 bar) sous l’intitulé Air Consumption. Le régime n’est pas précisé pour cette ligne ; aucun maximum en charge n’est déduit de la colonne voisine de vitesse à vide."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-srs10p21-10-20260927"
		],
		"workingPressureBar": [
			"sioux-srs10p21-10-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-srs10p21-10-20260927"
		],
		"airflowBasis": [
			"sioux-srs10p21-10-reserved-20261031-1",
			"sioux-srs10p21-10-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 720,
		"typical": 720,
		"max": 720
	},
	"airflowBasis": "unqualified"
};

export default product;
