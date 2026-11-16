import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "dalgakiran-inversys-plus-pm-22",
	"slug": "dalgakiran-inversys-plus-pm-22",
	"brand": "Dalgakiran",
	"model": "INVERSYS PLUS PM 22",
	"variant": {
		"familyId": "dalgakiran-inversys-plus-pm-22",
		"label": "Base Mounted, stockage d’air externe",
		"distinguishingAttributes": {
			"équipement": "Base Mounted, stockage d’air externe",
			"pressionDeConfiguration": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"maxPressureBasis": "selected-working-pressure-ceiling",
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 2650
		}
	],
	"powerKw": 22,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/dalgakiran-inversys-plus-pm-22-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Dalgakiran INVERSYS PLUS PM 22",
		"sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Base Mounted, stockage d’air externe",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p20"
			]
		},
		{
			"label": "Pression de la configuration retenue",
			"value": "13 bar",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p20"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Stockage intégré absent, montage constructeur documenté",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p20"
			]
		},
		{
			"label": "Débit minimum de modulation, hors capacité maximale",
			"value": "920 L/min ; valeur minimale, pas la capacité du groupe.",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p20"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "22 kW",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p20"
			]
		},
		{
			"label": "FAD maximal à 13 bar",
			"value": "2650 L/min ; minimum et maximum distingués dans le tableau constructeur",
			"evidenceIds": [
				"review:2026-11-16-reviews:dalgakiran-inversys-plus-pm-22:0"
			]
		}
	],
	"editorial": {
		"overview": "L’INVERSYS PLUS PM22 au sol publie à 13 bar une modulation de 0,92 à 2,65 m³/min. L’ancien point 920 L/min reprenait le minimum de régulation ; la capacité maximale est corrigée à 2 650 L/min. Le PM30 atteint 3,87 m³/min au même point, le PM15 1,36. Le minimum n’est pas une moyenne d’utilisation. Le réservoir proposé en option ne fait pas partie du montage au sol retenu.",
		"verifiedFacts": [
			"L’INVERSYS PLUS PM22 au sol publie à 13 bar une modulation de 0,92 à 2,65 m³/min.",
			"L’ancien point 920 L/min reprenait le minimum de régulation ; la capacité maximale est corrigée à 2 650 L/min."
		],
		"limitations": [
			"Une seule configuration de pression est retenue par modèle. Les autres lignes de pression ne sont pas assemblées en une courbe mesurée.",
			"La cuve optionnelle Tank + Dryer est distincte du montage Base Mounted retenu.",
			"Le FAD retenu est le minimum de la plage VSD à cette pression. Le maximum de la plage n’est pas utilisé comme débit garanti.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Le plafond CompatAir correspond à la pression de travail de la version retenue. Il ne décrit ni la soupape ni le maximum de toutes les versions de la famille."
		]
	},
	"evidence": [
		{
			"id": "october4-dalgakiran-catalog-p20",
			"sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=20",
			"sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october4-dalgakiran-catalog-p17",
			"sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf#page=17",
			"sourceLabel": "Dalgakiran, catalogue constructeur, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:dalgakiran-inversys-plus-pm-22:0",
			"sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf",
			"sourceLabel": "Dalgakiran, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’INVERSYS PLUS PM22 au sol publie à 13 bar une modulation de 0,92 à 2,65 m³/min. L’ancien point 920 L/min reprenait le minimum de régulation ; la capacité maximale est corrigée à 2 650 L/min. Le PM30 atteint 3,87 m³/min au même point, le PM15 1,36. Le minimum n’est pas une moyenne d’utilisation. Le réservoir proposé en option ne fait pas partie du montage au sol retenu. GET complet SHA-256 aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b. Pages PDF lues : 20, 17."
		}
	],
	"fieldSources": {
		"maxPressureBasis": [
			"october4-dalgakiran-catalog-p20"
		],
		"model": [
			"october4-dalgakiran-catalog-p20"
		],
		"maxPressureBar": [
			"october4-dalgakiran-catalog-p20"
		],
		"tankLiters": [
			"october4-dalgakiran-catalog-p20"
		],
		"fadCurve": [
			"review:2026-11-16-reviews:dalgakiran-inversys-plus-pm-22:0"
		],
		"powerKw": [
			"october4-dalgakiran-catalog-p20"
		],
		"oilType": [
			"october4-dalgakiran-catalog-p17"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
