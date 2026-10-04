const product = {
	"id": "soufflette-asturomec-pa-4nl-50048",
	"slug": "soufflette-asturomec-pa-4nl-50048",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Asturomec PA/4NL (réf. 50048)",
	"brand": "Asturomec",
	"model": "PA/4NL",
	"mpn": "50048",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1,
		"max": 6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-asturomec-pa-4nl-50048.svg",
		"alt": "Repères techniques : Asturomec PA/4NL (réf. 50048)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-pa-4nl",
		"label": "Référence 50048",
		"distinguishingAttributes": {
			"reference": "50048",
			"Matériau du corps": "nylon",
			"Embout ou canon": "150 mm, droit"
		}
	},
	"editorial": {
		"overview": "Asturomec PA/4NL (réf. 50048). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Matériau du corps : nylon.",
			"Embout ou canon : 150 mm, droit.",
			"Commande : valve à débit progressif."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Le titre indique PA/4NL tandis que la ligne du canon dit PA/4L ; le numéro 50048 est explicite et la discordance de désignation reste signalée.",
			"Débit consommé à pression et régime connus non publié.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Matériau du corps",
			"value": "nylon",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p45"
			]
		},
		{
			"label": "Embout ou canon",
			"value": "150 mm, droit",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p45"
			]
		},
		{
			"label": "Commande",
			"value": "valve à débit progressif",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p45"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 1 à 6 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p45"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p45",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=45",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 45",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p45"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p45"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p45"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
