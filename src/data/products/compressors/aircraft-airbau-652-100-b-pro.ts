import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airbau-652-100-b-pro",
	"slug": "aircraft-airbau-652-100-b-pro",
	"brand": "Aircraft",
	"model": "AIRBAU 652/100 B PRO",
	"mpn": "2006530",
	"tankLiters": 100,
	"maxPressureBar": 14,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airbau-652-100-b-pro.webp",
		"alt": "Repères techniques Aircraft AIRBAU 652/100 B PRO, référence 2006530",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airbau-652100-b-pro-2006530/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft AIRBAU 652/100 B PRO, référence 2006530 : cuve de 100 L, pression maximale publiée de 14 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 480 l/min. Condition de remplissage publiée : à 6 bar de pression de travail.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 6,7 kW.",
			"Débit aspiré : 642 L/min, distinct du débit restitué.",
			"Capacité de remplissage approximative : 480 l/min.",
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
			"value": "Débit aspiré déclaré : 642 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1050 mm × 500 mm × 1060 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "480 l/min",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "2",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Motorisation publiée",
			"value": "1 cylinder / 4-stroke engine",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "121 kg",
			"evidenceIds": [
				"aircraft-2006530-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2006530-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airbau-652100-b-pro-2006530/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2006530, réf. 2006530",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 642 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2006530-20260927"
		],
		"tankLiters": [
			"aircraft-2006530-20260927"
		],
		"maxPressureBar": [
			"aircraft-2006530-20260927"
		],
		"fadCurve": [
			"aircraft-2006530-20260927"
		],
		"oilType": [
			"aircraft-2006530-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2006530-20260927"
		],
		"powerKw": [
			"aircraft-2006530-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 642,
	"powerKw": 6.7
};

export default product;
