import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-compact-air-311-24-e",
	"slug": "aircraft-compact-air-311-24-e",
	"brand": "Aircraft",
	"model": "COMPACT-AIR 311/24 E",
	"mpn": "2005291",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-compact-air-311-24-e.webp",
		"alt": "Repères techniques Aircraft COMPACT-AIR 311/24 E, référence 2005291",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/compact-air-31124-e-2005291/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft COMPACT-AIR 311/24 E, référence 2005291 : cuve de 24 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage approximative : 190 l/min. Condition de remplissage publiée : à 6 bar de pression de travail.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 284 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage approximative : 190 l/min.",
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
			"value": "Débit aspiré déclaré : 284 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2005291-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "560 mm × 445 mm × 735 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2005291-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "190 l/min",
			"evidenceIds": [
				"aircraft-2005291-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 6 bar de pression de travail",
			"evidenceIds": [
				"aircraft-2005291-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"aircraft-2005291-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2005291-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2005291-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "34.5 kg",
			"evidenceIds": [
				"aircraft-2005291-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2005291-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/compact-air-31124-e-2005291/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2005291, réf. 2005291",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 284 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2005291-20260927"
		],
		"tankLiters": [
			"aircraft-2005291-20260927"
		],
		"maxPressureBar": [
			"aircraft-2005291-20260927"
		],
		"fadCurve": [
			"aircraft-2005291-20260927"
		],
		"oilType": [
			"aircraft-2005291-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2005291-20260927"
		],
		"powerKw": [
			"aircraft-2005291-20260927"
		],
		"voltage": [
			"aircraft-2005291-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 284,
	"powerKw": 2.2,
	"voltage": "230 V"
};

export default product;
