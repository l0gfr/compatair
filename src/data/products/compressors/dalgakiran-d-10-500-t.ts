import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "dalgakiran-d-10-500-t",
	"slug": "dalgakiran-d-10-500-t",
	"brand": "Dalgakiran",
	"model": "D 10-500 T",
	"variant": {
		"familyId": "dalgakiran-d-10-500-t",
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
	"intakeFlowLpm": 726,
	"powerKw": 7.5,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/dalgakiran-d-10-500-t.svg",
		"alt": "Repères techniques : Dalgakiran D 10-500 T",
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
			"value": "726 L/min",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "7,5 kW",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		}
	],
	"editorial": {
		"overview": "D 10-500 T : cuve de 500 L, moteur de 7,5 kW et compression à deux étages pour la version de travail à 12,5 bar. Le tableau publie 726 L/min de déplacement du piston. Le D 10-500 sans T est une autre version, à un étage et 7 bar, avec 1 222 L/min de déplacement.",
		"verifiedFacts": [
			"Configuration de pression documentée : 12,5 bar.",
			"Cuve de stockage documentée : 500 L."
		],
		"limitations": [
			"Le déplacement du piston ne qualifie pas un FAD à la pression d’un outil. La courbe de débit restitué reste vide.",
			"Le T et la pression de travail identifient la configuration ; les 500 L communs aux deux versions ne renseignent pas leur production utile.",
			"Le taux de marche n’est pas publié. Aucun verdict de tenue continue n’est déduit du seul volume de cuve.",
			"La pression de travail retenue ne décrit ni la soupape ni le maximum de toutes les versions de la famille."
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
