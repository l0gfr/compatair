import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-58502",
	"slug": "ponceuse-vibrante-dynabrade-58502",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Dynabrade 58502",
	"brand": "Dynabrade",
	"model": "58502",
	"mpn": "58502",
	"variant": {
		"familyId": "dynabrade-ponceuse-vibrante",
		"label": "58502",
		"distinguishingAttributes": {
			"Puissance moteur": "112 W",
			"Vitesse moteur publiée": "10 000 tr/min",
			"Masse": "0,7 kg",
			"Longueur": "180 mm"
		}
	},
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.2
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-58502-technical.webp",
		"alt": "Repères techniques Dynabrade 58502 : consommation maximale publiée de 368 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=177",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Le relevé historique du 58502 est conservé dans les spécifications. Le lien constructeur utilisé à l’import répond désormais avec un portail HTML, sans livrer le catalogue et le tableau de mesure attendus. La consommation n’est donc plus utilisée pour le dimensionnement.",
		"verifiedFacts": [
			"Puissance moteur : 112 W.",
			"Vitesse moteur publiée : 10 000 tr/min.",
			"Masse : 0,7 kg.",
			"Longueur : 180 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Un port de 1 pouce ne constitue pas une preuve de captage suffisante pour tout matériau. Aucun débit égal n’est transformé en résultat de finition ou d’exposition égal.",
			"Hauteur non retenue : le tableau publie des unités contradictoires (3-1/2 (91)).",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur.",
			"Le lien primaire actuel ne délivre plus le catalogue cité. Les valeurs historiques restent documentaires, sans calcul de compatibilité tant que les cellules de la référence ne sont pas relues."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "112 W",
			"evidenceIds": [
				"dynabrade-58502-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"dynabrade-58502-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,7 kg",
			"evidenceIds": [
				"dynabrade-58502-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "180 mm",
			"evidenceIds": [
				"dynabrade-58502-catalogue-d25-01"
			]
		},
		{
			"label": "Consommation historique à requalifier, hors calcul",
			"value": "368 L/min ; pression historique 6,2 bar",
			"evidenceIds": [
				"dynabrade-58502-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-58502-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=177",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58502, page 177",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 177-0, ligne 2. Consommation maximale publiée : 13 (368) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-58501-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=177",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58501, page 177",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 177-0, ligne 1. Consommation maximale publiée : 13 (368) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-58500-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=176",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58500, page 176",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 176-0, ligne 1. Consommation maximale publiée : 13 (368) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-58507-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=176",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58507, page 176",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 176-0, ligne 3. Consommation maximale publiée : 13 (368) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-58502-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-58502-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-58502-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-58502-catalogue-d25-01"
		],
		"demandExplanation": [
			"dynabrade-58502-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"demandExplanation": "Le lien du catalogue historique renvoie actuellement à une page HTML de gamme. Les cellules techniques de cette référence ne sont pas requalifiées par cette réponse ; aucun besoin d’air dimensionnant n’est conservé."
};

export default product;
