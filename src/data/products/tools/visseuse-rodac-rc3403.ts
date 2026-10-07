import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-rodac-rc3403",
	"slug": "visseuse-rodac-rc3403",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "RODAC RC3403",
	"brand": "RODAC",
	"model": "RC3403",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-rodac-rc3403.svg",
		"alt": "Repères techniques : RODAC RC3403",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc3403",
		"label": "Modèle RC3403, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC3403",
			"Vitesse / RPM": "1.700",
			"Couple / NM": "1 - 6"
		}
	},
	"editorial": {
		"overview": "RODAC RC3403. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Vitesse / RPM : 1.700.",
			"Couple / NM : 1 - 6.",
			"Masse / KG : 0,85."
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
			"value": "1.700",
			"evidenceIds": [
				"october5-tools-rodac-2024-p13"
			]
		},
		{
			"label": "Couple / NM",
			"value": "1 - 6",
			"evidenceIds": [
				"october5-tools-rodac-2024-p13"
			]
		},
		{
			"label": "Masse / KG",
			"value": "0,85",
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
