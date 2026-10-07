import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-insonorise-apz-600-270",
	"slug": "airpress-insonorise-apz-600-270",
	"brand": "Airpress",
	"model": "insonorisé APZ 600-270",
	"mpn": "34351-270",
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-insonorise-apz-600-270.webp",
		"alt": "Repères techniques Airpress insonorisé APZ 600-270, référence 34351-270",
		"sourceUrl": "https://airpress.fr/compresseur-insonorise-apz-600-270-10-bar-5-5-ch-4-kw-465-l-min-270-l-400-v-34351-270",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress insonorisé APZ 600-270, référence 34351-270 : cuve de 270 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons.",
			"Débit aspiré : 662 L/min, distinct du débit restitué.",
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
				"airpress-34351-270-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "465 L/min 7,75 L/s",
			"evidenceIds": [
				"airpress-34351-270-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "60/40",
			"evidenceIds": [
				"airpress-34351-270-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "248 kg",
			"evidenceIds": [
				"airpress-34351-270-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-34351-270-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-34351-270-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-34351-270-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-insonorise-apz-600-270-10-bar-5-5-ch-4-kw-465-l-min-270-l-400-v-34351-270",
			"sourceLabel": "Airpress, fiche technique 34351-270, réf. 34351-270",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-34351-270-20260926"
		],
		"tankLiters": [
			"airpress-34351-270-20260926"
		],
		"maxPressureBar": [
			"airpress-34351-270-20260926"
		],
		"fadCurve": [
			"airpress-34351-270-20260926"
		],
		"oilType": [
			"airpress-34351-270-20260926"
		],
		"intakeFlowLpm": [
			"airpress-34351-270-20260926"
		],
		"voltage": [
			"airpress-34351-270-20260926"
		],
		"phase": [
			"airpress-34351-270-20260926"
		],
		"ean": [
			"airpress-34351-270-20260926"
		],
		"dutyCycle": [
			"airpress-34351-270-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 662,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418413779",
	"dutyCycle": 0.6
};

export default product;
