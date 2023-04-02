function nev_typ(message: string, code: number): never{
    throw {error_mess: message, error_code: code};
}

nev_typ("this an error", 550);