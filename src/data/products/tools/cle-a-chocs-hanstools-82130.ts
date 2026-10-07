import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hanstools-82130",
	"slug": "cle-a-chocs-hanstools-82130",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "HansTools 82130",
	"brand": "HansTools",
	"model": "82130",
	"mpn": "82130",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hanstools-82130.svg",
		"alt": "Repères techniques : HansTools 82130",
		"sourceUrl": "https://www.hanstool.com/product/83130-mini-air-impact-wrench-reversible-butterfly-type-3-8-drive/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-82130",
		"label": "Référence 82130",
		"distinguishingAttributes": {
			"reference": "82130",
			"MAX TORQUE FT · LB(Nm)": "80(108)",
			"FREE SPEED R.P.M.": "10000"
		}
	},
	"editorial": {
		"overview": "HansTools 82130. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"MAX TORQUE FT · LB(Nm) : 80(108).",
			"FREE SPEED R.P.M. : 10000."
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
			"label": "MAX TORQUE FT · LB(Nm)",
			"value": "80(108)",
			"evidenceIds": [
				"october5-tools-hans-tool-068-p1"
			]
		},
		{
			"label": "FREE SPEED R.P.M.",
			"value": "10000",
			"evidenceIds": [
				"october5-tools-hans-tool-068-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-068-p1",
			"sourceUrl": "https://www.hanstool.com/product/83130-mini-air-impact-wrench-reversible-butterfly-type-3-8-drive/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 68072bffd4143f9ce4c71d3e71a105767d972177a5d4da4ebe4e678a02351e53. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-068-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-068-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-068-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
