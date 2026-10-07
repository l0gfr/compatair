import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-rodac-rc2022a",
	"slug": "perceuse-rodac-rc2022a",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "RODAC RC2022A",
	"brand": "RODAC",
	"model": "RC2022A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-rodac-rc2022a.svg",
		"alt": "Repères techniques : RODAC RC2022A",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc2022a",
		"label": "Modèle RC2022A, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC2022A",
			"Vitesse / RPM": "750",
			"Puissance / KW": "0,4"
		}
	},
	"editorial": {
		"overview": "RODAC RC2022A. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Vitesse / RPM : 750.",
			"Puissance / KW : 0,4.",
			"Masse / KG : 0,9."
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
			"value": "750",
			"evidenceIds": [
				"october5-tools-rodac-2024-p12"
			]
		},
		{
			"label": "Puissance / KW",
			"value": "0,4",
			"evidenceIds": [
				"october5-tools-rodac-2024-p12"
			]
		},
		{
			"label": "Masse / KG",
			"value": "0,9",
			"evidenceIds": [
				"october5-tools-rodac-2024-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p12",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=12",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p12"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p12"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p12"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
