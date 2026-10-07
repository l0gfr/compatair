import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-asturomec-prima-buse-1-7-29617",
	"slug": "pistolet-peinture-asturomec-prima-buse-1-7-29617",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Asturomec PRIMA buse 1,7 (configuration 29617)",
	"brand": "Asturomec",
	"model": "PRIMA buse 1,7",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"max": 3.5
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-asturomec-prima-buse-1-7-29617.svg",
		"alt": "Repères techniques : Asturomec PRIMA buse 1,7 (configuration 29617)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-prima-buse-1-7",
		"label": "Configuration 29617, référence composée",
		"distinguishingAttributes": {
			"sourceDefinedReference": "29617",
			"Buse sélectionnée dans la liste constructeur": "1,7 ; unité non précisée dans cette liste",
			"Godet publié": "nylon 680 cc"
		}
	},
	"editorial": {
		"overview": "Asturomec PRIMA buse 1,7 (configuration 29617). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Buse sélectionnée dans la liste constructeur : 1,7 ; unité non précisée dans cette liste.",
			"Godet publié : nylon 680 cc.",
			"Matériau du corps : aluminium poli.",
			"Consommation publiée, régime et point non établis : 180 - 280 L/min.",
			"Construction de la référence : 296** + suffixe numérique selon buse ; SKU nu non observé.",
			"Exemple de référence avec emballage, hors comptage : 29615/B ; suffixe /B réservé au blister."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Référence composée selon la convention constructeur de l’édition 2024 ; SKU nu et disponibilité non observés. Le suffixe /B identifie un blister et ne crée aucune référence supplémentaire.",
			"Les valeurs de diamètre reproduisent la liste constructeur ; son unité n’est pas explicitée dans les pages retenues.",
			"La consommation est une plage sans régime ni point de pression unique ; elle reste hors calcul.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Buse sélectionnée dans la liste constructeur",
			"value": "1,7 ; unité non précisée dans cette liste",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p93"
			]
		},
		{
			"label": "Godet publié",
			"value": "nylon 680 cc",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p93"
			]
		},
		{
			"label": "Matériau du corps",
			"value": "aluminium poli",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p93"
			]
		},
		{
			"label": "Consommation publiée, régime et point non établis",
			"value": "180 - 280 L/min",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p93"
			]
		},
		{
			"label": "Construction de la référence",
			"value": "296** + suffixe numérique selon buse ; SKU nu non observé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p93"
			]
		},
		{
			"label": "Exemple de référence avec emballage, hors comptage",
			"value": "29615/B ; suffixe /B réservé au blister",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p96"
			]
		},
		{
			"label": "Référence composée selon le catalogue",
			"value": "29617 ; SKU nu non observé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p93",
				"october3d-tools-asturomec2024-p96"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 2 à 3.5 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p93"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p93",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=93",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 93",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-asturomec2024-p96",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=96",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 96",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october3d-tools-asturomec2024-p93"
		],
		"variant": [
			"october3d-tools-asturomec2024-p93",
			"october3d-tools-asturomec2024-p96"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p93"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p93",
			"october3d-tools-asturomec2024-p96"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
