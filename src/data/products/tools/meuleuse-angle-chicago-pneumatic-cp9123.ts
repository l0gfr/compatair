const product = {
	"id": "chicago-pneumatic-cp9123",
	"slug": "meuleuse-angle-chicago-pneumatic-cp9123",
	"categoryId": "meuleuse",
	"category": "Meuleuse d'angle",
	"label": "Meuleuse d'angle pneumatique Chicago Pneumatic CP9123 180 mm",
	"brand": "Chicago Pneumatic",
	"model": "CP9123",
	"mpn": "6151959123",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	},
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 13 mm recommandé",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp9123.webp",
		"alt": "Meuleuse d'angle pneumatique Chicago Pneumatic CP9123 180 mm",
		"sourceUrl": "https://tools.cp.com/en/products/grinders/cp9123-sku6151959123",
		"sourceLabel": "Visuel officiel Chicago Pneumatic CP9123"
	},
	"editorial": {
		"overview": "La meuleuse d'angle pneumatique Chicago Pneumatic CP9123 180 mm fonctionne à 6,3 bar. La fiche Chicago Pneumatic publie une consommation en charge de 11 L/s, convertie exactement en 660 L/min pour le calcul de compatibilité.",
		"verifiedFacts": [
			"La fiche constructeur publie une vitesse à vide de 7 500 tr/min et un disque de 180 mm.",
			"Le raccord 3/8 pouce et le flexible intérieur de 13 mm distinguent ce modèle des petites meuleuses 100 à 125 mm."
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
				"cp-6151959123-official"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "11 L/s (660 L/min)",
			"evidenceIds": [
				"cp-6151959123-official"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cp-6151959123-official"
			]
		},
		{
			"label": "Diamètre intérieur de flexible recommandé",
			"value": "13 mm",
			"evidenceIds": [
				"cp-6151959123-official"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7 500 tr/min",
			"evidenceIds": [
				"cp-6151959123-official"
			]
		},
		{
			"label": "Diamètre de disque",
			"value": "180 mm",
			"evidenceIds": [
				"cp-6151959123-official"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "850 W",
			"evidenceIds": [
				"cp-6151959123-official"
			]
		},
		{
			"label": "Poids",
			"value": "3,4 kg",
			"evidenceIds": [
				"cp-6151959123-official"
			]
		},
		{
			"label": "Pression acoustique",
			"value": "93 dB(A)",
			"evidenceIds": [
				"cp-6151959123-official"
			]
		},
		{
			"label": "Puissance acoustique",
			"value": "104 dB(A)",
			"evidenceIds": [
				"cp-6151959123-official"
			]
		},
		{
			"label": "Consommation à vide",
			"value": "18 L/s",
			"evidenceIds": [
				"cp-6151959123-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151959123-official",
			"sourceUrl": "https://tools.cp.com/en/products/grinders/cp9123-sku6151959123",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP9123",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Consommation en charge convertie exactement de 11 L/s à 660 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"cp-6151959123-official"
		],
		"mpn": [
			"cp-6151959123-official"
		],
		"airflowLpm": [
			"cp-6151959123-official"
		],
		"workingPressureBar": [
			"cp-6151959123-official"
		],
		"connectorSize": [
			"cp-6151959123-official"
		],
		"recommendedHose": [
			"cp-6151959123-official"
		],
		"specifications": [
			"cp-6151959123-official"
		]
	},
	"notes": [
		"Conversion exacte : 11 L/s × 60 = 660 L/min."
	]
};

export default product;
