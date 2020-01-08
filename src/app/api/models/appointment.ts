/* tslint:disable */
export interface Appointment {
  id?: number;
  relookeuseId?: number;
  relookeuseFirstName?: string;
  relookeuseLastName?: string;
  date?: string;
  accepted?: boolean;
  makeup?: boolean;
  cancelRaison?: string;
  mark?: number;
  finished?: boolean;
  rowVersion?: string;
}
