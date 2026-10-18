import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-13-lvb-135-797-413",
	"slug": "pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-13-lvb-135-797-413",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Sames Kremlin FPro G HVLP-13-Lvb (réf. 135.797.413)",
	"brand": "Sames Kremlin",
	"model": "FPro G HVLP-13-Lvb",
	"mpn": "135.797.413",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau identifie le débit de produit, mais sa colonne de consommation d’air est vide ; aucun besoin d’air n’est calculé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-13-lvb-135-797-413.svg",
		"alt": "Repères techniques : Sames Kremlin FPro G HVLP-13-Lvb (réf. 135.797.413)",
		"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sames-kremlin-fpro-g-hvlp-13-lvb",
		"label": "Référence 135.797.413",
		"distinguishingAttributes": {
			"reference": "135.797.413",
			"Taille buse (mm)": "1.3",
			"Sortie produit (cc/min)": "126"
		}
	},
	"editorial": {
		"overview": "FPro G HVLP 13 LVB 135.797.413 : pistolet de 1,3 mm livré sans godet. Le tableau donne 126 cm³/min de produit, contre 105 pour le 135.797.412 de 1,2 mm. Le préfixe 136 désigne la livraison avec godet ; il faut conserver le code complet à la commande.",
		"verifiedFacts": [
			"Taille buse (mm) : 1.3.",
			"Sortie produit (cc/min) : 126.",
			"Technologie de pulvérisation : HVLP.",
			"Largeur de jet à 20 cm (libellé fabricant) : L : 30 cm – 40 cm.",
			"La colonne de consommation d’air est vide ; les 126 cm³/min concernent le produit pulvérisé."
		],
		"limitations": [
			"La colonne de consommation d’air est vide dans cette page. Le débit de peinture ne fournit pas un besoin d’air.",
			"Une valeur d’une autre configuration ne complète pas cette colonne ; le dimensionnement du compresseur reste indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Taille buse (mm)",
			"value": "1.3",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p27"
			]
		},
		{
			"label": "Sortie produit (cc/min)",
			"value": "126",
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
