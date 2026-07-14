/* CompatAir widget API v1 */
(function () {
	'use strict';
	var script = document.currentScript;
	if (!script) return;
	var compressorId = script.getAttribute('data-compressor-id') || '';
	var toolId = script.getAttribute('data-tool-id') || '';
	var targetId = script.getAttribute('data-target');
	var target = targetId ? document.getElementById(targetId) : null;
	if (!target) {
		target = document.createElement('div');
		script.insertAdjacentElement('afterend', target);
	}
	var shadow = target.attachShadow ? target.attachShadow({ mode: 'open' }) : target;
	var style = document.createElement('style');
	style.textContent = ':host{display:block}*{box-sizing:border-box}.ca{max-width:520px;padding:18px;border:1px solid #d1d9cf;border-radius:16px;color:#11251c;background:#fdfefa;font:14px/1.5 system-ui,sans-serif;box-shadow:0 10px 28px rgba(17,37,28,.08)}.top{display:flex;justify-content:space-between;gap:12px;align-items:center}.brand{font-weight:850}.version{color:#53665b;font-size:11px}.q{margin:14px 0 5px;color:#53665b}.verdict{margin:0;font-size:22px;font-weight:850}.continuous{color:#19704f}.intermittent{color:#98601f}.incompatible{color:#a32f28}.insufficient_data{color:#53665b}.detail{margin:8px 0;color:#354b3f}.link{display:inline-block;margin-top:8px;color:#0a4530;font-weight:800;text-underline-offset:3px}.note{margin:12px 0 0;padding-top:10px;border-top:1px solid #d1d9cf;color:#68776f;font-size:11px}';
	var box = document.createElement('section');
	box.className = 'ca';
	box.setAttribute('aria-live', 'polite');
	var top = document.createElement('div'); top.className = 'top';
	var brand = document.createElement('span'); brand.className = 'brand'; brand.textContent = 'CompatAir';
	var version = document.createElement('span'); version.className = 'version'; version.textContent = 'Vérification en cours…';
	var question = document.createElement('p'); question.className = 'q'; question.textContent = 'Ce compresseur convient-il à cet outil ?';
	var verdict = document.createElement('p'); verdict.className = 'verdict'; verdict.textContent = 'Chargement';
	var detail = document.createElement('p'); detail.className = 'detail';
	var link = document.createElement('a'); link.className = 'link'; link.target = '_blank'; link.rel = 'noreferrer'; link.textContent = 'Voir le calcul et les sources';
	var note = document.createElement('p'); note.className = 'note'; note.textContent = 'Verdict indépendant des offres et commissions marchandes.';
	top.append(brand, version); box.append(top, question, verdict, detail, link, note); shadow.append(style, box);

	function fail(message) {
		version.textContent = 'Indisponible'; verdict.textContent = 'Données insuffisantes'; verdict.className = 'verdict insufficient_data'; detail.textContent = message; link.hidden = true;
	}
	if (!/^[a-z0-9-]{1,160}$/.test(compressorId) || !/^[a-z0-9-]{1,160}$/.test(toolId)) { fail('Identifiants widget absents ou invalides.'); return; }
	var origin;
	try { origin = new URL(script.src, document.baseURI).origin; } catch (_) { origin = 'https://compatair.fr'; }
	var endpoint = origin + '/api/v1/compatibility?compressorId=' + encodeURIComponent(compressorId) + '&toolId=' + encodeURIComponent(toolId);
	fetch(endpoint, { method: 'GET', headers: { Accept: 'application/json' }, credentials: 'omit', referrerPolicy: 'no-referrer' })
		.then(function (response) { if (!response.ok) throw new Error('HTTP ' + response.status); return response.json(); })
		.then(function (data) {
			var labels = { continuous: 'Oui, en continu', intermittent: 'Oui, par intermittence', incompatible: 'Non, incompatible', insufficient_data: 'Données insuffisantes' };
			var result = data.compatibility || {};
			version.textContent = 'Moteur ' + String(data.calculationVersion || 'inconnu');
			verdict.textContent = labels[result.verdict] || 'Données insuffisantes';
			verdict.className = 'verdict ' + (labels[result.verdict] ? result.verdict : 'insufficient_data');
			detail.textContent = String(data.compressor.brand) + ' ' + String(data.compressor.model) + ' × ' + String(data.tool.label) + (result.requiredFadLpm ? ' · FAD recommandé ' + Math.round(result.requiredFadLpm) + ' L/min.' : '.');
			link.href = String(data.detailsUrl || 'https://compatair.fr/'); link.hidden = false;
		})
		.catch(function () { fail('Le service de compatibilité ne répond pas. Aucun verdict de secours n’est fabriqué.'); });
})();
