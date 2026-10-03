const product = {
	"id": "elgi-en-11-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"slug": "elgi-en-11-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"brand": "ELGi",
	"model": "EN 11",
	"variant": {
		"familyId": "elgi-en-11",
		"label": "groupe fixe au sol, sans sécheur ; vitesse variable, 50 Hz, 9,7 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse variable",
			"pressionMaximale": "9,7 bar",
			"cuve": "0 L",
			"régulation": "vitesse variable",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 9.7,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 1770
		},
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1530
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-en-11-50-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable.webp",
		"alt": "Repères techniques : ELGi EN 11, 50 Hz, vitesse variable",
		"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2020/07/EN-Series-50Hz-Europe-EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse variable",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p9"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "9,7 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p9"
			]
		},
		{
			"label": "FAD à 7 bar",
			"value": "0,89 à 1,77 m³/min",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p9"
			]
		},
		{
			"label": "FAD à 9,5 bar",
			"value": "0,73 à 1,53 m³/min",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p9"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "50 Hz",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p9"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p9"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p9"
			]
		}
	],
	"editorial": {
		"overview": "ELGi EN 11, 50 Hz, vitesse variable. 1 770 L/min à 7 bar ; 1 530 L/min à 9,5 bar. Moteur 11 kW ; groupe fixe au sol, sans sécheur ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 9,7 bar ; le point FAD conserve sa pression publiée."
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
			"id": "october2b-elgi-en50-eu-p9",
			"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2020/07/EN-Series-50Hz-Europe-EN.pdf#page=9",
			"sourceLabel": "ELGi EN, brochure Europe 50 Hz, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 21f1c6be68db54dd75d5baf5f425267ac5a5f2c1cb572cf44ce5bab5f111a4ec de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-en50-oil-p4",
			"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2020/07/EN-Series-50Hz-Europe-EN.pdf#page=4",
			"sourceLabel": "ELGi EN, brochure Europe 50 Hz ; lubrification du bloc de compression, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 21f1c6be68db54dd75d5baf5f425267ac5a5f2c1cb572cf44ce5bab5f111a4ec de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-elgi-en50-eu-p9"
		],
		"maxPressureBar": [
			"october2b-elgi-en50-eu-p9"
		],
		"fadCurve": [
			"october2b-elgi-en50-eu-p9"
		],
		"powerKw": [
			"october2b-elgi-en50-eu-p9"
		],
		"oilType": [
			"october2b-elgi-en50-oil-p4"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
