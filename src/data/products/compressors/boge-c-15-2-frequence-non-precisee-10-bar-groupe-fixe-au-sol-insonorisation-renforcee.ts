import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-c-15-2-frequence-non-precisee-10-bar-groupe-fixe-au-sol-insonorisation-renforcee",
	"slug": "boge-c-15-2-frequence-non-precisee-10-bar-groupe-fixe-au-sol-insonorisation-renforcee",
	"brand": "BOGE",
	"model": "C 15-2",
	"variant": {
		"familyId": "boge-c-15-2",
		"label": "groupe fixe au sol ; insonorisation renforcée, 10 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol ; insonorisation renforcée",
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
			"litersPerMinute": 2250
		}
	],
	"oilType": "oil",
	"powerKw": 15,
	"weightKg": 532,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-c-15-2-frequence-non-precisee-10-bar-groupe-fixe-au-sol-insonorisation-renforcee.webp",
		"alt": "Repères techniques : BOGE C 15-2, 10 bar",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/eaf3d9bffa/boge-c-2-series-datasheet.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol ; insonorisation renforcée",
			"evidenceIds": [
				"october2b-boge-c-2-series-datasheet-p1"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "10 bar",
			"evidenceIds": [
				"october2b-boge-c-2-series-datasheet-p1"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "2,25 m³/min",
			"evidenceIds": [
				"october2b-boge-c-2-series-datasheet-p1"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-boge-c-2-series-datasheet-p1"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-boge-c-2-series-datasheet-p1"
			]
		}
	],
	"editorial": {
		"overview": "BOGE C 15-2, 10 bar. 2 250 L/min à 10 bar. Moteur 15 kW ; groupe fixe au sol ; insonorisation renforcée.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 10 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Fréquence du tableau non établie ; aucune transposition des débits entre 50 et 60 Hz.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-boge-c-2-series-datasheet-p1",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/eaf3d9bffa/boge-c-2-series-datasheet.pdf#page=1",
			"sourceLabel": "BOGE, fiche technique C-2, 11–22 kW, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f708a0c328f8837e3a6313003e57dfa8a9de9abda96d1f74d4ebe008df855252 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-boge-c2-oil",
			"sourceUrl": "https://www.boge.com/en-uk/products/compressors/screw-compressors/c-2-series-up-to-22-kw/",
			"sourceLabel": "BOGE, lubrification et configuration de la série",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 65cb48ee0409669f474cd9f9787c1c10c4fdd29e0c387f814e1cf38578cb866e de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-boge-c-2-series-datasheet-p1"
		],
		"maxPressureBar": [
			"october2b-boge-c-2-series-datasheet-p1"
		],
		"fadCurve": [
			"october2b-boge-c-2-series-datasheet-p1"
		],
		"powerKw": [
			"october2b-boge-c-2-series-datasheet-p1"
		],
		"oilType": [
			"october2b-boge-c2-oil"
		],
		"weightKg": [
			"october2b-boge-c-2-series-datasheet-p1"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
