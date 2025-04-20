import { memo } from 'react';

import { CheckCircle2, Lightbulb } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SuggestionsCard = ({ improvementSuggestions }: { improvementSuggestions: string[] }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className='flex items-center gap-2'>
					<Lightbulb className='size-5 text-amber-500' />
					Improvement Suggestions
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ul className='space-y-2'>
					{improvementSuggestions.map((suggestion, index) => (
						<li key={index} className='flex items-start gap-2'>
							<CheckCircle2 className='mt-0.5 size-5 shrink-0 text-green-500' />
							<span>{suggestion}</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default memo(SuggestionsCard);
