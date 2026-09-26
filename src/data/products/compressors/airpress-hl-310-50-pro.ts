const product = {
	"id": "airpress-hl-310-50-pro",
	"slug": "airpress-hl-310-50-pro",
	"brand": "Airpress",
	"model": "HL 310-50 Pro",
	"mpn": "360531",
	"tankLiters": 50,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-hl-310-50-pro.webp",
		"alt": "Repères techniques Airpress HL 310-50 Pro, référence 360531",
		"sourceUrl": "https://airpress.fr/compresseur-hl-310-50-pro-10-bar-2-ch-1-5-kw-159-l-min-50-l-230-v-360531",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress HL 310-50 Pro, référence 360531 : cuve de 50 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 217 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz / 1 Ph, monophasée."
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
				"airpress-360531-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "159 L/min 2,65 L/s",
			"evidenceIds": [
				"airpress-360531-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "50/50",
			"evidenceIds": [
				"airpress-360531-20260926"
			]
		},
		{
			"label": "Poids",
			"value": "55 kg",
			"evidenceIds": [
				"airpress-360531-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-360531-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-360531-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-360531-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-hl-310-50-pro-10-bar-2-ch-1-5-kw-159-l-min-50-l-230-v-360531",
			"sourceLabel": "Airpress, fiche technique 360531, réf. 360531",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-360531-20260926"
		],
		"tankLiters": [
			"airpress-360531-20260926"
		],
		"maxPressureBar": [
			"airpress-360531-20260926"
		],
		"fadCurve": [
			"airpress-360531-20260926"
		],
		"oilType": [
			"airpress-360531-20260926"
		],
		"intakeFlowLpm": [
			"airpress-360531-20260926"
		],
		"powerKw": [
			"airpress-360531-20260926"
		],
		"voltage": [
			"airpress-360531-20260926"
		],
		"phase": [
			"airpress-360531-20260926"
		],
		"ean": [
			"airpress-360531-20260926"
		],
		"dutyCycle": [
			"airpress-360531-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 217,
	"powerKw": 1.5,
	"voltage": "230 V / 50 Hz / 1 Ph",
	"phase": "single-phase",
	"ean": "8712418332360",
	"dutyCycle": 0.5
};

export default product;
