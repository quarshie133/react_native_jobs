import { useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from "expo-router";

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';
import { SearchBar } from 'react-native-screens';

const Welcome = () => {
   const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Ephraim</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>

        </View>
      </View>
    </View>
  )
}

export default Welcome