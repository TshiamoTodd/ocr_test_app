import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { CameraType, useCameraPermissions, CameraView} from "expo-camera"
import Header from "./Header"
import React from "react"
import { Camera } from "lucide-react-native"

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
            <Header title="Camera" returnButton={true} subTitle="Take a picture" isTransparent={true} />
            <CameraView className="flex items-center h-[80%]">
                <View className="flex border-[1px] border-cyan-700 h-full w-full items-center justify-center">
                    <View className="border-2 border-white rounded-lg h-[75%] w-[75%] animate-pulse">
                    
                    </View>
                </View>
            </CameraView>
            <View className="flex mt-3 p-3 flex-row h-10 w-full items-center justify-between">
                <Text>Options</Text>
                <View>
                    <TouchableOpacity 
                        className="border-cyan-800 border p-3 rounded-full flex items-center justify-center"
                        onPress={() => {}}
                    >
                        <Camera color={'teal'} size={25} />
                    </TouchableOpacity>
                </View>
                <Text>Options</Text>
            </View>
        </SafeAreaView>
    )
}

export default CameraScreen