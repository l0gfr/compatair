import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-mini-compresseur-silencieux-sans-huile-l-6-105",
	"slug": "airpress-mini-compresseur-silencieux-sans-huile-l-6-105",
	"brand": "Airpress",
	"model": "Mini compresseur silencieux sans huile L 6-105",
	"mpn": "36738",
	"tankLiters": 6,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-mini-compresseur-silencieux-sans-huile-l-6-105.webp",
		"alt": "Repères techniques Airpress Mini compresseur silencieux sans huile L 6-105, référence 36738",
		"sourceUrl": "https://airpress.fr/mini-compresseur-silencieux-sans-huile-l-6-105-8-bar-0-7-ch-0-5-kw-48-l-min-6-l-230-v-36738",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress Mini compresseur silencieux sans huile L 6-105, référence 36738 : cuve de 6 L, pression maximale publiée de 8 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 0,55 kW.",
			"Débit aspiré : 90 L/min, distinct du débit restitué.",
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
				"airpress-36738-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "48 L/min",
			"evidenceIds": [
				"airpress-36738-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "20/80",
			"evidenceIds": [
				"airpress-36738-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "15 kg",
			"evidenceIds": [
				"airpress-36738-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36738-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36738-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36738-20260926",
			"sourceUrl": "https://airpress.fr/mini-compresseur-silencieux-sans-huile-l-6-105-8-bar-0-7-ch-0-5-kw-48-l-min-6-l-230-v-36738",
			"sourceLabel": "Airpress, fiche technique 36738, réf. 36738",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36738-20260926"
		],
		"tankLiters": [
			"airpress-36738-20260926"
		],
		"maxPressureBar": [
			"airpress-36738-20260926"
		],
		"fadCurve": [
			"airpress-36738-20260926"
		],
		"oilType": [
			"airpress-36738-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36738-20260926"
		],
		"powerKw": [
			"airpress-36738-20260926"
		],
		"voltage": [
			"airpress-36738-20260926"
		],
		"phase": [
			"airpress-36738-20260926"
		],
		"ean": [
			"airpress-36738-20260926"
		],
		"dutyCycle": [
			"airpress-36738-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 90,
	"powerKw": 0.55,
	"voltage": "230 V / 50 Hz / 1 Ph",
	"phase": "single-phase",
	"ean": "8712418298215",
	"dutyCycle": 0.2
};

export default product;
