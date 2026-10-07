import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-mini-compresseur-a-essence-bm-2-5-275-honda-gp160",
	"slug": "airpress-mini-compresseur-a-essence-bm-2-5-275-honda-gp160",
	"brand": "Airpress",
	"model": "Mini compresseur à essence BM 2,5/275 (HONDA GP160)",
	"mpn": "36782",
	"tankLiters": 2.5,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-mini-compresseur-a-essence-bm-2-5-275-honda-gp160.webp",
		"alt": "Repères techniques Airpress Mini compresseur à essence BM 2,5/275 (HONDA GP160), référence 36782",
		"sourceUrl": "https://airpress.fr/mini-compresseur-a-essence-bm-2-5-275-honda-gp160-10-bar-4-8-ch-3-6-kw-147-l-min-2-5-l-36782",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress Mini compresseur à essence BM 2,5/275 (HONDA GP160), référence 36782 : cuve de 2,5 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à pistons. Puissance moteur publiée : 3,6 kW.",
			"Débit aspiré : 275 L/min, distinct du débit restitué."
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
				"airpress-36782-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "147 L/min 2,45 L/s",
			"evidenceIds": [
				"airpress-36782-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "38 kg",
			"evidenceIds": [
				"airpress-36782-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-36782-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement direct 1:1",
			"evidenceIds": [
				"airpress-36782-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-36782-20260926",
			"sourceUrl": "https://airpress.fr/mini-compresseur-a-essence-bm-2-5-275-honda-gp160-10-bar-4-8-ch-3-6-kw-147-l-min-2-5-l-36782",
			"sourceLabel": "Airpress, fiche technique 36782, réf. 36782",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-36782-20260926"
		],
		"tankLiters": [
			"airpress-36782-20260926"
		],
		"maxPressureBar": [
			"airpress-36782-20260926"
		],
		"fadCurve": [
			"airpress-36782-20260926"
		],
		"oilType": [
			"airpress-36782-20260926"
		],
		"intakeFlowLpm": [
			"airpress-36782-20260926"
		],
		"powerKw": [
			"airpress-36782-20260926"
		],
		"ean": [
			"airpress-36782-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 275,
	"powerKw": 3.6,
	"ean": "8712418426359"
};

export default product;
