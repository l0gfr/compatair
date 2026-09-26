const product = {
	"id": "airpress-aps-x-10-combi-dry",
	"slug": "airpress-aps-x-10-combi-dry",
	"brand": "Airpress",
	"model": "APS X 10 Combi Dry",
	"mpn": "369010-P",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-x-10-combi-dry.webp",
		"alt": "Repères techniques Airpress APS X 10 Combi Dry, référence 369010-P",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-x-10-combi-dry-10-bar-10-ch-7-5-kw-970-l-min-500-l-369010-p",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS X 10 Combi Dry, référence 369010-P : cuve de 500 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 7,5 kW.",
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
				"airpress-369010-p-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "970 L/min 16,167 L/s",
			"evidenceIds": [
				"airpress-369010-p-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-369010-p-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "405 kg",
			"evidenceIds": [
				"airpress-369010-p-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-369010-p-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-369010-p-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-369010-p-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "MAM-860",
			"evidenceIds": [
				"airpress-369010-p-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-369010-p-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-x-10-combi-dry-10-bar-10-ch-7-5-kw-970-l-min-500-l-369010-p",
			"sourceLabel": "Airpress, fiche technique 369010-P, réf. 369010-P",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-369010-p-20260926"
		],
		"tankLiters": [
			"airpress-369010-p-20260926"
		],
		"maxPressureBar": [
			"airpress-369010-p-20260926"
		],
		"fadCurve": [
			"airpress-369010-p-20260926"
		],
		"oilType": [
			"airpress-369010-p-20260926"
		],
		"powerKw": [
			"airpress-369010-p-20260926"
		],
		"voltage": [
			"airpress-369010-p-20260926"
		],
		"phase": [
			"airpress-369010-p-20260926"
		],
		"ean": [
			"airpress-369010-p-20260926"
		],
		"dutyCycle": [
			"airpress-369010-p-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 7.5,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418412246",
	"dutyCycle": 1
};

export default product;
