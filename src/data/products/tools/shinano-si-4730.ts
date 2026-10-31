import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-4730",
	"slug": "shinano-si-4730",
	"brand": "Shinano",
	"model": "SI-4730",
	"mpn": "SI-4730",
	"categoryId": "scie",
	"category": "scie",
	"label": "Shinano SI-4730",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-4730.webp",
		"alt": "Repères techniques Shinano SI-4730, référence SI-4730",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=24",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-4730. Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires. Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée. Référence fabricant : SI-4730. Version et équipement : Scie à moteur rotatif : course 9 mm ; cadence 6 000 coups/min ; capacité acier publiée 5 mm. Masse publiée : 0.92 kg.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Référence fabricant : SI-4730.",
			"Version et équipement : Scie à moteur rotatif : course 9 mm ; cadence 6 000 coups/min ; capacité acier publiée 5 mm.",
			"Masse publiée : 0.92 kg.",
			"Valeur documentaire conservée : 510 L/min. Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires."
		],
		"limitations": [
			"La capacité acier de 5 mm de cette référence ne s’étend pas à toutes les matières ni à toutes les lames. La lame et la fixation de la pièce restent à qualifier.",
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-4730-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 510 L/min. Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires.",
			"evidenceIds": [
				"shinano-si-4730-reserved-20261031-1",
				"shinano-si-4730-reserved-20261031-2"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Scie à moteur rotatif : course 9 mm ; cadence 6 000 coups/min ; capacité acier publiée 5 mm.",
			"evidenceIds": [
				"shinano-si-4730-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.92 kg",
			"evidenceIds": [
				"shinano-si-4730-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":510,\"typical\":510,\"max\":510},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"shinano-si-4730-20260926",
				"shinano-si-4730-reserved-20261031-1",
				"shinano-si-4730-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-4730-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=24",
			"sourceLabel": "Shinano, catalogue général 2025, p. 24, réf. SI-4730",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 18 CFM / 8.5 L/s, soit 510 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-4730-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-4740-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=25",
			"sourceLabel": "Shinano, catalogue général 2025, p. 25, réf. SI-4740",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 10.2 CFM / 4.8 L/s, soit 288 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-4740-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-4730-reserved-20261031-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=10",
			"sourceLabel": "Shinano SI-4730 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires. Pages complémentaires relues : 24, 43."
		},
		{
			"id": "shinano-si-4730-reserved-20261031-2",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano SI-4730 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires. Pages complémentaires relues : 24, 43."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-4730-20260926"
		],
		"workingPressureBar": [
			"shinano-si-4730-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"shinano-si-4730-reserved-20261031-1",
			"shinano-si-4730-reserved-20261031-2"
		],
		"demandExplanation": [
			"shinano-si-4730-reserved-20261031-1",
			"shinano-si-4730-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires."
};

export default product;
