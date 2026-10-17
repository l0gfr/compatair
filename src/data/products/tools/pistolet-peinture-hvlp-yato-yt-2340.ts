import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-yato-yt-2340",
	"slug": "pistolet-peinture-hvlp-yato-yt-2340",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "Yato YT-2340",
	"brand": "Yato",
	"model": "YT-2340",
	"mpn": "YT-2340",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-yato-yt-2340.svg",
		"alt": "Repères techniques : Yato YT-2340",
		"sourceUrl": "https://toya24.pl/en-PL/products/-spray-gun-with-fluid-cup-hvlp-0-6l-1-4-mm-10006641",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yato-yt-2340",
		"label": "Référence YT-2340",
		"distinguishingAttributes": {
			"reference": "YT-2340",
			"Type": "HVLP",
			"Coating material flow (water)": "0.19-0.25 l/min"
		}
	},
	"editorial": {
		"overview": "La fiche du Yato YT-2340 sépare 410 L/min d’air requis et 0,19 à 0,25 L/min de produit mesuré à l’eau. Ces débits ne sont pas interchangeables. Le Vorel 80902 partage la buse de 1,4 mm et le godet de 0,6 L, mais publie une autre plage d’air, non directement comparable.",
		"verifiedFacts": [
			"Type : HVLP.",
			"Coating material flow (water) : 0.19-0.25 l/min.",
			"Nozzle diameter : 1.4 mm.",
			"Air supply hose inside diameter : 3/8\" (9.5 mm).",
			"Tank capacity : 0.6 l.",
			"Material : aluminum, stainless steel.",
			"Acoustic power : 85.0 dB(A).",
			"Vibrations : <2.5 m/s².",
			"Weight : 0.74 kg.",
			"Le maximum d’alimentation de 3 bar n’est pas une pression de mesure explicitement appariée aux 410 L/min. Le débit de produit mesuré à l’eau ne garantit pas celui d’une peinture de viscosité différente."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les pressions recommandées ou maximales de cette fiche ne sont pas des points de mesure de consommation.",
			"Sans régime explicite en charge et pression de mesure associée, la consommation éventuelle reste documentaire et ne permet aucun verdict conclusif.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué.",
			"Le besoin d’air reste non qualifié. Demander les conditions en action et conserver séparément débit de liquide, consommation d’air et pression maximale."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "HVLP",
			"evidenceIds": [
				"october5-tools-yato-tool-060-p1"
			]
		},
		{
			"label": "Coating material flow (water)",
			"value": "0.19-0.25 l/min",
			"evidenceIds": [
				"october5-tools-yato-tool-060-p1"
			]
		},
		{
			"label": "Nozzle diameter",
			"value": "1.4 mm",
			"evidenceIds": [
				"october5-tools-yato-tool-060-p1"
			]
		},
		{
			"label": "Air supply hose inside diameter",
			"value": "3/8\" (9.5 mm)",
			"evidenceIds": [
				"october5-tools-yato-tool-060-p1"
			]
		},
		{
			"label": "Tank capacity",
			"value": "0.6 l",
			"evidenceIds": [
				"october5-tools-yato-tool-060-p1"
			]
		},
		{
			"label": "Material",
			"value": "aluminum, stainless steel",
			"evidenceIds": [
				"october5-tools-yato-tool-060-p1"
			]
		},
		{
			"label": "Acoustic power",
			"value": "85.0 dB(A)",
			"evidenceIds": [
				"october5-tools-yato-tool-060-p1"
			]
		},
		{
			"label": "Vibrations",
			"value": "<2.5 m/s²",
			"evidenceIds": [
				"october5-tools-yato-tool-060-p1"
			]
		},
		{
			"label": "Weight",
			"value": "0.74 kg",
			"evidenceIds": [
				"october5-tools-yato-tool-060-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-yato-tool-060-p1",
			"sourceUrl": "https://toya24.pl/en-PL/products/-spray-gun-with-fluid-cup-hvlp-0-6l-1-4-mm-10006641",
			"sourceLabel": "Yato fiche technique officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bcb3c2b85f3fb48af49df5716c3a1e78e1811dac8535128792d47979beb3cf0f. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-yato-tool-060-p1"
		],
		"workingPressureBar": [
			"october5-tools-yato-tool-060-p1"
		],
		"demandExplanation": [
			"october5-tools-yato-tool-060-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
