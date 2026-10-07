import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-gatx-gp-2700",
	"slug": "meuleuse-gatx-gp-2700",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "GATX GP-2700",
	"brand": "GATX",
	"model": "GP-2700",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-gatx-gp-2700.svg",
		"alt": "Repères techniques : GATX GP-2700",
		"sourceUrl": "https://gatx.tools/en-us/product/GP-2700",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gatx-gp-2700",
		"label": "Modèle GP-2700, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "GP-2700",
			"Free Speed": "30,000 rpm",
			"Capacity(Option)": "Steel, Alum, Brass: C0. 1 - C2 mm (13 Gauge) ; Stainless steel: C0.1 - C1.2mm (18 Gauge) or Steel, Alum, Brass: R0.1 - R2.0mm (13 Gauge) ; Stainless steel: R0.1 - R1.2mm (18 Gauge)"
		}
	},
	"editorial": {
		"overview": "GATX GP-2700. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Free Speed : 30,000 rpm.",
			"Capacity(Option) : Steel, Alum, Brass: C0. 1 - C2 mm (13 Gauge) ; Stainless steel: C0.1 - C1.2mm (18 Gauge) or Steel, Alum, Brass: R0.1 - R2.0mm (13 Gauge) ; Stainless steel: R0.1 - R1.2mm (18 Gauge).",
			"Exhaust : Rear.",
			"Air Consumption : 65 l/min.",
			"Air Pressure : 6.2 bar (90 psi).",
			"Air Inlet : 1/4\".",
			"Air Hose : 3/8\".",
			"Length x Height : 140 x 65 mm.",
			"Net Weight : 0.46 kg."
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
			"value": "30,000 rpm",
			"evidenceIds": [
				"october5-tools-gatx-product-7127-p1"
			]
		},
		{
			"label": "Capacity(Option)",
			"value": "Steel, Alum, Brass: C0. 1 - C2 mm (13 Gauge) ; Stainless steel: C0.1 - C1.2mm (18 Gauge) or Steel, Alum, Brass: R0.1 - R2.0mm (13 Gauge) ; Stainless steel: R0.1 - R1.2mm (18 Gauge)",
			"evidenceIds": [
				"october5-tools-gatx-product-7127-p1"
			]
		},
		{
			"label": "Exhaust",
			"value": "Rear",
			"evidenceIds": [
				"october5-tools-gatx-product-7127-p1"
			]
		},
		{
			"label": "Air Consumption",
			"value": "65 l/min",
			"evidenceIds": [
				"october5-tools-gatx-product-7127-p1"
			]
		},
		{
			"label": "Air Pressure",
			"value": "6.2 bar (90 psi)",
			"evidenceIds": [
				"october5-tools-gatx-product-7127-p1"
			]
		},
		{
			"label": "Air Inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7127-p1"
			]
		},
		{
			"label": "Air Hose",
			"value": "3/8\"",
			"evidenceIds": [
				"october5-tools-gatx-product-7127-p1"
			]
		},
		{
			"label": "Length x Height",
			"value": "140 x 65 mm",
			"evidenceIds": [
				"october5-tools-gatx-product-7127-p1"
			]
		},
		{
			"label": "Net Weight",
			"value": "0.46 kg",
			"evidenceIds": [
				"october5-tools-gatx-product-7127-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-gatx-product-7127-p1",
			"sourceUrl": "https://gatx.tools/en-us/product/GP-2700",
			"sourceLabel": "GATX : fiche technique GP-2700",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 218e1c18e895284d884ade969037b871c35a5b1bca7e8f74870fcda32e8f0ac5. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-gatx-product-7127-p1"
		],
		"workingPressureBar": [
			"october5-tools-gatx-product-7127-p1"
		],
		"demandExplanation": [
			"october5-tools-gatx-product-7127-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
