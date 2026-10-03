const product = {
	"id": "ks-tools-515-1919",
	"slug": "pistolet-sablage-soda-ks-tools-515-1919",
	"categoryId": "sableuse",
	"category": "Sableuse",
	"label": "Pistolet de nettoyage soda KS Tools 515.1919",
	"brand": "KS Tools",
	"model": "515.1919",
	"mpn": "515.1919",
	"ean": "4042146756591",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"connectorSize": "1/4\" (filetage publié)",
	"filtrationRequirement": "Air propre et sec pour préserver la fluidité du média",
	"confidence": "B",
	"image": {
		"src": "/images/products/ks-tools-515-1919.webp",
		"alt": "Pistolet de nettoyage soda KS Tools 515.1919",
		"sourceUrl": "https://www.kstools.com/en/products/special-tools-for-commercial-vehicle/general-workshop-requirements/workshop-equipment/12672/soda-pneumatic-cleaning-gun-1000-ml",
		"sourceLabel": "Visuel officiel KS Tools 515.1919"
	},
	"editorial": {
		"overview": "Le KS Tools 515.1919 est présenté comme un pistolet de nettoyage soda. La fiche publie 57 L/min et « max. 6,3 - 8,2 bar (90 - 120 psi) ». Cette notation ne fournit pas un point de pression associé à la consommation.",
		"verifiedFacts": [
			"Masse publiée : 1470 g.",
			"Filetage publié : 1/4\".",
			"Capacité du récipient publiée : 1 000 ml."
		],
		"limitations": [
			"La fiche publie une consommation sans régime de charge ni pression de mesure explicite. La pression de service ne documente pas le point de consommation ; aucun débit de calcul n’est retenu.",
			"La notation « max. 6,3 - 8,2 bar » reste visible sans être convertie en une plage nominale de fonctionnement.",
			"Le champ « min. Tube diameter » ne précise pas littéralement un diamètre intérieur. Sa valeur reste documentaire, hors du calcul des pertes de charge.",
			"Revue documentaire interne du 3 octobre 2026 ; aucun essai physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Champ fabricant : Air consumption in l/min",
			"value": "57",
			"evidenceIds": [
				"october3c-ks-tools-515-1919-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Capacity of the unit",
			"value": "1.000 ml",
			"evidenceIds": [
				"october3c-ks-tools-515-1919-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Connection thread",
			"value": "1/4\"",
			"evidenceIds": [
				"october3c-ks-tools-515-1919-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Handle",
			"value": "cold isolated handle",
			"evidenceIds": [
				"october3c-ks-tools-515-1919-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Operating pressure in bar",
			"value": "max. 6,3 - 8,2 bar (90 - 120 psi)",
			"evidenceIds": [
				"october3c-ks-tools-515-1919-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Weight [g]",
			"value": "1470",
			"evidenceIds": [
				"october3c-ks-tools-515-1919-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : min. Tube diameter",
			"value": "3/8\" - 10 mm",
			"evidenceIds": [
				"october3c-ks-tools-515-1919-manufacturer"
			]
		}
	],
	"evidence": [
		{
			"id": "ks-tools-515-1919-manufacturer-2026",
			"sourceUrl": "https://www.kstools.com/en/products/special-tools-for-commercial-vehicle/general-workshop-requirements/workshop-equipment/12672/soda-pneumatic-cleaning-gun-1000-ml",
			"sourceLabel": "KS Tools, fiche officielle 515.1919",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-20",
			"confidence": "A"
		},
		{
			"id": "october3c-ks-tools-515-1919-manufacturer",
			"sourceUrl": "https://www.kstools.com/en/products/special-tools-for-commercial-vehicle/general-workshop-requirements/workshop-equipment/12672/soda-pneumatic-cleaning-gun-1000-ml?c=1011740893",
			"sourceLabel": "KS Tools, fiche officielle 515.1919, revue du 3 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e2b91a52b9ea4921a65c2a86d91b65a1ebed9756c4a30d327a35b466d6fc7549. Le plafond de service et la consommation non qualifiée restent distincts."
		}
	],
	"fieldSources": {
		"model": [
			"october3c-ks-tools-515-1919-manufacturer"
		],
		"mpn": [
			"october3c-ks-tools-515-1919-manufacturer"
		],
		"workingPressureBar": [
			"october3c-ks-tools-515-1919-manufacturer"
		],
		"demandExplanation": [
			"october3c-ks-tools-515-1919-manufacturer"
		],
		"connectorSize": [
			"october3c-ks-tools-515-1919-manufacturer"
		],
		"specifications": [
			"october3c-ks-tools-515-1919-manufacturer"
		]
	},
	"notes": [
		"Les éléments de preuve antérieurs restent conservés. Le besoin continu précédemment attribué à cette consommation est retiré faute de point de mesure et de régime documentés."
	],
	"demandExplanation": "La fiche publie une consommation sans régime de charge ni pression de mesure explicite. La pression de service ne documente pas le point de consommation ; aucun débit de calcul n’est retenu."
};

export default product;
