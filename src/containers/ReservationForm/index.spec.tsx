import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ReservationApi } from '@api';
import ReservationForm from './index';

jest.mock('@api', () => ({
  ReservationApi: {
    saveReservation: jest.fn(),
  },
}));

const ReservationApiMock = ReservationApi as jest.MockedFunction<any>;

describe('ReservationForm', () => {
  it('should submit the form when all fields are filled', () => {
    const payload = {
      billingAddress: 'test foo bar ',
      billingCountry: 'DE',
      checkInDate: '2022-07-15',
      checkOutDate: '2022-07-22',
      city: 'berlin',
      email: 'me@ibrahim.com',
      firstName: 'ibrahim',
      lastName: 'ozdogan',
      phoneNumber: '15700000000',
      postalCode: '27541',
      numberOfGuests: 5,
    };

    render(<ReservationForm />);
    fireEvent.change(screen.getByTestId('first-name'), { target: { value: payload.firstName } });
    fireEvent.change(screen.getByTestId('last-name'), { target: { value: payload.lastName } });
    fireEvent.change(screen.getByTestId('billing-address'), { target: { value: payload.billingAddress } });
    fireEvent.change(screen.getByTestId('billing-country'), { target: { value: payload.billingCountry } });
    fireEvent.change(screen.getByTestId('postal-code'), { target: { value: payload.postalCode } });
    fireEvent.change(screen.getByTestId('city'), { target: { value: payload.city } });
    fireEvent.change(screen.getByTestId('email'), { target: { value: payload.email } });
    fireEvent.change(screen.getByTestId('phone-number'), { target: { value: payload.phoneNumber } });
    fireEvent.change(screen.getByTestId('date-range-picker'), { target: { value: [payload.checkInDate, payload.checkOutDate] } });
    fireEvent.change(screen.getByTestId('number-of-guests'), { target: { value: payload.numberOfGuests } });

    fireEvent.click(screen.getByTestId('submit'));

    expect(ReservationApiMock).toBeCalledWith(payload);
  });

  it('should not submit the form when fields are not valid', () => {
    const payload = {
      billingAddress: '',
      billingCountry: '',
      checkInDate: '',
      checkOutDate: '',
      city: '',
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      postalCode: '',
      numberOfGuests: 0,
    };

    render(<ReservationForm />);

    fireEvent.click(screen.getByTestId('submit'));

    expect(ReservationApiMock).not.toBeCalled();
  });
});
