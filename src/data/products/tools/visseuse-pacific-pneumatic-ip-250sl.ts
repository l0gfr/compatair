const product: unknown = {
	"id": "visseuse-pacific-pneumatic-ip-250sl",
	"slug": "visseuse-pacific-pneumatic-ip-250sl",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Pacific Pneumatic IP-250SL",
	"brand": "Pacific Pneumatic",
	"model": "IP-250SL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-pacific-pneumatic-ip-250sl.svg",
		"alt": "Repères techniques : Pacific Pneumatic IP-250SL",
		"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "pacific-pneumatic-ip-250sl",
		"label": "Modèle IP-250SL, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "IP-250SL",
			"RPM": "10000",
			"Length (inch)": "6 1/2"
		}
	},
	"editorial": {
		"overview": "Pacific Pneumatic IP-250SL. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"RPM : 10000.",
			"Length (inch) : 6 1/2.",
			"Weight (lb) : 2.00.",
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
			"value": "10000",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p14"
			]
		},
		{
			"label": "Length (inch)",
			"value": "6 1/2",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p14"
			]
		},
		{
			"label": "Weight (lb)",
			"value": "2.00",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p14"
			]
		},
		{
			"label": "Air Inlet NPT (inch)",
			"value": "1/4",
			"evidenceIds": [
				"october5-tools-pacific-catalog-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-pacific-catalog-p14",
			"sourceUrl": "https://pacificpneumatic.com/catalog/cat99.pdf#page=14",
			"sourceLabel": "Pacific Pneumatic, catalogue officiel cat99, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 9cd7362e8a9535da77c3c2d97b1c4dc891fa64dcef58bfe5f21055c6706232dd. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-pacific-catalog-p14"
		],
		"workingPressureBar": [
			"october5-tools-pacific-catalog-p14"
		],
		"demandExplanation": [
			"october5-tools-pacific-catalog-p14"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;
