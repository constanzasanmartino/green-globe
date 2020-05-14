export interface IEvento {
    id?: string,
    nombre: string,
    descripcion: string,
    descripcionCorta: string,
    fechaInicio: string,
    fechaFin: string,
    ubicacion: string,
    foto: string,
    tipo: number,
    linkContacto?: string,
    celularContacto?: string[]
} 