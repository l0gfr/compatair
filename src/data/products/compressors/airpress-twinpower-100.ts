const product = {
	"id": "airpress-twinpower-100",
	"slug": "airpress-twinpower-100",
	"brand": "Airpress",
	"model": "TwinPower 100",
	"mpn": "364100TP",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-twinpower-100.webp",
		"alt": "Repères techniques Airpress TwinPower 100, référence 364100TP",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-twinpower-100-100-hp-75-kw-14-544-l-min-364100tp",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress TwinPower 100, référence 364100TP : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 75 kW.",
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
				"airpress-364100tp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 7 bar (L/min) ; pression de mesure non précisée",
			"value": "14 544 L/min 242,4 L/s",
			"evidenceIds": [
				"airpress-364100tp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 8 bar (L/min) ; pression de mesure non précisée",
			"value": "14 400 L/min 240 L/s",
			"evidenceIds": [
				"airpress-364100tp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 10 bar (L/min) ; pression de mesure non précisée",
			"value": "12 800 L/min 213,333 L/s",
			"evidenceIds": [
				"airpress-364100tp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué min. (L/min) ; pression de mesure non précisée",
			"value": "1 120 L/min 18,667 L/s",
			"evidenceIds": [
				"airpress-364100tp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué max. (L/min) ; pression de mesure non précisée",
			"value": "14 832 L/min 247,2 L/s",
			"evidenceIds": [
				"airpress-364100tp-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "1 760 kg 1,76 mt",
			"evidenceIds": [
				"airpress-364100tp-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-364100tp-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-364100tp-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "login controller",
			"evidenceIds": [
				"airpress-364100tp-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-364100tp-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-twinpower-100-100-hp-75-kw-14-544-l-min-364100tp",
			"sourceLabel": "Airpress, fiche technique 364100TP, réf. 364100TP",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-364100tp-20260926"
		],
		"tankLiters": [
			"airpress-364100tp-20260926"
		],
		"maxPressureBar": [
			"airpress-364100tp-20260926"
		],
		"fadCurve": [
			"airpress-364100tp-20260926"
		],
		"oilType": [
			"airpress-364100tp-20260926"
		],
		"powerKw": [
			"airpress-364100tp-20260926"
		],
		"voltage": [
			"airpress-364100tp-20260926"
		],
		"phase": [
			"airpress-364100tp-20260926"
		],
		"ean": [
			"airpress-364100tp-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 75,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418452471"
};

export default product;
