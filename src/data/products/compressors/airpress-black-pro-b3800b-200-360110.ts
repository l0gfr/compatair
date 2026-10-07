import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-black-pro-b3800b-200-360110",
	"slug": "airpress-black-pro-b3800b-200-360110",
	"brand": "Airpress",
	"model": "Black Pro B3800B/200",
	"mpn": "360110",
	"tankLiters": 200,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-black-pro-b3800b-200-360110.webp",
		"alt": "Repères techniques Airpress Black Pro B3800B/200, référence 360110",
		"sourceUrl": "https://airpress.fr/compresseur-a-deux-cylindres-black-pro-b3800b-200-200-l-10-bar-4-hp-3-kw-368-2-l-min-400-v-360110",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress Black Pro B3800B/200, référence 360110 : cuve de 200 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 3 kW.",
			"Débit aspiré : 480 L/min, distinct du débit restitué.",
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
				"airpress-360110-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "368,2 L/min 6,137 L/s",
			"evidenceIds": [
				"airpress-360110-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-360110-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "121 kg",
			"evidenceIds": [
				"airpress-360110-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-360110-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-360110-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-360110-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-deux-cylindres-black-pro-b3800b-200-200-l-10-bar-4-hp-3-kw-368-2-l-min-400-v-360110",
			"sourceLabel": "Airpress, fiche technique 360110, réf. 360110",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-360110-20260926"
		],
		"tankLiters": [
			"airpress-360110-20260926"
		],
		"maxPressureBar": [
			"airpress-360110-20260926"
		],
		"fadCurve": [
			"airpress-360110-20260926"
		],
		"oilType": [
			"airpress-360110-20260926"
		],
		"intakeFlowLpm": [
			"airpress-360110-20260926"
		],
		"powerKw": [
			"airpress-360110-20260926"
		],
		"voltage": [
			"airpress-360110-20260926"
		],
		"phase": [
			"airpress-360110-20260926"
		],
		"ean": [
			"airpress-360110-20260926"
		],
		"dutyCycle": [
			"airpress-360110-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 480,
	"powerKw": 3,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418413441",
	"dutyCycle": 0.5,
	"variant": {
		"familyId": "airpress-black-pro-b3800b-200",
		"label": "Référence 360110",
		"distinguishingAttributes": {
			"reference": "360110"
		}
	}
};

export default product;
