import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-asturomec-ne-50085",
	"slug": "pistolet-nettoyage-asturomec-ne-50085",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Asturomec NE (réf. 50085)",
	"brand": "Asturomec",
	"model": "NE",
	"mpn": "50085",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-asturomec-ne-50085.svg",
		"alt": "Repères techniques : Asturomec NE (réf. 50085)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-ne",
		"label": "Référence 50085",
		"distinguishingAttributes": {
			"reference": "50085",
			"Réservoir": "acier peint 1000 cc",
			"Corps": "aluminium"
		}
	},
	"editorial": {
		"overview": "Asturomec NE (réf. 50085). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Réservoir : acier peint 1000 cc.",
			"Corps : aluminium.",
			"Buse : nébuliseur réglable."
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
			"label": "Réservoir",
			"value": "acier peint 1000 cc",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p94"
			]
		},
		{
			"label": "Corps",
			"value": "aluminium",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p94"
			]
		},
		{
			"label": "Buse",
			"value": "nébuliseur réglable",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p94"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 2 à 8 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p94"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p94",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=94",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 94",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p94"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p94"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p94"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
