import React, { useState } from 'react';
import CustomDatePicker, { DateObject } from 'react-multi-date-picker';
import 'react-multi-date-picker/styles/colors/green.css';
import styled, { css, useTheme } from 'styled-components';

interface DatePickerProps {
  onChange: (selectedDates: DateObject[] | null)=> void
  required?: boolean
  label: string
}

const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => props.theme.fontSizes.text.large};
  letter-spacing: 1px;

  ${(props: { required: boolean, theme: Record<string, any> }) => props.required && css`
    &:after {
      content: '*';
      color: ${props.theme.colors.danger}
    }
  `}
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function DateRangePicker({ onChange, label, required = false }: DatePickerProps) {
  const [isValid, setIsValid] = useState(false);
  const theme = useTheme();

  return (
    <StyledContainer>
      <StyledSpan required={required}>{label}</StyledSpan>
      <CustomDatePicker
        className="green"
        onChange={(dates) => {
          if ((dates as DateObject[]).length > 1) {
            setIsValid(true);
          }

          onChange(dates as DateObject[]);
        }}
        placeholder={label}
        minDate={new DateObject().toDate()}
        required={required}
        range
        style={{
          margin: '10px 0 0 0',
          padding: '18px 12px',
          width: '100%',
          border: `2px solid ${theme.colors.lightGray}`,
          outline: 'none',
          boxSizing: 'border-box',
          fontSize: theme.fontSizes.text.large,
          background: 'transparent',
          height: '70px',
          borderColor: isValid ? theme.colors.secondary : theme.colors.lightGray,
        }}
      />
    </StyledContainer>
  );
}

export default DateRangePicker;
