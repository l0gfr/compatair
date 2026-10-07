import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-nile-psh10",
	"slug": "cisaille-nile-psh10",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Nile PSH10",
	"brand": "Nile",
	"model": "PSH10",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-nile-psh10.svg",
		"alt": "Repères techniques : Nile PSH10",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-psh10",
		"label": "Modèle PSH10, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "PSH10",
			"Longueur (mm)": "224",
			"Masse sans lame (g)": "1,230"
		}
	},
	"editorial": {
		"overview": "Nile PSH10. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Longueur (mm) : 224.",
			"Masse sans lame (g) : 1,230.",
			"Section de poignée (mm) : 40.",
			"Vitesse de coupe publiée (min.) : 1,900.",
			"Consommation publiée (L/min) : 450.",
			"Plage de pression (MPa) : 0.55~0.65."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les cm³/course ne sont pas explicitement référencés aux conditions normales ; aucune conversion en débit continu n’est faite. Pour les outils rotatifs, la pression et le régime du débit ne sont pas liés par le tableau.",
			"Les lames et autres accessoires sont exclus ; disponibilité et notice de la version livrée à confirmer.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Longueur (mm)",
			"value": "224",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		},
		{
			"label": "Masse sans lame (g)",
			"value": "1,230",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		},
		{
			"label": "Section de poignée (mm)",
			"value": "40",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		},
		{
			"label": "Vitesse de coupe publiée (min.)",
			"value": "1,900",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		},
		{
			"label": "Consommation publiée (L/min)",
			"value": "450",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		},
		{
			"label": "Plage de pression (MPa)",
			"value": "0.55~0.65",
			"evidenceIds": [
				"october5-tools-nile-2018-p43"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-nile-2018-p43",
			"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf#page=43",
			"sourceLabel": "Nile : nile-2018, page PDF 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bb8167a334ce062d9e67e8f7ba6f774c9ce4de906b8b4d69c97ebfe1c0f8dfe2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-nile-2018-p43"
		],
		"workingPressureBar": [
			"october5-tools-nile-2018-p43"
		],
		"demandExplanation": [
			"october5-tools-nile-2018-p43"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
