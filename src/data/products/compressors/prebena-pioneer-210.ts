import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "prebena-pioneer-210",
	"slug": "prebena-pioneer-210",
	"brand": "PREBENA",
	"model": "PIONEER 210",
	"mpn": "PIONEER 210",
	"tankLiters": 20,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/prebena-pioneer-210.webp",
		"alt": "Repères techniques PREBENA PIONEER 210, référence PIONEER 210",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf#page=118",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PIONEER 210 : cuve de 20 L, moteur de 1,5 kW à 2 800 tr/min et masse publiée de 26 kg. Le catalogue distingue 210 L/min aspirés et 139 L/min de remplissage. L’ORKAN 250 voisin possède 24 L, tourne à 1 400 tr/min et annonce 175 L/min de remplissage pour 35 kg.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 210 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V.",
			"Capacité de remplissage sans pression de mesure : 139 L/min.",
			"Vitesse de rotation : 2800 tr/min.",
			"Masse publiée : 26,0 kg."
		],
		"limitations": [
			"La pression d’essai du remplissage et le taux de marche restent à documenter ; aucun point FAD n’est ajouté.",
			"Le PIONEER 210 annonce une puissance acoustique LWA de 74 dB(A), contre 76 dB(A) pour l’ORKAN 250. Le LWA ne décrit pas directement le bruit reçu par l’opérateur.",
			"Les 20 L et les 480 × 470 × 725 mm publiés servent au choix de transport et d’implantation. La compatibilité avec un outil exact demande le débit utile à sa pression."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le catalogue distingue 210 L/min aspirés et 139 L/min de remplissage, sans pression d’essai associée à ce dernier chiffre. Aucun point FAD n’est extrapolé.",
			"evidenceIds": [
				"prebena-pioneer-210-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "480 x 470 x 725 mm",
			"evidenceIds": [
				"prebena-pioneer-210-20260927"
			]
		},
		{
			"label": "Capacité de remplissage sans pression de mesure",
			"value": "139 L/min",
			"evidenceIds": [
				"prebena-pioneer-210-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "2800 tr/min",
			"evidenceIds": [
				"prebena-pioneer-210-20260927"
			]
		},
		{
			"label": "Masse publiée",
			"value": "26,0 kg",
			"evidenceIds": [
				"prebena-pioneer-210-20260927"
			]
		},
		{
			"label": "Puissance acoustique publiée LWA",
			"value": "74 dB(A)",
			"evidenceIds": [
				"prebena-pioneer-210-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "prebena-pioneer-210-20260927",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf#page=118",
			"sourceLabel": "PREBENA, catalogue général 2026, p. 118, réf. PIONEER 210",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le catalogue distingue 210 L/min aspirés et 139 L/min de remplissage, sans pression d’essai associée à ce dernier chiffre. Aucun point FAD n’est extrapolé."
		}
	],
	"fieldSources": {
		"mpn": [
			"prebena-pioneer-210-20260927"
		],
		"tankLiters": [
			"prebena-pioneer-210-20260927"
		],
		"maxPressureBar": [
			"prebena-pioneer-210-20260927"
		],
		"fadCurve": [
			"prebena-pioneer-210-20260927"
		],
		"oilType": [
			"prebena-pioneer-210-20260927"
		],
		"intakeFlowLpm": [
			"prebena-pioneer-210-20260927"
		],
		"powerKw": [
			"prebena-pioneer-210-20260927"
		],
		"voltage": [
			"prebena-pioneer-210-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 210,
	"powerKw": 1.5,
	"voltage": "230 V"
};

export default product;
