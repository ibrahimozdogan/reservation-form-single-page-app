import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryLight: string
      secondary: string
      danger: string
      white: string
      gray: string
      lightGray: string
    }
    fontSizes: {
      title: Record<string, string>
      text: Record<string, string>
    }
  }
}

export interface ReservationPayload {
  firstName: string
  lastName: string
  billingAddress: string
  billingCountry: string
  postalCode: string
  city: string
  email: string
  phoneNumber: string
  checkInDate: string
  checkOutDate: string
  numberOfGuests: number
}

export interface ReservationResponse {
  status: boolean
  message: string
}
