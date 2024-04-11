import {useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreator from './src/store/actions/actions'

const App = props => {
  

  //   const [age, setAge] = useState(0);

  //   const onAgeDown = () => {
  //     setAge(age - 1);
  //   };
  //   const onAgeUp = () => {
  //     setAge(age + 1);
  //   };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Pressable style={styles.btn} onPress={() => props.onAgeDown()}>
          <Text style={styles.txt2}>-</Text>
        </Pressable>
        <Text style={styles.txt2}>{props.age}</Text>
        <Pressable style={styles.btn} onPress={() => props.onAgeUp()}>
          <Text style={styles.txt2}>+</Text>
        </Pressable>
      </View>

      <View>
        <FlatList
          data={props.history}
          keyExtractor={item => {
            item.id;
          }}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => props.onDelItem(item.id)}  >
              <View
              style={{
                borderWidth: 1,
                margin: 2,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f7e8bc70',
                borderColor: '#f9e5ad',
                width: 40,
                height: 30,
              }}>
              <Text>{item.age}</Text>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeDown: () => {
      dispatch({type: 'ADD_DOWN', value: 1});
      // dispatch(actionCreator.ageUp(1))
      
    },
    onAgeUp: () => {
      // dispatch(actionCreator.ageDown(1))
      dispatch({type: 'ADD_UP', value: 1});
    },
    onDelItem : (id) => {
      dispatch({type : 'DEL_ITEM', value : id})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  txt: {fontSize: 20, fontWeight: '500', color: 'black'},
  txt2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'lightgreen',
    height: 50,
    width: 50,
    borderRadius: 20,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
  },
  items: {
    backgroundColor: '#f7e8bc70',
    borderColor: '#f9e5ad',
    height: 20,
    width: 100,
  },
});
