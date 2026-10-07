import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-aircat-6700-6-332",
	"slug": "ponceuse-orbitale-aircat-6700-6-332",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Aircat 6700-6-332",
	"brand": "Aircat",
	"model": "6700-6-332",
	"mpn": "6700-6-332",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-aircat-6700-6-332.webp",
		"alt": "Repères techniques : Aircat 6700-6-332",
		"sourceUrl": "https://continentaltoolgroup.com/product/non-vac-orbital-palm-sander-4/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6700-6-332",
		"label": "Référence 6700-6-332",
		"distinguishingAttributes": {
			"reference": "6700-6-332",
			"Vitesse à vide": "11000 tr/min",
			"Échappement": "Rear"
		}
	},
	"editorial": {
		"overview": "Aircat 6700-6-332. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 11000 tr/min. Échappement : Rear.",
		"verifiedFacts": [
			"Vitesse à vide : 11000 tr/min.",
			"Échappement : Rear."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "11000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-189-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-189-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-189-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-189-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-189-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "1.6 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-189-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-189-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/non-vac-orbital-palm-sander-4/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6700-6-332",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5c6bcccca1127375714e1d2e94cfe0d7e72754ad643cdd66e269722541039117. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-189-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-189-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-189-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-189-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
