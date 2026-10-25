import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-52518",
	"slug": "ponceuse-rotative-dynabrade-52518",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 52518",
	"brand": "Dynabrade",
	"model": "52518",
	"mpn": "52518",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "52518",
		"distinguishingAttributes": {
			"Puissance moteur": "410 W",
			"Vitesse moteur publiée": "15 000 tr/min",
			"Filetage de sortie": "M14x2",
			"Longueur": "152 mm",
			"Hauteur": "98 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52518-technical.webp",
		"alt": "Repères techniques Dynabrade 52518 : consommation maximale publiée de 934 L/min à 6,2 bar",
		"sourceUrl": "https://apac.dynabrade.com/assets/0d88c8f1-7151-42d4-9526-eade4314de4b/4074394753-pd0337r.pdf#page=1",
		"sourceLabel": "Repères techniques CompatAir, notice officielle Dynabrade 52518"
	},
	"editorial": {
		"overview": "52518 : ponceuse d’angle pour disques de 114 mm, sortie M14 × 2 et vitesse de 15 000 tr/min. La fiche prévoit le carter 07184 et précise que le plateau n’est pas fourni. La notice PD03.37R donne 33 SCFM (934 L/min) maximum à 90 PSIG (6,2 bar), avec entrée 1/4 NPT et flexible intérieur de 10 mm. La masse reste contradictoire entre notice et fiche actuelle.",
		"verifiedFacts": [
			"Puissance moteur : 410 W.",
			"Vitesse moteur publiée : 15 000 tr/min.",
			"Filetage de sortie : M14x2.",
			"Longueur : 152 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
		],
		"limitations": [
			"La 52515 de la même page utilise 5/8-11 et comprend un plateau ; ces pièces ne sont pas transférées à la 52518 par analogie de famille. Aucune efficacité de captage n’est déduite du nom de gamme.",
			"Masse non retenue : le tableau publie des unités contradictoires (1.9 (0.8)).",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur.",
			"Les documents relus sont des déclarations fabricant, pas des mesures CompatAir. Leur date d’édition et le numéro de série applicable restent à vérifier sur la machine.",
			"La notice PD03.37R s’applique aux séries 0H1000 et suivantes ; elle appaire le maximum 934 L/min à 90 PSIG (6,2 bar) dans la ligne du modèle.",
			"La notice donne 1,9 lb / 0,83 kg, tandis que la fiche actuelle donne 3,3 lb / 1,5 kg. Cette masse n’est pas arbitrée silencieusement. Le plateau n’est pas fourni selon la fiche actuelle."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "410 W",
			"evidenceIds": [
				"dynabrade-52518-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"dynabrade-52518-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "M14x2",
			"evidenceIds": [
				"dynabrade-52518-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "152 mm",
			"evidenceIds": [
				"dynabrade-52518-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "98 mm",
			"evidenceIds": [
				"dynabrade-52518-catalogue-d25-01"
			]
		},
		{
			"label": "Consommation historique à requalifier, hors calcul",
			"value": "934 L/min ; pression historique 6,2 bar",
			"evidenceIds": [
				"dynabrade-52518-catalogue-d25-01"
			]
		},
		{
			"label": "Maximum de la notice PD03.37R",
			"value": "934 L/min à 90 PSIG (6,2 bar), série 0H1000 et suivantes",
			"evidenceIds": [
				"dynabrade-52518-followup-20261025-pd0337r",
				"dynabrade-52518-followup-20261025-product"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52518-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=80",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52518, page 80",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 80-1, ligne 3. Consommation maximale publiée : 33 (934) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-50570-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=89",
			"sourceLabel": "Dynabrade, catalogue D25.01, 50570, page 89",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 89-1, ligne 1. Consommation maximale publiée : 21 (595) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-50561-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=90",
			"sourceLabel": "Dynabrade, catalogue D25.01, 50561, page 90",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 90-1, ligne 1. Consommation maximale publiée : 21 (595) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-54430-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=77",
			"sourceLabel": "Dynabrade, catalogue D25.01, 54430, page 77",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 77-1, ligne 4. Consommation maximale publiée : 40 (1,133) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-52518-followup-20261025-pd0337r",
			"sourceUrl": "https://apac.dynabrade.com/assets/0d88c8f1-7151-42d4-9526-eade4314de4b/4074394753-pd0337r.pdf#page=1",
			"sourceLabel": "Dynabrade 52518, pd0337r, pages 1, 2",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "A",
			"notes": "Lecture 2026-10-25; réponse HTTP200, SHA-256 370096010bb52fe0a305b41d63c86af5afbb753cc80dd2760b7e090a73dd99e0; copie locale 1922ab0f0e16b9e2.pdf. Déclaration constructeur, pas de mesure CompatAir."
		},
		{
			"id": "dynabrade-52518-followup-20261025-product",
			"sourceUrl": "https://apac.dynabrade.com/en/catalog/55hp-right-angle-disc-sander~65251550-aeb3-4d26-933b-b8f5c84b4575",
			"sourceLabel": "Dynabrade 52518, fiche officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "A",
			"notes": "Lecture 2026-10-25; réponse HTTP200, SHA-256 632909560925f94613079420a6a29008273ec1473253a5d2d697062c55193c3e; copie locale e6ffe1d63f2eedf6.html. Déclaration constructeur, pas de mesure CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52518-catalogue-d25-01",
			"dynabrade-52518-followup-20261025-pd0337r",
			"dynabrade-52518-followup-20261025-product"
		],
		"workingPressureBar": [
			"dynabrade-52518-followup-20261025-pd0337r",
			"dynabrade-52518-followup-20261025-product"
		],
		"connectorSize": [
			"dynabrade-52518-catalogue-d25-01",
			"dynabrade-52518-followup-20261025-pd0337r",
			"dynabrade-52518-followup-20261025-product"
		],
		"recommendedHose": [
			"dynabrade-52518-catalogue-d25-01",
			"dynabrade-52518-followup-20261025-pd0337r",
			"dynabrade-52518-followup-20261025-product"
		],
		"airflowLpm": [
			"dynabrade-52518-followup-20261025-pd0337r",
			"dynabrade-52518-followup-20261025-product"
		],
		"editorial": [
			"dynabrade-52518-followup-20261025-pd0337r",
			"dynabrade-52518-followup-20261025-product"
		],
		"specifications": [
			"dynabrade-52518-followup-20261025-pd0337r",
			"dynabrade-52518-followup-20261025-product"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"airflowLpm": {
		"min": 934,
		"typical": 934,
		"max": 934
	}
};

export default product;
