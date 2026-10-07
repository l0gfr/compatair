import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-premiumpower-15-td500",
	"slug": "airpress-premiumpower-15-td500",
	"brand": "Airpress",
	"model": "PremiumPower 15 TD500",
	"mpn": "369213-IVR-G3",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-premiumpower-15-td500.webp",
		"alt": "Repères techniques Airpress PremiumPower 15 TD500, référence 369213-IVR-G3",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-premiumpower-15-td500-15-ch-11-kw-591-1701-l-min-500-l-369213-ivr-g3",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress PremiumPower 15 TD500, référence 369213-IVR-G3 : cuve de 500 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
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
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 7 bar (L/min) ; pression de mesure non précisée",
			"value": "1 719 L/min 28,65 L/s",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 8 bar (L/min) ; pression de mesure non précisée",
			"value": "1 701 L/min 28,35 L/s",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 10 bar (L/min) ; pression de mesure non précisée",
			"value": "1 579 L/min 26,317 L/s",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Débit d'air restitué min. (L/min) ; pression de mesure non précisée",
			"value": "591 L/min 9,85 L/s",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Débit d'air restitué max. (L/min) ; pression de mesure non précisée",
			"value": "1 701 L/min 28,35 L/s",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "457 kg",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Oui",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "AirVision One",
			"evidenceIds": [
				"airpress-369213-ivr-g3-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-369213-ivr-g3-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-premiumpower-15-td500-15-ch-11-kw-591-1701-l-min-500-l-369213-ivr-g3",
			"sourceLabel": "Airpress, fiche technique 369213-IVR-G3, réf. 369213-IVR-G3",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-369213-ivr-g3-20260926"
		],
		"tankLiters": [
			"airpress-369213-ivr-g3-20260926"
		],
		"maxPressureBar": [
			"airpress-369213-ivr-g3-20260926"
		],
		"fadCurve": [
			"airpress-369213-ivr-g3-20260926"
		],
		"oilType": [
			"airpress-369213-ivr-g3-20260926"
		],
		"powerKw": [
			"airpress-369213-ivr-g3-20260926"
		],
		"voltage": [
			"airpress-369213-ivr-g3-20260926"
		],
		"phase": [
			"airpress-369213-ivr-g3-20260926"
		],
		"ean": [
			"airpress-369213-ivr-g3-20260926"
		],
		"dutyCycle": [
			"airpress-369213-ivr-g3-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 11,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418441352",
	"dutyCycle": 1
};

export default product;
