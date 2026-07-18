import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


interface ConsensusAnswerProps {
  answer: string;
}


export function ConsensusAnswer({
  answer,
}: ConsensusAnswerProps) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          ⭐ Consensus Answer
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="whitespace-pre-wrap text-sm leading-7">
          {answer}
        </p>
      </CardContent>
    </Card>
  );
}