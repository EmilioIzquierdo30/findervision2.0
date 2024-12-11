import CameraScreenWeb from "./CameraScreenWeb.jsx";
import CameraScreenAndroid from "./CameraScreenAndroid.jsx";
import { Platform } from "react-native";

const CameraScreen = Platform.OS === "web" ? CameraScreenWeb : CameraScreenAndroid;

export default CameraScreen;  