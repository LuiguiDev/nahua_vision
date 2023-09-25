type UUIDtype = `${string}-${string}-${string}-${string}-${string}`

export interface astro {
  id: UUIDtype
  nameNa: string
  nameEs: string
  description: string
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
}

export type astros = astro[]

