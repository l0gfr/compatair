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
		"overview": "77A25F107 : outil d’angle allongé de 446 mm pour bonnet de polissage de 7 pouces, sortie 5/8-11 et 2 500 tr/min. La 77A45W109 voisine reçoit un plateau de 9 pouces à 4 500 tr/min. Le tableau actuel publie 561 L/min en charge pour la 77A25F107 ; l’ancienne transcription de bibliothèque à 37 cfm n’est plus vérifiable et n’est pas utilisée pour choisir une alimentation. Le montage de polissage et sa vitesse restent le premier choix.",
		"verifiedFacts": [
			"Puissance publiée : 1,5 hp / 1,12 kW.",
			"Vitesse à vide : 2 500 tr/min.",
			"Échappement : latéral.",
			"Sortie : 5/8-11 ; bonnet de 7 pouces.",
			"Consommation en charge documentaire : 19,8 cfm / 561 L/min, sans pression de mesure appariée."
		],
		"limitations": [
			"La consommation reste hors du calcul de compatibilité : la pression de mesure et les conditions volumétriques complètes ne sont pas établies.",
			"La bibliothèque ancienne répond429 ; son fragment de page n’est pas un document PDF. Ses transcriptions antérieures restent dans l’historique, sans être traitées comme des valeurs confirmées.",
			"Lecture documentaire sans essai physique. Le lecteur web ne prouve ni disponibilité commerciale actuelle ni conformité de la fourniture en France.",
			"La notice donne7pouces/178mm et la page7pouces/180mm ; la dimension en pouces est conservée sans créer un diamètre métrique unique."
		]
	},
	"specifications": [
		{
			"label": "Puissance publiée",
			"value": "1,5 hp / 1,12 kW",
			"evidenceIds": [
				"october21-ingersoll-rand-77a25f107-model-table"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 500 tr/min",
			"evidenceIds": [
				"october21-ingersoll-rand-77a25f107-model-table"
			]
		},
		{
			"label": "Échappement",
			"value": "latéral",
			"evidenceIds": [
				"october21-ingersoll-rand-77a25f107-model-table"
			]
		},
		{
			"label": "Sortie",
			"value": "5/8-11 ; bonnet de 7 pouces",
			"evidenceIds": [
				"october21-ingersoll-rand-77a25f107-model-table"
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
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La page de modèle publie une consommation en charge, sans établir la pression de mesure. L’ancienne transcription de bibliothèque est retirée du calcul ; aucune suffisance d’alimentation n’est conclue."
};

export default product;
