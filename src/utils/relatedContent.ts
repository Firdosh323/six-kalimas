
import { kalimas } from '@/data/kalimas';

export interface RelatedKalima {
  id: number;
  name: string;
  title: string;
  shortTitle: string;
  reason: string;
  cardColor: string;
}

export interface TopicCluster {
  id: string;
  title: string;
  description: string;
  kalimas: number[];
  keywords: string[];
}

export const topicClusters: TopicCluster[] = [
  {
    id: 'faith-declaration',
    title: 'Declaration of Faith',
    description: 'Essential Kalimas for declaring and strengthening Islamic faith',
    kalimas: [1, 2],
    keywords: ['shahada', 'declaration of faith', 'testimony', 'basic islam']
  },
  {
    id: 'praise-glorification',
    title: 'Praise and Glorification',
    description: 'Kalimas focused on praising and glorifying Allah',
    kalimas: [3, 4],
    keywords: ['praise allah', 'glorification', 'tawheed', 'unity of allah']
  },
  {
    id: 'repentance-protection',
    title: 'Repentance and Protection',
    description: 'Kalimas for seeking forgiveness and protection from sins',
    kalimas: [5, 6],
    keywords: ['istighfar', 'forgiveness', 'repentance', 'protection from sins']
  }
];

export const getRelatedKalimas = (currentKalimaId: number): RelatedKalima[] => {
  const currentKalima = kalimas.find(k => k.id === currentKalimaId);
  if (!currentKalima) return [];

  const related: RelatedKalima[] = [];

  // Find Kalimas in the same topic cluster
  const currentCluster = topicClusters.find(cluster => 
    cluster.kalimas.includes(currentKalimaId)
  );

  if (currentCluster) {
    currentCluster.kalimas
      .filter(id => id !== currentKalimaId)
      .forEach(id => {
        const kalima = kalimas.find(k => k.id === id);
        if (kalima) {
          related.push({
            id: kalima.id,
            name: kalima.name,
            title: kalima.title,
            shortTitle: kalima.shortTitle,
            reason: `Part of ${currentCluster.title} collection`,
            cardColor: kalima.cardColor
          });
        }
      });
  }

  // Add sequential Kalimas (previous and next)
  if (currentKalimaId > 1) {
    const prevKalima = kalimas.find(k => k.id === currentKalimaId - 1);
    if (prevKalima && !related.find(r => r.id === prevKalima.id)) {
      related.push({
        id: prevKalima.id,
        name: prevKalima.name,
        title: prevKalima.title,
        shortTitle: prevKalima.shortTitle,
        reason: 'Previous Kalima in sequence',
        cardColor: prevKalima.cardColor
      });
    }
  }

  if (currentKalimaId < 6) {
    const nextKalima = kalimas.find(k => k.id === currentKalimaId + 1);
    if (nextKalima && !related.find(r => r.id === nextKalima.id)) {
      related.push({
        id: nextKalima.id,
        name: nextKalima.name,
        title: nextKalima.title,
        shortTitle: nextKalima.shortTitle,
        reason: 'Next Kalima in sequence',
        cardColor: nextKalima.cardColor
      });
    }
  }

  // Add complementary Kalimas based on content similarity
  const complementaryRelations: Record<number, number[]> = {
    1: [4, 6], // Tayyibah relates to Tawheed and Radde Kufr
    2: [3, 5], // Shahadat relates to Tamjeed and Istighfar
    3: [2, 4], // Tamjeed relates to Shahadat and Tawheed
    4: [1, 3], // Tawheed relates to Tayyibah and Tamjeed
    5: [6, 2], // Istighfar relates to Radde Kufr and Shahadat
    6: [5, 1]  // Radde Kufr relates to Istighfar and Tayyibah
  };

  const complementary = complementaryRelations[currentKalimaId] || [];
  complementary.forEach(id => {
    const kalima = kalimas.find(k => k.id === id);
    if (kalima && !related.find(r => r.id === kalima.id)) {
      related.push({
        id: kalima.id,
        name: kalima.name,
        title: kalima.title,
        shortTitle: kalima.shortTitle,
        reason: 'Complementary Islamic teaching',
        cardColor: kalima.cardColor
      });
    }
  });

  return related.slice(0, 4); // Limit to 4 related Kalimas
};

export const getTopicClusterForKalima = (kalimaId: number): TopicCluster | null => {
  return topicClusters.find(cluster => cluster.kalimas.includes(kalimaId)) || null;
};

export const generateInternalLinks = (content: string, currentKalimaId?: number): string => {
  let linkedContent = content;

  // Link to other Kalimas when mentioned
  kalimas.forEach(kalima => {
    if (currentKalimaId === kalima.id) return; // Don't link to current page

    const patterns = [
      new RegExp(`\\b${kalima.name}\\b`, 'gi'),
      new RegExp(`\\b${kalima.title}\\b`, 'gi'),
      new RegExp(`\\b${kalima.shortTitle}\\b`, 'gi')
    ];

    patterns.forEach(pattern => {
      linkedContent = linkedContent.replace(pattern, (match) => 
        `<a href="/kalima/${kalima.id}" class="text-emerald-600 hover:text-emerald-800 underline font-medium">${match}</a>`
      );
    });
  });

  // Link common Islamic terms to home page
  const homePageTerms = [
    '6 Kalimas', 'Six Kalimas', '6 kalimas of Islam', 'Islamic Kalimas'
  ];

  homePageTerms.forEach(term => {
    const pattern = new RegExp(`\\b${term}\\b`, 'gi');
    linkedContent = linkedContent.replace(pattern, (match) => 
      `<a href="/" class="text-emerald-600 hover:text-emerald-800 underline font-medium">${match}</a>`
    );
  });

  return linkedContent;
};
