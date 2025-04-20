import { CheckCircle2, Lightbulb } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CriteriaCard from '@/components/CriteriaCard';
import { Button } from '@/components/ui/button';
import { ResultCardProps } from '@/types/card';
import { cn } from '@/lib/utils';

const ResultCard = ({ result, setShowAnalysis }: ResultCardProps) => {
	const getScoreColor = (score?: number) => {
		if (!score) return 'bg-gray-500';
		if (score >= 7) return 'bg-emerald-500';
		if (score >= 6) return 'bg-blue-500';
		if (score >= 5) return 'bg-amber-500';
		return 'bg-red-500';
	};

	const getOverAllScoreColor = (score?: number) => {
		if (!score) return 'text-gray-500';
		if (score >= 7) return 'text-emerald-500';
		if (score >= 6) return 'text-blue-500';
		if (score >= 5) return 'text-amber-500';
		return 'text-red-500';
	};
	return (
		<div className='flex flex-col gap-y-4'>
			{/* Overall Score Card */}
			<Card className='border-2 border-blue-200 dark:border-blue-900'>
				<CardHeader>
					<CardTitle className='text-center text-2xl'>Overall Band Score</CardTitle>
				</CardHeader>
				<CardContent className='pt-0'>
					<div className='flex items-center justify-center'>
						<div className={cn('text-6xl font-bold dark:text-blue-400', getOverAllScoreColor(result?.overallScore))}>
							{result?.overallScore?.toFixed(1)}
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Criteria Cards */}
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
				{/* Task Response */}
				<CriteriaCard
					title='Task Response'
					score={result?.taskResponse.score}
					feedback={result?.taskResponse.feedback}
					scoreColor={getScoreColor(result?.taskResponse.score)}
				/>

				{/* Coherence & Cohesion */}
				<CriteriaCard
					title='Coherence & Cohesion'
					score={result?.coherenceCohesion.score}
					feedback={result?.coherenceCohesion.feedback}
					scoreColor={getScoreColor(result?.coherenceCohesion.score)}
				/>

				{/* Lexical Resource */}
				<CriteriaCard
					title='Lexical Resource'
					score={result?.lexicalResource.score}
					feedback={result?.lexicalResource.feedback}
					scoreColor={getScoreColor(result?.lexicalResource.score)}
				/>

				{/* Grammatical Range & Accuracy */}
				<CriteriaCard
					title='Grammatical Range & Accuracy'
					score={result?.grammaticalRange.score}
					feedback={result?.grammaticalRange.feedback}
					scoreColor={getScoreColor(result?.grammaticalRange.score)}
				/>
			</div>

			{/* Improvement Suggestions */}
			<Card>
				<CardHeader className='pb-2'>
					<CardTitle className='flex items-center gap-2'>
						<Lightbulb className='size-5 text-amber-500' />
						Improvement Suggestions
					</CardTitle>
				</CardHeader>
				<CardContent>
					<ul className='space-y-2'>
						{result?.suggestions.map((suggestion, index) => (
							<li key={index} className='flex items-start gap-2'>
								<CheckCircle2 className='mt-0.5 size-5 shrink-0 text-green-500' />
								<span>{suggestion}</span>
							</li>
						))}
					</ul>
				</CardContent>
			</Card>

			{/* Back Button */}
			<div className='flex justify-center'>
				<Button onClick={() => setShowAnalysis(false)}>Submit Another Essay</Button>
			</div>
		</div>
	);
};

export default ResultCard;
