import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-hk-600-90-pro",
	"slug": "airpress-hk-600-90-pro",
	"brand": "Airpress",
	"model": "HK 600-90 Pro",
	"mpn": "360670",
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-hk-600-90-pro.webp",
		"alt": "Repères techniques Airpress HK 600-90 Pro, référence 360670",
		"sourceUrl": "https://airpress.fr/compresseur-hk-600-90-pro-10-bar-4-ch-3-kw-368-l-min-90-l-400-v-360670",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress HK 600-90 Pro, référence 360670 : cuve de 90 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
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
				"airpress-360670-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "368 L/min 6,133 L/s",
			"evidenceIds": [
				"airpress-360670-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-360670-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "78 kg",
			"evidenceIds": [
				"airpress-360670-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-360670-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-360670-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-360670-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-hk-600-90-pro-10-bar-4-ch-3-kw-368-l-min-90-l-400-v-360670",
			"sourceLabel": "Airpress, fiche technique 360670, réf. 360670",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-360670-20260926"
		],
		"tankLiters": [
			"airpress-360670-20260926"
		],
		"maxPressureBar": [
			"airpress-360670-20260926"
		],
		"fadCurve": [
			"airpress-360670-20260926"
		],
		"oilType": [
			"airpress-360670-20260926"
		],
		"intakeFlowLpm": [
			"airpress-360670-20260926"
		],
		"powerKw": [
			"airpress-360670-20260926"
		],
		"voltage": [
			"airpress-360670-20260926"
		],
		"phase": [
			"airpress-360670-20260926"
		],
		"ean": [
			"airpress-360670-20260926"
		],
		"dutyCycle": [
			"airpress-360670-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 480,
	"powerKw": 3,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418332674",
	"dutyCycle": 0.5
};

export default product;
