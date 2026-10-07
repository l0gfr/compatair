import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airprofi-440-50-of-pro",
	"slug": "aircraft-airprofi-440-50-of-pro",
	"brand": "Aircraft",
	"model": "AIRPROFI 440/50 OF PRO",
	"mpn": "2015445",
	"tankLiters": 50,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airprofi-440-50-of-pro.webp",
		"alt": "Repères techniques Aircraft AIRPROFI 440/50 OF PRO, référence 2015445",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airprofi-44050-of-pro-2015445/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft AIRPROFI 440/50 OF PRO, référence 2015445 : cuve de 50 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 270 l/min. Condition de remplissage publiée : à 6 bar de pression de travail.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,7 kW.",
			"Débit aspiré : 440 L/min, distinct du débit restitué.",
			"Alimentation publiée : 400 V.",
			"Capacité de remplissage approximative : 270 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 4."
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
			"value": "Débit aspiré déclaré : 440 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2015445-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1080 mm × 450 mm × 860 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2015445-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "270 l/min",
			"evidenceIds": [
				"aircraft-2015445-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2015445-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "4",
			"evidenceIds": [
				"aircraft-2015445-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2015445-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "78 kg",
			"evidenceIds": [
				"aircraft-2015445-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2015445-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airprofi-44050-of-pro-2015445/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2015445, réf. 2015445",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 440 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2015445-20260927"
		],
		"tankLiters": [
			"aircraft-2015445-20260927"
		],
		"maxPressureBar": [
			"aircraft-2015445-20260927"
		],
		"fadCurve": [
			"aircraft-2015445-20260927"
		],
		"oilType": [
			"aircraft-2015445-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2015445-20260927"
		],
		"powerKw": [
			"aircraft-2015445-20260927"
		],
		"voltage": [
			"aircraft-2015445-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 440,
	"powerKw": 1.7,
	"voltage": "400 V"
};

export default product;
