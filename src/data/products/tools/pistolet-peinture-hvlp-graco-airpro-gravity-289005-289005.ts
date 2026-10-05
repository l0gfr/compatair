const product: unknown = {
	"id": "pistolet-peinture-hvlp-graco-airpro-gravity-289005-289005",
	"slug": "pistolet-peinture-hvlp-graco-airpro-gravity-289005-289005",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Graco AirPro gravity 289005 (réf. 289005)",
	"brand": "Graco",
	"model": "AirPro gravity 289005",
	"mpn": "289005",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-graco-airpro-gravity-289005-289005.svg",
		"alt": "Repères techniques : Graco AirPro gravity 289005 (réf. 289005)",
		"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312579/312579EN-N.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "graco-airpro-gravity-289005",
		"label": "Référence 289005",
		"distinguishingAttributes": {
			"reference": "289005",
			"Orifice Size in. (mm)": "0.055 (1.4)",
			"Spray technology": "HVLP"
		}
	},
	"editorial": {
		"overview": "Graco AirPro gravity 289005 (réf. 289005). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Orifice Size in. (mm) : 0.055 (1.4).",
			"Spray technology : HVLP.",
			"Supply : Gravity feed; gun without cup.",
			"Maximum air working pressure : 100 psi (0.7 MPa, 7 bar).",
			"Air inlet : 1/4 npsm (R1/4–19)."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le débit possède un point de pression explicite, mais pas de protocole de mesure établissant la position complète de la gâchette.",
			"Les MPN de versions avec godet standard ou PPS sont exclus ; la masse avec godet n’est pas appliquée au pistolet sans godet.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Orifice Size in. (mm)",
			"value": "0.055 (1.4)",
			"evidenceIds": [
				"october5-tools-graco-airpro-gravity-p3"
			]
		},
		{
			"label": "Spray technology",
			"value": "HVLP",
			"evidenceIds": [
				"october5-tools-graco-airpro-gravity-p3"
			]
		},
		{
			"label": "Supply",
			"value": "Gravity feed; gun without cup",
			"evidenceIds": [
				"october5-tools-graco-airpro-gravity-p3"
			]
		},
		{
			"label": "Maximum air working pressure",
			"value": "100 psi (0.7 MPa, 7 bar)",
			"evidenceIds": [
				"october5-tools-graco-airpro-gravity-p19"
			]
		},
		{
			"label": "Air inlet",
			"value": "1/4 npsm (R1/4–19)",
			"evidenceIds": [
				"october5-tools-graco-airpro-gravity-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-graco-airpro-gravity-p3",
			"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312579/312579EN-N.pdf#page=3",
			"sourceLabel": "Graco : graco-airpro-gravity, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 176f53198c2e8c419df1bad7cefdf04cc1aee261a63f25f91ed66d51ba02ac97. Aucun essai physique CompatAir."
		},
		{
			"id": "october5-tools-graco-airpro-gravity-p19",
			"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312579/312579EN-N.pdf#page=19",
			"sourceLabel": "Graco : graco-airpro-gravity, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 176f53198c2e8c419df1bad7cefdf04cc1aee261a63f25f91ed66d51ba02ac97. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-graco-airpro-gravity-p3"
		],
		"workingPressureBar": [
			"october5-tools-graco-airpro-gravity-p19"
		],
		"demandExplanation": [
			"october5-tools-graco-airpro-gravity-p3",
			"october5-tools-graco-airpro-gravity-p19"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
