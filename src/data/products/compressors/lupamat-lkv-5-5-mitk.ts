import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "lupamat-lkv-5-5-mitk",
	"slug": "lupamat-lkv-5-5-mitk",
	"brand": "Lupamat",
	"model": "LKV 5.5 MITK",
	"variant": {
		"familyId": "lupamat-lkv-5-5-mitk",
		"label": "Groupe sur cuve 548 L avec sécheur",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 548 L avec sécheur",
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
		"src": "/images/products/lupamat-lkv-5-5-mitk-20261106.svg",
		"alt": "Repères techniques : Lupamat LKV 5.5 MITK",
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
			"value": "590 L/min",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "5,5 kW",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		},
		{
			"label": "Débit historiquement apparié, mesure à confirmer",
			"value": "590 L/min ; pression associée antérieurement 13 bar",
			"evidenceIds": [
				"review:2026-11-06-followup:lupamat-lkv-5-5-mitk:1"
			]
		}
	],
	"editorial": {
		"overview": "Lupamat LKV 5.5 MITK. Le débit déclaré reste conservé dans les spécifications. La pression maximale ne prouve pas la pression de mesure du FAD ; compatibilité indéterminée.",
		"verifiedFacts": [
			"Configuration de pression documentée : 13 bar.",
			"Cuve de stockage documentée : 548 L."
		],
		"limitations": [
			"Configuration de pression 13 bar retenue dans le triplet 7 / 10 / 13. La version 15 bar sur demande ne fournit pas de FAD dans ce tableau.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Catalogue p13 : LKV5,5MITK,cuve548 L avec sécheur,5,5 kW,0,59 m³/min pourversion13. ColonneMaxWorkingPressure etnormeISO1217C ne donnent pas ici une note de pression de mesure ; conserver la déclaration sans calcul à13 présumé."
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
			"id": "review:2026-11-06-followup:lupamat-lkv-5-5-mitk:1",
			"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf#page=13",
			"sourceLabel": "Lupamat, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Catalogue p13 : LKV5,5MITK,cuve548 L avec sécheur,5,5 kW,0,59 m³/min pourversion13. ColonneMaxWorkingPressure etnormeISO1217C ne donnent pas ici une note de pression de mesure ; conserver la déclaration sans calcul à13 présumé. SHA-256 du document complet : 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978."
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
			"review:2026-11-06-followup:lupamat-lkv-5-5-mitk:1"
		],
		"powerKw": [
			"october4-lupamat-current-catalog-p13"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
