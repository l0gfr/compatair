import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sata-jet-x-hvlp-1200170",
	"slug": "pistolet-peinture-hvlp-sata-jet-x-1200170",
	"categoryId": "pistolet-peinture-hvlp",
	"category": "Pistolet à peinture HVLP",
	"label": "Pistolet à peinture SATA jet X HVLP 1.3",
	"brand": "SATA",
	"model": "jet X HVLP 1.3",
	"mpn": "1200170",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 0.5,
		"max": 2.4
	},
	"connectorSize": "Raccord d’air G 1/4",
	"filtrationRequirement": "Air propre, sec et filtré adapté à la peinture",
	"confidence": "B",
	"image": {
		"src": "/images/products/sata-jet-x-hvlp-1200170.webp",
		"alt": "Pistolet à peinture SATA jet X HVLP 1.3",
		"sourceUrl": "https://www.sata.com/en/premium-spray-gun-for-automotive-refinish-jet-x-hvlp-1.3-i-control-nozzle-basic-suitable-for-water-and-solvent-based-basecoats-as-well-as-1k-2k-topcoat-systems/1200170",
		"sourceLabel": "Visuel officiel SATA jet X HVLP 1.3"
	},
	"editorial": {
		"overview": "SATA jet X HVLP 1.3, référence 1200170. Trois documents officiels actuellement accessibles donnent des consommations différentes. La plage de réglage reste documentée ; le verdict de débit est indéterminé.",
		"verifiedFacts": [
			"La plage de pression dynamique publiée va de 0,5 à 2,4 bar.",
			"La référence 1200170 est équipée d’une buse 1,3."
		],
		"limitations": [
			"La fiche de la référence 1200170 affiche 420 L/min, le catalogue 2025 annonce 445 Nl/min pour jet X HVLP et la notice liée à la fiche indique 430 Nl/min à 2 bar. Ces documents ne permettent pas de choisir une consommation unique applicable à cette référence ; aucune conversion de L/min en Nl/min ni correction silencieuse n’est faite.",
			"La plage de réglage et la recommandation de 2 bar restent des pressions de service ; elles ne résolvent pas la divergence entre les consommations.",
			"Les unités originales de chaque source restent visibles, sans équivalence entre litres et litres normalisés supposée."
		]
	},
	"specifications": [
		{
			"label": "Pression publiée",
			"value": "2 bar",
			"evidenceIds": [
				"sata-jet-x-hvlp-1200170-manufacturer-2026"
			]
		},
		{
			"label": "Buse",
			"value": "1,3",
			"evidenceIds": [
				"sata-jet-x-hvlp-1200170-manufacturer-2026"
			]
		},
		{
			"label": "Plage de réglage",
			"value": "0,5 à 2,4 bar",
			"evidenceIds": [
				"sata-jet-x-hvlp-1200170-manufacturer-2026"
			]
		},
		{
			"label": "Consommation, fiche exacte 1200170, hors calcul",
			"value": "420 L/min ; pression dynamique recommandée dans une cellule distincte",
			"evidenceIds": [
				"sata-jet-x-1200170-october3-sata-baseline-1200170-recheck"
			]
		},
		{
			"label": "Consommation HVLP, catalogue 2025, hors calcul",
			"value": "445 Nl/min ; recommandation d’entrée 2 bar dans une ligne distincte",
			"evidenceIds": [
				"sata-jet-x-1200170-october3-sata-current-catalog-2025"
			]
		},
		{
			"label": "Consommation HVLP, notice jet X, hors calcul",
			"value": "430 Nl/min / 15,19 cfm à 2 bar à l’entrée du pistolet",
			"evidenceIds": [
				"sata-jet-x-1200170-october3-sata-more-jet-x-manual-85"
			]
		}
	],
	"evidence": [
		{
			"id": "sata-jet-x-hvlp-1200170-manufacturer-2026",
			"sourceUrl": "https://www.sata.com/en/premium-spray-gun-for-automotive-refinish-jet-x-hvlp-1.3-i-control-nozzle-basic-suitable-for-water-and-solvent-based-basecoats-as-well-as-1k-2k-topcoat-systems/1200170",
			"sourceLabel": "SATA, fiche officielle jet X HVLP 1200170",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-20",
			"confidence": "A"
		},
		{
			"id": "sata-jet-x-1200170-october3-sata-baseline-1200170-recheck",
			"sourceUrl": "https://www.sata.com/en/premium-spray-gun-for-automotive-refinish-jet-x-hvlp-1.3-i-control-nozzle-basic-suitable-for-water-and-solvent-based-basecoats-as-well-as-1k-2k-topcoat-systems/1200170",
			"sourceLabel": "SATA, fiche exacte jet X HVLP 1200170, observation du 3 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse originale HTTP 200, 1225893 octets, SHA-256 3fc1a486bdd5ee9f5b609cc09300c8f7a2dc94e8a1393d752726496ee84366b2. Valeur conservée sans arbitrage ni essai physique."
		},
		{
			"id": "sata-jet-x-1200170-october3-sata-current-catalog-2025",
			"sourceUrl": "https://www.sata.com/media/1d/fa/b1/1771494954/EN---SATA-Product-Catalogue-2025_uid_6788ce1e8b007.pdf?ts=1771937806#page=14",
			"sourceLabel": "SATA, catalogue 2025, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse originale HTTP 200, 13298603 octets, SHA-256 36dec44ae129bc0052bc9fa43c54c9be507c6a3683df465f0cb38d950d749fe3. Valeur conservée sans arbitrage ni essai physique."
		},
		{
			"id": "sata-jet-x-1200170-october3-sata-more-jet-x-manual-85",
			"sourceUrl": "https://www.sata.com/media/d2/3c/04/1790259009/MULTILINGUAL-SATA-OPERATING-MANUAL-JET-X-3266-240619-2.PDF.PDF?ts=1790259009#page=102",
			"sourceLabel": "SATA, notice jet X liée à la fiche exacte, page PDF 102",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse originale HTTP 200, 43507933 octets, SHA-256 8b7cd0371d23eaae39f0098290ae5941ed87764dc320ec71180c99f860efcb0e. Valeur conservée sans arbitrage ni essai physique."
		}
	],
	"fieldSources": {
		"model": [
			"sata-jet-x-hvlp-1200170-manufacturer-2026"
		],
		"mpn": [
			"sata-jet-x-hvlp-1200170-manufacturer-2026"
		],
		"workingPressureBar": [
			"sata-jet-x-1200170-october3-sata-current-catalog-2025",
			"sata-jet-x-1200170-october3-sata-more-jet-x-manual-85"
		],
		"connectorSize": [
			"sata-jet-x-hvlp-1200170-manufacturer-2026"
		],
		"specifications": [
			"sata-jet-x-hvlp-1200170-manufacturer-2026"
		],
		"demandExplanation": [
			"sata-jet-x-1200170-october3-sata-baseline-1200170-recheck",
			"sata-jet-x-1200170-october3-sata-current-catalog-2025",
			"sata-jet-x-1200170-october3-sata-more-jet-x-manual-85"
		]
	},
	"notes": [
		"La fiche de la référence 1200170 affiche 420 L/min, le catalogue 2025 annonce 445 Nl/min pour jet X HVLP et la notice liée à la fiche indique 430 Nl/min à 2 bar. Ces documents ne permettent pas de choisir une consommation unique applicable à cette référence ; aucune conversion de L/min en Nl/min ni correction silencieuse n’est faite."
	],
	"demandExplanation": "La fiche de la référence 1200170 affiche 420 L/min, le catalogue 2025 annonce 445 Nl/min pour jet X HVLP et la notice liée à la fiche indique 430 Nl/min à 2 bar. Ces documents ne permettent pas de choisir une consommation unique applicable à cette référence ; aucune conversion de L/min en Nl/min ni correction silencieuse n’est faite."
};

export default product;
