import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2015a-6",
	"slug": "shinano-si-2015a-6",
	"brand": "Shinano",
	"model": "SI-2015A-6",
	"mpn": "SI-2015A-6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2015A-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2015a-6-technical-20261115-followup.svg",
		"alt": "Repères techniques Shinano SI-2015A-6, référence SI-2015A-6",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Shinano SI-2015A-6 : meuleuse à réducteur, pince métrique de 6 mm, 5 500 tr/min et 457 W. La SI-2015A reçoit une pince de 1/4 pouce ; la SI-2010-6 conserve 6 mm mais tourne à 23 000 tr/min pour 247 W. Le choix de pince et de vitesse change malgré la parenté de gamme. Les 11,9 L/s maximum ne sont pas appariés à une pression de mesure.",
		"verifiedFacts": [
			"Consommation maximale, colonne Max Air Consumption : 25.2 CFM / 11.9 L/s, soit 714 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-2015A-6.",
			"Version et équipement : Pince 6 mm ; puissance publiée 457 W.",
			"Vitesse à vide publiée : 5500 tr/min.",
			"Masse publiée : 0.91 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité."
		]
	},
	"specifications": [
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 25.2 CFM / 11.9 L/s, soit 714 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2015a-6-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Pince 6 mm ; puissance publiée 457 W.",
			"evidenceIds": [
				"shinano-si-2015a-6-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "5500 tr/min",
			"evidenceIds": [
				"shinano-si-2015a-6-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.91 kg",
			"evidenceIds": [
				"shinano-si-2015a-6-20260926"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "714 L/min ; pression de mesure non établie",
			"evidenceIds": [
				"review:2026-11-12-technical:shinano-si-2015a-6:0"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2015a-6-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=19",
			"sourceLabel": "Shinano, catalogue général 2025, p. 19, réf. SI-2015A-6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 25.2 CFM / 11.9 L/s, soit 714 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2015a-6-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-12-technical:shinano-si-2015a-6:0",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
			"sourceLabel": "Shinano, document fabricant, pages PDF 19, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité. GET complet : SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Transcriptions historiques conservées."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2015a-6-20260926"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:shinano-si-2015a-6:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:shinano-si-2015a-6:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité."
};

export default product;
