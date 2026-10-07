import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-rodac-rc166",
	"slug": "polisseuse-rodac-rc166",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "RODAC RC166",
	"brand": "RODAC",
	"model": "RC166",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-rodac-rc166.svg",
		"alt": "Repères techniques : RODAC RC166",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc166",
		"label": "Modèle RC166, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC166",
			"Vitesse / RPM": "2.500",
			"Plateau ou bande / MM": "75"
		}
	},
	"editorial": {
		"overview": "RODAC RC166. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Vitesse / RPM : 2.500.",
			"Plateau ou bande / MM : 75.",
			"Masse / KG : 0,8."
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
				"october5-tools-rodac-2024-p22"
			]
		},
		{
			"label": "Plateau ou bande / MM",
			"value": "75",
			"evidenceIds": [
				"october5-tools-rodac-2024-p22"
			]
		},
		{
			"label": "Masse / KG",
			"value": "0,8",
			"evidenceIds": [
				"october5-tools-rodac-2024-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p22",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=22",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p22"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p22"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p22"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
