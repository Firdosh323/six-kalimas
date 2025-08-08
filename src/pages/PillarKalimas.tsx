import { useEffect } from "react";
import Header from "@/components/Header";
import AppFooter from "@/components/AppFooter";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import QuizKalimas from "@/components/QuizKalimas";
import EmailCapture from "@/components/EmailCapture";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { kalimas } from "@/data/kalimas";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { useVisitCount } from "@/hooks/useVisitCount";
import { updateCanonicalUrl } from "@/utils/seoUtils";
import { getFAQSchema } from "@/utils/structuredData";

const PillarKalimas = () => {
  const visitCount = useVisitCount();

  useEffect(() => {
    document.title = "6 Kalimas — Arabic, Transliteration, English & Urdu Meaning";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Complete guide to the Six Kalimas of Islam: Arabic, transliteration, English & Urdu meaning, history, benefits, audio MP3 & memorization tips."
      );
    }
    updateCanonicalUrl("/six-kalimas");

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "6 Kalimas — Arabic, Transliteration, English & Urdu Meaning",
      description:
        "Comprehensive pillar page covering all Six Kalimas with Arabic text, transliteration, translations, benefits, history, audio and memorization guide.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://6kalimas.com/six-kalimas",
      },
      author: { "@type": "Organization", name: "6 Kalimas Guide" },
      publisher: { "@type": "Organization", name: "6 Kalimas Guide" },
    };

    const faqSchema = getFAQSchema?.() || null;

    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.innerHTML = JSON.stringify(articleSchema);
    document.head.appendChild(s1);

    let s2: HTMLScriptElement | null = null;
    if (faqSchema) {
      s2 = document.createElement("script");
      s2.type = "application/ld+json";
      s2.innerHTML = JSON.stringify(faqSchema);
      document.head.appendChild(s2);
    }

    return () => {
      document.head.removeChild(s1);
      if (s2) document.head.removeChild(s2);
    };
  }, []);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/uploads/pdfs/6-kalimas-pdf.pdf";
    link.download = "6-kalimas-complete-guide.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <Header visitCount={visitCount} onDownloadPDF={downloadPDF} />
      <main className="container mx-auto px-4 py-10 space-y-10">
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900">
            6 Kalimas — Arabic, Transliteration, English & Urdu Meaning, History, Benefits, Memorization Guide
          </h1>
          <p className="text-emerald-700 text-lg">
            A comprehensive learning resource covering all Six Kalimas of Islam with authentic text, clear translation, audio recitation and memorization tips.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <YouTubeEmbed videoId="VIDEO_ID" title="6 Kalimas — Video Guide" />
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-900">Download Resources</CardTitle>
                <CardDescription className="text-emerald-700">PDF and MP3s for offline learning</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button onClick={downloadPDF}>
                  <Download className="w-4 h-4 mr-2" /> Download PDF
                </Button>
                {kalimas.map((k) => (
                  <a
                    key={k.id}
                    href={
                      k.id === 1 ? "/audio/First_Kalma.mp3" :
                      k.id === 2 ? "/audio/Second_Kalma.mp3" :
                      k.id === 3 ? "/audio/Third_Kalma.mp3" :
                      k.id === 4 ? "/audio/Fourth_Kalma.mp3" :
                      k.id === 5 ? "/audio/Fifth_Kalma.mp3" :
                      "/audio/Sixth_Kalma.mp3"
                    }
                    download
                    className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700 transition"
                    aria-label={`Download ${k.name} MP3`}
                  >
                    <Download className="w-4 h-4 mr-2" /> {k.name} MP3
                  </a>
                ))}
              </CardContent>
            </Card>
            <QuizKalimas />
          </div>

          <aside className="space-y-6">
            <EmailCapture />
            <Card className="border-emerald-100">
              <CardHeader>
                <CardTitle className="text-emerald-900">Explore Each Kalima</CardTitle>
                <CardDescription className="text-emerald-700">
                  Deep-dive with Arabic text, audio and translation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {kalimas.map((k) => (
                    <li key={k.id}>
                      <Link to={`/kalima/${k.id}`} className="text-emerald-800 hover:text-emerald-900 underline">
                        {k.name} — {k.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
        </section>
      </main>
      <AppFooter />
    </div>
  );
};

export default PillarKalimas;
