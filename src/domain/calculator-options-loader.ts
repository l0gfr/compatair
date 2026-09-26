export async function loadCalculatorOptions<T>(integrity: string): Promise<T> {
	if (!/^sha256-[A-Za-z0-9+/]{43}=$/.test(integrity)) throw new Error('Empreinte du catalogue absente');
	const response = await fetch('/calculateur/options.json', {
		integrity, cache: 'no-cache', priority: 'low', signal: AbortSignal.timeout(15_000),
		headers: { Accept: 'application/json' },
	});
	if (!response.ok) throw new Error('Catalogue indisponible');
	return response.json() as Promise<T>;
}
