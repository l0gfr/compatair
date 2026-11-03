import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-rodcraft-rc4700-8951073002",
	"slug": "visseuse-rodcraft-rc4700-8951073002",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Rodcraft RC4700 (réf. 8951073002)",
	"brand": "Rodcraft",
	"model": "RC4700",
	"mpn": "8951073002",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-rodcraft-rc4700-8951073002.webp",
		"alt": "Repères techniques : Rodcraft RC4700 (réf. 8951073002)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc4700",
		"label": "Référence 8951073002",
		"distinguishingAttributes": {
			"reference": "8951073002",
			"Masse publiée": "1,15 kg",
			"Dimensions publiées": "210x150x42 mm"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC4700. La RC4700 est la visseuse pistolet à réglage interne 1–7 Nm, 2 100 tr/min. La RC4760 est droite et donne 2 000 tr/min ; la RC4784 propose un réglage externe 1–6 Nm. Le montage et le réglage distinguent ces références. Le glossaire ne permet pas de transformer la moyenne 430 L/min en un maximum mesuré à 6,3 bar.",
		"verifiedFacts": [
			"Emmanchement : Hexagonal femelle 1/4 pouce, changement rapide.",
			"Couple : 1–7 Nm.",
			"Réglage : Interne.",
			"Vitesse : 2 100 tr/min.",
			"Dimensions : 210 × 150 × 42 mm.",
			"Consommations moyenne / à vide : 430 / 585 L/min."
		],
		"limitations": [
			"Glossaire constructeur p.4 : average = moyenne en charge ; cont. = consommation à vide. Le maximum d’entrée 6,3 bar n’est pas une pression exacte de mesure.",
			"Catalogue historique identifié ; équipement et disponibilité actuels à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Emmanchement",
			"value": "Hexagonal femelle 1/4 pouce, changement rapide",
			"evidenceIds": [
				"visseuse-rodcraft-rc4700-8951073002-reserved-20261103-1"
			]
		},
		{
			"label": "Couple",
			"value": "1–7 Nm",
			"evidenceIds": [
				"visseuse-rodcraft-rc4700-8951073002-reserved-20261103-1"
			]
		},
		{
			"label": "Réglage",
			"value": "Interne",
			"evidenceIds": [
				"visseuse-rodcraft-rc4700-8951073002-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "2 100 tr/min",
			"evidenceIds": [
				"visseuse-rodcraft-rc4700-8951073002-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions",
			"value": "210 × 150 × 42 mm",
			"evidenceIds": [
				"visseuse-rodcraft-rc4700-8951073002-reserved-20261103-1"
			]
		},
		{
			"label": "Consommations moyenne / à vide",
			"value": "430 / 585 L/min",
			"evidenceIds": [
				"visseuse-rodcraft-rc4700-8951073002-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p26",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=26",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c10fd37c2e1adf9ac34431eb523b1933644b83f1cec85b376d30cd77aab01ef3. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir. Portée revue le 2026-10-02 : plafond d’entrée du glossaire page PDF 4, pression de mesure de la consommation non établie."
		},
		{
			"id": "october2-tools-rodcraft-catalog-p4",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=4",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c10fd37c2e1adf9ac34431eb523b1933644b83f1cec85b376d30cd77aab01ef3. Document complémentaire de la référence exacte, sans essai CompatAir."
		},
		{
			"id": "visseuse-rodcraft-rc4700-8951073002-reserved-20261103-1",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=26",
			"sourceLabel": "Rodcraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c10fd37c2e1adf9ac34431eb523b1933644b83f1cec85b376d30cd77aab01ef3. La RC4700 est la visseuse pistolet à réglage interne 1–7 Nm, 2 100 tr/min. La RC4760 est droite et donne 2 000 tr/min ; la RC4784 propose un réglage externe 1–6 Nm. Le montage et le réglage distinguent ces références. Le glossaire ne permet pas de transformer la moyenne 430 L/min en un maximum mesuré à 6,3 bar."
		},
		{
			"id": "visseuse-rodcraft-rc4700-8951073002-reserved-20261103-1-3",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=4",
			"sourceLabel": "Rodcraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c10fd37c2e1adf9ac34431eb523b1933644b83f1cec85b376d30cd77aab01ef3. La RC4700 est la visseuse pistolet à réglage interne 1–7 Nm, 2 100 tr/min. La RC4760 est droite et donne 2 000 tr/min ; la RC4784 propose un réglage externe 1–6 Nm. Le montage et le réglage distinguent ces références. Le glossaire ne permet pas de transformer la moyenne 430 L/min en un maximum mesuré à 6,3 bar."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rodcraft-catalog-p26"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p26",
			"october2-tools-rodcraft-catalog-p4"
		],
		"demandExplanation": [
			"october2-tools-rodcraft-catalog-p26"
		],
		"editorial": [
			"visseuse-rodcraft-rc4700-8951073002-reserved-20261103-1"
		],
		"specifications": [
			"visseuse-rodcraft-rc4700-8951073002-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
