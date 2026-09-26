const product = {
	"id": "airpress-vk-700-270-pro",
	"slug": "airpress-vk-700-270-pro",
	"brand": "Airpress",
	"model": "VK 700-270 Pro",
	"mpn": "360768",
	"tankLiters": 270,
	"maxPressureBar": 11,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-vk-700-270-pro.webp",
		"alt": "Repères techniques Airpress VK 700-270 Pro, référence 360768",
		"sourceUrl": "https://airpress.fr/compresseur-vk-700-270-pro-11-bar-5-5-ch-4-kw-476-l-min-270-l-360768",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress VK 700-270 Pro, référence 360768 : cuve de 270 L, pression maximale publiée de 11 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 4 kW.",
			"Débit aspiré : 662 L/min, distinct du débit restitué.",
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
				"airpress-360768-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "476 L/min 7,933 L/s",
			"evidenceIds": [
				"airpress-360768-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-360768-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "140,5 kg",
			"evidenceIds": [
				"airpress-360768-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-360768-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-360768-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-360768-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-vk-700-270-pro-11-bar-5-5-ch-4-kw-476-l-min-270-l-360768",
			"sourceLabel": "Airpress, fiche technique 360768, réf. 360768",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-360768-20260926"
		],
		"tankLiters": [
			"airpress-360768-20260926"
		],
		"maxPressureBar": [
			"airpress-360768-20260926"
		],
		"fadCurve": [
			"airpress-360768-20260926"
		],
		"oilType": [
			"airpress-360768-20260926"
		],
		"intakeFlowLpm": [
			"airpress-360768-20260926"
		],
		"powerKw": [
			"airpress-360768-20260926"
		],
		"voltage": [
			"airpress-360768-20260926"
		],
		"phase": [
			"airpress-360768-20260926"
		],
		"ean": [
			"airpress-360768-20260926"
		],
		"dutyCycle": [
			"airpress-360768-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 662,
	"powerKw": 4,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418361278",
	"dutyCycle": 0.5
};

export default product;
