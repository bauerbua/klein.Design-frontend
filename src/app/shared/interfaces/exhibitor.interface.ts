import { Tag } from './tag.interface';
import { Image } from './image.interface';
import { Link } from './link.interface';

export interface Exhibitor extends Tag, Image, Link {
  id: number;
  firmenname: string;
  titelbild: Image;
  email: string;
  tags: Tag[];
  fotos?: Image[];
  links?: Link;
  vorname?: string;
  nachname?: string;
  beschreibung?: string;
}
