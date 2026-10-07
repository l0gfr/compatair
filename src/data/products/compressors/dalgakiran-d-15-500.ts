import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "dalgakiran-d-15-500",
	"slug": "dalgakiran-d-15-500",
	"brand": "Dalgakiran",
	"model": "D 15-500",
	"variant": {
		"familyId": "dalgakiran-d-15-500",
		"label": "Groupe sur cuve 500 L",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 500 L",
			"pressionDeConfiguration": "7 bar",
			"cuve": "500 L"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 7,
	"maxPressureBasis": "selected-working-pressure-ceiling",
	"fadCurve": [],
	"intakeFlowLpm": 1766,
	"powerKw": 11,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/dalgakiran-d-15-500.svg",
		"alt": "Repères techniques : Dalgakiran D 15-500",
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
			"value": "7 bar",
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
			"value": "1 766 L/min",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "11 kW",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		}
	],
	"editorial": {
		"overview": "Dalgakiran D 15-500. Le débit restitué sous pression reste non qualifié. Groupe sur cuve 500 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 7 bar.",
			"Cuve de stockage documentée : 500 L."
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
		]
	},
	"notes": [
		"Portée de la source : piston-displacement-only.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
