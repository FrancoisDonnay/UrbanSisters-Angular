/* tslint:disable */
import { Availability } from './availability';
import { PortfolioPicture } from './portfolio-picture';
import { Tarif } from './tarif';
export interface DetailedRelookeuse {
  availability?: Array<Availability>;
  portfolioPicture?: Array<PortfolioPicture>;
  tarif?: Array<Tarif>;
  id?: number;
  firstName?: string;
  lastName?: string;
  picture?: string;
  description?: string;
  isPro?: boolean;
  avgMark?: number;
  rowVersion?: string;
}
