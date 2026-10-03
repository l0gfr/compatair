---
title: "FA-Xi avec SVK : la limite d’inclinaison compte dans le trajet du préhenseur"
seoTitle: "Schmalz FA-Xi SVK : inclinaison et trajet de prise"
description: "La notice FA-Xi limite l’angle de la technologie SVK par rapport à l’horizontale. Le niveau de vide ne suffit pas à accepter une rotation de pièce."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["ventouse-piece-poreuse-debit-vide", "ventouse-depose-piece-soufflage-duree-debit"]
sources: ["https://media.schmalz.com/MAM_Library/Dokumente/Montageanleitung/30/3030/303001/30300104933/eed7c7323114_MONT_30.30.01.04933_en-EN.pdf"]
---

**Une prise correcte à plat ne valide pas toute la trajectoire du robot.** La notice FA-Xi avec technologie de clapets SVK indique un angle maximal de **60° par rapport à l’horizontale**. Elle précise que le fonctionnement est optimal en usage exclusivement horizontal et que l’inclinaison peut le limiter.

Cette restriction figure dans la [section 3.13.1 de la notice 30.30.01.04933-02](https://media.schmalz.com/MAM_Library/Dokumente/Montageanleitung/30/3030/303001/30300104933/eed7c7323114_MONT_30.30.01.04933_en-EN.pdf#page=31). Elle appartient à la technologie et à la version décrites. Le fournisseur doit identifier la configuration réellement proposée avant de confirmer un mouvement.

## Le trajet appartient au dossier de sélection

Dans une consultation, transmettez la position de prise, les orientations successives et la position de dépose. Joignez la pièce et son mode de couverture du préhenseur. Une capacité déclarée dans une position ne donne pas, à elle seule, un résultat pendant une rotation.

La même section limite l’accélération verticale à **5 m/s²**. Conservez cette limite avec la configuration et le trajet, en plus de l’angle. [Notice FA-Xi,§ 3.13.1](https://media.schmalz.com/MAM_Library/Dokumente/Montageanleitung/30/3030/303001/30300104933/eed7c7323114_MONT_30.30.01.04933_en-EN.pdf#page=31). L’angle de 60° n’est pas une autorisation générale de lever n’importe quelle charge inclinée.

<div class="article-infographic article-infographic--compact" role="group" aria-label="L’angle se lit depuis l’horizontale" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="schmalz-fa-xi-svk-inclinaison-soixante-degres-title schmalz-fa-xi-svk-inclinaison-soixante-degres-desc" xmlns="http://www.w3.org/2000/svg"><title id="schmalz-fa-xi-svk-inclinaison-soixante-degres-title">L’angle se lit depuis l’horizontale</title><desc id="schmalz-fa-xi-svk-inclinaison-soixante-degres-desc">La technologie SVK de la notice FA-Xi privilégie l’horizontale et limite l’inclinaison à 60° ; ce seul angle ne valide pas une charge.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">L’angle se lit depuis</text><text x="25" y="67" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">l’horizontale</text><path d="M70 365H450" fill="none" stroke="#9ebdad" stroke-width="3" stroke-dasharray="6 5"/><path d="M70 365L225 97" fill="none" stroke="#d3eb56" stroke-width="5"/><path d="M188 365A118 118 0 0 0 129 263" fill="none" stroke="#ffffff" stroke-width="3"/><text x="190" y="312" fill="#d3eb56" font-size="25" text-anchor="start" font-weight="400">60° max.</text><text x="262" y="417" fill="#9ebdad" font-size="21" text-anchor="start" font-weight="400">Horizontale</text><text x="29" y="478" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Angle depuis l’horizontale ; la charge</text><text x="29" y="503" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">reste à valider.</text></svg>
</div>
*La technologie SVK de la notice FA-Xi privilégie l’horizontale et limite l’inclinaison à 60° ; ce seul angle ne valide pas une charge.*

## Nommer l’orientation avec un repère commun

Une phrase comme « la plaque tourne de 45° » reste incomplète si l’orientation de départ est inconnue. Utilisez le repère horizontal de la notice dans le dessin du mouvement. La rotation du robot et l’inclinaison du plan de prise ne sont pas toujours une même grandeur.

Faites annoter le plan par l’intégrateur pour distinguer géométrie de trajectoire et propriétés de la prise. Cette étape permet de retrouver le point où la configuration quitte le domaine documenté.

## Préparer une réception du trajet complet

| Phase | Donnée du dossier |
| --- | --- |
| Prise | Position et surface couverte |
| Déplacement | Trajet et conditions de mouvement |
| Inclinaison | Angle du préhenseur selon le repère |
| Dépose | Orientation et commande de relâchement |
| Réception | Critères propres à la pièce et au montage |

Le [guide de soufflage à la dépose](/guides/ventouse-depose-piece-soufflage-duree-debit/) traite la libération de la pièce. Il ne valide pas son maintien pendant l’inclinaison. Les deux séquences doivent apparaître séparément dans l’acceptation.

## Ne pas augmenter le vide pour sortir du domaine d’emploi

Une valeur de vide plus élevée ne supprime pas une restriction de technologie de clapet. Si le trajet requis dépasse la portée documentée, demandez au fournisseur une autre configuration et son dossier. Il faut modifier la sélection ou le mouvement validé, plutôt que transformer une limite en simple consigne de pression.

La [porosité de la pièce](/guides/ventouse-piece-poreuse-debit-vide/) reste une vérification supplémentaire. Une prise sur une surface différente peut changer les observations, mais elle ne remplace pas la lecture d’orientation.

La décision d’achat doit donc intégrer la trajectoire, pas uniquement une charge et un niveau de vide. La documentation permet de refuser une interprétation trop large de la référence ; les essais et critères de réception doivent ensuite couvrir la pièce et le trajet réellement retenus.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Schmalz FA-Xi30.30.01.04933-02, § 3.13.1, p.31](https://media.schmalz.com/MAM_Library/Dokumente/Montageanleitung/30/3030/303001/30300104933/eed7c7323114_MONT_30.30.01.04933_en-EN.pdf#page=31)
