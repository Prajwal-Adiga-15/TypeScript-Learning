function nev_typ(message, code) {
    throw { error_mess: message, error_code: code };
}
nev_typ("this an error", 550);
