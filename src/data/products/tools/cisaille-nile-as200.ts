const product: unknown = {
	"id": "cisaille-nile-as200",
	"slug": "cisaille-nile-as200",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Nile AS200",
	"brand": "Nile",
	"model": "AS200",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-nile-as200.svg",
		"alt": "Repères techniques : Nile AS200",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-as200",
		"label": "Modèle AS200, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "AS200",
			"Longueur (mm)": "182",
			"Masse sans lame (g)": "500"
		}
	},
	"editorial": {
		"overview": "Nile AS200. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Longueur (mm) : 182.",
			"Masse sans lame (g) : 500.",
			"Section de poignée (mm) : 45.",
			"Consommation (cm³/course), référence de volume non indiquée : 227.",
			"Plage de pression (MPa) : 0.5~0.6."
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
			"value": "182",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		},
		{
			"label": "Masse sans lame (g)",
			"value": "500",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		},
		{
			"label": "Section de poignée (mm)",
			"value": "45",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		},
		{
			"label": "Consommation (cm³/course), référence de volume non indiquée",
			"value": "227",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		},
		{
			"label": "Plage de pression (MPa)",
			"value": "0.5~0.6",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-nile-2018-p42",
			"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf#page=42",
			"sourceLabel": "Nile : nile-2018, page PDF 42",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 bb8167a334ce062d9e67e8f7ba6f774c9ce4de906b8b4d69c97ebfe1c0f8dfe2. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-nile-2018-p42"
		],
		"workingPressureBar": [
			"october5-tools-nile-2018-p42"
		],
		"demandExplanation": [
			"october5-tools-nile-2018-p42"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
