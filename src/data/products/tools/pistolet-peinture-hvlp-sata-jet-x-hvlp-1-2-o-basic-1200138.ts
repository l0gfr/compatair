import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-hvlp-sata-jet-x-hvlp-1-2-o-basic-1200138",
	"slug": "pistolet-peinture-hvlp-sata-jet-x-hvlp-1-2-o-basic-1200138",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "pistolet-peinture-hvlp",
	"label": "SATA jet X HVLP 1.2 O BASIC (réf. 1200138)",
	"brand": "SATA",
	"model": "jet X HVLP 1.2 O BASIC",
	"mpn": "1200138",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 0.5,
		"max": 2.4
	},
	"demandExplanation": "Les sources constructeur publient des consommations divergentes pour cette famille ; aucune valeur n’est arbitrée pour calculer un débit.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-hvlp-sata-jet-x-hvlp-1-2-o-basic-1200138.svg",
		"alt": "Repères techniques : SATA jet X HVLP 1.2 O BASIC (réf. 1200138)",
		"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sata-jet-x-hvlp-1-2-o-basic",
		"label": "Référence 1200138",
		"distinguishingAttributes": {
			"reference": "1200138",
			"Technologie de pulvérisation": "HVLP",
			"Profil de buse": "O"
		}
	},
	"editorial": {
		"overview": "jet X HVLP 1.2 O BASIC, article 1200138 : buse O en version BASIC. Le catalogue donne 445 Nl/min pour la famille HVLP ; la notice annonce 430 Nl/min à 2 bar en entrée. La fiche du voisin 1200170 porte une autre buse, 1.3 I, et affiche 420 l/min. Ces valeurs et unités restent séparées.",
		"verifiedFacts": [
			"Technologie de pulvérisation : HVLP.",
			"Profil de buse : O.",
			"Buse publiée : 1,2 ; unité non précisée dans ce tableau.",
			"Configuration : BASIC, sans affichage DIGITAL.",
			"Consommation publiée dans le catalogue 2025 : 445 Nl/min, sans point de mesure relié dans cette table.",
			"Plage de pression à l’entrée : 0,5 à 2,4 bar.",
			"Consommation différente dans la notice jet X : 430 Nl/min à 2,0 bar àl’entrée du pistolet.",
			"Écart de la fiche exacte de la même famille : La fiche HVLP 1.3 I BASIC 1200170 affiche 420 l/min ; cette valeur n’est pas attribuée à cette référence.",
			"Température maximale du produit pulvérisé : 50 °C."
		],
		"limitations": [
			"La notice fixe un plafond de 2,0 bar en mode HVLP, distinct de la plage d’application générale 0,5 à 2,4 bar et du maximum mécanique d’alimentation.",
			"Les 445 et 430 Nl/min proviennent de documents distincts ; le débit n’est pas arbitré pour calculer une compatibilité.",
			"Les 420 l/min du 1200170 ne sont pas attribués à l’article 1200138. Les conditions normales des Nl/min ne sont pas complétées par hypothèse.",
			"BASIC, DIGITAL et les jeux de buses sont identifiés séparément dans le catalogue ; aucun code d’assemblage absent n’est fabriqué."
		]
	},
	"specifications": [
		{
			"label": "Technologie de pulvérisation",
			"value": "HVLP",
			"evidenceIds": [
				"october3d-tools-sata-current-catalog-2025-p15"
			]
		},
		{
			"label": "Profil de buse",
			"value": "O",
			"evidenceIds": [
				"october3d-tools-sata-current-catalog-2025-p15"
			]
		},
		{
			"label": "Buse publiée",
			"value": "1,2 ; unité non précisée dans ce tableau",
			"evidenceIds": [
				"october3d-tools-sata-current-catalog-2025-p15"
			]
		},
		{
			"label": "Configuration",
			"value": "BASIC, sans affichage DIGITAL",
			"evidenceIds": [
				"october3d-tools-sata-current-catalog-2025-p15"
			]
		},
		{
			"label": "Consommation publiée dans le catalogue 2025",
			"value": "445 Nl/min, sans point de mesure relié dans cette table",
			"evidenceIds": [
				"october3d-tools-sata-current-catalog-2025-p14"
			]
		},
		{
			"label": "Plage de pression à l’entrée",
			"value": "0,5 à 2,4 bar",
			"evidenceIds": [
				"october3d-tools-sata-more-jet-x-manual-85-p102"
			]
		},
		{
			"label": "Consommation différente dans la notice jet X",
			"value": "430 Nl/min à 2,0 bar àl’entrée du pistolet",
			"evidenceIds": [
				"october3d-tools-sata-more-jet-x-manual-85-p102"
			]
		},
		{
			"label": "Écart de la fiche exacte de la même famille",
			"value": "La fiche HVLP 1.3 I BASIC 1200170 affiche 420 l/min ; cette valeur n’est pas attribuée à cette référence",
			"evidenceIds": [
				"october3d-tools-sata-baseline-1200170-recheck-p1"
			]
		},
		{
			"label": "Température maximale du produit pulvérisé",
			"value": "50 °C",
			"evidenceIds": [
				"october3d-tools-sata-more-jet-x-manual-85-p102"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "445 Nl/min",
			"evidenceIds": [
				"october3d-tools-sata-current-catalog-2025-p14"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommended air inlet pressure 2,0 bar; air inlet pressure field of application 0,5–2,4 bar. Valeurs séparées de la consommation dans le catalogue.",
			"evidenceIds": [
				"october3d-tools-sata-current-catalog-2025-p15"
			]
		},
		{
			"label": "Pression maximale en mode HVLP selon la notice",
			"value": "2,0 bar en entrée ; distinct de la plage générale 0,5–2,4 bar",
			"evidenceIds": [
				"october3d-tools-sata-more-jet-x-manual-85-p102"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-sata-current-catalog-2025-p15",
			"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806#page=15",
			"sourceLabel": "SATA, document technique officiel, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 36dec44ae129bc0052bc9fa43c54c9be507c6a3683df465f0cb38d950d749fe3. Déclaration constructeur, sans essai physique CompatAir."
		},
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
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-sata-current-catalog-2025-p15"
		],
		"workingPressureBar": [
			"october3d-tools-sata-current-catalog-2025-p15"
		],
		"demandExplanation": [
			"october3d-tools-sata-current-catalog-2025-p15",
			"october3d-tools-sata-current-catalog-2025-p14",
			"october3d-tools-sata-more-jet-x-manual-85-p102",
			"october3d-tools-sata-baseline-1200170-recheck-p1"
		]
	},
	"notes": [
		"Les sources constructeur publient des consommations divergentes pour cette famille ; aucune valeur n’est arbitrée pour calculer un débit."
	]
};

export default product;
