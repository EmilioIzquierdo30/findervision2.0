import { Platform } from "react-native";
import CameraScreenWeb from "./CamaraScreenWeb"; 
import CameraScreenAndroid from "./CamaraScreenAndroid"; 

const CameraScreen = Platform.OS === "web" ? CameraScreenWeb : CameraScreenAndroid;

export default CameraScreen;
