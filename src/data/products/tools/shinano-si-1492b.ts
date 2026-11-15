import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1492b",
	"slug": "shinano-si-1492b",
	"brand": "Shinano",
	"model": "SI-1492B",
	"mpn": "SI-1492B",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1492B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1492b-technical-20261115-followup.svg",
		"alt": "Repères techniques Shinano SI-1492B, référence SI-1492B",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Shinano SI-1492B : clé à chocs à carré 1/2 pouce avec enclume allongée de 2 pouces, maximum publié de 830 Nm et masse de 1,94 kg. La SI-1490B utilise une enclume standard, avec 850 Nm et 1,9 kg ; la version SI-1492BSR ajoute la marche arrière à pleine puissance. Le maximum de consommation de 14,4 L/s reste séparé du calcul, sa pression de mesure étant indéterminée.",
		"verifiedFacts": [
			"Colonne Max Air Consumption : 30.6 CFM / 14.4 L/s. Conversion du maximum publié : 14.4 × 60 = 864 L/min.",
			"Référence fabricant : SI-1492B.",
			"Masse publiée : 1,94 kg.",
			"Montage : Carré 1/2 pouce ; enclume allongée de 2 pouces.",
			"Couple maximal publié : 830 Nm."
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
			"value": "Colonne Max Air Consumption : 30.6 CFM / 14.4 L/s. Conversion du maximum publié : 14.4 × 60 = 864 L/min.",
			"evidenceIds": [
				"shinano-si-1492b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,94 kg",
			"evidenceIds": [
				"shinano-si-1492b-20260926"
			]
		},
		{
			"label": "Montage",
			"value": "Carré 1/2 pouce ; enclume allongée de 2 pouces",
			"evidenceIds": [
				"shinano-si-1492b-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "830 Nm",
			"evidenceIds": [
				"shinano-si-1492b-20260926"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "864 L/min ; pression de mesure non établie",
			"evidenceIds": [
				"review:2026-11-12-technical:shinano-si-1492b:0"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1492b-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=5",
			"sourceLabel": "Shinano, catalogue général 2025, p. 5, réf. SI-1492B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 30.6 CFM / 14.4 L/s. Conversion du maximum publié : 14.4 × 60 = 864 L/min."
		},
		{
			"id": "shinano-si-1492b-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-12-technical:shinano-si-1492b:0",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
			"sourceLabel": "Shinano, document fabricant, pages PDF 5, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité. GET complet : SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Transcriptions historiques conservées."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1492b-20260926"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:shinano-si-1492b:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:shinano-si-1492b:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité."
};

export default product;
