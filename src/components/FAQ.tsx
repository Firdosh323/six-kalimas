
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the 6 Kalimas of Islam with audio?",
      answer: "The 6 Kalimas with audio are fundamental Islamic declarations: 1) Kalima Tayyibah (Purity), 2) Kalima Shahadat (Testimony), 3) Kalima Tamjeed (Glorification), 4) Kalima Tawheed (Unity), 5) Kalima Istighfar (Forgiveness), and 6) Kalima Radde Kufr (Rejection of Disbelief). Each comes with high-quality Arabic audio pronunciation to help you learn proper recitation."
    },
    {
      question: "How do you pronounce the Arabic text of Kalimas correctly?",
      answer: "Each Kalima page includes high-quality audio pronunciation and transliteration to help you learn the correct Arabic pronunciation. Listen to the audio while reading the transliteration, then practice repeating after the native speaker. Our audio feature ensures you learn authentic pronunciation from the beginning."
    },
    {
      question: "Can I download the Kalimas audio files for offline learning?",
      answer: "Yes, our platform provides access to all 6 Kalimas with audio recitation. Each Kalima has its own audio player for learning proper Arabic pronunciation. You can also download our complete PDF guide that includes all Kalimas with transliteration for offline study."
    },
    {
      question: "What is the difference between Kalima Tayyibah and Kalima Shahadat?",
      answer: "Kalima Tayyibah is the basic declaration 'La ilaha illa Allah, Muhammadur Rasool Allah' (There is no god but Allah, Muhammad is the messenger of Allah). Kalima Shahadat adds personal testimony with 'Ash-hadu' (I bear witness that...) making it a conscious acknowledgment of faith. Both are essential for every Muslim to know and recite."
    },
    {
      question: "When should Muslims recite these Kalimas daily?",
      answer: "Muslims can recite these Kalimas during daily prayers (Salah), dhikr (remembrance of Allah), morning and evening supplications, or personal worship. Kalima Shahadat is recited in the five daily prayers during Tashahhud, while others can be recited for spiritual purification, seeking forgiveness, and strengthening faith."
    },
    {
      question: "How can I memorize the 6 Kalimas easily with audio?",
      answer: "Start by understanding the meaning of each Kalima, then use our audio feature to practice pronunciation. Listen to one Kalima repeatedly, follow the transliteration, and recite along. Practice daily for 10-15 minutes, focus on one Kalima at a time, and use spaced repetition. Our audio guides make memorization much easier than text-only learning."
    },
    {
      question: "Are the 6 Kalimas mentioned in the Quran and Hadith?",
      answer: "While the concepts and phrases within the Kalimas are rooted in Quranic verses and authentic Hadith, they were compiled as a structured collection for educational purposes. Each declaration contains words and phrases directly from Islamic scripture, helping Muslims learn fundamental Islamic beliefs in an organized manner."
    },
    {
      question: "What does Kalima Istighfar mean and when to recite it?",
      answer: "Kalima Istighfar is the fifth Kalima focused on seeking Allah's forgiveness. It's a comprehensive prayer asking forgiveness for all types of sins - known and unknown, intentional and unintentional, public and private. Recite it daily, especially during morning and evening dhikr, after prayers, and when seeking Allah's mercy and forgiveness."
    },
    {
      question: "Can children learn Kalimas with this audio method?",
      answer: "Absolutely! Our audio-guided learning method is perfect for children. The clear pronunciation, slow-paced recitation, and visual transliteration help children learn correct pronunciation from an early age. Parents can use our platform to teach their children the fundamental Islamic declarations with proper Arabic pronunciation."
    },
    {
      question: "How long does it take to memorize all 6 Kalimas?",
      answer: "With our audio-guided approach, most people can memorize all 6 Kalimas within 2-4 weeks with daily practice. Start with shorter Kalimas like Tayyibah and Shahadat (3-5 days each), then progress to longer ones. Consistent daily practice of 15-20 minutes while listening to audio pronunciation ensures effective memorization."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-blue-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            Frequently Asked Questions About 6 Kalimas with Audio
          </h2>
          <p className="text-emerald-700 text-lg">
            Common questions about learning the Six Kalimas of Islam with audio pronunciation
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
