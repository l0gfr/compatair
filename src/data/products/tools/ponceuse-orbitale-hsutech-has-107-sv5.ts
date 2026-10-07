import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-hsutech-has-107-sv5",
	"slug": "ponceuse-orbitale-hsutech-has-107-sv5",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "HsuTech HAS-107-SV5",
	"brand": "HsuTech",
	"model": "HAS-107-SV5",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-hsutech-has-107-sv5.svg",
		"alt": "Repères techniques : HsuTech HAS-107-SV5",
		"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hsutech-has-107-sv5",
		"label": "Modèle HAS-107-SV5, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "HAS-107-SV5",
			"Pad Size inch(mm)": "5”(125)",
			"Spindle Thread inch(mm)": "5/16”-24UNF"
		}
	},
	"editorial": {
		"overview": "HsuTech HAS-107-SV5. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Pad Size inch(mm) : 5”(125).",
			"Spindle Thread inch(mm) : 5/16”-24UNF.",
			"Free Speed : Max. 12000.",
			"Orbital Diameter inch(mm) : 3/16”(5).",
			"Air Hose I.D inch(mm) : 3/8”(10)."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La valeur Avg. Air Consumption est une consommation moyenne ; le catalogue ne fournit pas de cycle permettant de la convertir en débit continu en charge.",
			"La pression Recommended Air Pressure est une prescription de fonctionnement et n’est pas présentée comme une pression d’essai de consommation.",
			"Les cellules et unités sont conservées telles qu’imprimées. Des intitulés mixtes ou valeurs incompatibles restent inconnus pour le moteur.",
			"La ligne partagée est conservée. Chaque référence retenue est aussi imprimée en entier dans les titres de ce même feuillet ; aucune référence composée uniquement par expansion de suffixe n’est comptée. Les valeurs différenciées par slash restent dans leur cellule source.",
			"La famille publie également 6.2 CFM continuous running under load, mais ne relie pas explicitement cette mesure à une pression d’essai. Cette valeur est conservée en note, sans point de calcul qualifié.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Pad Size inch(mm)",
			"value": "5”(125)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p26"
			]
		},
		{
			"label": "Spindle Thread inch(mm)",
			"value": "5/16”-24UNF",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p26"
			]
		},
		{
			"label": "Free Speed",
			"value": "Max. 12000",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p26"
			]
		},
		{
			"label": "Orbital Diameter inch(mm)",
			"value": "3/16”(5)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p26"
			]
		},
		{
			"label": "Air Hose I.D inch(mm)",
			"value": "3/8”(10)",
			"evidenceIds": [
				"october5-tools-hsutech-catalog-2024-p26"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hsutech-catalog-2024-p26",
			"sourceUrl": "https://www.hsutech.com/archive/download/KFJlYWwgRmluYWwgVmVyc2lvbikgSFNVVEVDSCBDQVRBTE9HVUUgMjAyNC3lt7Llo5PnuK4uNzQ4MjM4MzQ5MjA1.pdf#page=26",
			"sourceLabel": "HsuTech, catalogue officiel2024, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 13caec587725c0a38a9e9f3bb7dd49d62d1a6b80cc1c0b1144f143875df2827f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-hsutech-catalog-2024-p26"
		],
		"workingPressureBar": [
			"october5-tools-hsutech-catalog-2024-p26"
		],
		"demandExplanation": [
			"october5-tools-hsutech-catalog-2024-p26"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
