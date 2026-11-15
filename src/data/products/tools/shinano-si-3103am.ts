import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-3103am",
	"slug": "shinano-si-3103am",
	"brand": "Shinano",
	"model": "SI-3103AM",
	"mpn": "SI-3103AM",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Shinano SI-3103AM",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-3103am-technical-20261115-followup.svg",
		"alt": "Repères techniques Shinano SI-3103AM, référence SI-3103AM",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Shinano SI-3103AM : ponceuse sans aspiration intégrée, plateau autoagrippant de 125 mm et orbite de 5 mm, donnée à 9 000 tr/min. La SI-3103A utilise le revêtement Leather ; la SI-3103-6A passe au plateau Leather de 150 mm. Le suffixe M identifie le plateau Velcro. Les 7,9 L/s maximum restent documentaires, sans pression de mesure établie.",
		"verifiedFacts": [
			"Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"Référence fabricant : SI-3103AM.",
			"Version et équipement : Plateau 125 mm, autoagrippant (Velcro) ; orbite 5 mm ; sans aspiration intégrée.",
			"Vitesse à vide publiée : 9000 tr/min.",
			"Masse publiée : 1.18 kg."
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
			"value": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-3103am-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Plateau 125 mm, autoagrippant (Velcro) ; orbite 5 mm ; sans aspiration intégrée.",
			"evidenceIds": [
				"shinano-si-3103am-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "9000 tr/min",
			"evidenceIds": [
				"shinano-si-3103am-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.18 kg",
			"evidenceIds": [
				"shinano-si-3103am-20260926"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "474 L/min ; pression de mesure non établie",
			"evidenceIds": [
				"review:2026-11-12-technical:shinano-si-3103am:0"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-3103am-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=12",
			"sourceLabel": "Shinano, catalogue général 2025, p. 12, réf. SI-3103AM",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 16.8 CFM / 7.9 L/s, soit 474 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-3103am-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-12-technical:shinano-si-3103am:0",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
			"sourceLabel": "Shinano, document fabricant, pages PDF 12, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité. GET complet : SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Transcriptions historiques conservées."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-3103am-20260926"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:shinano-si-3103am:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:shinano-si-3103am:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité."
};

export default product;
