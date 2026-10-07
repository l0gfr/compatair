import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-9-basic-combi-dry-g2",
	"slug": "airpress-aps-9-basic-combi-dry-g2",
	"brand": "Airpress",
	"model": "APS 9 Basic Combi Dry G2",
	"mpn": "362959",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-9-basic-combi-dry-g2.webp",
		"alt": "Repères techniques Airpress APS 9 Basic Combi Dry G2, référence 362959",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-9-basic-combi-dry-g2-10-bar-10-ch-7-5-kw-984-l-min-500-l-362959",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS 9 Basic Combi Dry G2, référence 362959 : cuve de 500 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 7,5 kW.",
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
				"airpress-362959-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "984 L/min 16,4 L/s",
			"evidenceIds": [
				"airpress-362959-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-362959-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "296 kg",
			"evidenceIds": [
				"airpress-362959-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-362959-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-362959-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-362959-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ON/OFF",
			"evidenceIds": [
				"airpress-362959-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-362959-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-9-basic-combi-dry-g2-10-bar-10-ch-7-5-kw-984-l-min-500-l-362959",
			"sourceLabel": "Airpress, fiche technique 362959, réf. 362959",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-362959-20260926"
		],
		"tankLiters": [
			"airpress-362959-20260926"
		],
		"maxPressureBar": [
			"airpress-362959-20260926"
		],
		"fadCurve": [
			"airpress-362959-20260926"
		],
		"oilType": [
			"airpress-362959-20260926"
		],
		"powerKw": [
			"airpress-362959-20260926"
		],
		"voltage": [
			"airpress-362959-20260926"
		],
		"phase": [
			"airpress-362959-20260926"
		],
		"ean": [
			"airpress-362959-20260926"
		],
		"dutyCycle": [
			"airpress-362959-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 7.5,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418400014",
	"dutyCycle": 1
};

export default product;
