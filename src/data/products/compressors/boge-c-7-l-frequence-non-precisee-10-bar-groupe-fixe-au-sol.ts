import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-c-7-l-frequence-non-precisee-10-bar-groupe-fixe-au-sol",
	"slug": "boge-c-7-l-frequence-non-precisee-10-bar-groupe-fixe-au-sol",
	"brand": "BOGE",
	"model": "C 7 L",
	"variant": {
		"familyId": "boge-c-7-l",
		"label": "groupe fixe au sol, 10 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol",
			"pressionMaximale": "10 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 707
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 5.5,
	"weightKg": 130,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-c-7-l-frequence-non-precisee-10-bar-groupe-fixe-au-sol.webp",
		"alt": "Repères techniques : BOGE C 7 L, 10 bar",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/5af6ceb71f/boge-c-series-datasheet.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol",
			"evidenceIds": [
				"october2b-boge-c-data-p1"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "10 bar",
			"evidenceIds": [
				"october2b-boge-c-data-p1"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "0,707 m³/min",
			"evidenceIds": [
				"october2b-boge-c-data-p1"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-boge-c-data-p1"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-boge-c-data-p1"
			]
		}
	],
	"editorial": {
		"overview": "BOGE C 7 L, 10 bar. 707 L/min à 10 bar. Moteur 5,5 kW ; groupe fixe au sol.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 10 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
			"Fonctionnement continu déclaré pour la série ; refroidissement, installation et entretien conditionnent ce service.",
			"Fréquence du tableau non établie ; aucune transposition des débits entre 50 et 60 Hz.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-boge-c-data-p1",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/5af6ceb71f/boge-c-series-datasheet.pdf#page=1",
			"sourceLabel": "BOGE, fiche technique C, 2,2–15 kW, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 923f5b135b375ac2c7271a2279ad875136fbab986e866618079cc3cc3a3934f8 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-boge-c-oil",
			"sourceUrl": "https://www.boge.com/en-uk/products/compressors/screw-compressors/c-series-up-to-22-kw/",
			"sourceLabel": "BOGE, lubrification et configuration de la série",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 30b1e0a601e66801209f7d8f22307ad3c8deb6c1559152d6f03e3a482dbf6a3b de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-boge-c-duty-p2",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/c5f23f640c/boge-c-series-brochure.pdf#page=2",
			"sourceLabel": "BOGE, brochure C, fonctionnement continu, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 30689c9b0c910bd7694ffc259482d57237107fb370343f1d06d8b435c44cc1f2 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-boge-c-data-p1"
		],
		"maxPressureBar": [
			"october2b-boge-c-data-p1"
		],
		"fadCurve": [
			"october2b-boge-c-data-p1"
		],
		"powerKw": [
			"october2b-boge-c-data-p1"
		],
		"oilType": [
			"october2b-boge-c-oil"
		],
		"weightKg": [
			"october2b-boge-c-data-p1"
		],
		"dutyCycle": [
			"october2b-boge-c-duty-p2"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
