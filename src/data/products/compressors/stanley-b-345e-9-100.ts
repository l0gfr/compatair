import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "stanley-b-345e-9-100",
	"slug": "stanley-b-345e-9-100",
	"brand": "Stanley",
	"model": "B 345E/9/100",
	"mpn": "28FC504STN607",
	"tankLiters": 100,
	"maxPressureBar": 9,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-b-345e-9-100.webp",
		"alt": "Repères techniques Stanley B 345E/9/100, référence 28FC504STN607",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "B 345E/9/100, code 28FC504STN607 : cuve de 100 L, groupeB2800B de 2,2 kW et maximum de 9 bar, en 230 V à 50 Hz. Le B251E/9/100 conserve 100 L et 9 bar, avec 1,5 kW et 255 L/min aspirés, contre 330 L/min pour le 345E.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 330 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : B2800B.",
			"Nombre de cylindres : 2.",
			"Vitesse de rotation : 1480 tr/min."
		],
		"limitations": [
			"Les valeurs 255 et 330 L/min sont des aspirations ; les débits restitués et les taux de marche restent à documenter.",
			"Le 345E indique 62 kg brut emballé, contre 58,5 kg pour le 251E. Les deux emballages mesurent 950 × 390 × 770 mm en largeur × profondeur × hauteur.",
			"Les 100 L possèdent une roulette avant selon le catalogue 2020. Disponibilité actuelle et dimensions de la machine nue restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 330 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"stanley-28fc504stn607-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B2800B",
			"evidenceIds": [
				"stanley-28fc504stn607-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"stanley-28fc504stn607-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1480 tr/min",
			"evidenceIds": [
				"stanley-28fc504stn607-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "62 kg",
			"evidenceIds": [
				"stanley-28fc504stn607-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (largeur × profondeur × hauteur)",
			"value": "950x 390x 770 mm",
			"evidenceIds": [
				"stanley-28fc504stn607-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-28fc504stn607-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=16",
			"sourceLabel": "Stanley, catalogue compresseurs 2020, p. 16, réf. 28FC504STN607",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 330 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-28fc504stn607-20260927"
		],
		"tankLiters": [
			"stanley-28fc504stn607-20260927"
		],
		"maxPressureBar": [
			"stanley-28fc504stn607-20260927"
		],
		"fadCurve": [
			"stanley-28fc504stn607-20260927"
		],
		"oilType": [
			"stanley-28fc504stn607-20260927"
		],
		"intakeFlowLpm": [
			"stanley-28fc504stn607-20260927"
		],
		"powerKw": [
			"stanley-28fc504stn607-20260927"
		],
		"voltage": [
			"stanley-28fc504stn607-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 330,
	"powerKw": 2.2,
	"voltage": "230 V / 50 Hz"
};

export default product;
