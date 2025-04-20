'use client';

import { useState } from 'react';

import { toast } from 'sonner';

import ResultCard from '@/components/ResultCard';
import SubmitCard from '@/components/SubmitCard';
import { EssayInput, ResultCardProps } from '@/types/card';
import { useMutation } from '@tanstack/react-query';
import { analyzeEssay } from '@/features/api';

export default function Home() {
	const [showAnalysis, setShowAnalysis] = useState(false);
	const [question, setQuestion] = useState('');
	const [essay, setEssay] = useState('');
	const [result, setResult] = useState<ResultCardProps['result'] | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleClear = () => {
		setQuestion('');
		setEssay('');
		setIsLoading(false);
	};

	const startAnalysis = useMutation({
		mutationFn: ({ question, essay }: EssayInput) => analyzeEssay({ question, essay }),
		onSuccess: (data) => {
			setResult(data);
			setShowAnalysis(true);
			handleClear();
		},
		onError: (error) => {
			toast.warning(error.message);
			setIsLoading(false);
		},
	});

	const handleSubmit = () => {
		setIsLoading(true);
		startAnalysis.mutate({ question, essay });
	};
	return (
		<main className='min-h-screen bg-gray-50 p-4 md:p-8 dark:bg-gray-950'>
			<div className='mx-auto max-w-4xl'>
				<h1 className='mb-6 text-center text-2xl font-bold md:text-3xl'>IELTS Writing Analysis</h1>
				{!showAnalysis ? (
					<SubmitCard
						question={question}
						setQuestion={setQuestion}
						essay={essay}
						setEssay={setEssay}
						isLoading={isLoading}
						handleSubmit={handleSubmit}
					/>
				) : (
					<ResultCard result={result} setShowAnalysis={setShowAnalysis} />
				)}
			</div>
		</main>
	);
}
