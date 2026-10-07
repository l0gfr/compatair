import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-10-basic-364808-13",
	"slug": "airpress-aps-10-basic-364808-13",
	"brand": "Airpress",
	"model": "APS 10 Basic",
	"mpn": "364808-13",
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-10-basic-364808-13.webp",
		"alt": "Repères techniques Airpress APS 10 Basic, référence 364808-13",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-10-basic-13-bar-10-ch-7-5-kw-780-l-min-364808-13",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS 10 Basic, référence 364808-13 : configuration sans cuve intégrée, pression maximale publiée de 13 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
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
				"airpress-364808-13-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "780 L/min 13 L/s",
			"evidenceIds": [
				"airpress-364808-13-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-364808-13-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "170 kg",
			"evidenceIds": [
				"airpress-364808-13-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-364808-13-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-364808-13-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-364808-13-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ES 4000 BASIC",
			"evidenceIds": [
				"airpress-364808-13-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-364808-13-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-10-basic-13-bar-10-ch-7-5-kw-780-l-min-364808-13",
			"sourceLabel": "Airpress, fiche technique 364808-13, réf. 364808-13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-364808-13-20260926"
		],
		"tankLiters": [
			"airpress-364808-13-20260926"
		],
		"maxPressureBar": [
			"airpress-364808-13-20260926"
		],
		"fadCurve": [
			"airpress-364808-13-20260926"
		],
		"oilType": [
			"airpress-364808-13-20260926"
		],
		"powerKw": [
			"airpress-364808-13-20260926"
		],
		"voltage": [
			"airpress-364808-13-20260926"
		],
		"phase": [
			"airpress-364808-13-20260926"
		],
		"ean": [
			"airpress-364808-13-20260926"
		],
		"dutyCycle": [
			"airpress-364808-13-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 7.5,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418366396",
	"dutyCycle": 1,
	"variant": {
		"familyId": "airpress-aps-10-basic",
		"label": "Référence 364808-13",
		"distinguishingAttributes": {
			"reference": "364808-13"
		}
	}
};

export default product;
