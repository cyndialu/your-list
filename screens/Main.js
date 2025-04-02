import { Platform, View, StyleSheet, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import NewListScreen from './NewListScreen';
import SavedListsScreen from './SavedListsScreen';
import navLogo from '../assets/images/nav_logo.png';

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: 'black',
  headerStyle: { backgroundColor: 'white' }
}


const NewListNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='New List'
        component={NewListScreen}
      />
    </Stack.Navigator>
  )
};

const SavedListsNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Your Saved Lists'
        component={SavedListsScreen}
      />
    </Stack.Navigator>
  )
};

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={navLogo} style={styles.drawerImage} />
      </View>
      <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
  )
};


const Main = () => {
  return (
    <View style={{
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    }}
    >
      <Drawer.Navigator
        initialRouteName='HomeNav'
        screenOptions={{
          drawerStyle: { backgroundColor: 'white' },
          headerShown: true
        }}
        drawerContent={CustomDrawerContent}
      >
        <Drawer.Screen
          name='HomeNav'
          component={HomeScreen}
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name='NewListNav'
          component={NewListNavigator}
          options={{
            title: 'Create a List',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name='SavedListsNav'
          component={SavedListsNavigator}
          options={{
            title: 'Saved Lists',
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </View>
  )
};


const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 24
  },
  drawerHeader: {
    height: 100,
    flex: 1,
    flexDirection: 'row'
  },
  drawerImage: {
    height: '75%',
    width: '75%'
  }
});

export default Main;
