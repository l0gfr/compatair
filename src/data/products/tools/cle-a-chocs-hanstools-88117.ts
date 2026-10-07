import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-hanstools-88117",
	"slug": "cle-a-chocs-hanstools-88117",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "HansTools 88117",
	"brand": "HansTools",
	"model": "88117",
	"mpn": "88117",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-hanstools-88117.svg",
		"alt": "Repères techniques : HansTools 88117",
		"sourceUrl": "https://www.hanstool.com/product/88117-air-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-88117",
		"label": "Référence 88117",
		"distinguishingAttributes": {
			"reference": "88117",
			"ANVIL inch(mm)": "1.47\" (37.49)",
			"MAX TORQUE FT · LB(Nm) @ 5 SEC": "1800 (2441)"
		}
	},
	"editorial": {
		"overview": "HansTools 88117. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"ANVIL inch(mm) : 1.47\" (37.49).",
			"MAX TORQUE FT · LB(Nm) @ 5 SEC : 1800 (2441).",
			"MINI TORQUE FT · LB(Nm) : 150-1200 (203-1627).",
			"STDBOLT SIZE inch(mm) : M38.",
			"FREE SPEED R.P.M. : 5000.",
			"MECHANISM : TWIN HAMMER."
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
			"value": "1.47\" (37.49)",
			"evidenceIds": [
				"october5-tools-hans-tool-055-p1"
			]
		},
		{
			"label": "MAX TORQUE FT · LB(Nm) @ 5 SEC",
			"value": "1800 (2441)",
			"evidenceIds": [
				"october5-tools-hans-tool-055-p1"
			]
		},
		{
			"label": "MINI TORQUE FT · LB(Nm)",
			"value": "150-1200 (203-1627)",
			"evidenceIds": [
				"october5-tools-hans-tool-055-p1"
			]
		},
		{
			"label": "STDBOLT SIZE inch(mm)",
			"value": "M38",
			"evidenceIds": [
				"october5-tools-hans-tool-055-p1"
			]
		},
		{
			"label": "FREE SPEED R.P.M.",
			"value": "5000",
			"evidenceIds": [
				"october5-tools-hans-tool-055-p1"
			]
		},
		{
			"label": "MECHANISM",
			"value": "TWIN HAMMER",
			"evidenceIds": [
				"october5-tools-hans-tool-055-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-055-p1",
			"sourceUrl": "https://www.hanstool.com/product/88117-air-impact-wrench/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 4e98aa9e93ca5f089b5ab0ebb854a2bc42155867321b2b99c53b2b7fd3d191a3. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-055-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-055-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-055-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
