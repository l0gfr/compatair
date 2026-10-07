import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-rodac-rc2113",
	"slug": "perceuse-rodac-rc2113",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "RODAC RC2113",
	"brand": "RODAC",
	"model": "RC2113",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-rodac-rc2113.svg",
		"alt": "Repères techniques : RODAC RC2113",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc2113",
		"label": "Modèle RC2113, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC2113",
			"Vitesse / RPM": "800",
			"Puissance / KW": "0,37"
		}
	},
	"editorial": {
		"overview": "RODAC RC2113. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Vitesse / RPM : 800.",
			"Puissance / KW : 0,37.",
			"Masse / KG : 1,3."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le débit publié est conservé dans sa cellule source. Le catalogue ne donne pas de régime de fonctionnement ni de pression d’essai associée ; aucun débit continu n’est déduit.",
			"Les références coffret BC / SET et les consommables ne sont pas comptées comme outils supplémentaires.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Vitesse / RPM",
			"value": "800",
			"evidenceIds": [
				"october5-tools-rodac-2024-p13"
			]
		},
		{
			"label": "Puissance / KW",
			"value": "0,37",
			"evidenceIds": [
				"october5-tools-rodac-2024-p13"
			]
		},
		{
			"label": "Masse / KG",
			"value": "1,3",
			"evidenceIds": [
				"october5-tools-rodac-2024-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p13",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=13",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p13"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p13"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p13"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
