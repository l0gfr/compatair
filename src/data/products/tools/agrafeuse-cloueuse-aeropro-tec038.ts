import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-aeropro-tec038",
	"slug": "agrafeuse-cloueuse-aeropro-tec038",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Aeropro TEC038",
	"brand": "Aeropro",
	"model": "TEC038",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-aeropro-tec038.svg",
		"alt": "Repères techniques : Aeropro TEC038",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-tec038",
		"label": "Modèle TEC038, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "TEC038",
			"Load/Nail Capacity": "2x30Pcs",
			"Weight": "3.9Kg"
		}
	},
	"editorial": {
		"overview": "Aeropro TEC038. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Load/Nail Capacity : 2x30Pcs.",
			"Weight : 3.9Kg.",
			"Dimension : 124x400x347mm."
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
			"value": "2x30Pcs",
			"evidenceIds": [
				"october5-tools-aeropro-5-p4"
			]
		},
		{
			"label": "Weight",
			"value": "3.9Kg",
			"evidenceIds": [
				"october5-tools-aeropro-5-p4"
			]
		},
		{
			"label": "Dimension",
			"value": "124x400x347mm",
			"evidenceIds": [
				"october5-tools-aeropro-5-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-5-p4",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf#page=4",
			"sourceLabel": "Aeropro catalogue cloueurs et agrafeuses2025, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d506cecbd44827a3763e5485a0d434a27b407c3d96255137c15fcb1db6a9c9ba. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-5-p4"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-5-p4"
		],
		"demandExplanation": [
			"october5-tools-aeropro-5-p4"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
