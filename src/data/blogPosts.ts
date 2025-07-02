
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Memorize 6 Kalimas Easily - Step by Step Guide for Beginners",
    excerpt: "Discover proven techniques to memorize all 6 Kalimas of Islam with ease. Our comprehensive guide includes audio pronunciation, repetition methods, and memorization tips used by Islamic scholars worldwide.",
    content: "Complete article content about memorizing 6 Kalimas...",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
    date: "2024-01-15",
    readTime: "8 min read",
    author: "Islamic Scholar",
    tags: ["6 Kalimas", "Memorization", "Islamic Learning", "Beginner Guide", "Audio Recitation"],
    slug: "how-to-memorize-6-kalimas-easily"
  },
  {
    id: 2,
    title: "Complete List of Islamic Duas for Daily Life with Arabic Text and Translation",
    excerpt: "Essential collection of Islamic duas for morning, evening, eating, sleeping, and protection. Each dua includes Arabic text, English translation, transliteration, and audio recitation for perfect pronunciation.",
    content: "Complete article content about daily Islamic duas...",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=600&fit=crop",
    date: "2024-01-12",
    readTime: "12 min read",
    author: "Hafiz Muhammad",
    tags: ["Islamic Duas", "Daily Prayers", "Arabic Text", "English Translation", "Audio Recitation"],
    slug: "complete-list-islamic-duas-daily-life"
  },
  {
    id: 3,
    title: "Benefits and Importance of 6 Kalimas in Islam - Why Every Muslim Should Know",
    excerpt: "Understand the profound spiritual benefits and importance of reciting all 6 Kalimas. Learn how these sacred declarations strengthen faith, provide protection, and bring blessings to Muslim believers.",
    content: "Complete article content about benefits of 6 Kalimas...",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
    date: "2024-01-10",
    readTime: "10 min read",
    author: "Dr. Aisha Rahman",
    tags: ["6 Kalimas Benefits", "Islamic Faith", "Spiritual Benefits", "Muslim Beliefs", "Religious Education"],
    slug: "benefits-importance-6-kalimas-islam"
  },
  {
    id: 4,
    title: "99 Names of Allah (Asma ul Husna) with Meanings and Benefits",
    excerpt: "Complete guide to the 99 beautiful names of Allah with Arabic text, English meanings, pronunciations, and spiritual benefits. Perfect for daily recitation and Islamic meditation.",
    content: "Complete article content about 99 names of Allah...",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    date: "2024-01-08",
    readTime: "15 min read",
    author: "Sheikh Abdullah",
    tags: ["99 Names of Allah", "Asma ul Husna", "Islamic Names", "Dhikr", "Islamic Meditation"],
    slug: "99-names-allah-asma-ul-husna"
  },
  {
    id: 5,
    title: "How to Perform Wudu (Ablution) Step by Step - Complete Islamic Guide",
    excerpt: "Learn the proper way to perform Wudu (Islamic ablution) with detailed step-by-step instructions, duas to recite, and common mistakes to avoid. Essential knowledge for every Muslim.",
    content: "Complete article content about performing Wudu...",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=800&h=600&fit=crop",
    date: "2024-01-05",
    readTime: "7 min read",
    author: "Imam Hassan",
    tags: ["Wudu", "Islamic Ablution", "Islamic Purification", "Prayer Preparation", "Islamic Rituals"],
    slug: "how-to-perform-wudu-ablution-guide"
  },
  {
    id: 6,
    title: "Powerful Islamic Duas for Protection from Evil Eye and Black Magic",
    excerpt: "Essential protective duas and verses from Quran to shield yourself from evil eye, black magic, and negative energies. Includes Arabic text, translations, and recitation guidelines.",
    content: "Complete article content about protective duas...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    date: "2024-01-03",
    readTime: "9 min read",
    author: "Qari Yusuf",
    tags: ["Protection Duas", "Evil Eye Protection", "Islamic Protection", "Quran Verses", "Spiritual Protection"],
    slug: "islamic-duas-protection-evil-eye-black-magic"
  },
  {
    id: 7,
    title: "Best Times to Recite Kalimas and Duas in Islam - Islamic Prayer Schedule",
    excerpt: "Discover the most blessed times to recite 6 Kalimas and Islamic duas according to Sunnah. Learn about morning adhkar, evening remembrance, and special times for maximum spiritual rewards.",
    content: "Complete article content about best times for recitation...",
    image: "https://images.unsplash.com/photo-1518333306567-83509ce4e85a?w=800&h=600&fit=crop",
    date: "2024-01-01",
    readTime: "6 min read",
    author: "Ustadh Omar",
    tags: ["Islamic Prayer Times", "Kalima Recitation", "Morning Adhkar", "Evening Dhikr", "Sunnah Times"],
    slug: "best-times-recite-kalimas-duas-islam"
  },
  {
    id: 8,
    title: "Learn Arabic Alphabet for Quran Reading - Beginner's Complete Guide",
    excerpt: "Master the Arabic alphabet with proper pronunciation for Quran recitation. Includes letter shapes, sounds, writing practice, and connection rules essential for Islamic learning.",
    content: "Complete article content about Arabic alphabet...",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
    date: "2023-12-28",
    readTime: "11 min read",
    author: "Ustadha Fatima",
    tags: ["Arabic Alphabet", "Quran Reading", "Arabic Learning", "Islamic Education", "Tajweed Basics"],
    slug: "learn-arabic-alphabet-quran-reading-guide"
  }
];
