import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377",
	"slug": "pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "SATA SATAjet 1000 B HVLP 1.4 (réf. 149377)",
	"brand": "SATA",
	"model": "SATAjet 1000 B HVLP 1.4",
	"mpn": "149377",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 2,
		"typical": 2,
		"max": 2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377.svg",
		"alt": "Repères techniques : SATA SATAjet 1000 B HVLP 1.4 (réf. 149377)",
		"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806#page=38",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sata-satajet-1000-b-hvlp-1-4",
		"label": "Référence 149377",
		"distinguishingAttributes": {
			"reference": "149377",
			"Technologie de pulvérisation": "HVLP",
			"Buse": "1,4 mm"
		}
	},
	"editorial": {
		"overview": "SATA SATAjet 1000 B HVLP 1.4. Le code 149377 correspond à la buse 1,4 mm avec godet plastique QCC0,6 L et sans raccord articulé. Le code 149385 est en1,7 mm et 149401 en2,1 mm dans la même table. Les 350 Nl/min restent dans leur unité originale ; les conditions de référence nécessaires au rapprochement avec le FAD manquent.",
		"verifiedFacts": [
			"Technologie : HVLP.",
			"Buse : 1,4 mm.",
			"Godet livré : QCC plastique réutilisable de 0,6 L.",
			"Raccord articulé : Sans raccord articulé.",
			"Pression recommandée : 2,0 bar.",
			"Consommation dans son unité publiée : 350 Nl/min.",
			"Distance de pulvérisation recommandée : 13–17 cm."
		],
		"limitations": [
			"Valeur normalisée350 Nl/min conservée sans conversion silencieuse vers les litres d’air libre du compresseur.",
			"La notice historique liée est actuellement en404 ; les assertions courantes proviennent de la table fabricant2025 accessible, page 38."
		]
	},
	"specifications": [
		{
			"label": "Technologie",
			"value": "HVLP",
			"evidenceIds": [
				"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
			]
		},
		{
			"label": "Buse",
			"value": "1,4 mm",
			"evidenceIds": [
				"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
			]
		},
		{
			"label": "Godet livré",
			"value": "QCC plastique réutilisable de 0,6 L",
			"evidenceIds": [
				"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
			]
		},
		{
			"label": "Raccord articulé",
			"value": "Sans raccord articulé",
			"evidenceIds": [
				"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
			]
		},
		{
			"label": "Pression recommandée",
			"value": "2,0 bar",
			"evidenceIds": [
				"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation dans son unité publiée",
			"value": "350 Nl/min",
			"evidenceIds": [
				"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
			]
		},
		{
			"label": "Distance de pulvérisation recommandée",
			"value": "13–17 cm",
			"evidenceIds": [
				"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-sata-current-catalog-2025-p38",
			"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806#page=38",
			"sourceLabel": "SATA, document technique officiel, page PDF 38",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 36dec44ae129bc0052bc9fa43c54c9be507c6a3683df465f0cb38d950d749fe3. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-sata-1000b-actual-manual-p114",
			"sourceUrl": "https://www.sata.com/media/07/ff/ff/1791809355/BAL-SATAJET-1000-B.PDF.PDF?ts=1791809355#page=114",
			"sourceLabel": "SATA, document technique officiel, page PDF 114",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 fcb179890de6fb84bab9465d6c4a3dd5f60da7f75fdd591b1ac219a02e558f45. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-sata-1000b-actual-manual-p115",
			"sourceUrl": "https://www.sata.com/media/07/ff/ff/1791809355/BAL-SATAJET-1000-B.PDF.PDF?ts=1791809355#page=115",
			"sourceLabel": "SATA, document technique officiel, page PDF 115",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 fcb179890de6fb84bab9465d6c4a3dd5f60da7f75fdd591b1ac219a02e558f45. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-sata-1000b-actual-manual-p118",
			"sourceUrl": "https://www.sata.com/media/07/ff/ff/1791809355/BAL-SATAJET-1000-B.PDF.PDF?ts=1791809355#page=118",
			"sourceLabel": "SATA, document technique officiel, page PDF 118",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 fcb179890de6fb84bab9465d6c4a3dd5f60da7f75fdd591b1ac219a02e558f45. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-sata-1000b-actual-manual-p119",
			"sourceUrl": "https://www.sata.com/media/07/ff/ff/1791809355/BAL-SATAJET-1000-B.PDF.PDF?ts=1791809355#page=119",
			"sourceLabel": "SATA, document technique officiel, page PDF 119",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 fcb179890de6fb84bab9465d6c4a3dd5f60da7f75fdd591b1ac219a02e558f45. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1",
			"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806#page=38",
			"sourceLabel": "SATA : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 36dec44ae129bc0052bc9fa43c54c9be507c6a3683df465f0cb38d950d749fe3. Le code 149377 correspond à la buse 1,4 mm avec godet plastique QCC0,6 L et sans raccord articulé. Le code 149385 est en1,7 mm et 149401 en2,1 mm dans la même table. Les 350 Nl/min restent dans leur unité originale ; les conditions de référence nécessaires au rapprochement avec le FAD manquent."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-sata-current-catalog-2025-p38"
		],
		"workingPressureBar": [
			"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
		],
		"image": [
			"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
		],
		"demandModel": [
			"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
		],
		"demandExplanation": [
			"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
		],
		"editorial": [
			"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
		],
		"specifications": [
			"pistolet-peinture-hvlp-sata-satajet-1000-b-hvlp-1-4-149377-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de référence en fonctionnement : 350 L/min à 2 bar."
	],
	"demandExplanation": "Le catalogue publie350 Nl/min et recommande2 bar. Les conditions thermodynamiques de référence du volume normalisé restent à confirmer avant rapprochement avec le FAD du compresseur."
};

export default product;
