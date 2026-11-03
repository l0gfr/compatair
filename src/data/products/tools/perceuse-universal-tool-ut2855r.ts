import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-universal-tool-ut2855r",
	"slug": "perceuse-universal-tool-ut2855r",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Universal Tool UT2855R",
	"brand": "Universal Tool",
	"model": "UT2855R",
	"mpn": "UT2855R",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet  (NPT / BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-universal-tool-ut2855r.webp",
		"alt": "Repères techniques : Universal Tool UT2855R",
		"sourceUrl": "https://continentaltoolgroup.com/product/1-2-reversible-drill-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut2855r",
		"label": "Référence UT2855R",
		"distinguishingAttributes": {
			"reference": "UT2855R",
			"Masse publiée": "1.4 kg",
			"Longueur publiée": "220.5 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT2855R. La UT2855R est la perceuse réversible à mandrin 1/2 pouce, 450 tr/min ; la UT2855R-7 est à 700 tr/min. Les colonnes de puissance 0,75 HP/0,51 kW et de longueur 9 pouces/220,5 mm ne sont pas des conversions exactes : elles restent attribuées au fabricant sans valeur corrigée supposée. Les 14 CFM et 3,5 CFM moyens ne qualifient pas la pression de mesure.",
		"verifiedFacts": [
			"Mandrin : 1/2 pouce, perceuse réversible.",
			"Vitesse : 450 tr/min.",
			"Puissance, colonnes source : 0,75 HP / 0,51 kW.",
			"Longueur, colonnes source : 9 pouces / 220,5 mm.",
			"Consommation de régime non précisé / moyenne : 14 / 3,5 CFM."
		],
		"limitations": [
			"Régime et pression de mesure non suffisamment documentés ; les valeurs restent hors calcul conclusif.",
			"Les colonnes contradictoires éventuelles restent attribuées à la source, sans correction devinée."
		]
	},
	"specifications": [
		{
			"label": "Mandrin",
			"value": "1/2 pouce, perceuse réversible",
			"evidenceIds": [
				"perceuse-universal-tool-ut2855r-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "450 tr/min",
			"evidenceIds": [
				"perceuse-universal-tool-ut2855r-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance, colonnes source",
			"value": "0,75 HP / 0,51 kW",
			"evidenceIds": [
				"perceuse-universal-tool-ut2855r-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur, colonnes source",
			"value": "9 pouces / 220,5 mm",
			"evidenceIds": [
				"perceuse-universal-tool-ut2855r-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation de régime non précisé / moyenne",
			"value": "14 / 3,5 CFM",
			"evidenceIds": [
				"perceuse-universal-tool-ut2855r-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-40-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-2-reversible-drill-2/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT2855R",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8e3b47ac0e43dc7195557ae1eeaa0a9e036074a05224f20ea1978a5c47c1fb83. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "perceuse-universal-tool-ut2855r-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-2-reversible-drill-2/",
			"sourceLabel": "Universal Tool : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 0ec32baef36ea8f1c71d77a1f94b28ec3df5df415567b22cbbfacc9dbab784e7. La UT2855R est la perceuse réversible à mandrin 1/2 pouce, 450 tr/min ; la UT2855R-7 est à 700 tr/min. Les colonnes de puissance 0,75 HP/0,51 kW et de longueur 9 pouces/220,5 mm ne sont pas des conversions exactes : elles restent attribuées au fabricant sans valeur corrigée supposée. Les 14 CFM et 3,5 CFM moyens ne qualifient pas la pression de mesure."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-40-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-40-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-40-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-40-p1"
		],
		"editorial": [
			"perceuse-universal-tool-ut2855r-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-universal-tool-ut2855r-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
