import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-km-100-350",
	"slug": "airpress-km-100-350",
	"brand": "Airpress",
	"model": "KM 100-350",
	"mpn": "36507",
	"tankLiters": 100,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-km-100-350.webp",
		"alt": "Repères techniques Airpress KM 100-350, référence 36507",
		"sourceUrl": "https://airpress.fr/compresseur-km-100-350-10-bar-2-5-ch-1-8-kw-280-l-min-100-l-400-v-36507",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress KM 100-350, référence 36507 : cuve de 100 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 1,8 kW.",
			"Débit aspiré : 350 L/min, distinct du débit restitué.",
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
				"airpress-36507-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "280 L/min 4,667 L/s",
			"evidenceIds": [
				"airpress-36507-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-36507-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "70 kg",
			"evidenceIds": [
				"airpress-36507-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36507-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36507-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36507-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-km-100-350-10-bar-2-5-ch-1-8-kw-280-l-min-100-l-400-v-36507",
			"sourceLabel": "Airpress, fiche technique 36507, réf. 36507",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36507-20260926"
		],
		"tankLiters": [
			"airpress-36507-20260926"
		],
		"maxPressureBar": [
			"airpress-36507-20260926"
		],
		"fadCurve": [
			"airpress-36507-20260926"
		],
		"oilType": [
			"airpress-36507-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36507-20260926"
		],
		"powerKw": [
			"airpress-36507-20260926"
		],
		"voltage": [
			"airpress-36507-20260926"
		],
		"phase": [
			"airpress-36507-20260926"
		],
		"ean": [
			"airpress-36507-20260926"
		],
		"dutyCycle": [
			"airpress-36507-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 350,
	"powerKw": 1.8,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418007046",
	"dutyCycle": 0.5
};

export default product;
