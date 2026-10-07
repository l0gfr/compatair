import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-premiumpower-40",
	"slug": "airpress-premiumpower-40",
	"brand": "Airpress",
	"model": "PremiumPower 40",
	"mpn": "36440PP",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-premiumpower-40.webp",
		"alt": "Repères techniques Airpress PremiumPower 40, référence 36440PP",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-premiumpower-40-40-ch-30-kw-1616-5260-l-min-36440pp",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress PremiumPower 40, référence 36440PP : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 30 kW.",
			"Alimentation publiée : 400 V / 50 Hz / 3 Ph, triphasée."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La pression maximale du compresseur n’est pas utilisée comme pression de mesure implicite du débit.",
			"La compatibilité nécessite un débit restitué documenté à la pression de l’outil."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité.",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 7 bar (L/min) ; pression de mesure non précisée",
			"value": "5 292 L/min 88,2 L/s",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 8 bar (L/min) ; pression de mesure non précisée",
			"value": "5 260 L/min 87,667 L/s",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 10 bar (L/min) ; pression de mesure non précisée",
			"value": "4 544 L/min 75,733 L/s",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué min. (L/min) ; pression de mesure non précisée",
			"value": "1 616 L/min 26,933 L/s",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué max. (L/min) ; pression de mesure non précisée",
			"value": "5 392 L/min 89,867 L/s",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "797 kg",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Oui",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "AirVision Pro",
			"evidenceIds": [
				"airpress-36440pp-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36440pp-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-premiumpower-40-40-ch-30-kw-1616-5260-l-min-36440pp",
			"sourceLabel": "Airpress, fiche technique 36440PP, réf. 36440PP",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36440pp-20260926"
		],
		"tankLiters": [
			"airpress-36440pp-20260926"
		],
		"maxPressureBar": [
			"airpress-36440pp-20260926"
		],
		"fadCurve": [
			"airpress-36440pp-20260926"
		],
		"oilType": [
			"airpress-36440pp-20260926"
		],
		"powerKw": [
			"airpress-36440pp-20260926"
		],
		"voltage": [
			"airpress-36440pp-20260926"
		],
		"phase": [
			"airpress-36440pp-20260926"
		],
		"ean": [
			"airpress-36440pp-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 30,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418452334"
};

export default product;
