// type for the props of the SingleContactComponent component and SearchComponent component
export type Contact = {
    id: number|string;
    name: string;
    mobile: string;
    email: string;
    address: string;
    index?:number
}