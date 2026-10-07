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
		"overview": "PREBENA ORKAN 250, référence ORKAN 250 : cuve de 24 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Capacité de remplissage sans pression de mesure : 175 L/min. Vitesse de rotation : 1400 tr/min.",
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
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer."
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
			"label": "Capacité de remplissage sans pression de mesure",
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
		}
	],
	"evidence": [
		{
			"id": "prebena-orkan-250-20260927",
			"sourceUrl": "https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf#page=118",
			"sourceLabel": "PREBENA, catalogue général 2026, p. 118, réf. ORKAN 250",
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
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 250,
	"powerKw": 1.5,
	"voltage": "230 V"
};

export default product;
