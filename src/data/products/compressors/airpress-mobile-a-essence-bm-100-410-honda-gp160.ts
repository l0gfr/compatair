import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-mobile-a-essence-bm-100-410-honda-gp160",
	"slug": "airpress-mobile-a-essence-bm-100-410-honda-gp160",
	"brand": "Airpress",
	"model": "mobile à essence BM 100-410 (HONDA GP160)",
	"mpn": "36762",
	"tankLiters": 100,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-mobile-a-essence-bm-100-410-honda-gp160.webp",
		"alt": "Repères techniques Airpress mobile à essence BM 100-410 (HONDA GP160), référence 36762",
		"sourceUrl": "https://airpress.fr/compresseur-mobile-a-essence-bm-100-410-honda-gp160-10-bar-4-8-ch-3-6-kw-247-l-min-100-l-36762",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress mobile à essence BM 100-410 (HONDA GP160), référence 36762 : cuve de 100 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 3,6 kW.",
			"Débit aspiré : 411 L/min, distinct du débit restitué."
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
				"airpress-36762-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "247 L/min 4,117 L/s",
			"evidenceIds": [
				"airpress-36762-20260926"
			]
		},
		{
			"label": "Cycle de service (% marche/arrêt)",
			"value": "60/40",
			"evidenceIds": [
				"airpress-36762-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "98 kg",
			"evidenceIds": [
				"airpress-36762-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36762-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-36762-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36762-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-mobile-a-essence-bm-100-410-honda-gp160-10-bar-4-8-ch-3-6-kw-247-l-min-100-l-36762",
			"sourceLabel": "Airpress, fiche technique 36762, réf. 36762",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36762-20260926"
		],
		"tankLiters": [
			"airpress-36762-20260926"
		],
		"maxPressureBar": [
			"airpress-36762-20260926"
		],
		"fadCurve": [
			"airpress-36762-20260926"
		],
		"oilType": [
			"airpress-36762-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36762-20260926"
		],
		"powerKw": [
			"airpress-36762-20260926"
		],
		"ean": [
			"airpress-36762-20260926"
		],
		"dutyCycle": [
			"airpress-36762-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 411,
	"powerKw": 3.6,
	"ean": "8712418278842",
	"dutyCycle": 0.6
};

export default product;
