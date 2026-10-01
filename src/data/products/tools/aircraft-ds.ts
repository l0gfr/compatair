const product = {
	"id": "aircraft-ds",
	"slug": "aircraft-ds",
	"brand": "Aircraft",
	"model": "DS",
	"mpn": "2403500",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Aircraft DS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-ds.webp",
		"alt": "Repères techniques Aircraft DS, référence 2403500",
		"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/ds-2403500/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Aircraft DS, référence 2403500. Consommation moyenne publiée : 480 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Course de travail : 3.2 mm. Dimensions du plateau : 70x95 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 480 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2403500.",
			"Course de travail : 3.2 mm.",
			"Dimensions du plateau : 70x95 mm.",
			"Masse approximative : 0.8 kg."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2403500-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 480 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2403500-20260927"
			]
		},
		{
			"label": "Course de travail",
			"value": "3.2 mm",
			"evidenceIds": [
				"aircraft-2403500-20260927"
			]
		},
		{
			"label": "Dimensions du plateau",
			"value": "70x95 mm",
			"evidenceIds": [
				"aircraft-2403500-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0.8 kg",
			"evidenceIds": [
				"aircraft-2403500-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Delta grinder",
			"evidenceIds": [
				"aircraft-2403500-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403500-20260927",
			"sourceUrl": "https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-pneumatic-tools/ds-2403500/",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403500, réf. 2403500",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 480 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403500-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403500-20260927"
		],
		"airflowLpm": [
			"aircraft-2403500-20260927"
		],
		"airflowBasis": [
			"aircraft-2403500-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"airflowBasis": "average"
};

export default product;
