import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-b2800-50-cm2",
	"slug": "nuair-b2800-50-cm2",
	"brand": "Nuair",
	"model": "B2800/50 CM2",
	"mpn": "28DC404NUB010",
	"tankLiters": 50,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-b2800-50-cm2.webp",
		"alt": "Repères techniques Nuair B2800/50 CM2, référence 28DC404NUB010",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Le B2800/50 CM2, code 28DC404NUB010, réunit une cuve de 50 L et une alimentation de 230 V à 50 Hz. Le B2800/30 CT2 voisin, code 28CC441NUB032, possède 30 L et demande du 400 V à 50 Hz. Le choix porte donc sur la réserve d’air et l’alimentation disponible dans l’atelier ; les deux lignes indiquent le même groupe B2800 de 1,5 kW, 255 L/min aspirés et 10 bar au maximum. Le débit restitué sous pression reste à documenter avant de dimensionner un outil. Les 50 kg et les dimensions du tableau décrivent l’emballage du CM2.",
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
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Données issues du nuair professional, catalogue 2022, encore accessible sur le site du fabricant. La commercialisation actuelle de cette référence n’est pas confirmée.",
			"La masse et les dimensions de ce tableau concernent l’emballage, pas la machine nue."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-28dc404nub010-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : B2800.",
			"evidenceIds": [
				"nuair-28dc404nub010-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B2800",
			"evidenceIds": [
				"nuair-28dc404nub010-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"nuair-28dc404nub010-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1250 tr/min",
			"evidenceIds": [
				"nuair-28dc404nub010-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "50 kg",
			"evidenceIds": [
				"nuair-28dc404nub010-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "820x390x750 mm",
			"evidenceIds": [
				"nuair-28dc404nub010-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-28dc404nub010-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=12",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 12, réf. 28DC404NUB010",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		},
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
			"nuair-28dc404nub010-20260927"
		],
		"tankLiters": [
			"nuair-28dc404nub010-20260927"
		],
		"maxPressureBar": [
			"nuair-28dc404nub010-20260927"
		],
		"fadCurve": [
			"nuair-28dc404nub010-20260927"
		],
		"oilType": [
			"nuair-28dc404nub010-20260927"
		],
		"intakeFlowLpm": [
			"nuair-28dc404nub010-20260927"
		],
		"powerKw": [
			"nuair-28dc404nub010-20260927"
		],
		"voltage": [
			"nuair-28dc404nub010-20260927"
		],
		"editorial": [
			"nuair-28dc404nub010-20260927"
		],
		"specifications": [
			"nuair-28dc404nub010-20260927"
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
