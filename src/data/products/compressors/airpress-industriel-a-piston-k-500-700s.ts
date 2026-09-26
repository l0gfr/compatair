const product = {
	"id": "airpress-industriel-a-piston-k-500-700s",
	"slug": "airpress-industriel-a-piston-k-500-700s",
	"brand": "Airpress",
	"model": "industriel à piston K 500-700S",
	"mpn": "36510-N",
	"tankLiters": 500,
	"maxPressureBar": 14,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-industriel-a-piston-k-500-700s.webp",
		"alt": "Repères techniques Airpress industriel à piston K 500-700S, référence 36510-N",
		"sourceUrl": "https://airpress.fr/compresseur-industriel-a-piston-k-500-700s-14-bar-5-5-ch-4-kw-420-l-min-500-l-demarreur-y-400-v-36510-n",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress industriel à piston K 500-700S, référence 36510-N : cuve de 500 L, pression maximale publiée de 14 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 4 kW.",
			"Débit aspiré : 700 L/min, distinct du débit restitué.",
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
				"airpress-36510-n-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "450 L/min 7,5 L/s",
			"evidenceIds": [
				"airpress-36510-n-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "60/40",
			"evidenceIds": [
				"airpress-36510-n-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "275 kg",
			"evidenceIds": [
				"airpress-36510-n-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36510-n-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-36510-n-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36510-n-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-industriel-a-piston-k-500-700s-14-bar-5-5-ch-4-kw-420-l-min-500-l-demarreur-y-400-v-36510-n",
			"sourceLabel": "Airpress, fiche technique 36510-N, réf. 36510-N",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36510-n-20260926"
		],
		"tankLiters": [
			"airpress-36510-n-20260926"
		],
		"maxPressureBar": [
			"airpress-36510-n-20260926"
		],
		"fadCurve": [
			"airpress-36510-n-20260926"
		],
		"oilType": [
			"airpress-36510-n-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36510-n-20260926"
		],
		"powerKw": [
			"airpress-36510-n-20260926"
		],
		"voltage": [
			"airpress-36510-n-20260926"
		],
		"phase": [
			"airpress-36510-n-20260926"
		],
		"ean": [
			"airpress-36510-n-20260926"
		],
		"dutyCycle": [
			"airpress-36510-n-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 700,
	"powerKw": 4,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418305401",
	"dutyCycle": 0.6
};

export default product;
