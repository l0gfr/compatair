import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-zipp-zag-306b",
	"slug": "meuleuse-zipp-zag-306b",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ZIPP ZAG-306B",
	"brand": "ZIPP",
	"model": "ZAG-306B",
	"mpn": "ZAG-306B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-zipp-zag-306b.webp",
		"alt": "Repères techniques : ZIPP ZAG-306B",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zag-306b",
		"label": "Référence ZAG-306B",
		"distinguishingAttributes": {
			"reference": "ZAG-306B",
			"Vitesse à vide": "11000 tr/min",
			"Masse": "1 kg"
		}
	},
	"editorial": {
		"overview": "ZIPP ZAG-306B. La ZAG-306B utilise un disque 4 pouces avec arbre 5/8 pouce–11 ; la ZAG-306BM utilise M14 × 2. La ZAG-30656B passe au disque 4,5 pouces tout en conservant 11 000 tr/min et 220 mm. Le suffixe métrique change le montage de l’abrasif, pas la consommation de gamme.",
		"verifiedFacts": [
			"Disque : 4 pouces.",
			"Filetage : 5/8 pouce–11.",
			"Puissance publiée : 1,0 hp.",
			"Vitesse à vide : 11 000 tr/min.",
			"Longueur : 220 mm.",
			"Masse : 1,0 kg."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Disque",
			"value": "4 pouces",
			"evidenceIds": [
				"meuleuse-zipp-zag-306b-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage",
			"value": "5/8 pouce–11",
			"evidenceIds": [
				"meuleuse-zipp-zag-306b-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1,0 hp",
			"evidenceIds": [
				"meuleuse-zipp-zag-306b-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"meuleuse-zipp-zag-306b-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "220 mm",
			"evidenceIds": [
				"meuleuse-zipp-zag-306b-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,0 kg",
			"evidenceIds": [
				"meuleuse-zipp-zag-306b-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p121",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=121",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 121",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "meuleuse-zipp-zag-306b-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=121",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZAG-306B utilise un disque 4 pouces avec arbre 5/8 pouce–11 ; la ZAG-306BM utilise M14 × 2. La ZAG-30656B passe au disque 4,5 pouces tout en conservant 11 000 tr/min et 220 mm. Le suffixe métrique change le montage de l’abrasif, pas la consommation de gamme."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p121"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p121"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p121"
		],
		"editorial": [
			"meuleuse-zipp-zag-306b-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-zipp-zag-306b-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
