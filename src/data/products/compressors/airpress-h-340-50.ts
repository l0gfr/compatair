const product = {
	"id": "airpress-h-340-50",
	"slug": "airpress-h-340-50",
	"brand": "Airpress",
	"model": "H  340-50",
	"mpn": "36874",
	"tankLiters": 50,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-h-340-50.webp",
		"alt": "Repères techniques Airpress H  340-50, référence 36874",
		"sourceUrl": "https://airpress.fr/compresseur-h-340-50-10-bar-3-ch-2-2-kw-210-l-min-50-l-230-v-36874",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress H  340-50, référence 36874 : cuve de 50 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 352 L/min, distinct du débit restitué.",
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
				"airpress-36874-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "210 L/min 3,5 L/s",
			"evidenceIds": [
				"airpress-36874-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 6 bar (L/min) ; pression de mesure non précisée",
			"value": "190 L/min 3,167 L/s",
			"evidenceIds": [
				"airpress-36874-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 7 bar (L/min) ; pression de mesure non précisée",
			"value": "170 L/min 2,833 L/s",
			"evidenceIds": [
				"airpress-36874-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "30/70",
			"evidenceIds": [
				"airpress-36874-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "60 kg",
			"evidenceIds": [
				"airpress-36874-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36874-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-36874-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36874-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-h-340-50-10-bar-3-ch-2-2-kw-210-l-min-50-l-230-v-36874",
			"sourceLabel": "Airpress, fiche technique 36874, réf. 36874",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36874-20260926"
		],
		"tankLiters": [
			"airpress-36874-20260926"
		],
		"maxPressureBar": [
			"airpress-36874-20260926"
		],
		"fadCurve": [
			"airpress-36874-20260926"
		],
		"oilType": [
			"airpress-36874-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36874-20260926"
		],
		"powerKw": [
			"airpress-36874-20260926"
		],
		"voltage": [
			"airpress-36874-20260926"
		],
		"phase": [
			"airpress-36874-20260926"
		],
		"ean": [
			"airpress-36874-20260926"
		],
		"dutyCycle": [
			"airpress-36874-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 352,
	"powerKw": 2.2,
	"voltage": "230 V / 50 Hz / 1 Ph",
	"phase": "single-phase",
	"ean": "8712418438437",
	"dutyCycle": 0.3
};

export default product;
