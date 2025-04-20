'use client';

import { useState } from 'react';

import { toast } from 'sonner';

import ResultCard from '@/components/ResultCard';
import SubmitCard from '@/components/SubmitCard';
import { ResultCardProps } from '@/types/card';

export default function Home() {
	const [showAnalysis, setShowAnalysis] = useState(false);
	const [question, setQuestion] = useState('');
	const [essay, setEssay] = useState('');
	const [result, setResult] = useState<ResultCardProps['result'] | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = () => {
		if (!question.trim() || !essay.trim()) {
			toast.error('Please enter both question and essay content.');
			return;
		}

		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
			setResult({
				taskResponse: {
					score: 3,
					feedback:
						"Your response addresses all parts of the task. You've developed your position well, but could provide more specific examples to support your arguments. Consider elaborating on key points with concrete evidence.",
				},
				coherenceCohesion: {
					score: 5.5,
					feedback:
						'Your essay has a clear overall progression with good use of cohesive devices. However, some paragraphs lack a clear central topic. Work on creating stronger topic sentences and ensuring each paragraph has a single focus.',
				},
				lexicalResource: {
					score: 6.5,
					feedback:
						'You demonstrate a good range of vocabulary with generally accurate word choice. There are occasional errors in word formation and spelling. Try to incorporate more academic vocabulary and complex lexical items.',
				},
				grammaticalRange: {
					score: 8,
					feedback:
						'You use a mix of simple and complex structures, but with some errors in grammar and punctuation. Focus on controlling complex sentences and review your use of articles and prepositions.',
				},
				overAll: {
					score: 7.0,
					suggestions: [
						'Develop more specific examples to support your arguments',
						'Strengthen paragraph structure with clearer topic sentences',
						'Incorporate more academic vocabulary',
						'Practice complex grammatical structures',
						'Review article and preposition usage',
					],
				},
			});
			setShowAnalysis(true);
		}, 2000);
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
