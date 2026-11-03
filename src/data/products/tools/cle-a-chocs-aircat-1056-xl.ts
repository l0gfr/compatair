import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1056-xl",
	"slug": "cle-a-chocs-aircat-1056-xl",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1056-XL",
	"brand": "Aircat",
	"model": "1056-XL",
	"mpn": "1056-XL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1056-xl.webp",
		"alt": "Repères techniques : Aircat 1056-XL",
		"sourceUrl": "https://continentaltoolgroup.com/product/1-2-nitrocat-composite-compact-impact-wrench-1056-xl/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1056-xl",
		"label": "Référence 1056-XL",
		"distinguishingAttributes": {
			"reference": "1056-XL",
			"Masse publiée": "2.5 lb",
			"Vitesse à vide": "9000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1056-XL. La 1056-XL est la clé compacte 1/2 pouce de 4,25 pouces, avec 550 ft-lb maximum et 750 ft-lb au desserrage. Ces deux couples restent distincts ; ils ne sont pas recopiés en Nm. Les 1076-XL et 1058-VXL restent des configurations propres. La fiche ne qualifie pas le régime ni la pression de mesure des 8 CFM.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Couple maximal : 550 ft-lb.",
			"Couple de desserrage distinct : 750 ft-lb.",
			"Vitesse à vide : 9 000 tr/min.",
			"Longueur : 4,25 pouces.",
			"Consommation, régime non précisé : 8 CFM."
		],
		"limitations": [
			"La fiche ne documente pas suffisamment le régime de consommation et son appariement à une pression ; le calcul reste indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"cle-a-chocs-aircat-1056-xl-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal",
			"value": "550 ft-lb",
			"evidenceIds": [
				"cle-a-chocs-aircat-1056-xl-reserved-20261103-1"
			]
		},
		{
			"label": "Couple de desserrage distinct",
			"value": "750 ft-lb",
			"evidenceIds": [
				"cle-a-chocs-aircat-1056-xl-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9 000 tr/min",
			"evidenceIds": [
				"cle-a-chocs-aircat-1056-xl-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "4,25 pouces",
			"evidenceIds": [
				"cle-a-chocs-aircat-1056-xl-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "8 CFM",
			"evidenceIds": [
				"cle-a-chocs-aircat-1056-xl-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-304-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-2-nitrocat-composite-compact-impact-wrench-1056-xl/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1056-XL",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d2b125f0a1a8f71131420b2a22ac9f596fb37810e8a2f1c81484201c6053434c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-aircat-1056-xl-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-2-nitrocat-composite-compact-impact-wrench-1056-xl/",
			"sourceLabel": "Aircat : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a7a834fba8a37aae460fa5319322a9befea86db704c99606a9c296bcfa94c9b2. La 1056-XL est la clé compacte 1/2 pouce de 4,25 pouces, avec 550 ft-lb maximum et 750 ft-lb au desserrage. Ces deux couples restent distincts ; ils ne sont pas recopiés en Nm. Les 1076-XL et 1058-VXL restent des configurations propres. La fiche ne qualifie pas le régime ni la pression de mesure des 8 CFM."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-304-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-304-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-304-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-304-p1"
		],
		"editorial": [
			"cle-a-chocs-aircat-1056-xl-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-aircat-1056-xl-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
