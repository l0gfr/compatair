import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-ecopower-30d-combi-dry",
	"slug": "airpress-ecopower-30d-combi-dry",
	"brand": "Airpress",
	"model": "EcoPower 30D Combi Dry",
	"mpn": "36679529-D",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-ecopower-30d-combi-dry.webp",
		"alt": "Repères techniques Airpress EcoPower 30D Combi Dry, référence 36679529-D",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-ecopower-30d-combi-dry-10-bar-30-ch-22-kw-3294-l-min-500-l-a-entrainement-par-engrenage-36679529-d",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress EcoPower 30D Combi Dry, référence 36679529-D : cuve de 500 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 22 kW.",
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
				"airpress-36679529-d-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "3 294 L/min 54,9 L/s",
			"evidenceIds": [
				"airpress-36679529-d-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-36679529-d-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "595 kg",
			"evidenceIds": [
				"airpress-36679529-d-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36679529-d-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Par engrenages",
			"evidenceIds": [
				"airpress-36679529-d-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-36679529-d-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ES 4000 STANDARD",
			"evidenceIds": [
				"airpress-36679529-d-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36679529-d-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-ecopower-30d-combi-dry-10-bar-30-ch-22-kw-3294-l-min-500-l-a-entrainement-par-engrenage-36679529-d",
			"sourceLabel": "Airpress, fiche technique 36679529-D, réf. 36679529-D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36679529-d-20260926"
		],
		"tankLiters": [
			"airpress-36679529-d-20260926"
		],
		"maxPressureBar": [
			"airpress-36679529-d-20260926"
		],
		"fadCurve": [
			"airpress-36679529-d-20260926"
		],
		"oilType": [
			"airpress-36679529-d-20260926"
		],
		"powerKw": [
			"airpress-36679529-d-20260926"
		],
		"voltage": [
			"airpress-36679529-d-20260926"
		],
		"phase": [
			"airpress-36679529-d-20260926"
		],
		"ean": [
			"airpress-36679529-d-20260926"
		],
		"dutyCycle": [
			"airpress-36679529-d-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 22,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418424416",
	"dutyCycle": 1
};

export default product;
