import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-aircat-4337",
	"slug": "perceuse-aircat-4337",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Aircat 4337",
	"brand": "Aircat",
	"model": "4337",
	"mpn": "4337",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-aircat-4337.webp",
		"alt": "Repères techniques : Aircat 4337",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-75-hp-3-8-angle-drill/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-4337",
		"label": "Référence 4337",
		"distinguishingAttributes": {
			"reference": "4337",
			"Masse publiée": "2.4 lb",
			"Puissance publiée": "0.75 HP"
		}
	},
	"editorial": {
		"overview": "Aircat 4337. La fiche 4337 annonce un mandrin de 3/8 pouce et 1 600 tr/min. La valeur 46089 ne constitue pas un diamètre de mandrin. Masse publiée : 2.4 lb. Puissance publiée : 0.75 HP. Capacité du mandrin : 3/8 pouce. Vitesse à vide : 1 600 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 2.4 lb.",
			"Puissance publiée : 0.75 HP.",
			"Capacité du mandrin : 3/8 pouce.",
			"Vitesse à vide : 1 600 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.4 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-128-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.75 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-128-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-128-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-128-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-128-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-128-p1"
			]
		},
		{
			"label": "Capacité du mandrin",
			"value": "3/8 pouce",
			"evidenceIds": [
				"october2-tools-ctg-pdp-128-p1",
				"perceuse-aircat-4337-reserved-20261031-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 600 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-128-p1",
				"perceuse-aircat-4337-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-128-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-75-hp-3-8-angle-drill/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 4337",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ef69e714f80a8d85f603d457a3e6f2d30a2906fa5c353cf4e6779845269f2efa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "perceuse-aircat-4337-reserved-20261031-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-75-hp-3-8-angle-drill/",
			"sourceLabel": "Aircat 4337 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 94d43884a36e93096818ae82c3a1ba71aa2102a2a1cfa3dab1420281989d7fa6. La fiche 4337 annonce un mandrin de 3/8 pouce et 1 600 tr/min. La valeur 46089 ne constitue pas un diamètre de mandrin."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-128-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-128-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-128-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-128-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
