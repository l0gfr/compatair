import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-ecopower-25b-dry",
	"slug": "airpress-ecopower-25b-dry",
	"brand": "Airpress",
	"model": "EcoPower 25B Dry",
	"mpn": "36678525",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-ecopower-25b-dry.webp",
		"alt": "Repères techniques Airpress EcoPower 25B Dry, référence 36678525",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-ecopower-25b-dry-10-bar-25-ch-18-5-kw-2700-l-min-36678525",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress EcoPower 25B Dry, référence 36678525 : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 18,5 kW.",
			"Alimentation publiée : 400 V / 50 Hz / 3 Ph, triphasée."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche est celui déclaré par le fabricant ; les conditions de cycle et de température restent à respecter. La disponibilité commerciale reste à confirmer.",
			"La pression maximale du compresseur n’est pas utilisée comme pression de mesure implicite du débit.",
			"La compatibilité nécessite un débit restitué documenté à la pression de l’outil."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité.",
			"evidenceIds": [
				"airpress-36678525-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "2 700 L/min 45 L/s",
			"evidenceIds": [
				"airpress-36678525-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-36678525-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "377 kg",
			"evidenceIds": [
				"airpress-36678525-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36678525-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-36678525-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-36678525-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ES 4000 CONNECT",
			"evidenceIds": [
				"airpress-36678525-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36678525-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-ecopower-25b-dry-10-bar-25-ch-18-5-kw-2700-l-min-36678525",
			"sourceLabel": "Airpress, fiche technique 36678525, réf. 36678525",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36678525-20260926"
		],
		"tankLiters": [
			"airpress-36678525-20260926"
		],
		"maxPressureBar": [
			"airpress-36678525-20260926"
		],
		"fadCurve": [
			"airpress-36678525-20260926"
		],
		"oilType": [
			"airpress-36678525-20260926"
		],
		"powerKw": [
			"airpress-36678525-20260926"
		],
		"voltage": [
			"airpress-36678525-20260926"
		],
		"phase": [
			"airpress-36678525-20260926"
		],
		"ean": [
			"airpress-36678525-20260926"
		],
		"dutyCycle": [
			"airpress-36678525-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 18.5,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418423419",
	"dutyCycle": 1
};

export default product;
