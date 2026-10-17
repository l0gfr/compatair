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
		"overview": "Le SIP 02143 est un pistolet de nettoyage à réservoir de 950 ml, avec entrée mâle 1/4 BSP et plage de fonctionnement de 2 à 6 bar. Le Vorel 81647 dispose aussi de 950 ml, mais distingue 4 bar de fonctionnement et 8 bar au maximum. Aucun des deux ne fournit ici un besoin d’air utilisable pour choisir le compresseur.",
		"verifiedFacts": [
			"Pot Capacity: : 950ml.",
			"Net Weight: : 0.95kg.",
			"La masse publiée est de 0,95 kg pour le SIP, contre 0,46 kg pour le Vorel. Le volume de liquide et la masse ne remplacent pas une consommation pneumatique."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le régime de la consommation publiée n’est pas défini par un cycle ni un fonctionnement continu en charge ; la valeur est conservée comme cellule source, sans profil de débit qualifié.",
			"La pression Air Pressure / Operating Pressure est une prescription de fonctionnement, sans pression de mesure explicitement rattachée à un régime qualifié.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué.",
			"Confirmer le produit de nettoyage autorisé, l’entrée et les accessoires. Ne pas associer une consommation supposée au seul maximum de pression."
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
