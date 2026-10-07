import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-draper-21526",
	"slug": "pistolet-peinture-draper-21526",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Draper 21526",
	"brand": "Draper",
	"model": "21526",
	"mpn": "21526",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-draper-21526.webp",
		"alt": "Repères techniques : Draper 21526",
		"sourceUrl": "https://www.drapertools.com/product/21526/air-spray-gun-1l/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "draper-21526",
		"label": "Référence 21526",
		"distinguishingAttributes": {
			"reference": "21526",
			"Champ fabricant : Weight": "1.0kg",
			"Champ fabricant : Air inlet": "1/4\" BSP"
		}
	},
	"editorial": {
		"overview": "Draper 21526. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Weight : 1.0kg. Champ fabricant : Air inlet : 1/4\" BSP.",
		"verifiedFacts": [
			"Champ fabricant : Weight : 1.0kg.",
			"Champ fabricant : Air inlet : 1/4\" BSP.",
			"Champ fabricant : Average air consumption : 7cfm (200 L/min).",
			"Champ fabricant : Fluid delivery rate : 180-240cc/min.",
			"Champ fabricant : Fluid nozzle size : 1.8mm.",
			"Champ fabricant : Operating air pressure : 50-60psi (3-4 bar)."
		],
		"limitations": [
			"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
			"Fiche produit constructeur, caractéristiques déclaratives ; aucun essai physique CompatAir.",
			"Les pressions recommandées ou limites d’alimentation restent distinctes des points de mesure de consommation.",
			"La pression constructeur en psi et en bar est incohérente après conversion. Aucune unité n’est préférée ni corrigée sans notice propre au modèle.",
			"L’entrée d’air publiée ne fournit pas une dimension de raccordement interprétable sans clarification fabricant. Le libellé original reste visible.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Champ fabricant : Weight",
			"value": "1.0kg",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-21526-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air inlet",
			"value": "1/4\" BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-21526-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Average air consumption",
			"value": "7cfm (200 L/min)",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-21526-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Fluid delivery rate",
			"value": "180-240cc/min",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-21526-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Fluid nozzle size",
			"value": "1.8mm",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-21526-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating air pressure",
			"value": "50-60psi (3-4 bar)",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-21526-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air inlet",
			"value": "1/4\" BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-21526-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating air pressure: 50-60psi (3-4 bar) ; unités constructeur contradictoires, pression de calcul non retenue.",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-21526-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-draper-21526-html-p1",
			"sourceUrl": "https://www.drapertools.com/product/21526/air-spray-gun-1l/",
			"sourceLabel": "Draper, fiche technique constructeur 21526",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 69fd6a2611006ef50fb8c75e67bf4f0e1f4af25253be3119ba9e37db62b3c66e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-draper-21526-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-draper-21526-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-draper-21526-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
