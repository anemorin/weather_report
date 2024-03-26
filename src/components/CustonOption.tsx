import styled from 'styled-components';
import { OptionType } from './Select';

interface OptionProps {
  data: OptionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  innerProps: any;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 18px 16px;
  align-items: center;
  :hover {
    background-color: lightgray;
  }
  border-bottom: 1px solid gray;
  color: gray;
  cursor: pointer;
`;

const Label = styled.div`
  margin-left: 8px;
`;

const CustomOptionWithCountryCode: React.FC<OptionProps> = ({
  data,
  innerProps,
}) => (
  <Container
    key={data.value}
    {...innerProps}
  >
    <span>{data.countryCode}</span>
    <Label>{data.label}</Label>
  </Container>
);

export default CustomOptionWithCountryCode;
