const product: unknown = {
	"id": "meuleuse-pacific-pneumatic-9160",
	"slug": "meuleuse-pacific-pneumatic-9160",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Pacific Pneumatic 9160",
	"brand": "Pacific Pneumatic",
	"model": "9160",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-pacific-pneumatic-9160.svg",
		"alt": "Repères techniques : Pacific Pneumatic 9160",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-9160",
		"label": "Modèle 9160, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "9160",
			"RPM": "7500",
			"Length (inch)": "13 1/8"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic 9160. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"RPM : 7500.",
			"Length (inch) : 13 1/8.",
			"Weight (lb) : 8.40.",
			"Air Inlet NPT (inch) : 3/8."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Le catalogue ancien ne constitue pas une preuve de disponibilité actuelle.",
			"Les tableaux sélectionnés ne documentent pas un couple consommation, pression et régime permettant un verdict calculé.",
			"Les options HT, manches B/G et accessoires ne produisent aucune combinaison de références supplémentaire.",
			"Les fractions en pouces sont conservées comme nombres mixtes d’après l’espacement des glyphes du PDF ; elles ne sont pas transformées en nombre décimal.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "RPM",
			"value": "7500",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p7"
			]
		},
		{
			"label": "Length (inch)",
			"value": "13 1/8",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p7"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "8.40",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p7"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "3/8",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p7",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=7",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p7"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p7"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p7"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
