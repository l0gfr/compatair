import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "lupamat-lkv-11-mitk",
	"slug": "lupamat-lkv-11-mitk",
	"brand": "Lupamat",
	"model": "LKV 11 MITK",
	"variant": {
		"familyId": "lupamat-lkv-11-mitk",
		"label": "Groupe sur cuve 548 L avec sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 548 L avec sécheur",
			"pressionDeConfiguration": "13 bar",
			"cuve": "548 L"
		}
	},
	"tankLiters": 548,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 1290
		}
	],
	"powerKw": 11,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/lupamat-lkv-11-mitk.svg",
		"alt": "Repères techniques : Lupamat LKV 11 MITK",
		"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur cuve 548 L avec sécheur",
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
			"label": "Air livré à 13 bar",
			"value": "1 290 L/min",
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
		"overview": "LKV 11 MITK, version 13 bar : 1 290 L/min de FAD avec une cuve de 548 L et un sécheur. Le LKV 7,5 MITK conserve la même cuve mais publie 820 L/min à 13 bar. Le tableau donne séparément les capacités nominales des sécheurs : 1,67 et 0,88 m³/min pour ces deux lignes à 13 bar. Le volume de cuve ne permet donc pas de comparer leur production d’air.",
		"verifiedFacts": [
			"Configuration de pression documentée : 13 bar.",
			"Cuve de stockage documentée : 548 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 1 290 L/min déclarés à 13 bar.",
			"FAD à 13 bar : 1,29 m³/min pour LKV 11 MITK contre 0,82 m³/min pour LKV 7,5 MITK ; cuve commune de 548 L.",
			"Le tableau MITK distingue les triplets 7/10/13 bar et leurs valeurs de FAD ; le protocole cité est ISO 1217:2009, annexe C."
		],
		"limitations": [
			"Configuration de pression 13 bar retenue dans le triplet 7 / 10 / 13. La version 15 bar sur demande ne fournit pas de FAD dans ce tableau.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"La capacité nominale du sécheur ne garantit pas un point de rosée sur l’installation : températures, pression et conditions de référence doivent être confirmées."
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
			"id": "review-20261028-lupamat-lkv-11-mitk-1",
			"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf#page=13",
			"sourceLabel": "Relecture du modèle et de son voisin, 28 octobre 2026, pages PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-28",
			"confidence": "B",
			"notes": "Réponse primaire complète relue le 28 octobre 2026 ; SHA-256 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978. Comparaison documentaire, sans essai physique CompatAir."
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
			"october4-lupamat-current-catalog-p13"
		],
		"powerKw": [
			"october4-lupamat-current-catalog-p13"
		],
		"editorial": [
			"review-20261028-lupamat-lkv-11-mitk-1"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
