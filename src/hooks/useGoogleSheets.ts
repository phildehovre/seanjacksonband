import { useEffect, useState } from "react";

export function useGoogleSheet<T = any>(csvUrl: string) {
	const [data, setData] = useState<T[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(csvUrl);
				const text = await res.text();

				// Split into rows
				const rows = text
					.trim()
					.split("\n")
					.map((r) => r.split(","));

				// First row = header
				const [header, ...entries] = rows;

				// Map rows to objects
				const parsed = entries.map((row) =>
					header.reduce((acc, key, i) => {
						acc[key.trim()] = row[i]?.trim() ?? "";
						return acc;
					}, {} as Record<string, string>)
				);

				setData(parsed as T[]);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, [csvUrl]);

	return { data, loading, error };
}
