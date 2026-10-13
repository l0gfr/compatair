import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-desoutter-dr750-p3300-jt1-2051466644",
	"slug": "perceuse-desoutter-dr750-p3300-jt1-2051466644",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Desoutter DR750-P3300-JT1 (réf. 2051466644)",
	"brand": "Desoutter",
	"model": "DR750-P3300-JT1",
	"mpn": "2051466644",
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
		"src": "/images/products/perceuse-desoutter-dr750-p3300-jt1-2051466644.webp",
		"alt": "Repères techniques : Desoutter DR750-P3300-JT1 (réf. 2051466644)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-dr750-p3300-jt1",
		"label": "Référence 2051466644",
		"distinguishingAttributes": {
			"reference": "2051466644",
			"Entrée d’air (pouces)": "1/4",
			"Type de mandrin": "No chuck",
			"Longueur": "152 mm"
		}
	},
	"editorial": {
		"overview": "Desoutter DR750-P3300-JT1 (réf. 2051466644). Consommation à vide : 840 L/min à 6,3 bar. Entrée d’air (pouces) : 1/4. Type de mandrin : No chuck.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 302.",
			"Entrée d’air (pouces) : 1/4.",
			"Type de mandrin : No chuck.",
			"Longueur : 152 mm."
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
			"value": "Page PDF 302",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466644"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466644"
			]
		},
		{
			"label": "Type de mandrin",
			"value": "No chuck",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466644"
			]
		},
		{
			"label": "Longueur",
			"value": "152 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466644"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3300 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466644"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "10 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466644"
			]
		},
		{
			"label": "Couple de calage",
			"value": "9.6 Nm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466644"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Trigger",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466644"
			]
		},
		{
			"label": "Masse",
			"value": "0.9 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466644"
			]
		},
		{
			"label": "Recoupement numérique avec le tableau PDF",
			"value": "Non établi pour cette ligne ; aucune confirmation croisée du débit revendiquée",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466644"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p302",
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=302",
			"sourceLabel": "desoutter-2026, page PDF 302",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé. Édition 09.2026 : ligne de référence, consommation publiée et pression page 345 recoupées le 13 octobre ; caractéristiques et incertitudes conservées."
		},
		{
			"id": "documented-d-desoutter-2051466644",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/2051466644",
			"sourceLabel": "Desoutter, fiche individuelle 2051466644",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 e585f9dc2db8b681927a2c6f9d6d86e71102e32c4b5df4c6aeda39ad317e06cc. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
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
			"documented-d-desoutter-2026-p302"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p302",
			"documented-d-desoutter-2026-p345"
		],
		"airflowLpm": [
			"documented-d-desoutter-2026-p302",
			"documented-d-desoutter-2051466644"
		],
		"airflowBasis": [
			"documented-d-desoutter-2026-p302"
		]
	},
	"notes": [
		"Consommation à vide : 840 L/min à 6,3 bar."
	]
};

export default product;
