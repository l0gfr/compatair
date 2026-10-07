import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-aeropro-cn65zra",
	"slug": "agrafeuse-cloueuse-aeropro-cn65zra",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Aeropro CN65ZRA",
	"brand": "Aeropro",
	"model": "CN65ZRA",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-aeropro-cn65zra.svg",
		"alt": "Repères techniques : Aeropro CN65ZRA",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-cn65zra",
		"label": "Modèle CN65ZRA, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "CN65ZRA",
			"Load/Nail Capacity": "300Pcs",
			"Weight": "2.3Kg"
		}
	},
	"editorial": {
		"overview": "Aeropro CN65ZRA. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Load/Nail Capacity : 300Pcs.",
			"Weight : 2.3Kg.",
			"Dimension : 282x316x132mm."
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
			"value": "300Pcs",
			"evidenceIds": [
				"october5-tools-aeropro-5-p6"
			]
		},
		{
			"label": "Weight",
			"value": "2.3Kg",
			"evidenceIds": [
				"october5-tools-aeropro-5-p6"
			]
		},
		{
			"label": "Dimension",
			"value": "282x316x132mm",
			"evidenceIds": [
				"october5-tools-aeropro-5-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-5-p6",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027536889839.pdf#page=6",
			"sourceLabel": "Aeropro catalogue cloueurs et agrafeuses2025, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 d506cecbd44827a3763e5485a0d434a27b407c3d96255137c15fcb1db6a9c9ba. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-5-p6"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-5-p6"
		],
		"demandExplanation": [
			"october5-tools-aeropro-5-p6"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
