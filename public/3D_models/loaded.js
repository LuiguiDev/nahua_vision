import { venus_model } from "./models";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'


const venusModel = useLoader(FBXLoader, venus_model)

export { venusModel }