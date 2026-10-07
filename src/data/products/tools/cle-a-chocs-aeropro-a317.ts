import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aeropro-a317",
	"slug": "cle-a-chocs-aeropro-a317",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aeropro A317",
	"brand": "Aeropro",
	"model": "A317",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aeropro-a317.svg",
		"alt": "Repères techniques : Aeropro A317",
		"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aeropro-a317",
		"label": "Modèle A317, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "A317",
			"Size": "1/2\"",
			"work Nm (Ft-lbs)": "630 (470)"
		}
	},
	"editorial": {
		"overview": "Aeropro A317. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Size : 1/2\".",
			"work Nm (Ft-lbs) : 630 (470).",
			"Max. Nm (Ft-lbs) : 850 (630).",
			"Losing Nm (Ft-lbs) : 1200 (885).",
			"Rpm : 10500."
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
			"value": "1/2\"",
			"evidenceIds": [
				"october5-tools-aeropro-7-p2"
			]
		},
		{
			"label": "work Nm (Ft-lbs)",
			"value": "630 (470)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p2"
			]
		},
		{
			"label": "Max. Nm (Ft-lbs)",
			"value": "850 (630)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p2"
			]
		},
		{
			"label": "Losing Nm (Ft-lbs)",
			"value": "1200 (885)",
			"evidenceIds": [
				"october5-tools-aeropro-7-p2"
			]
		},
		{
			"label": "Rpm",
			"value": "10500",
			"evidenceIds": [
				"october5-tools-aeropro-7-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-aeropro-7-p2",
			"sourceUrl": "https://www.aeroprotools.com/Uploads/Ueditor/file/20251021/1761027606154001.pdf#page=2",
			"sourceLabel": "Aeropro catalogue outils pneumatiques2025, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6ceebaad2fe5edb5e2eb1ddca4d5a635697fbf812882f3f5b5eede4c7ee3f0f7. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-aeropro-7-p2"
		],
		"workingPressureBar": [
			"october5-tools-aeropro-7-p2"
		],
		"demandExplanation": [
			"october5-tools-aeropro-7-p2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
