import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-aeropro-ap7333",
	"slug": "ponceuse-orbitale-aeropro-ap7333",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Aeropro AP7333",
	"brand": "Aeropro",
	"model": "AP7333",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-aeropro-ap7333.svg",
		"alt": "Repères techniques : Aeropro AP7333",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-ap7333",
		"label": "Modèle AP7333, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "AP7333",
			"Sanding pad \" (mm)": "3\" (75)",
			"orbit \" (mm)": "2.5mm"
		}
	},
	"editorial": {
		"overview": "Aeropro AP7333. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Sanding pad \" (mm) : 3\" (75).",
			"orbit \" (mm) : 2.5mm.",
			"Rpm : 12000.",
			"KG Kg (Lbs) : 0.7 (1.54)."
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
			"label": "Sanding pad \" (mm)",
			"value": "3\" (75)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p12"
			]
		},
		{
			"label": "orbit \" (mm)",
			"value": "2.5mm",
			"evidenceIds": [
				"october5-tools-aeropro-7-p12"
			]
		},
		{
			"label": "Rpm",
			"value": "12000",
			"evidenceIds": [
				"october5-tools-aeropro-7-p12"
			]
		},
		{
			"label": "KG Kg (Lbs)",
			"value": "0.7 (1.54)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-7-p12",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf#page=12",
			"sourceLabel": "Aeropro catalogue outils pneumatiques2025, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6ceebaad2fe5edb5e2eb1ddca4d5a635697fbf812882f3f5b5eede4c7ee3f0f7. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-7-p12"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-7-p12"
		],
		"demandExplanation": [
			"october5-tools-aeropro-7-p12"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
