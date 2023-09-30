interface ICreateSchedulaDTO {
    name: string;
    nameCompany: string;
    user_id: string;
    company_id: string;
    date: Date;
    status: boolean;
    city: string;
    neighborhood: string;
    location_init: string;  
    location_end: string;
}

export { ICreateSchedulaDTO }