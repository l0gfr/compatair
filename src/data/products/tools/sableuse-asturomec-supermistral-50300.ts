import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sableuse-asturomec-supermistral-50300",
	"slug": "sableuse-asturomec-supermistral-50300",
	"categoryId": "sableuse",
	"category": "sableuse",
	"label": "Asturomec SUPERMISTRAL (réf. 50300)",
	"brand": "Asturomec",
	"model": "SUPERMISTRAL",
	"mpn": "50300",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/sableuse-asturomec-supermistral-50300.svg",
		"alt": "Repères techniques : Asturomec SUPERMISTRAL (réf. 50300)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-supermistral",
		"label": "Référence 50300",
		"distinguishingAttributes": {
			"reference": "50300",
			"Fonction": "récupération de sable par aspiration",
			"Réservoir": "aluminium 1000 cc"
		}
	},
	"editorial": {
		"overview": "Asturomec SUPERMISTRAL (réf. 50300). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Fonction : récupération de sable par aspiration.",
			"Réservoir : aluminium 1000 cc.",
			"Corps : métal poli nickelé avec soft-touch.",
			"Kit livré : quatre buses en caoutchouc ; un seul outil compté."
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
			"label": "Fonction",
			"value": "récupération de sable par aspiration",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p57"
			]
		},
		{
			"label": "Réservoir",
			"value": "aluminium 1000 cc",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p57"
			]
		},
		{
			"label": "Corps",
			"value": "métal poli nickelé avec soft-touch",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p57"
			]
		},
		{
			"label": "Kit livré",
			"value": "quatre buses en caoutchouc ; un seul outil compté",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p57"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 5 à 8 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p57"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p57",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=57",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 57",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p57"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p57"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p57"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
