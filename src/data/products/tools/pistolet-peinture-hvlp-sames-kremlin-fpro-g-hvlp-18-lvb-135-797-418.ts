import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-18-lvb-135-797-418",
	"slug": "pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-18-lvb-135-797-418",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Sames Kremlin FPro G HVLP-18-Lvb (réf. 135.797.418)",
	"brand": "Sames Kremlin",
	"model": "FPro G HVLP-18-Lvb",
	"mpn": "135.797.418",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La colonne de consommation d’air du tableau de cette configuration est vide. Aucun débit n’est déduit du débit produit ni transféré depuis une autre tête.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-18-lvb-135-797-418.svg",
		"alt": "Repères techniques : Sames Kremlin FPro G HVLP-18-Lvb (réf. 135.797.418)",
		"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sames-kremlin-fpro-g-hvlp-18-lvb",
		"label": "Référence 135.797.418",
		"distinguishingAttributes": {
			"reference": "135.797.418",
			"Taille buse (mm)": "1.8",
			"Sortie produit (cc/min)": "197"
		}
	},
	"editorial": {
		"overview": "FPro G HVLP-18-Lvb 135.797.418 : pistolet sans godet, buse de 1,8 mm et sortie produit annoncée de 197 cm³/min. La 135.797.422 en 2,2 mm donne 280 cm³/min ; les deux lignes annoncent un jet de 30 à 40 cm à 20 cm. Le code avec godet commence par 136. La colonne d’air étant vide sur cette page, le débit de peinture et la référence de fourniture aident au choix sans inventer le besoin du compresseur.",
		"verifiedFacts": [
			"Taille buse (mm) : 1.8.",
			"Sortie produit (cc/min) : 197.",
			"Technologie de pulvérisation : HVLP.",
			"Largeur de jet à 20 cm (libellé fabricant) : L : 30 cm – 40 cm."
		],
		"limitations": [
			"Aucun débit de famille ou d’une autre tête ne complète la cellule vide de cette configuration. Le godet et les auxiliaires doivent correspondre à la fourniture réellement commandée.",
			"La colonne d’air est vide ; une consommation de famille ne complète pas le point manquant.",
			"Revue documentaire, sans essai physique ni disponibilité commerciale actuelle vérifiée."
		]
	},
	"specifications": [
		{
			"label": "Taille buse (mm)",
			"value": "1.8",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p27"
			]
		},
		{
			"label": "Sortie produit (cc/min)",
			"value": "197",
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
