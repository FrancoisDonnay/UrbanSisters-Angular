/* tslint:disable */
import { User } from './user';
export interface UserPage {
  items?: Array<User>;
  pageSize?: number;
  pageIndex?: number;
  totalCount?: number;
}
