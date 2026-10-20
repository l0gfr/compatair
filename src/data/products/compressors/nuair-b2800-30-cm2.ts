import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-b2800-30-cm2",
	"slug": "nuair-b2800-30-cm2",
	"brand": "Nuair",
	"model": "B2800/30 CM2",
	"mpn": "28CC404NUB014",
	"tankLiters": 30,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-b2800-30-cm2.webp",
		"alt": "Repères techniques Nuair B2800/30 CM2, référence 28CC404NUB014",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "B2800/30 CM2, code 28CC404NUB014 : cuve de 30 L, moteur de 1,5 kW et alimentation 230 V à 50 Hz, pour un maximum de 10 bar. Le B2800/100 CM2 utilise le même groupe à 1 250 tr/min et les mêmes 255 L/min aspirés, avec une cuve de 100 L.",
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
			"Le catalogue 2022 donne l’aspiration, sans FAD sous pression ni taux de marche exploitable.",
			"Le 30 L indique 45 kg brut emballé et 820 × 390 × 750 mm emballé en largeur × profondeur × hauteur ; le 100 L indique 61 kg brut emballé.",
			"La différence de stockage et de manutention est documentée. Dimensions de la machine nue et disponibilité actuelle restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-28cc404nub014-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B2800",
			"evidenceIds": [
				"nuair-28cc404nub014-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"nuair-28cc404nub014-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1250 tr/min",
			"evidenceIds": [
				"nuair-28cc404nub014-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "45 kg",
			"evidenceIds": [
				"nuair-28cc404nub014-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (largeur × profondeur × hauteur)",
			"value": "820x 390x 750 mm",
			"evidenceIds": [
				"nuair-28cc404nub014-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-28cc404nub014-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=12",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 12, réf. 28CC404NUB014",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-28cc404nub014-20260927"
		],
		"tankLiters": [
			"nuair-28cc404nub014-20260927"
		],
		"maxPressureBar": [
			"nuair-28cc404nub014-20260927"
		],
		"fadCurve": [
			"nuair-28cc404nub014-20260927"
		],
		"oilType": [
			"nuair-28cc404nub014-20260927"
		],
		"intakeFlowLpm": [
			"nuair-28cc404nub014-20260927"
		],
		"powerKw": [
			"nuair-28cc404nub014-20260927"
		],
		"voltage": [
			"nuair-28cc404nub014-20260927"
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
