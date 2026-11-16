import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-puma-at-6105m",
	"slug": "riveteuse-puma-at-6105m",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "PUMA AT-6105M",
	"brand": "PUMA",
	"model": "AT-6105M",
	"mpn": "AT-6105M",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau associe le libellé par cycle aux unités scfm/l/min. Le volume par pose et le débit en charge restent indéterminés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-puma-at-6105m-technical-20261116-reviews.svg",
		"alt": "Repères techniques : PUMA AT-6105M",
		"sourceUrl": "https://www.pumaair.com/views/proimages/pd-en/PDF/PIC-2680/P067-AIR_HYDRAULIC_RIVETER-SPIN_PULL_TOOL-2680.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "puma-at-6105m",
		"label": "Référence AT-6105M",
		"distinguishingAttributes": {
			"Capacité d’écrous de la version M": "M4–M12",
			"Course": "7 mm",
			"Longueur": "278 mm",
			"Masse": "2,30 kg",
			"Traction Power, unités imprimées": "6 000 lb ; 2 722 kg"
		}
	},
	"editorial": {
		"overview": "PUMA AT-6105M : outil hydropneumatique de pose d’écrous M4–M12, course de 7 mm, longueur 278 mm et masse 2,30 kg. La version 6105 couvre les tailles impériales #6–1/2 pouce ; la 6306M couvre M3–M8. Le tableau mêle le libellé par cycle aux unités de débit minute : la valeur 2,1 reste dans son unité imprimée, sans calcul d’air par pose.",
		"verifiedFacts": [
			"Capacité d’écrous de la version M : M4–M12.",
			"Course : 7 mm.",
			"Longueur : 278 mm.",
			"Masse : 2,30 kg.",
			"Traction Power, unités imprimées : 6 000 lb ; 2 722 kg.",
			"Pression de service, unités imprimées : 85–95 psi ; 6–6,7 kg/cm².",
			"Consommation, libellé et unités imprimés : Avg. Air Consumption Per Rivet Cycle : 0,074 scfm ; 2,1 l/min."
		],
		"limitations": [
			"Le libellé Per Rivet Cycle et les unités scfm/l/min sont incompatibles pour définir un volume par pose. Aucun 2,1 L/action ni régime en charge n’est déduit.",
			"La plage de service reste distincte d’une pression de mesure de consommation.",
			"La fiche imprimée compare la 6306M, tandis que le HTML courant présente aussi la 6206M ; leurs caractéristiques ne sont pas fusionnées.",
			"Édition de la fiche PDF non précisée ; vérifier la référence et la configuration effectivement livrées."
		]
	},
	"specifications": [
		{
			"label": "Capacité d’écrous de la version M",
			"value": "M4–M12",
			"evidenceIds": [
				"review:2026-11-16-reviews:riveteuse-puma-at-6105m:0"
			]
		},
		{
			"label": "Course",
			"value": "7 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:riveteuse-puma-at-6105m:0"
			]
		},
		{
			"label": "Longueur",
			"value": "278 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:riveteuse-puma-at-6105m:0"
			]
		},
		{
			"label": "Masse",
			"value": "2,30 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:riveteuse-puma-at-6105m:0"
			]
		},
		{
			"label": "Traction Power, unités imprimées",
			"value": "6 000 lb ; 2 722 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:riveteuse-puma-at-6105m:0"
			]
		},
		{
			"label": "Pression de service, unités imprimées",
			"value": "85–95 psi ; 6–6,7 kg/cm²",
			"evidenceIds": [
				"review:2026-11-16-reviews:riveteuse-puma-at-6105m:0"
			]
		},
		{
			"label": "Consommation, libellé et unités imprimés",
			"value": "Avg. Air Consumption Per Rivet Cycle : 0,074 scfm ; 2,1 l/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:riveteuse-puma-at-6105m:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-48-pdp-267-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Spin-Pull-Tool-AirSpinPullTool.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Spin-Pull-Tool-AirSpinPullTool.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6dc6efda72ed3ec8481a9fa4b1247316f568d94ce93e229b6c5a9735f5022bf2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:riveteuse-puma-at-6105m:0",
			"sourceUrl": "https://www.pumaair.com/views/proimages/pd-en/PDF/PIC-2680/P067-AIR_HYDRAULIC_RIVETER-SPIN_PULL_TOOL-2680.pdf",
			"sourceLabel": "PUMA, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "PUMA AT-6105M : outil hydropneumatique de pose d’écrous M4–M12, course de 7 mm, longueur 278 mm et masse 2,30 kg. La version 6105 couvre les tailles impériales #6–1/2 pouce ; la 6306M couvre M3–M8. Le tableau mêle le libellé par cycle aux unités de débit minute : la valeur 2,1 reste dans son unité imprimée, sans calcul d’air par pose. GET complet SHA-256 4c1fb182e7fe8cb7c4aff9284f8d71288f5cbdc341648f7748aa66c23d4aead6. Pages PDF lues : 3."
		},
		{
			"id": "review:2026-11-16-reviews:riveteuse-puma-at-6105m:1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Spin-Pull-Tool-AirSpinPullTool.html",
			"sourceLabel": "PUMA, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "PUMA AT-6105M : outil hydropneumatique de pose d’écrous M4–M12, course de 7 mm, longueur 278 mm et masse 2,30 kg. La version 6105 couvre les tailles impériales #6–1/2 pouce ; la 6306M couvre M3–M8. Le tableau mêle le libellé par cycle aux unités de débit minute : la valeur 2,1 reste dans son unité imprimée, sans calcul d’air par pose. GET complet SHA-256 6dc6efda72ed3ec8481a9fa4b1247316f568d94ce93e229b6c5a9735f5022bf2. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:riveteuse-puma-at-6105m:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:riveteuse-puma-at-6105m:0",
			"review:2026-11-16-reviews:riveteuse-puma-at-6105m:1"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:riveteuse-puma-at-6105m:0",
			"review:2026-11-16-reviews:riveteuse-puma-at-6105m:1"
		]
	},
	"notes": [
		"Le tableau associe le libellé par cycle aux unités scfm/l/min. Le volume par pose et le débit en charge restent indéterminés."
	]
};

export default product;
