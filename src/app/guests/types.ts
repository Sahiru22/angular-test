import { Address } from "../common/types/address";

export type Guest = {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    nationality: string;
    address?: Address;
}