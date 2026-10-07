import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-3832",
	"slug": "meuleuse-gatx-gp-3832",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-3832",
	"brand": "GATX",
	"model": "GP-3832",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-3832.svg",
		"alt": "Repères techniques : GATX GP-3832",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-3832",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-3832",
		"label": "Modèle GP-3832, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-3832",
			"Free Speed": "25,000 RPM",
			"Collet Size": "6 mm"
		}
	},
	"editorial": {
		"overview": "GATX GP-3832. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 25,000 RPM.",
			"Collet Size : 6 mm.",
			"Air Consumption : 178 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 6.35 mm (1/4\").",
			"Min. Hose Size : 10 mm.",
			"Dia. x Length : 38 x 155 mm.",
			"Net Weight : 0.5 kg."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le constructeur indique une consommation d’air sans préciser systématiquement marche à vide, moyenne ou charge. Les valeurs non qualifiées ne reçoivent pas de verdict conclusif.",
			"Une pression de service indiquée séparément ne devient pas automatiquement une pression de mesure du débit. La liste web ne garantit pas une disponibilité en France.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Free Speed",
			"value": "25,000 RPM",
			"evidenceIds": [
				"october5-tools-gatx-product-7279-p1"
			]
		},
		{
			"label": "Collet Size",
			"value": "6 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7279-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "178 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7279-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7279-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "6.35 mm (1/4\")",
			"evidenceIds": [
				"october5-tools-gatx-product-7279-p1"
			]
		},
		{
			"label": "Min. Hose Size",
			"value": "10 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7279-p1"
			]
		},
		{
			"label": "Dia. x Length",
			"value": "38 x 155 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7279-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.5 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7279-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7279-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-3832",
			"sourceLabel": "GATX : fiche technique GP-3832",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 1de9ae7c89e301b9ac32b787b2b2963328bb747eb251887d38fb6500b6ff4271. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7279-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7279-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7279-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
