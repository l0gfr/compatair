import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-srd-3-45-3",
	"slug": "biax-srd-3-45-3",
	"brand": "BIAX",
	"model": "SRD 3-45/3",
	"mpn": "150010775",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SRD 3-45/3",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-srd-3-45-3-technical-20261116-reviews.svg",
		"alt": "Repères techniques BIAX SRD 3-45/3, référence 150010775",
		"sourceUrl": "https://biax.de/en/product/srd-3-45-3-45-000-1-min-rotary-valve/",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La SRD 3-45/3 150010775 est une meuleuse droite à valve rotative et broche fine pour atteindre les zones difficiles d’accès. Elle publie 260 W, 45 000 tr/min et une pince de 3 mm. Les SRD 3-30/2 et 3-55/2 KE ont d’autres vitesses et puissances ; les 380 L/min de la fiche ne sont pas appariés à une pression de mesure explicite.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 380 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150010775.",
			"Puissance publiée : 260 W.",
			"Vitesse de rotation : 45.000 tr/min.",
			"Masse publiée : 310 g."
		],
		"limitations": [
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir.",
			"La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité."
		]
	},
	"specifications": [
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 380 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150010775-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "260 W",
			"evidenceIds": [
				"biax-150010775-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "45.000 tr/min",
			"evidenceIds": [
				"biax-150010775-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "310 g",
			"evidenceIds": [
				"biax-150010775-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "3 mm",
			"evidenceIds": [
				"biax-150010775-20260926"
			]
		},
		{
			"label": "Consommation documentaire, hors calcul",
			"value": "380 L/min ; pression de mesure non établie",
			"evidenceIds": [
				"review:2026-11-16-reviews:biax-srd-3-45-3:0",
				"review:2026-11-16-reviews:biax-srd-3-45-3:1"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150010775-20260926",
			"sourceUrl": "https://biax.de/en/product/srd-3-45-3-45-000-1-min-rotary-valve/",
			"sourceLabel": "BIAX, fiche technique SRD 3-45/3 – 45.000 1/min, Rotary Valve, réf. 150010775",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 380 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150010775-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=18",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 18",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "review:2026-11-16-reviews:biax-srd-3-45-3:0",
			"sourceUrl": "https://biax.de/en/product/srd-3-45-3-45-000-1-min-rotary-valve/",
			"sourceLabel": "BIAX, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La SRD 3-45/3 150010775 est une meuleuse droite à valve rotative et broche fine pour atteindre les zones difficiles d’accès. Elle publie 260 W, 45 000 tr/min et une pince de 3 mm. Les SRD 3-30/2 et 3-55/2 KE ont d’autres vitesses et puissances ; les 380 L/min de la fiche ne sont pas appariés à une pression de mesure explicite. GET complet SHA-256 f2e1dbd0c2f53401eeeeadb0f88efd020c4db921038ee4f9c76d0c0cf0aac199. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		},
		{
			"id": "review:2026-11-16-reviews:biax-srd-3-45-3:1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf",
			"sourceLabel": "BIAX, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La SRD 3-45/3 150010775 est une meuleuse droite à valve rotative et broche fine pour atteindre les zones difficiles d’accès. Elle publie 260 W, 45 000 tr/min et une pince de 3 mm. Les SRD 3-30/2 et 3-55/2 KE ont d’autres vitesses et puissances ; les 380 L/min de la fiche ne sont pas appariés à une pression de mesure explicite. GET complet SHA-256 318971fb9ba951f395b81cbca3d1e57938ce23b74db3aef25ff98bb8f0edc6c8. Pages PDF lues : 18."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150010775-20260926"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:biax-srd-3-45-3:0",
			"review:2026-11-16-reviews:biax-srd-3-45-3:1"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:biax-srd-3-45-3:0",
			"review:2026-11-16-reviews:biax-srd-3-45-3:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de service publiée ne précise pas la pression de mesure de la consommation. Le débit documentaire reste hors du calcul de compatibilité."
};

export default product;
