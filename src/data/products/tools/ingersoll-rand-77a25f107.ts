import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-77a25f107",
	"slug": "ingersoll-rand-77a25f107",
	"brand": "Ingersoll Rand",
	"model": "77A25F107",
	"mpn": "77A25F107",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Ingersoll Rand 77A25F107",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-77a25f107.webp",
		"alt": "Repères techniques Ingersoll Rand 77A25F107, référence 77A25F107",
		"sourceUrl": "https://powertools.ingersollrand.com/en/surface-preparation-finishing-tools/sanders-polishers-buffers/pro-77a/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "77A25F107 : la notice 80221773 identifie 2 500 tr/min, un plateau de 7 pouces (178 mm) et une sortie 5/8-11. La 77A45W109 y est donnée à 4 500 tr/min avec un plateau de 9 pouces (228 mm). Vitesse et diamètre distinguent les montages ; les valeurs de puissance, longueur et consommation de l’ancienne fiche ne sont pas requalifiées par cette notice.",
		"verifiedFacts": [
			"Notice 80221773, édition 3 : 77A25F107 et 77A25F107-EU, 2 500 tr/min, plateau 7 pouces (178 mm), sortie 5/8-11.",
			"La même notice distingue 77A45W109 et sa variante EU : 4 500 tr/min et plateau 9 pouces (228 mm)."
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
			"value": "1,5 hp / 1,12 kW",
			"evidenceIds": [
				"october21-ingersoll-rand-77a25f107-model-table"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 500 tr/min",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-77a25f107"
			]
		},
		{
			"label": "Échappement de la fiche historique, non requalifié par la notice",
			"value": "latéral",
			"evidenceIds": [
				"october21-ingersoll-rand-77a25f107-model-table"
			]
		},
		{
			"label": "Sortie",
			"value": "5/8-11 ; bonnet de 7 pouces",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-77a25f107"
			]
		},
		{
			"label": "Consommation documentaire hors calcul",
			"value": "19,8 cfm / 561 L/min en charge ; pression de mesure non établie.",
			"evidenceIds": [
				"october21-ingersoll-rand-77a25f107-model-table"
			]
		},
		{
			"label": "Condition de pression",
			"value": "Non établie pour la mesure de consommation ; aucune consigne de famille transférée.",
			"evidenceIds": [
				"october21-ingersoll-rand-77a25f107-model-table"
			]
		},
		{
			"label": "Plateau dans la notice",
			"value": "7 pouces (178 mm) ; sortie 5/8-11",
			"evidenceIds": [
				"reserved-ir-20261025-ingersoll-rand-77a25f107"
			]
		}
	],
	"evidence": [
		{
			"id": "october21-ingersoll-rand-77a25f107-model-table",
			"sourceUrl": "https://powertools.ingersollrand.com/en/surface-preparation-finishing-tools/sanders-polishers-buffers/pro-77a/",
			"sourceLabel": "Ingersoll Rand, tableau officiel des modèles 77A25F107",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Tableau primaire lu par l’outil web ; ce lecteur expose une copie indexée et ne fournit pas de statut HTTP courant. Le transfert CLI429 reste consigné. La pression de mesure du débit n’est pas établie. La source de modèle documente explicitement le périmètre lu et l’absence de point de pression vérifiable ; le champ reste vide, jamais un nominal inventé."
		},
		{
			"id": "october21-ingersoll-rand-77a25f107-model-table-product-information",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/blt433cc516ed60e011/680a2474db9ccbf630425ff1/80221773_ed3_C.pdf#page=3",
			"sourceLabel": "Ingersoll Rand, Product Information, tableau des modèles et installation",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Document lié par la page officielle, lu intégralement pour les pages anglaises1–4 ; SHA-256 79bce65a0d457b008e4483ef519ea5a09fcc23eb3463b30e076d2e1216da5542. La consigne PMAX ne fournit pas un point de mesure de consommation."
		},
		{
			"id": "reserved-ir-20261025-ingersoll-rand-77a25f107",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/bltd89674ca5491ef9a/blt433cc516ed60e011/680a2474db9ccbf630425ff1/80221773_ed3_C.pdf#page=3",
			"sourceLabel": "Notice fabricant, relecture ciblée du modèle et du voisin, 25 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Document actuel accessible HTTP 200, réponse SHA-256 79bce65a0d457b008e4483ef519ea5a09fcc23eb3463b30e076d2e1216da5542. Lecture page PDF 3. La fiche HTML inaccessible et les preuves historiques restent séparées ; aucun essai physique."
		}
	],
	"fieldSources": {
		"mpn": [
			"october21-ingersoll-rand-77a25f107-model-table"
		],
		"demandModel": [
			"october21-ingersoll-rand-77a25f107-model-table"
		],
		"demandExplanation": [
			"october21-ingersoll-rand-77a25f107-model-table"
		],
		"workingPressureBar": [
			"october21-ingersoll-rand-77a25f107-model-table"
		],
		"editorial": [
			"reserved-ir-20261025-ingersoll-rand-77a25f107"
		],
		"specifications": [
			"reserved-ir-20261025-ingersoll-rand-77a25f107"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La page de modèle publie une consommation en charge, sans établir la pression de mesure. L’ancienne transcription de bibliothèque est retirée du calcul ; aucune suffisance d’alimentation n’est conclue."
};

export default product;
