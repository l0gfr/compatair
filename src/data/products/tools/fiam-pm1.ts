import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-pm1",
	"slug": "fiam-pm1",
	"brand": "Fiam",
	"model": "PM1",
	"mpn": "169900001",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Fiam PM1",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-pm1.webp",
		"alt": "Repères techniques Fiam PM1, référence 169900001",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-marking-pen/pm1/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PM1 169900001 : stylo de marquage à valve rotative, 36 000 coups/min et masse de 0,16 kg. Il publie 0,45 L/s, soit 27 L/min à 6,3 bar. Le Dotco 15Z-710 voisin publie une autre cadence sans débit d’air qualifié ; les coups par minute et les tours par minute ne doivent pas être fusionnés en un classement.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 0.45 L/s, soit 27 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 169900001.",
			"Masse publiée : 0.16 kg.",
			"Dimensions publiées : Ø 17 x L 162 mm."
		],
		"limitations": [
			"Le régime de consommation n’est pas précisé. La compatibilité de la pointe et du matériau à marquer reste à vérifier ; les coups par minute ne sont pas des tours par minute.",
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-169900001-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 0.45 L/s, soit 27 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-169900001-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.16 kg",
			"evidenceIds": [
				"fiam-169900001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 17 x L 162 mm",
			"evidenceIds": [
				"fiam-169900001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-169900001-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-marking-pen/pm1/",
			"sourceLabel": "Fiam, fiche technique PM1, réf. 169900001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 0.45 L/s, soit 27 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-169900001-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-3.pdf#page=2",
			"sourceLabel": "Fiam, brochure technique en-3, p. 2",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "october-dotco-p15",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=15",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-169900001-20260926"
		],
		"workingPressureBar": [
			"fiam-169900001-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-169900001-20260926"
		],
		"airflowBasis": [
			"fiam-169900001-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 27,
		"typical": 27,
		"max": 27
	},
	"airflowBasis": "unqualified"
};

export default product;
