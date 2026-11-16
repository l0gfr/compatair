import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-cartouche-asturomec-pb-50253",
	"slug": "pistolet-cartouche-asturomec-pb-50253",
	"categoryId": "pistolet-cartouche",
	"category": "pistolet-cartouche",
	"label": "Asturomec PB (réf. 50253)",
	"brand": "Asturomec",
	"model": "PB",
	"mpn": "50253",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"max": 5
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-cartouche-asturomec-pb-50253-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Asturomec PB (réf. 50253)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "asturomec-pb",
		"label": "Référence 50253",
		"distinguishingAttributes": {
			"reference": "50253",
			"Conditionnement compatible": "cartouche",
			"Longueur et diamètre du conditionnement": "22,5 cm ; Ø40 à Ø50, unité non explicitée pour ces diamètres"
		}
	},
	"editorial": {
		"overview": "Le PB 50253 est un pistolet pour cartouches de mastics, avec trois buses en laiton et pression de service 2–5 bar. Le PB/S 50254 reçoit des poches de 34 cm, tandis que le PB reçoit des cartouches de 22,5 cm et diamètre coté 40–50, sans unité explicite dans la table. Le contenant détermine le choix. Le PB pèse 1,02 kg ; la page ne chiffre pas de consommation d’air utilisable.",
		"verifiedFacts": [
			"Conditionnement compatible : cartouche.",
			"Longueur et diamètre du conditionnement : 22,5 cm ; Ø40 à Ø50, unité non explicitée pour ces diamètres.",
			"Corps : polypropylène.",
			"Réservoir : aluminium avec décharge automatique."
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
			"label": "Conditionnement compatible",
			"value": "cartouche",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p59"
			]
		},
		{
			"label": "Longueur et diamètre du conditionnement",
			"value": "22,5 cm ; Ø40 à Ø50, unité non explicitée pour ces diamètres",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p59"
			]
		},
		{
			"label": "Corps",
			"value": "polypropylène",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p59"
			]
		},
		{
			"label": "Réservoir",
			"value": "aluminium avec décharge automatique",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p59"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 2 à 5 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p59"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p59",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=59",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 59",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:pistolet-cartouche-asturomec-pb-50253:0",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
			"sourceLabel": "Asturomec, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le PB 50253 est un pistolet pour cartouches de mastics, avec trois buses en laiton et pression de service 2–5 bar. Le PB/S 50254 reçoit des poches de 34 cm, tandis que le PB reçoit des cartouches de 22,5 cm et diamètre coté 40–50, sans unité explicite dans la table. Le contenant détermine le choix. Le PB pèse 1,02 kg ; la page ne chiffre pas de consommation d’air utilisable. GET complet SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Pages PDF lues : 59."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p59"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p59"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p59"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
