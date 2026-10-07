import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-mirka-pros-680cv-mrp-680cv",
	"slug": "ponceuse-orbitale-mirka-pros-680cv-mrp-680cv",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Mirka PROS 680CV (réf. MRP-680CV)",
	"brand": "Mirka",
	"model": "PROS 680CV",
	"mpn": "MRP-680CV",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.2
	},
	"demandExplanation": "Les 485 L/min sont publiés sans régime de consommation et sans point de mesure explicite. Le plafond d’alimentation de 6,2 bar reste une limite de service ; le débit en charge n’est pas confirmé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-mirka-pros-680cv-mrp-680cv.webp",
		"alt": "Repères techniques : Mirka PROS 680CV (réf. MRP-680CV)",
		"sourceUrl": "https://www.mirka.com/en-ca/p/Mirka-PROS-680CV-150---8/?ls=true&variant=91209",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mirka-pros-680cv",
		"label": "Référence MRP-680CV",
		"distinguishingAttributes": {
			"reference": "MRP-680CV",
			"Fonction déclarée": "Ponceuse orbitale pneumatique à aspiration centrale",
			"Diamètre du plateau": "6 pouces"
		}
	},
	"editorial": {
		"overview": "Mirka PROS 680CV (réf. MRP-680CV). Les 485 L/min sont publiés sans régime de consommation et sans point de mesure explicite. Le plafond d’alimentation de 6,2 bar reste une limite de service ; le débit en charge n’est pas confirmé. Fonction déclarée : Ponceuse orbitale pneumatique à aspiration centrale. Diamètre du plateau : 6 pouces.",
		"verifiedFacts": [
			"Fonction déclarée : Ponceuse orbitale pneumatique à aspiration centrale.",
			"Diamètre du plateau : 6 pouces.",
			"Amplitude orbitale : 8,0 mm.",
			"Masse nette, hors sac et tuyau d’aspiration : 0,95 kg.",
			"Hauteur : 102 mm.",
			"Longueur : 229 mm.",
			"Vitesse déclarée : 12 000 tr/min.",
			"Puissance déclarée, version CV : 270 W.",
			"Consommation déclarée, régime non précisé : 485 L/min."
		],
		"limitations": [
			"Les 485 L/min sont publiés sans régime de consommation et sans point de mesure explicite. Le plafond d’alimentation de 6,2 bar reste une limite de service ; le débit en charge n’est pas confirmé.",
			"La notice donne un plafond d’alimentation de 6,2 bar ; elle ne localise pas explicitement les 485 L/min à ce point ni leur régime en charge.",
			"La colonne 680CV/NV est utilisée pour les dimensions communes ; la puissance de 270 W correspond à la version à aspiration centrale, distincte des 200 W de la version DB.",
			"La référence régionale MRP-680CV est confirmée par la fiche canadienne, sans créer une seconde variante à partir d’un alias international.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Ponceuse orbitale pneumatique à aspiration centrale",
			"evidenceIds": [
				"october3c-tools-mirka-pros680cv-page-p1"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "6 pouces",
			"evidenceIds": [
				"october3c-tools-mirka-pros680cv-page-p1"
			]
		},
		{
			"label": "Amplitude orbitale",
			"value": "8,0 mm",
			"evidenceIds": [
				"october3c-tools-mirka-pros680cv-page-p1"
			]
		},
		{
			"label": "Masse nette, hors sac et tuyau d’aspiration",
			"value": "0,95 kg",
			"evidenceIds": [
				"october3c-tools-mirka-pros-manual-p57"
			]
		},
		{
			"label": "Hauteur",
			"value": "102 mm",
			"evidenceIds": [
				"october3c-tools-mirka-pros-manual-p57"
			]
		},
		{
			"label": "Longueur",
			"value": "229 mm",
			"evidenceIds": [
				"october3c-tools-mirka-pros-manual-p58"
			]
		},
		{
			"label": "Vitesse déclarée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"october3c-tools-mirka-pros-manual-p58"
			]
		},
		{
			"label": "Puissance déclarée, version CV",
			"value": "270 W",
			"evidenceIds": [
				"october3c-tools-mirka-pros-manual-p58"
			]
		},
		{
			"label": "Consommation déclarée, régime non précisé",
			"value": "485 L/min",
			"evidenceIds": [
				"october3c-tools-mirka-pros-manual-p58"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Do not exceed maximum recommended air pressure of 6.2 bar (90 psig).",
			"evidenceIds": [
				"october3c-tools-mirka-pros680cv-page-p1",
				"october3c-tools-mirka-pros-manual-p57",
				"october3c-tools-mirka-pros-manual-p58"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "485 L/min",
			"evidenceIds": [
				"october3c-tools-mirka-pros680cv-page-p1",
				"october3c-tools-mirka-pros-manual-p57",
				"october3c-tools-mirka-pros-manual-p58"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-mirka-pros680cv-page-p1",
			"sourceUrl": "https://www.mirka.com/en-ca/p/Mirka-PROS-680CV-150---8/?ls=true&variant=91209",
			"sourceLabel": "Fiche fabricant Mirka, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c9c1308e095f80ce56270f302310e69d7e7d785e7394791da1896d4e67c5273d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october3c-tools-mirka-pros-manual-p57",
			"sourceUrl": "https://cdn.brandfolder.io/FSMPOV8D/at/kjgv7qphx8k7nvmp65vn6mf4/Mirka_PROS_150_125mm.pdf#page=57",
			"sourceLabel": "Fiche fabricant Mirka, référence exacte, page PDF 57",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 88dbef4424cb78d50287f55502eecb98488b64627683c1ac824dff7bbd2875bd. Document complémentaire de la référence exacte, sans essai CompatAir."
		},
		{
			"id": "october3c-tools-mirka-pros-manual-p58",
			"sourceUrl": "https://cdn.brandfolder.io/FSMPOV8D/at/kjgv7qphx8k7nvmp65vn6mf4/Mirka_PROS_150_125mm.pdf#page=58",
			"sourceLabel": "Fiche fabricant Mirka, référence exacte, page PDF 58",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 88dbef4424cb78d50287f55502eecb98488b64627683c1ac824dff7bbd2875bd. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-mirka-pros680cv-page-p1"
		],
		"workingPressureBar": [
			"october3c-tools-mirka-pros680cv-page-p1",
			"october3c-tools-mirka-pros-manual-p57",
			"october3c-tools-mirka-pros-manual-p58"
		],
		"demandExplanation": [
			"october3c-tools-mirka-pros680cv-page-p1"
		]
	},
	"notes": [
		"Les 485 L/min sont publiés sans régime de consommation et sans point de mesure explicite. Le plafond d’alimentation de 6,2 bar reste une limite de service ; le débit en charge n’est pas confirmé."
	]
};

export default product;
