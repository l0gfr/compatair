import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-ecopower-premium-15-pm-ivr",
	"slug": "airpress-ecopower-premium-15-pm-ivr",
	"brand": "Airpress",
	"model": "EcoPower Premium 15 PM IVR",
	"mpn": "36415-DD-PM",
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-ecopower-premium-15-pm-ivr.webp",
		"alt": "Repères techniques Airpress EcoPower Premium 15 PM IVR, référence 36415-DD-PM",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-ecopower-premium-15-pm-ivr-13-bar-15-ch-11-kw-276-a-1920-l-min-36415-dd-pm",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress EcoPower Premium 15 PM IVR, référence 36415-DD-PM : configuration sans cuve intégrée, pression maximale publiée de 13 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 11 kW.",
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
				"airpress-36415-dd-pm-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 7 bar (L/min) ; pression de mesure non précisée",
			"value": "1 920 L/min 32 L/s",
			"evidenceIds": [
				"airpress-36415-dd-pm-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 9,5 bar (L/min) ; pression de mesure non précisée",
			"value": "1 566 L/min 26,1 L/s",
			"evidenceIds": [
				"airpress-36415-dd-pm-20260926"
			]
		},
		{
			"label": "Débit d'air restitué min. (L/min) ; pression de mesure non précisée",
			"value": "276 L/min 4,6 L/s",
			"evidenceIds": [
				"airpress-36415-dd-pm-20260926"
			]
		},
		{
			"label": "Débit d'air restitué max. (L/min) ; pression de mesure non précisée",
			"value": "1 920 L/min 32 L/s",
			"evidenceIds": [
				"airpress-36415-dd-pm-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-36415-dd-pm-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "218 kg",
			"evidenceIds": [
				"airpress-36415-dd-pm-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36415-dd-pm-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36415-dd-pm-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Oui",
			"evidenceIds": [
				"airpress-36415-dd-pm-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ES 4000 T TOUCHSCREEN",
			"evidenceIds": [
				"airpress-36415-dd-pm-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36415-dd-pm-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-ecopower-premium-15-pm-ivr-13-bar-15-ch-11-kw-276-a-1920-l-min-36415-dd-pm",
			"sourceLabel": "Airpress, fiche technique 36415-DD-PM, réf. 36415-DD-PM",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36415-dd-pm-20260926"
		],
		"tankLiters": [
			"airpress-36415-dd-pm-20260926"
		],
		"maxPressureBar": [
			"airpress-36415-dd-pm-20260926"
		],
		"fadCurve": [
			"airpress-36415-dd-pm-20260926"
		],
		"oilType": [
			"airpress-36415-dd-pm-20260926"
		],
		"powerKw": [
			"airpress-36415-dd-pm-20260926"
		],
		"voltage": [
			"airpress-36415-dd-pm-20260926"
		],
		"phase": [
			"airpress-36415-dd-pm-20260926"
		],
		"ean": [
			"airpress-36415-dd-pm-20260926"
		],
		"dutyCycle": [
			"airpress-36415-dd-pm-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 11,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418425833",
	"dutyCycle": 1
};

export default product;
