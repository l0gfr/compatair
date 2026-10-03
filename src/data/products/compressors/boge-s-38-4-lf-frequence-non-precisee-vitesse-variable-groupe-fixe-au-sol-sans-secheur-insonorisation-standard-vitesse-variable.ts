const product = {
	"id": "boge-s-38-4-lf-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-sans-secheur-insonorisation-standard-vitesse-variable",
	"slug": "boge-s-38-4-lf-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-sans-secheur-insonorisation-standard-vitesse-variable",
	"brand": "BOGE",
	"model": "S 38-4 LF",
	"variant": {
		"familyId": "boge-s-38-4-lf",
		"label": "groupe fixe au sol, sans sécheur ; insonorisation standard ; vitesse variable, 13 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; insonorisation standard ; vitesse variable",
			"pressionMaximale": "13 bar",
			"cuve": "0 L",
			"régulation": "vitesse variable"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 7010
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 6010
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 4600
		}
	],
	"oilType": "oil",
	"powerKw": 37,
	"weightKg": 1345,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-s-38-4-lf-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-sans-secheur-insonorisation-standard-vitesse-variable.webp",
		"alt": "Repères techniques : BOGE S 38-4 LF, vitesse variable",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/8035e202d5/boge-data-sheet-oil-lubricated-screw-compressor-s-4-series.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; insonorisation standard ; vitesse variable",
			"evidenceIds": [
				"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "13 bar",
			"evidenceIds": [
				"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
			]
		},
		{
			"label": "FAD à 7,5 bar",
			"value": "1,32 à 7,01 m³/min",
			"evidenceIds": [
				"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "1,74 à 6,01 m³/min",
			"evidenceIds": [
				"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
			]
		},
		{
			"label": "FAD à 13 bar",
			"value": "1,9 à 4,6 m³/min",
			"evidenceIds": [
				"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
			]
		}
	],
	"editorial": {
		"overview": "BOGE S 38-4 LF, vitesse variable. 7 010 L/min à 7,5 bar ; 6 010 L/min à 10 bar ; 4 600 L/min à 13 bar. Moteur 37 kW ; groupe fixe au sol, sans sécheur ; insonorisation standard ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 13 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Les valeurs entre parenthèses de la version avec sécheur et la seconde colonne d’insonorisation ne sont pas attribuées à ce groupe.",
			"Les points de vitesse variable sont regroupés dans une seule courbe. Le maximum de chaque plage publié est retenu ; la stabilité à faible charge n’est pas simulée.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Fréquence du tableau non établie ; aucune transposition des débits entre 50 et 60 Hz.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/8035e202d5/boge-data-sheet-oil-lubricated-screw-compressor-s-4-series.pdf#page=1",
			"sourceLabel": "BOGE, fiche technique S-4, 37–75 kW, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 bcc06a3b97d9a62e7aac80cf4d7103cad9f25056b8013c1aa02a845e69ac3722 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-boge-s4-oil-p3",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/96c5fd2c8a/boge-brochure-oil-lubricated-screw-compressor-s-4-series.pdf#page=3",
			"sourceLabel": "BOGE S-4, circuit de lubrification, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f4d7b6e6a1d6f05092cc7b0500f6c860a50af9cdb3e7c72dd266001f75e850c3 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
		],
		"maxPressureBar": [
			"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
		],
		"fadCurve": [
			"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
		],
		"powerKw": [
			"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
		],
		"oilType": [
			"october2b-boge-s4-oil-p3"
		],
		"weightKg": [
			"october2b-boge-data-sheet-oil-lubricated-screw-compressor-s-4-series-p1"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
