import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-312ac4a",
	"slug": "ingersoll-rand-312ac4a",
	"brand": "Ingersoll Rand",
	"model": "312AC4A",
	"mpn": "312AC4A",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Ingersoll Rand 312AC4A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-312ac4a.webp",
		"alt": "Repères techniques Ingersoll Rand 312AC4A, référence 312AC4A",
		"sourceUrl": "https://powertools.ingersollrand.com/en/surface-preparation-finishing-tools/grinders/revolution-die/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "312AC4A : meuleuse à 12 000 tr/min et 0,40 hp (0,30 kW) dans la notice 45760899, contre 20 000 tr/min et la même puissance pour la 320AC4A. Cette différence de vitesse intervient dans le choix de l’accessoire. La notice imprime « 1/4 pouce (6 mm) » pour la pince, sans faire de ces deux diamètres une tolérance d’interchangeabilité. Elle ne donne pas ici de consommation d’air dimensionnante.",
		"verifiedFacts": [
			"Notice 45760899, édition 7 : 312AC4A à 12 000 tr/min, 0,40 hp (0,30 kW) ; 320AC4A à 20 000 tr/min, 0,40 hp (0,30 kW).",
			"Le tableau de la notice imprime la pince « 1/4 pouce (6 mm) » ; la pince réellement installée et la queue de l’accessoire doivent être identifiées sans arrondi."
		],
		"limitations": [
			"La fiche HTML a répondu 429 lors du contrôle direct. La nouvelle lecture s’appuie sur la notice officielle accessible, dont le champ est limité aux modèles et caractéristiques explicitement imprimés.",
			"Les caractéristiques d’air historiques restent dans les spécifications avec leurs sources datées, mais le régime et la pression de mesure nécessaires au dimensionnement ne sont pas établis ici.",
			"Le libellé d’une variante EU dans le tableau ne prouve pas que toutes les références régionales ou pièces sont interchangeables.",
			"Aucun essai physique, disponibilité commerciale actuelle ou exposition individuelle au bruit n’est établi par cette lecture."
		]
	},
	"specifications": [
		{
			"label": "Puissance publiée",
			"value": "0,40 hp / 0,30 kW",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-312ac4a"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-312ac4a"
			]
		},
		{
			"label": "Échappement de la fiche historique, non requalifié par la notice",
			"value": "arrière",
			"evidenceIds": [
				"october21-ingersoll-rand-312ac4a-model-table"
			]
		},
		{
			"label": "Pince de la ligne produit",
			"value": "1/4 pouce",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-312ac4a"
			]
		},
		{
			"label": "Consommation documentaire hors calcul",
			"value": "32 cfm / 908 L/min en charge ; pression de mesure non établie.",
			"evidenceIds": [
				"october21-ingersoll-rand-312ac4a-model-table"
			]
		},
		{
			"label": "Condition de pression",
			"value": "Non établie pour la mesure de consommation ; aucune consigne de famille transférée.",
			"evidenceIds": [
				"october21-ingersoll-rand-312ac4a-model-table"
			]
		},
		{
			"label": "Pince, libellé exact de la notice",
			"value": "1/4 pouce (6 mm) ; ce libellé ne prouve pas une interchangeabilité",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-312ac4a"
			]
		}
	],
	"evidence": [
		{
			"id": "october21-ingersoll-rand-312ac4a-model-table",
			"sourceUrl": "https://powertools.ingersollrand.com/en/surface-preparation-finishing-tools/grinders/revolution-die/",
			"sourceLabel": "Ingersoll Rand, tableau officiel des modèles 312AC4A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Tableau primaire lu par l’outil web ; ce lecteur expose une copie indexée et ne fournit pas de statut HTTP courant. Le transfert CLI429 reste consigné. La pression de mesure du débit n’est pas établie. La source de modèle documente explicitement le périmètre lu et l’absence de point de pression vérifiable ; le champ reste vide, jamais un nominal inventé."
		},
		{
			"id": "october21-ingersoll-rand-312ac4a-model-table-product-information",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/bltaba456f61496c230/680a25bef42c4c5c743e73c4/45760899_ed7_G.pdf#page=3",
			"sourceLabel": "Ingersoll Rand, Product Information, tableau des modèles et installation",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Document lié par la page officielle, lu intégralement pour les pages anglaises1–4 ; SHA-256 5b41360138aa346aa1b09a2be05db75c15cc72b82cfe642f186fc903f8e2d1ae. La consigne PMAX ne fournit pas un point de mesure de consommation."
		},
		{
			"id": "reserved-ir-20261025-ingersoll-rand-312ac4a",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/bltaba456f61496c230/680a25bef42c4c5c743e73c4/45760899_ed7_G.pdf#page=3",
			"sourceLabel": "Notice fabricant, relecture ciblée du modèle et du voisin, 25 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Document actuel accessible HTTP 200, réponse SHA-256 5b41360138aa346aa1b09a2be05db75c15cc72b82cfe642f186fc903f8e2d1ae. Lecture page PDF 3. La fiche HTML inaccessible et les preuves historiques restent séparées ; aucun essai physique."
		}
	],
	"fieldSources": {
		"mpn": [
			"october21-ingersoll-rand-312ac4a-model-table"
		],
		"demandModel": [
			"october21-ingersoll-rand-312ac4a-model-table"
		],
		"demandExplanation": [
			"october21-ingersoll-rand-312ac4a-model-table"
		],
		"workingPressureBar": [
			"october21-ingersoll-rand-312ac4a-model-table"
		],
		"editorial": [
			"reserved-ir-20261025-ingersoll-rand-312ac4a"
		],
		"specifications": [
			"reserved-ir-20261025-ingersoll-rand-312ac4a"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La page de modèle publie une consommation en charge, sans établir la pression de mesure. L’ancienne transcription de bibliothèque est retirée du calcul ; aucune suffisance d’alimentation n’est conclue."
};

export default product;
