import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight, Camera as Cam, File, Plus } from "lucide-react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
 

const Home = () => {
    const [isKeyboardActive, setIsKeyboardActive] = useState(false)
    const router = useRouter()
    
    const openCamera = () => {
        router.replace("/camera/camera")
    }

    return (
        <SafeAreaView className="flex-1 items-center p-3 justify-between">
            <Header title="Home" subTitle="chat" isTransparent={true} />
            <View className="flex items-center flex-row justify-between gap-2 px-4">
                <View>
                    {isKeyboardActive ? (
                        <TouchableOpacity
                            onPress={() => setIsKeyboardActive(false)}
                            className="border-cyan-800 border p-3 rounded-full flex items-center justify-center"
                        >
                            <Plus color={'teal'} size={25} />
                        </TouchableOpacity>
                    ): (
                            <View className="flex flex-row gap-1">
                                <TouchableOpacity 
                                    className="border-cyan-800 border p-3 rounded-full flex items-center justify-center"
                                    onPress={openCamera}
                                >
                                    <Cam color={'teal'} size={25} />
                                </TouchableOpacity>
                                <TouchableOpacity className="border-cyan-800 p-3 border rounded-full">
                                    <File color={'teal'} size={25} />
                                </TouchableOpacity>
                            </View>
                    )}
                </View>

                <TextInput 
                    className={isKeyboardActive 
                        ? "w-[75%] border-cyan-800 border p-3 rounded-full"
                        : "border-cyan-800 w-[60%] border p-3 rounded-full"
                    }
                    onFocus={() => setIsKeyboardActive(true)} 
                    onBlur={() => setIsKeyboardActive(false)}
                    onTouchStart={() => setIsKeyboardActive(true)}
                    onChange={() => {
                        setIsKeyboardActive(true)
                    }}
                    placeholder="Search" 
                />
                <TouchableOpacity
                    onPress={() => console.log("Button Pressed")}
                    className="border-cyan-800 border p-3 rounded-full flex items-center justify-center"
                >
                    <ArrowRight color={'teal'} size={25} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home;