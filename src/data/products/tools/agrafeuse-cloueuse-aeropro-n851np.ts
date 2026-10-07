import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-aeropro-n851np",
	"slug": "agrafeuse-cloueuse-aeropro-n851np",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Aeropro N851NP",
	"brand": "Aeropro",
	"model": "N851NP",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-aeropro-n851np.svg",
		"alt": "Repères techniques : Aeropro N851NP",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-n851np",
		"label": "Modèle N851NP, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "N851NP",
			"Load/Nail Capacity": "150Pcs",
			"Weight": "2.2Kg"
		}
	},
	"editorial": {
		"overview": "Aeropro N851NP. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Load/Nail Capacity : 150Pcs.",
			"Weight : 2.2Kg.",
			"Dimension : 362x340x80mm."
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
			"value": "150Pcs",
			"evidenceIds": [
				"october5-tools-aeropro-5-p11"
			]
		},
		{
			"label": "Weight",
			"value": "2.2Kg",
			"evidenceIds": [
				"october5-tools-aeropro-5-p11"
			]
		},
		{
			"label": "Dimension",
			"value": "362x340x80mm",
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
