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
		"overview": "7P24L : polisseuse à levier, 2 400 tr/min et bonnet de 7 pouces sur sortie 5/8-11. La 7S48L de la même notice utilise un plateau de ponçage et tourne à 4 800 tr/min. La page régionale du fabricant nomme bien 7P24L sans suffixe EU et donne 439 L/min en charge. La fonction et la vitesse distinguent ces deux références ; les valeurs d’une variante EU ne lui sont pas transférées.",
		"verifiedFacts": [
			"Puissance publiée : 0,8 hp / 0,6 kW.",
			"Vitesse à vide : 2 400 tr/min.",
			"Échappement : latéral.",
			"Sortie : 5/8-11 ; bonnet de 7 pouces.",
			"Consommation en charge documentaire : 15,5 cfm / 439 L/min, sans pression de mesure appariée."
		],
		"limitations": [
			"La consommation reste hors du calcul de compatibilité : la pression de mesure et les conditions volumétriques complètes ne sont pas établies.",
			"La bibliothèque ancienne répond429 ; son fragment de page n’est pas un document PDF. Ses transcriptions antérieures restent dans l’historique, sans être traitées comme des valeurs confirmées.",
			"Lecture documentaire sans essai physique. Le lecteur web ne prouve ni disponibilité commerciale actuelle ni conformité de la fourniture en France.",
			"Le flexible minimal est donné à8mm sur la page et3/8pouce(9,3mm) dans la notice. Cette divergence doit être résolue avec le montage livré ; aucun diamètre universel n’est conseillé."
		]
	},
	"specifications": [
		{
			"label": "Puissance publiée",
			"value": "0,8 hp / 0,6 kW",
			"evidenceIds": [
				"october21-ingersoll-rand-7p24l-model-table"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 400 tr/min",
			"evidenceIds": [
				"october21-ingersoll-rand-7p24l-model-table"
			]
		},
		{
			"label": "Échappement",
			"value": "latéral",
			"evidenceIds": [
				"october21-ingersoll-rand-7p24l-model-table"
			]
		},
		{
			"label": "Sortie",
			"value": "5/8-11 ; bonnet de 7 pouces",
			"evidenceIds": [
				"october21-ingersoll-rand-7p24l-model-table"
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
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La page de modèle publie une consommation en charge, sans établir la pression de mesure. L’ancienne transcription de bibliothèque est retirée du calcul ; aucune suffisance d’alimentation n’est conclue."
};

export default product;
