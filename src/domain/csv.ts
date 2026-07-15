export type CsvValue = string | number | boolean | null | undefined;

function csvCell(value: CsvValue) {
	let text = value === null || value === undefined ? '' : String(value);
	if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
	return `"${text.replaceAll('"', '""')}"`;
}

export function encodeCsv(rows: CsvValue[][]) {
	return `${rows.map((row) => row.map(csvCell).join(',')).join('\r\n')}\r\n`;
}
