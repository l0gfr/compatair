import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "lupamat-lpyi-37-8-5-kd",
	"slug": "lupamat-lpyi-37-8-5-kd",
	"brand": "Lupamat",
	"model": "LPYI 37/8.5 KD",
	"variant": {
		"familyId": "lupamat-lpyi-37-8-5-kd",
		"label": "Receiver Mounted Cabinet Type",
		"distinguishingAttributes": {
			"équipement": "Receiver Mounted Cabinet Type",
			"pressionDeConfiguration": "8,5 bar",
			"cuve": "150 L"
		}
	},
	"tankLiters": 150,
	"maxPressureBar": 8.5,
	"fadCurve": [
		{
			"pressureBar": 8.5,
			"litersPerMinute": 370
		}
	],
	"intakeFlowLpm": 673,
	"powerKw": 4,
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/lupamat-lpyi-37-8-5-kd.svg",
		"alt": "Repères techniques : Lupamat LPYI 37/8.5 KD",
		"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Receiver Mounted Cabinet Type",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "8,5 bar",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "150 L",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Air livré à 8,5 bar",
			"value": "370 L/min",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Débit aspiré / déplacement publié, distinct du FAD",
			"value": "673 L/min",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "4 kW",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		}
	],
	"editorial": {
		"overview": "Lupamat LPYI 37/8.5 KD. 370 L/min déclarés à 8,5 bar. Receiver Mounted Cabinet Type.",
		"verifiedFacts": [
			"Configuration de pression documentée : 8,5 bar.",
			"Cuve de stockage documentée : 150 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 370 L/min déclarés à 8,5 bar."
		],
		"limitations": [
			"Le FAD est déclaré dans le tableau à côté de la pression de fonctionnement. Aucune norme ISO ni méthode d’essai supplémentaire n’est ajoutée.",
			"Une seule version de pression par puissance et montage est retenue.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
		]
	},
	"evidence": [
		{
			"id": "october4-lupamat-current-catalog-p22",
			"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf#page=22",
			"sourceLabel": "Lupamat, catalogue anglais actuellement relié à la page Documents, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october4-lupamat-current-catalog-p22"
		],
		"maxPressureBar": [
			"october4-lupamat-current-catalog-p22"
		],
		"tankLiters": [
			"october4-lupamat-current-catalog-p22"
		],
		"fadCurve": [
			"october4-lupamat-current-catalog-p22"
		],
		"intakeFlowLpm": [
			"october4-lupamat-current-catalog-p22"
		],
		"powerKw": [
			"october4-lupamat-current-catalog-p22"
		],
		"oilType": [
			"october4-lupamat-current-catalog-p22"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
