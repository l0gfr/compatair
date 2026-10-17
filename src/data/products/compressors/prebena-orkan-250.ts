import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "prebena-orkan-250",
	"slug": "prebena-orkan-250",
	"brand": "PREBENA",
	"model": "ORKAN 250",
	"mpn": "ORKAN 250",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/prebena-orkan-250.webp",
		"alt": "Repères techniques PREBENA ORKAN 250, référence ORKAN 250",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf#page=118",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "ORKAN 250 : 24 L, 35 kg et 1 400 tr/min. Le PIONEER 210 voisin possède 20 L et pèse 26 kg ; l’ORKAN 420 passe à 50 L et 41 kg. Le catalogue distingue 250 L/min aspirés et 175 L/min de remplissage pour l’ORKAN 250, avec une pression d’essai non précisée.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 250 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage sans pression de mesure : 175 L/min.",
			"Vitesse de rotation : 1400 tr/min.",
			"Masse publiée : 35,0 kg."
		],
		"limitations": [
			"Le FAD à la pression d’un outil précis et le taux de marche restent à documenter ; la courbe FAD demeure vide.",
			"La matrice constructeur oriente l’ORKAN 250 vers les petits et moyens cloueurs ; elle le juge inadapté aux clés à chocs et aux ponceuses excentriques génériques de son tableau. Ces indications par famille ne remplacent pas un verdict pour une référence d’outil exacte.",
			"Les 76 dB(A) sont un niveau de puissance acoustique LWA. Le catalogue ne permet pas d’en déduire le niveau reçu par l’opérateur."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le catalogue distingue 250 L/min aspirés et 175 L/min de remplissage, sans pression d’essai associée à ce dernier chiffre. Aucun point FAD n’est extrapolé.",
			"evidenceIds": [
				"prebena-orkan-250-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "625 x 310 x 600 mm",
			"evidenceIds": [
				"prebena-orkan-250-20260927"
			]
		},
		{
			"label": "Capacité de remplissage ; pression d’essai non précisée",
			"value": "175 L/min",
			"evidenceIds": [
				"prebena-orkan-250-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1400 tr/min",
			"evidenceIds": [
				"prebena-orkan-250-20260927"
			]
		},
		{
			"label": "Masse publiée",
			"value": "35,0 kg",
			"evidenceIds": [
				"prebena-orkan-250-20260927"
			]
		},
		{
			"label": "Puissance acoustique LWA",
			"value": "76 dB(A), indicateur de puissance acoustique ; pression acoustique au poste non déduite",
			"evidenceIds": [
				"prebena-orkan-250-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "prebena-orkan-250-20260927",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf#page=118",
			"sourceLabel": "PREBENA, catalogue général 2026, page PDF 118 / folio 116, ORKAN 250 ; matrice PDF 130 / folio 128",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le catalogue distingue 250 L/min aspirés et 175 L/min de remplissage, sans pression d’essai associée à ce dernier chiffre. Aucun point FAD n’est extrapolé."
		}
	],
	"fieldSources": {
		"mpn": [
			"prebena-orkan-250-20260927"
		],
		"tankLiters": [
			"prebena-orkan-250-20260927"
		],
		"maxPressureBar": [
			"prebena-orkan-250-20260927"
		],
		"fadCurve": [
			"prebena-orkan-250-20260927"
		],
		"oilType": [
			"prebena-orkan-250-20260927"
		],
		"intakeFlowLpm": [
			"prebena-orkan-250-20260927"
		],
		"powerKw": [
			"prebena-orkan-250-20260927"
		],
		"voltage": [
			"prebena-orkan-250-20260927"
		],
		"noiseDb": [
			"prebena-orkan-250-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 250,
	"powerKw": 1.5,
	"voltage": "230 V",
	"noiseDb": 76
};

export default product;
