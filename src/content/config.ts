import { defineCollection, z } from 'astro:content';

// Esquema de las habitaciones
const habitaciones = defineCollection({
  schema: z.object({
    roomType: z.string(),
    srcRoomImage: z.string(), // URL de la imagen
    summary: z.string(),
    order: z.number().optional() // Orden de la habitacion
  })
});

export const collections = { habitaciones };
