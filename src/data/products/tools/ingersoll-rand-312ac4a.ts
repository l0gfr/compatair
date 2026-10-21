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
		"overview": "312AC4A : meuleuse d’angle à 12 000 tr/min et 0,40 hp, contre 20 000 tr/min pour la 320AC4A voisine de même puissance. La fiche indique une pince de 1/4 pouce, 170 mm de longueur et 908 L/min en charge. La notice distingue aussi les montages de pince de 6 mm : ils ne sont pas déclarés interchangeables par arrondi. La vitesse admissible de la fraise et la pince précèdent le bilan d’air.",
		"verifiedFacts": [
			"Puissance publiée : 0,40 hp / 0,30 kW.",
			"Vitesse à vide : 12 000 tr/min.",
			"Échappement : arrière.",
			"Pince de la ligne produit : 1/4 pouce.",
			"Consommation en charge documentaire : 32 cfm / 908 L/min, sans pression de mesure appariée."
		],
		"limitations": [
			"La consommation reste hors du calcul de compatibilité : la pression de mesure et les conditions volumétriques complètes ne sont pas établies.",
			"La bibliothèque ancienne répond429 ; son fragment de page n’est pas un document PDF. Ses transcriptions antérieures restent dans l’historique, sans être traitées comme des valeurs confirmées.",
			"Lecture documentaire sans essai physique. Le lecteur web ne prouve ni disponibilité commerciale actuelle ni conformité de la fourniture en France.",
			"Les 908 L/min sont imprimés par le fabricant ; ils ne sont pas remplacés par une conversion plus précise des 32 cfm. Aucune équivalence de pince1/4pouce/6mm n’est supposée."
		]
	},
	"specifications": [
		{
			"label": "Puissance publiée",
			"value": "0,40 hp / 0,30 kW",
			"evidenceIds": [
				"october21-ingersoll-rand-312ac4a-model-table"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"october21-ingersoll-rand-312ac4a-model-table"
			]
		},
		{
			"label": "Échappement",
			"value": "arrière",
			"evidenceIds": [
				"october21-ingersoll-rand-312ac4a-model-table"
			]
		},
		{
			"label": "Pince de la ligne produit",
			"value": "1/4 pouce",
			"evidenceIds": [
				"october21-ingersoll-rand-312ac4a-model-table"
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
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La page de modèle publie une consommation en charge, sans établir la pression de mesure. L’ancienne transcription de bibliothèque est retirée du calcul ; aucune suffisance d’alimentation n’est conclue."
};

export default product;
