import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-2006s",
	"slug": "shinano-si-2006s",
	"brand": "Shinano",
	"model": "SI-2006S",
	"mpn": "SI-2006S",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Shinano SI-2006S",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-2006s.webp",
		"alt": "Repères techniques Shinano SI-2006S, référence SI-2006S",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=20",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SI-2006S : identifier la pince 1/4 pouce 330-24 avant de choisir une fraise ou une pièce de maintenance. La nomenclature V5 distingue la pince 6 mm 330-19, proposée en option, ainsi que les pinces 1/8 pouce et 3 mm. La SI-2006S-6 est la configuration métrique ; 1/4 pouce vaut 6,35 mm et ne se confond pas avec 6 mm.",
		"verifiedFacts": [
			"SI-2006S et SI-2006S-6 : pinces 1/4 pouce et 6 mm ; mêmes 127 W, 20 000 tr/min, 0,49 kg et maximum publié de 6,5 L/s. La pince constitue la différence documentée, pas un besoin d’air propre.",
			"La consommation ne constitue pas un point de dimensionnement tant que ses conditions de mesure ne sont pas établies.",
			"La nomenclature V5 de mars 2019 donne 330-24 pour 1/4 pouce et 330-19 pour 6 mm ; la pince 6 mm y porte le symbole d’option.",
			"Les deux autres pinces listées sont 330-25, 1/8 pouce, et 330-26, 3 mm.",
			"Conversion exacte du diamètre : 1/4 pouce = 6,35 mm, soit 0,35 mm de plus que 6 mm ; cette égalité n’est pas une tolérance de serrage."
		],
		"limitations": [
			"390 L/min est le maximum converti, sans pression de mesure appariée.",
			"La nomenclature de mars 2019 confirme les repères de pièces, sans établir leur disponibilité actuelle ni autoriser une queue d’un autre diamètre."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Consigne générale : 0,63 MPa (6,3 bar) au fonctionnement. Elle ne démontre pas la pression de mesure de la consommation publiée.",
			"evidenceIds": [
				"review-20261025-shinano-si-2006s-s030"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale, colonne Max Air Consumption : 13.8 CFM / 6.5 L/s, soit 390 L/min. Tableau partagé uniquement entre les références nommées par Shinano.",
			"evidenceIds": [
				"shinano-si-2006s-20260926"
			]
		},
		{
			"label": "Version et équipement",
			"value": "Pince 1/4 pouce ; puissance publiée 127 W.",
			"evidenceIds": [
				"shinano-si-2006s-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "20000 tr/min",
			"evidenceIds": [
				"shinano-si-2006s-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.49 kg",
			"evidenceIds": [
				"shinano-si-2006s-20260926"
			]
		},
		{
			"label": "Consommation maximale publiée (pression de mesure non appariée)",
			"value": "390 L/min",
			"evidenceIds": [
				"review-20261025-shinano-si-2006s-s030"
			]
		},
		{
			"label": "Pince 1/4 pouce de la nomenclature",
			"value": "330-24",
			"evidenceIds": [
				"reserved-followup-20261025-shinano-si-2006s-1"
			]
		},
		{
			"label": "Pince métrique distincte, option de nomenclature",
			"value": "330-19 : 6 mm",
			"evidenceIds": [
				"reserved-followup-20261025-shinano-si-2006s-1"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-2006s-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=20",
			"sourceLabel": "Shinano, catalogue général 2025, p. 20, réf. SI-2006S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale, colonne Max Air Consumption : 13.8 CFM / 6.5 L/s, soit 390 L/min. Tableau partagé uniquement entre les références nommées par Shinano."
		},
		{
			"id": "shinano-si-2006s-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		},
		{
			"id": "review-20261025-shinano-si-2006s-s030",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=20",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s030, pages PDF 20, 43",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:27.990842+00:00, SHA-256 03b3841b7d1e4a2df2330b806ac10d0e67067766a4b3daaca3f7da7e4ebc0e6b. SI-2006S et SI-2006S-6 : pinces 1/4 pouce et 6 mm ; mêmes 127 W, 20 000 tr/min, 0,49 kg et maximum publié de 6,5 L/s. La pince constitue la différence documentée, pas un besoin d’air propre. Limite : 390 L/min est le maximum converti, sans pression de mesure appariée ; remplacer le profil calculable par variable-volume."
		},
		{
			"id": "reserved-followup-20261025-shinano-si-2006s-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/2022/09/SI-2006S_V5.pdf#page=1",
			"sourceLabel": "Relecture ciblée de la référence, des variantes et des pièces, 25 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Document lu le 25 octobre 2026 ; réponse SHA-256 484aed4d66b1fda311637b843178eed9963686a87f00087fd6412be435572c83. Portée : identité, références de pièces et limites décrites dans la fiche. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-2006s-20260926"
		],
		"workingPressureBar": [
			"shinano-si-2006s-20260926-workingpressurebar-1",
			"review-20261025-shinano-si-2006s-s030"
		],
		"demandExplanation": [
			"review-20261025-shinano-si-2006s-s030"
		],
		"editorial": [
			"reserved-followup-20261025-shinano-si-2006s-1"
		],
		"specifications": [
			"reserved-followup-20261025-shinano-si-2006s-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : 390 L/min est le maximum converti, sans pression de mesure appariée ; remplacer le profil calculable par variable-volume."
	],
	"demandExplanation": "Consommation maximale publiée de 390 L/min, sans pression de mesure explicitement appariée dans les passages lus. La consigne générale de service de 6,3 bar reste distincte de ce débit ; le profil exige un point de consommation et pression documenté avant de conclure."
};

export default product;
