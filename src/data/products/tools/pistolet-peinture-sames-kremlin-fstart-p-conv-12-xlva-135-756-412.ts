import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-sames-kremlin-fstart-p-conv-12-xlva-135-756-412",
	"slug": "pistolet-peinture-sames-kremlin-fstart-p-conv-12-xlva-135-756-412",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Sames Kremlin FStart P CONV-12-XLva (réf. 135.756.412)",
	"brand": "Sames Kremlin",
	"model": "FStart P CONV-12-XLva",
	"mpn": "135.756.412",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-sames-kremlin-fstart-p-conv-12-xlva-135-756-412.svg",
		"alt": "Repères techniques : Sames Kremlin FStart P CONV-12-XLva (réf. 135.756.412)",
		"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sames-kremlin-fstart-p-conv-12-xlva",
		"label": "Référence 135.756.412",
		"distinguishingAttributes": {
			"reference": "135.756.412",
			"Taille buse (mm)": "1.2",
			"Technologie de pulvérisation": "CONV"
		}
	},
	"editorial": {
		"overview": "Sames Kremlin FStart P CONV-12-XLva (réf. 135.756.412). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Taille buse (mm) : 1.2.",
			"Technologie de pulvérisation : CONV.",
			"Consommation d’air (m³/h), régime non indiqué : 18,8.",
			"Largeur de jet à 20 cm (libellé fabricant) : XL : > 40 cm."
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
			"value": "1.2",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p32"
			]
		},
		{
			"label": "Technologie de pulvérisation",
			"value": "CONV",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p32"
			]
		},
		{
			"label": "Consommation d’air (m³/h), régime non indiqué",
			"value": "18,8",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p32"
			]
		},
		{
			"label": "Largeur de jet à 20 cm (libellé fabricant)",
			"value": "XL : > 40 cm",
			"evidenceIds": [
				"october5-tools-sames-airspray-catalog-p32"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-sames-airspray-catalog-p32",
			"sourceUrl": "https://cdn.quable.com/sames/94e0c606-6b89-4092-a995-front/original/Catalogue_Sames-Kremlin-Airspray_FR_V5-3SA_2021.pdf#page=32",
			"sourceLabel": "Sames Kremlin : sames-airspray-catalog, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 6b03f3e209e5ba2f66d1af3125fce83e0bc66316d718c30dbe6e397141a2b715. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-sames-airspray-catalog-p32"
		],
		"workingPressureBar": [
			"october5-tools-sames-airspray-catalog-p32"
		],
		"demandExplanation": [
			"october5-tools-sames-airspray-catalog-p32"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
