const product: unknown = {
	"id": "cisaille-nile-am3",
	"slug": "cisaille-nile-am3",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Nile AM3",
	"brand": "Nile",
	"model": "AM3",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-nile-am3.svg",
		"alt": "Repères techniques : Nile AM3",
		"sourceUrl": "https://muromototekko.com/wp/wp-content/themes/muromototekko/assets/pdf/catalog2018.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "nile-am3",
		"label": "Modèle AM3, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "AM3",
			"Masse sans lame (g)": "103",
			"Dimension A (mm)": "90"
		}
	},
	"editorial": {
		"overview": "Nile AM3. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Masse sans lame (g) : 103.",
			"Dimension A (mm) : 90.",
			"Dimension B (mm) : 20."
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
			"label": "Masse sans lame (g)",
			"value": "103",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		},
		{
			"label": "Dimension A (mm)",
			"value": "90",
			"evidenceIds": [
				"october5-tools-nile-2018-p42"
			]
		},
		{
			"label": "Dimension B (mm)",
			"value": "20",
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
