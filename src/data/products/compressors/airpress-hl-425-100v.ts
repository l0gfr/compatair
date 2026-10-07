import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-hl-425-100v",
	"slug": "airpress-hl-425-100v",
	"brand": "Airpress",
	"model": "HL 425-100V",
	"mpn": "36834",
	"tankLiters": 100,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-hl-425-100v.webp",
		"alt": "Repères techniques Airpress HL 425-100V, référence 36834",
		"sourceUrl": "https://airpress.fr/compresseur-hl-425-100v-8-bar-3-ch-2-2-kw-260-l-min-100-l-36834",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress HL 425-100V, référence 36834 : cuve de 100 L, pression maximale publiée de 8 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 392 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz / 1 Ph, monophasée."
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
				"airpress-36834-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "260 L/min 4,333 L/s",
			"evidenceIds": [
				"airpress-36834-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "30/70",
			"evidenceIds": [
				"airpress-36834-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "57 kg",
			"evidenceIds": [
				"airpress-36834-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36834-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36834-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36834-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-hl-425-100v-8-bar-3-ch-2-2-kw-260-l-min-100-l-36834",
			"sourceLabel": "Airpress, fiche technique 36834, réf. 36834",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36834-20260926"
		],
		"tankLiters": [
			"airpress-36834-20260926"
		],
		"maxPressureBar": [
			"airpress-36834-20260926"
		],
		"fadCurve": [
			"airpress-36834-20260926"
		],
		"oilType": [
			"airpress-36834-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36834-20260926"
		],
		"powerKw": [
			"airpress-36834-20260926"
		],
		"voltage": [
			"airpress-36834-20260926"
		],
		"phase": [
			"airpress-36834-20260926"
		],
		"ean": [
			"airpress-36834-20260926"
		],
		"dutyCycle": [
			"airpress-36834-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 392,
	"powerKw": 2.2,
	"voltage": "230 V / 50 Hz / 1 Ph",
	"phase": "single-phase",
	"ean": "8712418298994",
	"dutyCycle": 0.3
};

export default product;
