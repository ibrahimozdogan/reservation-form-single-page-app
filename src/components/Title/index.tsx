import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TitleSizes = 'h1' | 'h2' | 'h3';

interface TitleProps {
  text: string
  size: TitleSizes
}

const StyledH1 = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title.large};
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0em;
  text-align: left;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.colors.gray}
`;

const StyledH2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.title.medium};
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0em;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.colors.gray}
`;

const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.title.small};
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.colors.gray}
`;

const TITLES: Record<TitleSizes, ReactNode> = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
};

function Title({ text, size }: TitleProps) {
  const Component = TITLES[size];
  return (
    // @ts-ignore
    <Component>
      {text}
    </Component>
  );
}

export default Title;
