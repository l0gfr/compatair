import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-rodac-rc9330",
	"slug": "ponceuse-orbitale-rodac-rc9330",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RODAC RC9330",
	"brand": "RODAC",
	"model": "RC9330",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-rodac-rc9330.svg",
		"alt": "Repères techniques : RODAC RC9330",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc9330",
		"label": "Modèle RC9330, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC9330",
			"Vitesse / RPM": "7.500",
			"Plateau ou bande / MM": "32"
		}
	},
	"editorial": {
		"overview": "RODAC RC9330. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Vitesse / RPM : 7.500.",
			"Plateau ou bande / MM : 32.",
			"Masse / KG : 0,6."
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
			"value": "7.500",
			"evidenceIds": [
				"october5-tools-rodac-2024-p22"
			]
		},
		{
			"label": "Plateau ou bande / MM",
			"value": "32",
			"evidenceIds": [
				"october5-tools-rodac-2024-p22"
			]
		},
		{
			"label": "Masse / KG",
			"value": "0,6",
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
