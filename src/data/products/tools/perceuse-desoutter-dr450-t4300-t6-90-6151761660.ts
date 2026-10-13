import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-desoutter-dr450-t4300-t6-90-6151761660",
	"slug": "perceuse-desoutter-dr450-t4300-t6-90-6151761660",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Desoutter DR450-T4300-T6-90 (réf. 6151761660)",
	"brand": "Desoutter",
	"model": "DR450-T4300-T6-90",
	"mpn": "6151761660",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-desoutter-dr450-t4300-t6-90-6151761660.webp",
		"alt": "Repères techniques : Desoutter DR450-T4300-T6-90 (réf. 6151761660)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-dr450-t4300-t6-90",
		"label": "Référence 6151761660",
		"distinguishingAttributes": {
			"reference": "6151761660",
			"Entrée d’air (pouces)": "1/4",
			"Pince": "1/4 (6.4mm)",
			"Longueur": "253.5 mm"
		}
	},
	"editorial": {
		"overview": "Desoutter DR450-T4300-T6-90 (réf. 6151761660). Consommation à vide : 840 L/min à 6,3 bar. Entrée d’air (pouces) : 1/4. Pince : 1/4 (6.4mm).",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 297.",
			"Entrée d’air (pouces) : 1/4.",
			"Pince : 1/4 (6.4mm).",
			"Longueur : 253.5 mm."
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
			"value": "Page PDF 297",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		},
		{
			"label": "Pince",
			"value": "1/4 (6.4mm)",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		},
		{
			"label": "Longueur",
			"value": "253.5 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4300 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		},
		{
			"label": "Angle de tête",
			"value": "90",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "6 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		},
		{
			"label": "Couple de calage",
			"value": "4.2 Nm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Safety lever",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		},
		{
			"label": "Masse",
			"value": "0.76 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		},
		{
			"label": "Recoupement numérique avec le tableau PDF",
			"value": "Non établi pour cette ligne ; aucune confirmation croisée du débit revendiquée",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761660"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p297",
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=297",
			"sourceLabel": "desoutter-2026, page PDF 297",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé. Édition 09.2026 : ligne de référence, consommation publiée et pression page 345 recoupées le 13 octobre ; caractéristiques et incertitudes conservées."
		},
		{
			"id": "documented-d-desoutter-6151761660",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/6151761660",
			"sourceLabel": "Desoutter, fiche individuelle 6151761660",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 5c4f67515092e523be1368329414412e195ded95a28cf05a5bff554c8ac2b4de. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
		},
		{
			"id": "documented-d-desoutter-2026-p345",
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=345",
			"sourceLabel": "desoutter-2026, page PDF 345",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé. Édition 09.2026 : ligne de référence, consommation publiée et pression page 345 recoupées le 13 octobre ; caractéristiques et incertitudes conservées."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-desoutter-2026-p297"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p297",
			"documented-d-desoutter-2026-p345"
		],
		"airflowLpm": [
			"documented-d-desoutter-2026-p297",
			"documented-d-desoutter-6151761660"
		],
		"airflowBasis": [
			"documented-d-desoutter-2026-p297"
		]
	},
	"notes": [
		"Consommation à vide : 840 L/min à 6,3 bar."
	]
};

export default product;
