import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "prebena-vitas-100-akku",
	"slug": "prebena-vitas-100-akku",
	"brand": "PREBENA",
	"model": "VITAS 100-AKKU",
	"mpn": "VITAS 100-AKKU",
	"tankLiters": 5,
	"maxPressureBar": 8,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/prebena-vitas-100-akku.webp",
		"alt": "Repères techniques PREBENA VITAS 100-AKKU, référence VITAS 100-AKKU",
		"sourceUrl": "https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf#page=115",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "VITAS 100-AKKU : compresseur sur batterie 18 V, cuve de 5 L et masse publiée de 8,5 kg. Le catalogue annonce 72 L/min de remplissage et 100 L/min aspirés. Le VITAS 45 voisin fonctionne sur secteur 230 V, possède 4 L et annonce 24 L/min de remplissage pour 10 kg.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons sans huile.",
			"Débit aspiré : 100 L/min, distinct du débit restitué.",
			"Alimentation publiée : 18 V (batterie).",
			"Capacité de remplissage sans pression de mesure : 72 L/min.",
			"Vitesse de rotation : 2760 tr/min.",
			"Masse publiée : 8,5 kg."
		],
		"limitations": [
			"La référence 100-AKKU est livrée sans batterie. Le kit 100-AKKU-SET ajoute une batterie AKKU18-5,5-LIHD et le chargeur AKKU-STATION12-36.",
			"La pression d’essai du remplissage et le taux de marche restent inconnus. Aucune autonomie ou cadence de clouage n’est déduite de ces valeurs.",
			"Le 100-AKKU annonce LWA 93 dB(A), contre 78 dB(A) pour le VITAS 45. Ces puissances acoustiques sont distinctes d’une pression acoustique à distance.",
			"Le 100-AKKU atteint 8 bar et mesure 340 × 315 × 380 mm ; le VITAS 45 atteint 10 bar. Le choix batterie/secteur et le volume sont des différences de configuration."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le catalogue distingue 100 L/min aspirés et 72 L/min de remplissage, sans pression d’essai associée à ce dernier chiffre. Aucun point FAD n’est extrapolé.",
			"evidenceIds": [
				"prebena-vitas-100-akku-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "340 x 315 x 380 mm",
			"evidenceIds": [
				"prebena-vitas-100-akku-20260927"
			]
		},
		{
			"label": "Capacité de remplissage sans pression de mesure",
			"value": "72 L/min",
			"evidenceIds": [
				"prebena-vitas-100-akku-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "2760 tr/min",
			"evidenceIds": [
				"prebena-vitas-100-akku-20260927"
			]
		},
		{
			"label": "Masse publiée",
			"value": "8,5 kg",
			"evidenceIds": [
				"prebena-vitas-100-akku-20260927"
			]
		},
		{
			"label": "Livraison de cette référence",
			"value": "Sans batterie ; kit 100-AKKU-SET distinct avec AKKU18-5,5-LIHD et chargeur AKKU-STATION12-36",
			"evidenceIds": [
				"prebena-vitas-100-akku-20260927"
			]
		},
		{
			"label": "Puissance acoustique LWA publiée",
			"value": "93 dB(A)",
			"evidenceIds": [
				"prebena-vitas-100-akku-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "prebena-vitas-100-akku-20260927",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf#page=115",
			"sourceLabel": "PREBENA, catalogue général 2026, p. 115, réf. VITAS 100-AKKU",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le catalogue distingue 100 L/min aspirés et 72 L/min de remplissage, sans pression d’essai associée à ce dernier chiffre. Aucun point FAD n’est extrapolé."
		}
	],
	"fieldSources": {
		"mpn": [
			"prebena-vitas-100-akku-20260927"
		],
		"tankLiters": [
			"prebena-vitas-100-akku-20260927"
		],
		"maxPressureBar": [
			"prebena-vitas-100-akku-20260927"
		],
		"fadCurve": [
			"prebena-vitas-100-akku-20260927"
		],
		"oilType": [
			"prebena-vitas-100-akku-20260927"
		],
		"intakeFlowLpm": [
			"prebena-vitas-100-akku-20260927"
		],
		"voltage": [
			"prebena-vitas-100-akku-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 100,
	"voltage": "18 V (batterie)"
};

export default product;
