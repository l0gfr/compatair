const product = {
	"id": "airpress-black-pro-b3800b-90-360103",
	"slug": "airpress-black-pro-b3800b-90-360103",
	"brand": "Airpress",
	"model": "Black Pro B3800B/90",
	"mpn": "360103",
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-black-pro-b3800b-90-360103.webp",
		"alt": "Repères techniques Airpress Black Pro B3800B/90, référence 360103",
		"sourceUrl": "https://airpress.fr/compresseur-a-deux-cylindres-black-pro-b3800b-90-90-l-10-bar-3-hp-2-2-kw-289-l-min-400-v-360103",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress Black Pro B3800B/90, référence 360103 : cuve de 90 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 390 L/min, distinct du débit restitué.",
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
				"airpress-360103-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "289 L/min 4,817 L/s",
			"evidenceIds": [
				"airpress-360103-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-360103-20260926"
			]
		},
		{
			"label": "Poids",
			"value": "74,5 kg",
			"evidenceIds": [
				"airpress-360103-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-360103-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-360103-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-360103-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-deux-cylindres-black-pro-b3800b-90-90-l-10-bar-3-hp-2-2-kw-289-l-min-400-v-360103",
			"sourceLabel": "Airpress, fiche technique 360103, réf. 360103",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-360103-20260926"
		],
		"tankLiters": [
			"airpress-360103-20260926"
		],
		"maxPressureBar": [
			"airpress-360103-20260926"
		],
		"fadCurve": [
			"airpress-360103-20260926"
		],
		"oilType": [
			"airpress-360103-20260926"
		],
		"intakeFlowLpm": [
			"airpress-360103-20260926"
		],
		"powerKw": [
			"airpress-360103-20260926"
		],
		"voltage": [
			"airpress-360103-20260926"
		],
		"phase": [
			"airpress-360103-20260926"
		],
		"ean": [
			"airpress-360103-20260926"
		],
		"dutyCycle": [
			"airpress-360103-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 390,
	"powerKw": 2.2,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418413281",
	"dutyCycle": 0.5,
	"variant": {
		"familyId": "airpress-black-pro-b3800b-90",
		"label": "Référence 360103",
		"distinguishingAttributes": {
			"reference": "360103"
		}
	}
};

export default product;
