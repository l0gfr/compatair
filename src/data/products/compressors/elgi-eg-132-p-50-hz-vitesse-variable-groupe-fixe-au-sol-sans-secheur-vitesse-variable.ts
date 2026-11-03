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
		},
		{
			"label": "Configuration du tableau",
			"value": "EG 132-P, VFD, 50 Hz, pression maximale de configuration 13,5 bar",
			"evidenceIds": [
				"elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable-reserved-20261103-1"
			]
		},
		{
			"label": "Plage FAD à la pression de travail 12,5 bar",
			"value": "8,4–17,5 m³/min (8 400–17 500 L/min)",
			"evidenceIds": [
				"elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance du moteur",
			"value": "132 kW",
			"evidenceIds": [
				"elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable-reserved-20261103-1"
			]
		},
		{
			"label": "Masse publiée de la version VFD",
			"value": "3 345 kg",
			"evidenceIds": [
				"elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable-reserved-20261103-1"
			]
		},
		{
			"label": "Méthode du débit",
			"value": "ISO 1217:2009 annexe C ; groupe complet, sortie après séparateur d’humidité",
			"evidenceIds": [
				"elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "ELGi EG 132-P. La configuration VFD de plafond 13,5 bar possède une plage de FAD publiée à 12,5 bar. Les lignes de plafond 5,5/8/9/11 bar sont d’autres configurations et ne forment pas sa courbe. Le moteur conserve uniquement 17 500 L/min à 12,5 bar ; le taux de marche du groupe reste inconnu.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 13,5 bar ; le point FAD conserve sa pression publiée.",
			"Configuration du tableau : EG 132-P, VFD, 50 Hz, pression maximale de configuration 13,5 bar.",
			"Plage FAD à la pression de travail 12,5 bar : 8,4–17,5 m³/min (8 400–17 500 L/min).",
			"Puissance du moteur : 132 kW.",
			"Masse publiée de la version VFD : 3 345 kg.",
			"Méthode du débit : ISO 1217:2009 annexe C ; groupe complet, sortie après séparateur d’humidité."
		],
		"limitations": [
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur.",
			"La borne basse de modulation de 8 400 L/min est conservée dans les spécifications ; la courbe moteur contient le seul maximum de cette configuration, sans interpolation entre variantes."
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
		},
		{
			"id": "elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable-reserved-20261103-1",
			"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf#page=8",
			"sourceLabel": "ELGi : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 2b9f43ec8dff222a8f93b9217c688172836c6c783a2c5af2c5e44ebf448f8b9d. La configuration VFD de plafond 13,5 bar possède une plage de FAD publiée à 12,5 bar. Les lignes de plafond 5,5/8/9/11 bar sont d’autres configurations et ne forment pas sa courbe. Le moteur conserve uniquement 17 500 L/min à 12,5 bar ; le taux de marche du groupe reste inconnu."
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
			"elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable-reserved-20261103-1"
		],
		"powerKw": [
			"october2b-elgi-eg-premium-p8"
		],
		"oilType": [
			"october2b-elgi-premium50-oil-p3"
		],
		"weightKg": [
			"october2b-elgi-eg-premium-p8"
		],
		"editorial": [
			"elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable-reserved-20261103-1"
		],
		"specifications": [
			"elgi-eg-132-p-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable-reserved-20261103-1"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
