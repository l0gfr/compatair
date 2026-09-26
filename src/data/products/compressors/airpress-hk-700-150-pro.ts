const product = {
	"id": "airpress-hk-700-150-pro",
	"slug": "airpress-hk-700-150-pro",
	"brand": "Airpress",
	"model": "HK 700-150 Pro",
	"mpn": "360643",
	"tankLiters": 150,
	"maxPressureBar": 11,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-hk-700-150-pro.webp",
		"alt": "Repères techniques Airpress HK 700-150 Pro, référence 360643",
		"sourceUrl": "https://airpress.fr/compresseur-hk-700-150-pro-11-bar-5-5-ch-4-kw-476-l-min-150-l-400-v-360643",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress HK 700-150 Pro, référence 360643 : cuve de 150 L, pression maximale publiée de 11 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 4 kW.",
			"Débit aspiré : 662 L/min, distinct du débit restitué.",
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
				"airpress-360643-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "476 L/min 7,933 L/s",
			"evidenceIds": [
				"airpress-360643-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-360643-20260926"
			]
		},
		{
			"label": "Poids",
			"value": "145 kg",
			"evidenceIds": [
				"airpress-360643-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-360643-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-360643-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-360643-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-hk-700-150-pro-11-bar-5-5-ch-4-kw-476-l-min-150-l-400-v-360643",
			"sourceLabel": "Airpress, fiche technique 360643, réf. 360643",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-360643-20260926"
		],
		"tankLiters": [
			"airpress-360643-20260926"
		],
		"maxPressureBar": [
			"airpress-360643-20260926"
		],
		"fadCurve": [
			"airpress-360643-20260926"
		],
		"oilType": [
			"airpress-360643-20260926"
		],
		"intakeFlowLpm": [
			"airpress-360643-20260926"
		],
		"powerKw": [
			"airpress-360643-20260926"
		],
		"voltage": [
			"airpress-360643-20260926"
		],
		"phase": [
			"airpress-360643-20260926"
		],
		"ean": [
			"airpress-360643-20260926"
		],
		"dutyCycle": [
			"airpress-360643-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 662,
	"powerKw": 4,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418391312",
	"dutyCycle": 0.5
};

export default product;
