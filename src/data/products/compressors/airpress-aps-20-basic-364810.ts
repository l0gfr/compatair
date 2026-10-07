import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-20-basic-364810",
	"slug": "airpress-aps-20-basic-364810",
	"brand": "Airpress",
	"model": "APS 20 Basic",
	"mpn": "364810",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-20-basic-364810.webp",
		"alt": "Repères techniques Airpress APS 20 Basic, référence 364810",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-20-basic-10-bar-20-ch-15-kw-1680-l-min-364810",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS 20 Basic, référence 364810 : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 15 kW.",
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
				"airpress-364810-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "1 680 L/min 28 L/s",
			"evidenceIds": [
				"airpress-364810-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-364810-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "200 kg",
			"evidenceIds": [
				"airpress-364810-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-364810-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-364810-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-364810-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ES 4000 BASIC",
			"evidenceIds": [
				"airpress-364810-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-364810-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-20-basic-10-bar-20-ch-15-kw-1680-l-min-364810",
			"sourceLabel": "Airpress, fiche technique 364810, réf. 364810",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-364810-20260926"
		],
		"tankLiters": [
			"airpress-364810-20260926"
		],
		"maxPressureBar": [
			"airpress-364810-20260926"
		],
		"fadCurve": [
			"airpress-364810-20260926"
		],
		"oilType": [
			"airpress-364810-20260926"
		],
		"powerKw": [
			"airpress-364810-20260926"
		],
		"voltage": [
			"airpress-364810-20260926"
		],
		"phase": [
			"airpress-364810-20260926"
		],
		"ean": [
			"airpress-364810-20260926"
		],
		"dutyCycle": [
			"airpress-364810-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 15,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418347432",
	"dutyCycle": 1,
	"variant": {
		"familyId": "airpress-aps-20-basic",
		"label": "Référence 364810",
		"distinguishingAttributes": {
			"reference": "364810"
		}
	}
};

export default product;
