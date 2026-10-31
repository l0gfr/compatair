import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-4700b",
	"slug": "shinano-si-4700b",
	"brand": "Shinano",
	"model": "SI-4700B",
	"mpn": "SI-4700B",
	"categoryId": "scie",
	"category": "scie",
	"label": "Shinano SI-4700B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-4700b.webp",
		"alt": "Repères techniques Shinano SI-4700B, référence SI-4700B",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=24",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Shinano SI-4700B. Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires. Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée. Référence fabricant : SI-4700B. Version et équipement : Scie alternative : course 10 mm ; cadence 10 000 coups/min ; capacité acier publiée 3 mm. Masse publiée : 0.58 kg. Le tableau annonce 3 mm de capacité acier et 0,58 kg pour la SI-4700B, contre 5 mm et 0,92 kg pour la SI-4730, dont la course est de 9 mm à 6 000 coups/min. La plus haute cadence ne démontre pas la plus forte capacité.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Référence fabricant : SI-4700B.",
			"Version et équipement : Scie alternative : course 10 mm ; cadence 10 000 coups/min ; capacité acier publiée 3 mm.",
			"Masse publiée : 0.58 kg.",
			"Le tableau annonce 3 mm de capacité acier et 0,58 kg pour la SI-4700B, contre 5 mm et 0,92 kg pour la SI-4730, dont la course est de 9 mm à 6 000 coups/min. La plus haute cadence ne démontre pas la plus forte capacité.",
			"Valeur documentaire conservée : 204 L/min. Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Choisir la lame selon le matériau et l’épaisseur. Les coups/min ne sont pas des tours/min et la capacité acier de catalogue ne vaut pas pour tous les alliages ni toutes les conditions de coupe.",
			"Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-4700b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 204 L/min. Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires.",
			"evidenceIds": [
				"shinano-si-4700b-reserved-20261031-1",
				"shinano-si-4700b-reserved-20261031-2"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Scie alternative : course 10 mm ; cadence 10 000 coups/min ; capacité acier publiée 3 mm.",
			"evidenceIds": [
				"shinano-si-4700b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.58 kg",
			"evidenceIds": [
				"shinano-si-4700b-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":204,\"typical\":204,\"max\":204},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"shinano-si-4700b-20260926",
				"shinano-si-4700b-reserved-20261031-1",
				"shinano-si-4700b-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-4700b-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=24",
			"sourceLabel": "Shinano, catalogue général 2025, p. 24, réf. SI-4700B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 7.2 CFM / 3.4 L/s, soit 204 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-4700b-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "shinano-si-4700b-reserved-20261031-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=10",
			"sourceLabel": "Shinano SI-4700B : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires. Pages complémentaires relues : 24, 43."
		},
		{
			"id": "shinano-si-4700b-reserved-20261031-2",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano SI-4700B : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires. Pages complémentaires relues : 24, 43."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-4700b-20260926"
		],
		"workingPressureBar": [
			"shinano-si-4700b-20260926-workingpressurebar-1"
		],
		"demandModel": [
			"shinano-si-4700b-reserved-20261031-1",
			"shinano-si-4700b-reserved-20261031-2"
		],
		"demandExplanation": [
			"shinano-si-4700b-reserved-20261031-1",
			"shinano-si-4700b-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le catalogue Shinano page 24 publie un maximum de consommation. La page 43 prescrit 6,3 bar en fonctionnement sans apparier explicitement cette pression au maximum mesuré. Les observations restent documentaires."
};

export default product;
