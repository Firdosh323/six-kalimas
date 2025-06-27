
import { useState, useEffect } from 'react';
import { Brain, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface QuizSystemProps {
  kalimaId: number;
  arabic: string;
  translation: string;
  transliteration: string;
}

const QuizSystem = ({ kalimaId, arabic, translation, transliteration }: QuizSystemProps) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the English translation of this Kalima?",
      options: [translation, "Another translation", "Different meaning", "Wrong answer"],
      correct: translation
    },
    {
      question: "Which is the correct transliteration?",
      options: [transliteration, "Wrong transliteration", "Another option", "Incorrect option"],
      correct: transliteration
    }
  ];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz completed
      const quizScores = JSON.parse(localStorage.getItem('quiz-scores') || '{}');
      quizScores[kalimaId] = (quizScores[kalimaId] || []).concat([score]);
      localStorage.setItem('quiz-scores', JSON.stringify(quizScores));
      setShowQuiz(false);
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  if (!showQuiz) {
    return (
      <Button
        onClick={() => setShowQuiz(true)}
        className="bg-purple-600 hover:bg-purple-700"
      >
        <Brain className="w-4 h-4 mr-2" />
        Take Quiz
      </Button>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-purple-900">Quiz</h3>
          </div>
          <span className="text-sm text-purple-700">
            Question {currentQuestion + 1}/{questions.length}
          </span>
        </div>

        <div className="space-y-4">
          <p className="text-purple-800 font-medium">
            {questions[currentQuestion].question}
          </p>
          
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={showResult}
                className={`w-full p-2 text-left rounded border transition-colors ${
                  showResult
                    ? option === questions[currentQuestion].correct
                      ? 'bg-green-100 border-green-300 text-green-800'
                      : option === selectedAnswer
                      ? 'bg-red-100 border-red-300 text-red-800'
                      : 'bg-gray-100 border-gray-300'
                    : 'bg-white border-purple-200 hover:bg-purple-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && option === questions[currentQuestion].correct && (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  )}
                  {showResult && option === selectedAnswer && option !== questions[currentQuestion].correct && (
                    <XCircle className="w-4 h-4 text-red-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-purple-700">
                Score: {score}/{questions.length}
              </span>
              <Button onClick={nextQuestion} size="sm">
                {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizSystem;
