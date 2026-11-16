import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-15-basic-combi-dry-364959",
	"slug": "airpress-aps-15-basic-combi-dry-364959",
	"brand": "Airpress",
	"model": "APS 15 Basic Combi Dry",
	"mpn": "364959",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-15-basic-combi-dry-364959-technical-20261116-reviews.svg",
		"alt": "Repères techniques Airpress APS 15 Basic Combi Dry, référence 364959",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-15-basic-combi-dry-10-bar-15-ch-11-kw-1416l-min-500-l-364959",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "L’APS 15 Basic Combi Dry 364959 réunit une cuve de 500 L, un sécheur et un moteur de 11 kW sous 400 V triphasé 50 Hz. Sa version 10 bar publie 1 416 L/min, contre 1 620 pour la version 8 bar et 1 152 pour la 13 bar. Le constructeur précise que le débit de sortie est une valeur estimée : il reste documentaire. Le cycle 100/0 est, lui, explicitement déclaré pour ce groupe.",
		"verifiedFacts": [
			"L’APS 15 Basic Combi Dry 364959 réunit une cuve de 500 L, un sécheur et un moteur de 11 kW sous 400 V triphasé 50 Hz.",
			"Sa version 10 bar publie 1 416 L/min, contre 1 620 pour la version 8 bar et 1 152 pour la 13 bar."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche est celui déclaré par le fabricant ; les conditions de cycle et de température restent à respecter. La disponibilité commerciale reste à confirmer.",
			"La pression maximale du compresseur n’est pas utilisée comme pression de mesure implicite du débit.",
			"La compatibilité nécessite un débit restitué documenté à la pression de l’outil.",
			"La courbe dimensionnante a été retirée après revue : la mesure FAD et son appariement à une pression ne sont pas suffisamment établis. Les valeurs documentaires restent conservées."
		]
	},
	"specifications": [
		{
			"label": "Débit documentaire, hors calcul",
			"value": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité. ; pression de mesure non qualifiée. Les anciens points sont conservés dans l’historique.",
			"evidenceIds": [
				"review:2026-11-16-reviews:airpress-aps-15-basic-combi-dry-364959:0"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "1 416 L/min 23,6 L/s",
			"evidenceIds": [
				"airpress-364959-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-364959-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "315 kg",
			"evidenceIds": [
				"airpress-364959-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-364959-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-364959-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-364959-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ES 4000 BASIC",
			"evidenceIds": [
				"airpress-364959-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-364959-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-15-basic-combi-dry-10-bar-15-ch-11-kw-1416l-min-500-l-364959",
			"sourceLabel": "Airpress, fiche technique 364959, réf. 364959",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		},
		{
			"id": "review:2026-11-16-reviews:airpress-aps-15-basic-combi-dry-364959:0",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-15-basic-combi-dry-10-bar-15-ch-11-kw-1416l-min-500-l-364959",
			"sourceLabel": "Airpress, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’APS 15 Basic Combi Dry 364959 réunit une cuve de 500 L, un sécheur et un moteur de 11 kW sous 400 V triphasé 50 Hz. Sa version 10 bar publie 1 416 L/min, contre 1 620 pour la version 8 bar et 1 152 pour la 13 bar. Le constructeur précise que le débit de sortie est une valeur estimée : il reste documentaire. Le cycle 100/0 est, lui, explicitement déclaré pour ce groupe. GET complet SHA-256 46674916400a9a786ed059edc9a5c4a83bf0b4fcb76d7877a5514dd0fcb962a9. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-364959-20260926"
		],
		"tankLiters": [
			"airpress-364959-20260926"
		],
		"maxPressureBar": [
			"airpress-364959-20260926"
		],
		"fadCurve": [
			"review:2026-11-16-reviews:airpress-aps-15-basic-combi-dry-364959:0"
		],
		"oilType": [
			"airpress-364959-20260926"
		],
		"powerKw": [
			"airpress-364959-20260926"
		],
		"voltage": [
			"airpress-364959-20260926"
		],
		"phase": [
			"airpress-364959-20260926"
		],
		"ean": [
			"airpress-364959-20260926"
		],
		"dutyCycle": [
			"airpress-364959-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 11,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418347494",
	"dutyCycle": 1,
	"variant": {
		"familyId": "airpress-aps-15-basic-combi-dry",
		"label": "Référence 364959",
		"distinguishingAttributes": {
			"reference": "364959"
		}
	}
};

export default product;
