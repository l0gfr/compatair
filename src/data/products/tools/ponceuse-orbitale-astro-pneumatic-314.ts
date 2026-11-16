import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-astro-pneumatic-314",
	"slug": "ponceuse-orbitale-astro-pneumatic-314",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Astro Pneumatic 314",
	"brand": "Astro Pneumatic",
	"model": "314",
	"mpn": "314",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-astro-pneumatic-314-technical-20261116-reserves.svg",
		"alt": "Repères techniques : Astro Pneumatic 314",
		"sourceUrl": "https://www.astrotools.com/product/onyx-jitterbug-random-orbit-air-palm-sander/",
		"sourceLabel": "Carte technique CompatAir, documents constructeur relus le 16 novembre 2026"
	},
	"variant": {
		"familyId": "astro-pneumatic-314",
		"label": "Référence 314",
		"distinguishingAttributes": {
			"reference": "314",
			"Plateau": "3 × 4 pouces (75 × 100 mm)",
			"Vitesse à vide": "12 000 tr/min",
			"Orbite": "3,0 mm / 3/32 pouce, divergence publiée"
		}
	},
	"editorial": {
		"overview": "La 314 utilise une semelle rectangulaire de 75 × 100 mm à 12 000 tr/min. La 321 documentée dans la même gamme emploie des plateaux circulaires de 2 ou 3 pouces à 16 000 tr/min ; sa fiche signale qu’elle n’est plus disponible. Le format de surface, plutôt qu’une différence de débit calculée, distingue ces outils. Pour la 314, la table donne 3 mm d’orbite et la présentation 3/32 pouce : cette divergence et les consommations de régimes différents restent explicites.",
		"verifiedFacts": [
			"Semelle 3 × 4 pouces (75 × 100 mm) et vitesse à vide 12 000 tr/min.",
			"Masse publiée 0,6 kg et longueur 135 mm.",
			"4,7 cfm moyens dans la documentation historique et 19 cfm dits « actual » dans la fiche actuelle."
		],
		"limitations": [
			"Le régime « actual » n’est pas une définition de consommation en charge à pression connue.",
			"L’orbite 3 mm et la course 3/32 pouce ne sont pas normalisées comme une valeur unique.",
			"La 321 est un voisin documentaire signalé indisponible ; elle n’est pas proposée comme offre commerciale.",
			"Données des documents identifiés, sans essai physique CompatAir ni garantie de disponibilité de la configuration livrée."
		]
	},
	"specifications": [
		{
			"label": "Dimension du plateau",
			"value": "3\" x 4\" (75 x 100 mm)",
			"evidenceIds": [
				"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:1"
			]
		},
		{
			"label": "Orbite",
			"value": "3,0 mm dans la table et 3/32 pouce dans la présentation ; valeurs divergentes",
			"evidenceIds": [
				"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:0",
				"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12,000 rpm",
			"evidenceIds": [
				"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:1"
			]
		},
		{
			"label": "Masse",
			"value": "1.32 lbs. (0.6 kgs)",
			"evidenceIds": [
				"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.7 cfm (133 l/min)",
			"evidenceIds": [
				"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4.7 cfm",
			"evidenceIds": [
				"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne relie pas une pression de mesure à la consommation publiée.",
			"evidenceIds": [
				"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:1"
			]
		},
		{
			"label": "Consommation « actual », hors calcul",
			"value": "19 cfm (549 L/min) ; régime non défini par la fiche",
			"evidenceIds": [
				"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-314-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-jitterbug-random-orbit-air-palm-sander/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 0df2f89d0496b1b121f8be0c259003da3796202fb6e558b17da7927b642fe969. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-orbitale-astro-pneumatic-314:0",
			"sourceUrl": "https://www.astrotools.com/product/onyx-jitterbug-random-orbit-air-palm-sander/",
			"sourceLabel": "Astro Pneumatic, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La 314 est une ponceuse à semelle 75 × 100 mm et 12 000 tr/min. La fiche annonce une orbite de 3 mm mais décrit aussi une course de 3/32 pouce, environ 2,38 mm : cette divergence reste à confirmer. La 321 est un format plus petit à 16 000 tr/min. La fiche sépare 4,7 cfm moyens et 19 cfm dits « actual », sans régime de mesure défini ; aucun des deux n’est utilisé comme débit en charge. GET complet SHA-256 fe698dcda7f69f883e6fb3c71707a19b832697ed848fa913eff5c1955d998338. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		},
		{
			"id": "review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:0",
			"sourceUrl": "https://www.astrotools.com/product/onyx-jitterbug-random-orbit-air-palm-sander/",
			"sourceLabel": "Astro Pneumatic, document relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Fiche 314, flyer officiel complet p1 et fiche voisine321 relus. Le défaut d’unité d’orbite reste visible dans la spécification active, et les régimes de consommation ne sont pas fusionnés. Valeur propre : semelle rectangulaire contre petits plateaux circulaires, avec moteur variable-volume non conclusif. GET complet SHA-256 fe698dcda7f69f883e6fb3c71707a19b832697ed848fa913eff5c1955d998338."
		},
		{
			"id": "review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-jitterbug-random-orbit-air-palm-sander/?attachment_id=2829&download_file=k554ozjbgpn80#page=1",
			"sourceLabel": "Astro Pneumatic, document relu le 16 novembre 2026 (pages PDF 1)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Fiche 314, flyer officiel complet p1 et fiche voisine321 relus. Le défaut d’unité d’orbite reste visible dans la spécification active, et les régimes de consommation ne sont pas fusionnés. Valeur propre : semelle rectangulaire contre petits plateaux circulaires, avec moteur variable-volume non conclusif. GET complet SHA-256 4ed5972a15c5fa56480ab4c402541c8244c322c641baa819ff2366bd06e94ea6."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reserves:ponceuse-orbitale-astro-pneumatic-314:0"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"Fiche 314, flyer officiel complet p1 et fiche voisine321 relus. Le défaut d’unité d’orbite reste visible dans la spécification active, et les régimes de consommation ne sont pas fusionnés. Valeur propre : semelle rectangulaire contre petits plateaux circulaires, avec moteur variable-volume non conclusif."
	]
};

export default product;
