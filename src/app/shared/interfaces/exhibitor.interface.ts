import { Tag } from './tag.interface';
import { Image } from './image.interface';
import { Link } from './link.interface';

export interface Exhibitor extends Tag, Image, Link {
  id: number;
  titel: string;
  titelbild: Image;
  tags: Tag[];
  fotos?: Image[];
  links?: Link[];
  vorname?: string;
  nachname?: string;
  beschreibung?: string;
}
