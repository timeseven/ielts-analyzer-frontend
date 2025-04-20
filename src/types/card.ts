export interface CriteriaCardProps {
	title: string;
	score?: number;
	feedback?: string;
	scoreColor?: string;
}

export interface SubmitCardProps {
	question: string;
	setQuestion: (question: string) => void;
	essay: string;
	setEssay: (essay: string) => void;
	isLoading: boolean;
	handleSubmit: () => void;
}

export interface ResultCardProps {
	result: {
		taskResponse: {
			score: number;
			feedback: string;
		};
		coherenceCohesion: {
			score: number;
			feedback: string;
		};
		lexicalResource: {
			score: number;
			feedback: string;
		};
		grammaticalRange: {
			score: number;
			feedback: string;
		};
		overAll: {
			score: number;
			suggestions: string[];
		};
	} | null;

	setShowAnalysis: React.Dispatch<React.SetStateAction<boolean>>;
}
