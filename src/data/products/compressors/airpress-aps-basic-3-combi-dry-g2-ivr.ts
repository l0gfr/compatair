import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-basic-3-combi-dry-g2-ivr",
	"slug": "airpress-aps-basic-3-combi-dry-g2-ivr",
	"brand": "Airpress",
	"model": "APS Basic 3 Combi Dry G2 IVR",
	"mpn": "362953-IVR",
	"tankLiters": 200,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-basic-3-combi-dry-g2-ivr.webp",
		"alt": "Repères techniques Airpress APS Basic 3 Combi Dry G2 IVR, référence 362953-IVR",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-basic-3-combi-dry-g2-ivr-10-bar-3-ch-2-2-kw-200-l-362953-ivr",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS Basic 3 Combi Dry G2 IVR, référence 362953-IVR : cuve de 200 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 2,2 kW.",
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
				"airpress-362953-ivr-20260926"
			]
		},
		{
			"label": "Débit d'air restitué min. (L/min) ; pression de mesure non précisée",
			"value": "132 L/min 2,2 L/s",
			"evidenceIds": [
				"airpress-362953-ivr-20260926"
			]
		},
		{
			"label": "Débit d'air restitué max. (L/min) ; pression de mesure non précisée",
			"value": "294 L/min 4,9 L/s",
			"evidenceIds": [
				"airpress-362953-ivr-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-362953-ivr-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "190 kg",
			"evidenceIds": [
				"airpress-362953-ivr-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-362953-ivr-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-362953-ivr-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Oui",
			"evidenceIds": [
				"airpress-362953-ivr-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ES 4000 CONNECT",
			"evidenceIds": [
				"airpress-362953-ivr-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-362953-ivr-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-basic-3-combi-dry-g2-ivr-10-bar-3-ch-2-2-kw-200-l-362953-ivr",
			"sourceLabel": "Airpress, fiche technique 362953-IVR, réf. 362953-IVR",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-362953-ivr-20260926"
		],
		"tankLiters": [
			"airpress-362953-ivr-20260926"
		],
		"maxPressureBar": [
			"airpress-362953-ivr-20260926"
		],
		"fadCurve": [
			"airpress-362953-ivr-20260926"
		],
		"oilType": [
			"airpress-362953-ivr-20260926"
		],
		"powerKw": [
			"airpress-362953-ivr-20260926"
		],
		"voltage": [
			"airpress-362953-ivr-20260926"
		],
		"phase": [
			"airpress-362953-ivr-20260926"
		],
		"ean": [
			"airpress-362953-ivr-20260926"
		],
		"dutyCycle": [
			"airpress-362953-ivr-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 2.2,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418429398",
	"dutyCycle": 1
};

export default product;
