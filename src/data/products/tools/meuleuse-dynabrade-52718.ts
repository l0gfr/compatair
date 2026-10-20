import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-52718",
	"slug": "meuleuse-dynabrade-52718",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 52718",
	"brand": "Dynabrade",
	"model": "52718",
	"mpn": "52718",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "52718",
		"distinguishingAttributes": {
			"Puissance moteur": "744 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Longueur": "225 mm",
			"Hauteur": "48 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1256,
		"typical": 1256,
		"max": 1256
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52718-technical.webp",
		"alt": "Repères techniques Dynabrade 52718 : consommation maximale publiée de 1 256 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=107",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "52718 : meuleuse à cônes ou meules-bouchons jusqu’à 38 mm, sortie mâle 3/8-24 et 20 000 tr/min. La 52717 tourne à 18 000 tr/min ; le maximum d’air passe de 1 133 à 1 256 L/min à 6,2 bar dans le tableau. La vitesse admissible de l’abrasif et le débit restitué disponible sont donc deux contrôles distincts.",
		"verifiedFacts": [
			"Puissance moteur : 744 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Longueur : 225 mm.",
			"Entrée d’air : 3/8 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
		],
		"limitations": [
			"La masse du tableau reste contradictoire en unités et n’est pas arbitrée. Aucune mesure d’enlèvement ni courbe de débit à d’autres pressions n’est revendiquée.",
			"Masse non retenue : le tableau publie des unités contradictoires (2.0 (198)).",
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "744 W",
			"evidenceIds": [
				"dynabrade-52718-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-52718-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-52718-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "225 mm",
			"evidenceIds": [
				"dynabrade-52718-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "48 mm",
			"evidenceIds": [
				"dynabrade-52718-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52718-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=107",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52718, page 107",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 107-0, ligne 4. Consommation maximale publiée : 44 (1,256) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-52717-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=107",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52717, page 107",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 107-0, ligne 3. Consommation maximale publiée : 40 (1,133) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-52716-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=107",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52716, page 107",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 107-0, ligne 2. Consommation maximale publiée : 39 (1,104) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52718-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52718-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52718-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52718-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52718-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
