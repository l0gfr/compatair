const product = {
	"id": "airpress-solopower-50",
	"slug": "airpress-solopower-50",
	"brand": "Airpress",
	"model": "SoloPower 50",
	"mpn": "36450SP",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-solopower-50.webp",
		"alt": "Repères techniques Airpress SoloPower 50, référence 36450SP",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-solopower-50-50-ch-37-kw-7416-l-min-36450sp",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress SoloPower 50, référence 36450SP : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 37 kW.",
			"Alimentation publiée : 400 V / 50 Hz / 3 Ph, triphasée."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La pression maximale du compresseur n’est pas utilisée comme pression de mesure implicite du débit.",
			"La compatibilité nécessite un débit restitué documenté à la pression de l’outil."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité.",
			"evidenceIds": [
				"airpress-36450sp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 7 bar (L/min) ; pression de mesure non précisée",
			"value": "7 270 L/min 121,167 L/s",
			"evidenceIds": [
				"airpress-36450sp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 8 bar (L/min) ; pression de mesure non précisée",
			"value": "7 200 L/min 120 L/s",
			"evidenceIds": [
				"airpress-36450sp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 10 bar (L/min) ; pression de mesure non précisée",
			"value": "6 400 L/min 106,667 L/s",
			"evidenceIds": [
				"airpress-36450sp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué min. (L/min) ; pression de mesure non précisée",
			"value": "1 120 L/min 18,667 L/s",
			"evidenceIds": [
				"airpress-36450sp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué max. (L/min) ; pression de mesure non précisée",
			"value": "7 416 L/min 123,6 L/s",
			"evidenceIds": [
				"airpress-36450sp-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "880 kg",
			"evidenceIds": [
				"airpress-36450sp-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36450sp-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36450sp-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "login controller",
			"evidenceIds": [
				"airpress-36450sp-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36450sp-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-solopower-50-50-ch-37-kw-7416-l-min-36450sp",
			"sourceLabel": "Airpress, fiche technique 36450SP, réf. 36450SP",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36450sp-20260926"
		],
		"tankLiters": [
			"airpress-36450sp-20260926"
		],
		"maxPressureBar": [
			"airpress-36450sp-20260926"
		],
		"fadCurve": [
			"airpress-36450sp-20260926"
		],
		"oilType": [
			"airpress-36450sp-20260926"
		],
		"powerKw": [
			"airpress-36450sp-20260926"
		],
		"voltage": [
			"airpress-36450sp-20260926"
		],
		"phase": [
			"airpress-36450sp-20260926"
		],
		"ean": [
			"airpress-36450sp-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 37,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418452419"
};

export default product;
