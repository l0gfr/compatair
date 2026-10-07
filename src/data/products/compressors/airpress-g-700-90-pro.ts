import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-g-700-90-pro",
	"slug": "airpress-g-700-90-pro",
	"brand": "Airpress",
	"model": "G 700-90 Pro",
	"mpn": "369640",
	"tankLiters": 90,
	"maxPressureBar": 11,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-g-700-90-pro.webp",
		"alt": "Repères techniques Airpress G 700-90 Pro, référence 369640",
		"sourceUrl": "https://airpress.fr/compresseur-g-700-90-pro-11-bar-5-5-ch-4-kw-476-l-min-90-l-cuve-galvanisee-400-v-369640",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress G 700-90 Pro, référence 369640 : cuve de 90 L, pression maximale publiée de 11 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 4 kW.",
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
				"airpress-369640-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "476 L/min 7,933 L/s",
			"evidenceIds": [
				"airpress-369640-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-369640-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "90 kg",
			"evidenceIds": [
				"airpress-369640-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Oui",
			"evidenceIds": [
				"airpress-369640-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-369640-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-369640-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-g-700-90-pro-11-bar-5-5-ch-4-kw-476-l-min-90-l-cuve-galvanisee-400-v-369640",
			"sourceLabel": "Airpress, fiche technique 369640, réf. 369640",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-369640-20260926"
		],
		"tankLiters": [
			"airpress-369640-20260926"
		],
		"maxPressureBar": [
			"airpress-369640-20260926"
		],
		"fadCurve": [
			"airpress-369640-20260926"
		],
		"oilType": [
			"airpress-369640-20260926"
		],
		"intakeFlowLpm": [
			"airpress-369640-20260926"
		],
		"powerKw": [
			"airpress-369640-20260926"
		],
		"voltage": [
			"airpress-369640-20260926"
		],
		"phase": [
			"airpress-369640-20260926"
		],
		"ean": [
			"airpress-369640-20260926"
		],
		"dutyCycle": [
			"airpress-369640-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 662,
	"powerKw": 4,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418380958",
	"dutyCycle": 0.5
};

export default product;
