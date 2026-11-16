import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-iss-3-4-pro",
	"slug": "aircraft-iss-3-4-pro",
	"brand": "Aircraft",
	"model": "ISS 3/4\" PRO",
	"mpn": "2401440",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircraft ISS 3/4\" PRO",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-iss-3-4-pro-technical-20261116-reviews.svg",
		"alt": "Repères techniques Aircraft ISS 3/4\" PRO, référence 2401440",
		"sourceUrl": "https://www.aarniotools.fi/wp-content/uploads/2020/10/AIRCRAFT_catalogue_2019-1.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Aircraft ISS 3/4 PRO 2401440 : entraînement carré 3/4 pouce, mécanisme à rouleaux, trois réglages de serrage et échappement par la poignée. Le catalogue 2019 distingue cette référence de la 1 PRO à broche de 200 mm. Ses 510 L/min approximatifs diffèrent des 230 L/min du relevé historique ; aucune des deux valeurs ne devient une demande en charge qualifiée.",
		"verifiedFacts": [
			"Carré / raccord : 3/4 / 3/8 pouce.",
			"Couples de serrage : 338 / 1 016 / 1 350 Nm.",
			"Couple maximal de desserrage : 1 620 Nm.",
			"Pression de service : 6,3 bar.",
			"Masse, catalogue 2019 : 3,8 kg.",
			"Consommation approximative, catalogue 2019 : 510 L/min."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer.",
			"Écart de consommation entre versions : 230 L/min dans le relevé antérieur et 510 L/min dans le catalogue 2019. Les éditions ne sont pas fusionnées."
		]
	},
	"specifications": [
		{
			"label": "Carré / raccord",
			"value": "3/4 / 3/8 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-iss-3-4-pro:0"
			]
		},
		{
			"label": "Couples de serrage",
			"value": "338 / 1 016 / 1 350 Nm",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-iss-3-4-pro:0"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "1 620 Nm",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-iss-3-4-pro:0"
			]
		},
		{
			"label": "Pression de service",
			"value": "6,3 bar",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-iss-3-4-pro:0"
			]
		},
		{
			"label": "Masse, catalogue 2019",
			"value": "3,8 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-iss-3-4-pro:0"
			]
		},
		{
			"label": "Consommation approximative, catalogue 2019",
			"value": "510 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-iss-3-4-pro:0"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401440-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401440, réf. 2401440 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 230 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2401440-documentation-20261023",
			"sourceUrl": "https://www.aarniotools.fi/wp-content/uploads/2020/10/AIRCRAFT_catalogue_2019-1.pdf#page=191",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, Catalogue AIRCRAFT 2019, p. 191 (article 2401440)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : document fabricant diffusé par Aarnio Tools. Empreinte PDF SHA-256 : f23efcb9a198fbca962f2b2ef05942c910cb6c522d1219e33473889bde99d62a. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "review:2026-11-16-reviews:aircraft-iss-3-4-pro:0",
			"sourceUrl": "https://www.aarniotools.fi/wp-content/uploads/2020/10/AIRCRAFT_catalogue_2019-1.pdf",
			"sourceLabel": "Aircraft, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Aircraft ISS 3/4 PRO 2401440 : entraînement carré 3/4 pouce, mécanisme à rouleaux, trois réglages de serrage et échappement par la poignée. Le catalogue 2019 distingue cette référence de la 1 PRO à broche de 200 mm. Ses 510 L/min approximatifs diffèrent des 230 L/min du relevé historique ; aucune des deux valeurs ne devient une demande en charge qualifiée. GET complet SHA-256 f23efcb9a198fbca962f2b2ef05942c910cb6c522d1219e33473889bde99d62a. Pages PDF lues : 191."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:aircraft-iss-3-4-pro:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:aircraft-iss-3-4-pro:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:aircraft-iss-3-4-pro:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
