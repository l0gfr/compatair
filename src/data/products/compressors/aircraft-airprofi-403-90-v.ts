import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airprofi-403-90-v",
	"slug": "aircraft-airprofi-403-90-v",
	"brand": "Aircraft",
	"model": "AIRPROFI 403/90 V",
	"mpn": "2018434",
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airprofi-403-90-v.webp",
		"alt": "Repères techniques Aircraft AIRPROFI 403/90 V, référence 2018434",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airprofi-40390-v-2018434/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft AIRPROFI 403/90 V, référence 2018434 : cuve de 90 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 285 l/min. Condition de remplissage publiée : à 6 bar de pression de travail.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 390 L/min, distinct du débit restitué.",
			"Alimentation publiée : 400 V.",
			"Capacité de remplissage approximative : 285 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 2."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"La capacité de remplissage et sa pression éventuelle ne sont pas assimilées à un débit FAD certifié. Demander les conditions d’essai et le débit utile à la pression de l’outil."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 390 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2018434-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "600 mm × 600 mm × 1030 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2018434-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "285 l/min",
			"evidenceIds": [
				"aircraft-2018434-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2018434-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2018434-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2018434-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2018434-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "77 kg",
			"evidenceIds": [
				"aircraft-2018434-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2018434-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airprofi-40390-v-2018434/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2018434, réf. 2018434",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 390 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2018434-20260927"
		],
		"tankLiters": [
			"aircraft-2018434-20260927"
		],
		"maxPressureBar": [
			"aircraft-2018434-20260927"
		],
		"fadCurve": [
			"aircraft-2018434-20260927"
		],
		"oilType": [
			"aircraft-2018434-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2018434-20260927"
		],
		"powerKw": [
			"aircraft-2018434-20260927"
		],
		"voltage": [
			"aircraft-2018434-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 390,
	"powerKw": 2.2,
	"voltage": "400 V"
};

export default product;
