import React from 'react';
import {
  Button,
  TextInput,
  Grid,
  Cell,
  Picker,
  DateRangePicker,
  Title,
  Divider,
} from '@components';
import { translate } from '@utils';
import { countries } from '@config';
import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 1000px;
  padding: 10px;
  margin: 10px auto;
`;

const payload: Record<string, any> = {
  selectedDates: null,
};

const setToPayload = (key: string, value: string|string[]) => {
  payload[key] = value;
  console.log(payload);
};

function ReservationForm() {
  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
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
            onChange={(selectedDates) => {
              setToPayload(
                'selectedDates',
                selectedDates?.map((date) => date.format('YYYY-MM-DD')) || [],
              );
            }}
            label={translate('CHECK_IN_OUT_DATES')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(numberOfGuests) => {
              setToPayload('numberOfGuests', numberOfGuests);
            }}
            label={translate('NUMBER_OF_GUESTS')}
            type="number"
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(firstName) => {
              setToPayload('firstName', firstName);
            }}
            label={translate('FIRST_NAME')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(lastName) => {
              setToPayload('lastName', lastName);
            }}
            label={translate('LAST_NAME')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(billingAddress) => {
              setToPayload('billingAddress', billingAddress);
            }}
            label={translate('BILLING_ADDRESS')}
            required
          />
        </Cell>
        <Cell>
          <Picker
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
            onChange={(postalCode) => {
              setToPayload('postalCode', postalCode);
            }}
            label={translate('POSTAL_CODE')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
            onChange={(city) => {
              setToPayload('city', city);
            }}
            label={translate('CITY')}
            required
          />
        </Cell>
        <Cell>
          <TextInput
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
          <Button onClick={() => {}}>{translate('BOOK_NOW')}</Button>
        </Cell>
      </Grid>
    </StyledForm>
  );
}

export default ReservationForm;
