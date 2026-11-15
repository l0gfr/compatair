import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1340ex",
	"slug": "shinano-si-1340ex",
	"brand": "Shinano",
	"model": "SI-1340EX",
	"mpn": "SI-1340EX",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Shinano SI-1340EX",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1340ex-technical-20261115-followup.svg",
		"alt": "Repères techniques Shinano SI-1340EX, référence SI-1340EX",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Shinano SI-1340EX : cliquet à carré 3/8 pouce, échappement arrière et raccord orientable à 360 degrés. Le maximum publié est de 110 Nm, contre 80 Nm pour le SI-1320A à échappement avant ; le SI-1345EX passe au carré 1/2 pouce et à 115 Nm. Les 7,1 L/s maximum restent documentaires, faute de pression de mesure appariée.",
		"verifiedFacts": [
			"Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min.",
			"Référence fabricant : SI-1340EX.",
			"Couple maximal publié : 110 Nm.",
			"Vitesse à vide publiée : 160 tr/min.",
			"Masse publiée : 1,14 kg."
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
			"value": "Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min.",
			"evidenceIds": [
				"shinano-si-1340ex-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "110 Nm",
			"evidenceIds": [
				"shinano-si-1340ex-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "160 tr/min",
			"evidenceIds": [
				"shinano-si-1340ex-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,14 kg",
			"evidenceIds": [
				"shinano-si-1340ex-20260926"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "426 L/min ; pression de mesure non établie",
			"evidenceIds": [
				"review:2026-11-12-technical:shinano-si-1340ex:0"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1340ex-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=9",
			"sourceLabel": "Shinano, catalogue général 2025, p. 9, réf. SI-1340EX",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 15 CFM / 7.1 L/s. Conversion du maximum publié : 7.1 × 60 = 426 L/min."
		},
		{
			"id": "shinano-si-1340ex-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review:2026-11-12-technical:shinano-si-1340ex:0",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf",
			"sourceLabel": "Shinano, document fabricant, pages PDF 9, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité. GET complet : SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Transcriptions historiques conservées."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1340ex-20260926"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:shinano-si-1340ex:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:shinano-si-1340ex:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité."
};

export default product;
