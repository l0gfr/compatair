import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-aeropro-a313n",
	"slug": "ponceuse-orbitale-aeropro-a313n",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Aeropro A313N",
	"brand": "Aeropro",
	"model": "A313N",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-aeropro-a313n.svg",
		"alt": "Repères techniques : Aeropro A313N",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-a313n",
		"label": "Modèle A313N, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "A313N",
			"Sanding pad \" (mm)": "6\" (150)",
			"orbit \" (mm)": "3mm/5mm"
		}
	},
	"editorial": {
		"overview": "Aeropro A313N. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Sanding pad \" (mm) : 6\" (150).",
			"orbit \" (mm) : 3mm/5mm.",
			"Rpm : 10000.",
			"KG Kg (Lbs) : 0.93 (2.05).",
			"db(A) : 82.7."
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
			"value": "6\" (150)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p12"
			]
		},
		{
			"label": "orbit \" (mm)",
			"value": "3mm/5mm",
			"evidenceIds": [
				"october5-tools-aeropro-7-p12"
			]
		},
		{
			"label": "Rpm",
			"value": "10000",
			"evidenceIds": [
				"october5-tools-aeropro-7-p12"
			]
		},
		{
			"label": "KG Kg (Lbs)",
			"value": "0.93 (2.05)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p12"
			]
		},
		{
			"label": "db(A)",
			"value": "82.7",
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
