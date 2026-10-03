const product = {
	"id": "soufflette-asturomec-profi-50001",
	"slug": "soufflette-asturomec-profi-50001",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Asturomec PROFI (réf. 50001)",
	"brand": "Asturomec",
	"model": "PROFI",
	"mpn": "50001",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1,
		"max": 6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-asturomec-profi-50001.svg",
		"alt": "Repères techniques : Asturomec PROFI (réf. 50001)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-profi",
		"label": "Référence 50001",
		"distinguishingAttributes": {
			"reference": "50001",
			"Matériau du corps": "Hostaform C",
			"Canon publié": "300 mm extra lunga"
		}
	},
	"editorial": {
		"overview": "Asturomec PROFI (réf. 50001). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Matériau du corps : Hostaform C.",
			"Canon publié : 300 mm extra lunga.",
			"Arrivée d’air : M 1/4 avec raccord tournant.",
			"Commande : valve progressive, ressort inox."
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
			"label": "Matériau du corps",
			"value": "Hostaform C",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p42"
			]
		},
		{
			"label": "Canon publié",
			"value": "300 mm extra lunga",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p42"
			]
		},
		{
			"label": "Arrivée d’air",
			"value": "M 1/4 avec raccord tournant",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p42"
			]
		},
		{
			"label": "Commande",
			"value": "valve progressive, ressort inox",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p42"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 1 à 6 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p42"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p42",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=42",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 42",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p42"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p42"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p42"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
