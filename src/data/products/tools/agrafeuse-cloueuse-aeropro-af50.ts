import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-aeropro-af50",
	"slug": "agrafeuse-cloueuse-aeropro-af50",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Aeropro AF50",
	"brand": "Aeropro",
	"model": "AF50",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-aeropro-af50.svg",
		"alt": "Repères techniques : Aeropro AF50",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-af50",
		"label": "Modèle AF50, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "AF50",
			"Load/Nail Capacity": "100Pcs",
			"Weight": "1.03Kg"
		}
	},
	"editorial": {
		"overview": "Aeropro AF50. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Load/Nail Capacity : 100Pcs.",
			"Weight : 1.03Kg.",
			"Dimension : 264x240x58mm."
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
				"october5-tools-aeropro-5-p11"
			]
		},
		{
			"label": "Weight",
			"value": "1.03Kg",
			"evidenceIds": [
				"october5-tools-aeropro-5-p11"
			]
		},
		{
			"label": "Dimension",
			"value": "264x240x58mm",
			"evidenceIds": [
				"october5-tools-aeropro-5-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-5-p11",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf#page=11",
			"sourceLabel": "Aeropro catalogue cloueurs et agrafeuses2025, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d506cecbd44827a3763e5485a0d434a27b407c3d96255137c15fcb1db6a9c9ba. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-5-p11"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-5-p11"
		],
		"demandExplanation": [
			"october5-tools-aeropro-5-p11"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
