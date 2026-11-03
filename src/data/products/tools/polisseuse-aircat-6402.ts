import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-aircat-6402",
	"slug": "polisseuse-aircat-6402",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Aircat 6402",
	"brand": "Aircat",
	"model": "6402",
	"mpn": "6402",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-aircat-6402.webp",
		"alt": "Repères techniques : Aircat 6402",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-6-hp-2600-rpm-composite-tire-buffer/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6402",
		"label": "Référence 6402",
		"distinguishingAttributes": {
			"reference": "6402",
			"Masse publiée": "1.75 lb",
			"Puissance publiée": "0.60 HP"
		}
	},
	"editorial": {
		"overview": "Aircat 6402. La 6402 est l’outil de préparation de pneus à 2 600 tr/min, hexagone interne 5/16 pouce et longueur 9 pouces. La page décrit un tuyau coaxial arrière pour évacuer l’air ; ce besoin diffère d’une ponceuse de carrosserie à plateau. La 6403 est une autre référence à vérifier pour son équipement. Le débit 3,5 CFM reste non dimensionnant faute de conditions de mesure.",
		"verifiedFacts": [
			"Application : Préparation de pneus, tire buffer.",
			"Entraînement : Hexagonal interne 5/16 pouce.",
			"Vitesse à vide : 2 600 tr/min.",
			"Puissance : 0,60 HP.",
			"Longueur : 9 pouces.",
			"Consommation, régime non précisé : 3,5 CFM."
		],
		"limitations": [
			"La fiche ne documente pas suffisamment le régime de consommation et son appariement à une pression ; le calcul reste indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Application",
			"value": "Préparation de pneus, tire buffer",
			"evidenceIds": [
				"polisseuse-aircat-6402-reserved-20261103-1"
			]
		},
		{
			"label": "Entraînement",
			"value": "Hexagonal interne 5/16 pouce",
			"evidenceIds": [
				"polisseuse-aircat-6402-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 600 tr/min",
			"evidenceIds": [
				"polisseuse-aircat-6402-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,60 HP",
			"evidenceIds": [
				"polisseuse-aircat-6402-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "9 pouces",
			"evidenceIds": [
				"polisseuse-aircat-6402-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "3,5 CFM",
			"evidenceIds": [
				"polisseuse-aircat-6402-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-124-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-6-hp-2600-rpm-composite-tire-buffer/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6402",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5f2774309a3edaced8a2b58daea245cf8690bb96c0fa2f44df9d35ef99dc4421. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "polisseuse-aircat-6402-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-6-hp-2600-rpm-composite-tire-buffer/",
			"sourceLabel": "Aircat : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 69b30ec9766fbb8a5c6541bc390757fff948fb0e05f4019f0e58f5de8d307b51. La 6402 est l’outil de préparation de pneus à 2 600 tr/min, hexagone interne 5/16 pouce et longueur 9 pouces. La page décrit un tuyau coaxial arrière pour évacuer l’air ; ce besoin diffère d’une ponceuse de carrosserie à plateau. La 6403 est une autre référence à vérifier pour son équipement. Le débit 3,5 CFM reste non dimensionnant faute de conditions de mesure."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-124-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-124-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-124-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-124-p1"
		],
		"editorial": [
			"polisseuse-aircat-6402-reserved-20261103-1"
		],
		"specifications": [
			"polisseuse-aircat-6402-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
