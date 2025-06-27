
import { useState, useEffect } from 'react';
import { FileText, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface StudyNotesProps {
  kalimaId: number;
}

const StudyNotes = ({ kalimaId }: StudyNotesProps) => {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState('');

  useEffect(() => {
    const allNotes = JSON.parse(localStorage.getItem('study-notes') || '{}');
    const kalimaNote = allNotes[kalimaId] || '';
    setNotes(kalimaNote);
    setSavedNotes(kalimaNote);
  }, [kalimaId]);

  const saveNotes = () => {
    const allNotes = JSON.parse(localStorage.getItem('study-notes') || '{}');
    allNotes[kalimaId] = notes;
    localStorage.setItem('study-notes', JSON.stringify(allNotes));
    setSavedNotes(notes);
  };

  return (
    <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-yellow-600" />
            <h3 className="font-semibold text-yellow-900">Study Notes</h3>
          </div>
          <Button
            onClick={saveNotes}
            size="sm"
            disabled={notes === savedNotes}
            className="bg-yellow-600 hover:bg-yellow-700"
          >
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
        
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add your personal notes about this Kalima..."
          className="w-full h-20 p-2 border border-yellow-200 rounded resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </CardContent>
    </Card>
  );
};

export default StudyNotes;
