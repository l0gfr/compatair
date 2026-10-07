import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-aeropro-8016",
	"slug": "agrafeuse-cloueuse-aeropro-8016",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Aeropro 8016",
	"brand": "Aeropro",
	"model": "8016",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-aeropro-8016.svg",
		"alt": "Repères techniques : Aeropro 8016",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-8016",
		"label": "Modèle 8016, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "8016",
			"Load/Nail Capacity": "300-350Pcs",
			"Weight": "0.85kg"
		}
	},
	"editorial": {
		"overview": "Aeropro 8016. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Load/Nail Capacity : 300-350Pcs.",
			"Weight : 0.85kg.",
			"Dimension : 362x132x307mm."
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
			"value": "300-350Pcs",
			"evidenceIds": [
				"october5-tools-aeropro-5-p13"
			]
		},
		{
			"label": "Weight",
			"value": "0.85kg",
			"evidenceIds": [
				"october5-tools-aeropro-5-p13"
			]
		},
		{
			"label": "Dimension",
			"value": "362x132x307mm",
			"evidenceIds": [
				"october5-tools-aeropro-5-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-5-p13",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf#page=13",
			"sourceLabel": "Aeropro catalogue cloueurs et agrafeuses2025, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d506cecbd44827a3763e5485a0d434a27b407c3d96255137c15fcb1db6a9c9ba. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-5-p13"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-5-p13"
		],
		"demandExplanation": [
			"october5-tools-aeropro-5-p13"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
