import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "stanley-b-251e-9-50",
	"slug": "stanley-b-251e-9-50",
	"brand": "Stanley",
	"model": "B 251E/9/50",
	"mpn": "28DC404STN604",
	"tankLiters": 50,
	"maxPressureBar": 9,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-b-251e-9-50.webp",
		"alt": "Repères techniques Stanley B 251E/9/50, référence 28DC404STN604",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "B 251E/9/50, code 28DC404STN604 : cuve de 50 L, groupe B2800 de 1,5 kW et maximum de 9 bar, en 230 V à 50 Hz. Le B 251E/9/100 conserve le même groupe et les 255 L/min aspirés, avec une cuve de 100 L.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 255 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : B2800.",
			"Nombre de cylindres : 2.",
			"Vitesse de rotation : 1250 tr/min."
		],
		"limitations": [
			"Les valeurs d’aspiration communes ne documentent pas une production supérieure pour le 100 L. Le FAD sous pression et le taux de marche restent inconnus.",
			"Le 50 L indique 46,4 kg brut emballé et 770 × 340 × 670 mm emballé, en largeur × profondeur × hauteur ; le 100 L, 58,5 kg brut emballé.",
			"Le catalogue de 2020 réserve la roulette avant au 100 L. Disponibilité actuelle et dimensions de la machine nue à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"stanley-28dc404stn604-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B2800",
			"evidenceIds": [
				"stanley-28dc404stn604-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"stanley-28dc404stn604-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1250 tr/min",
			"evidenceIds": [
				"stanley-28dc404stn604-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "46,4 kg",
			"evidenceIds": [
				"stanley-28dc404stn604-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (largeur × profondeur × hauteur)",
			"value": "770x340x670 mm",
			"evidenceIds": [
				"stanley-28dc404stn604-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-28dc404stn604-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=16",
			"sourceLabel": "Stanley, catalogue compresseurs 2020, p. 16, réf. 28DC404STN604",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-28dc404stn604-20260927"
		],
		"tankLiters": [
			"stanley-28dc404stn604-20260927"
		],
		"maxPressureBar": [
			"stanley-28dc404stn604-20260927"
		],
		"fadCurve": [
			"stanley-28dc404stn604-20260927"
		],
		"oilType": [
			"stanley-28dc404stn604-20260927"
		],
		"intakeFlowLpm": [
			"stanley-28dc404stn604-20260927"
		],
		"powerKw": [
			"stanley-28dc404stn604-20260927"
		],
		"voltage": [
			"stanley-28dc404stn604-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 255,
	"powerKw": 1.5,
	"voltage": "230 V / 50 Hz"
};

export default product;
