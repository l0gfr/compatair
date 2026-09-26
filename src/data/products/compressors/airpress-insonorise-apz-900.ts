const product = {
	"id": "airpress-insonorise-apz-900",
	"slug": "airpress-insonorise-apz-900",
	"brand": "Airpress",
	"model": "insonorisé APZ 900+",
	"mpn": "34650-S",
	"tankLiters": 3,
	"maxPressureBar": 11,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-insonorise-apz-900.webp",
		"alt": "Repères techniques Airpress insonorisé APZ 900+, référence 34650-S",
		"sourceUrl": "https://airpress.fr/compresseur-insonorise-apz-900-11-bar-7-5-ch-5-5-kw-665-l-min-3-l-400-v-demarreur-y-34650-s",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress insonorisé APZ 900+, référence 34650-S : cuve de 3 L, pression maximale publiée de 11 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
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
				"airpress-34650-s-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "665 L/min 11,083 L/s",
			"evidenceIds": [
				"airpress-34650-s-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "60/40",
			"evidenceIds": [
				"airpress-34650-s-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "187 kg",
			"evidenceIds": [
				"airpress-34650-s-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-34650-s-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-34650-s-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-34650-s-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-insonorise-apz-900-11-bar-7-5-ch-5-5-kw-665-l-min-3-l-400-v-demarreur-y-34650-s",
			"sourceLabel": "Airpress, fiche technique 34650-S, réf. 34650-S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-34650-s-20260926"
		],
		"tankLiters": [
			"airpress-34650-s-20260926"
		],
		"maxPressureBar": [
			"airpress-34650-s-20260926"
		],
		"fadCurve": [
			"airpress-34650-s-20260926"
		],
		"oilType": [
			"airpress-34650-s-20260926"
		],
		"intakeFlowLpm": [
			"airpress-34650-s-20260926"
		],
		"powerKw": [
			"airpress-34650-s-20260926"
		],
		"voltage": [
			"airpress-34650-s-20260926"
		],
		"phase": [
			"airpress-34650-s-20260926"
		],
		"ean": [
			"airpress-34650-s-20260926"
		],
		"dutyCycle": [
			"airpress-34650-s-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 872,
	"powerKw": 5.5,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418260526",
	"dutyCycle": 0.6
};

export default product;
