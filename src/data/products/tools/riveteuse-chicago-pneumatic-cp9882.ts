const product = {
	"id": "chicago-pneumatic-cp9882",
	"slug": "riveteuse-chicago-pneumatic-cp9882",
	"categoryId": "riveteuse",
	"category": "Riveteuse",
	"label": "Riveteuse pneumatique Chicago Pneumatic CP9882",
	"brand": "Chicago Pneumatic",
	"model": "CP9882",
	"mpn": "8941098820",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 114,
		"typical": 114,
		"max": 114
	},
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm recommandé",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp9882.webp",
		"alt": "Riveteuse pneumatique Chicago Pneumatic CP9882",
		"sourceUrl": "https://tools.cp.com/en/products/compression-tools/cp9882-sku8941098820",
		"sourceLabel": "Visuel officiel Chicago Pneumatic CP9882"
	},
	"editorial": {
		"overview": "La riveteuse pneumatique Chicago Pneumatic CP9882 fonctionne à 6,3 bar. La fiche Chicago Pneumatic publie une consommation en charge de 1,9 L/s, convertie exactement en 114 L/min pour le calcul de compatibilité.",
		"verifiedFacts": [
			"La fiche constructeur donne une capacité maximale de rivet de 4,8 mm.",
			"La force de traction est publiée à 1 000 kg et la masse de l’outil à 1,5 kg."
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
				"cp-8941098820-official"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "1,9 L/s (114 L/min)",
			"evidenceIds": [
				"cp-8941098820-official"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "1/4 pouce",
			"evidenceIds": [
				"cp-8941098820-official"
			]
		},
		{
			"label": "Diamètre intérieur de flexible recommandé",
			"value": "10 mm",
			"evidenceIds": [
				"cp-8941098820-official"
			]
		},
		{
			"label": "Diamètre maximal de rivet",
			"value": "4,8 mm",
			"evidenceIds": [
				"cp-8941098820-official"
			]
		},
		{
			"label": "Force de traction publiée",
			"value": "1 000 kg",
			"evidenceIds": [
				"cp-8941098820-official"
			]
		},
		{
			"label": "Poids",
			"value": "1,5 kg",
			"evidenceIds": [
				"cp-8941098820-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941098820-official",
			"sourceUrl": "https://tools.cp.com/en/products/compression-tools/cp9882-sku8941098820",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP9882",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Consommation en charge convertie exactement de 1,9 L/s à 114 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"cp-8941098820-official"
		],
		"mpn": [
			"cp-8941098820-official"
		],
		"airflowLpm": [
			"cp-8941098820-official"
		],
		"workingPressureBar": [
			"cp-8941098820-official"
		],
		"connectorSize": [
			"cp-8941098820-official"
		],
		"recommendedHose": [
			"cp-8941098820-official"
		],
		"specifications": [
			"cp-8941098820-official"
		]
	},
	"notes": [
		"Conversion exacte : 1,9 L/s × 60 = 114 L/min."
	]
};

export default product;
