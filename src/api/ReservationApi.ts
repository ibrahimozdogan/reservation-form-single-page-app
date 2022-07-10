import axios from 'axios';
import { endpoints } from '@config';
import { ReservationPayload, ReservationResponse } from '@types';

const saveReservation = (payload: ReservationPayload) => axios.post<ReservationResponse>(
  endpoints.SAVE_RESERVATION,
  payload,
);

export {
  saveReservation,
};
