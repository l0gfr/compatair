import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aeropro-ap7463",
	"slug": "cle-a-chocs-aeropro-ap7463",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aeropro AP7463",
	"brand": "Aeropro",
	"model": "AP7463",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aeropro-ap7463.svg",
		"alt": "Repères techniques : Aeropro AP7463",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-ap7463",
		"label": "Modèle AP7463, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "AP7463",
			"Size": "1\"",
			"work Nm (Ft-lbs)": "2000 (1500)"
		}
	},
	"editorial": {
		"overview": "Aeropro AP7463. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Size : 1\".",
			"work Nm (Ft-lbs) : 2000 (1500).",
			"Max. Nm (Ft-lbs) : 3000 (2200).",
			"Losing Nm (Ft-lbs) : 3300 (2450).",
			"Rpm : 6000.",
			"KG Kg (Lbs) : 7.8 (17.1).",
			"db(A) : 103.5."
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
			"label": "Size",
			"value": "1\"",
			"evidenceIds": [
				"october5-tools-aeropro-7-p5"
			]
		},
		{
			"label": "work Nm (Ft-lbs)",
			"value": "2000 (1500)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p5"
			]
		},
		{
			"label": "Max. Nm (Ft-lbs)",
			"value": "3000 (2200)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p5"
			]
		},
		{
			"label": "Losing Nm (Ft-lbs)",
			"value": "3300 (2450)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p5"
			]
		},
		{
			"label": "Rpm",
			"value": "6000",
			"evidenceIds": [
				"october5-tools-aeropro-7-p5"
			]
		},
		{
			"label": "KG Kg (Lbs)",
			"value": "7.8 (17.1)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p5"
			]
		},
		{
			"label": "db(A)",
			"value": "103.5",
			"evidenceIds": [
				"october5-tools-aeropro-7-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-7-p5",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf#page=5",
			"sourceLabel": "Aeropro catalogue outils pneumatiques2025, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6ceebaad2fe5edb5e2eb1ddca4d5a635697fbf812882f3f5b5eede4c7ee3f0f7. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-7-p5"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-7-p5"
		],
		"demandExplanation": [
			"october5-tools-aeropro-7-p5"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
