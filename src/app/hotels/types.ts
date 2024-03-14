import { Address } from "../common/types/address";

export type Hotel = {
    id: number;
    name: string;
    alias: string;
    address?: Address
}