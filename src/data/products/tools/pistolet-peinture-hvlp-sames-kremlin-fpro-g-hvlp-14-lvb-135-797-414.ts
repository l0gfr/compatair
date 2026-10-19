import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-14-lvb-135-797-414",
	"slug": "pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-14-lvb-135-797-414",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Sames Kremlin FPro G HVLP-14-Lvb (réf. 135.797.414)",
	"brand": "Sames Kremlin",
	"model": "FPro G HVLP-14-Lvb",
	"mpn": "135.797.414",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La colonne de consommation d’air du tableau de cette configuration est vide. Aucun débit n’est déduit du débit de peinture ni transféré depuis une autre tête.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-14-lvb-135-797-414.svg",
		"alt": "Repères techniques : Sames Kremlin FPro G HVLP-14-Lvb (réf. 135.797.414)",
		"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sames-kremlin-fpro-g-hvlp-14-lvb",
		"label": "Référence 135.797.414",
		"distinguishingAttributes": {
			"reference": "135.797.414",
			"Taille buse (mm)": "1.4",
			"Sortie produit (cc/min)": "150"
		}
	},
	"editorial": {
		"overview": "FPro G HVLP 14 LVB 135.797.414 : pistolet sans godet, buse de 1,4 mm et sortie produit de 150 cm³/min. Le 135.797.413 de 1,3 mm publie 126 cm³/min. La référence 136.797.414 correspond à la livraison avec godet ; le code complet doit donc accompagner le devis.",
		"verifiedFacts": [
			"Taille buse (mm) : 1.4.",
			"Sortie produit (cc/min) : 150.",
			"Technologie de pulvérisation : HVLP.",
			"Largeur de jet à 20 cm (libellé fabricant) : L : 30 cm – 40 cm."
		],
		"limitations": [
			"La colonne d’air est vide sur cette page. Les débits de peinture et la largeur de jet de 30 à 40 cm ne permettent pas de reconstituer une consommation d’air.",
			"La plage de service ne devient pas une pression de mesure de consommation. Aucun débit d’une autre configuration n’est transféré.",
			"La livraison avec ou sans godet doit suivre le code complet ; aucun essai physique ou stock actuel n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Taille buse (mm)",
			"value": "1.4",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p27"
			]
		},
		{
			"label": "Sortie produit (cc/min)",
			"value": "150",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p27"
			]
		},
		{
			"label": "Technologie de pulvérisation",
			"value": "HVLP",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p27"
			]
		},
		{
			"label": "Largeur de jet à 20 cm (libellé fabricant)",
			"value": "L : 30 cm – 40 cm",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sames-airspray-catalog-p27",
			"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf#page=27",
			"sourceLabel": "Sames Kremlin : sames-airspray-catalog, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6b03f3e209e5ba2f66d1af3125fce83e0bc66316d718c30dbe6e397141a2b715. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sames-airspray-catalog-p27"
		],
		"workingPressureBar": [
			"october5-tools-sames-airspray-catalog-p27"
		],
		"demandExplanation": [
			"october5-tools-sames-airspray-catalog-p27"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
