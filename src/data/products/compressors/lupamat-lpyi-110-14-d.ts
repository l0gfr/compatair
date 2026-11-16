import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "lupamat-lpyi-110-14-d",
	"slug": "lupamat-lpyi-110-14-d",
	"brand": "Lupamat",
	"model": "LPYI 110/14 D",
	"variant": {
		"familyId": "lupamat-lpyi-110-14-d",
		"label": "Receiver Mounted Type",
		"distinguishingAttributes": {
			"équipement": "Receiver Mounted Type",
			"pressionDeConfiguration": "14 bar",
			"cuve": "387 L"
		}
	},
	"tankLiters": 387,
	"maxPressureBar": 14,
	"fadCurve": [],
	"intakeFlowLpm": 1545,
	"powerKw": 11,
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/lupamat-lpyi-110-14-d-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Lupamat LPYI 110/14 D",
		"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Receiver Mounted Type",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "14 bar",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "387 L",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Débit documentaire, hors calcul",
			"value": "1 050 L/min ; pression de mesure non qualifiée. Les anciens points sont conservés dans l’historique.",
			"evidenceIds": [
				"review:2026-11-16-reviews:lupamat-lpyi-110-14-d:0"
			]
		},
		{
			"label": "Débit aspiré / déplacement publié, distinct du FAD",
			"value": "1 545 L/min",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "11 kW",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		}
	],
	"editorial": {
		"overview": "Le LPYI110/14D est le groupe sur réservoir 387 L, moteur 11 kW, pour un maximum de 14 bar. Les versions K et KD changent le caisson et le montage. La table distingue 1 545 L/min aspirés et 1 050 L/min FAD ; la pression maximale ne suffit pas à établir la pression de mesure du FAD. Les deux valeurs restent documentaires et le calcul demeure non conclusif.",
		"verifiedFacts": [
			"Le LPYI110/14D est le groupe sur réservoir 387 L, moteur 11 kW, pour un maximum de 14 bar.",
			"Les versions K et KD changent le caisson et le montage."
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
			"id": "review:2026-11-16-reviews:lupamat-lpyi-110-14-d:0",
			"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
			"sourceLabel": "Lupamat, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le LPYI110/14D est le groupe sur réservoir 387 L, moteur 11 kW, pour un maximum de 14 bar. Les versions K et KD changent le caisson et le montage. La table distingue 1 545 L/min aspirés et 1 050 L/min FAD ; la pression maximale ne suffit pas à établir la pression de mesure du FAD. Les deux valeurs restent documentaires et le calcul demeure non conclusif. GET complet SHA-256 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978. Pages PDF lues : 22."
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
			"review:2026-11-16-reviews:lupamat-lpyi-110-14-d:0"
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
