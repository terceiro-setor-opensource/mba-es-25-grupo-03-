import React, {useState, useEffect, forwardRef, ReactElement} from 'react';
import {TextInput, InputProps} from '~/components/Input';
/* import { useDebounce } from '~/hooks'; */

interface TextInputProps extends InputProps {
  delaySearch?: number;
  placeholderText?: string;
}

export const TextInputSearch = forwardRef<ReactElement, TextInputProps>(
  (props, ref: any) => {
    const {
      value,
      onChangeText,
      delaySearch = 500,
      placeholderText,
      ...rest
    } = props;

    const [displayValue, setDisplayValue] = useState(value);
    /* const debouncedChange = useDebounce(onChangeText, delaySearch); */

    useEffect(() => {
      setDisplayValue(value);
    }, [value]);

    function handleChange(newValue: string) {
      /* debouncedChange(newValue); */
      setDisplayValue(newValue);
    }

    return (
      <TextInput
        ref={ref}
        value={displayValue}
        onChangeText={handleChange}
        leftIcon="search"
        placeholder={placeholderText || 'Digite para pesquisar'}
        {...rest}
      />
    );
  },
);
