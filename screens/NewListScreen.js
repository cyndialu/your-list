import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Item from '../components/Item';

const NewListScreen = () => {
  const [item, setItem] = useState();
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const saveList = async (newList) => {
    try {
      const list = JSON.stringify(newList);
      await AsyncStorage.setItem('yourList', list);
    } catch (e) {
      console.error('Error saving list', e);
    }
  };

  const getList = async () => {
    try {
      const list = await AsyncStorage.getItem('yourList');
      setList(JSON.parse(list) || []);
    } catch (e) {
      console.error('Error getting list', e);
    }
  };

  const addItem = () => {
    if (item.trim() !== '') {
      const newList = [...list, item];
      setList(newList);
      setItem('');
    }
  };

  const deleteItem = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <View style={styles.container}>

      {/* List */}
      <View style={styles.listWrapper}>
        <View style={styles.listHeader}>
          <Text style={styles.title}>Your List</Text>
          <View style={styles.saveList}>
            <Icon
              name='bookmark'
              type='font-awesome'
              size={20}
              iconStyle={{ width: 20 }}
              onPress={() => saveList(list)}
            />
            <Text>Save</Text>
          </View>
        </View>
        <ScrollView style={styles.items} showsVerticalScrollIndicator={false}>
          {
            list.map((item, index) => {
              return <Item key={index} id={index} text={item} deleteItem={deleteItem} />
            })
          }
        </ScrollView>
      </View>

      {/* Add Item Section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.newItemWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder='Enter an item here'
          value={item}
          onChangeText={text => setItem(text)}
        />
        <Icon
          name='plus'
          type='font-awesome'
          size={24}
          iconStyle={{ width: 24 }}
          color={'#55BCF6'}
          onPress={addItem}
        />
      </KeyboardAvoidingView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listWrapper: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  saveList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  items: {
    marginTop: 30
  },
  newItemWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e6f2fc',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 300
  },
});

export default NewListScreen;