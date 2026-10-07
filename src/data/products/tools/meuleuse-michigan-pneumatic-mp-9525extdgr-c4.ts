import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-9525extdgr-c4",
	"slug": "meuleuse-michigan-pneumatic-mp-9525extdgr-c4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-9525EXTDGR-C4",
	"brand": "Michigan Pneumatic",
	"model": "MP-9525EXTDGR-C4",
	"mpn": "MP-9525EXTDGR-C4",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-9525extdgr-c4.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-9525EXTDGR-C4",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-9525extdgr-c4",
		"label": "Référence MP-9525EXTDGR-C4",
		"distinguishingAttributes": {
			"reference": "MP-9525EXTDGR-C4",
			"Masse publiée": "2.3 lbs",
			"Ligne technique constructeur": "MP-9525EXTDGR-C4 1\" Carbide Burr, 2\" Wheel 1/4\" Collet Rear 25,000 0.95 12-3/4\" 2.3 lbs 1/4\" 3/8\" 30 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-9525EXTDGR-C4. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.3 lbs. Ligne technique constructeur : MP-9525EXTDGR-C4 1\" Carbide Burr, 2\" Wheel 1/4\" Collet Rear 25,000 0.95 12-3/4\" 2.3 lbs 1/4\" 3/8\" 30 cfm.",
		"verifiedFacts": [
			"Masse publiée : 2.3 lbs.",
			"Ligne technique constructeur : MP-9525EXTDGR-C4 1\" Carbide Burr, 2\" Wheel 1/4\" Collet Rear 25,000 0.95 12-3/4\" 2.3 lbs 1/4\" 3/8\" 30 cfm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Données du catalogue constructeur archivé ; consommation moyenne ou de régime non précisé, sans certification du besoin maximal en charge.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.3 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p5"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-9525EXTDGR-C4 1\" Carbide Burr, 2\" Wheel 1/4\" Collet Rear 25,000 0.95 12-3/4\" 2.3 lbs 1/4\" 3/8\" 30 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p5"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "30 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p5",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=5",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p5"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p5"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
