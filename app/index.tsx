import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight, Camera as Cam, File, Plus } from "lucide-react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import React from "react";
// import Pdf from 'react-native-pdf';

const Home = () => {
    const [isKeyboardActive, setIsKeyboardActive] = useState(false)
    const [fileName, setFileName] = useState("")
    const [fileContents, setfileContents] = useState("")
    let pdfResource = {
        uri: '',
        cache: true
    }
    const router = useRouter()
    
    const openCamera = () => {
        router.replace("/camera/camera")
    }

    const openFilePicker = async () => {
        try {
            const doc = await DocumentPicker.getDocumentAsync();
            setFileName(doc.assets![0].name)
            const file = doc.assets![0].uri
            pdfResource.uri = file
            console.log(file)

            const fileContent = await FileSystem.readAsStringAsync(file, { encoding: FileSystem.EncodingType.UTF8 });
            //console.log(fileContents)
            setfileContents(fileContent)

            // doc.canceled ? console.log("User cancelled") : console.log(doc)

        } catch (error) {
            console.log(error)
        }

        

    }

    return (
        <SafeAreaView className="flex h-full pb-2 items-center justify-between px-3">
            
            
            <View className="flex flex-col w-full">
                <Header 
                    title="Homework" 
                    isTransparent={true}
                    returnButton={false} 
                />
                <View className="px-3 flex">
                    {fileName && (
                        <TouchableOpacity
                            onPress={() => setFileName("")}
                            className="border-cyan-800 border p-3 rounded-full flex items-center justify-center"
                        >
                            <Text>{fileName}</Text>
                        </TouchableOpacity>
                    )}
                    <View className="flex shadow-2xl bg-slate-50 border-[1px] h-[80%] rounded-md mt-3">
                        <Text className="text-left font-bold text-lg text-slate-800 p-4">Step by step</Text>
                        <ScrollView>
                            {/* {fileName && (
                                // <Pdf
                                //     trustAllCerts={false}
                                //     source={pdfResource}
                                //     onLoadComplete={(numberOfPages, filePath) => {
                                //         console.log(`number of pages: ${numberOfPages}`);
                                //     }}
                                // />
                            )} */}
                        </ScrollView>
                    </View>
                </View>
            </View>
            
            <View className="flex items-center flex-row justify-between gap-2 px-2">
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
                                <TouchableOpacity 
                                    className="border-cyan-800 p-3 border rounded-full"
                                    onPress={openFilePicker}
                                >
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