import { Globe, BookOpen, Volume2, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface KalimaUrduData {
  id: number;
  name: string;
  urduName: string;
  shortArabic: string;
  urduMeaning: string;
  benefits: string[];
  whenToRecite: string;
}

const kalimaUrduData: KalimaUrduData[] = [
  {
    id: 1,
    name: "Kalima Tayyibah",
    urduName: "کلمہ طیبہ",
    shortArabic: "لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَسُولُ اللّٰهِ",
    urduMeaning: "اللہ کے سوا کوئی معبود نہیں، محمد (ﷺ) اللہ کے رسول ہیں",
    benefits: [
      "100 times in morning: 100 good deeds + forgiveness",
      "Gateway to entering Islam",
      "Most beloved dhikr to Allah"
    ],
    whenToRecite: "Morning dhikr, at time of death, during hardship, after Adhan"
  },
  {
    id: 2,
    name: "Kalima Shahadat",
    urduName: "کلمہ شہادت",
    shortArabic: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ",
    urduMeaning: "میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں",
    benefits: [
      "Recited in every daily prayer (Tashahhud)",
      "Official declaration for entering Islam",
      "Forgiveness of sins when recited after Wudu"
    ],
    whenToRecite: "5 daily prayers, Adhan, after Wudu, when entering Islam"
  },
  {
    id: 3,
    name: "Kalima Tamjeed",
    urduName: "کلمہ تمجید",
    shortArabic: "سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ",
    urduMeaning: "اللہ پاک ہے اور تمام تعریفیں اللہ کے لیے ہیں",
    benefits: [
      "Contains 5 most-loved phrases to Allah",
      "Phrases used on Tasbih beads after every prayer",
      "Comprehensive glorification of Allah"
    ],
    whenToRecite: "After prayers (on Tasbih), morning adhkar, any time as dhikr"
  },
  {
    id: 4,
    name: "Kalima Tawheed",
    urduName: "کلمہ توحید",
    shortArabic: "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    urduMeaning: "اللہ اکیلا ہے، اس کا کوئی شریک نہیں",
    benefits: [
      "Saying 10x after Fajr & Maghrib: reward of 10 Hajjs",
      "Comprehensive declaration of Islamic monotheism",
      "Covers all 3 categories of Tawheed"
    ],
    whenToRecite: "Morning & evening adhkar, after Fajr and Maghrib prayers"
  },
  {
    id: 5,
    name: "Kalima Istighfar",
    urduName: "کلمہ استغفار",
    shortArabic: "أَسْتَغْفِرُ اللّٰهَ رَبِّي مِنْ كُلِّ ذَنْبٍ",
    urduMeaning: "میں اپنے رب اللہ سے ہر گناہ کی معافی مانگتا ہوں",
    benefits: [
      "Covers ALL sins: known, unknown, intentional, unintentional",
      "Relieves worry and opens provision",
      "Allah's 3 attributes of forgiveness acknowledged"
    ],
    whenToRecite: "After every prayer, morning, before sleep, after any sin"
  },
  {
    id: 6,
    name: "Kalima Radde Kufr",
    urduName: "کلمہ رد کفر",
    shortArabic: "اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ",
    urduMeaning: "اے اللہ! میں تجھ سے پناہ مانگتا ہوں کہ تیرے ساتھ کسی کو شریک کروں",
    benefits: [
      "Comprehensive rejection of all 9 categories of sin",
      "Spiritual renewal and recommitment to Islam",
      "Protection from shirk (greatest sin)"
    ],
    whenToRecite: "Weekly spiritual audit (especially Fridays), Ramadan, after social sins"
  }
];

const InternationalContent = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              6 Kalimas Benefits & When to Recite
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-2">
            Complete guide to spiritual benefits and recommended times for reciting each Kalima
          </p>
          <p className="text-teal-700 font-medium">
            کلمات کے فوائد اور پڑھنے کے اوقات • فوائد الكلمات الإسلامية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {kalimaUrduData.map((kalima) => (
            <Card key={kalima.id} className="bg-white border-teal-200 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded-full">
                    #{kalima.id}
                  </span>
                  <Link 
                    to={`/kalima/${kalima.id}`}
                    className="text-teal-600 hover:text-teal-800 text-sm font-medium hover:underline"
                  >
                    Learn with Audio →
                  </Link>
                </div>
                <CardTitle className="text-lg text-gray-900">{kalima.name}</CardTitle>
                <p className="text-right text-xl font-arabic text-gray-700 leading-loose" dir="rtl">
                  {kalima.urduName}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Arabic snippet */}
                <div className="bg-teal-50 rounded-lg p-3 text-right" dir="rtl">
                  <p className="text-sm text-gray-700 leading-loose font-arabic">
                    {kalima.shortArabic}
                  </p>
                </div>

                {/* Urdu meaning */}
                <div className="bg-emerald-50 rounded-lg p-3 text-right" dir="rtl">
                  <p className="text-sm text-emerald-800" dir="rtl">{kalima.urduMeaning}</p>
                </div>

                {/* Benefits */}
                <div>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-amber-500 mr-1" />
                    <span className="text-sm font-semibold text-gray-700">Key Benefits</span>
                  </div>
                  <ul className="space-y-1">
                    {kalima.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-teal-500 mr-1 mt-0.5">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When to recite */}
                <div>
                  <div className="flex items-center mb-1">
                    <Volume2 className="w-4 h-4 text-blue-500 mr-1" />
                    <span className="text-sm font-semibold text-gray-700">When to Recite</span>
                  </div>
                  <p className="text-xs text-gray-600">{kalima.whenToRecite}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-200">
          <div className="bg-gradient-to-r from-teal-700 to-emerald-700 p-6">
            <h3 className="text-2xl font-bold text-white text-center mb-1">
              All 6 Kalimas at a Glance
            </h3>
            <p className="text-teal-100 text-center">Quick reference comparison of all six Islamic declarations</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-teal-50 border-b border-teal-200">
                  <th className="p-4 text-left text-teal-900 font-semibold text-sm">Kalima</th>
                  <th className="p-4 text-left text-teal-900 font-semibold text-sm">Core Theme</th>
                  <th className="p-4 text-left text-teal-900 font-semibold text-sm">Audience</th>
                  <th className="p-4 text-left text-teal-900 font-semibold text-sm">Length</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { num: 1, name: "Tayyibah", theme: "Declaration of Faith", audience: "All Muslims, beginners, children", length: "Short" },
                  { num: 2, name: "Shahadat", theme: "Personal Testimony", audience: "Prayer, conversion, daily practice", length: "Medium" },
                  { num: 3, name: "Tamjeed", theme: "Glorification of Allah", audience: "Daily dhikr, after prayers", length: "Medium" },
                  { num: 4, name: "Tawheed", theme: "Unity & Sovereignty of Allah", audience: "Morning/evening adhkar", length: "Long" },
                  { num: 5, name: "Istighfar", theme: "Comprehensive Forgiveness", audience: "After prayers, morning, before sleep", length: "Very Long" },
                  { num: 6, name: "Radde Kufr", theme: "Rejection of Disbelief & Sin", audience: "Weekly renewal, Ramadan", length: "Very Long" },
                ].map((row, idx) => (
                  <tr key={idx} className={`border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-teal-50 transition-colors`}>
                    <td className="p-4">
                      <Link to={`/kalima/${row.num}`} className="flex items-center space-x-2 hover:text-teal-700">
                        <span className="w-7 h-7 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {row.num}
                        </span>
                        <span className="font-semibold text-gray-800">Kalima {row.name}</span>
                      </Link>
                    </td>
                    <td className="p-4 text-gray-700 text-sm">{row.theme}</td>
                    <td className="p-4 text-gray-600 text-sm">{row.audience}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.length === 'Short' ? 'bg-green-100 text-green-800' :
                        row.length === 'Medium' ? 'bg-blue-100 text-blue-800' :
                        row.length === 'Long' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {row.length}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-teal-50 text-center">
            <p className="text-teal-700 text-sm">
              <BookOpen className="w-4 h-4 inline mr-1" />
              Click on any Kalima above to learn it with audio pronunciation, complete Arabic text, and English translation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalContent;
