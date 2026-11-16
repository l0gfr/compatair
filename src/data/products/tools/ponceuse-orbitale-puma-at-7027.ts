import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-puma-at-7027",
	"slug": "ponceuse-orbitale-puma-at-7027",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "PUMA AT-7027",
	"brand": "PUMA",
	"model": "AT-7027",
	"mpn": "AT-7027",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation moyenne publiée reste documentaire. Aucun débit en charge ni maximum de demande continue n’est déduit de cette moyenne.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-puma-at-7027-technical-20261116-reviews.svg",
		"alt": "Repères techniques : PUMA AT-7027",
		"sourceUrl": "https://www.pumaair.com/views/proimages/pd-en/PDF/PIC-2680/P036-AIR_SANDER-2680.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "puma-at-7027",
		"label": "Référence AT-7027",
		"distinguishingAttributes": {
			"Aspiration": "Sans aspiration intégrée ; 7028 avec aspiration autonome",
			"Orbite": "5 mm",
			"Vitesse à vide": "9 000 tr/min",
			"Plateaux publiés": "125 ou 150 mm selon configuration",
			"Fixation d’abrasif": "C : autoagrippante ; S : adhésive, selon la légende"
		}
	},
	"editorial": {
		"overview": "PUMA AT-7027 : ponceuse orbitale sans aspiration intégrée, orbite 5 mm, 9 000 tr/min et plateaux 125 ou 150 mm selon configuration. La 7028 ajoute une aspiration autonome avec la même orbite et la même vitesse. La 7025 est une ponceuse à plateau rectangulaire. Le choix d’aspiration et de plateau les distingue ; la moyenne de 170 L/min reste non dimensionnante.",
		"verifiedFacts": [
			"Aspiration : Sans aspiration intégrée ; 7028 avec aspiration autonome.",
			"Orbite : 5 mm.",
			"Vitesse à vide : 9 000 tr/min.",
			"Plateaux publiés : 125 ou 150 mm selon configuration.",
			"Fixation d’abrasif : C : autoagrippante ; S : adhésive, selon la légende.",
			"Longueur : 155 mm.",
			"Masse avec plateau 125 / 150 mm : 1,08 / 1,10 kg.",
			"Consommation moyenne documentaire : 170 L/min ; 6 scfm, unités imprimées."
		],
		"limitations": [
			"La fixation d’abrasif et le diamètre doivent figurer sur la configuration commandée ; aucun nouveau modèle n’est créé pour les seuls accessoires.",
			"La pression de service est imprimée 6,3 kg/cm² (90 psi). Elle reste dans son unité originale et ne qualifie pas un débit en charge.",
			"Aucun volume moyen de consommation n’est transformé en demande continue maximale.",
			"Édition de la fiche PDF non précisée ; vérifier la référence et la configuration effectivement livrées."
		]
	},
	"specifications": [
		{
			"label": "Aspiration",
			"value": "Sans aspiration intégrée ; 7028 avec aspiration autonome",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0"
			]
		},
		{
			"label": "Orbite",
			"value": "5 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0"
			]
		},
		{
			"label": "Plateaux publiés",
			"value": "125 ou 150 mm selon configuration",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0"
			]
		},
		{
			"label": "Fixation d’abrasif",
			"value": "C : autoagrippante ; S : adhésive, selon la légende",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0"
			]
		},
		{
			"label": "Longueur",
			"value": "155 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0"
			]
		},
		{
			"label": "Masse avec plateau 125 / 150 mm",
			"value": "1,08 / 1,10 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0"
			]
		},
		{
			"label": "Consommation moyenne documentaire",
			"value": "170 L/min ; 6 scfm, unités imprimées",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-39-pdp-263-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Sander-AirSander-.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Sander-AirSander-.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 21ecff76fe740eda6c83b9320c3c76c76c6a187a0fe2da351e918a894a3b99ad. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0",
			"sourceUrl": "https://www.pumaair.com/views/proimages/pd-en/PDF/PIC-2680/P036-AIR_SANDER-2680.pdf",
			"sourceLabel": "PUMA, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "PUMA AT-7027 : ponceuse orbitale sans aspiration intégrée, orbite 5 mm, 9 000 tr/min et plateaux 125 ou 150 mm selon configuration. La 7028 ajoute une aspiration autonome avec la même orbite et la même vitesse. La 7025 est une ponceuse à plateau rectangulaire. Le choix d’aspiration et de plateau les distingue ; la moyenne de 170 L/min reste non dimensionnante. GET complet SHA-256 9a4c87edf5d2b6cb307f880ddecc8400bbbae15766e08d9899d0063c6ca00c82. Pages PDF lues : 2."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Sander-AirSander-.html",
			"sourceLabel": "PUMA, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "PUMA AT-7027 : ponceuse orbitale sans aspiration intégrée, orbite 5 mm, 9 000 tr/min et plateaux 125 ou 150 mm selon configuration. La 7028 ajoute une aspiration autonome avec la même orbite et la même vitesse. La 7025 est une ponceuse à plateau rectangulaire. Le choix d’aspiration et de plateau les distingue ; la moyenne de 170 L/min reste non dimensionnante. GET complet SHA-256 3404b78be5ec415005e258ec675060b23ed971ed40805f48ce4871be4f8491d0. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0",
			"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:1"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:0",
			"review:2026-11-16-reviews:ponceuse-orbitale-puma-at-7027:1"
		]
	},
	"notes": [
		"La consommation moyenne publiée reste documentaire. Aucun débit en charge ni maximum de demande continue n’est déduit de cette moyenne."
	]
};

export default product;
