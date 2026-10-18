import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "stanley-b-251e-9-100",
	"slug": "stanley-b-251e-9-100",
	"brand": "Stanley",
	"model": "B 251E/9/100",
	"mpn": "28FC404STN606",
	"tankLiters": 100,
	"maxPressureBar": 9,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-b-251e-9-100.webp",
		"alt": "Repères techniques Stanley B 251E/9/100, référence 28FC404STN606",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "B 251E/9/100, code 28FC404STN606 : cuve de 100 L, groupe B2800 de 1,5 kW et maximum de 9 bar, en 230 V à 50 Hz. Le B 251E/9/50 conserve le même groupe et les 255 L/min aspirés, avec 50 L de stockage.",
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
			"Les deux volumes de cuve partagent les mêmes valeurs d’aspiration publiées ; le tableau ne démontre pas une production supérieure pour le 100 L.",
			"Le FAD sous pression et le taux de marche restent inconnus.",
			"Les 58,5 kg et 950 × 390 × 770 mm sont les valeurs d’emballage en largeur × profondeur × hauteur. Disponibilité actuelle et dimensions de la machine nue à confirmer : le catalogue date de 2020."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"stanley-28fc404stn606-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : B2800.",
			"evidenceIds": [
				"stanley-28fc404stn606-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B2800",
			"evidenceIds": [
				"stanley-28fc404stn606-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"stanley-28fc404stn606-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1250 tr/min",
			"evidenceIds": [
				"stanley-28fc404stn606-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "58,5 kg",
			"evidenceIds": [
				"stanley-28fc404stn606-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (largeur × profondeur × hauteur)",
			"value": "950x390x770 mm",
			"evidenceIds": [
				"stanley-28fc404stn606-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-28fc404stn606-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=16",
			"sourceLabel": "Stanley, catalogue compresseurs 2020, p. 16, réf. 28FC404STN606",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-28fc404stn606-20260927"
		],
		"tankLiters": [
			"stanley-28fc404stn606-20260927"
		],
		"maxPressureBar": [
			"stanley-28fc404stn606-20260927"
		],
		"fadCurve": [
			"stanley-28fc404stn606-20260927"
		],
		"oilType": [
			"stanley-28fc404stn606-20260927"
		],
		"intakeFlowLpm": [
			"stanley-28fc404stn606-20260927"
		],
		"powerKw": [
			"stanley-28fc404stn606-20260927"
		],
		"voltage": [
			"stanley-28fc404stn606-20260927"
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
