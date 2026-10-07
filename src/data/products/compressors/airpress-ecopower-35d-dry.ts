import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-ecopower-35d-dry",
	"slug": "airpress-ecopower-35d-dry",
	"brand": "Airpress",
	"model": "EcoPower 35D Dry",
	"mpn": "36678534-D",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-ecopower-35d-dry.webp",
		"alt": "Repères techniques Airpress EcoPower 35D Dry, référence 36678534-D",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-ecopower-35d-dry-10-bar-35-ch-26-kw-3726-l-min-avec-secheur-a-entrainement-par-engrenage-36678534-d",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress EcoPower 35D Dry, référence 36678534-D : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 26 kW.",
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
				"airpress-36678534-d-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "3 726 L/min 62,1 L/s",
			"evidenceIds": [
				"airpress-36678534-d-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-36678534-d-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "435 kg",
			"evidenceIds": [
				"airpress-36678534-d-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36678534-d-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Par engrenages",
			"evidenceIds": [
				"airpress-36678534-d-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-36678534-d-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ES 4000 STANDARD",
			"evidenceIds": [
				"airpress-36678534-d-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36678534-d-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-ecopower-35d-dry-10-bar-35-ch-26-kw-3726-l-min-avec-secheur-a-entrainement-par-engrenage-36678534-d",
			"sourceLabel": "Airpress, fiche technique 36678534-D, réf. 36678534-D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36678534-d-20260926"
		],
		"tankLiters": [
			"airpress-36678534-d-20260926"
		],
		"maxPressureBar": [
			"airpress-36678534-d-20260926"
		],
		"fadCurve": [
			"airpress-36678534-d-20260926"
		],
		"oilType": [
			"airpress-36678534-d-20260926"
		],
		"powerKw": [
			"airpress-36678534-d-20260926"
		],
		"voltage": [
			"airpress-36678534-d-20260926"
		],
		"phase": [
			"airpress-36678534-d-20260926"
		],
		"ean": [
			"airpress-36678534-d-20260926"
		],
		"dutyCycle": [
			"airpress-36678534-d-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 26,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418424386",
	"dutyCycle": 1
};

export default product;
