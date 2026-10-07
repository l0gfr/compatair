import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-slf-40-3-bluekat-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-convertisseur-catalytique-bluekat-vitesse-variable",
	"slug": "boge-slf-40-3-bluekat-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-convertisseur-catalytique-bluekat-vitesse-variable",
	"brand": "BOGE",
	"model": "SLF 40-3 bluekat",
	"variant": {
		"familyId": "boge-slf-40-3-bluekat",
		"label": "groupe fixe au sol ; insonorisation standard ; convertisseur catalytique bluekat ; vitesse variable, 13 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol ; insonorisation standard ; convertisseur catalytique bluekat ; vitesse variable",
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
			"litersPerMinute": 5480
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 5310
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 4750
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 4210
		}
	],
	"oilType": "oil",
	"powerKw": 30,
	"weightKg": 1171,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-slf-40-3-bluekat-frequence-non-precisee-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-convertisseur-catalytique-bluekat-vitesse-variable.webp",
		"alt": "Repères techniques : BOGE SLF 40-3 bluekat, vitesse variable",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/5b8f9fe934/boge-data-sheet-screw-compressor-s-3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol ; insonorisation standard ; convertisseur catalytique bluekat ; vitesse variable",
			"evidenceIds": [
				"october2b-boge-s3-data-p2"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "13 bar",
			"evidenceIds": [
				"october2b-boge-s3-data-p2"
			]
		},
		{
			"label": "FAD à 7,5 bar",
			"value": "1,32 à 5,48 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p2"
			]
		},
		{
			"label": "FAD à 8 bar",
			"value": "1,3 à 5,31 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p2"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "1,3 à 4,75 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p2"
			]
		},
		{
			"label": "FAD à 13 bar",
			"value": "1,26 à 4,21 m³/min",
			"evidenceIds": [
				"october2b-boge-s3-data-p2"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-boge-s3-data-p2"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-boge-s3-data-p2"
			]
		}
	],
	"editorial": {
		"overview": "BOGE SLF 40-3 bluekat, vitesse variable. 5 480 L/min à 7,5 bar ; 5 310 L/min à 8 bar ; 4 750 L/min à 10 bar ; 4 210 L/min à 13 bar. Moteur 30 kW ; groupe fixe au sol ; insonorisation standard ; convertisseur catalytique bluekat ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 13 bar ; le point FAD conserve sa pression publiée."
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
			"id": "october2b-boge-s3-data-p2",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/5b8f9fe934/boge-data-sheet-screw-compressor-s-3.pdf#page=2",
			"sourceLabel": "BOGE, fiche technique S-3, 22–250 kW, page PDF 2",
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
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-boge-s3-data-p2"
		],
		"maxPressureBar": [
			"october2b-boge-s3-data-p2"
		],
		"fadCurve": [
			"october2b-boge-s3-data-p2"
		],
		"powerKw": [
			"october2b-boge-s3-data-p2"
		],
		"oilType": [
			"october2b-boge-s3-oil-p2"
		],
		"weightKg": [
			"october2b-boge-s3-data-p2"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
