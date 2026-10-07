import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-7-basic-i-combi-dry-362958i",
	"slug": "airpress-aps-7-basic-i-combi-dry-362958i",
	"brand": "Airpress",
	"model": "APS 7 Basic i-Combi Dry",
	"mpn": "362958I",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-7-basic-i-combi-dry-362958i.webp",
		"alt": "Repères techniques Airpress APS 7 Basic i-Combi Dry, référence 362958I",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-7-basic-i-combi-dry-500-l-avec-kit-ofag4-362958i",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS 7 Basic i-Combi Dry, référence 362958I : cuve de 500 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 5,5 kW.",
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
				"airpress-362958i-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "780 L/min 13 L/s",
			"evidenceIds": [
				"airpress-362958i-20260926"
			]
		},
		{
			"label": "Débit d'air restitué nominal (L/min) ; pression de mesure non précisée",
			"value": "600 L/min 10 L/s",
			"evidenceIds": [
				"airpress-362958i-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-362958i-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "271 kg",
			"evidenceIds": [
				"airpress-362958i-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-362958i-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-362958i-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-362958i-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ON/OFF",
			"evidenceIds": [
				"airpress-362958i-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-362958i-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-7-basic-i-combi-dry-500-l-avec-kit-ofag4-362958i",
			"sourceLabel": "Airpress, fiche technique 362958I, réf. 362958I",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-362958i-20260926"
		],
		"tankLiters": [
			"airpress-362958i-20260926"
		],
		"maxPressureBar": [
			"airpress-362958i-20260926"
		],
		"fadCurve": [
			"airpress-362958i-20260926"
		],
		"oilType": [
			"airpress-362958i-20260926"
		],
		"powerKw": [
			"airpress-362958i-20260926"
		],
		"voltage": [
			"airpress-362958i-20260926"
		],
		"phase": [
			"airpress-362958i-20260926"
		],
		"ean": [
			"airpress-362958i-20260926"
		],
		"dutyCycle": [
			"airpress-362958i-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 5.5,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418421187",
	"dutyCycle": 1,
	"variant": {
		"familyId": "airpress-aps-7-basic-i-combi-dry",
		"label": "Référence 362958I",
		"distinguishingAttributes": {
			"reference": "362958I"
		}
	}
};

export default product;
