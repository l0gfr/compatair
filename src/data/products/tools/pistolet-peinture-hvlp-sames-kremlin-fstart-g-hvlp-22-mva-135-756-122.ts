import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sames-kremlin-fstart-g-hvlp-22-mva-135-756-122",
	"slug": "pistolet-peinture-hvlp-sames-kremlin-fstart-g-hvlp-22-mva-135-756-122",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Sames Kremlin FStart G HVLP-22-Mva (réf. 135.756.122)",
	"brand": "Sames Kremlin",
	"model": "FStart G HVLP-22-Mva",
	"mpn": "135.756.122",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sames-kremlin-fstart-g-hvlp-22-mva-135-756-122.svg",
		"alt": "Repères techniques : Sames Kremlin FStart G HVLP-22-Mva (réf. 135.756.122)",
		"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sames-kremlin-fstart-g-hvlp-22-mva",
		"label": "Référence 135.756.122",
		"distinguishingAttributes": {
			"reference": "135.756.122",
			"Taille buse (mm)": "2.2",
			"Technologie de pulvérisation": "HVLP"
		}
	},
	"editorial": {
		"overview": "Sames Kremlin FStart G HVLP-22-Mva (réf. 135.756.122). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Taille buse (mm) : 2.2.",
			"Technologie de pulvérisation : HVLP.",
			"Consommation d’air (m³/h), régime non indiqué : 18,8.",
			"Largeur de jet à 20 cm (libellé fabricant) : M : 20-30 cm."
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
			"value": "2.2",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p36"
			]
		},
		{
			"label": "Technologie de pulvérisation",
			"value": "HVLP",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p36"
			]
		},
		{
			"label": "Consommation d’air (m³/h), régime non indiqué",
			"value": "18,8",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p36"
			]
		},
		{
			"label": "Largeur de jet à 20 cm (libellé fabricant)",
			"value": "M : 20-30 cm",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p36"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sames-airspray-catalog-p36",
			"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf#page=36",
			"sourceLabel": "Sames Kremlin : sames-airspray-catalog, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6b03f3e209e5ba2f66d1af3125fce83e0bc66316d718c30dbe6e397141a2b715. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sames-airspray-catalog-p36"
		],
		"workingPressureBar": [
			"october5-tools-sames-airspray-catalog-p36"
		],
		"demandExplanation": [
			"october5-tools-sames-airspray-catalog-p36"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
