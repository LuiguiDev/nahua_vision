type UUIDtype = `${string}-${string}-${string}-${string}-${string}`

export interface astro {
  id: UUIDtype
  modelName: string
  nameNa: string
  nameEs: string
  description: string
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number,
  images: {
    thumbnail: {
      src: string
      alt: string
    }
  }
}

export type astros = astro[]

