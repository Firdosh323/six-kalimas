
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
      question: "How many Kalimas are there in Islam and why?",
      answer: "There are 6 Kalimas in mainstream Islamic tradition. They are numbered Kalima Tayyibah, Shahadat, Tamjeed, Tawheed, Istighfar, and Radde Kufr. While the Quran and Hadith do not list them as 6 numbered declarations, each Kalima is rooted in authentic Quranic verses and Prophetic traditions. Islamic scholars compiled them into this educational framework to teach Muslims the core declarations of faith in a structured, progressive way."
    },
    {
      question: "What is the difference between Kalima Tayyibah and Kalima Shahadat?",
      answer: "Kalima Tayyibah states 'La ilaha illa Allah, Muhammadur Rasool Allah' — a declaration of universal truth. Kalima Shahadat adds 'Ash-hadu' (I bear witness), making it a personal testimony and oath. The Shahadat also describes the Prophet as 'Abduhu' (His servant), emphasizing his humanity. The Shahadat is recited in the 5 daily prayers (in Tashahhud) and when entering Islam; Tayyibah is used for daily dhikr."
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
      question: "When should Muslims recite Kalima Istighfar?",
      answer: "Kalima Istighfar should be recited after every prayer, in the early morning before or after Fajr, immediately after any sin, during times of hardship, and regularly as a spiritual practice. The Prophet (peace be upon him) used to seek forgiveness more than 70 times daily, despite being sinless. Reciting it before sleep is also a Sunnah practice for ending the day with a clean spiritual state."
    },
    {
      question: "When should Muslims recite these Kalimas daily?",
      answer: "Muslims can recite these Kalimas during daily prayers (Salah), dhikr (remembrance of Allah), morning and evening supplications, or personal worship. Kalima Shahadat is recited in the five daily prayers during Tashahhud, while others can be recited for spiritual purification, seeking forgiveness, and strengthening faith."
    },
    {
      question: "Are the 6 Kalimas in the Quran and Hadith?",
      answer: "While the concepts and phrases within the Kalimas are rooted in Quranic verses and authentic Hadith, they were compiled as a structured collection for educational purposes. Each declaration contains words and phrases directly from Islamic scripture, helping Muslims learn fundamental Islamic beliefs in an organized manner. For example, Kalima Tayyibah is derived from Quran 47:19, and Kalima Tawheed contains phrases from authentic Bukhari and Muslim hadiths."
    },
    {
      question: "How can I memorize the 6 Kalimas easily with audio?",
      answer: "Start by understanding the meaning of each Kalima, then use our audio feature to practice pronunciation. Listen to one Kalima repeatedly, follow the transliteration, and recite along. Practice daily for 10-15 minutes, focus on one Kalima at a time, and use spaced repetition. Our audio guides make memorization much easier than text-only learning. Most people memorize all 6 within 4-6 weeks."
    },
    {
      question: "How can children learn 6 Kalimas effectively?",
      answer: "Children learn Kalimas best through audio repetition and fun activities. Start with Kalima Tayyibah (the shortest) as early as age 2-3 with 'La ilaha illa Allah'. Use our audio player during car rides or meals so children absorb pronunciation passively. Make it a reward-based activity with sticker charts. By age 8-10, most children can memorize all 6 Kalimas with this approach. Always explain child-friendly meanings alongside Arabic text."
    },
    {
      question: "What does Kalima Radde Kufr mean and when to recite it?",
      answer: "Kalima Radde Kufr means 'Rejection of Disbelief.' It is a comprehensive spiritual renewal declaration that seeks refuge from shirk, then systematically rejects disbelief, falsehood, backbiting, religious innovation, gossip, indecencies, slander, and all sins before reaffirming the Shahada. It is best recited weekly (especially on Fridays) as a spiritual audit, after accidentally committing social sins like backbiting, and during periods of spiritual renewal in Ramadan."
    },
    {
      question: "What does Kalima Istighfar mean and when to recite it?",
      answer: "Kalima Istighfar is the fifth Kalima focused on seeking Allah's forgiveness. It comprehensively covers intentional sins, unintentional sins, public sins, private sins, and even sins you've forgotten. It acknowledges three of Allah's attributes: Allamu al-Ghuyub (Knower of hidden things), Sattaru al-Uyub (Concealer of faults), and Ghaffaru adh-Dhunub (Forgiver of sins). Recite it daily, especially during morning and evening dhikr, after prayers, and when seeking Allah's mercy."
    },
    {
      question: "What is 6 Kalimas in Roman English (transliteration)?",
      answer: "The 6 Kalimas in Roman English (transliteration) are: 1) 'La ilaha illa Allah, Muhammadur Rasool Allah', 2) 'Ash-hadu an la ilaha illa Allah wa ash-hadu anna Muhammadan abduhu wa rasooluh', 3) 'Subhana-llahi wal-hamdu lillahi wa la ilaha illa-llahu wa-llahu akbar wa la hawla wa la quwwata illa billahi-l-aliyyi-l-azeem', 4) 'La ilaha illa-llahu wahdahu la sharika lahu lahul-mulku...', 5) 'Astaghfiru-llaha rabbi min kulli dhanbin...', 6) 'Allahumma inni a-udhu bika min an ushrika bika...' Visit our blog for the complete Roman English guide."
    },
    {
      question: "Can new Muslims (converts) learn the 6 Kalimas?",
      answer: "Absolutely — in fact, new Muslims should prioritize them. As a convert, you've already recited the Shahada (Kalima Shahadat). Start with Kalima Tayyibah to understand what you said when entering Islam, then master Kalima Shahadat since it's in every prayer. Progress to the others gradually over 2-3 months. Our site provides audio, transliteration, and full meanings designed to make learning accessible for non-Arabic speakers. Our blog also has a dedicated guide for new Muslims and converts."
    },
    {
      question: "How long does it take to memorize all 6 Kalimas?",
      answer: "With our audio-guided approach, most people can memorize all 6 Kalimas within 4-6 weeks with daily practice. Start with shorter Kalimas like Tayyibah and Shahadat (3-5 days each), then progress to longer ones like Istighfar and Radde Kufr (7-10 days each). Consistent daily practice of 15-20 minutes while listening to audio pronunciation ensures effective memorization. Children may take slightly longer but also tend to retain very well once learned."
    },
    {
      question: "What are the benefits of reciting 6 Kalimas regularly?",
      answer: "Regular recitation of the 6 Kalimas strengthens Islamic faith, provides spiritual protection, earns diverse rewards mentioned in hadiths, deepens understanding of Islamic monotheism (Tawheed), provides a framework for constant Allah-consciousness (dhikr), and helps Muslims maintain connection with fundamental Islamic principles daily. Specific benefits include: Kalima Tayyibah — 100 times in morning earns 100 good deeds; Kalima Istighfar — relieves worry and provides provisions from unexpected sources; Kalima Tamjeed — phrases are among the most beloved to Allah."
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
