import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-solopower-25",
	"slug": "airpress-solopower-25",
	"brand": "Airpress",
	"model": "SoloPower 25",
	"mpn": "36425SP",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-solopower-25.webp",
		"alt": "Repères techniques Airpress SoloPower 25, référence 36425SP",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-solopower-25-25-ch-18-5-kw-3940-l-min-36425sp",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress SoloPower 25, référence 36425SP : configuration sans cuve intégrée, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 18,5 kW.",
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
				"airpress-36425sp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 7 bar (L/min) ; pression de mesure non précisée",
			"value": "3 870 L/min 64,5 L/s",
			"evidenceIds": [
				"airpress-36425sp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 8 bar (L/min) ; pression de mesure non précisée",
			"value": "3 830 L/min 63,833 L/s",
			"evidenceIds": [
				"airpress-36425sp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué à 10 bar (L/min) ; pression de mesure non précisée",
			"value": "3 300 L/min 55 L/s",
			"evidenceIds": [
				"airpress-36425sp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué min. (L/min) ; pression de mesure non précisée",
			"value": "400 L/min 6,667 L/s",
			"evidenceIds": [
				"airpress-36425sp-20260926"
			]
		},
		{
			"label": "Débit d'air restitué max. (L/min) ; pression de mesure non précisée",
			"value": "3 940 L/min 65,667 L/s",
			"evidenceIds": [
				"airpress-36425sp-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "710 kg",
			"evidenceIds": [
				"airpress-36425sp-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36425sp-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36425sp-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "login controller",
			"evidenceIds": [
				"airpress-36425sp-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36425sp-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-solopower-25-25-ch-18-5-kw-3940-l-min-36425sp",
			"sourceLabel": "Airpress, fiche technique 36425SP, réf. 36425SP",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36425sp-20260926"
		],
		"tankLiters": [
			"airpress-36425sp-20260926"
		],
		"maxPressureBar": [
			"airpress-36425sp-20260926"
		],
		"fadCurve": [
			"airpress-36425sp-20260926"
		],
		"oilType": [
			"airpress-36425sp-20260926"
		],
		"powerKw": [
			"airpress-36425sp-20260926"
		],
		"voltage": [
			"airpress-36425sp-20260926"
		],
		"phase": [
			"airpress-36425sp-20260926"
		],
		"ean": [
			"airpress-36425sp-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 18.5,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418452372"
};

export default product;
