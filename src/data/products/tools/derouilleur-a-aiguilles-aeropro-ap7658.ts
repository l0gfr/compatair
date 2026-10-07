import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-aeropro-ap7658",
	"slug": "derouilleur-a-aiguilles-aeropro-ap7658",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Aeropro AP7658",
	"brand": "Aeropro",
	"model": "AP7658",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-aeropro-ap7658.svg",
		"alt": "Repères techniques : Aeropro AP7658",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-ap7658",
		"label": "Modèle AP7658, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "AP7658",
			"Blow Per Min": "4500Bpm",
			"Needle quantity": "19 needles"
		}
	},
	"editorial": {
		"overview": "Aeropro AP7658. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Blow Per Min : 4500Bpm.",
			"Needle quantity : 19 needles.",
			"Bore Diameter \" (mm) : 3/4\" (19mm).",
			"KG Kg（Lbs） : 1.97 (4.33).",
			"db(A) : 112.5."
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
			"label": "Blow Per Min",
			"value": "4500Bpm",
			"evidenceIds": [
				"october5-tools-aeropro-7-p10"
			]
		},
		{
			"label": "Needle quantity",
			"value": "19 needles",
			"evidenceIds": [
				"october5-tools-aeropro-7-p10"
			]
		},
		{
			"label": "Bore Diameter \" (mm)",
			"value": "3/4\" (19mm)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p10"
			]
		},
		{
			"label": "KG Kg（Lbs）",
			"value": "1.97 (4.33)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p10"
			]
		},
		{
			"label": "db(A)",
			"value": "112.5",
			"evidenceIds": [
				"october5-tools-aeropro-7-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-7-p10",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf#page=10",
			"sourceLabel": "Aeropro catalogue outils pneumatiques2025, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6ceebaad2fe5edb5e2eb1ddca4d5a635697fbf812882f3f5b5eede4c7ee3f0f7. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-7-p10"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-7-p10"
		],
		"demandExplanation": [
			"october5-tools-aeropro-7-p10"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
