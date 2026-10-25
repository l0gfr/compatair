import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "lupamat-lkv-11-mit",
	"slug": "lupamat-lkv-11-mit",
	"brand": "Lupamat",
	"model": "LKV 11 MIT",
	"variant": {
		"familyId": "lupamat-lkv-11-mit",
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
	"powerKw": 11,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/lupamat-lkv-11-mit.svg",
		"alt": "Repères techniques : Lupamat LKV 11 MIT",
		"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur cuve 548 L",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "13 bar",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "548 L",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		},
		{
			"label": "Capacité FAD publiée, pression de mesure à confirmer",
			"value": "1 290 L/min dans la colonne de configuration 13 bar",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "11 kW",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		}
	],
	"editorial": {
		"overview": "Le LKV 11 MIT et le LKV 7,5 MIT partagent une cuve de 548 L. Dans les colonnes de configuration 13 bar, le catalogue donne respectivement 1,29 et 0,82 m³/min de capacité FAD pour 11 et 7,5 kW. Le passage de puissance change la capacité publiée, sans ajouter de stockage. Le tableau intitule sa pression « Max. Working Pressure » : nous ne l’utilisons pas comme pression de mesure implicite. Le MITK avec sécheur est un montage distinct ; un débit propre et ses conditions sont à demander pour toute version 15 bar sur demande.",
		"verifiedFacts": [
			"Configuration de pression maximale retenue : 13 bar.",
			"Cuve de stockage documentée : 548 L.",
			"Capacité FAD de la colonne 13 bar : 1 290 L/min ; pression de mesure à faire préciser."
		],
		"limitations": [
			"Configuration de pression 13 bar retenue dans le triplet 7 / 10 / 13. La version 15 bar sur demande ne fournit pas de FAD dans ce tableau.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Le maximum de fonctionnement et une note ISO 1217 ne fixent pas, à eux seuls, la pression de mesure du débit. La courbe FAD reste vide en attendant cette précision."
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
		"powerKw": [
			"october4-lupamat-current-catalog-p13"
		],
		"editorial": [
			"october4-lupamat-current-catalog-p13"
		],
		"specifications": [
			"october4-lupamat-current-catalog-p13"
		],
		"fadCurve": [
			"october4-lupamat-current-catalog-p13"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
