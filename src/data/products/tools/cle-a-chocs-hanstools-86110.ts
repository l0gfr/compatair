import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hanstools-86110",
	"slug": "cle-a-chocs-hanstools-86110",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "HansTools 86110",
	"brand": "HansTools",
	"model": "86110",
	"mpn": "86110",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hanstools-86110.svg",
		"alt": "Repères techniques : HansTools 86110",
		"sourceUrl": "https://www.hanstool.com/product/air-impact-wrench-85mm-shaft-86110%e2%80%912/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-86110",
		"label": "Référence 86110",
		"distinguishingAttributes": {
			"reference": "86110",
			"ANVIL inch(mm)": "1.3\" (33)",
			"MAX TORQUE FT · LB(Nm) @ 5 SEC": "750 (1017)"
		}
	},
	"editorial": {
		"overview": "HansTools 86110. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"ANVIL inch(mm) : 1.3\" (33).",
			"MAX TORQUE FT · LB(Nm) @ 5 SEC : 750 (1017).",
			"MINI TORQUE FT · LB(Nm) : 100-700 (136-949).",
			"STDBOLT SIZE inch(mm) : M22.",
			"FREE SPEED R.P.M. : 6300.",
			"MECHANISM : NEW TWIN HAMMER."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La colonne AVG.DLR CONSUMPTION CFM est une consommation moyenne ; le cycle de travail n’est pas documenté. Elle ne représente pas le débit continu en charge.",
			"Les pressions Air Pressure bar/psi sont des prescriptions de fonctionnement, sans point de mesure de consommation explicitement qualifié.",
			"Les éventuelles affirmations de FAQ ne remplacent pas le régime Average/DLR imprimé dans les tableaux. Les variantes ne sont retenues que lorsqu’un numéro propre figure dans une ligne technique.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "ANVIL inch(mm)",
			"value": "1.3\" (33)",
			"evidenceIds": [
				"october5-tools-hans-tool-008-p1"
			]
		},
		{
			"label": "MAX TORQUE FT · LB(Nm) @ 5 SEC",
			"value": "750 (1017)",
			"evidenceIds": [
				"october5-tools-hans-tool-008-p1"
			]
		},
		{
			"label": "MINI TORQUE FT · LB(Nm)",
			"value": "100-700 (136-949)",
			"evidenceIds": [
				"october5-tools-hans-tool-008-p1"
			]
		},
		{
			"label": "STDBOLT SIZE inch(mm)",
			"value": "M22",
			"evidenceIds": [
				"october5-tools-hans-tool-008-p1"
			]
		},
		{
			"label": "FREE SPEED R.P.M.",
			"value": "6300",
			"evidenceIds": [
				"october5-tools-hans-tool-008-p1"
			]
		},
		{
			"label": "MECHANISM",
			"value": "NEW TWIN HAMMER",
			"evidenceIds": [
				"october5-tools-hans-tool-008-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-008-p1",
			"sourceUrl": "https://www.hanstool.com/product/air-impact-wrench-85mm-shaft-86110%e2%80%912/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 41f0fdf010b68353621e74c594df556995bdd3167de45af0aa69594f1d35c94c. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-008-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-008-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-008-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
