import {venus_image} from './images.js'
import { TextureLoader } from 'three'

const textureLoader = new TextureLoader()

const venusTexture = textureLoader.load(venus_image)

export { venusTexture }