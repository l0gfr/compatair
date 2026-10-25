import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-06sc",
	"slug": "red-rooster-rr-06sc",
	"brand": "Red Rooster",
	"model": "RR-06SC",
	"mpn": "RR-06SC",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Red Rooster RR-06SC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-06sc.webp",
		"alt": "Repères techniques Red Rooster RR-06SC, référence RR-06SC",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RR-06SC : visseuse droite à mécanisme à friction réglable, 5 à 16 Nm et 800 tr/min. La RR-02SC annonce 1 à 6 Nm et 1 800 tr/min, pour 1,2 kg contre 1,4 kg. Les deux lignes donnent 10 L/s, une entrée PT 1/4 pouce et un flexible intérieur de 10 mm.",
		"verifiedFacts": [
			"RR-06SC contre RR-02SC : même corps droit et mécanisme à friction réglable, couple 5–16 contre 1–6 Nm, vitesse 800 contre 1 800 tr/min et masse 1,4 contre 1,2 kg. Les deux déclarent 10 L/s.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"Consommation sans régime qualifié dans la table.",
			"La page 106 prescrit 6,3 bar au moteur en marche ; elle ne précise pas le protocole de mesure des 10 L/s."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rr-06sc-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 10 L/s, convertis en 600 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-06sc-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,4 kg",
			"evidenceIds": [
				"red-rooster-rr-06sc-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rr-06sc-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-06sc-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-06sc-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. RR-06SC",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 10 L/s, convertis en 600 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-06sc-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rr-06sc-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 42, 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. RR-06SC contre RR-02SC : même corps droit et mécanisme à friction réglable, couple 5–16 contre 1–6 Nm, vitesse 800 contre 1 800 tr/min et masse 1,4 contre 1,2 kg. Les deux déclarent 10 L/s. Limite : Consommation sans régime qualifié dans la table ; ajouter unqualified."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rr-06sc-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-06sc-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-06sc-20260926",
			"review-20261025-red-rooster-rr-06sc-s068"
		],
		"recommendedHose": [
			"red-rooster-rr-06sc-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-06sc-20260926"
		],
		"airflowBasis": [
			"review-20261025-red-rooster-rr-06sc-s068"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Consommation sans régime qualifié dans la table ; ajouter unqualified."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
