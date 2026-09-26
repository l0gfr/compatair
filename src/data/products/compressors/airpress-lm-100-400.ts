const product = {
	"id": "airpress-lm-100-400",
	"slug": "airpress-lm-100-400",
	"brand": "Airpress",
	"model": "LM 100-400",
	"mpn": "36538-N",
	"tankLiters": 100,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-lm-100-400.webp",
		"alt": "Repères techniques Airpress LM 100-400, référence 36538-N",
		"sourceUrl": "https://airpress.fr/compresseur-lm-100-400-10-bar-3-ch-2-2-kw-320-l-min-100-l-3-cylindres-230-v-36538-n",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress LM 100-400, référence 36538-N : cuve de 100 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
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
				"airpress-36538-n-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "320 L/min 5,333 L/s",
			"evidenceIds": [
				"airpress-36538-n-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-36538-n-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "80 kg",
			"evidenceIds": [
				"airpress-36538-n-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36538-n-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-36538-n-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36538-n-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-lm-100-400-10-bar-3-ch-2-2-kw-320-l-min-100-l-3-cylindres-230-v-36538-n",
			"sourceLabel": "Airpress, fiche technique 36538-N, réf. 36538-N",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36538-n-20260926"
		],
		"tankLiters": [
			"airpress-36538-n-20260926"
		],
		"maxPressureBar": [
			"airpress-36538-n-20260926"
		],
		"fadCurve": [
			"airpress-36538-n-20260926"
		],
		"oilType": [
			"airpress-36538-n-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36538-n-20260926"
		],
		"powerKw": [
			"airpress-36538-n-20260926"
		],
		"voltage": [
			"airpress-36538-n-20260926"
		],
		"phase": [
			"airpress-36538-n-20260926"
		],
		"ean": [
			"airpress-36538-n-20260926"
		],
		"dutyCycle": [
			"airpress-36538-n-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 400,
	"powerKw": 2.2,
	"voltage": "230 V / 50 Hz / 1 Ph",
	"phase": "single-phase",
	"ean": "8712418305036",
	"dutyCycle": 0.5
};

export default product;
