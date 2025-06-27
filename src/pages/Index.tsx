
import { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const kalimas = [
  {
    id: 1,
    name: "Kalima Tayyibah",
    title: "The Word of Purity",
    arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَسُولُ اللّٰهِ",
    transliteration: "La ilaha illa Allah, Muhammadur rasul Allah",
    translation: "There is no god but Allah, Muhammad is the messenger of Allah",
    meaning: "This is the fundamental declaration of faith in Islam, affirming the oneness of Allah and the prophethood of Muhammad (PBUH)."
  },
  {
    id: 2,
    name: "Kalima Shahadat",
    title: "The Testimony",
    arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration: "Ashhadu an la ilaha illa Allah wa ashhadu anna Muhammadan abduhu wa rasuluh",
    translation: "I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger",
    meaning: "This extends the first Kalima by adding personal testimony and acknowledging Muhammad (PBUH) as both servant and messenger of Allah."
  },
  {
    id: 3,
    name: "Kalima Tamjeed",
    title: "The Glorification",
    arabic: "سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللّٰهُ وَاللّٰهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ",
    transliteration: "Subhan Allah wa al-hamdu lillahi wa la ilaha illa Allah wa Allahu akbar wa la hawla wa la quwwata illa billahi al-ali al-azeem",
    translation: "Glory be to Allah, and praise be to Allah, and there is no god but Allah, and Allah is the Greatest, and there is no power and no strength except with Allah, the Most High, the Most Great",
    meaning: "This Kalima combines various forms of praise and glorification of Allah, acknowledging His supreme power and greatness."
  },
  {
    id: 4,
    name: "Kalima Tawheed",
    title: "The Unity",
    arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ أَبَدًا أَبَدًا ذُو الْجَلَالِ وَالْإِكْرَامِ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "La ilaha illa Allah wahdahu la sharika lahu lahu al-mulku wa lahu al-hamdu yuhyi wa yumitu wa huwa hayyun la yamutu abadan abada dhu al-jalali wa al-ikram biyadihi al-khayr wa huwa ala kulli shay'in qadeer",
    translation: "There is no god but Allah alone, He has no partner, His is the dominion and His is the praise, He gives life and causes death, and He is alive and does not die, ever and forever, Owner of Majesty and Honor, in His hand is all good and He has power over all things",
    meaning: "This Kalima emphasizes the absolute unity and sovereignty of Allah, His eternal nature, and His complete control over life and death."
  },
  {
    id: 5,
    name: "Kalima Istighfar",
    title: "The Seeking of Forgiveness",
    arabic: "أَسْتَغْفِرُ اللّٰهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمْدًا أَوْ خَطَأً سِرًّا أَوْ عَلَانِيَةً وَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ وَسَتَّارُ الْعُيُوبِ وَغَفَّارُ الذُّنُوبِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيمِ",
    transliteration: "Astaghfiru Allah rabbi min kulli dhanbin adhnabtahu amdan aw khata'an sirran aw alaniyatan wa atubu ilayhi min adh-dhanbi alladhi a'lamu wa min adh-dhanbi alladhi la a'lamu innaka anta allamu al-ghuyubi wa sattaru al-uyubi wa ghaffaru adh-dhunubi wa la hawla wa la quwwata illa billahi al-ali al-azeem",
    translation: "I seek forgiveness from Allah, my Lord, for every sin I committed knowingly or unknowingly, secretly or openly, and I turn to Him from the sin which I know and from the sin which I do not know. Indeed You are the Knower of the hidden things and the Concealer of faults and the Forgiver of sins, and there is no power and no strength except with Allah, the Most High, the Most Great",
    meaning: "This Kalima is a comprehensive prayer for forgiveness, acknowledging all types of sins and seeking Allah's mercy and forgiveness."
  },
  {
    id: 6,
    name: "Kalima Radde Kufr",
    title: "The Rejection of Disbelief",
    arabic: "اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكَذِبِ وَالْغِيبَةِ وَالْبِدْعَةِ وَالنَّمِيمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِي كُلِّهَا وَأَسْلَمْتُ وَأَقُولُ لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَسُولُ اللّٰهِ",
    transliteration: "Allahumma inni a'udhu bika min an ushrika bika shay'an wa ana a'lamu bihi wa astaghfiruka lima la a'lamu bihi tubtu anhu wa tabarra'tu min al-kufri wa ash-shirki wa al-kadhib wa al-ghiba wa al-bid'a wa an-namima wa al-fawahish wa al-buhtan wa al-ma'asi kulliha wa aslamtu wa aqulu la ilaha illa Allah Muhammadur rasul Allah",
    translation: "O Allah, I seek refuge in You from associating anything with You knowingly, and I seek Your forgiveness for what I do not know. I repent from it and I disassociate myself from disbelief and polytheism and falsehood and backbiting and innovation and tale-bearing and indecencies and slander and all sins, and I submit, and I say there is no god but Allah, Muhammad is the messenger of Allah",
    meaning: "This final Kalima serves as a comprehensive rejection of all forms of disbelief and sin, while reaffirming one's commitment to Islamic faith."
  }
];

const Index = () => {
  const [activeKalima, setActiveKalima] = useState<number | null>(null);

  const scrollToKalima = (id: number) => {
    const element = document.getElementById(`kalima-${id}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-900">6 Kalimas</h1>
                <p className="text-sm text-emerald-600">Sacred Declarations of Faith</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {kalimas.slice(0, 3).map((kalima) => (
                <button
                  key={kalima.id}
                  onClick={() => scrollToKalima(kalima.id)}
                  className="text-emerald-700 hover:text-emerald-900 transition-colors text-sm font-medium"
                >
                  {kalima.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10"></div>
        <div className="relative container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6 leading-tight">
              The Six Kalimas
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700 mb-8 leading-relaxed">
              Sacred declarations that form the foundation of Islamic faith
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-emerald-100">
            <p className="text-lg text-emerald-800 leading-relaxed">
              The Six Kalimas are fundamental Islamic declarations that express the core beliefs of Islam. Each Kalima serves a unique purpose in strengthening faith, seeking forgiveness, and affirming the oneness of Allah.
            </p>
          </div>

          <div className="mt-12">
            <ChevronDown className="w-8 h-8 text-emerald-600 mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* Kalimas Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12">
            {kalimas.map((kalima, index) => (
              <Card
                key={kalima.id}
                id={`kalima-${kalima.id}`}
                className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                          {kalima.id}
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold">{kalima.name}</h2>
                          <p className="text-emerald-100 text-lg">{kalima.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-8">
                    {/* Arabic Text */}
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-xl p-8 border border-emerald-100">
                        <p className="text-2xl md:text-3xl leading-relaxed text-emerald-900 font-arabic" dir="rtl">
                          {kalima.arabic}
                        </p>
                      </div>
                    </div>

                    {/* Transliteration */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-emerald-800 mb-3">Transliteration:</h4>
                      <p className="text-lg text-gray-700 italic leading-relaxed">
                        {kalima.transliteration}
                      </p>
                    </div>

                    {/* Translation */}
                    <div className="bg-emerald-50 rounded-xl p-6">
                      <h4 className="font-semibold text-emerald-800 mb-3">Translation:</h4>
                      <p className="text-lg text-emerald-900 leading-relaxed">
                        "{kalima.translation}"
                      </p>
                    </div>

                    {/* Meaning */}
                    <div className="bg-amber-50 rounded-xl p-6">
                      <h4 className="font-semibold text-amber-800 mb-3">Significance:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        {kalima.meaning}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">6 Kalimas</h3>
          </div>
          <p className="text-emerald-200 mb-6 leading-relaxed">
            May these sacred declarations strengthen your faith and bring you closer to Allah. 
            Recite them with sincerity and understanding.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto rounded-full"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
