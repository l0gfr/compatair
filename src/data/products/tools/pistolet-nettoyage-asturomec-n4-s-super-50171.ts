import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-asturomec-n4-s-super-50171",
	"slug": "pistolet-nettoyage-asturomec-n4-s-super-50171",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Asturomec N4/S SUPER (réf. 50171)",
	"brand": "Asturomec",
	"model": "N4/S SUPER",
	"mpn": "50171",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-asturomec-n4-s-super-50171.svg",
		"alt": "Repères techniques : Asturomec N4/S SUPER (réf. 50171)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-n4-s-super",
		"label": "Référence 50171",
		"distinguishingAttributes": {
			"reference": "50171",
			"Réservoir": "aluminium 1000 cc ; baïonnette",
			"Canon": "300 mm, laiton nickelé"
		}
	},
	"editorial": {
		"overview": "N4/S SUPER 50171 : pistolet de lavage à canon de 300 mm, réservoir aluminium de 1 000 cm³ et réglage permettant de fixer le flux souhaité. Le N4/S 50172 voisin possède un canon de 200 mm. Cette différence d’accès ne change pas la plage de service publiée de 2 à 8 bar.",
		"verifiedFacts": [
			"Réservoir : aluminium 1000 cc ; baïonnette.",
			"Canon : 300 mm, laiton nickelé.",
			"Buse : nébuliseur réglable, laiton nickelé.",
			"Ouverture : 8,5 cm."
		],
		"limitations": [
			"La page ne publie pas de consommation d’air ; le besoin de compresseur reste à documenter.",
			"La compatibilité du liquide avec le pistolet doit être vérifiée dans la notice ; le nom lavage ne garantit pas l’emploi de tout solvant."
		]
	},
	"specifications": [
		{
			"label": "Réservoir",
			"value": "aluminium 1000 cc ; baïonnette",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Canon",
			"value": "300 mm, laiton nickelé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Buse",
			"value": "nébuliseur réglable, laiton nickelé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Ouverture",
			"value": "8,5 cm",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p54"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 2 à 8 bar ; aucun point de consommation utilisable à une pression unique.",
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
