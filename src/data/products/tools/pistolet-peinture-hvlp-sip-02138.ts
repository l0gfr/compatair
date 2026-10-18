import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sip-02138",
	"slug": "pistolet-peinture-hvlp-sip-02138",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "SIP 02138",
	"brand": "SIP",
	"model": "02138",
	"mpn": "02138",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sip-02138.svg",
		"alt": "Repères techniques : SIP 02138",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1.4mm-sapphire-hvlp-gravity-spray-gun/02138",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-02138",
		"label": "Référence 02138",
		"distinguishingAttributes": {
			"reference": "02138",
			"Feed Type:": "Gravity",
			"Nozzle Diameter:": "Ø 1.4mm"
		}
	},
	"editorial": {
		"overview": "SIP 02138 : pistolet HVLP gravitaire à godet de 600 ml et buse de 1,4 mm. Le 02136 voisin est à aspiration, avec godet de 1 L et buse de 1,8 mm. Le type d’alimentation et le calibre constituent ici les premiers critères de choix.",
		"verifiedFacts": [
			"Feed Type: : Gravity.",
			"Nozzle Diameter: : Ø 1.4mm.",
			"Paint Cup Capacity: : 600ml.",
			"Water Based Paint: : Yes.",
			"Net Weight: : 1.10kg.",
			"Product Dimensions: : 125(H) x 125(W) x 250mm(D)."
		],
		"limitations": [
			"SIP qualifie les 354 L/min, ou 12,5 CFM, de moyenne. Sans cadence ni débit en charge, ce nombre ne valide pas une pulvérisation continue.",
			"La plage de service de 3 à 4 bar ne constitue pas une courbe pression–consommation."
		]
	},
	"specifications": [
		{
			"label": "Feed Type:",
			"value": "Gravity",
			"evidenceIds": [
				"october5-tools-sip-tool-008-p1"
			]
		},
		{
			"label": "Nozzle Diameter:",
			"value": "Ø 1.4mm",
			"evidenceIds": [
				"october5-tools-sip-tool-008-p1"
			]
		},
		{
			"label": "Paint Cup Capacity:",
			"value": "600ml",
			"evidenceIds": [
				"october5-tools-sip-tool-008-p1"
			]
		},
		{
			"label": "Water Based Paint:",
			"value": "Yes",
			"evidenceIds": [
				"october5-tools-sip-tool-008-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "1.10kg",
			"evidenceIds": [
				"october5-tools-sip-tool-008-p1"
			]
		},
		{
			"label": "Product Dimensions:",
			"value": "125(H) x 125(W) x 250mm(D)",
			"evidenceIds": [
				"october5-tools-sip-tool-008-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-008-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-1.4mm-sapphire-hvlp-gravity-spray-gun/02138",
			"sourceLabel": "SIP fiche technique officielle 02138",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 a99ace82cec96b87869e5ea41bebdd8d0d972e9958ebafba14c82f2493d8ced9. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-008-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-008-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-008-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
