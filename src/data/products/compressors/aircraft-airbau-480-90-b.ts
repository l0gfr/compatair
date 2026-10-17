import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "aircraft-airbau-480-90-b",
	"slug": "aircraft-airbau-480-90-b",
	"brand": "Aircraft",
	"model": "AIRBAU 480/90 B",
	"mpn": "2004450",
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/aircraft-airbau-480-90-b.webp",
		"alt": "Repères techniques Aircraft AIRBAU 480/90 B, référence 2004450",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airbau-480100-b-2004450/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "AIRBAU 480/90 B, article 2004450 : groupe thermique quatre temps de 4,1 kW sur cuve de 90 L. Le fabricant publie environ 340 L/min de remplissage à 7 bar et 480 L/min aspirés. La nature et le protocole de la mesure de remplissage restent à qualifier pour le moteur CompatAir.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 4,1 kW.",
			"Débit aspiré : 480 L/min, distinct du débit restitué.",
			"Capacité de remplissage approximative : 340 l/min.",
			"Condition de remplissage publiée : à 7 bar.",
			"Nombre de cylindres : 2."
		],
		"limitations": [
			"La pression de remplissage est publiée : 7 bar. Le manque porte sur la qualification du débit comme FAD et ses conditions d’essai.",
			"Le taux de marche applicable reste à confirmer. La motorisation thermique demande les conditions de ventilation, d’installation et d’entretien de la notice.",
			"Le voisin AIRBAU 652/100 B PRO est une autre référence, avec deux étages, 100 L et 14 bar ; ses performances ne sont pas transférées au 2004450."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débit aspiré déclaré : 480 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée.",
			"evidenceIds": [
				"aircraft-2004450-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1063 mm × 502 mm × 953 mm (L × l × H, approximatives)",
			"evidenceIds": [
				"aircraft-2004450-20260927"
			]
		},
		{
			"label": "Capacité de remplissage approximative",
			"value": "340 l/min",
			"evidenceIds": [
				"aircraft-2004450-20260927"
			]
		},
		{
			"label": "Condition de remplissage publiée",
			"value": "à 7 bar",
			"evidenceIds": [
				"aircraft-2004450-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"aircraft-2004450-20260927"
			]
		},
		{
			"label": "Nombre d’étages",
			"value": "1",
			"evidenceIds": [
				"aircraft-2004450-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HOS",
			"evidenceIds": [
				"aircraft-2004450-20260927"
			]
		},
		{
			"label": "Motorisation publiée",
			"value": "1 cylinder / 4-stroke engine",
			"evidenceIds": [
				"aircraft-2004450-20260927"
			]
		},
		{
			"label": "Masse approximative publiée",
			"value": "88 kg",
			"evidenceIds": [
				"aircraft-2004450-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2004450-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airbau-480100-b-2004450/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2004450, réf. 2004450",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Débit aspiré déclaré : 480 L/min. La capacité de remplissage est conservée séparément ; la fiche n’établit pas une mesure FAD normalisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2004450-20260927"
		],
		"tankLiters": [
			"aircraft-2004450-20260927"
		],
		"maxPressureBar": [
			"aircraft-2004450-20260927"
		],
		"fadCurve": [
			"aircraft-2004450-20260927"
		],
		"oilType": [
			"aircraft-2004450-20260927"
		],
		"intakeFlowLpm": [
			"aircraft-2004450-20260927"
		],
		"powerKw": [
			"aircraft-2004450-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 480,
	"powerKw": 4.1
};

export default product;
