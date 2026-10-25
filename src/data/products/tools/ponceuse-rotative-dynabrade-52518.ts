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
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.2
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
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=80",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Le relevé historique du 52518 est conservé dans les spécifications. Le lien constructeur utilisé à l’import répond désormais avec un portail HTML, sans livrer le catalogue et le tableau de mesure attendus. La consommation n’est donc plus utilisée pour le dimensionnement.",
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
			"Le lien primaire actuel ne délivre plus le catalogue cité. Les valeurs historiques restent documentaires, sans calcul de compatibilité tant que les cellules de la référence ne sont pas relues."
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
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52518-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52518-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52518-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52518-catalogue-d25-01"
		],
		"demandExplanation": [
			"dynabrade-52518-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"demandExplanation": "Le lien du catalogue historique renvoie actuellement à une page HTML de gamme. Les cellules techniques de cette référence ne sont pas requalifiées par cette réponse ; aucun besoin d’air dimensionnant n’est conservé."
};

export default product;
