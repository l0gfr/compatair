import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "elgi-eg-110-p-50-hz-13-5-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "elgi-eg-110-p-50-hz-13-5-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "ELGi",
	"model": "EG 110-P",
	"variant": {
		"familyId": "elgi-eg-110-p",
		"label": "groupe fixe au sol, sans sécheur ; vitesse fixe, 50 Hz, 13,5 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "13,5 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13.5,
	"fadCurve": [
		{
			"pressureBar": 12.5,
			"litersPerMinute": 14900
		}
	],
	"oilType": "oil",
	"powerKw": 110,
	"weightKg": 3200,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-eg-110-p-50-hz-13-5-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : ELGi EG 110-P, 50 Hz, 13,5 bar",
		"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse fixe",
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
			"label": "FAD à 12,5 bar",
			"value": "14,9 m³/min",
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
			"label": "Comparaison documentée et limite de choix",
			"value": "Lire correctement les deux colonnes pression de travail et maximum/décharge dans une même famille industrielle.",
			"evidenceIds": [
				"review-20261025-s098-p3",
				"review-20261025-s098-p8"
			]
		}
	],
	"editorial": {
		"overview": "L’EG 110-P 50 Hz retenu annonce 14,9 m³/min à une pression de travail de 12,5 bar ; son maximum de 13,5 bar correspond à la décharge prévue un bar plus haut. La configuration à maximum 5,5 bar publie 22,1 m³/min à 4,5 bar, avec le même moteur 110 kW. Ces configurations ne sont pas interchangeables : les 22,1 m³/min ne décrivent pas un besoin à 12,5 bar.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 13,5 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Le tableau indique que le FAD est mesuré à la pression de travail, en sortie du groupe après séparateur, selon ISO 1217:2009 annexeC.",
			"Maximum 13,5 bar et mesure 12,5 bar restent distincts ; les débits de l’autre configuration ne sont pas fusionnés.",
			"Le taux de marche n’est pas chiffré dans les sources retenues. Le document concerne le marché indien et 50 Hz ; disponibilité et conformité de l’installation locale à confirmer.",
			"Sans cuve ni sécheur intégrés dans le périmètre retenu ; aucun débit aspiré ni essai physique CompatAir."
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
			"id": "review-20261025-s098-p3",
			"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf#page=3",
			"sourceLabel": "ELGi, relecture primaire du 25 octobre 2026, s098, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 2b9f43ec8dff222a8f93b9217c688172836c6c783a2c5af2c5e44ebf448f8b9d. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s098-p8",
			"sourceUrl": "https://www.elgi.com/in/wp-content/uploads/2019/06/EG-Premium-90-160-catalogue_India.pdf#page=8",
			"sourceLabel": "ELGi, relecture primaire du 25 octobre 2026, s098, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 2b9f43ec8dff222a8f93b9217c688172836c6c783a2c5af2c5e44ebf448f8b9d. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
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
