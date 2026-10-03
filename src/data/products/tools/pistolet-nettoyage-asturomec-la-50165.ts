const product = {
	"id": "pistolet-nettoyage-asturomec-la-50165",
	"slug": "pistolet-nettoyage-asturomec-la-50165",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Asturomec LA (réf. 50165)",
	"brand": "Asturomec",
	"model": "LA",
	"mpn": "50165",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-asturomec-la-50165.svg",
		"alt": "Repères techniques : Asturomec LA (réf. 50165)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-la",
		"label": "Référence 50165",
		"distinguishingAttributes": {
			"reference": "50165",
			"Corps": "laiton nickelé",
			"Raccord eau": "tube de diamètre intérieur 12 mm"
		}
	},
	"editorial": {
		"overview": "Asturomec LA (réf. 50165). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Corps : laiton nickelé.",
			"Raccord eau : tube de diamètre intérieur 12 mm.",
			"Réglage : débit liquide par robinet à bille."
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
			"value": "laiton nickelé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Raccord eau",
			"value": "tube de diamètre intérieur 12 mm",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Réglage",
			"value": "débit liquide par robinet à bille",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 4 à 8 bar ; aucun point de consommation utilisable à une pression unique.",
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
