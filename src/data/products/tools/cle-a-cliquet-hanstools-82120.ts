import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-hanstools-82120",
	"slug": "cle-a-cliquet-hanstools-82120",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "HansTools 82120",
	"brand": "HansTools",
	"model": "82120",
	"mpn": "82120",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-hanstools-82120.svg",
		"alt": "Repères techniques : HansTools 82120",
		"sourceUrl": "https://www.hanstool.com/product/83120-%e2%85%9c-air-ratchet-heavy-duty/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hanstools-82120",
		"label": "Référence 82120",
		"distinguishingAttributes": {
			"reference": "82120",
			"MAX TORQUE FT · LB(Nm)": "37(50)",
			"STDBOLT SIZE inch(mm)": "¼\"(M6)"
		}
	},
	"editorial": {
		"overview": "HansTools 82120. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"MAX TORQUE FT · LB(Nm) : 37(50).",
			"STDBOLT SIZE inch(mm) : ¼\"(M6).",
			"FREE SPEED R.P.M. : 230.",
			"EXHAUST : REAR."
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
			"value": "37(50)",
			"evidenceIds": [
				"october5-tools-hans-tool-080-p1"
			]
		},
		{
			"label": "STDBOLT SIZE inch(mm)",
			"value": "¼\"(M6)",
			"evidenceIds": [
				"october5-tools-hans-tool-080-p1"
			]
		},
		{
			"label": "FREE SPEED R.P.M.",
			"value": "230",
			"evidenceIds": [
				"october5-tools-hans-tool-080-p1"
			]
		},
		{
			"label": "EXHAUST",
			"value": "REAR",
			"evidenceIds": [
				"october5-tools-hans-tool-080-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-hans-tool-080-p1",
			"sourceUrl": "https://www.hanstool.com/product/83120-%e2%85%9c-air-ratchet-heavy-duty/",
			"sourceLabel": "HansTools fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 fef9ca8141d5dfa16bfdf07c37d064197faceb0dcf9a73086c3a4d4fe9c3dce9. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-hans-tool-080-p1"
		],
		"workingPressureBar": [
			"october5-tools-hans-tool-080-p1"
		],
		"demandExplanation": [
			"october5-tools-hans-tool-080-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
