import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "hertz-frecon-plus-pm-30",
	"slug": "hertz-frecon-plus-pm-30",
	"brand": "Hertz",
	"model": "FRECON PLUS PM 30",
	"variant": {
		"familyId": "hertz-frecon-plus-pm-30",
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
			"litersPerMinute": 1200
		}
	],
	"powerKw": 30,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/hertz-frecon-plus-pm-30.svg",
		"alt": "Repères techniques : Hertz FRECON PLUS PM 30",
		"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Base Mounted, stockage d’air externe",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "Pression de la configuration retenue",
			"value": "13 bar",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Stockage intégré absent, montage constructeur documenté",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "Air livré à 13 bar",
			"value": "1 200 L/min",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "30 kW",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		}
	],
	"editorial": {
		"overview": "FRECON PLUS PM 30 à 13 bar : plage FAD publiée de 1,20 à 3,87 m³/min. Le profil de calcul retient la borne basse de 1 200 L/min. Le PM 37 publie 1,31 à 4,54 m³/min à la même pression. Le tableau prévoit ces deux tailles sur socle et laisse leurs colonnes Tank + Dryer vides ; le stockage et le traitement restent à définir pour l’installation.",
		"verifiedFacts": [
			"Configuration de pression documentée : 13 bar.",
			"Montage sans réservoir de stockage intégré explicitement documenté.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 1 200 L/min déclarés à 13 bar.",
			"Comparaison à 13 bar : PM 30, minimum 1 200 et maximum 3 870 L/min ; PM 37, minimum 1 310 et maximum 4 540 L/min.",
			"Les capacités FAD sont mesurées selon ISO 1217:2009, annexe E ; la plage du variateur et le cycle de service restent deux informations distinctes."
		],
		"limitations": [
			"Une seule configuration de pression est retenue par modèle. Les autres lignes de pression ne sont pas assemblées en une courbe mesurée.",
			"Les colonnes Tank + Dryer sont vides pour le PM 30 dans ce tableau ; aucune cuve ni aucun sécheur intégré n’est attribué à cette version.",
			"Le FAD retenu est le minimum de la plage VSD à cette pression. Le maximum de la plage n’est pas utilisé comme débit garanti.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Le plafond CompatAir correspond à la pression de travail de la version retenue. Il ne décrit ni la soupape ni le maximum de toutes les versions de la famille."
		]
	},
	"evidence": [
		{
			"id": "october4-hertz-catalog-p20",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=20",
			"sourceLabel": "Hertz, catalogue constructeur, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october4-hertz-catalog-p17",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=17",
			"sourceLabel": "Hertz, catalogue constructeur, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261028-hertz-frecon-plus-pm-30-1",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=20",
			"sourceLabel": "Relecture du modèle et de son voisin, 28 octobre 2026, pages PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-28",
			"confidence": "B",
			"notes": "Réponse primaire complète relue le 28 octobre 2026 ; SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339. Comparaison documentaire, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBasis": [
			"october4-hertz-catalog-p20"
		],
		"model": [
			"october4-hertz-catalog-p20"
		],
		"maxPressureBar": [
			"october4-hertz-catalog-p20"
		],
		"tankLiters": [
			"october4-hertz-catalog-p20"
		],
		"fadCurve": [
			"october4-hertz-catalog-p20"
		],
		"powerKw": [
			"october4-hertz-catalog-p20"
		],
		"oilType": [
			"october4-hertz-catalog-p17"
		],
		"editorial": [
			"review-20261028-hertz-frecon-plus-pm-30-1"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
