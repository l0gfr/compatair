import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-20-basic-364810-13",
	"slug": "airpress-aps-20-basic-364810-13",
	"brand": "Airpress",
	"model": "APS 20 Basic",
	"mpn": "364810-13",
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-20-basic-364810-13-technical-20261116-reviews.svg",
		"alt": "Repères techniques Airpress APS 20 Basic, référence 364810-13",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-20-basic-13-bar-20-ch-15-kw-1332-l-min-364810-13",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "L’APS 20 Basic 364810-13 est le groupe de 15 kW sans cuve ni sécheur. La fiche 13 bar publie 1 332 L/min ; les variantes 10 et 8 bar indiquent 1 680 et 1 860 L/min. Le cycle 100/0 est explicite, mais le débit de sortie est qualifié d’estimation par le constructeur. Il n’est donc pas utilisé comme un FAD mesuré dans le moteur.",
		"verifiedFacts": [
			"L’APS 20 Basic 364810-13 est le groupe de 15 kW sans cuve ni sécheur.",
			"La fiche 13 bar publie 1 332 L/min ; les variantes 10 et 8 bar indiquent 1 680 et 1 860 L/min."
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
				"review:2026-11-16-reviews:airpress-aps-20-basic-364810-13:0"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "1 332 L/min 22,2 L/s",
			"evidenceIds": [
				"airpress-364810-13-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "100/0",
			"evidenceIds": [
				"airpress-364810-13-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "200 kg",
			"evidenceIds": [
				"airpress-364810-13-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-364810-13-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-364810-13-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-364810-13-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ES 4000 BASIC",
			"evidenceIds": [
				"airpress-364810-13-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-364810-13-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-20-basic-13-bar-20-ch-15-kw-1332-l-min-364810-13",
			"sourceLabel": "Airpress, fiche technique 364810-13, réf. 364810-13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		},
		{
			"id": "review:2026-11-16-reviews:airpress-aps-20-basic-364810-13:0",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-20-basic-13-bar-20-ch-15-kw-1332-l-min-364810-13",
			"sourceLabel": "Airpress, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’APS 20 Basic 364810-13 est le groupe de 15 kW sans cuve ni sécheur. La fiche 13 bar publie 1 332 L/min ; les variantes 10 et 8 bar indiquent 1 680 et 1 860 L/min. Le cycle 100/0 est explicite, mais le débit de sortie est qualifié d’estimation par le constructeur. Il n’est donc pas utilisé comme un FAD mesuré dans le moteur. GET complet SHA-256 ae133cf19704a58073cc163ec22c68030bed76f2d1246c53e3df41aa5b78b95b. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-364810-13-20260926"
		],
		"tankLiters": [
			"airpress-364810-13-20260926"
		],
		"maxPressureBar": [
			"airpress-364810-13-20260926"
		],
		"fadCurve": [
			"review:2026-11-16-reviews:airpress-aps-20-basic-364810-13:0"
		],
		"oilType": [
			"airpress-364810-13-20260926"
		],
		"powerKw": [
			"airpress-364810-13-20260926"
		],
		"voltage": [
			"airpress-364810-13-20260926"
		],
		"phase": [
			"airpress-364810-13-20260926"
		],
		"ean": [
			"airpress-364810-13-20260926"
		],
		"dutyCycle": [
			"airpress-364810-13-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 15,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418366303",
	"dutyCycle": 1,
	"variant": {
		"familyId": "airpress-aps-20-basic",
		"label": "Référence 364810-13",
		"distinguishingAttributes": {
			"reference": "364810-13"
		}
	}
};

export default product;
