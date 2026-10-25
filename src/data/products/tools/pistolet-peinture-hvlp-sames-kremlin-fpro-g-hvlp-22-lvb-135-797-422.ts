import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-22-lvb-135-797-422",
	"slug": "pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-22-lvb-135-797-422",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Sames Kremlin FPro G HVLP-22-Lvb (réf. 135.797.422)",
	"brand": "Sames Kremlin",
	"model": "FPro G HVLP-22-Lvb",
	"mpn": "135.797.422",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau identifie la référence, le débit de produit et le jet, mais laisse sa consommation d’air vide. Aucun couple débit d’air/pression de mesure n’est disponible pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sames-kremlin-fpro-g-hvlp-22-lvb-135-797-422.svg",
		"alt": "Repères techniques : Sames Kremlin FPro G HVLP-22-Lvb (réf. 135.797.422)",
		"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sames-kremlin-fpro-g-hvlp-22-lvb",
		"label": "Référence 135.797.422",
		"distinguishingAttributes": {
			"reference": "135.797.422",
			"Taille buse (mm)": "2.2",
			"Sortie produit (cc/min)": "280"
		}
	},
	"editorial": {
		"overview": "FPro G HVLP-22-Lvb, référence 135.797.422 : version sans godet à buse 2,2 mm. Le tableau annonce 280 cm³/min de produit, contre 105 cm³/min pour la 135.797.412 en 1,2 mm ; les deux configurations ont un jet de 30 à 40 cm à 20 cm de distance. La différence porte donc sur le débit de produit publié, sans promesse de finition ou de consommation d’air. La colonne d’air reste vide. La 136.797.422 correspond à la version avec godet et ne remplace pas cette référence.",
		"verifiedFacts": [
			"Taille buse (mm) : 2.2.",
			"Sortie produit (cc/min) : 280.",
			"Technologie de pulvérisation : HVLP.",
			"Largeur de jet à 20 cm (libellé fabricant) : L : 30 cm – 40 cm."
		],
		"limitations": [
			"La colonne de consommation d’air est vide pour ces configurations de la famille FPro G. Les 280 cm³/min décrivent le produit pulvérisé, jamais l’air. Aucun débit d’air propre à cette buse ni aucune pression de mesure associée ne sont confirmés.",
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les têtes seules, projecteurs, buses, packs et pistolets Solo incomplets sont exclus. Lorsqu’avec/sans godet sont imprimés, une seule identité de pistolet est retenue.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Taille buse (mm)",
			"value": "2.2",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p27"
			]
		},
		{
			"label": "Sortie produit (cc/min)",
			"value": "280",
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
