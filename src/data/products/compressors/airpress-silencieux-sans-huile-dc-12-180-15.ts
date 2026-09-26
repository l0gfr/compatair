const product = {
	"id": "airpress-silencieux-sans-huile-dc-12-180-15",
	"slug": "airpress-silencieux-sans-huile-dc-12-180-15",
	"brand": "Airpress",
	"model": "silencieux sans huile DC 12-180/15",
	"mpn": "36587",
	"tankLiters": 15,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-silencieux-sans-huile-dc-12-180-15.webp",
		"alt": "Repères techniques Airpress silencieux sans huile DC 12-180/15, référence 36587",
		"sourceUrl": "https://airpress.fr/compresseur-silencieux-sans-huile-dc-12-180-15-10-bar-0-75-ch-0-55-kw-144-l-min-15-l-12-v-36587",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress silencieux sans huile DC 12-180/15, référence 36587 : cuve de 15 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 0,55 kW.",
			"Débit aspiré : 180 L/min, distinct du débit restitué.",
			"Alimentation publiée : 12 V."
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
				"airpress-36587-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "144 L/min 2,4 L/s",
			"evidenceIds": [
				"airpress-36587-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "20/80",
			"evidenceIds": [
				"airpress-36587-20260926"
			]
		},
		{
			"label": "Poids",
			"value": "20 kg",
			"evidenceIds": [
				"airpress-36587-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36587-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36587-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36587-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-silencieux-sans-huile-dc-12-180-15-10-bar-0-75-ch-0-55-kw-144-l-min-15-l-12-v-36587",
			"sourceLabel": "Airpress, fiche technique 36587, réf. 36587",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36587-20260926"
		],
		"tankLiters": [
			"airpress-36587-20260926"
		],
		"maxPressureBar": [
			"airpress-36587-20260926"
		],
		"fadCurve": [
			"airpress-36587-20260926"
		],
		"oilType": [
			"airpress-36587-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36587-20260926"
		],
		"powerKw": [
			"airpress-36587-20260926"
		],
		"voltage": [
			"airpress-36587-20260926"
		],
		"ean": [
			"airpress-36587-20260926"
		],
		"dutyCycle": [
			"airpress-36587-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 180,
	"powerKw": 0.55,
	"voltage": "12 V",
	"ean": "8712418273519",
	"dutyCycle": 0.2
};

export default product;
