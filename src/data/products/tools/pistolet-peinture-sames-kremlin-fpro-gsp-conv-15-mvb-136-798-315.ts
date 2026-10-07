import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-sames-kremlin-fpro-gsp-conv-15-mvb-136-798-315",
	"slug": "pistolet-peinture-sames-kremlin-fpro-gsp-conv-15-mvb-136-798-315",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Sames Kremlin FPRO GSP CONV-15-Mvb (réf. 136.798.315)",
	"brand": "Sames Kremlin",
	"model": "FPRO GSP CONV-15-Mvb",
	"mpn": "136.798.315",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-sames-kremlin-fpro-gsp-conv-15-mvb-136-798-315.svg",
		"alt": "Repères techniques : Sames Kremlin FPRO GSP CONV-15-Mvb (réf. 136.798.315)",
		"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sames-kremlin-fpro-gsp-conv-15-mvb",
		"label": "Référence 136.798.315",
		"distinguishingAttributes": {
			"reference": "136.798.315",
			"Taille buse (mm)": "1,5",
			"Sortie produit (cc/min)": "170"
		}
	},
	"editorial": {
		"overview": "Sames Kremlin FPRO GSP CONV-15-Mvb (réf. 136.798.315). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Taille buse (mm) : 1,5.",
			"Sortie produit (cc/min) : 170.",
			"Technologie de pulvérisation : CONV.",
			"Largeur de jet à 20 cm (libellé fabricant) : M: 20cm-30cm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le tableau de configuration fournit les consommations par buse, mais n’associe pas un point de pression de mesure complet à chaque débit. Les plages recommandées ne deviennent pas des pressions de mesure.",
			"Les têtes seules, projecteurs, buses, packs et pistolets Solo incomplets sont exclus. Lorsqu’avec/sans godet sont imprimés, une seule identité de pistolet est retenue.",
			"Les consommations de famille et les consommations de certaines configurations diffèrent. Les valeurs originales sont conservées ; aucune harmonisation ni verdict conclusif.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Taille buse (mm)",
			"value": "1,5",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p29"
			]
		},
		{
			"label": "Sortie produit (cc/min)",
			"value": "170",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p29"
			]
		},
		{
			"label": "Technologie de pulvérisation",
			"value": "CONV",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p29"
			]
		},
		{
			"label": "Largeur de jet à 20 cm (libellé fabricant)",
			"value": "M: 20cm-30cm",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sames-airspray-catalog-p29",
			"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf#page=29",
			"sourceLabel": "Sames Kremlin : sames-airspray-catalog, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6b03f3e209e5ba2f66d1af3125fce83e0bc66316d718c30dbe6e397141a2b715. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sames-airspray-catalog-p29"
		],
		"workingPressureBar": [
			"october5-tools-sames-airspray-catalog-p29"
		],
		"demandExplanation": [
			"october5-tools-sames-airspray-catalog-p29"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
