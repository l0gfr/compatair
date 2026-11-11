# Mesure d’audience CompatAir

Configuration du 11 novembre 2026. L’identifiant de mesure est public, sans secret de Measurement Protocol.

- Compte : CompatAir, 415852773.
- Propriété GA4 : CompatAir, 563724195, fuseau France, devise EUR.
- Flux Web : CompatAir Web, 16321844211, domaine `https://compatair.fr`.
- Identifiant : `G-EY1HBDD7KR`, versionné dans `config/analytics.json`.
- [Rapports et temps réel](https://analytics.google.com/analytics/web/#/a415852773p563724195/reports/intelligenthome).

## Limites de collecte

Le script externe est ajouté seulement après un consentement explicite, valable 180 jours. Refus et acceptation ont la même durée. Aucun ping Google Analytics n’est envoyé en l’absence de choix ou après refus : mode de consentement de base. L’aperçu local ne collecte rien, même après acceptation. La navigation sans JavaScript fonctionne sans Analytics.

Le footer donne accès aux réglages, à la confidentialité, aux cookies et aux conditions d’utilisation. Le retrait positionne immédiatement le drapeau de désactivation Google, supprime les cookies `_ga` et `_ga_*` du domaine puis recharge le document pour arrêter le script et ses timers. L’expiration, l’effacement du choix dans un autre onglet et le retour depuis le cache de navigation sont contrôlés.

Le gestionnaire de consentement représente environ 1,8 Kio gzip dans la compilation JavaScript isolée. L’ajout explicite de 2 Kio aux budgets des pages est autorisé le 11 novembre 2026 ; les limites initiales et à la demande restent vérifiées sur les modules réellement générés, avant activation. Cette marge ne concerne ni les budgets de données, ni les archives, ni les exigences Lighthouse.

Les adresses de page proviennent de la canonical publique, sans paramètres ni fragments. Le référent est limité à son origine. Aucune recherche saisie, valeur de formulaire, photo, configuration, nom, email ou User-ID n’est fourni à GA4. La mesure reste pseudonyme : identifiant navigateur, heures, pages et contexte technique de base sont reçus par Google après consentement.

Événements : `page_view` et événements de session/engagement GA4 ; `calculator_intent` pour un clic interne vers le calculateur ; `calculator_result` après affichage effectif d’une réponse ; `merchant_click` pour un clic vers `/go/`. Aucun de ces événements n’est décrit comme un achat. Les événements métier ne comportent aucune valeur du calcul ni URL de destination.

## Réglages de propriété

Le compte dédié est créé sans partage facultatif des données. Les mesures améliorées sont désactivées au niveau du flux. Les signaux Google et la collecte des données fournies par l’utilisateur restent désactivés. La collecte précise de l’appareil et de la zone géographique est désactivée. La personnalisation des annonces est refusée dans les 307 régions. Aucune association Google Ads n’est ajoutée.

Les données utilisateur et événement sont conservées deux mois, sans réinitialisation lors d’une nouvelle activité. Ce délai ne limite pas les rapports agrégés standards. Les cookies sont limités à 180 jours avec `cookie_update: false`. Le drapeau `Secure` et `SameSite=Lax` sont demandés. Le script est chargé sans en-tête Referer.

La CSP autorise seulement `/gtag/js` chez `www.googletagmanager.com` pour les scripts, ainsi que les endpoints Google Tag Manager et Analytics explicitement listés pour la collecte. Aucun domaine publicitaire, joker, iframe externe, attribut script ou exécution inline JavaScript n’est ajouté. Comme tout changement de vhost, l’installation exige l’approbation root versionnée avant activation de la release ; voir `docs/DEPLOYMENT.md`.

## Vérification et exploitation

Exécuter les tests `src/domain/analytics-consent.test.ts`, `src/client/analytics.test.ts` et `deploy/apache/compatair-config.test.ts`, puis le hook source normal et les contrôles CI complets. Vérifier le bandeau à 390 px, la persistance du refus, l’ouverture des réglages, le retrait et les URLs réellement transmises après accord sur la release servie.

Les tests locaux ne transmettent aucun événement réel à Google. Les vérifications manuelles de production peuvent apparaître dans les premiers rapports. GA4 mesure uniquement les navigateurs consentants, et ne reconstitue pas l’historique GoAccess. Les bloqueurs et refus limitent sa couverture. Search Console reste la source pour les clics et impressions Google ; les appels API/MCP et les robots restent à analyser côté serveur.

## Sources de la configuration

- [CNIL : règles applicables aux cookies](https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi).
- [Google : mode de consentement de base](https://developers.google.com/tag-platform/security/concepts/consent-mode).
- [Google : paramètres de configuration GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/config).
- [Google : conservation et rapports agrégés](https://support.google.com/analytics/answer/7667196?hl=fr).
- [Google : données européennes et adresses IP](https://support.google.com/analytics/answer/12017362?hl=fr).
- [Google : CSP sans fonctionnalités publicitaires](https://developers.google.com/tag-platform/security/guides/csp).
- [Google : conditions de traitement et transferts](https://business.safety.google/adsprocessorterms/).

La politique publique décrit les destinataires et les transferts possibles hors EEE. Aucun hébergement intégralement européen ni conformité générale garantie n’est déduit de ces réglages.
