import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-universal-tool-ut8617",
	"slug": "graveur-universal-tool-ut8617",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Universal Tool UT8617",
	"brand": "Universal Tool",
	"model": "UT8617",
	"mpn": "UT8617",
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
		"src": "/images/products/graveur-universal-tool-ut8617.webp",
		"alt": "Repères techniques : Universal Tool UT8617",
		"sourceUrl": "https://continentaltoolgroup.com/product/scribe-engraving-chisel/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8617",
		"label": "Référence UT8617",
		"distinguishingAttributes": {
			"reference": "UT8617",
			"Masse contradictoire publiée": "0.3 lb / 1.6 kg",
			"Longueur publiée": "127 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8617. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse contradictoire publiée : 0.3 lb / 1.6 kg. Longueur publiée : 127 mm.",
		"verifiedFacts": [
			"Masse contradictoire publiée : 0.3 lb / 1.6 kg.",
			"Longueur publiée : 127 mm.",
			"Matériau du corps : Aluminum.",
			"Type de retenue : Screw."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Les masses en livres et en kilogrammes publiées sur cette fiche sont incompatibles. Masse utilisable à confirmer auprès du fabricant ; aucune valeur corrigée supposée.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse contradictoire publiée",
			"value": "0.3 lb / 1.6 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-106-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "127 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-106-p1"
			]
		},
		{
			"label": "Matériau du corps",
			"value": "Aluminum",
			"evidenceIds": [
				"october2-tools-ctg-pdp-106-p1"
			]
		},
		{
			"label": "Type de retenue",
			"value": "Screw",
			"evidenceIds": [
				"october2-tools-ctg-pdp-106-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet  (NPT / BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-106-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/16-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-106-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pessure: 90 psi -6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-106-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "1.1 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-106-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-106-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/scribe-engraving-chisel/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8617",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4af66212dae68ae50eb1c75ebedf8a89d781480238b64127cf068345e03dcdce. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-106-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-106-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-106-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-106-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
