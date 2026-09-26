const product = {
	"id": "airpress-industriel-a-piston-k-200-600",
	"slug": "airpress-industriel-a-piston-k-200-600",
	"brand": "Airpress",
	"model": "industriel à piston K 200-600",
	"mpn": "36500-N",
	"tankLiters": 200,
	"maxPressureBar": 14,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-industriel-a-piston-k-200-600.webp",
		"alt": "Repères techniques Airpress industriel à piston K 200-600, référence 36500-N",
		"sourceUrl": "https://airpress.fr/compresseur-industriel-a-piston-k-200-600-14-bar-4-ch-3-kw-268-l-min-200-l-400-v-36500-n",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress industriel à piston K 200-600, référence 36500-N : cuve de 200 L, pression maximale publiée de 14 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 3 kW.",
			"Débit aspiré : 600 L/min, distinct du débit restitué.",
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
				"airpress-36500-n-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "268 L/min 4,467 L/s",
			"evidenceIds": [
				"airpress-36500-n-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "60/40",
			"evidenceIds": [
				"airpress-36500-n-20260926"
			]
		},
		{
			"label": "Poids",
			"value": "160 kg",
			"evidenceIds": [
				"airpress-36500-n-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36500-n-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-36500-n-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36500-n-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-industriel-a-piston-k-200-600-14-bar-4-ch-3-kw-268-l-min-200-l-400-v-36500-n",
			"sourceLabel": "Airpress, fiche technique 36500-N, réf. 36500-N",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36500-n-20260926"
		],
		"tankLiters": [
			"airpress-36500-n-20260926"
		],
		"maxPressureBar": [
			"airpress-36500-n-20260926"
		],
		"fadCurve": [
			"airpress-36500-n-20260926"
		],
		"oilType": [
			"airpress-36500-n-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36500-n-20260926"
		],
		"powerKw": [
			"airpress-36500-n-20260926"
		],
		"voltage": [
			"airpress-36500-n-20260926"
		],
		"phase": [
			"airpress-36500-n-20260926"
		],
		"ean": [
			"airpress-36500-n-20260926"
		],
		"dutyCycle": [
			"airpress-36500-n-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 600,
	"powerKw": 3,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418305357",
	"dutyCycle": 0.6
};

export default product;
