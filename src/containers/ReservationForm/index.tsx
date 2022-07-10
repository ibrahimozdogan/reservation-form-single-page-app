import React, { useState } from 'react';
import {
  Alert,
  Button,
  TextInput,
  Grid,
  Cell,
  Picker,
  DateRangePicker,
  Title,
  Divider, Loading,
} from '@components';
import { translate } from '@utils';
import { countries } from '@config';
import { ReservationApi } from '@api';
import styled from 'styled-components';
import { ReservationPayload } from '@types';

const { useAlert } = Alert;

const StyledForm = styled.form`
  max-width: 1000px;
  padding: 10px;
  margin: 10px auto;
`;

const payload: ReservationPayload = {
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

const setToPayload = (key: keyof ReservationPayload, value: string|number) => {
  // @ts-ignore
  payload[key] = value;
};

function ReservationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const alert = useAlert();

  return (
    <StyledForm
      data-testid="reservation-form"
      onSubmit={async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const response = await ReservationApi.saveReservation(payload);
        alert.show(translate(response.data.message));

        setIsLoading(false);
      }}
    >
      <Title text={translate('RESERVATION_FORM_TITLE')} size="h1" />
      <Divider />
      <Grid
        columns={2}
        justifyContent="center"
        alignContent="center"
        columnGap="10px"
      >
        <Cell>
          <DateRangePicker
            data-testid="date-range-picker"
            onChange={(selectedDates) => {
              const dates = selectedDates
                ?.map((date) => date.format('YYYY-MM-DD')) || [];

              setToPayload('checkInDate', dates[0]);
              setToPayload('checkOutDate', dates[1]);
            }}
            label={translate('CHECK_IN_OUT_DATES')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            data-testid="number-of-guests"
            onChange={(numberOfGuests) => {
              setToPayload('numberOfGuests', Number(numberOfGuests));
            }}
            label={translate('NUMBER_OF_GUESTS')}
            type="number"
            min={1}
            max={20}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            data-testid="first-name"
            onChange={(firstName) => {
              setToPayload('firstName', firstName);
            }}
            label={translate('FIRST_NAME')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            data-testid="last-name"
            onChange={(lastName) => {
              setToPayload('lastName', lastName);
            }}
            label={translate('LAST_NAME')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            data-testid="billing-address"
            onChange={(billingAddress) => {
              setToPayload('billingAddress', billingAddress);
            }}
            label={translate('BILLING_ADDRESS')}
            required
          />
        </Cell>
        <Cell>
          <Picker
            data-testid="billing-country"
            onChange={(billingCountry) => {
              setToPayload('billingCountry', billingCountry);
            }}
            options={countries}
            label={translate('BILLING_COUNTRY')}
            placeholder={translate('SELECT_COUNTRY')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            data-testid="postal-code"
            onChange={(postalCode) => {
              setToPayload('postalCode', postalCode);
            }}
            label={translate('POSTAL_CODE')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            data-testid="city"
            onChange={(city) => {
              setToPayload('city', city);
            }}
            label={translate('CITY')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            data-testid="email"
            onChange={(email) => {
              setToPayload('email', email);
            }}
            label={translate('EMAIL')}
            type="email"
            validationMessage={translate('EMAIL_VALIDATION_MESSAGE')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            data-testid="phone-number"
            onChange={(phoneNumber) => {
              setToPayload('phoneNumber', phoneNumber);
            }}
            label={translate('PHONE_NUMBER')}
            type="tel"
            validationMessage={translate('PHONE_NUMBER_VALIDATION_MESSAGE')}
            required
          />
        </Cell>
        <Cell>
          {
            isLoading
              ? <Loading type="spinningBubbles" />
              : <Button data-testid="submit">{translate('BOOK_NOW')}</Button>
          }
        </Cell>
      </Grid>
    </StyledForm>
  );
}

export default ReservationForm;
