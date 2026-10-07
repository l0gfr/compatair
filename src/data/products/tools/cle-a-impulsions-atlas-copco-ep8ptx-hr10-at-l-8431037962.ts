import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-atlas-copco-ep8ptx-hr10-at-l-8431037962",
	"slug": "cle-a-impulsions-atlas-copco-ep8ptx-hr10-at-l-8431037962",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Atlas Copco EP8PTX HR10-AT-L (réf. 8431037962)",
	"brand": "Atlas Copco",
	"model": "EP8PTX HR10-AT-L",
	"mpn": "8431037962",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette ligne basse pression donne une vitesse mesurée à 5 bar. La pression de mesure propre à sa consommation reste à confirmer ; la règle générale à 6,3 bar ne lui est pas appliquée silencieusement.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-atlas-copco-ep8ptx-hr10-at-l-8431037962.webp",
		"alt": "Repères techniques : Atlas Copco EP8PTX HR10-AT-L (réf. 8431037962)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ep8ptx-hr10-at-l",
		"label": "Référence 8431037962",
		"distinguishingAttributes": {
			"reference": "8431037962",
			"Vitesse à vide": "6300 tr/min",
			"Masse": "0.9 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco EP8PTX HR10-AT-L (réf. 8431037962). Cette ligne basse pression donne une vitesse mesurée à 5 bar. La pression de mesure propre à sa consommation reste à confirmer ; la règle générale à 6,3 bar ne lui est pas appliquée silencieusement. Vitesse à vide : 6300 tr/min. Masse : 0.9 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 6300 tr/min.",
			"Masse : 0.9 kg."
		],
		"limitations": [
			"Cette ligne basse pression donne une vitesse mesurée à 5 bar. La pression de mesure propre à sa consommation reste à confirmer ; la règle générale à 6,3 bar ne lui est pas appliquée silencieusement.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "6300 tr/min",
			"evidenceIds": [
				"october-atlas-us-p24"
			]
		},
		{
			"label": "Masse",
			"value": "0.9 kg",
			"evidenceIds": [
				"october-atlas-us-p24"
			]
		},
		{
			"label": "Consommation déclarée, pression de mesure à confirmer",
			"value": "420 L/min ; donnée exclue du calcul de compatibilité",
			"evidenceIds": [
				"october-atlas-us-p24"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Atlas Copco, Industrial tools and solutions, édition US, page 24",
			"evidenceIds": [
				"october-atlas-us-p24"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Free speed: footnote d, Measured at 5 bar air pressure. La pression de mesure propre à la consommation de cette ligne basse pression reste à confirmer.",
			"evidenceIds": [
				"october-atlas-us-p24"
			]
		}
	],
	"evidence": [
		{
			"id": "october-atlas-us-p24",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=24",
			"sourceLabel": "Atlas Copco, Industrial tools and solutions, édition US, page 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 4fab5d622435c614e9ed24db292c697a8e4ca13f0f5f8edb8d2092ee01348d74. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-atlas-us-p24"
		],
		"workingPressureBar": [
			"october-atlas-us-p24"
		],
		"demandExplanation": [
			"october-atlas-us-p24"
		]
	},
	"notes": [
		"Cette ligne basse pression donne une vitesse mesurée à 5 bar. La pression de mesure propre à sa consommation reste à confirmer ; la règle générale à 6,3 bar ne lui est pas appliquée silencieusement."
	]
};

export default product;
