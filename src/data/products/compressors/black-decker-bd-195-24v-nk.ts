import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "black-decker-bd-195-24v-nk",
	"slug": "black-decker-bd-195-24v-nk",
	"brand": "Black+Decker",
	"model": "BD 195/24V-NK",
	"mpn": "NKCV304BND311",
	"tankLiters": 24,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/black-decker-bd-195-24v-nk.webp",
		"alt": "Repères techniques Black+Decker BD 195/24V-NK, référence NKCV304BND311",
		"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=8",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BD 195/24V-NK, article NKCV304BND311 : cuve verticale de 24 L, alimentation 230 V à 50 Hz et maximum de 10 bar. Le groupe OL195 de 1,1 kW est également présent sur le BD 195/12-NK de 12 L. Le catalogue annonce 180 L/min sans pression d’essai pour les deux versions.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,1 kW.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : OL195.",
			"Capacité publiée sans pression de mesure : 180 l/min / 6,4 CFM.",
			"Vitesse de rotation : 3400 tr/min."
		],
		"limitations": [
			"La version verticale de 24 L pèse 16,4 kg et mesure 307 × 307 × 640 mm selon le tableau ; le 12 L annonce 13 kg.",
			"Les 180 L/min ne sont pas qualifiés comme FAD sous pression. Le débit utile et le taux de marche restent à documenter.",
			"Le stockage supérieur ne démontre pas une production d’air supérieure ; l’alimentation de cette version est bien 230 V. Disponibilité actuelle à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué.",
			"evidenceIds": [
				"black-decker-nkcv304bnd311-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "OL195",
			"evidenceIds": [
				"black-decker-nkcv304bnd311-20260927"
			]
		},
		{
			"label": "Capacité publiée sans pression de mesure",
			"value": "180 l/min / 6,4 CFM",
			"evidenceIds": [
				"black-decker-nkcv304bnd311-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "3400 tr/min",
			"evidenceIds": [
				"black-decker-nkcv304bnd311-20260927"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "307x307x640 mm",
			"evidenceIds": [
				"black-decker-nkcv304bnd311-20260927"
			]
		},
		{
			"label": "Masse publiée (base non précisée)",
			"value": "16,4 kg / 36,1 lb",
			"evidenceIds": [
				"black-decker-nkcv304bnd311-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "black-decker-nkcv304bnd311-20260927",
			"sourceUrl": "https://www.nuair.pl/images/KATALOGI/Catalogog-BD.pdf#page=8",
			"sourceLabel": "Black+Decker, catalogue compresseurs, version polonaise, p. 8, réf. NKCV304BND311",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le catalogue publie une capacité en L/min sans pression de mesure associée. Ce débit ne permet pas d’établir une courbe de débit restitué."
		}
	],
	"fieldSources": {
		"mpn": [
			"black-decker-nkcv304bnd311-20260927"
		],
		"tankLiters": [
			"black-decker-nkcv304bnd311-20260927"
		],
		"maxPressureBar": [
			"black-decker-nkcv304bnd311-20260927"
		],
		"fadCurve": [
			"black-decker-nkcv304bnd311-20260927"
		],
		"oilType": [
			"black-decker-nkcv304bnd311-20260927"
		],
		"powerKw": [
			"black-decker-nkcv304bnd311-20260927"
		],
		"voltage": [
			"black-decker-nkcv304bnd311-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 1.1,
	"voltage": "230 V / 50 Hz"
};

export default product;
