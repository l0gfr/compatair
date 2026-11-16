import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-dotco-12s1273-03",
	"slug": "scie-dotco-12s1273-03",
	"categoryId": "scie",
	"category": "scie",
	"label": "Dotco 12S1273-03",
	"brand": "Dotco",
	"model": "12S1273-03",
	"mpn": "12S1273-03",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation d’air manque dans le tableau de la référence. Les performances mécaniques à 90 psi / 620 kPa ne permettent pas de calculer son besoin en air.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-dotco-12s1273-03-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Dotco 12S1273-03",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "dotco-12s1273-03",
		"label": "Référence 12S1273-03",
		"distinguishingAttributes": {
			"reference": "12S1273-03",
			"Vitesse à vide": "12,000 tr/min",
			"Masse publiée": "1.04 kg",
			"Dimension publiée": "180 mm"
		}
	},
	"editorial": {
		"overview": "La scie 12S1273-03 est prête au raccordement d’une aspiration et tourne à 12 000 tr/min. La 12S1274-03 passe à 20 000 tr/min ; la 12S1207-02 est à échappement avant, plus légère et sans cette préparation d’aspiration.",
		"verifiedFacts": [
			"Lame : 2 pouces.",
			"Profondeur de coupe maximale : 7/16 pouce.",
			"Vitesse à vide : 12 000 tr/min.",
			"Corps : Composite.",
			"Longueur et masse : 180 mm ; 1,04 kg.",
			"Consommation : Absente du tableau ; demande indéterminée."
		],
		"limitations": [
			"La consommation d’air manque dans le tableau de la référence. Les performances mécaniques à 90 psi / 620 kPa ne permettent pas de calculer son besoin en air.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Lame",
			"value": "2 pouces",
			"evidenceIds": [
				"review:2026-11-16-reviews:scie-dotco-12s1273-03:0"
			]
		},
		{
			"label": "Profondeur de coupe maximale",
			"value": "7/16 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:scie-dotco-12s1273-03:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:scie-dotco-12s1273-03:0"
			]
		},
		{
			"label": "Corps",
			"value": "Composite",
			"evidenceIds": [
				"review:2026-11-16-reviews:scie-dotco-12s1273-03:0"
			]
		},
		{
			"label": "Longueur et masse",
			"value": "180 mm ; 1,04 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:scie-dotco-12s1273-03:0"
			]
		},
		{
			"label": "Consommation",
			"value": "Absente du tableau ; demande indéterminée",
			"evidenceIds": [
				"review:2026-11-16-reviews:scie-dotco-12s1273-03:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p98",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=98",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 98",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:scie-dotco-12s1273-03:0",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
			"sourceLabel": "Dotco, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La scie 12S1273-03 est prête au raccordement d’une aspiration et tourne à 12 000 tr/min. La 12S1274-03 passe à 20 000 tr/min ; la 12S1207-02 est à échappement avant, plus légère et sans cette préparation d’aspiration. GET complet SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Pages PDF lues : 98."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:scie-dotco-12s1273-03:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:scie-dotco-12s1273-03:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:scie-dotco-12s1273-03:0"
		]
	},
	"notes": [
		"La consommation d’air manque dans le tableau de la référence. Les performances mécaniques à 90 psi / 620 kPa ne permettent pas de calculer son besoin en air."
	]
};

export default product;
