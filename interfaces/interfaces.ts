export interface APIResponse<T>{
    data: T,
    errors: Array<string>
}

export interface UserData{
    id: string, 
    email: string,
    name: string
}

export interface LoginData{
    id: string
}