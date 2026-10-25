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
			"Puissance moteur": "Puissance contradictoire : 82 W dans la notice et la description ; 0,15 hp dans le tableau de la fiche",
			"Vitesse moteur publiée": "10 000 tr/min",
			"Masse": "0,82 kg dans la notice PD19-01 et dans la fiche actuelle",
			"Longueur": "179 mm dans la notice ; 178 mm dans la fiche actuelle"
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
		"alt": "Dynabrade 58502, repères techniques ; besoin d’air à confirmer",
		"sourceUrl": "https://eu.dynabrade.com/assets/19376dd1-fe85-4fe2-b579-a78fbbfd3e6b/4074402509-pd19-01.pdf#page=1",
		"sourceLabel": "Repères techniques CompatAir, notice officielle Dynabrade 58502"
	},
	"editorial": {
		"overview": "Dynabug II 58502 : ponceuse rectangulaire à aspiration centrale, port extérieur de 1 pouce et plateau 56316. La notice PD19-01 indique 12 SCFM (340 L/min) ; la fiche produit actuelle annonce 13 SCFM (368 L/min). La puissance est elle aussi contradictoire dans la fiche. Le choix du compresseur reste indéterminé tant que le besoin d’air de la machine et sa série ne sont pas confirmés.",
		"verifiedFacts": [
			"Vitesse moteur publiée : 10 000 tr/min.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié.",
			"Aspiration centrale ; port extérieur de 1 pouce.",
			"Plateau fabricant référencé 56316.",
			"Masse de 0,82 kg publiée dans la notice PD19-01 et dans la fiche produit."
		],
		"limitations": [
			"Un port de 1 pouce ne constitue pas une preuve de captage suffisante pour tout matériau. Aucun débit égal n’est transformé en résultat de finition ou d’exposition égal.",
			"Hauteur non retenue : le tableau publie des unités contradictoires (3-1/2 (91)).",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur.",
			"Les documents relus sont des déclarations fabricant, pas des mesures CompatAir. Leur date d’édition et le numéro de série applicable restent à vérifier sur la machine.",
			"La notice PD19-01 de septembre 2022 concerne les séries II10000C et suivantes. Elle donne 340 L/min contre 368 L/min sur la fiche actuelle ; aucun débit unique n’est retenu.",
			"La fiche présente deux dimensions de plateau, 74 × 109 et 76 × 108 mm : la référence 56316 est conservée sans inventer une dimension unique."
		]
	},
	"specifications": [
		{
			"label": "Puissance, conflit entre sources",
			"value": "82 W dans la notice et la description ; 0,15 hp dans le tableau de la fiche",
			"evidenceIds": [
				"dynabrade-58502-followup-20261025-pd19-01",
				"dynabrade-58502-followup-20261025-product"
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
			"value": "0,82 kg dans la notice et la fiche actuelle",
			"evidenceIds": [
				"dynabrade-58502-followup-20261025-pd19-01",
				"dynabrade-58502-followup-20261025-product"
			]
		},
		{
			"label": "Longueur, deux arrondis publiés",
			"value": "179 mm dans la notice ; 178 mm dans la fiche actuelle",
			"evidenceIds": [
				"dynabrade-58502-followup-20261025-pd19-01",
				"dynabrade-58502-followup-20261025-product"
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
		},
		{
			"id": "dynabrade-58502-followup-20261025-pd19-01",
			"sourceUrl": "https://eu.dynabrade.com/assets/19376dd1-fe85-4fe2-b579-a78fbbfd3e6b/4074402509-pd19-01.pdf#page=1",
			"sourceLabel": "Dynabrade 58502, pd19-01, pages 1, 2, 4",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "A",
			"notes": "Lecture 2026-10-25; réponse HTTP200, SHA-256 f51710c924da6c06fc5bc2c4bb42cace40892715d6d695baf7eacb4ad88b310e; copie locale 8334c4df1da20c33.pdf. Déclaration constructeur, pas de mesure CompatAir."
		},
		{
			"id": "dynabrade-58502-followup-20261025-product",
			"sourceUrl": "https://eu.dynabrade.com/en/catalog/3-76-mm-w-x-4-14-108-mm-l-dynabug-ii-orbital-sander-central-vacuum~59e56665-6b60-48d3-9250-c1fb357a3cbe",
			"sourceLabel": "Dynabrade 58502, fiche officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "A",
			"notes": "Lecture 2026-10-25; réponse HTTP200, SHA-256 87be2b2092690264e990c7a38fd846dd333f777954edd5c9c250e76768926418; copie locale fa89d2b9f385cbab.html. Déclaration constructeur, pas de mesure CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-58502-catalogue-d25-01",
			"dynabrade-58502-followup-20261025-pd19-01",
			"dynabrade-58502-followup-20261025-product"
		],
		"workingPressureBar": [
			"dynabrade-58502-catalogue-d25-01",
			"dynabrade-58502-followup-20261025-pd19-01",
			"dynabrade-58502-followup-20261025-product"
		],
		"connectorSize": [
			"dynabrade-58502-catalogue-d25-01",
			"dynabrade-58502-followup-20261025-pd19-01",
			"dynabrade-58502-followup-20261025-product"
		],
		"recommendedHose": [
			"dynabrade-58502-catalogue-d25-01",
			"dynabrade-58502-followup-20261025-pd19-01",
			"dynabrade-58502-followup-20261025-product"
		],
		"demandExplanation": [
			"dynabrade-58502-catalogue-d25-01",
			"dynabrade-58502-followup-20261025-pd19-01",
			"dynabrade-58502-followup-20261025-product"
		],
		"editorial": [
			"dynabrade-58502-followup-20261025-pd19-01",
			"dynabrade-58502-followup-20261025-product"
		],
		"specifications": [
			"dynabrade-58502-followup-20261025-pd19-01",
			"dynabrade-58502-followup-20261025-product"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"demandExplanation": "La notice PD19-01 de 2022 publie 12 SCFM (340 LPM) pour 58502 ; la fiche actuelle publie 13 SCFM (368 LPM) à 90 PSI (6,2 bar). Les deux déclarations fabricant ne sont pas arbitrées ; aucun débit unique ne réintègre le calcul."
};

export default product;
