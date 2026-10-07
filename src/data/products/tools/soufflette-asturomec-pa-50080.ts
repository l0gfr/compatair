import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-asturomec-pa-50080",
	"slug": "soufflette-asturomec-pa-50080",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Asturomec PA (réf. 50080)",
	"brand": "Asturomec",
	"model": "PA",
	"mpn": "50080",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1,
		"max": 6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-asturomec-pa-50080.svg",
		"alt": "Repères techniques : Asturomec PA (réf. 50080)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-pa",
		"label": "Référence 50080",
		"distinguishingAttributes": {
			"reference": "50080",
			"Corps": "aluminium",
			"Embout": "court"
		}
	},
	"editorial": {
		"overview": "Asturomec PA (réf. 50080). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Corps : aluminium.",
			"Embout : court."
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
			"label": "Corps",
			"value": "aluminium",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p94"
			]
		},
		{
			"label": "Embout",
			"value": "court",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p94"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 1 à 6 bar ; aucun point de consommation utilisable à une pression unique.",
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
