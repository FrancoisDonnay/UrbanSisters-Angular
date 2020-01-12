/* tslint:disable */
import { JwtToken } from './jwt-token';
export interface NewRelookeuse {
  id?: number;
  firstName?: string;
  lastName?: string;
  description?: string;
  isPro?: boolean;
  rowVersion?: string;
  newToken?: JwtToken;
}
