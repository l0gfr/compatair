import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295",
	"slug": "pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "SATA jet X RP 1.1 I BASIC (réf. 1200295)",
	"brand": "SATA",
	"model": "jet X RP 1.1 I BASIC",
	"mpn": "1200295",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 0.5,
		"typical": 2,
		"max": 2.4
	},
	"demandExplanation": "335 Nl/min dans le catalogue 2025, contre 325 Nl/min dans une notice historique désormais inaccessible. La convention et les conditions applicables ne sont pas arbitrées ; aucun débit moteur n’est ajouté.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295-technical-20261116-reserves.svg",
		"alt": "Repères techniques : SATA jet X RP 1.1 I BASIC (réf. 1200295)",
		"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806",
		"sourceLabel": "Carte technique CompatAir, documents constructeur relus le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sata-jet-x-rp-1-1-i-basic",
		"label": "Référence 1200295",
		"distinguishingAttributes": {
			"reference": "1200295",
			"Technologie de pulvérisation": "RP",
			"Profil de buse": "I"
		}
	},
	"editorial": {
		"overview": "Le jet X 1200295 est le RP à profil de buse I de 1,1, dans la configuration BASIC. Le 1200378 passe à 1,2 ; les configurations DIGITAL de la même table ne sont pas cette version BASIC. Le catalogue annonce 335 Nl/min pour RP et 445 pour HVLP, avec une distance de pulvérisation RP de 17–21 cm. Les 325 Nl/min de la notice historique restent une divergence de version, sans point de débit retenu par le moteur.",
		"verifiedFacts": [
			"Tableau p14 : BASIC, RP, profil I 1,1, code 1200295.",
			"Domaine d’entrée 0,5–2,4 bar ; consigne recommandée 2,0 bar.",
			"1200378 : buse 1,2 dans la même ligne RP BASIC."
		],
		"limitations": [
			"La notice historique 325 Nl/min reste inaccessible ; sa réserve n’est pas effacée par le catalogue.",
			"La plage d’application et la consigne d’air ne qualifient pas seules la pression de mesure du débit normal.",
			"La fiche d’une autre référence HVLP n’est pas utilisée pour corriger le débit de cette RP.",
			"Données des documents identifiés, sans essai physique CompatAir ni garantie de disponibilité de la configuration livrée."
		]
	},
	"specifications": [
		{
			"label": "Technologie et configuration",
			"value": "RP, profil I, buse 1,1, BASIC ; référence 1200295",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295:0"
			]
		},
		{
			"label": "Consommation catalogue 2025, hors calcul",
			"value": "335 Nl/min pour RP ; la colonne HVLP donne 445 Nl/min",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295:0"
			]
		},
		{
			"label": "Pression recommandée et domaine d’application",
			"value": "2,0 bar ; plage d’entrée 0,5–2,4 bar",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295:0"
			]
		},
		{
			"label": "Distance de pulvérisation recommandée",
			"value": "17–21 cm pour RP, contre 10–15 cm pour HVLP",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295:0"
			]
		},
		{
			"label": "Alternative de buse",
			"value": "1200378 : RP 1,2 I BASIC, sans changement de consommation de famille démontré",
			"evidenceIds": [
				"review:2026-11-16-reserves:pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295:0"
			]
		},
		{
			"label": "Réserve historique non levée",
			"value": "Une notice capturée en octobre donnait 325 Nl/min à 2,0 bar. Elle est aujourd’hui HTTP 404 ; la différence de version reste à établir.",
			"evidenceIds": [
				"october3d-tools-sata-more-jet-x-manual-85-p102"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-sata-current-catalog-2025-p14",
			"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806#page=14",
			"sourceLabel": "SATA, document technique officiel, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 36dec44ae129bc0052bc9fa43c54c9be507c6a3683df465f0cb38d950d749fe3. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-sata-more-jet-x-manual-85-p102",
			"sourceUrl": "https://www.sata.com/media/60/1f/f5/1791809353/MULTILINGUAL-SATA-OPERATING-MANUAL-JET-X-3266-240619-2.PDF.PDF?ts=1791809353#page=102",
			"sourceLabel": "SATA, document technique officiel, page PDF 102",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 8b7cd0371d23eaae39f0098290ae5941ed87764dc320ec71180c99f860efcb0e. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "october3d-tools-sata-baseline-1200170-recheck-p1",
			"sourceUrl": "https://www.sata.com/en/premium-spray-gun-for-automotive-refinish-jet-x-hvlp-1.3-i-control-nozzle-basic-suitable-for-water-and-solvent-based-basecoats-as-well-as-1k-2k-topcoat-systems/1200170",
			"sourceLabel": "SATA, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 3fc1a486bdd5ee9f5b609cc09300c8f7a2dc94e8a1393d752726496ee84366b2. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reserves:pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295:0",
			"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806#page=14",
			"sourceLabel": "SATA, document relu le 16 novembre 2026 (pages PDF 14)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Catalogue actuel complet relu p14 avec code et colonnes RP/HVLP/BASIC, ainsi que la voisine 1200378. Les affirmations actives reposent sur cette page ; l’ancienne notice 404 reste une transcription datée, sans arbitrage de consommation. L’intérêt distinct porte sur le choix RP/BASIC et la buse, avec calcul non conclusif. GET complet SHA-256 36dec44ae129bc0052bc9fa43c54c9be507c6a3683df465f0cb38d950d749fe3."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reserves:pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reserves:pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reserves:pistolet-peinture-sata-jet-x-rp-1-1-i-basic-1200295:0"
		]
	},
	"notes": [
		"Les sources constructeur publient des consommations divergentes pour cette famille ; aucune valeur n’est arbitrée pour calculer un débit.",
		"Catalogue actuel complet relu p14 avec code et colonnes RP/HVLP/BASIC, ainsi que la voisine 1200378. Les affirmations actives reposent sur cette page ; l’ancienne notice 404 reste une transcription datée, sans arbitrage de consommation. L’intérêt distinct porte sur le choix RP/BASIC et la buse, avec calcul non conclusif."
	]
};

export default product;
