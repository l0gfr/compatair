const product = {
	"id": "boge-slf-61-3-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-vitesse-variable",
	"slug": "boge-slf-61-3-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-vitesse-variable",
	"brand": "BOGE",
	"model": "SLF 61-3",
	"variant": {
		"familyId": "boge-slf-61-3",
		"label": "groupe fixe au sol ; insonorisation standard ; vitesse variable, 13 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol ; insonorisation standard ; vitesse variable",
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
			"litersPerMinute": 8190
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 7900
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 7000
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 5780
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 45,
	"weightKg": 1380,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-slf-61-3-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-vitesse-variable.webp",
		"alt": "Repères techniques : BOGE SLF 61-3, vitesse variable",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/5b8f9fe934/boge-data-sheet-screw-compressor-s-3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol ; insonorisation standard ; vitesse variable",
			"evidenceIds": [
				"october2b-boge-s3-data-p3"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "13 bar",
			"evidenceIds": [
				"october2b-boge-s3-data-p3"
			]
		},
		{
			"label": "FAD à 7,5 bar",
			"value": "3,2 à 8,19 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p3"
			]
		},
		{
			"label": "FAD à 8 bar",
			"value": "3,1 à 7,9 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p3"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "2,9 à 7 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p3"
			]
		},
		{
			"label": "FAD à 13 bar",
			"value": "2,14 à 5,78 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p3"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-boge-s3-data-p3"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-boge-s3-data-p3"
			]
		}
	],
	"editorial": {
		"overview": "BOGE SLF 61-3, vitesse variable. 8 190 L/min à 7,5 bar ; 7 900 L/min à 8 bar ; 7 000 L/min à 10 bar ; 5 780 L/min à 13 bar. Moteur 45 kW ; groupe fixe au sol ; insonorisation standard ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 13 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Les points de vitesse variable sont regroupés dans une seule courbe. Le maximum de chaque plage publié est retenu ; la stabilité à faible charge n’est pas simulée.",
			"Fonctionnement continu déclaré pour la série ; refroidissement, installation et entretien conditionnent ce service.",
			"Fréquence du tableau non établie ; aucune transposition des débits entre 50 et 60 Hz.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-boge-s3-data-p3",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/5b8f9fe934/boge-data-sheet-screw-compressor-s-3.pdf#page=3",
			"sourceLabel": "BOGE, fiche technique S-3, 22–250 kW, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 5bfbc5da23a4ccdac75e36a4ebf694cdda484b921aedc51697afc2dd0d6bd579 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-boge-s3-oil-p2",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/e22ffc7827/boge-brochure-oil-lubricated-screw-compressor-s-3-series.pdf#page=2",
			"sourceLabel": "BOGE S-3, circuit de lubrification, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 377dea3c353727d638828ef820e002492d42ec28349fba589b2337ff4e260d9b de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-boge-s3-small-duty",
			"sourceUrl": "https://www.boge.com/en-uk/products/compressors/screw-compressors/s-3-series-22-75-kw/",
			"sourceLabel": "Déclaration fabricant de fonctionnement continu",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 c893f867a5b252c118ab782920703438f668529759c4022978f86ac7051249bc de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-boge-s3-data-p3"
		],
		"maxPressureBar": [
			"october2b-boge-s3-data-p3"
		],
		"fadCurve": [
			"october2b-boge-s3-data-p3"
		],
		"powerKw": [
			"october2b-boge-s3-data-p3"
		],
		"oilType": [
			"october2b-boge-s3-oil-p2"
		],
		"weightKg": [
			"october2b-boge-s3-data-p3"
		],
		"dutyCycle": [
			"october2b-boge-s3-small-duty"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
