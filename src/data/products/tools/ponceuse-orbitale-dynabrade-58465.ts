import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-58465",
	"slug": "ponceuse-orbitale-dynabrade-58465",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade 58465",
	"brand": "Dynabrade",
	"model": "58465",
	"mpn": "58465",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "58465",
		"distinguishingAttributes": {
			"Puissance moteur": "336 W",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Diamètre du plateau": "89 mm",
			"Filetage de sortie": "5/16\"-24 Female",
			"Longueur": "263 mm",
			"Hauteur": "137 mm"
		}
	},
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-58465-technical.svg",
		"alt": "Repères techniques Dynabrade 58465 : débit dimensionnant non établi",
		"sourceUrl": "https://us.dynabrade.com/assets/5d0c0639-b4dd-4036-ada9-3b6e6555ba82/4074396145-pd0860.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, notice constructeur et unités originales dans les spécifications"
	},
	"editorial": {
		"overview": "Dynabrade 58465. La notice PD08.60 identifie 58465 sans aspiration, contre 58466 à aspiration autogénérée. Elle indique 1,0 kg/263 mm dans cette édition ; la page HTML actuelle indique 1,25 kg/262 mm. Les versions et leurs chiffres restent attribués à leur document, sans mélange. Consommation maximale, unités de la notice : 3 CFM / 23 SCFM (651 L/min). Diamètre du plateau de la version : 3-1/2 pouces (89 mm). Configuration : Sans aspiration, conversion rotation/orbite.",
		"verifiedFacts": [
			"Puissance moteur : 336 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Diamètre du plateau : 89 mm.",
			"Filetage de sortie : 5/16\"-24 Female.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié.",
			"Consommation maximale, unités de la notice : 3 CFM / 23 SCFM (651 L/min).",
			"Diamètre du plateau de la version : 3-1/2 pouces (89 mm).",
			"Configuration : Sans aspiration, conversion rotation/orbite.",
			"Filetage d’outil : 5/16-24 femelle."
		],
		"limitations": [
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur.",
			"La notice PD08.60 identifie 58465 sans aspiration, contre 58466 à aspiration autogénérée. Elle indique 1,0 kg/263 mm dans cette édition ; la page HTML actuelle indique 1,25 kg/262 mm. Les versions et leurs chiffres restent attribués à leur document, sans mélange.",
			"Les unités SCFM restent documentaires : les conditions de référence ne permettent pas ici un rapprochement dimensionnant avec le FAD du compresseur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "336 W",
			"evidenceIds": [
				"dynabrade-58465-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-58465-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "89 mm",
			"evidenceIds": [
				"dynabrade-58465-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/16\"-24 Female",
			"evidenceIds": [
				"dynabrade-58465-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "263 mm",
			"evidenceIds": [
				"dynabrade-58465-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "137 mm",
			"evidenceIds": [
				"dynabrade-58465-catalogue-d25-01"
			]
		},
		{
			"label": "Consommation maximale, unités de la notice",
			"value": "3 CFM / 23 SCFM (651 L/min)",
			"evidenceIds": [
				"dynabrade-58465-reserved-20261101-1"
			]
		},
		{
			"label": "Diamètre du plateau de la version",
			"value": "3-1/2 pouces (89 mm)",
			"evidenceIds": [
				"dynabrade-58465-reserved-20261101-1"
			]
		},
		{
			"label": "Configuration",
			"value": "Sans aspiration, conversion rotation/orbite",
			"evidenceIds": [
				"dynabrade-58465-reserved-20261101-1"
			]
		},
		{
			"label": "Filetage d’outil",
			"value": "5/16-24 femelle",
			"evidenceIds": [
				"dynabrade-58465-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-58465-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=166",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58465, page 166",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 166-0, ligne 3. Consommation maximale publiée : 23 (651) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-58465-reserved-20261101-1",
			"sourceUrl": "https://us.dynabrade.com/assets/5d0c0639-b4dd-4036-ada9-3b6e6555ba82/4074396145-pd0860.pdf#page=2",
			"sourceLabel": "Dynabrade : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 d3d026b7e957d235bf1023217b149ef5b497bec46bea312c5f474edb25c987d3. Passage page=2. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-58465-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-58465-reserved-20261101-1"
		],
		"workingPressureBar": [
			"dynabrade-58465-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-58465-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-58465-catalogue-d25-01"
		],
		"demandModel": [
			"dynabrade-58465-reserved-20261101-1"
		],
		"airflowBasis": [
			"dynabrade-58465-reserved-20261101-1"
		],
		"demandExplanation": [
			"dynabrade-58465-reserved-20261101-1"
		],
		"editorial": [
			"dynabrade-58465-reserved-20261101-1"
		],
		"specifications": [
			"dynabrade-58465-reserved-20261101-1"
		],
		"image": [
			"dynabrade-58465-reserved-20261101-1"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"demandExplanation": "Le document publie un débit en SCFM ; les conditions de référence nécessaires au rapprochement avec le FAD ne sont pas qualifiées ici. Les unités originales restent visibles."
};

export default product;
