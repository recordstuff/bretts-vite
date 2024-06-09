export interface Login
{
    DisplayName: string,
    ExpirationSeconds: number,
    Roles: string[],
    Token: string
}