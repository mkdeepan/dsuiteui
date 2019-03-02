import { User } from "./user";

export interface Customer {
    address: string;
    alias: string;
    city: string;
    contactNo: number;
    contactNo1: number;
    createdAt: string;
    createdBy: string;
    customerName: string;
    customerType: string;
    firstName: string;
    id: number;
    isActive: number;
    isDelete: number;
    lastName: string;
    pincode: number;
    route: string;
    updatedAt: string;
    updatedBy: string;
}

export interface Customers {
    Customers: Customer[];
}
