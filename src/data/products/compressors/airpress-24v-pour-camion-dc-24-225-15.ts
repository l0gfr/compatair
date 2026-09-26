const product = {
	"id": "airpress-24v-pour-camion-dc-24-225-15",
	"slug": "airpress-24v-pour-camion-dc-24-225-15",
	"brand": "Airpress",
	"model": "24V pour camion DC 24-225/15",
	"mpn": "36588",
	"tankLiters": 15,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-24v-pour-camion-dc-24-225-15.webp",
		"alt": "Repères techniques Airpress 24V pour camion DC 24-225/15, référence 36588",
		"sourceUrl": "https://airpress.fr/compresseur-24v-pour-camion-dc-24-225-15-silencieux-sans-huile-10-bar-0-75-ch-0-55-kw-180-l-min-15-l-36588",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress 24V pour camion DC 24-225/15, référence 36588 : cuve de 15 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 0,55 kW.",
			"Débit aspiré : 225 L/min, distinct du débit restitué.",
			"Alimentation publiée : 24 V."
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
				"airpress-36588-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "180 L/min 3 L/s",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "20/80",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "20 kg",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36588-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36588-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-24v-pour-camion-dc-24-225-15-silencieux-sans-huile-10-bar-0-75-ch-0-55-kw-180-l-min-15-l-36588",
			"sourceLabel": "Airpress, fiche technique 36588, réf. 36588",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36588-20260926"
		],
		"tankLiters": [
			"airpress-36588-20260926"
		],
		"maxPressureBar": [
			"airpress-36588-20260926"
		],
		"fadCurve": [
			"airpress-36588-20260926"
		],
		"oilType": [
			"airpress-36588-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36588-20260926"
		],
		"powerKw": [
			"airpress-36588-20260926"
		],
		"voltage": [
			"airpress-36588-20260926"
		],
		"ean": [
			"airpress-36588-20260926"
		],
		"dutyCycle": [
			"airpress-36588-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 225,
	"powerKw": 0.55,
	"voltage": "24 V",
	"ean": "8712418274295",
	"dutyCycle": 0.2
};

export default product;
