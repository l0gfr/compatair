import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-anest-iwata-w-200sp-12wbsp-130457a0",
	"slug": "pistolet-peinture-anest-iwata-w-200sp-12wbsp-130457a0",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Anest Iwata W-200SP-12WBSP (réf. 130457A0)",
	"brand": "Anest Iwata",
	"model": "W-200SP-12WBSP",
	"mpn": "130457A0",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"max": 2.5
	},
	"demandExplanation": "La source publie une plage de consommation et une plage de pression, sans associer explicitement un débit unique à un point de pression. Aucune interpolation ou association des bornes supposée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-anest-iwata-w-200sp-12wbsp-130457a0.webp",
		"alt": "Repères techniques : Anest Iwata W-200SP-12WBSP (réf. 130457A0)",
		"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "anest-iwata-w-200sp-12wbsp",
		"label": "Référence 130457A0",
		"distinguishingAttributes": {
			"reference": "130457A0",
			"Buse déclarée": "1.2 mm",
			"Chapeau d’air": "WBS"
		}
	},
	"editorial": {
		"overview": "Anest Iwata W-200SP-12WBSP (réf. 130457A0). La source publie une plage de consommation et une plage de pression, sans associer explicitement un débit unique à un point de pression. Aucune interpolation ou association des bornes supposée. Buse déclarée : 1.2 mm. Chapeau d’air : WBS.",
		"verifiedFacts": [
			"Buse déclarée : 1.2 mm.",
			"Chapeau d’air : WBS.",
			"Débit de produit dans le tableau : 300 mL/min.",
			"Largeur du jet publiée : 330 mm.",
			"Plage de consommation publiée, sans appariement supposé : 463 ~ 578 Nℓ/min."
		],
		"limitations": [
			"La source publie une plage de consommation et une plage de pression, sans associer explicitement un débit unique à un point de pression. Aucune interpolation ou association des bornes supposée.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Buse déclarée",
			"value": "1.2 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p12"
			]
		},
		{
			"label": "Chapeau d’air",
			"value": "WBS",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p12"
			]
		},
		{
			"label": "Débit de produit dans le tableau",
			"value": "300 mL/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p12"
			]
		},
		{
			"label": "Largeur du jet publiée",
			"value": "330 mm",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p12"
			]
		},
		{
			"label": "Plage de consommation publiée, sans appariement supposé",
			"value": "463 ~ 578 Nℓ/min",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p12"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "2.0 ~ 2.5 bar, colonne de pression du même tableau",
			"evidenceIds": [
				"october2-tools-iwata-industry-2023-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-iwata-industry-2023-p12",
			"sourceUrl": "https://www.anest-iwata-coating.com/wp-content/uploads/2023/01/catalogue_2023__INDUSTRY_ENGaipl-1-compressed.pdf#page=12",
			"sourceLabel": "Anest Iwata, catalogue industriel anglais 2023, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 302977aaa53c6499ba928666a051209796dd51917555d3072a140af327ff01f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-iwata-industry-2023-p12"
		],
		"workingPressureBar": [
			"october2-tools-iwata-industry-2023-p12"
		],
		"demandExplanation": [
			"october2-tools-iwata-industry-2023-p12"
		]
	},
	"notes": [
		"La source publie une plage de consommation et une plage de pression, sans associer explicitement un débit unique à un point de pression. Aucune interpolation ou association des bornes supposée."
	]
};

export default product;
