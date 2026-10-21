import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-170pg-cs",
	"slug": "ingersoll-rand-170pg-cs",
	"brand": "Ingersoll Rand",
	"model": "170PG-CS",
	"mpn": "170PG-CS",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Ingersoll Rand 170PG-CS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-170pg-cs.webp",
		"alt": "Repères techniques Ingersoll Rand 170PG-CS, référence 170PG-CS",
		"sourceUrl": "https://powertools.ingersollrand.com/en-us/surface-preparation-finishing-tools/needle-and-chisel-scalers/170-pistol-chisel/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "170PG-CS : version à burin, 3 000 coups/min, alésage de 23 mm et course de 35 mm. La 170PG voisine est la version à aiguilles. Les tableaux du fabricant donnent 314 mm de longueur et 156 L/min en charge pour les deux, avec 2,4 kg pour la CS et 3 kg pour la PG dans la colonne de masse hors burin. Le choix de l’organe de décapage reste distinct du débit.",
		"verifiedFacts": [
			"Cadence : 3 000 coups/min.",
			"Alésage : 23 mm ; course : 35 mm.",
			"Longueur publiée : 314 mm.",
			"Masse publiée hors burin : 2,4 kg.",
			"Consommation en charge documentaire : 5,5 cfm / 156 L/min, sans pression de mesure appariée."
		],
		"limitations": [
			"La consommation reste hors du calcul de compatibilité : la pression de mesure et les conditions volumétriques complètes ne sont pas établies.",
			"La bibliothèque ancienne répond429 ; son fragment de page n’est pas un document PDF. Ses transcriptions antérieures restent dans l’historique, sans être traitées comme des valeurs confirmées.",
			"Lecture documentaire sans essai physique. Le lecteur web ne prouve ni disponibilité commerciale actuelle ni conformité de la fourniture en France."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "3 000 coups/min",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-cs-model-table"
			]
		},
		{
			"label": "Alésage",
			"value": "23 mm ; course : 35 mm",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-cs-model-table"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "314 mm",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-cs-model-table"
			]
		},
		{
			"label": "Masse publiée hors burin",
			"value": "2,4 kg",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-cs-model-table"
			]
		},
		{
			"label": "Consommation documentaire hors calcul",
			"value": "5,5 cfm / 156 L/min en charge ; pression de mesure non établie.",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-cs-model-table"
			]
		},
		{
			"label": "Condition de pression",
			"value": "Non établie pour la mesure de consommation ; aucune consigne de famille transférée.",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-cs-model-table"
			]
		}
	],
	"evidence": [
		{
			"id": "october21-ingersoll-rand-170pg-cs-model-table",
			"sourceUrl": "https://powertools.ingersollrand.com/en-us/surface-preparation-finishing-tools/needle-and-chisel-scalers/170-pistol-chisel/",
			"sourceLabel": "Ingersoll Rand, tableau officiel des modèles 170PG-CS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Tableau primaire lu par l’outil web ; ce lecteur expose une copie indexée et ne fournit pas de statut HTTP courant. Le transfert CLI429 reste consigné. La pression de mesure du débit n’est pas établie. La source de modèle documente explicitement le périmètre lu et l’absence de point de pression vérifiable ; le champ reste vide, jamais un nominal inventé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october21-ingersoll-rand-170pg-cs-model-table"
		],
		"demandModel": [
			"october21-ingersoll-rand-170pg-cs-model-table"
		],
		"demandExplanation": [
			"october21-ingersoll-rand-170pg-cs-model-table"
		],
		"workingPressureBar": [
			"october21-ingersoll-rand-170pg-cs-model-table"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La page de modèle publie une consommation en charge, sans établir la pression de mesure. L’ancienne transcription de bibliothèque est retirée du calcul ; aucune suffisance d’alimentation n’est conclue."
};

export default product;
