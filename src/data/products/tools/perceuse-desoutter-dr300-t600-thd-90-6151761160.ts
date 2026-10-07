import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-desoutter-dr300-t600-thd-90-6151761160",
	"slug": "perceuse-desoutter-dr300-t600-thd-90-6151761160",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Desoutter DR300-T600-THD-90 (réf. 6151761160)",
	"brand": "Desoutter",
	"model": "DR300-T600-THD-90",
	"mpn": "6151761160",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 570,
		"typical": 570,
		"max": 570
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-desoutter-dr300-t600-thd-90-6151761160.webp",
		"alt": "Repères techniques : Desoutter DR300-T600-THD-90 (réf. 6151761160)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-dr300-t600-thd-90",
		"label": "Référence 6151761160",
		"distinguishingAttributes": {
			"reference": "6151761160",
			"Entrée d’air (pouces)": "1/4",
			"Longueur": "206 mm",
			"Vitesse à vide": "600 rpm"
		}
	},
	"editorial": {
		"overview": "Desoutter DR300-T600-THD-90 (réf. 6151761160). Consommation à vide : 570 L/min à 6,3 bar. Entrée d’air (pouces) : 1/4. Longueur : 206 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 298.",
			"Entrée d’air (pouces) : 1/4.",
			"Longueur : 206 mm.",
			"Vitesse à vide : 600 rpm."
		],
		"limitations": [
			"Le débit à vide seul ne confirme pas la consommation maximale ou en charge. Le verdict reste insufficient_data.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 298",
			"evidenceIds": [
				"documented-d-desoutter-2026-p298",
				"documented-d-desoutter-6151761160"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p298",
				"documented-d-desoutter-6151761160"
			]
		},
		{
			"label": "Longueur",
			"value": "206 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p298",
				"documented-d-desoutter-6151761160"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "600 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p298",
				"documented-d-desoutter-6151761160"
			]
		},
		{
			"label": "Angle de tête",
			"value": "90",
			"evidenceIds": [
				"documented-d-desoutter-2026-p298",
				"documented-d-desoutter-6151761160"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "6 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p298",
				"documented-d-desoutter-6151761160"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Safety lever",
			"evidenceIds": [
				"documented-d-desoutter-2026-p298",
				"documented-d-desoutter-6151761160"
			]
		},
		{
			"label": "Masse",
			"value": "0.83 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p298",
				"documented-d-desoutter-6151761160"
			]
		},
		{
			"label": "Recoupement numérique avec le tableau PDF",
			"value": "Non établi pour cette ligne ; aucune confirmation croisée du débit revendiquée",
			"evidenceIds": [
				"documented-d-desoutter-2026-p298",
				"documented-d-desoutter-6151761160"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p298",
			"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf#page=298",
			"sourceLabel": "desoutter-2026, page PDF 298",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 69b46fe9fc41aa8c1b174a8e7e32686b6b20e2884c95db1c461caa6ddf33c9ad. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-desoutter-6151761160",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/6151761160",
			"sourceLabel": "Desoutter, fiche individuelle 6151761160",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 d9f05649422acf500e608e4606e58f0d243fcd2fdbfa34658f99017c95a5b42e. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
		},
		{
			"id": "documented-d-desoutter-2026-p345",
			"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf#page=345",
			"sourceLabel": "desoutter-2026, page PDF 345",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 69b46fe9fc41aa8c1b174a8e7e32686b6b20e2884c95db1c461caa6ddf33c9ad. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-desoutter-2026-p298"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p298",
			"documented-d-desoutter-2026-p345"
		],
		"airflowLpm": [
			"documented-d-desoutter-2026-p298",
			"documented-d-desoutter-6151761160"
		],
		"airflowBasis": [
			"documented-d-desoutter-2026-p298"
		]
	},
	"notes": [
		"Consommation à vide : 570 L/min à 6,3 bar."
	]
};

export default product;
