/*
    Separate from DTO (object thats sent) in case we sending other information together with these data
    but those will mess up DB schema for customer
    - something we might need on the server, but we will not save in the DB 
    example was 2 pw fields - validation or reset and we need only 1
*/

export type CreateCustomerParams = {
    customerID: number;
    firstName: string;
    lastName: string;
    businessName: string;
    phone: string;
    emailName: string;
    ico: string;
    dic: string;
    street: string;
    town: string;
    psc: string;
}