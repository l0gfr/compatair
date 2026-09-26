const product = {
	"id": "airpress-vertical-hl-360-50",
	"slug": "airpress-vertical-hl-360-50",
	"brand": "Airpress",
	"model": "vertical HL 360-50",
	"mpn": "36852",
	"tankLiters": 50,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-vertical-hl-360-50.webp",
		"alt": "Repères techniques Airpress vertical HL 360-50, référence 36852",
		"sourceUrl": "https://airpress.fr/compresseur-vertical-hl-360-50-8-bar-2-5-ch-1-8-kw-231-l-min-50-l-230-v-36852",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress vertical HL 360-50, référence 36852 : cuve de 50 L, pression maximale publiée de 8 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 1,8 kW.",
			"Débit aspiré : 288 L/min, distinct du débit restitué.",
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
				"airpress-36852-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "231 L/min 3,85 L/s",
			"evidenceIds": [
				"airpress-36852-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "30/70",
			"evidenceIds": [
				"airpress-36852-20260926"
			]
		},
		{
			"label": "Poids",
			"value": "38 kg",
			"evidenceIds": [
				"airpress-36852-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36852-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36852-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36852-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-vertical-hl-360-50-8-bar-2-5-ch-1-8-kw-231-l-min-50-l-230-v-36852",
			"sourceLabel": "Airpress, fiche technique 36852, réf. 36852",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36852-20260926"
		],
		"tankLiters": [
			"airpress-36852-20260926"
		],
		"maxPressureBar": [
			"airpress-36852-20260926"
		],
		"fadCurve": [
			"airpress-36852-20260926"
		],
		"oilType": [
			"airpress-36852-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36852-20260926"
		],
		"powerKw": [
			"airpress-36852-20260926"
		],
		"voltage": [
			"airpress-36852-20260926"
		],
		"phase": [
			"airpress-36852-20260926"
		],
		"ean": [
			"airpress-36852-20260926"
		],
		"dutyCycle": [
			"airpress-36852-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 288,
	"powerKw": 1.8,
	"voltage": "230 V / 50 Hz / 1 Ph",
	"phase": "single-phase",
	"ean": "8712418191462",
	"dutyCycle": 0.3
};

export default product;
