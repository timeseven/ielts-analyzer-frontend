import { memo } from 'react';

import { AlertCircle } from 'lucide-react';

import { cn } from '@/lib/utils';
import { CriteriaCardProps } from '@/types/card';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CriteriaCard = ({ title, score, feedback, scoreColor }: CriteriaCardProps) => {
	const calculateProgress = (score?: number) => {
		if (!score) return 0;
		return (score / 9) * 100;
	};

	return (
		<Card className='h-full'>
			<CardHeader className='pb-2'>
				<CardTitle>{title}</CardTitle>
				<CardDescription className='flex items-center justify-between'>
					<span>Band Score</span>
					<span className='text-lg font-semibold'>{score?.toFixed(1)}</span>
				</CardDescription>
			</CardHeader>
			<CardContent className='pt-0'>
				<div className='mb-4'>
					<Progress value={calculateProgress(score)} className={cn('h-2')} indicatorClassName={scoreColor} />
				</div>
				<div className='rounded-md bg-gray-100 p-3 dark:bg-gray-800'>
					<div className='flex gap-2'>
						<AlertCircle className='mt-0.5 size-5 shrink-0 text-blue-500' />
						<p className='text-sm'>{feedback}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default memo(CriteriaCard);
