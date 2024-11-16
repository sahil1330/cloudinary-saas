export interface Video {
  id: string;
  title: string;
  description: string;
  publicId: string;
  originalSize: number;
  compressedSize: number;
  url: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}
