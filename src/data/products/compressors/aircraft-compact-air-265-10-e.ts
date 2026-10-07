import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-compact-air-265-10-e",
	"slug": "aircraft-compact-air-265-10-e",
	"brand": "Aircraft",
	"model": "COMPACT-AIR 265/10 E",
	"mpn": "2005261",
	"tankLiters": 10,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-compact-air-265-10-e.webp",
		"alt": "Repères techniques Aircraft COMPACT-AIR 265/10 E, référence 2005261",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/compact-air-26510-e-2005261/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft COMPACT-AIR 265/10 E, référence 2005261 : cuve de 10 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 155 l/min. Condition de remplissage publiée : à 6 bar de pression de travail.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 250 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage approximative : 155 l/min.",
			"Condition de remplissage publiée : à 6 bar de pression de travail.",
			"Nombre de cylindres : 1."
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
			"value": "Débit aspiré déclaré : 250 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2005261-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "420 mm × 350 mm × 730 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2005261-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "155 l/min",
			"evidenceIds": [
				"aircraft-2005261-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2005261-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"aircraft-2005261-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2005261-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2005261-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "24,1 kg",
			"evidenceIds": [
				"aircraft-2005261-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2005261-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/compact-air-26510-e-2005261/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2005261, réf. 2005261",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 250 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2005261-20260927"
		],
		"tankLiters": [
			"aircraft-2005261-20260927"
		],
		"maxPressureBar": [
			"aircraft-2005261-20260927"
		],
		"fadCurve": [
			"aircraft-2005261-20260927"
		],
		"oilType": [
			"aircraft-2005261-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2005261-20260927"
		],
		"powerKw": [
			"aircraft-2005261-20260927"
		],
		"voltage": [
			"aircraft-2005261-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 250,
	"powerKw": 1.5,
	"voltage": "230 V"
};

export default product;
