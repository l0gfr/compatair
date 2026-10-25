import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-10-basic-combi-364858-13",
	"slug": "airpress-aps-10-basic-combi-364858-13",
	"brand": "Airpress",
	"model": "APS 10 Basic Combi",
	"mpn": "364858-13",
	"tankLiters": 500,
	"maxPressureBar": 13,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-10-basic-combi-364858-13.webp",
		"alt": "Repères techniques Airpress APS 10 Basic Combi, référence 364858-13",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-10-basic-combi-13-bar-10-ch-7-5-kw-780-l-min-500-l-364858-13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "L’APS 10 Basic Combi 364858-13 associe 7,5 kW et une cuve de 500 L, sans sécheur selon le tableau de cette référence. Sa plage de travail est de 5,5 à 13 bar, contre 5,5 à 10 bar pour le 364858. Airpress annonce respectivement des sorties estimées de 780 et 996 L/min et un cycle marche/arrêt de 100/0. La version 13 bar se choisit donc pour le besoin de pression ; ces estimations sans pression d’essai explicite ne permettent pas de comparer un débit utile à une même pression.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 7,5 kW.",
			"Alimentation publiée : 400 V / 50 Hz / 3 Ph, triphasée."
		],
		"limitations": [
			"La sortie est qualifiée d’estimation par le fabricant et dépend des conditions d’aspiration. Sa pression de mesure n’est pas précisée ; la courbe FAD reste vide.",
			"Le cycle 100/0 concerne bien la référence 364858-13. Il ne résout pas le manque de FAD qualifié et ne dispense pas des conditions de température, de refroidissement et de maintenance.",
			"Le tableau exact indique « Sécheur : Non ». Le traitement d’air requis au poste doit être prévu séparément."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité.",
			"evidenceIds": [
				"airpress-364858-13-20260926"
			]
		},
		{
			"label": "Sortie estimée publiée, pression de mesure non précisée",
			"value": "780 L/min (13 L/s), estimation fabricant selon le pied de tableau",
			"evidenceIds": [
				"review-20261025-s034"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-364858-13-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "267 kg",
			"evidenceIds": [
				"airpress-364858-13-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-364858-13-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-364858-13-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-364858-13-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ES 4000 BASIC",
			"evidenceIds": [
				"airpress-364858-13-20260926"
			]
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Choix entre deux configurations de pression à cuve et puissance identiques ; expliciter la sortie estimée et l’absence de sécheur pour éviter un dimensionnement ou achat erroné.",
			"evidenceIds": [
				"review-20261025-s034",
				"review-20261025-s035"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-364858-13-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-10-basic-combi-13-bar-10-ch-7-5-kw-780-l-min-500-l-364858-13",
			"sourceLabel": "Airpress, fiche technique 364858-13, réf. 364858-13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		},
		{
			"id": "review-20261025-s034",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-10-basic-combi-13-bar-10-ch-7-5-kw-780-l-min-500-l-364858-13",
			"sourceLabel": "Airpress, relecture primaire du 25 octobre 2026, s034",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 de87299c4db07c740cee5e1409721161a19d99efcb08336cad9b2ee94fce6b3d. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s035",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-10-basic-combi-10-bar-10-ch-7-5-kw-996l-min-500-l-364858",
			"sourceLabel": "Airpress, relecture primaire du 25 octobre 2026, s035",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 31d6e05da5ba1e1103675dd1e87f30d6939c3bcd7009b71a3e2835a9f3370c79. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-364858-13-20260926"
		],
		"tankLiters": [
			"airpress-364858-13-20260926"
		],
		"maxPressureBar": [
			"airpress-364858-13-20260926"
		],
		"oilType": [
			"airpress-364858-13-20260926"
		],
		"powerKw": [
			"airpress-364858-13-20260926"
		],
		"voltage": [
			"airpress-364858-13-20260926"
		],
		"phase": [
			"airpress-364858-13-20260926"
		],
		"ean": [
			"airpress-364858-13-20260926"
		],
		"dutyCycle": [
			"airpress-364858-13-20260926"
		],
		"fadCurve": [
			"review-20261025-s034",
			"review-20261025-s035"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 7.5,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418366372",
	"dutyCycle": 1,
	"variant": {
		"familyId": "airpress-aps-10-basic-combi",
		"label": "Référence 364858-13",
		"distinguishingAttributes": {
			"reference": "364858-13"
		}
	}
};

export default product;
