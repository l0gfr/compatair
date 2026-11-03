import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-aircat-6205",
	"slug": "meuleuse-aircat-6205",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Aircat 6205",
	"brand": "Aircat",
	"model": "6205",
	"mpn": "6205",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-aircat-6205.webp",
		"alt": "Repères techniques : Aircat 6205",
		"sourceUrl": "https://continentaltoolgroup.com/product/6205/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6205",
		"label": "Référence 6205",
		"distinguishingAttributes": {
			"reference": "6205",
			"Masse publiée": "0.75 lb",
			"Vitesse à vide": "25000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6205. La 6205 est la micromeuleuse droite à entraînement direct, pince 1/4 pouce et longueur 4,8 pouces. La 6290 est donnée pour 7 pouces et 20 000 tr/min ; la 6280 est une autre puissance. Le format et le régime admissible de fraise orientent le choix. Le débit 4 CFM reste documentaire.",
		"verifiedFacts": [
			"Pince : 1/4 pouce.",
			"Vitesse à vide : 25 000 tr/min.",
			"Puissance : 0,3 HP.",
			"Entraînement : Direct.",
			"Échappement : Arrière.",
			"Longueur : 4,8 pouces.",
			"Consommation, régime non précisé : 4 CFM."
		],
		"limitations": [
			"La fiche ne documente pas suffisamment le régime de consommation et son appariement à une pression ; le calcul reste indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Pince",
			"value": "1/4 pouce",
			"evidenceIds": [
				"meuleuse-aircat-6205-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "25 000 tr/min",
			"evidenceIds": [
				"meuleuse-aircat-6205-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,3 HP",
			"evidenceIds": [
				"meuleuse-aircat-6205-reserved-20261103-1"
			]
		},
		{
			"label": "Entraînement",
			"value": "Direct",
			"evidenceIds": [
				"meuleuse-aircat-6205-reserved-20261103-1"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"meuleuse-aircat-6205-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "4,8 pouces",
			"evidenceIds": [
				"meuleuse-aircat-6205-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "4 CFM",
			"evidenceIds": [
				"meuleuse-aircat-6205-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-28-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/6205/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6205",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6b6e795ffbcbfe9769e7b8385545942e6ec8560bcb63bd87761ef8af1761a563. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "meuleuse-aircat-6205-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/6205/",
			"sourceLabel": "Aircat : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 5aeb7341c92496e67470617f41110675ba13bc2e8e54e857da05402e2e958e20. La 6205 est la micromeuleuse droite à entraînement direct, pince 1/4 pouce et longueur 4,8 pouces. La 6290 est donnée pour 7 pouces et 20 000 tr/min ; la 6280 est une autre puissance. Le format et le régime admissible de fraise orientent le choix. Le débit 4 CFM reste documentaire."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-28-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-28-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-28-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-28-p1"
		],
		"editorial": [
			"meuleuse-aircat-6205-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-aircat-6205-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
