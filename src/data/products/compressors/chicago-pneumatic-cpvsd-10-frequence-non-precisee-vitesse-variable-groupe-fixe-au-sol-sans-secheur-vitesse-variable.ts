const product = {
	"id": "chicago-pneumatic-cpvsd-10-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"slug": "chicago-pneumatic-cpvsd-10-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"brand": "Chicago Pneumatic",
	"model": "CPVSd 10",
	"variant": {
		"familyId": "chicago-pneumatic-cpvsd-10",
		"label": "groupe fixe au sol, sans sécheur ; vitesse variable, 12,5 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse variable",
			"pressionMaximale": "12,5 bar",
			"cuve": "0 L",
			"régulation": "vitesse variable"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 12.5,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 1225
		}
	],
	"oilType": "oil",
	"powerKw": 7.5,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/chicago-pneumatic-cpvsd-10-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable.webp",
		"alt": "Repères techniques : Chicago Pneumatic CPVSd 10, vitesse variable",
		"sourceUrl": "https://compressors.cp.com/content/dam/brands/Chicago%20Pneumatic/compressors/c67-products/CP_Screws_below_37kW_leaflet_ENG_6999610420.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse variable",
			"evidenceIds": [
				"october2b-cp-under37-current-p15"
			]
		},
		{
			"label": "Limite haute de la plage de fonctionnement",
			"value": "12,5 bar",
			"evidenceIds": [
				"october2b-cp-under37-current-p15"
			]
		},
		{
			"label": "FAD à 7 bar",
			"value": "272 à 1 225 L/min",
			"evidenceIds": [
				"october2b-cp-under37-current-p15"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-cp-under37-current-p15"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-cp-under37-current-p15"
			]
		}
	],
	"editorial": {
		"overview": "Chicago Pneumatic CPVSd 10, vitesse variable. 1 225 L/min à 7 bar. Moteur 7,5 kW ; groupe fixe au sol, sans sécheur ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 12,5 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Les points de vitesse variable sont regroupés dans une seule courbe. Le maximum de chaque plage publié est retenu ; la stabilité à faible charge n’est pas simulée.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Fréquence du tableau non établie ; aucune transposition des débits entre 50 et 60 Hz.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-cp-under37-current-p15",
			"sourceUrl": "https://compressors.cp.com/content/dam/brands/Chicago%20Pneumatic/compressors/c67-products/CP_Screws_below_37kW_leaflet_ENG_6999610420.pdf#page=15",
			"sourceLabel": "Chicago Pneumatic, compresseurs à vis jusqu’à 37 kW, brochure 6999 6104 20, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 840aa74fbf95229477427530aa36c03d569db82a9b8a9d65bfc70dc6499ed691 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-cp-vsd-oil-p4",
			"sourceUrl": "https://compressors.cp.com/content/dam/brands/Chicago%20Pneumatic/compressors/c67-products/CP_Screws_below_37kW_leaflet_ENG_6999610420.pdf#page=4",
			"sourceLabel": "Chicago Pneumatic, compresseurs à vis jusqu’à 37 kW, brochure 6999 6104 20 ; lubrification du bloc de compression, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 840aa74fbf95229477427530aa36c03d569db82a9b8a9d65bfc70dc6499ed691 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-cp-under37-current-p15"
		],
		"maxPressureBar": [
			"october2b-cp-under37-current-p15"
		],
		"fadCurve": [
			"october2b-cp-under37-current-p15"
		],
		"powerKw": [
			"october2b-cp-under37-current-p15"
		],
		"oilType": [
			"october2b-cp-vsd-oil-p4"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
