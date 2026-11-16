import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "nuair-fu-227-10-12",
	"slug": "nuair-fu-227-10-12",
	"brand": "Nuair",
	"model": "FU-227/10/12",
	"mpn": "HYBD404NUA",
	"tankLiters": 12,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-fu-227-10-12-technical-20261116-reviews.svg",
		"alt": "Repères techniques Nuair FU-227/10/12, référence HYBD404NUA",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Le FU-227/10/12 HYBD404NUA est la version FUTURA à cuve de 12 L, contre 24 L pour le FU-227/10/24V. Les deux publient 1,5 kW, 10 bar maximum et 222 L/min de déplacement d’air à 3 400 tr/min. Le choix change surtout le stockage et la forme : l’emballage du 12 L mesure 520 × 255 × 470 mm, celui du 24V 315 × 315 × 700 mm. Aucun de ces débits aspirés n’est un FAD.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 222 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : HY227.",
			"Nombre de cylindres : 1.",
			"Vitesse de rotation : 3400 tr/min."
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
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 222 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-hybd404nua-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : HY227.",
			"evidenceIds": [
				"nuair-hybd404nua-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "HY227",
			"evidenceIds": [
				"nuair-hybd404nua-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "1",
			"evidenceIds": [
				"nuair-hybd404nua-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"nuair-hybd404nua-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "16 kg",
			"evidenceIds": [
				"nuair-hybd404nua-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "520x255x470 mm",
			"evidenceIds": [
				"nuair-hybd404nua-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-hybd404nua-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=28",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 28, réf. HYBD404NUA",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 222 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		},
		{
			"id": "review:2026-11-16-reviews:nuair-fu-227-10-12:0",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf",
			"sourceLabel": "Nuair, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le FU-227/10/12 HYBD404NUA est la version FUTURA à cuve de 12 L, contre 24 L pour le FU-227/10/24V. Les deux publient 1,5 kW, 10 bar maximum et 222 L/min de déplacement d’air à 3 400 tr/min. Le choix change surtout le stockage et la forme : l’emballage du 12 L mesure 520 × 255 × 470 mm, celui du 24V 315 × 315 × 700 mm. Aucun de ces débits aspirés n’est un FAD. GET complet SHA-256 ff66120118923fba45228dbfc35eca66f045a3ad4c98e751bec6dfd582ecb1a9. Pages PDF lues : 28."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-hybd404nua-20260927"
		],
		"tankLiters": [
			"nuair-hybd404nua-20260927"
		],
		"maxPressureBar": [
			"nuair-hybd404nua-20260927"
		],
		"fadCurve": [
			"nuair-hybd404nua-20260927"
		],
		"oilType": [
			"nuair-hybd404nua-20260927"
		],
		"intakeFlowLpm": [
			"nuair-hybd404nua-20260927"
		],
		"powerKw": [
			"nuair-hybd404nua-20260927"
		],
		"voltage": [
			"nuair-hybd404nua-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 222,
	"powerKw": 1.5,
	"voltage": "230 V / 50 Hz"
};

export default product;
