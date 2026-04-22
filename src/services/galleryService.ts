import galleryData from '@/data/gallery.json';
import type { GalleryImage } from '@/types';

export function getGalleryImages(): GalleryImage[] {
  return galleryData as GalleryImage[];
}