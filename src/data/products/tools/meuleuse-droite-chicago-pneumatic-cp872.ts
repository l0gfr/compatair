const product = {
	"id": "chicago-pneumatic-cp872",
	"slug": "meuleuse-droite-chicago-pneumatic-cp872",
	"categoryId": "meuleuse",
	"category": "Meuleuse droite",
	"label": "Meuleuse droite pneumatique Chicago Pneumatic CP872",
	"brand": "Chicago Pneumatic",
	"model": "CP872",
	"mpn": "T025373",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 720,
		"typical": 720,
		"max": 720
	},
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm recommandé",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp872.webp",
		"alt": "Meuleuse droite pneumatique Chicago Pneumatic CP872",
		"sourceUrl": "https://tools.cp.com/en-uk/products/grinders/cp872-skuT025373",
		"sourceLabel": "Visuel officiel Chicago Pneumatic CP872"
	},
	"editorial": {
		"overview": "La meuleuse droite pneumatique Chicago Pneumatic CP872 fonctionne à 6,3 bar. La fiche Chicago Pneumatic publie une consommation en charge de 12 L/s, convertie exactement en 720 L/min pour le calcul de compatibilité.",
		"verifiedFacts": [
			"La fiche constructeur publie une vitesse à vide de 27 000 tr/min et une pince de 6,4 mm.",
			"Le débit publié en charge est de 12 L/s, identique à la consommation à vide indiquée."
		],
		"limitations": [
			"Le débit en charge est conservé comme besoin instantané : aucune moyenne de cycle ni réduction arbitraire n’est appliquée."
		]
	},
	"specifications": [
		{
			"label": "Pression de service",
			"value": "6,3 bar",
			"evidenceIds": [
				"cp-t025373-official"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "12 L/s (720 L/min)",
			"evidenceIds": [
				"cp-t025373-official"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "1/4 pouce",
			"evidenceIds": [
				"cp-t025373-official"
			]
		},
		{
			"label": "Diamètre intérieur de flexible recommandé",
			"value": "10 mm",
			"evidenceIds": [
				"cp-t025373-official"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "27 000 tr/min",
			"evidenceIds": [
				"cp-t025373-official"
			]
		},
		{
			"label": "Capacité de pince",
			"value": "6,4 mm",
			"evidenceIds": [
				"cp-t025373-official"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "470 W",
			"evidenceIds": [
				"cp-t025373-official"
			]
		},
		{
			"label": "Poids",
			"value": "0,57 kg",
			"evidenceIds": [
				"cp-t025373-official"
			]
		},
		{
			"label": "Pression acoustique",
			"value": "100,9 dB(A)",
			"evidenceIds": [
				"cp-t025373-official"
			]
		},
		{
			"label": "Puissance acoustique",
			"value": "111,9 dB(A)",
			"evidenceIds": [
				"cp-t025373-official"
			]
		},
		{
			"label": "Consommation à vide",
			"value": "12 L/s",
			"evidenceIds": [
				"cp-t025373-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t025373-official",
			"sourceUrl": "https://tools.cp.com/en-uk/products/grinders/cp872-skuT025373",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP872",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Consommation en charge convertie exactement de 12 L/s à 720 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"cp-t025373-official"
		],
		"mpn": [
			"cp-t025373-official"
		],
		"airflowLpm": [
			"cp-t025373-official"
		],
		"workingPressureBar": [
			"cp-t025373-official"
		],
		"connectorSize": [
			"cp-t025373-official"
		],
		"recommendedHose": [
			"cp-t025373-official"
		],
		"specifications": [
			"cp-t025373-official"
		]
	},
	"notes": [
		"Conversion exacte : 12 L/s × 60 = 720 L/min."
	]
};

export default product;
