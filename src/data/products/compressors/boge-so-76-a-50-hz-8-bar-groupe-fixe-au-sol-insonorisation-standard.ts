const product = {
	"id": "boge-so-76-a-50-hz-8-bar-groupe-fixe-au-sol-insonorisation-standard",
	"slug": "boge-so-76-a-50-hz-8-bar-groupe-fixe-au-sol-insonorisation-standard",
	"brand": "BOGE",
	"model": "SO 76 A",
	"variant": {
		"familyId": "boge-so-76-a",
		"label": "groupe fixe au sol ; insonorisation standard, 50 Hz, 8 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol ; insonorisation standard",
			"pressionMaximale": "8 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 8860
		}
	],
	"oilType": "oil-free",
	"powerKw": 55,
	"weightKg": 2804,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-so-76-a-50-hz-8-bar-groupe-fixe-au-sol-insonorisation-standard.webp",
		"alt": "Repères techniques : BOGE SO 76 A, 50 Hz, 8 bar",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/0c4e44718c/boge-data-sheet-oilfree-screw-compressors-so-2-series.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol ; insonorisation standard",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "8 bar",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
			]
		},
		{
			"label": "FAD à 8 bar",
			"value": "8,86 m³/min",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "50 Hz",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
			]
		}
	],
	"editorial": {
		"overview": "BOGE SO 76 A, 50 Hz, 8 bar. 8 860 L/min à 8 bar. Moteur 55 kW ; groupe fixe au sol ; insonorisation standard.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 8 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/0c4e44718c/boge-data-sheet-oilfree-screw-compressors-so-2-series.pdf#page=1",
			"sourceLabel": "BOGE, fiche technique SO-2, 45–355 kW, 50 Hz, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 71b1dfdb1bfba75cb0468db248113da5c1702b1136535420501ed5aed8086b19 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
		],
		"maxPressureBar": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
		],
		"fadCurve": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
		],
		"powerKw": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
		],
		"oilType": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
		],
		"weightKg": [
			"october2b-boge-data-sheet-oilfree-screw-compressors-so-2-series-p1"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
