import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-aeropro-da64r",
	"slug": "agrafeuse-cloueuse-aeropro-da64r",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Aeropro DA64R",
	"brand": "Aeropro",
	"model": "DA64R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-aeropro-da64r.svg",
		"alt": "Repères techniques : Aeropro DA64R",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-da64r",
		"label": "Modèle DA64R, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "DA64R",
			"Load/Nail Capacity": "100Pcs",
			"Weight": "2.09Kg"
		}
	},
	"editorial": {
		"overview": "Aeropro DA64R. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Load/Nail Capacity : 100Pcs.",
			"Weight : 2.09Kg.",
			"Dimension : 320x330x80mm."
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
			"value": "100Pcs",
			"evidenceIds": [
				"october5-tools-aeropro-5-p9"
			]
		},
		{
			"label": "Weight",
			"value": "2.09Kg",
			"evidenceIds": [
				"october5-tools-aeropro-5-p9"
			]
		},
		{
			"label": "Dimension",
			"value": "320x330x80mm",
			"evidenceIds": [
				"october5-tools-aeropro-5-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-5-p9",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf#page=9",
			"sourceLabel": "Aeropro catalogue cloueurs et agrafeuses2025, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d506cecbd44827a3763e5485a0d434a27b407c3d96255137c15fcb1db6a9c9ba. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-5-p9"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-5-p9"
		],
		"demandExplanation": [
			"october5-tools-aeropro-5-p9"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
