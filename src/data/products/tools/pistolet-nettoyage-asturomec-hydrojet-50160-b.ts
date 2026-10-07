import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-asturomec-hydrojet-50160-b",
	"slug": "pistolet-nettoyage-asturomec-hydrojet-50160-b",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Asturomec HYDROJET (réf. 50160/B)",
	"brand": "Asturomec",
	"model": "HYDROJET",
	"mpn": "50160/B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1,
		"max": 6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-asturomec-hydrojet-50160-b.svg",
		"alt": "Repères techniques : Asturomec HYDROJET (réf. 50160/B)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-hydrojet",
		"label": "Référence 50160/B",
		"distinguishingAttributes": {
			"reference": "50160/B",
			"Commande": "deux valves indépendantes air et liquide",
			"Corps": "Hostaform C"
		}
	},
	"editorial": {
		"overview": "Asturomec HYDROJET (réf. 50160/B). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Commande : deux valves indépendantes air et liquide.",
			"Corps : Hostaform C.",
			"Arrivée d’air : embout cannelé pour tube Ø intérieur 12 mm, serrage par collier ; M 1/4 mentionné."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Édition italienne 2024 ; aucune disponibilité commerciale actuelle n’est vérifiée.",
			"La plage de service ne constitue pas une pression de mesure de consommation ; aucun facteur de marche implicite.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Commande",
			"value": "deux valves indépendantes air et liquide",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Corps",
			"value": "Hostaform C",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Arrivée d’air",
			"value": "embout cannelé pour tube Ø intérieur 12 mm, serrage par collier ; M 1/4 mentionné",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 1 à 6 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p54",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=54",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 54",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p54"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p54"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p54"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
