import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-58460",
	"slug": "ponceuse-orbitale-dynabrade-58460",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade 58460",
	"brand": "Dynabrade",
	"model": "58460",
	"mpn": "58460",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "58460",
		"distinguishingAttributes": {
			"Puissance moteur": "336 W",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Diamètre du plateau": "76 mm",
			"Filetage de sortie": "5/16\"-24 Female",
			"Longueur": "263 mm",
			"Hauteur": "137 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 651,
		"typical": 651,
		"max": 651
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-58460-technical.webp",
		"alt": "Repères techniques Dynabrade 58460 : consommation maximale publiée de 651 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=166",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "DynaLocke 58460 : plateau de 76 mm, contre 152 mm pour la 58435 voisine. La sélection rotation ou mouvement orbital aléatoire appartient aux deux outils ; le débit commun de 651 L/min maximum à 6,2 bar ne signifie pas qu’ils couvrent la même surface ni acceptent les mêmes consommables. Le diamètre et le mouvement requis doivent être choisis avec le travail.",
		"verifiedFacts": [
			"Puissance moteur : 336 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Diamètre du plateau : 76 mm.",
			"Filetage de sortie : 5/16\"-24 Female.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Le constructeur impose l’arrêt complet avant de changer de mouvement. Le modèle non-vacuum n’acquiert pas une aspiration parce qu’une version voisine en possède une.",
			"Masse non retenue : le tableau publie des unités contradictoires (2.35 (1.0)).",
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "336 W",
			"evidenceIds": [
				"dynabrade-58460-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-58460-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "76 mm",
			"evidenceIds": [
				"dynabrade-58460-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/16\"-24 Female",
			"evidenceIds": [
				"dynabrade-58460-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "263 mm",
			"evidenceIds": [
				"dynabrade-58460-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "137 mm",
			"evidenceIds": [
				"dynabrade-58460-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-58460-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=166",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58460, page 166",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 166-0, ligne 1. Consommation maximale publiée : 23 (651) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-58435-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=166",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58435, page 166",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 166-0, ligne 7. Consommation maximale publiée : 23 (651) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-58465-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=166",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58465, page 166",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 166-0, ligne 3. Consommation maximale publiée : 23 (651) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-58460-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-58460-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-58460-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-58460-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-58460-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
