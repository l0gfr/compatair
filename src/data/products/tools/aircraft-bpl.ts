const product = {
	"id": "aircraft-bpl",
	"slug": "aircraft-bpl",
	"brand": "Aircraft",
	"model": "BPL",
	"mpn": "2112110",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Aircraft BPL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bpl.webp",
		"alt": "Repères techniques Aircraft BPL, référence 2112110",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/bpl-2112110/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft BPL, référence 2112110. Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Longueur du tube de soufflage : 150 mm. Diamètre extérieur du tube : 6 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2112110.",
			"Longueur du tube de soufflage : 150 mm.",
			"Diamètre extérieur du tube : 6 mm.",
			"Diamètre de sortie de buse : 3 mm."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2112110-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2112110-20260927"
			]
		},
		{
			"label": "Longueur du tube de soufflage",
			"value": "150 mm",
			"evidenceIds": [
				"aircraft-2112110-20260927"
			]
		},
		{
			"label": "Diamètre extérieur du tube",
			"value": "6 mm",
			"evidenceIds": [
				"aircraft-2112110-20260927"
			]
		},
		{
			"label": "Diamètre de sortie de buse",
			"value": "3 mm",
			"evidenceIds": [
				"aircraft-2112110-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0.22 kg",
			"evidenceIds": [
				"aircraft-2112110-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Blowgun made of aluminum",
			"evidenceIds": [
				"aircraft-2112110-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2112110-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/bpl-2112110/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2112110, réf. 2112110",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2112110-20260927"
		],
		"workingPressureBar": [
			"aircraft-2112110-20260927"
		],
		"airflowLpm": [
			"aircraft-2112110-20260927"
		],
		"airflowBasis": [
			"aircraft-2112110-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "average"
};

export default product;
