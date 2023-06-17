export interface IShippingField {
    email: string,
    phone: string,
    address: IAdress,
    name: string,
    nickName: string,
    surname: string,
    sex: string,
    area: string,
    advantage: string,
    value: string | null,
    cart: {
        name: string | null,
    }[];
    checkbox: {
        name: number,
        checked?: number
    }
    radio: number
}


export interface IData {
    data: {
        checked: number
    } 
}

export interface IRadio {
    data: {
        checked: number
    } 
}

export interface IAdress {
    country: string,
}

export interface ISex {
    sexVariant: string,
}

export interface IOption {
    value: string,
    label: string,
}

export interface ITextArea {
    value: string | undefined
}