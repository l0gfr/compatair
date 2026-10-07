import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-75-ivr-x-g2",
	"slug": "airpress-aps-75-ivr-x-g2",
	"brand": "Airpress",
	"model": "APS 75 IVR X G2",
	"mpn": "369475-IVR-G2",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-75-ivr-x-g2.webp",
		"alt": "Repères techniques Airpress APS 75 IVR X G2, référence 369475-IVR-G2",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-75-ivr-x-g2-3030-10140-l-min-10-bar-75-ch-55-kw-369475-ivr-g2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS 75 IVR X G2, référence 369475-IVR-G2 : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 55 kW.",
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
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 7 bar (L/min) ; pression de mesure non précisée",
			"value": "10 140 L/min 169 L/s",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 8 bar (L/min) ; pression de mesure non précisée",
			"value": "9 660 L/min 161 L/s",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 9,5 bar (L/min) ; pression de mesure non précisée",
			"value": "8 770 L/min 146,167 L/s",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué min. (L/min) ; pression de mesure non précisée",
			"value": "3 030 L/min 50,5 L/s",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué max. (L/min) ; pression de mesure non précisée",
			"value": "10 140 L/min 169 L/s",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "1 240 kg 1,24 mt",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Oui",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "AirVision Touch",
			"evidenceIds": [
				"airpress-369475-ivr-g2-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-369475-ivr-g2-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-75-ivr-x-g2-3030-10140-l-min-10-bar-75-ch-55-kw-369475-ivr-g2",
			"sourceLabel": "Airpress, fiche technique 369475-IVR-G2, réf. 369475-IVR-G2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-369475-ivr-g2-20260926"
		],
		"tankLiters": [
			"airpress-369475-ivr-g2-20260926"
		],
		"maxPressureBar": [
			"airpress-369475-ivr-g2-20260926"
		],
		"fadCurve": [
			"airpress-369475-ivr-g2-20260926"
		],
		"oilType": [
			"airpress-369475-ivr-g2-20260926"
		],
		"powerKw": [
			"airpress-369475-ivr-g2-20260926"
		],
		"voltage": [
			"airpress-369475-ivr-g2-20260926"
		],
		"phase": [
			"airpress-369475-ivr-g2-20260926"
		],
		"ean": [
			"airpress-369475-ivr-g2-20260926"
		],
		"dutyCycle": [
			"airpress-369475-ivr-g2-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 55,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418432527",
	"dutyCycle": 1
};

export default product;
