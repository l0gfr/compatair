import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-silencieux-sans-huile-lmo-3-190",
	"slug": "airpress-silencieux-sans-huile-lmo-3-190",
	"brand": "Airpress",
	"model": "silencieux sans huile LMO 3-190",
	"mpn": "36747",
	"tankLiters": 3,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-silencieux-sans-huile-lmo-3-190.webp",
		"alt": "Repères techniques Airpress silencieux sans huile LMO 3-190, référence 36747",
		"sourceUrl": "https://airpress.fr/compresseur-silencieux-sans-huile-lmo-3-190-152-l-min-3-l-8-bar-0-7-ch-0-5-kw-12-v-36747",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress silencieux sans huile LMO 3-190, référence 36747 : cuve de 3 L, pression maximale publiée de 8 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 0,5 kW.",
			"Débit aspiré : 190 L/min, distinct du débit restitué.",
			"Alimentation publiée : 12 V."
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
				"airpress-36747-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "152 L/min 2,533 L/s",
			"evidenceIds": [
				"airpress-36747-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "20/80",
			"evidenceIds": [
				"airpress-36747-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "13 kg",
			"evidenceIds": [
				"airpress-36747-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36747-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36747-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36747-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-silencieux-sans-huile-lmo-3-190-152-l-min-3-l-8-bar-0-7-ch-0-5-kw-12-v-36747",
			"sourceLabel": "Airpress, fiche technique 36747, réf. 36747",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36747-20260926"
		],
		"tankLiters": [
			"airpress-36747-20260926"
		],
		"maxPressureBar": [
			"airpress-36747-20260926"
		],
		"fadCurve": [
			"airpress-36747-20260926"
		],
		"oilType": [
			"airpress-36747-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36747-20260926"
		],
		"powerKw": [
			"airpress-36747-20260926"
		],
		"voltage": [
			"airpress-36747-20260926"
		],
		"ean": [
			"airpress-36747-20260926"
		],
		"dutyCycle": [
			"airpress-36747-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 190,
	"powerKw": 0.5,
	"voltage": "12 V",
	"ean": "8712418257373",
	"dutyCycle": 0.2
};

export default product;
