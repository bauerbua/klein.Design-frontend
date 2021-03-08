import { Tag } from './tag.interface';
import { Image } from './image.interface';
import { Link } from './link.interface';

export interface Exhibitor extends Tag, Image, Link {
  id: number;
  companyName: string;
  coverImg: Image;
  tags: Tag[];
  images?: Image[];
  links?: Link[];
  owner?: string;
  description?: string;
}
