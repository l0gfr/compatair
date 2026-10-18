import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1315s",
	"slug": "shinano-si-1315s",
	"brand": "Shinano",
	"model": "SI-1315S",
	"mpn": "SI-1315S",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1315S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1315s.webp",
		"alt": "Repères techniques Shinano SI-1315S, référence SI-1315S",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-1315S : clé à chocs à carré de 3/8 pouce et couple maximal de 60 Nm. La SI-1310S est à carré de 1/4 pouce et 40 Nm. Les deux partagent le maximum de 354 L/min à 6,3 bar ; le choix de sortie ne justifie donc aucun redimensionnement d’air entre ces lignes.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 12.6 CFM / 5.9 L/s. Conversion du maximum publié : 5.9 × 60 = 354 L/min.",
			"Référence fabricant : SI-1315S.",
			"Couple maximal publié : 60 Nm.",
			"Vitesse à vide publiée : 10 000 tr/min.",
			"Masse publiée : 0,63 kg."
		],
		"limitations": [
			"Le couple maximal ne constitue pas une consigne de serrage.",
			"La douille doit être prévue pour le carré et les chocs de la référence retenue."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-1315s-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 12.6 CFM / 5.9 L/s. Conversion du maximum publié : 5.9 × 60 = 354 L/min.",
			"evidenceIds": [
				"shinano-si-1315s-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "60 Nm",
			"evidenceIds": [
				"shinano-si-1315s-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"shinano-si-1315s-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,63 kg",
			"evidenceIds": [
				"shinano-si-1315s-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1315s-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
			"sourceLabel": "Shinano, catalogue général 2025, p. 4, réf. SI-1315S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 12.6 CFM / 5.9 L/s. Conversion du maximum publié : 5.9 × 60 = 354 L/min."
		},
		{
			"id": "shinano-si-1315s-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1315s-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1315s-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1315s-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 354,
		"typical": 354,
		"max": 354
	}
};

export default product;
