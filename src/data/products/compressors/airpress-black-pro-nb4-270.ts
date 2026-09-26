const product = {
	"id": "airpress-black-pro-nb4-270",
	"slug": "airpress-black-pro-nb4-270",
	"brand": "Airpress",
	"model": "Black Pro NB4/270",
	"mpn": "360112",
	"tankLiters": 270,
	"maxPressureBar": 11,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-black-pro-nb4-270.webp",
		"alt": "Repères techniques Airpress Black Pro NB4/270, référence 360112",
		"sourceUrl": "https://airpress.fr/compresseur-a-deux-cylindres-black-pro-nb4-270-270-l-11-bars-4-cv-3-kw-398-8-l-min-400-v-360112",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress Black Pro NB4/270, référence 360112 : cuve de 270 L, pression maximale publiée de 11 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 3 kW.",
			"Débit aspiré : 480 L/min, distinct du débit restitué.",
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
				"airpress-360112-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "398,8 L/min 6,647 L/s",
			"evidenceIds": [
				"airpress-360112-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-360112-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "150 kg",
			"evidenceIds": [
				"airpress-360112-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-360112-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-360112-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-360112-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-deux-cylindres-black-pro-nb4-270-270-l-11-bars-4-cv-3-kw-398-8-l-min-400-v-360112",
			"sourceLabel": "Airpress, fiche technique 360112, réf. 360112",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-360112-20260926"
		],
		"tankLiters": [
			"airpress-360112-20260926"
		],
		"maxPressureBar": [
			"airpress-360112-20260926"
		],
		"fadCurve": [
			"airpress-360112-20260926"
		],
		"oilType": [
			"airpress-360112-20260926"
		],
		"intakeFlowLpm": [
			"airpress-360112-20260926"
		],
		"powerKw": [
			"airpress-360112-20260926"
		],
		"voltage": [
			"airpress-360112-20260926"
		],
		"phase": [
			"airpress-360112-20260926"
		],
		"ean": [
			"airpress-360112-20260926"
		],
		"dutyCycle": [
			"airpress-360112-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 480,
	"powerKw": 3,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418413366",
	"dutyCycle": 0.5
};

export default product;
