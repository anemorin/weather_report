import React, { ComponentType, useMemo } from 'react';
import Select, {
  GroupBase,
  OptionProps,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select';
import styled from 'styled-components';
import CustomOptionWithCountryCode from './CustonOption';

const SelectContainer = styled.div`
  width: 70%;
  height: 10%;
`;

export interface OptionType {
  value: string;
  label: string;
  [x: string]: string;
}

export type ValueType = OptionType;

interface Props {
  isClearable: boolean;
  options: OptionType[];
  isSearchable: boolean;
  placeholder?: string;
  label?: string | React.ReactNode;
  onInputChange?: (newValue: string) => void;
  onChangeValue?: (newValue: OptionType) => void;
  isOptionWithCountryCode?: boolean;
}

const CustomSelect: React.FC<Props> = ({
  options,
  isClearable,
  placeholder,
  label,
  onInputChange,
  onChangeValue,
  isOptionWithCountryCode,
}) => {
  const InputStyles: StylesConfig<OptionType | OptionType[], boolean> = {
    option: styles => ({
      ...styles,
      color: 'gray',
      padding: '18px 10px',
      borderBottom: '1px solid black',
    }),
  };

  const customComponents = useMemo(() => {
    let result: SelectComponentsConfig<
      OptionType | OptionType[],
      boolean,
      GroupBase<OptionType | OptionType[]>
    > = {};
    if (isOptionWithCountryCode) {
      result = {
        ...result,
        Option: CustomOptionWithCountryCode as ComponentType<
          OptionProps<
            OptionType | OptionType[],
            boolean,
            GroupBase<OptionType | OptionType[]>
          >
        >,
      };
    }
    return result;
  }, [isOptionWithCountryCode]);

  return (
    <SelectContainer>
      <p>{label}</p>
      <Select
        options={options}
        placeholder={placeholder}
        isClearable={isClearable}
        onInputChange={onInputChange}
        onChange={value => {
          if (onChangeValue) {
            onChangeValue(value as OptionType);
          }
        }}
        styles={InputStyles}
        components={customComponents}
      />
    </SelectContainer>
  );
};

export default CustomSelect;
