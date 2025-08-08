import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const questions = [
  {
    id: 1,
    q: "What is the First Kalima called?",
    options: ["Tayyibah", "Shahadat", "Tamjeed", "Tawheed"],
    answer: "Tayyibah",
  },
  {
    id: 2,
    q: "Which Kalima is about seeking forgiveness?",
    options: ["Istighfar", "Radde Kufr", "Tawheed", "Shahadat"],
    answer: "Istighfar",
  },
];

const QuizKalimas = () => {
  const [responses, setResponses] = useState<Record<number, string>>({});
  const { toast } = useToast();

  const submit = () => {
    const total = questions.length;
    const correct = questions.reduce((acc, cur) => (responses[cur.id] === cur.answer ? acc + 1 : acc), 0);
    toast({
      title: "Quiz submitted",
      description: `You scored ${correct}/${total}. Keep learning!`,
    });
  };

  return (
    <Card className="border-emerald-100 bg-white">
      <CardHeader>
        <CardTitle className="text-emerald-900">Quick 6 Kalimas Quiz</CardTitle>
        <CardDescription className="text-emerald-700">
          Test your knowledge. More questions coming soon!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="space-y-3">
            <p className="font-medium text-emerald-800">{q.q}</p>
            <RadioGroup
              value={responses[q.id]}
              onValueChange={(v) => setResponses((r) => ({ ...r, [q.id]: v }))}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {q.options.map((opt) => (
                <div key={opt} className="flex items-center space-x-2 rounded-lg border border-emerald-100 p-3">
                  <RadioGroupItem id={`${q.id}-${opt}`} value={opt} />
                  <Label htmlFor={`${q.id}-${opt}`} className="cursor-pointer text-emerald-800">
                    {opt}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
        <Button onClick={submit} className="mt-2">Submit</Button>
      </CardContent>
    </Card>
  );
};

export default QuizKalimas;
