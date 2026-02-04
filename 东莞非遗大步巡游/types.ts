
export interface SectionProps {
  id: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'performance' | 'ritual' | 'culture';
}
