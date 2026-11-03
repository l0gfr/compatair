import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-master-power-mp1454-38",
	"slug": "perceuse-master-power-mp1454-38",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Master Power MP1454-38",
	"brand": "Master Power",
	"model": "MP1454-38",
	"mpn": "MP1454-38",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-master-power-mp1454-38.webp",
		"alt": "Repères techniques : Master Power MP1454-38",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-power-mp1454-38",
		"label": "Référence MP1454-38",
		"distinguishingAttributes": {
			"reference": "MP1454-38",
			"Fonction dans le catalogue": "perceuse",
			"Caractéristiques du tableau constructeur": "MP1454-38 3000 220 6.5 mm 140.0 0.68 0.34 1/4\""
		}
	},
	"editorial": {
		"overview": "Master Power MP1454-38. La MP1454-38 est une perceuse non réversible de 140 mm et 0,68 kg, mandrin6,5 mm. La MP1457-51 est en10 mm, 750 W et 191 mm ; ne pas reprendre ces valeurs pour cette petite tête presque à90°. Les 0,34 m³/min ont une pression de performance explicite6,2 bar mais un régime de consommation non précisé.",
		"verifiedFacts": [
			"Fonction dans le catalogue : perceuse.",
			"Caractéristiques du tableau constructeur : MP1454-38 3000 220 6.5 mm 140.0 0.68 0.34 1/4\".",
			"Mandrin : 6,5 mm.",
			"Vitesse : 3 000 tr/min.",
			"Puissance : 220 W.",
			"Montage de broche : 3/8-24.",
			"Consommation publiée : 0,34 m³/min.",
			"Pression de mesure des performances : 6,2 bar à l’entrée."
		],
		"limitations": [
			"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
			"Référence physique explicitement listée dans un tableau constructeur. Aucune variante n’est générée à partir d’un code de nomenclature. Consulter le tableau source pour les dimensions et les exceptions exactes.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction dans le catalogue",
			"value": "perceuse",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p60"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "MP1454-38 3000 220 6.5 mm 140.0 0.68 0.34 1/4\"",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p60"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p60"
			]
		},
		{
			"label": "Mandrin",
			"value": "6,5 mm",
			"evidenceIds": [
				"perceuse-master-power-mp1454-38-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "3 000 tr/min",
			"evidenceIds": [
				"perceuse-master-power-mp1454-38-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "220 W",
			"evidenceIds": [
				"perceuse-master-power-mp1454-38-reserved-20261103-1"
			]
		},
		{
			"label": "Montage de broche",
			"value": "3/8-24",
			"evidenceIds": [
				"perceuse-master-power-mp1454-38-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée",
			"value": "0,34 m³/min",
			"evidenceIds": [
				"perceuse-master-power-mp1454-38-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de mesure des performances",
			"value": "6,2 bar à l’entrée",
			"evidenceIds": [
				"perceuse-master-power-mp1454-38-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p60",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=60",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 60",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "perceuse-master-power-mp1454-38-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=60",
			"sourceLabel": "Master Power : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. La MP1454-38 est une perceuse non réversible de 140 mm et 0,68 kg, mandrin6,5 mm. La MP1457-51 est en10 mm, 750 W et 191 mm ; ne pas reprendre ces valeurs pour cette petite tête presque à90°. Les 0,34 m³/min ont une pression de performance explicite6,2 bar mais un régime de consommation non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p60"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p60"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p60"
		],
		"editorial": [
			"perceuse-master-power-mp1454-38-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-master-power-mp1454-38-reserved-20261103-1"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
