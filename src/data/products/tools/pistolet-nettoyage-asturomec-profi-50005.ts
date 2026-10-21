import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-asturomec-profi-50005",
	"slug": "pistolet-nettoyage-asturomec-profi-50005",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Asturomec PROFI (réf. 50005)",
	"brand": "Asturomec",
	"model": "PROFI",
	"mpn": "50005",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1,
		"max": 6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-asturomec-profi-50005.svg",
		"alt": "Repères techniques : Asturomec PROFI (réf. 50005)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-profi",
		"label": "Référence 50005",
		"distinguishingAttributes": {
			"reference": "50005",
			"Fonction publiée": "nébulisation de liquide de lavage",
			"Tube": "3 m"
		}
	},
	"editorial": {
		"overview": "PROFI 50005 : pistolet de nébulisation de liquide de lavage, avec tube de 3 m, corps Hostaform C et valve progressive. Le NE 50085 voisin possède un réservoir intégré en acier peint de 1 L. Le choix porte sur la prise de liquide et le déplacement du poste ; le tube de produit ne décrit pas le flexible d’air. La plage de service de 1 à 6 bar n’établit aucune consommation.",
		"verifiedFacts": [
			"Fonction publiée : nébulisation de liquide de lavage.",
			"Tube : 3 m.",
			"Corps : Hostaform C.",
			"Arrivée d’air : M 1/4 avec raccord tournant."
		],
		"limitations": [
			"Le fabricant cite notamment le lavage et le dégraissage avec des hydrocarbures. Cela ne valide ni tout solvant ni son emploi dans tout environnement ; la compatibilité chimique et les précautions de la notice restent nécessaires.",
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Édition italienne 2024 ; aucune disponibilité commerciale actuelle n’est vérifiée.",
			"La plage de service ne constitue pas une pression de mesure de consommation ; aucun facteur de marche implicite.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Fonction publiée",
			"value": "nébulisation de liquide de lavage",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p43"
			]
		},
		{
			"label": "Tube",
			"value": "3 m",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p43"
			]
		},
		{
			"label": "Corps",
			"value": "Hostaform C",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p43"
			]
		},
		{
			"label": "Arrivée d’air",
			"value": "M 1/4 avec raccord tournant",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p43"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 1 à 6 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p43"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p43",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=43",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		},
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
			"october3d-tools-asturomec2024-p43"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p43"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p43"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
