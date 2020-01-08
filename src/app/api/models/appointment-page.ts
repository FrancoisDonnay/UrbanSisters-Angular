/* tslint:disable */
import { Appointment } from './appointment';
export interface AppointmentPage {
  items?: Array<Appointment>;
  pageSize?: number;
  pageIndex?: number;
  totalCount?: number;
}
