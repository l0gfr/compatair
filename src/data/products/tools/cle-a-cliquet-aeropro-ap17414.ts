import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-aeropro-ap17414",
	"slug": "cle-a-cliquet-aeropro-ap17414",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Aeropro AP17414",
	"brand": "Aeropro",
	"model": "AP17414",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-aeropro-ap17414.svg",
		"alt": "Repères techniques : Aeropro AP17414",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-ap17414",
		"label": "Modèle AP17414, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "AP17414",
			"Size": "1/4\" 3/8\"",
			"work Nm (Ft-lbs)": "35 (26)"
		}
	},
	"editorial": {
		"overview": "Aeropro AP17414. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Size : 1/4\" 3/8\".",
			"work Nm (Ft-lbs) : 35 (26).",
			"\" (mm) : 8.18\" (208).",
			"Rpm : 230."
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
			"value": "1/4\" 3/8\"",
			"evidenceIds": [
				"october5-tools-aeropro-7-p4"
			]
		},
		{
			"label": "work Nm (Ft-lbs)",
			"value": "35 (26)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p4"
			]
		},
		{
			"label": "\" (mm)",
			"value": "8.18\" (208)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p4"
			]
		},
		{
			"label": "Rpm",
			"value": "230",
			"evidenceIds": [
				"october5-tools-aeropro-7-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-7-p4",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf#page=4",
			"sourceLabel": "Aeropro catalogue outils pneumatiques2025, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6ceebaad2fe5edb5e2eb1ddca4d5a635697fbf812882f3f5b5eede4c7ee3f0f7. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-7-p4"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-7-p4"
		],
		"demandExplanation": [
			"october5-tools-aeropro-7-p4"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
