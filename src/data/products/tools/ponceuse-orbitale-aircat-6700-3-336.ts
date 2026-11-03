import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-aircat-6700-3-336",
	"slug": "ponceuse-orbitale-aircat-6700-3-336",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Aircat 6700-3-336",
	"brand": "Aircat",
	"model": "6700-3-336",
	"mpn": "6700-3-336",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-aircat-6700-3-336.webp",
		"alt": "Repères techniques : Aircat 6700-3-336",
		"sourceUrl": "https://continentaltoolgroup.com/product/non-vac-orbital-palm-sander-polisher/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6700-3-336",
		"label": "Référence 6700-3-336",
		"distinguishingAttributes": {
			"reference": "6700-3-336",
			"Masse publiée": "1.8 lb",
			"Vitesse à vide": "11000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6700-3-336. La 6700-3-336 est la ponceuse sans aspiration, plateau 3 pouces et orbite 3/32 pouce. La version CV possède une autre configuration d’aspiration ; la 6700-5-336 reçoit un plateau 5 pouces. Le diamètre et le circuit d’aspiration restent liés au code exact. Le débit 1,6 CFM ne reçoit aucune qualification de régime ou de pression absente de la fiche.",
		"verifiedFacts": [
			"Plateau : 3 pouces, autoagrippant.",
			"Orbite : 3/32 pouce.",
			"Aspiration : Sans aspiration.",
			"Filetage de plateau : 5/16 × 24.",
			"Vitesse à vide : 11 000 tr/min.",
			"Consommation, régime non précisé : 1,6 CFM."
		],
		"limitations": [
			"La fiche ne documente pas suffisamment le régime de consommation et son appariement à une pression ; le calcul reste indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "3 pouces, autoagrippant",
			"evidenceIds": [
				"ponceuse-orbitale-aircat-6700-3-336-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "3/32 pouce",
			"evidenceIds": [
				"ponceuse-orbitale-aircat-6700-3-336-reserved-20261103-1"
			]
		},
		{
			"label": "Aspiration",
			"value": "Sans aspiration",
			"evidenceIds": [
				"ponceuse-orbitale-aircat-6700-3-336-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage de plateau",
			"value": "5/16 × 24",
			"evidenceIds": [
				"ponceuse-orbitale-aircat-6700-3-336-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"ponceuse-orbitale-aircat-6700-3-336-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "1,6 CFM",
			"evidenceIds": [
				"ponceuse-orbitale-aircat-6700-3-336-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-167-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/non-vac-orbital-palm-sander-polisher/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6700-3-336",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c784bb49639aa66f566cd017d78acfe01920b715a3c67bbf073c314886faa8d6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-orbitale-aircat-6700-3-336-reserved-20261103-1",
			"sourceUrl": "https://continentaltoolgroup.com/product/non-vac-orbital-palm-sander-polisher/",
			"sourceLabel": "Aircat : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 fd199c2007b6e3653ee675c340aede4eeb495d0f12640101afff8a47b11bf62e. La 6700-3-336 est la ponceuse sans aspiration, plateau 3 pouces et orbite 3/32 pouce. La version CV possède une autre configuration d’aspiration ; la 6700-5-336 reçoit un plateau 5 pouces. Le diamètre et le circuit d’aspiration restent liés au code exact. Le débit 1,6 CFM ne reçoit aucune qualification de régime ou de pression absente de la fiche."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-167-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-167-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-167-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-167-p1"
		],
		"editorial": [
			"ponceuse-orbitale-aircat-6700-3-336-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-orbitale-aircat-6700-3-336-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
