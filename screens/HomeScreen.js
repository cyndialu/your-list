import { Image, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import logo from '../assets/images/logo.png';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />
      <Button
        title='New List'
        icon={{
          name: 'add',
          size: 15,
          color: 'white',
        }}
        buttonStyle={{
          borderRadius: 15,
          backgroundColor: 'black',
          paddingHorizontal: 20,
          paddingVertical: 10
        }}
        titleStyle={{
          color: 'white',
          fontSize: 16,
        }}
        containerStyle={{
          margin: 20
        }}
        onPress={() => navigation.navigate('New List')}
      />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c343d',
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: 200,
    height: 200,
    marginVertical: 100
  },
});

export default HomeScreen;
