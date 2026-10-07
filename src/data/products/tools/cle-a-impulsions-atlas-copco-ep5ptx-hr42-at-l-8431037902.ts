import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-atlas-copco-ep5ptx-hr42-at-l-8431037902",
	"slug": "cle-a-impulsions-atlas-copco-ep5ptx-hr42-at-l-8431037902",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Atlas Copco EP5PTX HR42-AT-L (réf. 8431037902)",
	"brand": "Atlas Copco",
	"model": "EP5PTX HR42-AT-L",
	"mpn": "8431037902",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Cette ligne basse pression donne une vitesse mesurée à 5 bar. La pression de mesure propre à sa consommation reste à confirmer ; la règle générale à 6,3 bar ne lui est pas appliquée silencieusement.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-atlas-copco-ep5ptx-hr42-at-l-8431037902.webp",
		"alt": "Repères techniques : Atlas Copco EP5PTX HR42-AT-L (réf. 8431037902)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ep5ptx-hr42-at-l",
		"label": "Référence 8431037902",
		"distinguishingAttributes": {
			"reference": "8431037902",
			"Vitesse à vide": "5900 tr/min",
			"Masse": "0.8 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco EP5PTX HR42-AT-L (réf. 8431037902). Cette ligne basse pression donne une vitesse mesurée à 5 bar. La pression de mesure propre à sa consommation reste à confirmer ; la règle générale à 6,3 bar ne lui est pas appliquée silencieusement. Vitesse à vide : 5900 tr/min. Masse : 0.8 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 5900 tr/min.",
			"Masse : 0.8 kg."
		],
		"limitations": [
			"Cette ligne basse pression donne une vitesse mesurée à 5 bar. La pression de mesure propre à sa consommation reste à confirmer ; la règle générale à 6,3 bar ne lui est pas appliquée silencieusement.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5900 tr/min",
			"evidenceIds": [
				"october-atlas-us-p24"
			]
		},
		{
			"label": "Masse",
			"value": "0.8 kg",
			"evidenceIds": [
				"october-atlas-us-p24"
			]
		},
		{
			"label": "Consommation déclarée, pression de mesure à confirmer",
			"value": "240 L/min ; donnée exclue du calcul de compatibilité",
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
