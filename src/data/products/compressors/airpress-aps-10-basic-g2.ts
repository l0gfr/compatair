import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-10-basic-g2",
	"slug": "airpress-aps-10-basic-g2",
	"brand": "Airpress",
	"model": "APS 10 Basic G2",
	"mpn": "362809",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-10-basic-g2.webp",
		"alt": "Repères techniques Airpress APS 10 Basic G2, référence 362809",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-10-basic-g2-10-bar-10-ch-7-5-kw-984-l-min-362809",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS 10 Basic G2. La Basic G2 est le groupe sans cuve ; la Combi G2 de même puissance ajoute une cuve de 500 L. Les deux configurations sont sans sécheur et déclarées 100/0. Les 984 L/min restent documentaires, faute de pression de mesure appariée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 7,5 kW.",
			"Alimentation publiée : 400 V / 50 Hz / 3 Ph, triphasée.",
			"Cuve intégrée : Sans cuve intégrée.",
			"Sécheur intégré : Non.",
			"Cycle de service annoncé : 100/0.",
			"Plage de service publiée : Minimum 8 bar ; maximum 10 bar.",
			"Débit de sortie annoncé, mesure non appariée : 984 L/min, présenté comme valeur estimée.",
			"Puissance moteur : 7,5 kW."
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
				"airpress-362809-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "984 L/min 16,4 L/s",
			"evidenceIds": [
				"airpress-362809-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-362809-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "140 kg",
			"evidenceIds": [
				"airpress-362809-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-362809-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-362809-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-362809-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ON/OFF",
			"evidenceIds": [
				"airpress-362809-20260926"
			]
		},
		{
			"label": "Cuve intégrée",
			"value": "Sans cuve intégrée",
			"evidenceIds": [
				"airpress-aps-10-basic-g2-reserved-20261103-1"
			]
		},
		{
			"label": "Sécheur intégré",
			"value": "Non",
			"evidenceIds": [
				"airpress-aps-10-basic-g2-reserved-20261103-1"
			]
		},
		{
			"label": "Cycle de service annoncé",
			"value": "100/0",
			"evidenceIds": [
				"airpress-aps-10-basic-g2-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de service publiée",
			"value": "Minimum 8 bar ; maximum 10 bar",
			"evidenceIds": [
				"airpress-aps-10-basic-g2-reserved-20261103-1"
			]
		},
		{
			"label": "Débit de sortie annoncé, mesure non appariée",
			"value": "984 L/min, présenté comme valeur estimée",
			"evidenceIds": [
				"airpress-aps-10-basic-g2-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "7,5 kW",
			"evidenceIds": [
				"airpress-aps-10-basic-g2-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-362809-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-10-basic-g2-10-bar-10-ch-7-5-kw-984-l-min-362809",
			"sourceLabel": "Airpress, fiche technique 362809, réf. 362809",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		},
		{
			"id": "airpress-aps-10-basic-g2-reserved-20261103-1",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-10-basic-g2-10-bar-10-ch-7-5-kw-984-l-min-362809",
			"sourceLabel": "Airpress : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9643276a56dc68ca138fe53183ef7464dbe439df79c0c2c56ec2a88ef2eba3f7. La Basic G2 est le groupe sans cuve ; la Combi G2 de même puissance ajoute une cuve de 500 L. Les deux configurations sont sans sécheur et déclarées 100/0. Les 984 L/min restent documentaires, faute de pression de mesure appariée."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-362809-20260926"
		],
		"tankLiters": [
			"airpress-362809-20260926"
		],
		"maxPressureBar": [
			"airpress-362809-20260926"
		],
		"fadCurve": [
			"airpress-362809-20260926"
		],
		"oilType": [
			"airpress-362809-20260926"
		],
		"powerKw": [
			"airpress-362809-20260926"
		],
		"voltage": [
			"airpress-362809-20260926"
		],
		"phase": [
			"airpress-362809-20260926"
		],
		"ean": [
			"airpress-362809-20260926"
		],
		"dutyCycle": [
			"airpress-362809-20260926"
		],
		"editorial": [
			"airpress-aps-10-basic-g2-reserved-20261103-1"
		],
		"specifications": [
			"airpress-aps-10-basic-g2-reserved-20261103-1"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 7.5,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418399929",
	"dutyCycle": 1
};

export default product;
