const product = {
	"id": "nuair-vdc-50",
	"slug": "nuair-vdc-50",
	"brand": "Nuair",
	"model": "VDC/50",
	"mpn": "8119500NUA",
	"tankLiters": 50,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/nuair-vdc-50.webp",
		"alt": "Repères techniques Nuair VDC/50, référence 8119500NUA",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=11",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Nuair VDC/50, référence 8119500NUA : cuve de 50 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : VDC. Groupe de compression : VDC. Nombre de cylindres : 2V.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 356 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : VDC.",
			"Nombre de cylindres : 2V.",
			"Vitesse de rotation : 2725 tr/min."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Données issues du nuair professional, catalogue 2022, encore accessible sur le site du fabricant. La commercialisation actuelle de cette référence n’est pas confirmée.",
			"La masse et les dimensions de ce tableau concernent l’emballage, pas la machine nue."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 356 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"nuair-8119500nua-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : VDC.",
			"evidenceIds": [
				"nuair-8119500nua-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "VDC",
			"evidenceIds": [
				"nuair-8119500nua-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2V",
			"evidenceIds": [
				"nuair-8119500nua-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "2725 tr/min",
			"evidenceIds": [
				"nuair-8119500nua-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "42 kg",
			"evidenceIds": [
				"nuair-8119500nua-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "800x350x670 mm",
			"evidenceIds": [
				"nuair-8119500nua-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "nuair-8119500nua-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_Nuair_Professional_2022_9990284_PL.pdf#page=11",
			"sourceLabel": "Nuair Professional, catalogue 2022, p. 11, réf. 8119500NUA",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Nuair Professional, catalogue 2022 indique « Air displacement » : 356 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"nuair-8119500nua-20260927"
		],
		"tankLiters": [
			"nuair-8119500nua-20260927"
		],
		"maxPressureBar": [
			"nuair-8119500nua-20260927"
		],
		"fadCurve": [
			"nuair-8119500nua-20260927"
		],
		"oilType": [
			"nuair-8119500nua-20260927"
		],
		"intakeFlowLpm": [
			"nuair-8119500nua-20260927"
		],
		"powerKw": [
			"nuair-8119500nua-20260927"
		],
		"voltage": [
			"nuair-8119500nua-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 356,
	"powerKw": 2.2,
	"voltage": "230 V / 50 Hz"
};

export default product;
