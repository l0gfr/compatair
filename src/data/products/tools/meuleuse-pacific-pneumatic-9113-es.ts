const product: unknown = {
	"id": "meuleuse-pacific-pneumatic-9113-es",
	"slug": "meuleuse-pacific-pneumatic-9113-es",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Pacific Pneumatic 9113-ES",
	"brand": "Pacific Pneumatic",
	"model": "9113-ES",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-pacific-pneumatic-9113-es.svg",
		"alt": "Repères techniques : Pacific Pneumatic 9113-ES",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-9113-es",
		"label": "Modèle 9113-ES, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "9113-ES",
			"RPM": "SIDE",
			"Length (inch)": "11 1/8"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic 9113-ES. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"RPM : SIDE.",
			"Length (inch) : 11 1/8.",
			"Weight (lb) : 3.40.",
			"Air Inlet NPT (inch) : 1/4."
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
			"value": "SIDE",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p6"
			]
		},
		{
			"label": "Length (inch)",
			"value": "11 1/8",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p6"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "3.40",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p6"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p6",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=6",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p6"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p6"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p6"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
