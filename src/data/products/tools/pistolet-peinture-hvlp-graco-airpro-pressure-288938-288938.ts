import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938",
	"slug": "pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Graco AirPro pressure 288938 (réf. 288938)",
	"brand": "Graco",
	"model": "AirPro pressure 288938",
	"mpn": "288938",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938.svg",
		"alt": "Repères techniques : Graco AirPro pressure 288938 (réf. 288938)",
		"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312414/312414EN-U.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "graco-airpro-pressure-288938",
		"label": "Référence 288938",
		"distinguishingAttributes": {
			"reference": "288938",
			"Orifice Size in. (mm)": "0.055 (1.4)",
			"Spray technology": "HVLP"
		}
	},
	"editorial": {
		"overview": "AirPro 288938 : configuration HVLP General Metal à orifice de 1,4 mm. À ce même diamètre, 288931 désigne la version conventionnelle, 288945 la version Compliant et 288953 la ligne à embout inox. La technologie, l’application et les pièces doivent donc être vérifiées avec la référence complète, sans choisir sur le seul diamètre ni sur le maximum mécanique de 7 bar.",
		"verifiedFacts": [
			"Orifice Size in. (mm) : 0.055 (1.4).",
			"Spray technology : HVLP.",
			"Application : General Metal.",
			"Maximum air working pressure : 100 psi (0.7 MPa, 7 bar).",
			"Maximum fluid working pressure : 300 psi (2.1 MPa, 21 bar).",
			"Weight : 410 g.",
			"Max. HVLP/Compliant Air Pressure psi (MPa, bar) : 19 (0.13, 1.3).",
			"Le tableau General Metal associe 1,4 mm aux codes 288931 conventionnel, 288938 HVLP et 288945 Compliant.",
			"La ligne General Metal with Stainless Steel Tip du même diamètre identifie 288953 en HVLP ; son matériau n’est pas attribué au 288938.",
			"Pour le 288938 HVLP, le tableau indique un plafond de 1,3 bar ; le maximum mécanique général de 7 bar ne remplace pas ce plafond."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"La consommation est liée à une technologie et à une application. Le protocole de mesure ne précise pas explicitement la gâchette entièrement tirée ; le régime ne reçoit donc pas une qualification en charge.",
			"Les variantes à débit accru 24U187 et 24U188 et la version haute production 24D472 ne reprennent pas automatiquement le débit des autres configurations.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Orifice Size in. (mm)",
			"value": "0.055 (1.4)",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p3"
			]
		},
		{
			"label": "Spray technology",
			"value": "HVLP",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p3"
			]
		},
		{
			"label": "Application",
			"value": "General Metal",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p3"
			]
		},
		{
			"label": "Maximum air working pressure",
			"value": "100 psi (0.7 MPa, 7 bar)",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p23"
			]
		},
		{
			"label": "Maximum fluid working pressure",
			"value": "300 psi (2.1 MPa, 21 bar)",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p23"
			]
		},
		{
			"label": "Weight",
			"value": "410 g",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p23"
			]
		},
		{
			"label": "Max. HVLP/Compliant Air Pressure psi (MPa, bar)",
			"value": "19 (0.13, 1.3)",
			"evidenceIds": [
				"october5-tools-graco-airpro-pressure-p3"
			]
		},
		{
			"label": "Références du même diamètre, technologies distinctes",
			"value": "288931 conventionnel ; 288938 HVLP ; 288945 Compliant",
			"evidenceIds": [
				"reserved-followup-20261025-pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938-1",
				"reserved-followup-20261025-pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938-2"
			]
		},
		{
			"label": "Variante explicitement à embout inox",
			"value": "288953 HVLP, 1,4 mm, ligne distincte",
			"evidenceIds": [
				"reserved-followup-20261025-pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938-1",
				"reserved-followup-20261025-pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938-2"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-graco-airpro-pressure-p3",
			"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312414/312414EN-U.pdf#page=3",
			"sourceLabel": "Graco : graco-airpro-pressure, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 db686f2919e70169aab5175ac84b40c5d306d31bd483f4d3723f6b971a0086cb. Aucun essai physique CompatAir."
		},
		{
			"id": "october5-tools-graco-airpro-pressure-p23",
			"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312414/312414EN-U.pdf#page=23",
			"sourceLabel": "Graco : graco-airpro-pressure, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 db686f2919e70169aab5175ac84b40c5d306d31bd483f4d3723f6b971a0086cb. Aucun essai physique CompatAir."
		},
		{
			"id": "reserved-followup-20261025-pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938-1",
			"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312414/312414EN-U.pdf#page=3",
			"sourceLabel": "Relecture ciblée de la référence, des variantes et des pièces, 25 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Document lu le 25 octobre 2026 ; réponse SHA-256 db686f2919e70169aab5175ac84b40c5d306d31bd483f4d3723f6b971a0086cb. Portée : identité, références de pièces et limites décrites dans la fiche. Aucun essai physique CompatAir."
		},
		{
			"id": "reserved-followup-20261025-pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938-2",
			"sourceUrl": "https://www.graco.com/content/dam/graco/tech_documents/manuals/312/312414/312414EN-U.pdf#page=23",
			"sourceLabel": "Relecture ciblée de la référence, des variantes et des pièces, 25 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Document lu le 25 octobre 2026 ; réponse SHA-256 db686f2919e70169aab5175ac84b40c5d306d31bd483f4d3723f6b971a0086cb. Portée : identité, références de pièces et limites décrites dans la fiche. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-graco-airpro-pressure-p3"
		],
		"workingPressureBar": [
			"october5-tools-graco-airpro-pressure-p23",
			"october5-tools-graco-airpro-pressure-p3"
		],
		"demandExplanation": [
			"october5-tools-graco-airpro-pressure-p3",
			"october5-tools-graco-airpro-pressure-p23"
		],
		"editorial": [
			"reserved-followup-20261025-pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938-1",
			"reserved-followup-20261025-pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938-2"
		],
		"specifications": [
			"reserved-followup-20261025-pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938-1",
			"reserved-followup-20261025-pistolet-peinture-hvlp-graco-airpro-pressure-288938-288938-2"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
