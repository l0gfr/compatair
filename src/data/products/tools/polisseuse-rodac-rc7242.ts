import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-rodac-rc7242",
	"slug": "polisseuse-rodac-rc7242",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "RODAC RC7242",
	"brand": "RODAC",
	"model": "RC7242",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-rodac-rc7242.svg",
		"alt": "Repères techniques : RODAC RC7242",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc7242",
		"label": "Modèle RC7242, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC7242",
			"Vitesse / RPM": "2.500",
			"Plateau / MM": "150"
		}
	},
	"editorial": {
		"overview": "RODAC RC7242. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Vitesse / RPM : 2.500.",
			"Plateau / MM : 150.",
			"Puissance / KW : 0,55.",
			"Masse / KG : 2."
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
			"value": "2.500",
			"evidenceIds": [
				"october5-tools-rodac-2024-p25"
			]
		},
		{
			"label": "Plateau / MM",
			"value": "150",
			"evidenceIds": [
				"october5-tools-rodac-2024-p25"
			]
		},
		{
			"label": "Puissance / KW",
			"value": "0,55",
			"evidenceIds": [
				"october5-tools-rodac-2024-p25"
			]
		},
		{
			"label": "Masse / KG",
			"value": "2",
			"evidenceIds": [
				"october5-tools-rodac-2024-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p25",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=25",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p25"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p25"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p25"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
