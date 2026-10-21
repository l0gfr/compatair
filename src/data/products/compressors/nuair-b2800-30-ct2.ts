import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-b2800-30-ct2",
	"slug": "nuair-b2800-30-ct2",
	"brand": "Nuair",
	"model": "B2800/30 CT2",
	"mpn": "28CC441NUB032",
	"tankLiters": 30,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-b2800-30-ct2.webp",
		"alt": "Repères techniques Nuair B2800/30 CT2, référence 28CC441NUB032",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "B2800/30 CT2, code 28CC441NUB032 : cuve de 30 L, maximum de 10 bar et moteur de 1,5 kW en 400 V à 50 Hz. Le CM2 28CC404NUB014 conserve la même cuve et le même groupe, avec une alimentation 230 V à 50 Hz.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 255 L/min, distinct du débit restitué.",
			"Alimentation publiée : 400 V / 50 Hz.",
			"Groupe de compression : B2800.",
			"Nombre de cylindres : 2.",
			"Vitesse de rotation : 1250 tr/min."
		],
		"limitations": [
			"Les deux lignes publient 255 L/min aspirés et 1 250 tr/min. Le FAD et le taux de marche restent à documenter.",
			"Le CT2 indique 46 kg brut emballé, contre 45 kg pour le CM2. Les emballages mesurent 820 × 390 × 750 mm en largeur × profondeur × hauteur.",
			"Ces données décrivent l’emballage et les versions électriques du catalogue 2022. Disponibilité actuelle et dimensions de la machine nue restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-28cc441nub032-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B2800",
			"evidenceIds": [
				"nuair-28cc441nub032-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"nuair-28cc441nub032-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1250 tr/min",
			"evidenceIds": [
				"nuair-28cc441nub032-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "46 kg",
			"evidenceIds": [
				"nuair-28cc441nub032-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (largeur × profondeur × hauteur)",
			"value": "820 × 390 × 750 mm",
			"evidenceIds": [
				"nuair-28cc441nub032-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-28cc441nub032-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=12",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 12, réf. 28CC441NUB032",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-28cc441nub032-20260927"
		],
		"tankLiters": [
			"nuair-28cc441nub032-20260927"
		],
		"maxPressureBar": [
			"nuair-28cc441nub032-20260927"
		],
		"fadCurve": [
			"nuair-28cc441nub032-20260927"
		],
		"oilType": [
			"nuair-28cc441nub032-20260927"
		],
		"intakeFlowLpm": [
			"nuair-28cc441nub032-20260927"
		],
		"powerKw": [
			"nuair-28cc441nub032-20260927"
		],
		"voltage": [
			"nuair-28cc441nub032-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 255,
	"powerKw": 1.5,
	"voltage": "400 V / 50 Hz"
};

export default product;
