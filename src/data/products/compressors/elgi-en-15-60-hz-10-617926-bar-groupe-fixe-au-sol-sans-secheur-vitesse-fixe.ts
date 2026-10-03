const product = {
	"id": "elgi-en-15-60-hz-10-617926-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "elgi-en-15-60-hz-10-617926-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "ELGi",
	"model": "EN 15",
	"variant": {
		"familyId": "elgi-en-15",
		"label": "groupe fixe au sol, sans sécheur ; vitesse fixe, 60 Hz, 10,618 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "10,618 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "60 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10.617926,
	"fadCurve": [
		{
			"pressureBar": 10.342136,
			"litersPerMinute": 1741.486
		}
	],
	"oilType": "oil",
	"powerKw": 15,
	"weightKg": 309.804,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-en-15-60-hz-10-617926-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : ELGi EN 15, 60 Hz, 10,618 bar",
		"sourceUrl": "https://www.elgi.com/us/wp-content/uploads/2019/09/EN-2.2-37kW-60Hz-USA.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "154 psig, soit 10,618 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		},
		{
			"label": "FAD à 150 psig",
			"value": "61,5 cfm",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "60 Hz",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "États-Unis",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		}
	],
	"editorial": {
		"overview": "ELGi EN 15, 60 Hz, 10,618 bar. 1 741,486 L/min à 10,342 bar. Moteur 15 kW ; groupe fixe au sol, sans sécheur ; vitesse fixe.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 10,618 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Documentation à 60 Hz ; elle ne démontre pas les performances de la version 50 Hz. Alimentation et marché local à confirmer avant achat.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-elgi-en60-us-p5",
			"sourceUrl": "https://www.elgi.com/us/wp-content/uploads/2019/09/EN-2.2-37kW-60Hz-USA.pdf#page=5",
			"sourceLabel": "ELGi EN, brochure États-Unis 60 Hz, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 97b08b30e2733029a666a80d244b714fa9f77e26028056a5ec131af2a1768552 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-en60-oil-p3",
			"sourceUrl": "https://www.elgi.com/us/wp-content/uploads/2019/09/EN-2.2-37kW-60Hz-USA.pdf#page=3",
			"sourceLabel": "ELGi EN, brochure États-Unis 60 Hz ; lubrification du bloc de compression, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 97b08b30e2733029a666a80d244b714fa9f77e26028056a5ec131af2a1768552 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-elgi-en60-us-p5"
		],
		"maxPressureBar": [
			"october2b-elgi-en60-us-p5"
		],
		"fadCurve": [
			"october2b-elgi-en60-us-p5"
		],
		"powerKw": [
			"october2b-elgi-en60-us-p5"
		],
		"oilType": [
			"october2b-elgi-en60-oil-p3"
		],
		"weightKg": [
			"october2b-elgi-en60-us-p5"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
