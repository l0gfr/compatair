import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-aeropro-ap7318",
	"slug": "meuleuse-aeropro-ap7318",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Aeropro AP7318",
	"brand": "Aeropro",
	"model": "AP7318",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-aeropro-ap7318.svg",
		"alt": "Repères techniques : Aeropro AP7318",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-ap7318",
		"label": "Modèle AP7318, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "AP7318",
			"Grinder Cap": "1/8\"",
			"Rpm": "54000"
		}
	},
	"editorial": {
		"overview": "Aeropro AP7318. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Grinder Cap : 1/8\".",
			"Rpm : 54000.",
			"KG Kg（Lbs） : 0.32 (0.7)."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les pressions de service et maximum ne sont pas des pressions d’essai de consommation. Aucun profil en charge n’est inventé.",
			"Les dimensions de la dernière colonne mm et le nombre pcs désignent le conditionnement ; ils ne deviennent pas des dimensions de l’outil.",
			"Les consommations I/min(cfm) n’ont ni régime ni pression de mesure explicités. Les valeurs différenciées par slash restent dans leur cellule, sans création de variantes supplémentaires.",
			"Aeropro et Rongpeng sont des marques du même constructeur. Des racines AP/RP déjà présentes sont exclues par prudence faute d’indépendance physique établie ; aucune alias officielle générale n’est affirmée.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Grinder Cap",
			"value": "1/8\"",
			"evidenceIds": [
				"october5-tools-aeropro-7-p8"
			]
		},
		{
			"label": "Rpm",
			"value": "54000",
			"evidenceIds": [
				"october5-tools-aeropro-7-p8"
			]
		},
		{
			"label": "KG Kg（Lbs）",
			"value": "0.32 (0.7)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-7-p8",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf#page=8",
			"sourceLabel": "Aeropro catalogue outils pneumatiques2025, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6ceebaad2fe5edb5e2eb1ddca4d5a635697fbf812882f3f5b5eede4c7ee3f0f7. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-7-p8"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-7-p8"
		],
		"demandExplanation": [
			"october5-tools-aeropro-7-p8"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
