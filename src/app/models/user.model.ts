import { Address } from "./address.model";

export class User {

  constructor(public firstName: string, public lastName: string,
    public email: string, public adress: Address,
    public description: string, public dateBirth: string,
    public aliases: string[]) { }
}