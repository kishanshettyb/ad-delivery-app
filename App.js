import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
const App = () => {
	const StyledView = styled(View);
	const StyledText = styled(Text);
	return (
		<SafeAreaView className="flex-1 bg-white">
			<StatusBar style="dark" />
			<View className="p-3">
				<StyledView className="container flex items-center justify-between flex-row  bg-white">
					<View className="border-2 border-gray-300 p-2  rounded-2xl">
						<Feather name="search" size={24} color="black" />
					</View>
					<View>
						<Text className="text-center font-light text-xs">Current Location</Text>
						<View className="flex flex-row items-center">
							<Feather name="map-pin" size={14} color="green" />
							<Text className="text-center font-bold ml-1 ">Banglore, India</Text>
						</View>
					</View>
					<View className="border-2 p-2  border-gray-300 rounded-2xl">
						<Ionicons name="notifications" size={24} color="black" />
					</View>
				</StyledView>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} centerContent className="mt-5">
					<View className="bg-green-600 w-100 flex-1 justify-between items-center flex-row  px-5 py-2 mr-2 rounded-2xl">
						<View>
							<Text className="text-white text-lg w-40 font-bold mb-3">Claim your daily free delivery now!</Text>
							<View className="bg-black p-3 w-40 rounded-2xl  ">
								<Text className="text-white text-center font-semi-bold">Order Now</Text>
							</View>
						</View>
						<View>
							<Image className="w-[150] h-[150] mx-5 " source={require("./assets/images/delivery.svg")} />
						</View>
					</View>
					<View className="bg-green-600 w-100 flex-1 justify-between items-center flex-row  px-5 py-2 mr-2 rounded-2xl">
						<View>
							<Text className="text-white text-lg w-40 font-bold mb-3">Claim your daily free delivery now!</Text>
							<View className="bg-black p-3 w-40 rounded-2xl  ">
								<Text className="text-white text-center font-semi-bold">Order Now</Text>
							</View>
						</View>
						<View>
							<Image className="w-[150] h-[150] mx-5 -skew-x-1" source={require("./assets/images/grocery.svg")} />
						</View>
					</View>
					<View className=" w-100 bg-green-600 flex-1 justify-between items-center flex-row  px-5 py-2 mr-2 rounded-2xl">
						<View>
							<Text className="text-white text-lg w-40 font-bold mb-3">Claim your daily free delivery now!</Text>
							<View className="bg-black p-3 w-40 rounded-2xl  ">
								<Text className="text-white text-center font-semi-bold">Order Now</Text>
							</View>
						</View>
						<View>
							<Image className="w-[150] h-[150] mx-5 " source={require("./assets/images/bag.svg")} />
						</View>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default App;
