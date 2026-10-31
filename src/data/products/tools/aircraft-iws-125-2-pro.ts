import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-iws-125-2-pro",
	"slug": "aircraft-iws-125-2-pro",
	"brand": "Aircraft",
	"model": "IWS 125-2 PRO",
	"mpn": "2403483",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Aircraft IWS 125-2 PRO",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-iws-125-2-pro.webp",
		"alt": "Repères techniques Aircraft IWS 125-2 PRO, référence 2403483",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft IWS 125-2 PRO. Les documents Aircraft de la même référence divergent : 326 L/min dans la notice 2019 contre 113 L/min dans le catalogue 2026/27. Ces éditions restent séparées ; une consommation unique doit être confirmée pour la machine livrée. Référence fabricant : 2403483. Diamètre intérieur du flexible : 10 mm. Diamètre de disque : 125 mm. Longueur approximative : 239 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Référence fabricant : 2403483.",
			"Diamètre intérieur du flexible : 10 mm.",
			"Diamètre de disque : 125 mm.",
			"Longueur approximative : 239 mm.",
			"Valeur documentaire conservée : 326 L/min. Les documents Aircraft de la même référence divergent : 326 L/min dans la notice 2019 contre 113 L/min dans le catalogue 2026/27. Ces éditions restent séparées ; une consommation unique doit être confirmée pour la machine livrée."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Écarts entre documents fabricant : Consommation : relevé du 27/09/2026 et notice 2019 = 326 L/min moyens ; catalogue 2026/27 = 113 L/min, régime non précisé.",
			"Les documents Aircraft de la même référence divergent : 326 L/min dans la notice 2019 contre 113 L/min dans le catalogue 2026/27. Ces éditions restent séparées ; une consommation unique doit être confirmée pour la machine livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2403483-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 326 L/min. Les documents Aircraft de la même référence divergent : 326 L/min dans la notice 2019 contre 113 L/min dans le catalogue 2026/27. Ces éditions restent séparées ; une consommation unique doit être confirmée pour la machine livrée.",
			"evidenceIds": [
				"aircraft-iws-125-2-pro-reserved-20261031-1",
				"aircraft-iws-125-2-pro-reserved-20261031-2"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "10 mm",
			"evidenceIds": [
				"aircraft-2403483-20260927"
			]
		},
		{
			"label": "Diamètre de disque",
			"value": "125 mm",
			"evidenceIds": [
				"aircraft-2403483-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "239 mm",
			"evidenceIds": [
				"aircraft-2403483-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "140.2 mm",
			"evidenceIds": [
				"aircraft-2403483-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "232.1 mm",
			"evidenceIds": [
				"aircraft-2403483-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "2 kg",
			"evidenceIds": [
				"aircraft-2403483-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Angle grinder",
			"evidenceIds": [
				"aircraft-2403483-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Consommation : relevé du 27/09/2026 et notice 2019 = 326 L/min moyens ; catalogue 2026/27 = 113 L/min, régime non précisé.",
			"evidenceIds": [
				"aircraft-2403483-20260927",
				"aircraft-2403483-documentation-20261023",
				"aircraft-2403483-documentation-20261023-catalogue"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":326,\"typical\":326,\"max\":326},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"aircraft-2403483-20260927",
				"aircraft-iws-125-2-pro-reserved-20261031-1",
				"aircraft-iws-125-2-pro-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403483-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403483, réf. 2403483 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 326 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2403483-documentation-20261023",
			"sourceUrl": "https://www.mystuermer.com/MeDaPro/Rohdaten/Dokumente/Betriebsanleitung_de/AC_BA_2403483_IWS_125-2_PRO_DE.pdf#page=4",
			"sourceLabel": "AIRCRAFT Kompressorenbau und Maschinenhandel GmbH, Notice du 11/07/2019, p. 4 (article 2403483)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : mystuermer.com, hébergement fabricant. Empreinte PDF SHA-256 : 0bfee895f08697d6a85946afdb643e38112b7c73c3ae2162792be081d50222ca. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-2403483-documentation-20261023-catalogue",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=258",
			"sourceLabel": "Aircraft, catalogue fabricant 2026/27, p. 258 (déclaration divergente, article 2403483)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Catalogue fabricant consulté le 23/10/2026, régime de consommation non précisé. PDF SHA-256 : 6a7136e5780ad551227d2378d940de7431077324181b3a3b23435803482cb56c. Cette déclaration reste distincte du débit moyen publié dans la notice ou brochure."
		},
		{
			"id": "aircraft-iws-125-2-pro-reserved-20261031-1",
			"sourceUrl": "https://www.mystuermer.com/MeDaPro/Rohdaten/Dokumente/Betriebsanleitung_de/AC_BA_2403483_IWS_125-2_PRO_DE.pdf#page=4",
			"sourceLabel": "Aircraft IWS 125-2 PRO : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 0bfee895f08697d6a85946afdb643e38112b7c73c3ae2162792be081d50222ca. Les documents Aircraft de la même référence divergent : 326 L/min dans la notice 2019 contre 113 L/min dans le catalogue 2026/27. Ces éditions restent séparées ; une consommation unique doit être confirmée pour la machine livrée."
		},
		{
			"id": "aircraft-iws-125-2-pro-reserved-20261031-2",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=258",
			"sourceLabel": "Aircraft IWS 125-2 PRO : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 6a7136e5780ad551227d2378d940de7431077324181b3a3b23435803482cb56c. Les documents Aircraft de la même référence divergent : 326 L/min dans la notice 2019 contre 113 L/min dans le catalogue 2026/27. Ces éditions restent séparées ; une consommation unique doit être confirmée pour la machine livrée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403483-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403483-20260927"
		],
		"demandModel": [
			"aircraft-iws-125-2-pro-reserved-20261031-1",
			"aircraft-iws-125-2-pro-reserved-20261031-2"
		],
		"demandExplanation": [
			"aircraft-iws-125-2-pro-reserved-20261031-1",
			"aircraft-iws-125-2-pro-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Les documents Aircraft de la même référence divergent : 326 L/min dans la notice 2019 contre 113 L/min dans le catalogue 2026/27. Ces éditions restent séparées ; une consommation unique doit être confirmée pour la machine livrée."
};

export default product;
