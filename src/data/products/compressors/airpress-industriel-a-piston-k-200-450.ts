const product = {
	"id": "airpress-industriel-a-piston-k-200-450",
	"slug": "airpress-industriel-a-piston-k-200-450",
	"brand": "Airpress",
	"model": "industriel à piston K 200-450",
	"mpn": "36520-N",
	"tankLiters": 200,
	"maxPressureBar": 14,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-industriel-a-piston-k-200-450.webp",
		"alt": "Repères techniques Airpress industriel à piston K 200-450, référence 36520-N",
		"sourceUrl": "https://airpress.fr/compresseur-industriel-a-piston-k-200-450-14-bar-3-ch-2-2-kw-238-l-min-200-l-400-v-36520-n",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress industriel à piston K 200-450, référence 36520-N : cuve de 200 L, pression maximale publiée de 14 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 450 L/min, distinct du débit restitué.",
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
				"airpress-36520-n-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "238 L/min 3,967 L/s",
			"evidenceIds": [
				"airpress-36520-n-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "60/40",
			"evidenceIds": [
				"airpress-36520-n-20260926"
			]
		},
		{
			"label": "Poids",
			"value": "152 kg",
			"evidenceIds": [
				"airpress-36520-n-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36520-n-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-36520-n-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36520-n-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-industriel-a-piston-k-200-450-14-bar-3-ch-2-2-kw-238-l-min-200-l-400-v-36520-n",
			"sourceLabel": "Airpress, fiche technique 36520-N, réf. 36520-N",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36520-n-20260926"
		],
		"tankLiters": [
			"airpress-36520-n-20260926"
		],
		"maxPressureBar": [
			"airpress-36520-n-20260926"
		],
		"fadCurve": [
			"airpress-36520-n-20260926"
		],
		"oilType": [
			"airpress-36520-n-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36520-n-20260926"
		],
		"powerKw": [
			"airpress-36520-n-20260926"
		],
		"voltage": [
			"airpress-36520-n-20260926"
		],
		"phase": [
			"airpress-36520-n-20260926"
		],
		"ean": [
			"airpress-36520-n-20260926"
		],
		"dutyCycle": [
			"airpress-36520-n-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 450,
	"powerKw": 2.2,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418305340",
	"dutyCycle": 0.6
};

export default product;
