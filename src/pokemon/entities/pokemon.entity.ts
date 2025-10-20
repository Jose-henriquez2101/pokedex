// Importa los decoradores y funciones para definir esquemas de Mongoose con NestJS
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// Importa el tipo Document de Mongoose que representa un documento de MongoDB

@Schema()
// Decorador que marca la clase como esquema de Mongoose para NestJS
export class Pokemon extends Document {
    // Clase que extiende Document para agregarla como esquema en la base de datos
    // _id: string // Mongo me lo da automáticamente, no es necesario definirlo

    @Prop({
        unique: true, // Hace que el campo "name" sea único en la colección MongoDB
        index: true, // Construye un índice para mejorar consultas por este campo
    })
    name: string; // Propiedad para el nombre del Pokémon

    @Prop({
        unique: true, // Igual que en name, el número también debe ser único
        index: true, // Índice para optimizar búsquedas por número
    })
    no: number; // Propiedad para el número del Pokémon (p. ej., 1 para Bulbasaur)
}

// Crea el esquema de Mongoose a partir de la clase anotada Pokemon
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);