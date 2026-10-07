import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-g-2000-500-sd-pro",
	"slug": "airpress-g-2000-500-sd-pro",
	"brand": "Airpress",
	"model": "G 2000-500 SD Pro",
	"mpn": "369675",
	"tankLiters": 500,
	"maxPressureBar": 11,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-g-2000-500-sd-pro.webp",
		"alt": "Repères techniques Airpress G 2000-500 SD Pro, référence 369675",
		"sourceUrl": "https://airpress.fr/compresseur-g-2000-500-sd-pro-11-bar-15-ch-11-kw-1393-l-min-500-l-cuve-galvanisee-400-v-369675",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress G 2000-500 SD Pro, référence 369675 : cuve de 500 L, pression maximale publiée de 11 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 11 kW.",
			"Débit aspiré : 1 L/min, distinct du débit restitué.",
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
				"airpress-369675-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "1 393 L/min 23,217 L/s",
			"evidenceIds": [
				"airpress-369675-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-369675-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "364 kg",
			"evidenceIds": [
				"airpress-369675-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Oui",
			"evidenceIds": [
				"airpress-369675-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-369675-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-369675-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-g-2000-500-sd-pro-11-bar-15-ch-11-kw-1393-l-min-500-l-cuve-galvanisee-400-v-369675",
			"sourceLabel": "Airpress, fiche technique 369675, réf. 369675",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-369675-20260926"
		],
		"tankLiters": [
			"airpress-369675-20260926"
		],
		"maxPressureBar": [
			"airpress-369675-20260926"
		],
		"fadCurve": [
			"airpress-369675-20260926"
		],
		"oilType": [
			"airpress-369675-20260926"
		],
		"intakeFlowLpm": [
			"airpress-369675-20260926"
		],
		"powerKw": [
			"airpress-369675-20260926"
		],
		"voltage": [
			"airpress-369675-20260926"
		],
		"phase": [
			"airpress-369675-20260926"
		],
		"ean": [
			"airpress-369675-20260926"
		],
		"dutyCycle": [
			"airpress-369675-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 1,
	"powerKw": 11,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418334234",
	"dutyCycle": 0.5
};

export default product;
