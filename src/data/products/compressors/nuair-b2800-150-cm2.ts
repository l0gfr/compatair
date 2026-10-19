import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-b2800-150-cm2",
	"slug": "nuair-b2800-150-cm2",
	"brand": "Nuair",
	"model": "B2800/150 CM2",
	"mpn": "28HC404NUB024",
	"tankLiters": 150,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-b2800-150-cm2.webp",
		"alt": "Repères techniques Nuair B2800/150 CM2, référence 28HC404NUB024",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "B2800/150 CM2, code 28HC404NUB024 : cuve de 150 L, maximum de 10 bar, moteur de 1,5 kW et alimentation 230 V à 50 Hz. Le B2800/100 CM2 utilise le même groupe, les mêmes 1 250 tr/min et les mêmes 255 L/min aspirés, avec une cuve de 100 L.",
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
			"Le catalogue 2022 fournit l’aspiration, sans FAD sous pression ni taux de marche exploitable.",
			"Le 150 L pèse 83 kg brut emballé et mesure 1 310 × 430 × 1 030 mm emballé, en largeur × profondeur × hauteur. Le 100 L indique 61 kg brut emballé.",
			"Le volume supérieur augmente le stockage ; il ne documente pas une production supérieure. Dimensions de la machine nue et disponibilité actuelle à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-28hc404nub024-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B2800",
			"evidenceIds": [
				"nuair-28hc404nub024-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"nuair-28hc404nub024-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1250 tr/min",
			"evidenceIds": [
				"nuair-28hc404nub024-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "83 kg",
			"evidenceIds": [
				"nuair-28hc404nub024-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (largeur × profondeur × hauteur)",
			"value": "1310x430x1030 mm",
			"evidenceIds": [
				"nuair-28hc404nub024-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-28hc404nub024-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=12",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 12, réf. 28HC404NUB024",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-28hc404nub024-20260927"
		],
		"tankLiters": [
			"nuair-28hc404nub024-20260927"
		],
		"maxPressureBar": [
			"nuair-28hc404nub024-20260927"
		],
		"fadCurve": [
			"nuair-28hc404nub024-20260927"
		],
		"oilType": [
			"nuair-28hc404nub024-20260927"
		],
		"intakeFlowLpm": [
			"nuair-28hc404nub024-20260927"
		],
		"powerKw": [
			"nuair-28hc404nub024-20260927"
		],
		"voltage": [
			"nuair-28hc404nub024-20260927"
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
