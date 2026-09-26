const product = {
	"id": "airpress-silencieux-lmo-25-250",
	"slug": "airpress-silencieux-lmo-25-250",
	"brand": "Airpress",
	"model": "silencieux LMO 25-250",
	"mpn": "36862",
	"tankLiters": 24,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-silencieux-lmo-25-250.webp",
		"alt": "Repères techniques Airpress silencieux LMO 25-250, référence 36862",
		"sourceUrl": "https://airpress.fr/compresseur-sans-huile-silencieux-lmo-25-250-8-bar-2-ch-1-5-kw-150-l-min-24-l-230-v-36862",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress silencieux LMO 25-250, référence 36862 : cuve de 24 L, pression maximale publiée de 8 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 245 L/min, distinct du débit restitué.",
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
				"airpress-36862-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "150 L/min 2,5 L/s",
			"evidenceIds": [
				"airpress-36862-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "20/80",
			"evidenceIds": [
				"airpress-36862-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "35 kg",
			"evidenceIds": [
				"airpress-36862-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36862-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36862-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36862-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-sans-huile-silencieux-lmo-25-250-8-bar-2-ch-1-5-kw-150-l-min-24-l-230-v-36862",
			"sourceLabel": "Airpress, fiche technique 36862, réf. 36862",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36862-20260926"
		],
		"tankLiters": [
			"airpress-36862-20260926"
		],
		"maxPressureBar": [
			"airpress-36862-20260926"
		],
		"fadCurve": [
			"airpress-36862-20260926"
		],
		"oilType": [
			"airpress-36862-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36862-20260926"
		],
		"powerKw": [
			"airpress-36862-20260926"
		],
		"voltage": [
			"airpress-36862-20260926"
		],
		"phase": [
			"airpress-36862-20260926"
		],
		"ean": [
			"airpress-36862-20260926"
		],
		"dutyCycle": [
			"airpress-36862-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 245,
	"powerKw": 1.5,
	"voltage": "230 V / 50 Hz / 1 Ph",
	"phase": "single-phase",
	"ean": "8712418400236",
	"dutyCycle": 0.2
};

export default product;
