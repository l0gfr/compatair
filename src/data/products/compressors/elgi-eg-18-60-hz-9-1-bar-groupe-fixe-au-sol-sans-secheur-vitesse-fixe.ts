const product = {
	"id": "elgi-eg-18-60-hz-9-1-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "elgi-eg-18-60-hz-9-1-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "ELGi",
	"model": "EG 18",
	"variant": {
		"familyId": "elgi-eg-18",
		"label": "groupe fixe au sol, sans sécheur ; vitesse fixe, 60 Hz, 9,1 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "9,1 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "60 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 9.1,
	"fadCurve": [
		{
			"pressureBar": 8.6,
			"litersPerMinute": 3030
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 18,
	"weightKg": 680,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-eg-18-60-hz-9-1-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : ELGi EG 18, 60 Hz, 9,1 bar",
		"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2019/10/eg-series-11-75-60hz.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "9,1 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		},
		{
			"label": "FAD à 8,6 bar",
			"value": "3,03 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "60 Hz",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "International",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p10"
			]
		}
	],
	"editorial": {
		"overview": "ELGi EG 18, 60 Hz, 9,1 bar. 3 030 L/min à 8,6 bar. Moteur 18 kW ; groupe fixe au sol, sans sécheur ; vitesse fixe.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 9,1 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
			"Fonctionnement continu déclaré pour la série ; refroidissement, installation et entretien conditionnent ce service.",
			"Documentation à 60 Hz ; elle ne démontre pas les performances de la version 50 Hz. Alimentation et marché local à confirmer avant achat.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-elgi-eg11-75-eu-p10",
			"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2019/10/eg-series-11-75-60hz.pdf#page=10",
			"sourceLabel": "ELGi EG 11–75 kW, brochure 60 Hz, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 8bc82033cb7674d7a38e6b598e3a87555db6aab7601604f39a955080e166aa66 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-eg-duty",
			"sourceUrl": "https://www.elgi.com/eu/11-250-kw-eg-series-screw-compressors/",
			"sourceLabel": "Déclaration fabricant de fonctionnement continu",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f95dd586e25e8dc2b4a11721c3af24735d08261bb95588268dbd8e4b3bc8f97c de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-eg-duty",
			"sourceUrl": "https://www.elgi.com/eu/11-250-kw-eg-series-screw-compressors/",
			"sourceLabel": "Déclaration fabricant de fonctionnement continu",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f95dd586e25e8dc2b4a11721c3af24735d08261bb95588268dbd8e4b3bc8f97c de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-elgi-eg11-75-eu-p10"
		],
		"maxPressureBar": [
			"october2b-elgi-eg11-75-eu-p10"
		],
		"fadCurve": [
			"october2b-elgi-eg11-75-eu-p10"
		],
		"powerKw": [
			"october2b-elgi-eg11-75-eu-p10"
		],
		"oilType": [
			"october2b-elgi-eg-duty"
		],
		"weightKg": [
			"october2b-elgi-eg11-75-eu-p10"
		],
		"dutyCycle": [
			"october2b-elgi-eg-duty"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
