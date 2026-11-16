import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bp-pro-l",
	"slug": "aircraft-bp-pro-l",
	"brand": "Aircraft",
	"model": "BP PRO L",
	"mpn": "2112123",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Aircraft BP PRO L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bp-pro-l-technical-20261116-reviews.svg",
		"alt": "Repères techniques Aircraft BP PRO L, référence 2112123",
		"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=231",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Aircraft BP PRO L : tube de soufflage de 250 mm, contre 500 mm pour la XL et 1 000 mm pour la EXL à buse Venturi/latérale. Le catalogue 2026/27 indique 150 L/min approximatifs sans régime de mesure. La masse de 0,2 kg diffère du relevé historique à 0,16 kg ; ces deux relevés restent identifiés.",
		"verifiedFacts": [
			"Tube : 250 mm.",
			"Diamètres extérieur du tube / sortie : 6 / 3 mm.",
			"Pression de service / entrée maximale : 6 / 11 bar.",
			"Masse approximative, catalogue 2026/27 : 0,2 kg.",
			"Consommation approximative, régime non précisé : 150 L/min."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer.",
			"Le relevé historique et le catalogue donnent des masses différentes ; vérifier la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Tube",
			"value": "250 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-bp-pro-l:0"
			]
		},
		{
			"label": "Diamètres extérieur du tube / sortie",
			"value": "6 / 3 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-bp-pro-l:0"
			]
		},
		{
			"label": "Pression de service / entrée maximale",
			"value": "6 / 11 bar",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-bp-pro-l:0"
			]
		},
		{
			"label": "Masse approximative, catalogue 2026/27",
			"value": "0,2 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-bp-pro-l:0"
			]
		},
		{
			"label": "Consommation approximative, régime non précisé",
			"value": "150 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:aircraft-bp-pro-l:0"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2112123-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2112123, réf. 2112123 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2112123-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=231",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 231 (article 2112123)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : bc60546f310ec633fe500c22a71abb07b8a23499e7359d7ef6a8a505c786fa2f. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "review:2026-11-16-reviews:aircraft-bp-pro-l:0",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=231",
			"sourceLabel": "Aircraft, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Aircraft BP PRO L : tube de soufflage de 250 mm, contre 500 mm pour la XL et 1 000 mm pour la EXL à buse Venturi/latérale. Le catalogue 2026/27 indique 150 L/min approximatifs sans régime de mesure. La masse de 0,2 kg diffère du relevé historique à 0,16 kg ; ces deux relevés restent identifiés. GET complet SHA-256 bc60546f310ec633fe500c22a71abb07b8a23499e7359d7ef6a8a505c786fa2f. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:aircraft-bp-pro-l:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:aircraft-bp-pro-l:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:aircraft-bp-pro-l:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
