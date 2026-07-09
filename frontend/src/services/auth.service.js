import { getUserByEmail } from "./user.service";
import { showError } from "../utils/alerts";
import bcrypt from "bcryptjs";



const SessionKeys = "SESSION_ACTUAL"

export function saveSession(user){
    const sessionUser = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        roles: user.roles ?? [],
    }

    localStorage.setItem(SessionKeys, JSON.stringify(sessionUser))
}


export function getSession() {
    const sessionUser = localStorage.getItem(SessionKeys);

    if (!sessionUser) {
        return null;
    }

    return JSON.parse(sessionUser);
}

export function clearSession(){
    localStorage.removeItem(SessionKeys)
}

export function isAdmin(session) {
    return session?.roles?.includes("ADMIN") ?? false;
}

export function getDisplayName(session) {
    if (!session) {
        return "Usuario";
    }

    return `${session.name} ${session.lastname}`.trim();
}

export function getPrimaryRole(session) {
    return isAdmin(session) ? "ADMIN" : "USER";
}

export async function loginUser({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (!normalizedEmail || !trimmedPassword) {
        showError("Debes ingresar correo y contraseña.");
        throw new Error("Debes ingresar correo y contraseña.");
    }

    const user = await getUserByEmail(normalizedEmail);

    if (!user) {
        showError("No existe un usuario con este correo.");
        throw new Error("No existe un usuario con este correo.");
    }

    const isValidPassword = await bcrypt.compare(
        trimmedPassword,
        user.password
    );

    if (!isValidPassword) {
        showError("Contraseña incorrecta.");
        throw new Error("Contraseña incorrecta.");
    }

    return user;
}