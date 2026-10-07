import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-asturomec-n4-50173",
	"slug": "pistolet-nettoyage-asturomec-n4-50173",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Asturomec N4 (réf. 50173)",
	"brand": "Asturomec",
	"model": "N4",
	"mpn": "50173",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-asturomec-n4-50173.svg",
		"alt": "Repères techniques : Asturomec N4 (réf. 50173)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-n4",
		"label": "Référence 50173",
		"distinguishingAttributes": {
			"reference": "50173",
			"Réservoir": "aluminium 1000 cc ; baïonnette avec fermeture vissée",
			"Canon": "200 mm, laiton nickelé"
		}
	},
	"editorial": {
		"overview": "Asturomec N4 (réf. 50173). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Réservoir : aluminium 1000 cc ; baïonnette avec fermeture vissée.",
			"Canon : 200 mm, laiton nickelé.",
			"Buse : nébuliseur réglable, laiton nickelé.",
			"Ouverture : 8,5 cm."
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
			"value": "aluminium 1000 cc ; baïonnette avec fermeture vissée",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Canon",
			"value": "200 mm, laiton nickelé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Buse",
			"value": "nébuliseur réglable, laiton nickelé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Ouverture",
			"value": "8,5 cm",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 2 à 8 bar ; aucun point de consommation utilisable à une pression unique.",
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
