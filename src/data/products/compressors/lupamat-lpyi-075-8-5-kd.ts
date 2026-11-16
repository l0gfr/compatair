import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "lupamat-lpyi-075-8-5-kd",
	"slug": "lupamat-lpyi-075-8-5-kd",
	"brand": "Lupamat",
	"model": "LPYI 075/8.5 KD",
	"variant": {
		"familyId": "lupamat-lpyi-075-8-5-kd",
		"label": "Receiver Mounted Cabinet Type",
		"distinguishingAttributes": {
			"équipement": "Receiver Mounted Cabinet Type",
			"pressionDeConfiguration": "8,5 bar",
			"cuve": "75 L"
		}
	},
	"tankLiters": 75,
	"maxPressureBar": 8.5,
	"fadCurve": [],
	"intakeFlowLpm": 148,
	"powerKw": 0.75,
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/lupamat-lpyi-075-8-5-kd-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Lupamat LPYI 075/8.5 KD",
		"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
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
			"value": "75 L",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Débit documentaire, hors calcul",
			"value": "78 L/min ; pression de mesure non qualifiée. Les anciens points sont conservés dans l’historique.",
			"evidenceIds": [
				"review:2026-11-16-reviews:lupamat-lpyi-075-8-5-kd:0"
			]
		},
		{
			"label": "Débit aspiré / déplacement publié, distinct du FAD",
			"value": "148 L/min",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,75 kW",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		}
	],
	"editorial": {
		"overview": "Le LPYI075/8.5KD est le petit groupe en caisson sur réservoir 75 L, moteur 0,75 kW. Le LPYI075/8.5K est le caisson sans ce réservoir ; le LPYI075/10D est une autre configuration de pression et de cuve. La table distingue 148 L/min aspirés et 78 L/min FAD, mais n’associe pas explicitement ce FAD à une pression de mesure distincte du maximum 8,5 bar. Il reste documentaire, hors courbe de calcul.",
		"verifiedFacts": [
			"Le LPYI075/8.5KD est le petit groupe en caisson sur réservoir 75 L, moteur 0,75 kW.",
			"Le LPYI075/8.5K est le caisson sans ce réservoir ; le LPYI075/10D est une autre configuration de pression et de cuve."
		],
		"limitations": [
			"Le FAD est déclaré dans le tableau à côté de la pression de fonctionnement. Aucune norme ISO ni méthode d’essai supplémentaire n’est ajoutée.",
			"Une seule version de pression par puissance et montage est retenue.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"La courbe dimensionnante a été retirée après revue : la mesure FAD et son appariement à une pression ne sont pas suffisamment établis. Les valeurs documentaires restent conservées."
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
		},
		{
			"id": "review:2026-11-16-reviews:lupamat-lpyi-075-8-5-kd:0",
			"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
			"sourceLabel": "Lupamat, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le LPYI075/8.5KD est le petit groupe en caisson sur réservoir 75 L, moteur 0,75 kW. Le LPYI075/8.5K est le caisson sans ce réservoir ; le LPYI075/10D est une autre configuration de pression et de cuve. La table distingue 148 L/min aspirés et 78 L/min FAD, mais n’associe pas explicitement ce FAD à une pression de mesure distincte du maximum 8,5 bar. Il reste documentaire, hors courbe de calcul. GET complet SHA-256 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978. Pages PDF lues : 22."
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
			"review:2026-11-16-reviews:lupamat-lpyi-075-8-5-kd:0"
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
