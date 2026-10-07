import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-nettoyage-sip-02143",
	"slug": "pistolet-nettoyage-sip-02143",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "SIP 02143",
	"brand": "SIP",
	"model": "02143",
	"mpn": "02143",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-nettoyage-sip-02143.svg",
		"alt": "Repères techniques : SIP 02143",
		"sourceUrl": "https://www.sip-group.com/product/category/193/sip-engine-cleaning-gun/02143",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sip-02143",
		"label": "Référence 02143",
		"distinguishingAttributes": {
			"reference": "02143",
			"Pot Capacity:": "950ml",
			"Net Weight:": "0.95kg"
		}
	},
	"editorial": {
		"overview": "SIP 02143. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Pot Capacity: : 950ml.",
			"Net Weight: : 0.95kg."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le régime de la consommation publiée n’est pas défini par un cycle ni un fonctionnement continu en charge ; la valeur est conservée comme cellule source, sans profil de débit qualifié.",
			"La pression Air Pressure / Operating Pressure est une prescription de fonctionnement, sans pression de mesure explicitement rattachée à un régime qualifié.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Pot Capacity:",
			"value": "950ml",
			"evidenceIds": [
				"october5-tools-sip-tool-011-p1"
			]
		},
		{
			"label": "Net Weight:",
			"value": "0.95kg",
			"evidenceIds": [
				"october5-tools-sip-tool-011-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sip-tool-011-p1",
			"sourceUrl": "https://www.sip-group.com/product/category/193/sip-engine-cleaning-gun/02143",
			"sourceLabel": "SIP fiche technique officielle 02143",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 c654ec0401279a23ce774f6c50c3846986d953a6a575bda781475665df27d54c. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sip-tool-011-p1"
		],
		"workingPressureBar": [
			"october5-tools-sip-tool-011-p1"
		],
		"demandExplanation": [
			"october5-tools-sip-tool-011-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
