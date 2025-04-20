import { apiVersion } from '@/lib/consts';
import { EssayInput } from '@/types/card';

export const analyzeEssay = async ({ question, essay }: EssayInput) => {
	const response = await fetch(`/api/${apiVersion}/analyze`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ question, essay }),
	});

	const data = await response.json();
	console.log('data', data);
	if (!response.ok) {
		const errorMessage = data?.detail || response.statusText;
		throw new Error(errorMessage);
	}

	return data;
};
