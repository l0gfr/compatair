import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpress-aps-4-basic-i-combi-dry",
	"slug": "airpress-aps-4-basic-i-combi-dry",
	"brand": "Airpress",
	"model": "APS 4 Basic i-Combi Dry",
	"mpn": "362954I",
	"tankLiters": 200,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpress-aps-4-basic-i-combi-dry.webp",
		"alt": "Repères techniques Airpress APS 4 Basic i-Combi Dry, référence 362954I",
		"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-4-basic-i-combi-dry-10-bar-4-ch-3-kw-366l-min-200l-avec-secheur-par-adsorption-18003-ofag4-362954i",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Airpress APS 4 Basic i-Combi Dry, référence 362954I : cuve de 200 L, pression maximale publiée de 10 bar. Aucun débit restitué relié à une pression de mesure n’est documenté ; la compatibilité pneumatique reste indéterminée.",
		"verifiedFacts": [
			"Débit restitué à une pression de mesure précise : non documenté.",
			"Compresseur à vis. Puissance moteur publiée : 3 kW.",
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
				"airpress-362954i-20260926"
			]
		},
		{
			"label": "Débit d'air restitué (L/min)* ; pression de mesure non précisée",
			"value": "366 L/min 6,1 L/s",
			"evidenceIds": [
				"airpress-362954i-20260926"
			]
		},
		{
			"label": "Débit d'air restitué nominal (L/min) ; pression de mesure non précisée",
			"value": "180 L/min 3 L/s",
			"evidenceIds": [
				"airpress-362954i-20260926"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "170 kg",
			"evidenceIds": [
				"airpress-362954i-20260926"
			]
		},
		{
			"label": "Cuve galvanisée",
			"value": "Non",
			"evidenceIds": [
				"airpress-362954i-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "Entraînement par courroie crantée",
			"evidenceIds": [
				"airpress-362954i-20260926"
			]
		},
		{
			"label": "Vitesse variable (IVR)",
			"value": "Non",
			"evidenceIds": [
				"airpress-362954i-20260926"
			]
		},
		{
			"label": "Panneau de contrôle",
			"value": "ON/OFF",
			"evidenceIds": [
				"airpress-362954i-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "airpress-362954i-20260926",
			"sourceUrl": "https://airpress.fr/compresseur-a-vis-aps-4-basic-i-combi-dry-10-bar-4-ch-3-kw-366l-min-200l-avec-secheur-par-adsorption-18003-ofag4-362954i",
			"sourceLabel": "Airpress, fiche technique 362954I, réf. 362954I",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le débit restitué indiqué sur la fiche n’est pas accompagné d’une pression de mesure explicite. Il est conservé comme valeur publiée, sans l’assimiler à un point de FAD utilisable pour la compatibilité."
		}
	],
	"fieldSources": {
		"mpn": [
			"airpress-362954i-20260926"
		],
		"tankLiters": [
			"airpress-362954i-20260926"
		],
		"maxPressureBar": [
			"airpress-362954i-20260926"
		],
		"fadCurve": [
			"airpress-362954i-20260926"
		],
		"oilType": [
			"airpress-362954i-20260926"
		],
		"powerKw": [
			"airpress-362954i-20260926"
		],
		"voltage": [
			"airpress-362954i-20260926"
		],
		"phase": [
			"airpress-362954i-20260926"
		],
		"ean": [
			"airpress-362954i-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 3,
	"voltage": "400 V / 50 Hz / 3 Ph",
	"phase": "three-phase",
	"ean": "8712418406306"
};

export default product;
