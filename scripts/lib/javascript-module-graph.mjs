import ts from 'typescript';

function literalModuleSpecifier(node) {
	return ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) ? node.text : undefined;
}

export function parseJavaScriptModuleSpecifiers(source, fileName = 'bundle.js') {
	const sourceFile = ts.createSourceFile(fileName, source, ts.ScriptTarget.ESNext, true, ts.ScriptKind.JS);
	const diagnostics = sourceFile.parseDiagnostics ?? [];
	if (diagnostics.length) {
		const message = ts.flattenDiagnosticMessageText(diagnostics[0].messageText, ' ');
		throw new Error(`${fileName}: JavaScript impossible à analyser (${message})`);
	}

	const staticImports = [];
	const dynamicImports = [];
	let unresolvedDynamicImports = 0;

	function visit(node) {
		if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier) {
			const specifier = literalModuleSpecifier(node.moduleSpecifier);
			if (specifier !== undefined) staticImports.push(specifier);
		}
		if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) {
			const specifier = node.arguments.length === 1 ? literalModuleSpecifier(node.arguments[0]) : undefined;
			if (specifier === undefined) unresolvedDynamicImports += 1;
			else dynamicImports.push(specifier);
		}
		ts.forEachChild(node, visit);
	}

	visit(sourceFile);
	return { staticImports, dynamicImports, unresolvedDynamicImports };
}
