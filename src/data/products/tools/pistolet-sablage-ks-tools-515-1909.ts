import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ks-tools-515-1909",
	"slug": "pistolet-sablage-ks-tools-515-1909",
	"categoryId": "sableuse",
	"category": "Sableuse",
	"label": "Pistolet de sablage KS Tools 515.1909",
	"brand": "KS Tools",
	"model": "515.1909",
	"mpn": "515.1909",
	"ean": "4042146623749",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"connectorSize": "1/4\"NPT (filetage publié)",
	"filtrationRequirement": "Air propre et sec pour limiter l’agglomération de l’abrasif",
	"confidence": "B",
	"image": {
		"src": "/images/products/ks-tools-515-1909.webp",
		"alt": "Pistolet de sablage KS Tools 515.1909",
		"sourceUrl": "https://www.kstools.com/en/products/special-tools-for-passenger-cars-and-light-commercial-vans/bodywork-and-interior/surface-treatment/5967/pneumatic-sand-blaster-260-mm",
		"sourceLabel": "Visuel officiel KS Tools 515.1909"
	},
	"editorial": {
		"overview": "Le KS Tools 515.1909 est un pistolet de sablage. Le fabricant publie 200 L/min et un plafond de service de 6,3 bar, sans établir le régime de consommation ni sa pression de mesure.",
		"verifiedFacts": [
			"Masse publiée : 1300 g.",
			"Filetage publié : 1/4\"NPT.",
			"Longueur publiée : 260 mm."
		],
		"limitations": [
			"La fiche publie une consommation sans régime de charge ni pression de mesure explicite. La pression de service ne documente pas le point de consommation ; aucun débit de calcul n’est retenu.",
			"Le champ « min. Tube diameter » ne précise pas littéralement un diamètre intérieur. Sa valeur reste documentaire, hors du calcul des pertes de charge.",
			"Le champ « Capacity: 600 » de cette fiche ne donne pas d’unité. Aucun volume de récipient n’en est déduit.",
			"Revue documentaire interne du 3 octobre 2026 ; aucun essai physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Champ fabricant : Air consumption in l/min",
			"value": "200",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Capacity",
			"value": "600",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Connection thread",
			"value": "1/4\"NPT",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Diameter in mm",
			"value": "5,0",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Handle",
			"value": "robust steel grip",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Height in mm",
			"value": "280",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Norm",
			"value": "DIN EN ISO 20643",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Operating pressure in bar",
			"value": "max. 6,3 bar (90 psi)",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Total length mm",
			"value": "260",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : Weight [g]",
			"value": "1300",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		},
		{
			"label": "Champ fabricant : min. Tube diameter",
			"value": "3/8\" - 10 mm",
			"evidenceIds": [
				"october3c-ks-tools-515-1909-manufacturer"
			]
		}
	],
	"evidence": [
		{
			"id": "ks-tools-515-1909-manufacturer-2026",
			"sourceUrl": "https://www.kstools.com/en/products/special-tools-for-passenger-cars-and-light-commercial-vans/bodywork-and-interior/surface-treatment/5967/pneumatic-sand-blaster-260-mm",
			"sourceLabel": "KS Tools, fiche officielle 515.1909",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-20",
			"confidence": "A"
		},
		{
			"id": "october3c-ks-tools-515-1909-manufacturer",
			"sourceUrl": "https://www.kstools.com/en/products/special-tools-for-passenger-cars-and-light-commercial-vans/bodywork-and-interior/surface-treatment/5967/pneumatic-sand-blaster-260-mm?c=1011737469",
			"sourceLabel": "KS Tools, fiche officielle 515.1909, revue du 3 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e9b640866bda94cce6a643300a62b13fcfdea58e95cb0cc1e3ef2a30f143c6f0. Le plafond de service et la consommation non qualifiée restent distincts."
		}
	],
	"fieldSources": {
		"model": [
			"october3c-ks-tools-515-1909-manufacturer"
		],
		"mpn": [
			"october3c-ks-tools-515-1909-manufacturer"
		],
		"workingPressureBar": [
			"october3c-ks-tools-515-1909-manufacturer"
		],
		"demandExplanation": [
			"october3c-ks-tools-515-1909-manufacturer"
		],
		"connectorSize": [
			"october3c-ks-tools-515-1909-manufacturer"
		],
		"specifications": [
			"october3c-ks-tools-515-1909-manufacturer"
		]
	},
	"notes": [
		"Les éléments de preuve antérieurs restent conservés. Le besoin continu précédemment attribué à cette consommation est retiré faute de point de mesure et de régime documentés."
	],
	"demandExplanation": "La fiche publie une consommation sans régime de charge ni pression de mesure explicite. La pression de service ne documente pas le point de consommation ; aucun débit de calcul n’est retenu."
};

export default product;
