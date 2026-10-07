import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-kinshun-utr-30",
	"slug": "polisseuse-kinshun-utr-30",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Kinshun UTR-30",
	"brand": "Kinshun",
	"model": "UTR-30",
	"mpn": "UTR-30",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-kinshun-utr-30.webp",
		"alt": "Repères techniques : Kinshun UTR-30",
		"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kinshun-utr-30",
		"label": "Référence UTR-30",
		"distinguishingAttributes": {
			"reference": "UTR-30",
			"Masse publiée": "190g",
			"Dimensions publiées": "205mm+Ø30.0mm"
		}
	},
	"editorial": {
		"overview": "Kinshun UTR-30. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 190g. Dimensions publiées : 205mm+Ø30.0mm.",
		"verifiedFacts": [
			"Masse publiée : 190g.",
			"Dimensions publiées : 205mm+Ø30.0mm.",
			"Pince publiée : ○ =3mm(1/8”)  .",
			"Course de va-et-vient : 0.3 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"La documentation décrit un mouvement de polissage alternatif et imprime une vitesse en rpm. Cette unité n’est pas transformée en courses par minute. La vitesse réelle doit être confirmée par le fabricant.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "190g",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p8"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "205mm+Ø30.0mm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p8"
			]
		},
		{
			"label": "Pince publiée",
			"value": "○ =3mm(1/8”)  ",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p8"
			]
		},
		{
			"label": "Course de va-et-vient",
			"value": "0.3 mm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression établi dans le tableau fabricant.",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-shenghui-catalog-p8",
			"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf#page=8",
			"sourceLabel": "Kinshun, documentation technique fabricant, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a5e9965c317f752d6cfc55359849a9129715ca0da347b990149ccaee82467510. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-shenghui-catalog-p8"
		],
		"workingPressureBar": [
			"october2-tools-shenghui-catalog-p8"
		],
		"demandExplanation": [
			"october2-tools-shenghui-catalog-p8"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
