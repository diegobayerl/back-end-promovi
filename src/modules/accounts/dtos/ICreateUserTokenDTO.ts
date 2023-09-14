interface ICreateUserTokenDTO {
    refresh_token: string;
    user_id: string;
    expire_date: Date;
}

export { ICreateUserTokenDTO }