const product = {
	"id": "elgi-eg-90-p-50-hz-5-5-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "elgi-eg-90-p-50-hz-5-5-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "ELGi",
	"model": "EG 90-P",
	"variant": {
		"familyId": "elgi-eg-90-p",
		"label": "groupe fixe au sol, sans sécheur ; vitesse fixe, 50 Hz, 5,5 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "5,5 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 5.5,
	"fadCurve": [
		{
			"pressureBar": 4.5,
			"litersPerMinute": 17300
		}
	],
	"oilType": "oil",
	"powerKw": 90,
	"weightKg": 2980,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-eg-90-p-50-hz-5-5-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : ELGi EG 90-P, 50 Hz, 5,5 bar",
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
			"value": "5,5 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-eg-premium-p8"
			]
		},
		{
			"label": "FAD à 4,5 bar",
			"value": "17,3 m³/min",
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
		"overview": "ELGi EG 90-P, 50 Hz, 5,5 bar. 17 300 L/min à 4,5 bar. Moteur 90 kW ; groupe fixe au sol, sans sécheur ; vitesse fixe.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 5,5 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Page 8, Deux lignes de la même configuration à 7 bar publient 17,7 et 17,0 m³/min ; toutes deux exclues.",
			"Page 8, Unités FAD m³/min et cfm incohérentes au-delà de leur arrondi imprimé.",
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
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
