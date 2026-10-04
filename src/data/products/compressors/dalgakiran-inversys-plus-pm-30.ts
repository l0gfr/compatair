const product: unknown = {
	"id": "dalgakiran-inversys-plus-pm-30",
	"slug": "dalgakiran-inversys-plus-pm-30",
	"brand": "Dalgakiran",
	"model": "INVERSYS PLUS PM 30",
	"variant": {
		"familyId": "dalgakiran-inversys-plus-pm-30",
		"label": "Base Mounted, stockage d’air externe",
		"distinguishingAttributes": {
			"équipement": "Base Mounted, stockage d’air externe",
			"pressionDeConfiguration": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
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
		"src": "/images/products/dalgakiran-inversys-plus-pm-30.svg",
		"alt": "Repères techniques : Dalgakiran INVERSYS PLUS PM 30",
		"sourceUrl": "https://www.dalgakiran.com/Files/compressor-catalogue.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
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
			"label": "Air livré à 13 bar",
			"value": "1 200 L/min",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p20"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "30 kW",
			"evidenceIds": [
				"october4-dalgakiran-catalog-p20"
			]
		}
	],
	"editorial": {
		"overview": "Dalgakiran INVERSYS PLUS PM 30. 1 200 L/min déclarés à 13 bar. Base Mounted, stockage d’air externe.",
		"verifiedFacts": [
			"Configuration de pression documentée : 13 bar.",
			"Montage sans réservoir de stockage intégré explicitement documenté.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 1 200 L/min déclarés à 13 bar."
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
		}
	],
	"fieldSources": {
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
			"october4-dalgakiran-catalog-p20"
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
