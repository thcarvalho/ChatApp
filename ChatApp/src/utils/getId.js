import AsyncStorage from "@react-native-community/async-storage";

const getId = async () => {
  const id = await AsyncStorage.getItem('@userId');
  return id;
};

export default getId;
