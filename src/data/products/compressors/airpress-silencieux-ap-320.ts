const product = {
	"id": "airpress-silencieux-ap-320",
	"slug": "airpress-silencieux-ap-320",
	"brand": "Airpress",
	"model": "silencieux AP 320+",
	"mpn": "35151-B6",
	"tankLiters": 27,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-silencieux-ap-320.webp",
		"alt": "Repères techniques Airpress silencieux AP 320+, référence 35151-B6",
		"sourceUrl": "https://airpress.fr/compresseur-silencieux-ap-320-400-v-3-ch-2-2-kw-27-l-220-l-min-35151-b6",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress silencieux AP 320+, référence 35151-B6 : cuve de 27 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 320 L/min, distinct du débit restitué.",
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
				"airpress-35151-b6-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "220 L/min 3,667 L/s",
			"evidenceIds": [
				"airpress-35151-b6-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-35151-b6-20260926"
			]
		},
		{
			"label": "Poids",
			"value": "87 kg",
			"evidenceIds": [
				"airpress-35151-b6-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-35151-b6-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-35151-b6-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-35151-b6-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-silencieux-ap-320-400-v-3-ch-2-2-kw-27-l-220-l-min-35151-b6",
			"sourceLabel": "Airpress, fiche technique 35151-B6, réf. 35151-B6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-35151-b6-20260926"
		],
		"tankLiters": [
			"airpress-35151-b6-20260926"
		],
		"maxPressureBar": [
			"airpress-35151-b6-20260926"
		],
		"fadCurve": [
			"airpress-35151-b6-20260926"
		],
		"oilType": [
			"airpress-35151-b6-20260926"
		],
		"intakeFlowLpm": [
			"airpress-35151-b6-20260926"
		],
		"powerKw": [
			"airpress-35151-b6-20260926"
		],
		"voltage": [
			"airpress-35151-b6-20260926"
		],
		"phase": [
			"airpress-35151-b6-20260926"
		],
		"ean": [
			"airpress-35151-b6-20260926"
		],
		"dutyCycle": [
			"airpress-35151-b6-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 320,
	"powerKw": 2.2,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418297683",
	"dutyCycle": 0.5
};

export default product;
