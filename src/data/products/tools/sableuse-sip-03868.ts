import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sableuse-sip-03868",
	"slug": "sableuse-sip-03868",
	"categoryId": "sableuse",
	"category": "sableuse",
	"label": "SIP 03868",
	"brand": "SIP",
	"model": "03868",
	"mpn": "03868",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/sableuse-sip-03868.svg",
		"alt": "Repères techniques : SIP 03868",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-medium-sandblast-cabinet/03868",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-03868",
		"label": "Référence 03868",
		"distinguishingAttributes": {
			"reference": "03868",
			"Input Supply:": "230v (13A)",
			"Media Capacity:": "7.5ltr"
		}
	},
	"editorial": {
		"overview": "SIP 03868. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Input Supply: : 230v (13A).",
			"Media Capacity: : 7.5ltr.",
			"Net Weight: : 18.00kg.",
			"Product Dimensions: : 490(H) x 490(W) x 630mm(D)."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La consommation est présentée comme une moyenne. Le cycle d’utilisation n’est pas défini ; elle n’est pas convertie en consommation continue en charge.",
			"La pression Air Pressure / Operating Pressure est une prescription de fonctionnement, sans pression de mesure explicitement rattachée à un régime qualifié.",
			"L’alimentation électrique230V alimente l’équipement de cabine ; le sablage utilise l’air comprimé. Elle n’est pas une consommation pneumatique.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Input Supply:",
			"value": "230v (13A)",
			"evidenceIds": [
				"october5-tools-sip-tool-018-p1"
			]
		},
		{
			"label": "Media Capacity:",
			"value": "7.5ltr",
			"evidenceIds": [
				"october5-tools-sip-tool-018-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "18.00kg",
			"evidenceIds": [
				"october5-tools-sip-tool-018-p1"
			]
		},
		{
			"label": "Product Dimensions:",
			"value": "490(H) x 490(W) x 630mm(D)",
			"evidenceIds": [
				"october5-tools-sip-tool-018-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-018-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-medium-sandblast-cabinet/03868",
			"sourceLabel": "SIP fiche technique officielle 03868",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 08038fc4787f43ef39b8cbaa50cbbc1d597ab0443bbef747d18fe78240c46c1a. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-018-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-018-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-018-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
