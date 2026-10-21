import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-170pg",
	"slug": "ingersoll-rand-170pg",
	"brand": "Ingersoll Rand",
	"model": "170PG",
	"mpn": "170PG",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Ingersoll Rand 170PG",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-170pg.webp",
		"alt": "Repères techniques Ingersoll Rand 170PG, référence 170PG",
		"sourceUrl": "https://powertools.ingersollrand.com/en-us/surface-preparation-finishing-tools/needle-and-chisel-scalers/170-pistol-needle/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "170PG : version à aiguilles de la série pistolet, à distinguer de la 170PG-CS à burin. Le fabricant donne 3 000 coups/min, une course de 35 mm et 314 mm de longueur pour les deux. La colonne de masse hors burin annonce 3 kg pour la PG, contre 2,4 pour la CS ; ce libellé ne garantit pas la masse de tout jeu d’aiguilles monté. Le tableau publie 156 L/min en charge sans pression de mesure appariée.",
		"verifiedFacts": [
			"Cadence : 3 000 coups/min.",
			"Alésage : 23 mm ; course : 35 mm.",
			"Longueur publiée : 314 mm.",
			"Masse publiée dans la colonne hors burin : 3 kg.",
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
				"october21-ingersoll-rand-170pg-model-table"
			]
		},
		{
			"label": "Alésage",
			"value": "23 mm ; course : 35 mm",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-model-table"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "314 mm",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-model-table"
			]
		},
		{
			"label": "Masse publiée dans la colonne hors burin",
			"value": "3 kg",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-model-table"
			]
		},
		{
			"label": "Consommation documentaire hors calcul",
			"value": "5,5 cfm / 156 L/min en charge ; pression de mesure non établie.",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-model-table"
			]
		},
		{
			"label": "Condition de pression",
			"value": "Non établie pour la mesure de consommation ; aucune consigne de famille transférée.",
			"evidenceIds": [
				"october21-ingersoll-rand-170pg-model-table"
			]
		}
	],
	"evidence": [
		{
			"id": "october21-ingersoll-rand-170pg-model-table",
			"sourceUrl": "https://powertools.ingersollrand.com/en-us/surface-preparation-finishing-tools/needle-and-chisel-scalers/170-pistol-needle/",
			"sourceLabel": "Ingersoll Rand, tableau officiel des modèles 170PG",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Tableau primaire lu par l’outil web ; ce lecteur expose une copie indexée et ne fournit pas de statut HTTP courant. Le transfert CLI429 reste consigné. La pression de mesure du débit n’est pas établie. La source de modèle documente explicitement le périmètre lu et l’absence de point de pression vérifiable ; le champ reste vide, jamais un nominal inventé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october21-ingersoll-rand-170pg-model-table"
		],
		"demandModel": [
			"october21-ingersoll-rand-170pg-model-table"
		],
		"demandExplanation": [
			"october21-ingersoll-rand-170pg-model-table"
		],
		"workingPressureBar": [
			"october21-ingersoll-rand-170pg-model-table"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La page de modèle publie une consommation en charge, sans établir la pression de mesure. L’ancienne transcription de bibliothèque est retirée du calcul ; aucune suffisance d’alimentation n’est conclue."
};

export default product;
