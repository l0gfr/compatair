import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "lupamat-lkv-5-5-mit",
	"slug": "lupamat-lkv-5-5-mit",
	"brand": "Lupamat",
	"model": "LKV 5.5 MIT",
	"variant": {
		"familyId": "lupamat-lkv-5-5-mit",
		"label": "Groupe sur cuve 548 L",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 548 L",
			"pressionDeConfiguration": "13 bar",
			"cuve": "548 L"
		}
	},
	"tankLiters": 548,
	"maxPressureBar": 13,
	"fadCurve": [],
	"powerKw": 5.5,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/lupamat-lkv-5-5-mit.svg",
		"alt": "Repères techniques : Lupamat LKV 5.5 MIT",
		"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Montage",
			"value": "MIT sans sécheur",
			"evidenceIds": [
				"lupamat-lkv-5-5-mit-reserved-20261103-1"
			]
		},
		{
			"label": "Cuve",
			"value": "548 L",
			"evidenceIds": [
				"lupamat-lkv-5-5-mit-reserved-20261103-1"
			]
		},
		{
			"label": "FAD publié face au maximum 13 bar",
			"value": "0,59 m³/min, pression de mesure à confirmer",
			"evidenceIds": [
				"lupamat-lkv-5-5-mit-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "5,5 kW",
			"evidenceIds": [
				"lupamat-lkv-5-5-mit-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "Lupamat LKV 5.5 MIT. La LKV 5,5 MIT sans sécheur conserve une cuve 548 L. Les variantes MIT et MITK partagent les débits de la ligne ; MITK ajoute le sécheur, dont la capacité ne remplace pas le débit compresseur. Le tableau indique Max. Working Pressure : ISO 1217 annexe C ne prouve pas à lui seul que la mesure est faite exactement à 13 bar.",
		"verifiedFacts": [
			"Montage : MIT sans sécheur.",
			"Cuve : 548 L.",
			"FAD publié face au maximum 13 bar : 0,59 m³/min, pression de mesure à confirmer.",
			"Puissance : 5,5 kW."
		],
		"limitations": [
			"Triplets 7/10/13 bar et capacités conservés comme déclarations documentaires ; pression effective de mesure à confirmer.",
			"Cycle de service du groupe complet non établi."
		]
	},
	"evidence": [
		{
			"id": "october4-lupamat-current-catalog-p13",
			"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf#page=13",
			"sourceLabel": "Lupamat, catalogue anglais actuellement relié à la page Documents, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "lupamat-lkv-5-5-mit-reserved-20261103-1",
			"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf#page=13",
			"sourceLabel": "Lupamat : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978. La LKV 5,5 MIT sans sécheur conserve une cuve 548 L. Les variantes MIT et MITK partagent les débits de la ligne ; MITK ajoute le sécheur, dont la capacité ne remplace pas le débit compresseur. Le tableau indique Max. Working Pressure : ISO 1217 annexe C ne prouve pas à lui seul que la mesure est faite exactement à 13 bar."
		}
	],
	"fieldSources": {
		"model": [
			"october4-lupamat-current-catalog-p13"
		],
		"maxPressureBar": [
			"october4-lupamat-current-catalog-p13"
		],
		"tankLiters": [
			"october4-lupamat-current-catalog-p13"
		],
		"fadCurve": [
			"lupamat-lkv-5-5-mit-reserved-20261103-1"
		],
		"powerKw": [
			"october4-lupamat-current-catalog-p13"
		],
		"editorial": [
			"lupamat-lkv-5-5-mit-reserved-20261103-1"
		],
		"specifications": [
			"lupamat-lkv-5-5-mit-reserved-20261103-1"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
