import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-7p24l",
	"slug": "ingersoll-rand-7p24l",
	"brand": "Ingersoll Rand",
	"model": "7P24L",
	"mpn": "7P24L",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Ingersoll Rand 7P24L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-7p24l.webp",
		"alt": "Repères techniques Ingersoll Rand 7P24L, référence 7P24L",
		"sourceUrl": "https://powertools.ingersollrand.com/es-lac/surface-preparation-finishing-tools/sanders-polishers-buffers/pro-7p/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "7P24L : outil de finition à levier, 2 400 tr/min et montage 5/8-11 pour plateau de 7 pouces dans la notice 03529385. La 7S48L utilise le même format de montage mais tourne à 4 800 tr/min : un diamètre et un filetage communs ne prouvent pas la même vitesse admissible des consommables. La notice ne donne pas ici de point de consommation sous pression.",
		"verifiedFacts": [
			"Notice 03529385, édition 14 : 7P24L et 7P24L-EU, commande à levier, 2 400 tr/min, montage 5/8-11 et plateau de 7 pouces.",
			"La 7S48L et sa variante EU utilisent le même montage mais sont données à 4 800 tr/min."
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
			"label": "Puissance de la fiche historique, non requalifiée par la notice",
			"value": "0,8 hp / 0,6 kW",
			"evidenceIds": [
				"october21-ingersoll-rand-7p24l-model-table"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 400 tr/min",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-7p24l"
			]
		},
		{
			"label": "Échappement de la fiche historique, non requalifié par la notice",
			"value": "latéral",
			"evidenceIds": [
				"october21-ingersoll-rand-7p24l-model-table"
			]
		},
		{
			"label": "Sortie",
			"value": "5/8-11 ; bonnet de 7 pouces",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-7p24l"
			]
		},
		{
			"label": "Consommation documentaire hors calcul",
			"value": "15,5 cfm / 439 L/min en charge ; pression de mesure non établie.",
			"evidenceIds": [
				"october21-ingersoll-rand-7p24l-model-table"
			]
		},
		{
			"label": "Condition de pression",
			"value": "Non établie pour la mesure de consommation ; aucune consigne de famille transférée.",
			"evidenceIds": [
				"october21-ingersoll-rand-7p24l-model-table"
			]
		},
		{
			"label": "Commande de la notice",
			"value": "Lever : levier",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-7p24l"
			]
		},
		{
			"label": "Montage de la notice",
			"value": "5/8-11 ; plateau 7 pouces",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-7p24l"
			]
		}
	],
	"evidence": [
		{
			"id": "october21-ingersoll-rand-7p24l-model-table",
			"sourceUrl": "https://powertools.ingersollrand.com/es-lac/surface-preparation-finishing-tools/sanders-polishers-buffers/pro-7p/",
			"sourceLabel": "Ingersoll Rand, tableau officiel des modèles 7P24L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Tableau primaire lu par l’outil web ; ce lecteur expose une copie indexée et ne fournit pas de statut HTTP courant. Le transfert CLI429 reste consigné. La pression de mesure du débit n’est pas établie. La source de modèle documente explicitement le périmètre lu et l’absence de point de pression vérifiable ; le champ reste vide, jamais un nominal inventé."
		},
		{
			"id": "october21-ingersoll-rand-7p24l-model-table-product-information",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/blt6c5df3c845dfca8f/680a19d1caf58865bdb6cdf2/03529385_ed14_P.pdf#page=3",
			"sourceLabel": "Ingersoll Rand, Product Information, tableau des modèles et installation",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Document lié par la page officielle, lu intégralement pour les pages anglaises1–4 ; SHA-256 6fa6784a22e9dc2f3ccdd9b92cf8325df45139a6f06d14c8416948dc007f66b4. La consigne PMAX ne fournit pas un point de mesure de consommation."
		},
		{
			"id": "reserved-ir-20261025-ingersoll-rand-7p24l",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/blt6c5df3c845dfca8f/680a19d1caf58865bdb6cdf2/03529385_ed14_P.pdf#page=3",
			"sourceLabel": "Notice fabricant, relecture ciblée du modèle et du voisin, 25 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Document actuel accessible HTTP 200, réponse SHA-256 6fa6784a22e9dc2f3ccdd9b92cf8325df45139a6f06d14c8416948dc007f66b4. Lecture page PDF 3. La fiche HTML inaccessible et les preuves historiques restent séparées ; aucun essai physique."
		}
	],
	"fieldSources": {
		"mpn": [
			"october21-ingersoll-rand-7p24l-model-table"
		],
		"demandModel": [
			"october21-ingersoll-rand-7p24l-model-table"
		],
		"demandExplanation": [
			"october21-ingersoll-rand-7p24l-model-table"
		],
		"workingPressureBar": [
			"october21-ingersoll-rand-7p24l-model-table"
		],
		"editorial": [
			"reserved-ir-20261025-ingersoll-rand-7p24l"
		],
		"specifications": [
			"reserved-ir-20261025-ingersoll-rand-7p24l"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La page de modèle publie une consommation en charge, sans établir la pression de mesure. L’ancienne transcription de bibliothèque est retirée du calcul ; aucune suffisance d’alimentation n’est conclue."
};

export default product;
