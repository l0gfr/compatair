import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-gison-gp-250rm",
	"slug": "riveteuse-gison-gp-250rm",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "GISON GP-250RM",
	"brand": "GISON",
	"model": "GP-250RM",
	"mpn": "GP-250RM",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-gison-gp-250rm-20261106.svg",
		"alt": "Repères techniques : GISON GP-250RM",
		"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "gison-gp-250rm",
		"label": "Référence GP-250RM",
		"distinguishingAttributes": {
			"reference": "GP-250RM",
			"Masse": "2.4 kg",
			"Longueur": "278 mm"
		}
	},
	"editorial": {
		"overview": "GISON GP-250RM. Volume déclaré : 2 L par cycle, pression recommandée 6,205 bar. La cadence doit être renseignée pour dimensionner. Masse : 2.4 kg. Longueur : 278 mm.",
		"verifiedFacts": [
			"Masse : 2.4 kg.",
			"Longueur : 278 mm.",
			"Référence constructeur : GP-250RM."
		],
		"limitations": [
			"Le volume par cycle permet un calcul à cadence déclarée ; aucun nombre de cycles par minute supposé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée.",
			"La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "2.4 kg",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		},
		{
			"label": "Longueur",
			"value": "278 mm",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "GP-250RM",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Air Pressure 90 psi (6.3 kg/cm2)",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "GISON, catalogue pneumatique 2018–2019, page PDF 70",
			"evidenceIds": [
				"october-b-gison-tools-p70"
			]
		},
		{
			"label": "Volume publié par action, hors dimensionnement",
			"value": "2 L/action ; La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité.",
			"evidenceIds": [
				"review:2026-11-06-followup:riveteuse-gison-gp-250rm:1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-gison-tools-p70",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=70",
			"sourceLabel": "GISON, catalogue pneumatique 2018–2019, page PDF 70",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-06-followup:riveteuse-gison-gp-250rm:1",
			"sourceUrl": "https://www.gison.com.tw/Templates/att/GISON-Air-Tools-Pneumatic-Tools-Catalogs-2018-2019-en-A4.pdf?lng=en#page=70",
			"sourceLabel": "GISON, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "PDF70 : écrous M3àM12 aluminium/acier,traction2179 kgf,278 mm et2,4 kg,volume2 litres/cycle. La pression recommandée90 psi ne prouve pas la pression de mesure du volume. Conserver2 litres/cycle en spécification, retirer le calcul paramétrique non qualifié. SHA-256 du document complet : a2a15bbc194483ea2ed75229c0aea942929e93844a169903e6690ba1a2cb6077."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-gison-tools-p70"
		],
		"workingPressureBar": [
			"october-b-gison-tools-p70"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:riveteuse-gison-gp-250rm:1"
		]
	},
	"notes": [
		"Volume déclaré : 2 L par cycle, pression recommandée 6,205 bar. La cadence doit être renseignée pour dimensionner."
	],
	"demandExplanation": "La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
};

export default product;
