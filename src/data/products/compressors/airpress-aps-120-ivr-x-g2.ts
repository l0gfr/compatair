import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-120-ivr-x-g2",
	"slug": "airpress-aps-120-ivr-x-g2",
	"brand": "Airpress",
	"model": "APS 120 IVR X G2",
	"mpn": "3694120-IVR-G2",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-120-ivr-x-g2.webp",
		"alt": "Repères techniques Airpress APS 120 IVR X G2, référence 3694120-IVR-G2",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-120-ivr-x-g2-4520-14910-l-min-10-bar-120-ch-90-kw-3694120-ivr-g2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS 120 IVR X G2, référence 3694120-IVR-G2 : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 90 kW.",
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
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 7 bar (L/min) ; pression de mesure non précisée",
			"value": "14 910 L/min 248,5 L/s",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 8 bar (L/min) ; pression de mesure non précisée",
			"value": "14 170 L/min 236,167 L/s",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 9,5 bar (L/min) ; pression de mesure non précisée",
			"value": "12 880 L/min 214,667 L/s",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué min. (L/min) ; pression de mesure non précisée",
			"value": "4 520 L/min 75,333 L/s",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué max. (L/min) ; pression de mesure non précisée",
			"value": "14 910 L/min 248,5 L/s",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "1 250 kg 1,25 mt",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Oui",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "AirVision Touch",
			"evidenceIds": [
				"airpress-3694120-ivr-g2-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-3694120-ivr-g2-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-120-ivr-x-g2-4520-14910-l-min-10-bar-120-ch-90-kw-3694120-ivr-g2",
			"sourceLabel": "Airpress, fiche technique 3694120-IVR-G2, réf. 3694120-IVR-G2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-3694120-ivr-g2-20260926"
		],
		"tankLiters": [
			"airpress-3694120-ivr-g2-20260926"
		],
		"maxPressureBar": [
			"airpress-3694120-ivr-g2-20260926"
		],
		"fadCurve": [
			"airpress-3694120-ivr-g2-20260926"
		],
		"oilType": [
			"airpress-3694120-ivr-g2-20260926"
		],
		"powerKw": [
			"airpress-3694120-ivr-g2-20260926"
		],
		"voltage": [
			"airpress-3694120-ivr-g2-20260926"
		],
		"phase": [
			"airpress-3694120-ivr-g2-20260926"
		],
		"ean": [
			"airpress-3694120-ivr-g2-20260926"
		],
		"dutyCycle": [
			"airpress-3694120-ivr-g2-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 90,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418433319",
	"dutyCycle": 1
};

export default product;
