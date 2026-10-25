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
			"Masse": "Unités non concordantes, masse à confirmer",
			"Longueur": "322 mm"
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
		"src": "/images/products/dynabrade-53783-technical.webp",
		"alt": "Dynabrade 53783, repères techniques ; besoin d’air à confirmer",
		"sourceUrl": "https://us.dynabrade.com/assets/2225dfee-1b23-4a16-b4fa-7f3fe2d2ac0b/4074396334-pd0925.pdf#page=1",
		"sourceLabel": "Repères techniques CompatAir, notice officielle Dynabrade 53783"
	},
	"editorial": {
		"overview": "53783 : meuleuse droite allongée pour cônes et bouchons abrasifs, moteur de 522 W à 20 000 tr/min et sortie 3/8-24. La notice précise un flexible intérieur de 10 mm. Son tableau publie 39 SCFM et 1 000 L/min, valeurs non équivalentes ; le besoin d’air reste à confirmer avant dimensionnement. Les types de meules et leurs dimensions doivent suivre la notice PD09.25.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Masse non arbitrée : la ligne publie 3,9 lb et 1,7 kg, sans parfaite concordance de conversion.",
			"Les unités de masse du tableau ne sont pas parfaitement concordantes ; aucune masse unique n’est utilisée pour justifier le choix. Le filetage commun ne valide pas tout cône ou toute meule.",
			"Hauteur non retenue : le tableau publie des unités contradictoires (1.7 (45)).",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur.",
			"Les documents relus sont des déclarations fabricant, pas des mesures CompatAir. Leur date d’édition et le numéro de série applicable restent à vérifier sur la machine.",
			"La notice PD09.25 donne 39 SCFM et 1 000 L/min dans la même ligne ; aucune de ces valeurs ne fixe un besoin dimensionnant unique."
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
		},
		{
			"label": "Consommation historique à requalifier, hors calcul",
			"value": "1104 L/min ; pression historique 6,2 bar",
			"evidenceIds": [
				"dynabrade-53783-catalogue-d25-01"
			]
		},
		{
			"label": "Débit de la notice, non qualifié pour le calcul",
			"value": "39 SCFM / 1 000 LPM dans la même ligne ; écart non résolu",
			"evidenceIds": [
				"dynabrade-53783-followup-20261025-pd0925",
				"dynabrade-53783-followup-20261025-product"
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
		},
		{
			"id": "dynabrade-53783-followup-20261025-pd0925",
			"sourceUrl": "https://us.dynabrade.com/assets/2225dfee-1b23-4a16-b4fa-7f3fe2d2ac0b/4074396334-pd0925.pdf#page=1",
			"sourceLabel": "Dynabrade 53783, pd0925, pages 1, 2, 3, 8",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "A",
			"notes": "Lecture 2026-10-25; réponse HTTP200, SHA-256 786c3fd41b69236932d2db3b4ed55e8ddc0a4b181ab3330db30a9bc6433a4b41; copie locale d0896dd9fce1c2f3.pdf. Déclaration constructeur, pas de mesure CompatAir."
		},
		{
			"id": "dynabrade-53783-followup-20261025-product",
			"sourceUrl": "https://us.dynabrade.com/en/catalog/cone-or-plug-grinder-single-extension-steel-housing~5b92fe24-d15d-4ae7-996d-0316a887bfdb",
			"sourceLabel": "Dynabrade 53783, fiche officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "A",
			"notes": "Lecture 2026-10-25; réponse HTTP200, SHA-256 167359948ec7ed80eadbcec52bbaac84cded0f678ab8036e4f694c41c0a06fd1; copie locale 3727a3fd923b69f7.html. Déclaration constructeur, pas de mesure CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53783-catalogue-d25-01",
			"dynabrade-53783-followup-20261025-pd0925",
			"dynabrade-53783-followup-20261025-product"
		],
		"workingPressureBar": [
			"dynabrade-53783-catalogue-d25-01",
			"dynabrade-53783-followup-20261025-pd0925",
			"dynabrade-53783-followup-20261025-product"
		],
		"connectorSize": [
			"dynabrade-53783-catalogue-d25-01",
			"dynabrade-53783-followup-20261025-pd0925",
			"dynabrade-53783-followup-20261025-product"
		],
		"recommendedHose": [
			"dynabrade-53783-catalogue-d25-01",
			"dynabrade-53783-followup-20261025-pd0925",
			"dynabrade-53783-followup-20261025-product"
		],
		"demandExplanation": [
			"dynabrade-53783-catalogue-d25-01",
			"dynabrade-53783-followup-20261025-pd0925",
			"dynabrade-53783-followup-20261025-product"
		],
		"editorial": [
			"dynabrade-53783-followup-20261025-pd0925",
			"dynabrade-53783-followup-20261025-product"
		],
		"specifications": [
			"dynabrade-53783-followup-20261025-pd0925",
			"dynabrade-53783-followup-20261025-product"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"demandExplanation": "La notice PD09.25 publie 39 SCFM (1 000 LPM) à 90 PSIG (6,2 bar), unités non équivalentes. Aucun débit unique ne réintègre le calcul tant que la contradiction n’est pas résolue."
};

export default product;
