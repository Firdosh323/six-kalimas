import { useState, useEffect } from 'react';
import { Star, ChevronDown, Heart, BookOpen, Trophy, Users, Bookmark, Clock, Download, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AudioPlayer from '@/components/AudioPlayer';
import SearchBar from '@/components/SearchBar';
import FavoriteButton from '@/components/FavoriteButton';
import ProgressTracker from '@/components/ProgressTracker';
import DailyReminder from '@/components/DailyReminder';
import ShareButton from '@/components/ShareButton';
const kalimas = [{
  id: 1,
  name: "Kalima Tayyibah",
  title: "The Word of Purity",
  shortTitle: "First Kalima - Tayyab",
  arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَسُولُ اللّٰهِ",
  transliteration: "La ilaha illa Allah, Muhammadur rasul Allah",
  translation: "There is no god but Allah, Muhammad is the messenger of Allah",
  meaning: "This is the fundamental declaration of faith in Islam, affirming the oneness of Allah and the prophethood of Muhammad (PBUH).",
  cardColor: "from-emerald-500 to-teal-600"
}, {
  id: 2,
  name: "Kalima Shahadat",
  title: "The Testimony",
  shortTitle: "Second Kalima - Shahadat",
  arabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
  transliteration: "Ashhadu an la ilaha illa Allah wa ashhadu anna Muhammadan abduhu wa rasuluh",
  translation: "I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger",
  meaning: "This extends the first Kalima by adding personal testimony and acknowledging Muhammad (PBUH) as both servant and messenger of Allah.",
  cardColor: "from-blue-500 to-indigo-600"
}, {
  id: 3,
  name: "Kalima Tamjeed",
  title: "The Glorification",
  shortTitle: "Third Kalima - Tamjeed",
  arabic: "سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللّٰهُ وَاللّٰهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَالِيِّ الْعَظِيمِ",
  transliteration: "Subhan Allah wa al-hamdu lillahi wa la ilaha illa Allah wa Allahu akbar wa la hawla wa la quwwata illa billahi al-ali al-azeem",
  translation: "Glory be to Allah, and praise be to Allah, and there is no god but Allah, and Allah is the Greatest, and there is no power and no strength except with Allah, the Most High, the Most Great",
  meaning: "This Kalima combines various forms of praise and glorification of Allah, acknowledging His supreme power and greatness.",
  cardColor: "from-purple-500 to-violet-600"
}, {
  id: 4,
  name: "Kalima Tawheed",
  title: "The Unity",
  shortTitle: "Fourth Kalima - Tawheed",
  arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ أَبَدًا أَبَدًا ذُو الْجَلَالِ وَالْإِكْرَامِ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
  transliteration: "La ilaha illa Allah wahdahu la sharika lahu lahu al-mulku wa lahu al-hamdu yuhyi wa yumitu wa huwa hayyun la yamutu abadan abada dhu al-jalali wa al-ikram biyadihi al-khayr wa huwa ala kulli shay'in qadeer",
  translation: "There is no god but Allah alone, He has no partner, His is the dominion and His is the praise, He gives life and causes death, and He is alive and does not die, ever and forever, Owner of Majesty and Honor, in His hand is all good and He has power over all things",
  meaning: "This Kalima emphasizes the absolute unity and sovereignty of Allah, His eternal nature, and His complete control over life and death.",
  cardColor: "from-orange-500 to-amber-600"
}, {
  id: 5,
  name: "Kalima Istighfar",
  title: "The Seeking of Forgiveness",
  shortTitle: "Fifth Kalima - Astaghfar",
  arabic: "أَسْتَغْفِرُ اللّٰهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمْدًا أَوْ خَطَأً سِرًّا أَوْ عَلَانِيَةً وَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ وَسَتَّارُ الْعُيُوبِ وَغَفَّارُ الذُّنُوبِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَالِيِّ الْعَظِيمِ",
  transliteration: "Astaghfiru Allah rabbi min kulli dhanbin adhnabtahu amdan aw khata'an sirran aw alaniyatan wa atubu ilayhi min adh-dhanbi alladhi a'lamu wa min adh-dhanbi alladhi la a'lamu innaka anta allamu al-ghuyubi wa sattaru al-uyubi wa ghaffaru adh-dhunubi wa la hawla wa la quwwata illa billahi al-ali al-azeem",
  translation: "I seek forgiveness from Allah, my Lord, for every sin I committed knowingly or unknowingly, secretly or openly, and I turn to Him from the sin which I know and from the sin which I do not know. Indeed You are the Knower of the hidden things and the Concealer of faults and the Forgiver of sins, and there is no power and no strength except with Allah, the Most High, the Most Great",
  meaning: "This Kalima is a comprehensive prayer for forgiveness, acknowledging all types of sins and seeking Allah's mercy and forgiveness.",
  cardColor: "from-pink-500 to-rose-600"
}, {
  id: 6,
  name: "Kalima Radde Kufr",
  title: "The Rejection of Disbelief",
  shortTitle: "Sixth Kalima - Rad-de-Kufr",
  arabic: "اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ بِهِ وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهِ تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكَذِبِ وَالْغِيبَةِ وَالْبِدْعَةِ وَالنَّمِيمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِي كُلِّهَا وَأَسْلَمْتُ وَأَقُولُ لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَسُولُ اللّٰهِ",
  transliteration: "Allahumma inni a'udhu bika min an ushrika bika shay'an wa ana a'lamu bihi wa astaghfiruka lima la a'lamu bihi tubtu anhu wa tabarra'tu min al-kufri wa ash-shirki wa al-kadhib wa al-ghiba wa al-bid'a wa an-namima wa al-fawahish wa al-buhtan wa al-ma'asi kulliha wa aslamtu wa aqulu la ilaha illa Allah Muhammadur rasul Allah",
  translation: "O Allah, I seek refuge in You from associating anything with You knowingly, and I seek Your forgiveness for what I do not know. I repent from it and I disassociate myself from disbelief and polytheism and falsehood and backbiting and innovation and tale-bearing and indecencies and slander and all sins, and I submit, and I say there is no god but Allah, Muhammad is the messenger of Allah",
  meaning: "This final Kalima serves as a comprehensive rejection of all forms of disbelief and sin, while reaffirming one's commitment to Islamic faith.",
  cardColor: "from-cyan-500 to-blue-600"
}];
const Index = () => {
  const [activeKalima, setActiveKalima] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredKalimas, setFilteredKalimas] = useState(kalimas);
  const [visitCount, setVisitCount] = useState(0);
  const [kalimaOfTheDay, setKalimaOfTheDay] = useState(kalimas[0]);
  useEffect(() => {
    // Set Kalima of the Day based on current date
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const kalimaIndex = dayOfYear % kalimas.length;
    setKalimaOfTheDay(kalimas[kalimaIndex]);

    // SEO: Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "6 Kalimas of Islam",
      "description": "Learn and recite the 6 Kalimas of Islam - sacred declarations that form the foundation of Islamic faith. Arabic text with English translations and meanings.",
      "url": window.location.href,
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://6kalimas.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Track visits
    const visits = parseInt(localStorage.getItem('site-visits') || '0') + 1;
    localStorage.setItem('site-visits', visits.toString());
    setVisitCount(visits);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredKalimas(kalimas);
    } else {
      const filtered = kalimas.filter(kalima => kalima.name.toLowerCase().includes(query.toLowerCase()) || kalima.title.toLowerCase().includes(query.toLowerCase()) || kalima.translation.toLowerCase().includes(query.toLowerCase()) || kalima.transliteration.toLowerCase().includes(query.toLowerCase()));
      setFilteredKalimas(filtered);
    }
  };
  const clearSearch = () => {
    setSearchQuery('');
    setFilteredKalimas(kalimas);
  };
  const scrollToKalima = (id: number) => {
    setActiveKalima(id);
    setTimeout(() => {
      const element = document.getElementById(`kalima-${id}`);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };
  const handleCardClick = (id: number) => {
    scrollToKalima(id);
  };
  const downloadPDF = () => {
    console.log('Downloading PDF guide...');
    // In a real implementation, this would trigger a PDF download
  };
  return <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* SEO Meta Tags */}
      <div style={{
      display: 'none'
    }}>
        <h1>6 Kalimas of Islam - Sacred Declarations of Faith</h1>
        <p>Learn the Six Kalimas: Tayyibah, Shahadat, Tamjeed, Tawheed, Istighfar, and Radde Kufr. Complete with Arabic text, transliteration, translation, and meanings.</p>
      </div>

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
            <nav className="hidden md:flex items-center space-x-6">
              <span className="text-sm text-emerald-600">Visits: {visitCount.toLocaleString()}</span>
              <Button onClick={downloadPDF} variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                PDF Guide
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10 px-0"></div>
        <div className="relative container mx-auto max-w-4xl">
          <div className="mb-4">
            <h1 className="text-5xl font-bold text-emerald-900 mb-6 leading-tight md:text-5xl">
              The Six Kalimas
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700 mb-8 leading-relaxed">
              Sacred declarations that form the foundation of Islamic faith
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm p-8 shadow-lg border border-emerald-100 rounded-2xl mx-0 py-[2px] px-[5px] my-[4px]">
            <p className="text-emerald-800 leading-relaxed text-base">
              The Six Kalimas are fundamental Islamic declarations that express the core beliefs of Islam. Each Kalima serves a unique purpose in strengthening faith, seeking forgiveness, and affirming the oneness of Allah.
            </p>
          </div>

          <div className="mt-6 my-[12px]">
            <ChevronDown className="w-8 h-8 text-emerald-600 mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* Ad Placeholder */}
      <section className="py-[5px] mx-[2px] px-0">
        <div className="container mx-2px max-w-1xl px-0">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Ad Placeholder</h3>
            <p className="text-gray-500">Your AdSense ad could be displayed here.</p>
          </div>
        </div>
      </section>

      {/* Kalima of the Day */}
      <section className="py-4 px-4">
        <div className="container mx-auto max-w-2xl px-0">
          <div className="p-6 rounded-2xl border bg-gradient-to-tr from-blue-500 to-indigo-600 from-opacity-20 to-opacity-5 border-white text-white relative overflow-hidden">
            <div className="flex items-start space-x-3 mb-0.5 px-0">
              <div className="bg-white/20 rounded-full p-2">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Kalima of the Day</h2>
                <h3 className="text-xl font-semibold mb-3">{kalimaOfTheDay.shortTitle}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {kalimaOfTheDay.meaning}
                </p>
                <Button onClick={() => scrollToKalima(kalimaOfTheDay.id)} className="bg-white text-gray-900 hover:bg-white/90">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              <Trophy className="w-5 h-5 mr-2" />
              Test Your Knowledge
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Bell className="w-5 h-5 mr-2" />
              Set Daily Reminder
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-[10px] px-[10px]">
        <div className="container mx-auto max-w-4xl">
          <SearchBar onSearch={handleSearch} onClear={clearSearch} />
          {searchQuery && <p className="text-center mt-4 text-emerald-700">
              Found {filteredKalimas.length} result{filteredKalimas.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>}
        </div>
      </section>

      {/* Kalimas Cards Overview */}
      <section className="px-4 py-0">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
              The Six Sacred Kalimas
            </h2>
            <p className="text-lg text-emerald-700">
              Click on any Kalima to learn more about its meaning and significance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredKalimas.map(kalima => <Card key={kalima.id} className={`cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 overflow-hidden ${activeKalima === kalima.id ? 'ring-4 ring-emerald-400 scale-105' : ''}`} onClick={() => handleCardClick(kalima.id)}>
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${kalima.cardColor} text-white p-6 relative`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold`}>
                        {kalima.id}
                      </div>
                      <FavoriteButton kalimaId={kalima.id} title={kalima.name} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{kalima.shortTitle}</h3>
                  </div>
                  
                  <div className="p-6 bg-slate-800/90 text-white">
                    <div className="text-right mb-4">
                      <p className="text-lg font-arabic leading-relaxed" dir="rtl">
                        {kalima.arabic.length > 80 ? `${kalima.arabic.substring(0, 80)}...` : kalima.arabic}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Detailed Kalimas Section */}
      {activeKalima && <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-amber-50">
          <div className="container mx-auto max-w-6xl">
            {kalimas.filter(kalima => kalima.id === activeKalima).map(kalima => <Card key={kalima.id} id={`kalima-${kalima.id}`} className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm animate-fade-in">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${kalima.cardColor} text-white p-8`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                            {kalima.id}
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold">{kalima.name}</h2>
                            <p className="text-white/90 text-lg">{kalima.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ShareButton kalimaId={kalima.id} title={kalima.name} />
                          <button onClick={() => setActiveKalima(null)} className="text-white/70 hover:text-white transition-colors text-2xl">
                            ×
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 space-y-8">
                      {/* Audio Player */}
                      <AudioPlayer kalimaId={kalima.id} title={kalima.name} />

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

                      {/* Progress Tracker */}
                      <ProgressTracker kalimaId={kalima.id} title={kalima.name} />
                    </div>
                  </CardContent>
                </Card>)}
          </div>
        </section>}

      {/* Features Section - Moved before Learning Statistics */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Complete Learning</h3>
              <p className="text-sm text-blue-700">Arabic, transliteration, and meanings</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-purple-900 mb-2">Progress Tracking</h3>
              <p className="text-sm text-purple-700">Track your reading progress</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-pink-600 mx-auto mb-3" />
              <h3 className="font-semibold text-pink-900 mb-2">Favorites</h3>
              <p className="text-sm text-pink-700">Save your favorite Kalimas</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-green-900 mb-2">Share & Learn</h3>
              <p className="text-sm text-green-700">Share with family and friends</p>
            </Card>
          </div>
          
          <div className="mt-8 max-w-md mx-auto">
            <DailyReminder />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Learning Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{visitCount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Visits</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">6</div>
              <div className="text-sm text-gray-600">Sacred Kalimas</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1.8B+</div>
              <div className="text-sm text-gray-600">Muslims Worldwide</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1400+</div>
              <div className="text-sm text-gray-600">Years of History</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
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
          </div>
          
          <div className="border-t border-emerald-800 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-3">Features</h4>
                <ul className="space-y-2 text-emerald-200 text-sm">
                  <li>Audio Recitation</li>
                  <li>Progress Tracking</li>
                  <li>Daily Reminders</li>
                  <li>Favorites System</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Learn</h4>
                <ul className="space-y-2 text-emerald-200 text-sm">
                  <li>Arabic Text</li>
                  <li>Transliteration</li>
                  <li>English Translation</li>
                  <li>Detailed Meanings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Share</h4>
                <ul className="space-y-2 text-emerald-200 text-sm">
                  <li>Social Sharing</li>
                  <li>PDF Downloads</li>
                  <li>Mobile Friendly</li>
                  <li>Offline Ready</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto rounded-full mb-4"></div>
              <p className="text-emerald-300 text-sm">
                © 2024 6 Kalimas. Made with ❤️ for the Muslim Ummah.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
