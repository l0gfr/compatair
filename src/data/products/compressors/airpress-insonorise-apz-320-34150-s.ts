const product = {
	"id": "airpress-insonorise-apz-320-34150-s",
	"slug": "airpress-insonorise-apz-320-34150-s",
	"brand": "Airpress",
	"model": "insonorisé APZ 320",
	"mpn": "34150-S",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-insonorise-apz-320-34150-s.webp",
		"alt": "Repères techniques Airpress insonorisé APZ 320, référence 34150-S",
		"sourceUrl": "https://airpress.fr/compresseur-insonorise-apz-320-317-l-min-10-bar-3-ch-2-2-kw-24-l-230-v-34150-s",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress insonorisé APZ 320, référence 34150-S : cuve de 24 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 400 L/min, distinct du débit restitué.",
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
				"airpress-34150-s-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "317 L/min 5,283 L/s",
			"evidenceIds": [
				"airpress-34150-s-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "60/40",
			"evidenceIds": [
				"airpress-34150-s-20260926"
			]
		},
		{
			"label": "Poids",
			"value": "110 kg",
			"evidenceIds": [
				"airpress-34150-s-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-34150-s-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-34150-s-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-34150-s-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-insonorise-apz-320-317-l-min-10-bar-3-ch-2-2-kw-24-l-230-v-34150-s",
			"sourceLabel": "Airpress, fiche technique 34150-S, réf. 34150-S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-34150-s-20260926"
		],
		"tankLiters": [
			"airpress-34150-s-20260926"
		],
		"maxPressureBar": [
			"airpress-34150-s-20260926"
		],
		"fadCurve": [
			"airpress-34150-s-20260926"
		],
		"oilType": [
			"airpress-34150-s-20260926"
		],
		"intakeFlowLpm": [
			"airpress-34150-s-20260926"
		],
		"powerKw": [
			"airpress-34150-s-20260926"
		],
		"voltage": [
			"airpress-34150-s-20260926"
		],
		"phase": [
			"airpress-34150-s-20260926"
		],
		"ean": [
			"airpress-34150-s-20260926"
		],
		"dutyCycle": [
			"airpress-34150-s-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 400,
	"powerKw": 2.2,
	"voltage": "230 V / 50 Hz / 1 Ph",
	"phase": "single-phase",
	"ean": "8712418320923",
	"dutyCycle": 0.6,
	"variant": {
		"familyId": "airpress-insonorise-apz-320",
		"label": "Référence 34150-S",
		"distinguishingAttributes": {
			"reference": "34150-S"
		}
	}
};

export default product;
