import React, { forwardRef, DetailedHTMLProps, ForwardedRef, HTMLAttributes } from 'react'

export interface IInputPhoneProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string,
    name?: string,
    type?: string,
    error?: string
}

const PATTERN = /\D/g
const getInputNumbersValues = (value: string) => {
    return value.replace(PATTERN, "")
}

const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    let inputNumbersValues = getInputNumbersValues(input.value);
    let formated = "";
    if (!inputNumbersValues) return input.value = ''

    const firstSymbols = '+7';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formated = firstSymbols + " ";
    if (inputNumbersValues.length > 1) formated += "(" + inputNumbersValues.substring(1, 4);
    if (inputNumbersValues.length >= 5) formated += ") " + inputNumbersValues.substring(4, 7);
    if (inputNumbersValues.length >= 8) formated += "-" + inputNumbersValues.substring(7, 9);
    if (inputNumbersValues.length >= 10) formated += "-" + inputNumbersValues.substring(9, 11);

    input.value = formated
}

export const InputPhone = forwardRef(({ className, name, type, error, ...rest }: IInputPhoneProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <>
            <input
                className=''
                name={name}
                type={type}
                ref={ref}
                {...rest}
                maxLength={18}
                onInput={handlePhoneInput}
            />
        </>
    )
})

InputPhone.displayName = "FormInputPhone"
