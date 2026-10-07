import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-rodac-1015100a",
	"slug": "cle-a-cliquet-rodac-1015100a",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "RODAC 1015100A",
	"brand": "RODAC",
	"model": "1015100A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-rodac-1015100a.svg",
		"alt": "Repères techniques : RODAC 1015100A",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-1015100a",
		"label": "Modèle 1015100A, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "1015100A",
			"Carré": "1/2’’",
			"Couple / NM": "122"
		}
	},
	"editorial": {
		"overview": "RODAC 1015100A. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Carré : 1/2’’.",
			"Couple / NM : 122.",
			"Vitesse / RPM : 160.",
			"Longueur / CM : 25.",
			"Masse / KG : 1,25."
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
			"label": "Carré",
			"value": "1/2’’",
			"evidenceIds": [
				"october5-tools-rodac-2024-p11"
			]
		},
		{
			"label": "Couple / NM",
			"value": "122",
			"evidenceIds": [
				"october5-tools-rodac-2024-p11"
			]
		},
		{
			"label": "Vitesse / RPM",
			"value": "160",
			"evidenceIds": [
				"october5-tools-rodac-2024-p11"
			]
		},
		{
			"label": "Longueur / CM",
			"value": "25",
			"evidenceIds": [
				"october5-tools-rodac-2024-p11"
			]
		},
		{
			"label": "Masse / KG",
			"value": "1,25",
			"evidenceIds": [
				"october5-tools-rodac-2024-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p11",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=11",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p11"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p11"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p11"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
