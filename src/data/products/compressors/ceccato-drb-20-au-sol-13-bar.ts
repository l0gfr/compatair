const product = {
	"id": "ceccato-drb-20-au-sol-13-bar",
	"slug": "ceccato-drb-20-au-sol-13-bar",
	"brand": "Ceccato",
	"model": "DRB 20",
	"variant": {
		"familyId": "ceccato-drb-20",
		"label": "au sol ; 13 bar",
		"distinguishingAttributes": {
			"configuration": "au sol",
			"pression": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 12.5,
			"litersPerMinute": 1950
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 15,
	"weightKg": 330,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ceccato-drb-20-au-sol-13-bar.webp",
		"alt": "Repères techniques : Ceccato DRB 20, au sol ; 13 bar",
		"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/drb/drb-20-35-hp/Ceccato_DRB20-34_EN_LR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "au sol",
			"evidenceIds": [
				"october-ceccato-drb-p7"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1200 × 835 × 1220 mm",
			"evidenceIds": [
				"october-ceccato-drb-p7"
			]
		},
		{
			"label": "Condition du FAD",
			"value": "Débit d’air réel, ISO 1217 annexe C ; pression de référence séparée du maximum",
			"evidenceIds": [
				"october-ceccato-drb-p7"
			]
		},
		{
			"label": "Pression maximale et pression de référence",
			"value": "13 bar maximum ; FAD mesuré à 12,5 bar",
			"evidenceIds": [
				"october-ceccato-drb-p7"
			]
		}
	],
	"editorial": {
		"overview": "Ceccato DRB 20, au sol ; 13 bar. au sol. Débit restitué déclaré : 1 950 L/min à 12,5 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 1200 × 835 × 1220 mm.",
			"Masse de cette configuration : 330 kg ; puissance moteur : 15 kW.",
			"La page constructeur de cette série prévoit le fonctionnement continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"Le point FAD appartient à cette configuration et à sa pression de référence ; aucune courbe de fonctionnement supplémentaire n’est inventée.",
			"Mode de lubrification non établi dans cette fiche ; aucune qualité d’air déduite.",
			"Configuration et pression explicites du catalogue, sans numéro d’article attribué artificiellement ; faire confirmer la version commandée.",
			"Disponibilité locale, alimentation électrique, dégagements d’entretien et qualité d’air au point d’usage à vérifier avant installation."
		]
	},
	"evidence": [
		{
			"id": "october-ceccato-drb-p7",
			"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/drb/drb-20-35-hp/Ceccato_DRB20-34_EN_LR.pdf#page=7",
			"sourceLabel": "Ceccato, documentation constructeur, page 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 36de017fd6f8e157e7827b0032fd27f34e40c340a8421cb4b889853235022c40. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "october-ceccato-drb-page",
			"sourceUrl": "https://www.ceccato.com/fr-international/air-compressor-products/rotary-screw-compressor/fixed-speed/drb-20-35-hp",
			"sourceLabel": "Ceccato, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 c8ff08a10788f55386eecb322217c51c8752900109487c3b4cb592ec5201df20. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october-ceccato-drb-p7"
		],
		"maxPressureBar": [
			"october-ceccato-drb-p7"
		],
		"fadCurve": [
			"october-ceccato-drb-p7"
		],
		"powerKw": [
			"october-ceccato-drb-p7"
		],
		"weightKg": [
			"october-ceccato-drb-p7"
		],
		"dutyCycle": [
			"october-ceccato-drb-page"
		]
	},
	"notes": [
		"Tableau page 7 ; conditions ISO 1217 conservées. Aucun essai physique réalisé."
	]
};

export default product;
