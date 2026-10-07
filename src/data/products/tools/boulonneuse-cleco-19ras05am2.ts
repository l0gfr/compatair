import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-cleco-19ras05am2",
	"slug": "boulonneuse-cleco-19ras05am2",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 19RAS05AM2",
	"brand": "Cleco",
	"model": "19RAS05AM2",
	"mpn": "19RAS05AM2",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-cleco-19ras05am2.webp",
		"alt": "Repères techniques : Cleco 19RAS05AM2",
		"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=43",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-19ras05am2",
		"label": "Référence 19RAS05AM2",
		"distinguishingAttributes": {
			"reference": "19RAS05AM2",
			"Couple maximal publié": "5.2 Nm",
			"Vitesse à vide": "850 tr/min",
			"Longueur publiée": "10.6 in"
		}
	},
	"editorial": {
		"overview": "Cleco 19RAS05AM2. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Couple maximal publié : 5.2 Nm. Vitesse à vide : 850 tr/min.",
		"verifiedFacts": [
			"Couple maximal publié : 5.2 Nm.",
			"Vitesse à vide : 850 tr/min.",
			"Longueur publiée : 10.6 in.",
			"Masse publiée : 0.54 kg."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Couple maximal publié",
			"value": "5.2 Nm",
			"evidenceIds": [
				"october-cleco-p43-p43"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "850 tr/min",
			"evidenceIds": [
				"october-cleco-p43-p43"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "10.6 in",
			"evidenceIds": [
				"october-cleco-p43-p43"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.54 kg",
			"evidenceIds": [
				"october-cleco-p43-p43"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco, catalogue SP-1081, page 43",
			"evidenceIds": [
				"october-cleco-p43-p43"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "General: Tool performance rated at 90 psi (620kPa) air pressure.",
			"evidenceIds": [
				"october-cleco-p43-p43"
			]
		}
	],
	"evidence": [
		{
			"id": "october-cleco-p43-p43",
			"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=43#page=43",
			"sourceLabel": "Cleco, catalogue SP-1081, page 43",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 bef49fffdd0e679f4e0e6a290b1fe947da10e6771444c98eca530bebe14b44ec. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-cleco-p43-p43"
		],
		"workingPressureBar": [
			"october-cleco-p43-p43"
		],
		"demandExplanation": [
			"october-cleco-p43-p43"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
