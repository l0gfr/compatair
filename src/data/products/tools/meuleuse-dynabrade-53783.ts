import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-53783",
	"slug": "meuleuse-dynabrade-53783",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 53783",
	"brand": "Dynabrade",
	"model": "53783",
	"mpn": "53783",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "53783",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "1,7 kg",
			"Longueur": "322 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1104,
		"typical": 1104,
		"max": 1104
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-53783-technical.webp",
		"alt": "Repères techniques Dynabrade 53783 : consommation maximale publiée de 1 104 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=108",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "53783 : meuleuse à cônes ou meules-bouchons jusqu’à 38 mm, corps acier, sortie mâle 3/8-24 et 20 000 tr/min. La 53531 voisine possède une extension composite plus longue : 467 mm contre 322 mm dans le tableau. Les maxima d’air à 6,2 bar sont de 1 161 et 1 104 L/min. L’accès à la pièce et la vitesse admissible de l’abrasif précèdent le bilan pneumatique.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Masse non arbitrée : la ligne publie 3,9 lb et 1,7 kg, sans parfaite concordance de conversion.",
			"Les unités de masse du tableau ne sont pas parfaitement concordantes ; aucune masse unique n’est utilisée pour justifier le choix. Le filetage commun ne valide pas tout cône ou toute meule.",
			"Hauteur non retenue : le tableau publie des unités contradictoires (1.7 (45)).",
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "522 W",
			"evidenceIds": [
				"dynabrade-53783-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-53783-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-53783-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "322 mm",
			"evidenceIds": [
				"dynabrade-53783-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53783-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=108",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53783, page 108",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 108-0, ligne 7. Consommation maximale publiée : 39 (1,104) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-53531-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=108",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53531, page 108",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 108-0, ligne 4. Consommation maximale publiée : 41 (1,161) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53783-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53783-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53783-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53783-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-53783-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
