import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1345ex",
	"slug": "shinano-si-1345ex",
	"brand": "Shinano",
	"model": "SI-1345EX",
	"mpn": "SI-1345EX",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Shinano SI-1345EX",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1345ex-technical-20261116-reviews.svg",
		"alt": "Repères techniques Shinano SI-1345EX, référence SI-1345EX",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La SI-1345EX est un cliquet 1/2 pouce de 265 mm à échappement arrière, avec raccord d’air pivotant à 360°. Elle annonce 115 Nm maximum et 160 tr/min, contre 90 Nm pour la SI-1325A à échappement avant. Le catalogue sépare 7,1 L/s maximum et 1,2 L/s en moyenne. Sa consigne d’alimentation à 90 psi, outil en marche, ne constitue pas une attestation de la pression de mesure de ces deux consommations.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min.",
			"Référence fabricant : SI-1345EX.",
			"Couple maximal publié : 115 Nm.",
			"Vitesse à vide publiée : 160 tr/min.",
			"Masse publiée : 1,15 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La pression de service n’atteste pas la pression de mesure de consommation. Le régime ou l’appariement documentaire reste non qualifié ; aucune consommation dimensionnante n’est conservée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-1345ex-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min.",
			"evidenceIds": [
				"shinano-si-1345ex-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "115 Nm",
			"evidenceIds": [
				"shinano-si-1345ex-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "160 tr/min",
			"evidenceIds": [
				"shinano-si-1345ex-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,15 kg",
			"evidenceIds": [
				"shinano-si-1345ex-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1345ex-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
			"sourceLabel": "Shinano, catalogue général 2025, p. 9, réf. SI-1345EX",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min."
		},
		{
			"id": "shinano-si-1345ex-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:shinano-si-1345ex:0",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
			"sourceLabel": "Shinano, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La SI-1345EX est un cliquet 1/2 pouce de 265 mm à échappement arrière, avec raccord d’air pivotant à 360°. Elle annonce 115 Nm maximum et 160 tr/min, contre 90 Nm pour la SI-1325A à échappement avant. Le catalogue sépare 7,1 L/s maximum et 1,2 L/s en moyenne. Sa consigne d’alimentation à 90 psi, outil en marche, ne constitue pas une attestation de la pression de mesure de ces deux consommations. GET complet SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Pages PDF lues : 9, 43."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1345ex-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1345ex-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1345ex-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:shinano-si-1345ex:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 426,
		"typical": 426,
		"max": 426
	},
	"airflowBasis": "unqualified"
};

export default product;
