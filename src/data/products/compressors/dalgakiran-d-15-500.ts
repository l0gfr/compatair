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
		"overview": "D 15-500 : version à un étage, cuve de 500 L, moteur de 11 kW et pression de travail de 7 bar. Le tableau publie 1 766 L/min de déplacement du piston. Le D 10-500 voisin conserve 500 L et 7 bar, avec 1 222 L/min de déplacement et un moteur de 7,5 kW.",
		"verifiedFacts": [
			"Configuration de pression documentée : 7 bar.",
			"Cuve de stockage documentée : 500 L."
		],
		"limitations": [
			"Le déplacement du piston ne constitue pas un FAD sous pression ; la courbe de débit restitué demeure vide.",
			"Le D 15-500 pèse 465 kg et mesure 700 × 1 840 × 1 520 mm en longueur × largeur × hauteur ; le D 10-500 pèse 297 kg. Le même volume de cuve ne décrit pas la même capacité de pompe.",
			"Le taux de marche reste inconnu ; le stockage ne suffit pas à conclure pour un usage continu.",
			"Le plafond retenu correspond à la pression de travail de cette version, distincte de la soupape et des autres variantes."
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
