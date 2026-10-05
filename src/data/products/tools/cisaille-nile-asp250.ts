const product: unknown = {
	"id": "cisaille-nile-asp250",
	"slug": "cisaille-nile-asp250",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Nile ASP250",
	"brand": "Nile",
	"model": "ASP250",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-nile-asp250.svg",
		"alt": "Repères techniques : Nile ASP250",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-asp250",
		"label": "Modèle ASP250, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "ASP250",
			"Longueur (mm)": "269",
			"Masse sans lame (g)": "720"
		}
	},
	"editorial": {
		"overview": "Nile ASP250. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Longueur (mm) : 269.",
			"Masse sans lame (g) : 720.",
			"Section de poignée (mm) : 45.",
			"Consommation (cm³/course), référence de volume non indiquée : 508.",
			"Plage de pression (MPa) : 0.4~0.6."
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
			"value": "269",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		},
		{
			"label": "Masse sans lame (g)",
			"value": "720",
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
			"value": "508",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		},
		{
			"label": "Plage de pression (MPa)",
			"value": "0.4~0.6",
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
