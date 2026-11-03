import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "dalgakiran-d-7-5-500-t",
	"slug": "dalgakiran-d-7-5-500-t",
	"brand": "Dalgakiran",
	"model": "D 7.5-500 T",
	"variant": {
		"familyId": "dalgakiran-d-7-5-500-t",
		"label": "Groupe sur cuve 500 L",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 500 L",
			"pressionDeConfiguration": "12,5 bar",
			"cuve": "500 L"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 12.5,
	"maxPressureBasis": "selected-working-pressure-ceiling",
	"fadCurve": [],
	"intakeFlowLpm": 647,
	"powerKw": 5.5,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/dalgakiran-d-7-5-500-t.svg",
		"alt": "Repères techniques : Dalgakiran D 7.5-500 T",
		"sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur cuve 500 L",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		},
		{
			"label": "Pression de la configuration retenue",
			"value": "12,5 bar",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "500 L",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		},
		{
			"label": "FAD sous pression",
			"value": "Non qualifié par la source retenue",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		},
		{
			"label": "Débit aspiré / déplacement publié, distinct du FAD",
			"value": "647 L/min",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "5,5 kW",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		},
		{
			"label": "Cuve",
			"value": "500 L",
			"evidenceIds": [
				"dalgakiran-d-7-5-500-t-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de travail",
			"value": "12,5 bar",
			"evidenceIds": [
				"dalgakiran-d-7-5-500-t-reserved-20261103-1"
			]
		},
		{
			"label": "Déplacement de piston",
			"value": "647 L/min, distinct du FAD",
			"evidenceIds": [
				"dalgakiran-d-7-5-500-t-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "5,5 kW / 7,5 HP",
			"evidenceIds": [
				"dalgakiran-d-7-5-500-t-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "350 kg",
			"evidenceIds": [
				"dalgakiran-d-7-5-500-t-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "Dalgakiran D 7.5-500 T. La D 7.5-500 T travaille à 12,5 bar et annonce 647 L/min de déplacement de piston, contre 7 bar et 971 L/min pour la D 7.5-500 sans T. Elles ont la même cuve 500 L et la même puissance, mais pèsent 350 et 283 kg. Aucun de ces déplacements ne permet de conclure sur le débit restitué.",
		"verifiedFacts": [
			"Configuration de pression documentée : 12,5 bar.",
			"Cuve de stockage documentée : 500 L.",
			"Cuve : 500 L.",
			"Pression de travail : 12,5 bar.",
			"Déplacement de piston : 647 L/min, distinct du FAD.",
			"Puissance : 5,5 kW / 7,5 HP.",
			"Masse : 350 kg."
		],
		"limitations": [
			"La colonne Piston Displacement décrit le déplacement du piston. Aucun débit restitué sous pression n’est qualifié dans ce tableau.",
			"Le cycle de service n’est pas indiqué ; la compatibilité ne devient pas conclusive par la seule capacité de cuve.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Le plafond CompatAir correspond à la pression de travail de la version retenue. Il ne décrit ni la soupape ni le maximum de toutes les versions de la famille."
		]
	},
	"evidence": [
		{
			"id": "october4-dalgakiran-catalog-p50",
			"sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=50",
			"sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 50",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "dalgakiran-d-7-5-500-t-reserved-20261103-1",
			"sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=50",
			"sourceLabel": "Dalgakiran : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b. La D 7.5-500 T travaille à 12,5 bar et annonce 647 L/min de déplacement de piston, contre 7 bar et 971 L/min pour la D 7.5-500 sans T. Elles ont la même cuve 500 L et la même puissance, mais pèsent 350 et 283 kg. Aucun de ces déplacements ne permet de conclure sur le débit restitué."
		}
	],
	"fieldSources": {
		"maxPressureBasis": [
			"october4-dalgakiran-catalog-p50"
		],
		"model": [
			"october4-dalgakiran-catalog-p50"
		],
		"maxPressureBar": [
			"october4-dalgakiran-catalog-p50"
		],
		"tankLiters": [
			"october4-dalgakiran-catalog-p50"
		],
		"fadCurve": [
			"october4-dalgakiran-catalog-p50"
		],
		"intakeFlowLpm": [
			"october4-dalgakiran-catalog-p50"
		],
		"powerKw": [
			"october4-dalgakiran-catalog-p50"
		],
		"weightKg": [
			"dalgakiran-d-7-5-500-t-reserved-20261103-1"
		],
		"editorial": [
			"dalgakiran-d-7-5-500-t-reserved-20261103-1"
		],
		"specifications": [
			"dalgakiran-d-7-5-500-t-reserved-20261103-1"
		]
	},
	"notes": [
		"Portée de la source : piston-displacement-only.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	],
	"weightKg": 350
};

export default product;
