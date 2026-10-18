import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "prebena-orkan-420",
	"slug": "prebena-orkan-420",
	"brand": "PREBENA",
	"model": "ORKAN 420",
	"mpn": "ORKAN 420",
	"tankLiters": 50,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/prebena-orkan-420.webp",
		"alt": "Repères techniques PREBENA ORKAN 420, référence ORKAN 420",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf#page=118",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "ORKAN 420 : cuve de 50 L, moteur de 2,2 kW et masse de 41 kg. Le catalogue distingue 420 L/min aspirés et 233 L/min de remplissage, sans pression d’essai précisée. L’ORKAN 250 voisin possède 24 L, pèse 35 kg et annonce 175 L/min de remplissage.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 420 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage sans pression de mesure : 233 L/min.",
			"Vitesse de rotation : 2800 tr/min.",
			"Masse publiée : 41,0 kg."
		],
		"limitations": [
			"Le FAD à la pression d’un outil exact et le taux de marche restent à documenter ; la courbe FAD demeure vide.",
			"La matrice constructeur juge l’ORKAN 420 adapté aux cloueurs, conditionnel pour une clé à chocs générique et inadapté à sa ponceuse excentrique générique. Ces classes ne constituent pas des verdicts pour des outils identifiés.",
			"Les 76 dB(A) sont une puissance acoustique LWA, distincte du bruit reçu par l’opérateur."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le catalogue distingue 420 L/min aspirés et 233 L/min de remplissage, sans pression d’essai associée à ce dernier chiffre. Aucun point FAD n’est extrapolé.",
			"evidenceIds": [
				"prebena-orkan-420-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "800 x 430 x 680 mm",
			"evidenceIds": [
				"prebena-orkan-420-20260927"
			]
		},
		{
			"label": "Capacité de remplissage sans pression de mesure",
			"value": "233 L/min",
			"evidenceIds": [
				"prebena-orkan-420-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "2800 tr/min",
			"evidenceIds": [
				"prebena-orkan-420-20260927"
			]
		},
		{
			"label": "Masse publiée",
			"value": "41,0 kg",
			"evidenceIds": [
				"prebena-orkan-420-20260927"
			]
		},
		{
			"label": "Puissance acoustique publiée LWA",
			"value": "76 dB(A)",
			"evidenceIds": [
				"prebena-orkan-420-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "prebena-orkan-420-20260927",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf#page=118",
			"sourceLabel": "PREBENA, catalogue général 2026, p. 118, réf. ORKAN 420",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le catalogue distingue 420 L/min aspirés et 233 L/min de remplissage, sans pression d’essai associée à ce dernier chiffre. Aucun point FAD n’est extrapolé."
		},
		{
			"id": "editorial-20261018-prebena-use-matrix-p130",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf#page=130",
			"sourceLabel": "PREBENA, catalogue 2026, matrice d’applications, page PDF 130, folio 128",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-18",
			"confidence": "A",
			"notes": "Matrice indicative de familles d’outils ; distincte d’un FAD ou d’un verdict pour référence exacte."
		}
	],
	"fieldSources": {
		"mpn": [
			"prebena-orkan-420-20260927"
		],
		"tankLiters": [
			"prebena-orkan-420-20260927"
		],
		"maxPressureBar": [
			"prebena-orkan-420-20260927"
		],
		"fadCurve": [
			"prebena-orkan-420-20260927"
		],
		"oilType": [
			"prebena-orkan-420-20260927"
		],
		"intakeFlowLpm": [
			"prebena-orkan-420-20260927"
		],
		"powerKw": [
			"prebena-orkan-420-20260927"
		],
		"voltage": [
			"prebena-orkan-420-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 420,
	"powerKw": 2.2,
	"voltage": "230 V"
};

export default product;
