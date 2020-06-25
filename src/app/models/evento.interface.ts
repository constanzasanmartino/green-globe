export interface IEvento {
    id?: string,
    nombre: string,
    descripcion?: string,
    descripcionCorta?: string,
    fechaInicio: string,
    fechaFin: string,
    ubicacion: string,
    foto?: string,
    tipo: number,
    linkContacto?: string,
    nombreContacto?: string,
    mailContacto?: string,
    creadoPorRobot?: boolean,
    celularContacto?: string[]
} 

export interface IComentarioEvento {
    id?: string,
    nombreUsuario: string,
    comentario: string,
    fecha: string
}