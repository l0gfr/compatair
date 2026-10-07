import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-so-269-2-fw-50-hz-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-vitesse-variable",
	"slug": "boge-so-269-2-fw-50-hz-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-vitesse-variable",
	"brand": "BOGE",
	"model": "SO 269-2 FW",
	"variant": {
		"familyId": "boge-so-269-2-fw",
		"label": "groupe fixe au sol ; insonorisation standard ; vitesse variable, 50 Hz, 10 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol ; insonorisation standard ; vitesse variable",
			"pressionMaximale": "10 bar",
			"cuve": "0 L",
			"régulation": "vitesse variable",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 26180
		}
	],
	"oilType": "oil-free",
	"powerKw": 200,
	"weightKg": 3700,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-so-269-2-fw-50-hz-vitesse-variable-groupe-fixe-au-sol-insonorisation-standard-vitesse-variable.webp",
		"alt": "Repères techniques : BOGE SO 269-2 FW, 50 Hz, vitesse variable",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/0c4e44718c/boge-data-sheet-oilfree-screw-compressors-so-2-series.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol ; insonorisation standard ; vitesse variable",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "10 bar",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "10,75 à 26,18 m³/min",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "50 Hz",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
			]
		}
	],
	"editorial": {
		"overview": "BOGE SO 269-2 FW, 50 Hz, vitesse variable. 26 180 L/min à 10 bar. Moteur 200 kW ; groupe fixe au sol ; insonorisation standard ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 10 bar ; le point FAD conserve sa pression publiée."
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
			"id": "october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/0c4e44718c/boge-data-sheet-oilfree-screw-compressors-so-2-series.pdf#page=2",
			"sourceLabel": "BOGE, fiche technique SO-2, 45–355 kW, 50 Hz, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 71b1dfdb1bfba75cb0468db248113da5c1702b1136535420501ed5aed8086b19 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
		],
		"maxPressureBar": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
		],
		"fadCurve": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
		],
		"powerKw": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
		],
		"oilType": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
		],
		"weightKg": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p2"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
