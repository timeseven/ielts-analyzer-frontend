import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SubmitCardProps } from '@/types/card';
const SubmitCard = ({ question, setQuestion, essay, setEssay, isLoading, handleSubmit }: SubmitCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>IELTS Writing Assessment</CardTitle>
				<CardDescription>Enter your essay question and content for analysis</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='space-y-2'>
					<label htmlFor='question' className='text-sm font-medium'>
						Essay Question
					</label>
					<Input
						id='question'
						placeholder='Enter the IELTS writing question...'
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
					/>
				</div>
				<div className='space-y-2'>
					<label htmlFor='essay' className='text-sm font-medium'>
						Essay Content
					</label>
					<Textarea
						id='essay'
						placeholder='Enter your essay content...'
						className='min-h-[300px]'
						value={essay}
						onChange={(e) => setEssay(e.target.value)}
					/>
				</div>
				<Button className='w-full' onClick={handleSubmit} disabled={!question.trim() || !essay.trim() || isLoading}>
					{isLoading ? 'Analyzing...' : 'Submit for Assessment'}
				</Button>
			</CardContent>
		</Card>
	);
};

export default SubmitCard;
