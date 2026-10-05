type PublicationEntry<T> = { key: string; promise: Promise<T> };

/** One immutable static publication per key; development retains no entry. */
export function createStaticPublicationCache<T>() {
	let entry: PublicationEntry<T> | undefined;

	return (key: string, reuse: boolean, build: () => Promise<T>): Promise<T> => {
		if (!reuse) {
			entry = undefined;
			return Promise.resolve().then(build);
		}
		if (entry?.key === key) return entry.promise;

		const current: PublicationEntry<T> = { key, promise: Promise.resolve().then(build) };
		entry = current;
		void current.promise.catch(() => {
			// A previous build may fail after another key has replaced its entry.
			if (entry === current) entry = undefined;
		});
		return current.promise;
	};
}
