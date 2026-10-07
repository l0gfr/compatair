import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-rodac-rc272",
	"slug": "tronconneuse-rodac-rc272",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "RODAC RC272",
	"brand": "RODAC",
	"model": "RC272",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-rodac-rc272.svg",
		"alt": "Repères techniques : RODAC RC272",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc272",
		"label": "Modèle RC272, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC272",
			"Vitesse / RPM": "20.000",
			"Puissance / KW": "0,25"
		}
	},
	"editorial": {
		"overview": "RODAC RC272. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Vitesse / RPM : 20.000.",
			"Puissance / KW : 0,25.",
			"Masse / KG : 0,5."
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
			"value": "20.000",
			"evidenceIds": [
				"october5-tools-rodac-2024-p19"
			]
		},
		{
			"label": "Puissance / KW",
			"value": "0,25",
			"evidenceIds": [
				"october5-tools-rodac-2024-p19"
			]
		},
		{
			"label": "Masse / KG",
			"value": "0,5",
			"evidenceIds": [
				"october5-tools-rodac-2024-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p19",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=19",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p19"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p19"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p19"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
