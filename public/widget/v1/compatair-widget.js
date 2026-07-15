/* CompatAir widget API v1 */
(function () {
	'use strict';
	var ID_PATTERN = /^[a-z0-9-]{1,160}$/;
	var LABELS = { continuous: 'Oui, en continu', intermittent: 'Oui, par intermittence', incompatible: 'Non, incompatible', insufficient_data: 'Données insuffisantes' };
	var currentScript = document.currentScript;

	function widgetOrigin(script) {
		try { return new URL(script && script.src ? script.src : 'https://compatair.fr/widget/v1/compatair-widget.js', document.baseURI).origin; }
		catch (_) { return 'https://compatair.fr'; }
	}

	function safeDetailsUrl(value, origin) {
		try {
			var url = new URL(String(value || ''), origin);
			if (url.origin !== origin || url.hash) return null;
			var keys = []; url.searchParams.forEach(function (_, key) { keys.push(key); });
			var toolId = url.searchParams.get('outil') || '';
			var compressorId = url.searchParams.get('compresseur') || '';
			if (url.pathname === '/calculateur/' && keys.length === 2 && url.searchParams.getAll('outil').length === 1 && url.searchParams.getAll('compresseur').length === 1 && ID_PATTERN.test(toolId) && ID_PATTERN.test(compressorId)) return { href: url.href, type: 'calculator' };
			return null;
		} catch (_) { return null; }
	}

	function validResponse(data, origin) {
		if (!data || typeof data !== 'object' || data.schemaVersion !== '1.0.0') return null;
		if (!data.compressor || typeof data.compressor.brand !== 'string' || typeof data.compressor.model !== 'string') return null;
		if (!data.tool || typeof data.tool.label !== 'string' || !data.compatibility || !LABELS[data.compatibility.verdict]) return null;
		var details = safeDetailsUrl(data.detailsUrl, origin);
		if (!details) return null;
		return { data: data, detailsUrl: details.href, detailsType: details.type };
	}

	function createView(target) {
		var shadow = target.shadowRoot || (target.attachShadow ? target.attachShadow({ mode: 'open' }) : target);
		while (shadow.firstChild) shadow.removeChild(shadow.firstChild);
		var style = document.createElement('style');
		style.textContent = ':host{display:block}*{box-sizing:border-box}.ca{max-width:520px;padding:18px;border:1px solid #d1d9cf;border-radius:16px;color:#11251c;background:#fdfefa;font:14px/1.5 system-ui,sans-serif;box-shadow:0 10px 28px rgba(17,37,28,.08)}.top{display:flex;justify-content:space-between;gap:12px;align-items:center}.brand{font-weight:850}.version{color:#53665b;font-size:11px}.q{margin:14px 0 5px;color:#53665b}.verdict{margin:0;font-size:22px;font-weight:850}.continuous{color:#19704f}.intermittent{color:#98601f}.incompatible{color:#a32f28}.insufficient_data{color:#53665b}.detail{margin:8px 0;color:#354b3f}.link{display:inline-block;margin-top:8px;color:#0a4530;font-weight:800;text-underline-offset:3px}.note{margin:12px 0 0;padding-top:10px;border-top:1px solid #d1d9cf;color:#68776f;font-size:11px}';
		var box = document.createElement('section'); box.className = 'ca'; box.setAttribute('aria-live', 'polite');
		var top = document.createElement('div'); top.className = 'top';
		var brand = document.createElement('span'); brand.className = 'brand'; brand.textContent = 'CompatAir';
		var version = document.createElement('span'); version.className = 'version';
		var question = document.createElement('p'); question.className = 'q'; question.textContent = 'Ce compresseur convient-il à cet outil ?';
		var verdict = document.createElement('p'); verdict.className = 'verdict';
		var detail = document.createElement('p'); detail.className = 'detail';
		var link = document.createElement('a'); link.className = 'link'; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Voir le calcul et les sources';
		var note = document.createElement('p'); note.className = 'note'; note.textContent = 'Verdict indépendant des offres et commissions marchandes.';
		top.append(brand, version); box.append(top, question, verdict, detail, link, note); shadow.append(style, box);
		return { shadow: shadow, version: version, verdict: verdict, detail: detail, link: link };
	}

	function mount(target, initialOptions) {
		if (!target || typeof target.appendChild !== 'function') throw new TypeError('CompatAirWidget.mount requiert un élément cible.');
		var origin = widgetOrigin(initialOptions && initialOptions.script || currentScript);
		var view = createView(target);
		var controller = null;
		var destroyed = false;

		function fail(message) {
			view.version.textContent = 'Indisponible'; view.verdict.textContent = 'Données insuffisantes'; view.verdict.className = 'verdict insufficient_data'; view.detail.textContent = message; view.link.hidden = true;
		}

		function update(options) {
			if (destroyed) return Promise.reject(new Error('Widget détruit.'));
			var compressorId = options && options.compressorId || '';
			var toolId = options && options.toolId || '';
			if (!ID_PATTERN.test(compressorId) || !ID_PATTERN.test(toolId)) { fail('Identifiants widget absents ou invalides.'); return Promise.resolve(false); }
			if (controller) controller.abort();
			controller = typeof AbortController === 'function' ? new AbortController() : null;
			view.version.textContent = 'Vérification en cours…'; view.verdict.textContent = 'Chargement'; view.verdict.className = 'verdict'; view.detail.textContent = ''; view.link.hidden = true;
			var endpoint = origin + '/api/v1/compatibility?compressorId=' + encodeURIComponent(compressorId) + '&toolId=' + encodeURIComponent(toolId) + '&channel=widget';
			return fetch(endpoint, { method: 'GET', headers: { Accept: 'application/json' }, credentials: 'omit', referrerPolicy: 'no-referrer', signal: controller && controller.signal })
				.then(function (response) { if (!response.ok) throw new Error('HTTP ' + response.status); return response.json(); })
				.then(function (payload) {
					if (destroyed) return false;
					var parsed = validResponse(payload, origin);
					if (!parsed) throw new Error('Réponse API invalide');
					var data = parsed.data; var result = data.compatibility;
					view.version.textContent = 'Moteur ' + String(data.calculationVersion || 'inconnu');
					view.verdict.textContent = LABELS[result.verdict]; view.verdict.className = 'verdict ' + result.verdict;
					view.detail.textContent = data.compressor.brand + ' ' + data.compressor.model + ' × ' + data.tool.label + (typeof result.requiredFadLpm === 'number' ? ' · FAD recommandé ' + Math.round(result.requiredFadLpm) + ' L/min.' : '.');
					view.link.href = parsed.detailsUrl; view.link.textContent = 'Compléter le calcul'; view.link.hidden = false;
					return true;
				})
				.catch(function (error) { if (error && error.name === 'AbortError') return false; fail('Le service de compatibilité ne répond pas. Aucun verdict de secours n’est fabriqué.'); return false; });
		}

		function destroy() { destroyed = true; if (controller) controller.abort(); while (view.shadow.firstChild) view.shadow.removeChild(view.shadow.firstChild); }
		update(initialOptions || {});
		return { update: update, destroy: destroy };
	}

	window.CompatAirWidget = Object.freeze({ mount: mount });
	if (currentScript && currentScript.hasAttribute('data-compressor-id')) {
		var targetId = currentScript.getAttribute('data-target');
		var target = targetId ? document.getElementById(targetId) : null;
		if (!target) { target = document.createElement('div'); currentScript.insertAdjacentElement('afterend', target); }
		mount(target, { script: currentScript, compressorId: currentScript.getAttribute('data-compressor-id') || '', toolId: currentScript.getAttribute('data-tool-id') || '' });
	}
})();
