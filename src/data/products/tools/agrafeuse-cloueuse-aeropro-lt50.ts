import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-aeropro-lt50",
	"slug": "agrafeuse-cloueuse-aeropro-lt50",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Aeropro LT50",
	"brand": "Aeropro",
	"model": "LT50",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-aeropro-lt50.svg",
		"alt": "Repères techniques : Aeropro LT50",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-lt50",
		"label": "Modèle LT50, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "LT50",
			"Load/Nail Capacity": "90Pcs",
			"Weight": "3.3Kg"
		}
	},
	"editorial": {
		"overview": "Aeropro LT50. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Load/Nail Capacity : 90Pcs.",
			"Weight : 3.3Kg.",
			"Dimension : 330x275x90mm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les pressions de service et maximum ne sont pas des pressions d’essai de consommation. Aucun profil en charge n’est inventé.",
			"Aeropro et Rongpeng sont des marques du même constructeur. Des racines AP/RP déjà présentes sont exclues par prudence faute d’indépendance physique établie ; aucune alias officielle générale n’est affirmée.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Load/Nail Capacity",
			"value": "90Pcs",
			"evidenceIds": [
				"october5-tools-aeropro-5-p10"
			]
		},
		{
			"label": "Weight",
			"value": "3.3Kg",
			"evidenceIds": [
				"october5-tools-aeropro-5-p10"
			]
		},
		{
			"label": "Dimension",
			"value": "330x275x90mm",
			"evidenceIds": [
				"october5-tools-aeropro-5-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-5-p10",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf#page=10",
			"sourceLabel": "Aeropro catalogue cloueurs et agrafeuses2025, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d506cecbd44827a3763e5485a0d434a27b407c3d96255137c15fcb1db6a9c9ba. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-5-p10"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-5-p10"
		],
		"demandExplanation": [
			"october5-tools-aeropro-5-p10"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
