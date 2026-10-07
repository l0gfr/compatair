import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"slug": "elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"brand": "ELGi",
	"model": "EG 132-P",
	"variant": {
		"familyId": "elgi-eg-132-p",
		"label": "groupe fixe au sol, sans sécheur ; vitesse variable, 50 Hz, 13,5 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse variable",
			"pressionMaximale": "13,5 bar",
			"cuve": "0 L",
			"régulation": "vitesse variable",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13.5,
	"fadCurve": [
		{
			"pressureBar": 4.5,
			"litersPerMinute": 26800
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 26500
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 24400
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 21500
		},
		{
			"pressureBar": 12.5,
			"litersPerMinute": 17500
		}
	],
	"oilType": "oil",
	"powerKw": 132,
	"weightKg": 3345,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable.webp",
		"alt": "Repères techniques : ELGi EG 132-P, 50 Hz, vitesse variable",
		"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse variable",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "13,5 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "FAD à 4,5 bar",
			"value": "10,7 à 26,8 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "FAD à 7 bar",
			"value": "10,6 à 26,5 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "FAD à 8 bar",
			"value": "10,4 à 24,4 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "10,4 à 21,5 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "FAD à 12,5 bar",
			"value": "8,4 à 17,5 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "50 Hz",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Inde",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		}
	],
	"editorial": {
		"overview": "ELGi EG 132-P, 50 Hz, vitesse variable. 26 800 L/min à 4,5 bar ; 26 500 L/min à 7 bar ; 24 400 L/min à 8 bar ; 21 500 L/min à 10 bar ; 17 500 L/min à 12,5 bar. Moteur 132 kW ; groupe fixe au sol, sans sécheur ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 13,5 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Les points de vitesse variable sont regroupés dans une seule courbe. Le maximum de chaque plage publié est retenu ; la stabilité à faible charge n’est pas simulée.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-elgi-eg-premium-p8",
			"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf#page=8",
			"sourceLabel": "ELGi EG Premium 90–160 kW, brochure Inde 50 Hz, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 2b9f43ec8dff222a8f93b9217c688172836c6c783a2c5af2c5e44ebf448f8b9d de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-premium50-oil-p3",
			"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf#page=3",
			"sourceLabel": "ELGi EG Premium 90–160 kW, brochure Inde 50 Hz ; lubrification du bloc de compression, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 2b9f43ec8dff222a8f93b9217c688172836c6c783a2c5af2c5e44ebf448f8b9d de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-elgi-eg-premium-p8"
		],
		"maxPressureBar": [
			"october2b-elgi-eg-premium-p8"
		],
		"fadCurve": [
			"october2b-elgi-eg-premium-p8"
		],
		"powerKw": [
			"october2b-elgi-eg-premium-p8"
		],
		"oilType": [
			"october2b-elgi-premium50-oil-p3"
		],
		"weightKg": [
			"october2b-elgi-eg-premium-p8"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
