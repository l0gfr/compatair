export type SourceQualityGrade = 'A' | 'B' | 'C' | 'D';

export const sourceQualityLabel = (grade: SourceQualityGrade) => grade === 'A'
	? 'Source constructeur complète'
	: grade === 'B'
		? 'Source constructeur partielle'
		: grade === 'C'
			? 'Source insuffisante pour conclure'
			: 'Source non confirmée';

export const sourceQualityDetail = (grade: SourceQualityGrade) => `${sourceQualityLabel(grade)} · grade technique ${grade}`;
