const product = {
	"id": "airpress-hk-1000-90-pro",
	"slug": "airpress-hk-1000-90-pro",
	"brand": "Airpress",
	"model": "HK 1000-90 Pro",
	"mpn": "360645",
	"tankLiters": 90,
	"maxPressureBar": 11,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-hk-1000-90-pro.webp",
		"alt": "Repères techniques Airpress HK 1000-90 Pro, référence 360645",
		"sourceUrl": "https://airpress.fr/compresseur-hk-1000-90-pro-11-bar-7-5-ch-5-5-kw-696-l-min-90-l-400-v-360645",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress HK 1000-90 Pro, référence 360645 : cuve de 90 L, pression maximale publiée de 11 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 5,5 kW.",
			"Débit aspiré : 872 L/min, distinct du débit restitué.",
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
				"airpress-360645-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "696 L/min 11,6 L/s",
			"evidenceIds": [
				"airpress-360645-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-360645-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "115 kg",
			"evidenceIds": [
				"airpress-360645-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-360645-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-360645-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-360645-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-hk-1000-90-pro-11-bar-7-5-ch-5-5-kw-696-l-min-90-l-400-v-360645",
			"sourceLabel": "Airpress, fiche technique 360645, réf. 360645",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-360645-20260926"
		],
		"tankLiters": [
			"airpress-360645-20260926"
		],
		"maxPressureBar": [
			"airpress-360645-20260926"
		],
		"fadCurve": [
			"airpress-360645-20260926"
		],
		"oilType": [
			"airpress-360645-20260926"
		],
		"intakeFlowLpm": [
			"airpress-360645-20260926"
		],
		"powerKw": [
			"airpress-360645-20260926"
		],
		"voltage": [
			"airpress-360645-20260926"
		],
		"phase": [
			"airpress-360645-20260926"
		],
		"ean": [
			"airpress-360645-20260926"
		],
		"dutyCycle": [
			"airpress-360645-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 872,
	"powerKw": 5.5,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418343014",
	"dutyCycle": 0.5
};

export default product;
