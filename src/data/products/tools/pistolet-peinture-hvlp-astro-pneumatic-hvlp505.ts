import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-astro-pneumatic-hvlp505",
	"slug": "pistolet-peinture-hvlp-astro-pneumatic-hvlp505",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Astro Pneumatic HVLP505",
	"brand": "Astro Pneumatic",
	"model": "HVLP505",
	"mpn": "HVLP505",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-astro-pneumatic-hvlp505.svg",
		"alt": "Repères techniques : Astro Pneumatic HVLP505",
		"sourceUrl": "https://www.astrotools.com/product/hvlp-gravity-feed-spray-gun-1-5mm-nozzle-with-aluminum-cup/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-hvlp505",
		"label": "Référence HVLP505",
		"distinguishingAttributes": {
			"reference": "HVLP505",
			"Buse": "1.5mm",
			"Pression de fonctionnement": "41-44psi"
		}
	},
	"editorial": {
		"overview": "HVLP505 : buse de 1,5 mm, godet aluminium et pression de service de 41 à 44 psi. Astro le marque « NO LONGER AVAILABLE » sur sa fiche. Le voisin HVLP507 est en 1,7 mm ; les deux fiches annoncent une consommation moyenne de 10 cfm et une recommandation de compresseur de 3 hp.",
		"verifiedFacts": [
			"Buse : 1.5mm.",
			"Pression de fonctionnement : 41-44psi.",
			"Masse nette : 3lbs. (1.36kg).",
			"Consommation moyenne, hors calcul : 10cfm.",
			"Filetage d’arrivée d’air : 1/4\".",
			"Puissance compresseur recommandée, hors calcul : 3hp.",
			"Diamètre intérieur du flexible : 4-6mm."
		],
		"limitations": [
			"Le retrait de l’offre constructeur ne permet pas de conclure à l’absence de stock chez tous les revendeurs.",
			"Les 10 cfm sont une moyenne sans régime documenté ; les 3 hp recommandés ne remplacent pas un FAD sous pression.",
			"Le flexible est annoncé avec un diamètre intérieur de 4 à 6 mm dans la fiche. Cette plage est conservée sans choisir silencieusement une valeur unique."
		]
	},
	"specifications": [
		{
			"label": "Buse",
			"value": "1.5mm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp505-p1"
			]
		},
		{
			"label": "Pression de fonctionnement",
			"value": "41-44psi",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp505-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "3lbs. (1.36kg)",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp505-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "10cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp505-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp505-p1"
			]
		},
		{
			"label": "Puissance compresseur recommandée, hors calcul",
			"value": "3hp",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp505-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "4-6mm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp505-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "10 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp505-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operation Pressure: 41-44psi",
			"evidenceIds": [
				"october3d-tools-astro-product-hvlp505-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-hvlp505-p1",
			"sourceUrl": "https://www.astrotools.com/product/hvlp-gravity-feed-spray-gun-1-5mm-nozzle-with-aluminum-cup/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 534c75072d29fc7590e4c3a7329a098512f211c30d35a36fdaf0c757d5eb4a39. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-astro-product-hvlp507-p1",
			"sourceUrl": "https://www.astrotools.com/product/hvlp-gravity-feed-spray-gun-1-7mm-nozzle-with-aluminum-cup/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 684b8cbe8e6871bf48f2ae1d02d241f34a97db5ceed3b3c5e17c9d13de073029. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-hvlp505-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-hvlp505-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-hvlp505-p1"
		],
		"connectorSize": [
			"october3d-tools-astro-product-hvlp505-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	],
	"connectorSize": "1/4 NPT"
};

export default product;
