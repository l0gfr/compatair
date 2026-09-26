const product = {
	"id": "airpress-aps-3-basic-g2",
	"slug": "airpress-aps-3-basic-g2",
	"brand": "Airpress",
	"model": "APS 3 Basic G2",
	"mpn": "362803M2",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-3-basic-g2.webp",
		"alt": "Repères techniques Airpress APS 3 Basic G2, référence 362803M2",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-3-basic-g2-10-bar-3-ch-2-2-kw-294-l-min-362803m2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS 3 Basic G2, référence 362803M2 : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 2,2 kW.",
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
				"airpress-362803m2-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "294 L/min 4,9 L/s",
			"evidenceIds": [
				"airpress-362803m2-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-362803m2-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "110 kg",
			"evidenceIds": [
				"airpress-362803m2-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-362803m2-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-362803m2-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-362803m2-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ON/OFF",
			"evidenceIds": [
				"airpress-362803m2-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-362803m2-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-3-basic-g2-10-bar-3-ch-2-2-kw-294-l-min-362803m2",
			"sourceLabel": "Airpress, fiche technique 362803M2, réf. 362803M2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-362803m2-20260926"
		],
		"tankLiters": [
			"airpress-362803m2-20260926"
		],
		"maxPressureBar": [
			"airpress-362803m2-20260926"
		],
		"fadCurve": [
			"airpress-362803m2-20260926"
		],
		"oilType": [
			"airpress-362803m2-20260926"
		],
		"powerKw": [
			"airpress-362803m2-20260926"
		],
		"voltage": [
			"airpress-362803m2-20260926"
		],
		"phase": [
			"airpress-362803m2-20260926"
		],
		"ean": [
			"airpress-362803m2-20260926"
		],
		"dutyCycle": [
			"airpress-362803m2-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 2.2,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418448887",
	"dutyCycle": 1
};

export default product;
