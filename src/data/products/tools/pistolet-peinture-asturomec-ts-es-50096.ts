import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-asturomec-ts-es-50096",
	"slug": "pistolet-peinture-asturomec-ts-es-50096",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Asturomec TS/ES (réf. 50096)",
	"brand": "Asturomec",
	"model": "TS/ES",
	"mpn": "50096",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"max": 5
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-asturomec-ts-es-50096.svg",
		"alt": "Repères techniques : Asturomec TS/ES (réf. 50096)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-ts-es",
		"label": "Référence 50096",
		"distinguishingAttributes": {
			"reference": "50096",
			"Réservoir": "aluminium 1000 cc",
			"Corps": "aluminium"
		}
	},
	"editorial": {
		"overview": "Asturomec TS/ES (réf. 50096). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Réservoir : aluminium 1000 cc.",
			"Corps : aluminium.",
			"Produit publié : protectifs mono ou bicomposants prémélangés."
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
			"value": "aluminium 1000 cc",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p95"
			]
		},
		{
			"label": "Corps",
			"value": "aluminium",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p95"
			]
		},
		{
			"label": "Produit publié",
			"value": "protectifs mono ou bicomposants prémélangés",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p95"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 2 à 5 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p95"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p95",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=95",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 95",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p95"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p95"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p95"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
