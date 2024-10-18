import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { CameraType, useCameraPermissions, CameraView} from "expo-camera"
import Header from "./Header"

const CameraScreen = () => {
    const [type, setType] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    const flipCamera = () => {
        setType(type === 'back' ? 'front' : 'back')
    }

    if (!permission?.granted) {
        return (
            <SafeAreaView className="flex-1 items-center justify-center gap-2">
                <Text>We need your permission to show the camera</Text>
                <TouchableOpacity 
                    onPress={requestPermission}
                    className="p-3 border-cyan-800 border-2 rounded-full"
                >
                    <Text>Allow Camera</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }


    return (
        <SafeAreaView className="flex">
            <Header title="Camera" subTitle="Take a picture" isTransparent={true} />
            <CameraView className="flex">
                <View className="flex flex-row my-96">
                    <TouchableOpacity
                        onPress={flipCamera}
                        className="p-3 border-cyan-800 border-2 rounded-full"
                    >
                        <Text className="text-white">Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
            <Text>Something</Text>
        </SafeAreaView>
    )
}

export default CameraScreen