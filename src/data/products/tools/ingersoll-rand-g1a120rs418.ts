import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ingersoll-rand-g1a120rs418",
	"slug": "ingersoll-rand-g1a120rs418",
	"brand": "Ingersoll Rand",
	"model": "G1A120RS418",
	"mpn": "G1A120RS418",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Ingersoll Rand G1A120RS418",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/ingersoll-rand-g1a120rs418.webp",
		"alt": "Repères techniques Ingersoll Rand G1A120RS418, référence G1A120RS418",
		"sourceUrl": "https://powertools.ingersollrand.com/en-us/surface-preparation-finishing-tools/sanders-polishers-buffers/g1-angle-sander/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "G1A120RS418 : le tableau officiel identifie la référence à 12 000 tr/min et 0,4 hp, mais oppose une bande de 1/4 × 18 pouces à 6 × 305 mm. Ces longueurs ne sont pas équivalentes. La référence de bande et le besoin d’air doivent être confirmés avant le choix ; aucune consommation de la bibliothèque inaccessible n’est utilisée pour produire un verdict.",
		"verifiedFacts": [
			"Référence du tableau : G1A120RS418.",
			"Puissance publiée : 0,4 hp / 0,3 kW.",
			"Vitesse à vide publiée : 12 000 tr/min.",
			"Échappement : arrière."
		],
		"limitations": [
			"La dimension de bande est contradictoire dans la même ligne et n’est pas arbitrée. Cette page reste en attente d’admission.",
			"Le tableau accessible ne publie pas de débit d’air. Les anciens19cfm et6,2bar ne sont pas reconfirmés depuis la bibliothèque qui répond429.",
			"Le document produit lié par la famille porte sur les meuleusesG1 ; il ne confirme pas la bande de cette référence.",
			"Lecture documentaire sans essai physique ; disponibilité et configuration effectivement livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Puissance publiée",
			"value": "0,4 hp / 0,3 kW",
			"evidenceIds": [
				"october21-ingersoll-rand-g1a120rs418-model-table"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"october21-ingersoll-rand-g1a120rs418-model-table"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"october21-ingersoll-rand-g1a120rs418-model-table"
			]
		},
		{
			"label": "Dimension de bande non résolue",
			"value": "Tableau : 1/4 × 18 pouces et 6 × 305 mm ; longueurs non équivalentes.",
			"evidenceIds": [
				"october21-ingersoll-rand-g1a120rs418-model-table"
			]
		},
		{
			"label": "Consommation et pression de mesure",
			"value": "Non établies dans la source accessible ; données anciennes retirées du calcul.",
			"evidenceIds": [
				"october21-ingersoll-rand-g1a120rs418-model-table"
			]
		}
	],
	"evidence": [
		{
			"id": "october21-ingersoll-rand-g1a120rs418-model-table",
			"sourceUrl": "https://powertools.ingersollrand.com/en-us/surface-preparation-finishing-tools/sanders-polishers-buffers/g1-angle-sander/",
			"sourceLabel": "Ingersoll Rand, tableau officiel G1 Series Angle and Belt Air Sanders",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-21",
			"confidence": "A",
			"notes": "Tableau primaire lu par l’outil web, copie indexée il y a3semaines ; aucun statutHTTP courant n’est établi. La ligneG1A120RS418 oppose1/4×18pouces à6×305mm. Aucune dimension unique de bande n’est arbitrée ; le transfertCLI429 reste consigné. La source de modèle documente explicitement le périmètre lu et l’absence de point de pression vérifiable ; le champ reste vide, jamais un nominal inventé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october21-ingersoll-rand-g1a120rs418-model-table"
		],
		"demandModel": [
			"october21-ingersoll-rand-g1a120rs418-model-table"
		],
		"demandExplanation": [
			"october21-ingersoll-rand-g1a120rs418-model-table"
		],
		"workingPressureBar": [
			"october21-ingersoll-rand-g1a120rs418-model-table"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le tableau de modèle accessible ne publie pas de consommation d’air ni de pression de mesure. L’ancienne transcription de bibliothèque est invérifiable et reste hors calcul."
};

export default product;
