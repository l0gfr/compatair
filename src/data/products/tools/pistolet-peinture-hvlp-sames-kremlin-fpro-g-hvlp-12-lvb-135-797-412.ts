import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-12-lvb-135-797-412",
	"slug": "pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-12-lvb-135-797-412",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Sames Kremlin FPro G HVLP-12-Lvb (réf. 135.797.412)",
	"brand": "Sames Kremlin",
	"model": "FPro G HVLP-12-Lvb",
	"mpn": "135.797.412",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau identifie le pistolet et son débit de produit, mais sa colonne de consommation d’air est vide ; aucun besoin d’air n’est calculé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-12-lvb-135-797-412.svg",
		"alt": "Repères techniques : Sames Kremlin FPro G HVLP-12-Lvb (réf. 135.797.412)",
		"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sames-kremlin-fpro-g-hvlp-12-lvb",
		"label": "Référence 135.797.412",
		"distinguishingAttributes": {
			"reference": "135.797.412",
			"Taille buse (mm)": "1.2",
			"Sortie produit (cc/min)": "105"
		}
	},
	"editorial": {
		"overview": "FPro G HVLP-12-Lvb, référence 135.797.412 : buse de 1,2 mm, version sans godet. Le tableau donne un débit de produit de 105 cm³/min et une largeur de jet de 30 à 40 cm mesurée à 20 cm. Le code 136.797.412 désigne la version avec godet ; le 135.797.413 est le voisin de 1,3 mm, annoncé à 126 cm³/min de produit.",
		"verifiedFacts": [
			"Taille buse (mm) : 1.2.",
			"Sortie produit (cc/min) : 105.",
			"Technologie de pulvérisation : HVLP.",
			"Largeur de jet à 20 cm (libellé fabricant) : L : 30 cm – 40 cm."
		],
		"limitations": [
			"La colonne de consommation d’air de cette page est vide. Les 105 cm³/min décrivent le produit pulvérisé et ne fournissent aucun besoin d’air.",
			"La configuration 135.797.412 et les têtes ou kits de buse sont des objets distincts du catalogue.",
			"Le tableau ne fournit pas de point pression–consommation permettant de dimensionner le compresseur ; la compatibilité reste indéterminée.",
			"Une consommation publiée pour la famille ne complète pas la colonne vide de cette configuration."
		]
	},
	"specifications": [
		{
			"label": "Taille buse (mm)",
			"value": "1.2",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p27"
			]
		},
		{
			"label": "Sortie produit (cc/min)",
			"value": "105",
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
