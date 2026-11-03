import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-aircat-6515",
	"slug": "tronconneuse-aircat-6515",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Aircat 6515",
	"brand": "Aircat",
	"model": "6515",
	"mpn": "6515",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-aircat-6515.webp",
		"alt": "Repères techniques : Aircat 6515",
		"sourceUrl": "https://continentaltoolgroup.com/product/5-hp-3-cut-off-tool/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6515",
		"label": "Référence 6515",
		"distinguishingAttributes": {
			"reference": "6515",
			"Masse publiée": "1.8 lb",
			"Vitesse à vide": "22000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6515. La 6515 est la tronçonneuse droite à disque 3 pouces et 22 000 tr/min. La 6505 est donnée pour 20 000 tr/min et la 6525-A pour 18 000 tr/min ; la vitesse de l’accessoire doit suivre le modèle exact. La capacité de coupe n’est pas extrapolée du diamètre de disque. Les 3,5 CFM restent de régime et pression de mesure non qualifiés.",
		"verifiedFacts": [
			"Disque de coupe : 3 pouces.",
			"Vitesse à vide : 22 000 tr/min.",
			"Puissance : 0,5 HP.",
			"Entraînement : Direct.",
			"Longueur : 7,6 pouces.",
			"Consommation, régime non précisé : 3,5 CFM."
		],
		"limitations": [
			"La fiche ne documente pas suffisamment le régime de consommation et son appariement à une pression ; le calcul reste indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Disque de coupe",
			"value": "3 pouces",
			"evidenceIds": [
				"tronconneuse-aircat-6515-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "22 000 tr/min",
			"evidenceIds": [
				"tronconneuse-aircat-6515-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,5 HP",
			"evidenceIds": [
				"tronconneuse-aircat-6515-reserved-20261103-1"
			]
		},
		{
			"label": "Entraînement",
			"value": "Direct",
			"evidenceIds": [
				"tronconneuse-aircat-6515-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "7,6 pouces",
			"evidenceIds": [
				"tronconneuse-aircat-6515-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "3,5 CFM",
			"evidenceIds": [
				"tronconneuse-aircat-6515-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-31-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/5-hp-3-cut-off-tool/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6515",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0daebafbf94f9fcffe0534e875461fbe905749eb9b39329a1de1fa59014a0bba. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "tronconneuse-aircat-6515-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/5-hp-3-cut-off-tool/",
			"sourceLabel": "Aircat : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 1fa354e682f33d502706835477e89f34d2041f0bf7e5efca3cebea71a5f8e22b. La 6515 est la tronçonneuse droite à disque 3 pouces et 22 000 tr/min. La 6505 est donnée pour 20 000 tr/min et la 6525-A pour 18 000 tr/min ; la vitesse de l’accessoire doit suivre le modèle exact. La capacité de coupe n’est pas extrapolée du diamètre de disque. Les 3,5 CFM restent de régime et pression de mesure non qualifiés."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-31-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-31-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-31-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-31-p1"
		],
		"editorial": [
			"tronconneuse-aircat-6515-reserved-20261103-1"
		],
		"specifications": [
			"tronconneuse-aircat-6515-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
