import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-silencieux-sans-huile-a-6-cylindres-lmo-90-380",
	"slug": "airpress-silencieux-sans-huile-a-6-cylindres-lmo-90-380",
	"brand": "Airpress",
	"model": "silencieux sans huile à 6 cylindres LMO 90-380",
	"mpn": "36537",
	"tankLiters": 90,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-silencieux-sans-huile-a-6-cylindres-lmo-90-380.webp",
		"alt": "Repères techniques Airpress silencieux sans huile à 6 cylindres LMO 90-380, référence 36537",
		"sourceUrl": "https://airpress.fr/compresseur-silencieux-sans-huile-a-6-cylindres-lmo-90-380-8-bar-3-ch-3-x-1-ch-2-25-kw-280-l-min-90-l-230-v-36537",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress silencieux sans huile à 6 cylindres LMO 90-380, référence 36537 : cuve de 90 L, pression maximale publiée de 8 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 2,25 kW.",
			"Débit aspiré : 388 L/min, distinct du débit restitué.",
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
				"airpress-36537-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "280 L/min 4,667 L/s",
			"evidenceIds": [
				"airpress-36537-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 6 bar (L/min) ; pression de mesure non précisée",
			"value": "160 L/min 2,667 L/s",
			"evidenceIds": [
				"airpress-36537-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 8 bar (L/min) ; pression de mesure non précisée",
			"value": "140 L/min 2,333 L/s",
			"evidenceIds": [
				"airpress-36537-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "20/80",
			"evidenceIds": [
				"airpress-36537-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "48 kg",
			"evidenceIds": [
				"airpress-36537-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36537-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36537-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36537-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-silencieux-sans-huile-a-6-cylindres-lmo-90-380-8-bar-3-ch-3-x-1-ch-2-25-kw-280-l-min-90-l-230-v-36537",
			"sourceLabel": "Airpress, fiche technique 36537, réf. 36537",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36537-20260926"
		],
		"tankLiters": [
			"airpress-36537-20260926"
		],
		"maxPressureBar": [
			"airpress-36537-20260926"
		],
		"fadCurve": [
			"airpress-36537-20260926"
		],
		"oilType": [
			"airpress-36537-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36537-20260926"
		],
		"powerKw": [
			"airpress-36537-20260926"
		],
		"voltage": [
			"airpress-36537-20260926"
		],
		"phase": [
			"airpress-36537-20260926"
		],
		"ean": [
			"airpress-36537-20260926"
		],
		"dutyCycle": [
			"airpress-36537-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 388,
	"powerKw": 2.25,
	"voltage": "230 V / 50 Hz / 1 Ph",
	"phase": "single-phase",
	"ean": "8712418428308",
	"dutyCycle": 0.2
};

export default product;
