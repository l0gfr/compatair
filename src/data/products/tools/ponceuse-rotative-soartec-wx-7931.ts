import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-soartec-wx-7931",
	"slug": "ponceuse-rotative-soartec-wx-7931",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Soartec WX-7931",
	"brand": "Soartec",
	"model": "WX-7931",
	"mpn": "WX-7931",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche fournit les caractéristiques propres de cette référence, mais ne documente pas ensemble une consommation en charge, sa pression de mesure et sa convention volumique. Aucun besoin d’air n’est déduit de la masse, de la vitesse ou de la capacité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-soartec-wx-7931-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Soartec WX-7931",
		"sourceUrl": "https://www.soartectools.com/products/air-tire-buffer-3-5-88mm-wx-7931",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "soartec-wx-7931",
		"label": "Référence WX-7931",
		"distinguishingAttributes": {
			"reference": "WX-7931",
			"Fonction déclarée": "Air Tire Buffer 3.5\" (88mm)",
			"Champ fabricant : Free Speed": "2500"
		}
	},
	"editorial": {
		"overview": "La WX-7931 est une râpe pneumatique pour pneus, format 3,5 pouces, à 2 500 tr/min, 172 mm et 1,2 kg. La WX-7921 est un outil de retrait d’adhésif à 3 600 tr/min : l’usage et l’accessoire diffèrent. La seule consigne 90 psi ne donne aucune consommation exploitable. Le calcul reste non conclusif sans ajouter le débit d’un autre modèle.",
		"verifiedFacts": [
			"Fonction déclarée : Air Tire Buffer 3.5\" (88mm).",
			"Champ fabricant : Free Speed : 2500.",
			"Pression d’alimentation publiée : 90 psi.",
			"Masse : 1.2 kg.",
			"Longueur (mm) : 172."
		],
		"limitations": [
			"La fiche fournit les caractéristiques propres de cette référence, mais ne documente pas ensemble une consommation en charge, sa pression de mesure et sa convention volumique. Aucun besoin d’air n’est déduit de la masse, de la vitesse ou de la capacité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Air Tire Buffer 3.5\" (88mm)",
			"evidenceIds": [
				"october3c-tools-soartec-product-115-p1"
			]
		},
		{
			"label": "Champ fabricant : Free Speed",
			"value": "2500",
			"evidenceIds": [
				"october3c-tools-soartec-product-115-p1"
			]
		},
		{
			"label": "Pression d’alimentation publiée",
			"value": "90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-115-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"october3c-tools-soartec-product-115-p1"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "172",
			"evidenceIds": [
				"october3c-tools-soartec-product-115-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-115-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-soartec-product-115-p1",
			"sourceUrl": "https://www.soartectools.com/products/air-tire-buffer-3-5-88mm-wx-7931",
			"sourceLabel": "Fiche fabricant Soartec, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4bb74ef65d1d2996641369e84ff5d4ce3cdd07477b6a0fcca3ab0f2066d368f3. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-rotative-soartec-wx-7931:0",
			"sourceUrl": "https://www.soartectools.com/products/air-tire-buffer-3-5-88mm-wx-7931",
			"sourceLabel": "Soartec, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La WX-7931 est une râpe pneumatique pour pneus, format 3,5 pouces, à 2 500 tr/min, 172 mm et 1,2 kg. La WX-7921 est un outil de retrait d’adhésif à 3 600 tr/min : l’usage et l’accessoire diffèrent. La seule consigne 90 psi ne donne aucune consommation exploitable. Le calcul reste non conclusif sans ajouter le débit d’un autre modèle. GET complet SHA-256 c8bd189b305fe0292472274485b156b749480cee46868e1482e05102305e1539. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-soartec-product-115-p1"
		],
		"workingPressureBar": [
			"october3c-tools-soartec-product-115-p1"
		],
		"demandExplanation": [
			"october3c-tools-soartec-product-115-p1"
		]
	},
	"notes": [
		"La fiche fournit les caractéristiques propres de cette référence, mais ne documente pas ensemble une consommation en charge, sa pression de mesure et sa convention volumique. Aucun besoin d’air n’est déduit de la masse, de la vitesse ou de la capacité."
	]
};

export default product;
