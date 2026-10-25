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
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT; diamètre intérieur du flexible à confirmer selon la notice et la configuration",
	"image": {
		"src": "/images/products/dynabrade-58460-technical.webp",
		"alt": "Repères techniques Dynabrade 58460 : consommation maximale publiée de 651 L/min à 6,2 bar",
		"sourceUrl": "https://eu.dynabrade.com/assets/4638d270-32ee-4657-a2e6-f84d6dd95d1f/4074396145-pd0860.pdf#page=1",
		"sourceLabel": "Repères techniques CompatAir, notice officielle Dynabrade 58460"
	},
	"editorial": {
		"overview": "La 58460 reçoit un plateau de 76 mm et permet de choisir rotation ou mouvement orbital aléatoire. Cette version DynaLocke est sans aspiration. La notice PD08.60 publie un maximum de 23 SCFM (651 L/min) à 90 PSIG (6,2 bar). La fiche actuelle et la notice divergent sur le diamètre du flexible : ce raccordement doit être confirmé pour la configuration retenue.",
		"verifiedFacts": [
			"Puissance moteur : 336 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Diamètre du plateau : 76 mm.",
			"Filetage de sortie : 5/16\"-24 Female.",
			"Entrée d’air : 1/4 pouce NPT."
		],
		"limitations": [
			"Le constructeur impose l’arrêt complet avant de changer de mouvement. Le modèle non-vacuum n’acquiert pas une aspiration parce qu’une version voisine en possède une.",
			"Masse non retenue : le tableau publie des unités contradictoires (2.35 (1.0)).",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur.",
			"Les documents relus sont des déclarations fabricant, pas des mesures CompatAir. Leur date d’édition et le numéro de série applicable restent à vérifier sur la machine.",
			"La notice PD08.60 s’applique aux numéros de série 08K1800 et suivants. Son tableau donne le maximum 651 L/min et sa pression déclarée de 90 PSIG (6,2 bar), sans facteur de marche supposé.",
			"Le diamètre intérieur du flexible est de 8 mm dans la notice contre 10 mm dans la fiche actuelle ; aucune valeur unique n’est retenue pour le raccordement."
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
		},
		{
			"label": "Consommation historique à requalifier, hors calcul",
			"value": "651 L/min ; pression historique 6,2 bar",
			"evidenceIds": [
				"dynabrade-58460-catalogue-d25-01"
			]
		},
		{
			"label": "Maximum de la notice PD08.60",
			"value": "651 L/min ; pression déclarée 90 PSIG (6,2 bar), série 08K1800 et suivantes",
			"evidenceIds": [
				"dynabrade-58460-followup-20261025-pd0860",
				"dynabrade-58460-followup-20261025-product"
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
		},
		{
			"id": "dynabrade-58460-followup-20261025-pd0860",
			"sourceUrl": "https://eu.dynabrade.com/assets/4638d270-32ee-4657-a2e6-f84d6dd95d1f/4074396145-pd0860.pdf#page=1",
			"sourceLabel": "Dynabrade 58460, pd0860, pages 1, 2",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "A",
			"notes": "Lecture 2026-10-25; réponse HTTP200, SHA-256 d3d026b7e957d235bf1023217b149ef5b497bec46bea312c5f474edb25c987d3; copie locale 96fa6711ffa15c1a.pdf. Déclaration constructeur, pas de mesure CompatAir."
		},
		{
			"id": "dynabrade-58460-followup-20261025-product",
			"sourceUrl": "https://eu.dynabrade.com/en/catalog/3-76-mm-dia-dynalocke-dual-action-sander-non-vacuum~c1d63ad2-6c8c-4c96-ae6f-819f4c2b4078",
			"sourceLabel": "Dynabrade 58460, fiche officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "A",
			"notes": "Lecture 2026-10-25; réponse HTTP200, SHA-256 ed8b4b2a0a55001c406b1cbe46c132e050cf50bd6820551e1b9661da6d3acfcd; copie locale 9a2d9d880933c263.html. Déclaration constructeur, pas de mesure CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-58460-catalogue-d25-01",
			"dynabrade-58460-followup-20261025-pd0860",
			"dynabrade-58460-followup-20261025-product"
		],
		"workingPressureBar": [
			"dynabrade-58460-followup-20261025-pd0860",
			"dynabrade-58460-followup-20261025-product"
		],
		"connectorSize": [
			"dynabrade-58460-catalogue-d25-01",
			"dynabrade-58460-followup-20261025-pd0860",
			"dynabrade-58460-followup-20261025-product"
		],
		"airflowLpm": [
			"dynabrade-58460-followup-20261025-pd0860",
			"dynabrade-58460-followup-20261025-product"
		],
		"editorial": [
			"dynabrade-58460-followup-20261025-pd0860",
			"dynabrade-58460-followup-20261025-product"
		],
		"specifications": [
			"dynabrade-58460-followup-20261025-pd0860",
			"dynabrade-58460-followup-20261025-product"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"airflowLpm": {
		"min": 651,
		"typical": 651,
		"max": 651
	}
};

export default product;
