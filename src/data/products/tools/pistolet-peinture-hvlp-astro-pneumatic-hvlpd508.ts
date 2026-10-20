import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-astro-pneumatic-hvlpd508",
	"slug": "pistolet-peinture-hvlp-astro-pneumatic-hvlpd508",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Astro Pneumatic HVLPD508",
	"brand": "Astro Pneumatic",
	"model": "HVLPD508",
	"mpn": "HVLPD508",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-astro-pneumatic-hvlpd508.svg",
		"alt": "Repères techniques : Astro Pneumatic HVLPD508",
		"sourceUrl": "https://www.astrotools.com/product/hvlp-mini-gravity-feed-spray-gun-0-8mm-nozzle/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-hvlpd508",
		"label": "Référence HVLPD508",
		"distinguishingAttributes": {
			"reference": "HVLPD508",
			"Buse": "0.8mm",
			"Pression de fonctionnement": "29psi"
		}
	},
	"editorial": {
		"overview": "HVLPD508 : mini-pistolet gravitaire à buse de 0,8 mm, contre 1,2 mm pour le HVLPD512. La fiche du 508 annonce un jet maximal de 120 mm à 8 pouces et une consommation moyenne de 4 cfm à lire séparément de la pression de fonctionnement de 29 psi. La buse et la taille de la retouche doivent être choisies avec le produit appliqué, sans déduire le débit en charge de la moyenne.",
		"verifiedFacts": [
			"Buse : 0.8mm.",
			"Pression de fonctionnement : 29psi.",
			"Masse nette : 1lbs (.45kg).",
			"Consommation moyenne, hors calcul : 4cfm.",
			"Filetage d’arrivée d’air : 1/4\".",
			"Puissance compresseur recommandée, hors calcul : 1HP or above.",
			"Flexible : I.D.Size: 4-6mm."
		],
		"limitations": [
			"La recommandation de puissance de compresseur en HP ne remplace pas un FAD à pression donnée. Aucun rendement de pulvérisation ni débit continu n’est extrapolé.",
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La consommation moyenne ou sans régime publié reste hors calcul ; aucun débit en charge à pression de mesure connue n’est extrapolé.",
			"Une pression recommandée ou de service n’est pas un point de mesure de la consommation.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Buse",
			"value": "0.8mm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlpd508-p1"
			]
		},
		{
			"label": "Pression de fonctionnement",
			"value": "29psi",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlpd508-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "1lbs (.45kg)",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlpd508-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlpd508-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlpd508-p1"
			]
		},
		{
			"label": "Puissance compresseur recommandée, hors calcul",
			"value": "1HP or above",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlpd508-p1"
			]
		},
		{
			"label": "Flexible",
			"value": "I.D.Size: 4-6mm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlpd508-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlpd508-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operation Pressure: 29psi",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlpd508-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-hvlpd508-p1",
			"sourceUrl": "https://www.astrotools.com/product/hvlp-mini-gravity-feed-spray-gun-0-8mm-nozzle/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 42f8859e2e7a9cebb0f73af16025e87b652281722413f7a995a68d5b4b991a14. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-astro-product-hvlpd512-p1",
			"sourceUrl": "https://www.astrotools.com/product/hvlp-mini-gravity-feed-spray-gun-1-2mm-nozzle/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 f93144f1fd1beceab8d9c34dd3644bd9d0646c85539fd1b48d25bc9c8ec817d7. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-hvlpd508-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-hvlpd508-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-hvlpd508-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
