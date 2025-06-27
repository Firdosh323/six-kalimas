
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the 6 Kalimas of Islam?",
      answer: "The 6 Kalimas are fundamental Islamic declarations: 1) Kalima Tayyibah (Purity), 2) Kalima Shahadat (Testimony), 3) Kalima Tamjeed (Glorification), 4) Kalima Tawheed (Unity), 5) Kalima Istighfar (Forgiveness), and 6) Kalima Radde Kufr (Rejection of Disbelief). Each serves a specific purpose in strengthening faith."
    },
    {
      question: "How do you pronounce the Arabic text of Kalimas?",
      answer: "Each Kalima page includes audio pronunciation and transliteration to help you learn the correct pronunciation. Practice reading the transliteration while listening to the audio for best results."
    },
    {
      question: "What is the difference between Kalima Tayyibah and Kalima Shahadat?",
      answer: "Kalima Tayyibah is the basic declaration 'There is no god but Allah, Muhammad is the messenger of Allah.' Kalima Shahadat adds personal testimony with 'I bear witness that...' making it a conscious acknowledgment of faith."
    },
    {
      question: "When should Muslims recite these Kalimas?",
      answer: "Muslims can recite these Kalimas during daily prayers, dhikr (remembrance of Allah), or personal worship. Kalima Shahadat is recited in the five daily prayers, while others can be recited for spiritual purification and remembrance."
    },
    {
      question: "Are all 6 Kalimas mentioned in the Quran?",
      answer: "While the concepts and phrases within the Kalimas are rooted in Quranic verses and authentic Hadith, they were compiled as a structured collection for educational purposes to help Muslims learn fundamental Islamic beliefs."
    },
    {
      question: "Can I copy the Arabic text of Kalimas?",
      answer: "Yes, you can easily copy the Arabic text, transliteration, translation, and meanings using the copy buttons provided on each Kalima's detailed page."
    },
    {
      question: "What does Kalima Istighfar mean?",
      answer: "Kalima Istighfar is the fifth Kalima focused on seeking Allah's forgiveness. It's a comprehensive prayer asking forgiveness for all types of sins - known and unknown, intentional and unintentional, public and private."
    },
    {
      question: "How can I memorize the 6 Kalimas?",
      answer: "Start with understanding the meaning, then practice the pronunciation using our audio feature. Repeat daily, focus on one Kalima at a time, and use the progress tracker to monitor your learning journey."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-emerald-700 text-lg">
            Common questions about the 6 Kalimas of Islam
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-emerald-200 px-6"
            >
              <AccordionTrigger className="text-left text-emerald-900 hover:text-emerald-700 text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
