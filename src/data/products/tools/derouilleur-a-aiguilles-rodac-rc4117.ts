import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-rodac-rc4117",
	"slug": "derouilleur-a-aiguilles-rodac-rc4117",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "RODAC RC4117",
	"brand": "RODAC",
	"model": "RC4117",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-rodac-rc4117.svg",
		"alt": "Repères techniques : RODAC RC4117",
		"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodac-rc4117",
		"label": "Modèle RC4117, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "RC4117",
			"Cadence / BPM": "3.700",
			"Aiguilles": "19 aiguilles de3 mm"
		}
	},
	"editorial": {
		"overview": "RODAC RC4117. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Cadence / BPM : 3.700.",
			"Aiguilles : 19 aiguilles de3 mm.",
			"Masse / KG : 2,7."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le débit publié est conservé dans sa cellule source. Le catalogue ne donne pas de régime de fonctionnement ni de pression d’essai associée ; aucun débit continu n’est déduit.",
			"Les références coffret BC / SET et les consommables ne sont pas comptées comme outils supplémentaires.",
			"La cellule longueur est titrée CM et publie375 /290 ; l’incohérence n’est pas corrigée et la longueur n’est pas normalisée.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Cadence / BPM",
			"value": "3.700",
			"evidenceIds": [
				"october5-tools-rodac-2024-p15"
			]
		},
		{
			"label": "Aiguilles",
			"value": "19 aiguilles de3 mm",
			"evidenceIds": [
				"october5-tools-rodac-2024-p15"
			]
		},
		{
			"label": "Masse / KG",
			"value": "2,7",
			"evidenceIds": [
				"october5-tools-rodac-2024-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-rodac-2024-p15",
			"sourceUrl": "https://www.sam-outillage.fr/data/pages/fr-fr/doc/SAM-OUTILLAGE-CATALOGUE-RODAC-POWERFUL-DEALS-2024-FR.pdf#page=15",
			"sourceLabel": "RODAC par SAM Outillage, catalogue2024 français, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 8a6c7604b757281f5b4455273785b873757c55367046204619308ae9f35da613. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-rodac-2024-p15"
		],
		"workingPressureBar": [
			"october5-tools-rodac-2024-p15"
		],
		"demandExplanation": [
			"october5-tools-rodac-2024-p15"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
