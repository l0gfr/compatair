import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "dalgakiran-d-3-200-d",
	"slug": "dalgakiran-d-3-200-d",
	"brand": "Dalgakiran",
	"model": "D 3-200 D",
	"variant": {
		"familyId": "dalgakiran-d-3-200-d",
		"label": "Groupe sur cuve 200 L",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 200 L",
			"pressionDeConfiguration": "7 bar",
			"cuve": "200 L"
		}
	},
	"tankLiters": 200,
	"maxPressureBar": 7,
	"maxPressureBasis": "selected-working-pressure-ceiling",
	"fadCurve": [],
	"intakeFlowLpm": 290,
	"powerKw": 2.2,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/dalgakiran-d-3-200-d.svg",
		"alt": "Repères techniques : Dalgakiran D 3-200 D",
		"sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur cuve 200 L",
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
			"value": "200 L",
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
			"value": "290 L/min",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "2,2 kW",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p50"
			]
		}
	],
	"editorial": {
		"overview": "D 3-200 D : compresseur à un étage sur cuve de 200 L, avec moteur de 2,2 kW et pression de travail de 7 bar. Le tableau donne 290 L/min de déplacement du piston. Le D 2-100 D possède 100 L, un moteur de 1,5 kW et 178 L/min de déplacement.",
		"verifiedFacts": [
			"Configuration de pression documentée : 7 bar.",
			"Cuve de stockage documentée : 200 L."
		],
		"limitations": [
			"La colonne Piston Displacement décrit le déplacement ; aucun débit restitué sous pression n’est qualifié. La courbe FAD demeure vide et le taux de marche reste inconnu.",
			"Le D 3-200 D pèse 127 kg et mesure 450 × 1445 × 965 mm en longueur × largeur × hauteur, contre 81 kg et 450 × 1100 × 820 mm pour le D 2-100 D.",
			"Les deux montages annoncent deux raccords G¼. L’alimentation et la disponibilité locale doivent être confirmées avant commande.",
			"Les 7 bar correspondent à la pression de travail de la ligne retenue, distincte de la soupape et des versions à deux étages."
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
