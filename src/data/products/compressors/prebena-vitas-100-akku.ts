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
		"overview": "PREBENA VITAS 100-AKKU, référence VITAS 100-AKKU : cuve de 5 L, pression maximale publiée de 8 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage sans pression de mesure : 72 L/min. Vitesse de rotation : 2760 tr/min.",
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
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Le catalogue précise que la batterie est vendue séparément pour cette référence."
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
