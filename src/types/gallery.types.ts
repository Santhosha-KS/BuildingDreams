// Gallery types — maps to src/data/gallery.json

export interface GalleryImage {
  id: string;
  src: string; // URL or path to image (swap to API URL later)
  alt: string;
  caption?: string;
  projectName?: string;
}