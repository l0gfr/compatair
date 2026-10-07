import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-insonorise-apz-500-200",
	"slug": "airpress-insonorise-apz-500-200",
	"brand": "Airpress",
	"model": "insonorisé APZ 500-200",
	"mpn": "34251-200",
	"tankLiters": 200,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-insonorise-apz-500-200.webp",
		"alt": "Repères techniques Airpress insonorisé APZ 500-200, référence 34251-200",
		"sourceUrl": "https://airpress.fr/compresseur-insonorise-apz-500-200-10-bar-4-ch-3-kw-378-l-min-200-l-400-v-demarreur-y-34251-200",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress insonorisé APZ 500-200, référence 34251-200 : cuve de 200 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 3 kW.",
			"Débit aspiré : 540 L/min, distinct du débit restitué.",
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
				"airpress-34251-200-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "378 L/min 6,3 L/s",
			"evidenceIds": [
				"airpress-34251-200-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "60/40",
			"evidenceIds": [
				"airpress-34251-200-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "200 kg",
			"evidenceIds": [
				"airpress-34251-200-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-34251-200-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-34251-200-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-34251-200-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-insonorise-apz-500-200-10-bar-4-ch-3-kw-378-l-min-200-l-400-v-demarreur-y-34251-200",
			"sourceLabel": "Airpress, fiche technique 34251-200, réf. 34251-200",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-34251-200-20260926"
		],
		"tankLiters": [
			"airpress-34251-200-20260926"
		],
		"maxPressureBar": [
			"airpress-34251-200-20260926"
		],
		"fadCurve": [
			"airpress-34251-200-20260926"
		],
		"oilType": [
			"airpress-34251-200-20260926"
		],
		"intakeFlowLpm": [
			"airpress-34251-200-20260926"
		],
		"powerKw": [
			"airpress-34251-200-20260926"
		],
		"voltage": [
			"airpress-34251-200-20260926"
		],
		"phase": [
			"airpress-34251-200-20260926"
		],
		"ean": [
			"airpress-34251-200-20260926"
		],
		"dutyCycle": [
			"airpress-34251-200-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 540,
	"powerKw": 3,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418421569",
	"dutyCycle": 0.6
};

export default product;
