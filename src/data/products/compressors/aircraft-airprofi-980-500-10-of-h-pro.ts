import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airprofi-980-500-10-of-h-pro",
	"slug": "aircraft-airprofi-980-500-10-of-h-pro",
	"brand": "Aircraft",
	"model": "AIRPROFI 980/500/10 OF H PRO",
	"mpn": "2025450",
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airprofi-980-500-10-of-h-pro.webp",
		"alt": "Repères techniques Aircraft AIRPROFI 980/500/10 OF H PRO, référence 2025450",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airprofi-98050010-of-h-pro-2025450/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft AIRPROFI 980/500/10 OF H PRO, référence 2025450 : cuve de 500 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Nombre de cylindres : 4. Nombre d’étages : 1.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 5 kW.",
			"Débit aspiré : 980 L/min, distinct du débit restitué.",
			"Alimentation publiée : 400 V.",
			"Nombre de cylindres : 4.",
			"Nombre d’étages : 1.",
			"Groupe de compression : HOS."
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
			"value": "Débit aspiré déclaré : 980 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1810 mm × 600 mm × 1160 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "4",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Motorisation publiée",
			"value": "Electric motor",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "318 kg",
			"evidenceIds": [
				"aircraft-2025450-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2025450-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airprofi-98050010-of-h-pro-2025450/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2025450, réf. 2025450",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 980 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2025450-20260927"
		],
		"tankLiters": [
			"aircraft-2025450-20260927"
		],
		"maxPressureBar": [
			"aircraft-2025450-20260927"
		],
		"fadCurve": [
			"aircraft-2025450-20260927"
		],
		"oilType": [
			"aircraft-2025450-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2025450-20260927"
		],
		"powerKw": [
			"aircraft-2025450-20260927"
		],
		"voltage": [
			"aircraft-2025450-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 980,
	"powerKw": 5,
	"voltage": "400 V"
};

export default product;
