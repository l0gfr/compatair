import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-asturomec-ne-s-50086",
	"slug": "pistolet-nettoyage-asturomec-ne-s-50086",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Asturomec NE/S (réf. 50086)",
	"brand": "Asturomec",
	"model": "NE/S",
	"mpn": "50086",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-asturomec-ne-s-50086.svg",
		"alt": "Repères techniques : Asturomec NE/S (réf. 50086)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-ne-s",
		"label": "Référence 50086",
		"distinguishingAttributes": {
			"reference": "50086",
			"Réservoir": "aluminium 1000 cc",
			"Corps": "aluminium"
		}
	},
	"editorial": {
		"overview": "NE/S 50086 : pistolet de lavage avec réservoir aluminium de 1 000 cm³ et nébuliseur en laiton nickelé. Le NE 50085 emploie un réservoir en acier peint et un nébuliseur en laiton. La masse publiée passe de 1,1 kg pour le NE à 920 g pour le NE/S. Cette différence de construction ne démontre aucune économie d’air ; la plage de service reste de 2 à 8 bar.",
		"verifiedFacts": [
			"Réservoir : aluminium 1000 cc.",
			"Corps : aluminium.",
			"Buse : nébuliseur réglable."
		],
		"limitations": [
			"Le catalogue ne chiffre pas la consommation de ces pistolets. La compatibilité chimique du liquide et du réservoir doit être confirmée pour la référence utilisée.",
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Édition italienne 2024 ; aucune disponibilité commerciale actuelle n’est vérifiée.",
			"La plage de service ne constitue pas une pression de mesure de consommation ; aucun facteur de marche implicite.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Réservoir",
			"value": "aluminium 1000 cc",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p94"
			]
		},
		{
			"label": "Corps",
			"value": "aluminium",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p94"
			]
		},
		{
			"label": "Buse",
			"value": "nébuliseur réglable",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p94"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 2 à 8 bar ; aucun point de consommation utilisable à une pression unique.",
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
