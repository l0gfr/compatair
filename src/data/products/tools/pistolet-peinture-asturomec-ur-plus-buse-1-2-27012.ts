import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-asturomec-ur-plus-buse-1-2-27012",
	"slug": "pistolet-peinture-asturomec-ur-plus-buse-1-2-27012",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Asturomec UR PLUS buse 1,2 (configuration 27012)",
	"brand": "Asturomec",
	"model": "UR PLUS buse 1,2",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 3,
		"max": 3.5
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-asturomec-ur-plus-buse-1-2-27012.svg",
		"alt": "Repères techniques : Asturomec UR PLUS buse 1,2 (configuration 27012)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-ur-plus-buse-1-2",
		"label": "Configuration 27012, référence composée",
		"distinguishingAttributes": {
			"sourceDefinedReference": "27012",
			"Buse sélectionnée dans la liste constructeur": "1,2 ; unité non précisée dans cette liste",
			"Godet publié": "alluminio 1000 cc"
		}
	},
	"editorial": {
		"overview": "Asturomec UR PLUS buse 1,2 (configuration 27012). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Buse sélectionnée dans la liste constructeur : 1,2 ; unité non précisée dans cette liste.",
			"Godet publié : alluminio 1000 cc.",
			"Matériau du corps : laiton sablé nickelé.",
			"Consommation publiée, régime et point non établis : 200 - 350 L/min.",
			"Construction de la référence : 270** + suffixe numérique selon buse ; SKU nu non observé.",
			"Exemple de référence avec emballage, hors comptage : 27017/B ; suffixe /B réservé au blister."
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
			"value": "1,2 ; unité non précisée dans cette liste",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p18"
			]
		},
		{
			"label": "Godet publié",
			"value": "alluminio 1000 cc",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p18"
			]
		},
		{
			"label": "Matériau du corps",
			"value": "laiton sablé nickelé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p18"
			]
		},
		{
			"label": "Consommation publiée, régime et point non établis",
			"value": "200 - 350 L/min",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p18"
			]
		},
		{
			"label": "Construction de la référence",
			"value": "270** + suffixe numérique selon buse ; SKU nu non observé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p18"
			]
		},
		{
			"label": "Exemple de référence avec emballage, hors comptage",
			"value": "27017/B ; suffixe /B réservé au blister",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p96"
			]
		},
		{
			"label": "Référence composée selon le catalogue",
			"value": "27012 ; SKU nu non observé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p18",
				"october3d-tools-asturomec2024-p96"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 3 à 3.5 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p18",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=18",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 18",
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
			"october3d-tools-asturomec2024-p18"
		],
		"variant": [
			"october3d-tools-asturomec2024-p18",
			"october3d-tools-asturomec2024-p96"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p18"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p18",
			"october3d-tools-asturomec2024-p96"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
