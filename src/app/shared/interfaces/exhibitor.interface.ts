import { Tag } from './tag.interface';

export interface Exhibitor extends Tag {
  id: number;
  title: string;
  coverImg: {
    url: string;
  };
  tags: Tag[];
  images?: [];
  owner?: string;
  description?: string;
}
