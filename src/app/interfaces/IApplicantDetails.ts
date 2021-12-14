export interface IApplicantDetails {
    loanAmount: number;
    loanPurpose: loanPurpose;
    loanTerm: number;
    loanRepaymentDate: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    houseLocation?: string;
    bedrooms?: number;
    carMake?: string;
    carModel?: string;
}

export enum loanPurpose {
    car = 'car',
    mortgage = 'mortgage',
    none = 'none'
}
