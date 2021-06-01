import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

render() {
    return (
      <View>
        <AppHeader />

        var class_ref = await db.ref('/').on('value',data => {
          var all_students = []
            var class_a = data.val().class_A;
            for(var i in class_a){
              all_students.push(class_a[i]);
}
all_students.sort(function(a,b){
  return a.roll_no - b.roll_no
});
this.setState({all_students: all_students});
});

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
           }}>
          <Text style={styles.buttonText}>Slappy</Text>
          </TouchableOpacity>

<TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
           }}>
          <Text style={styles.buttonText}>Sam</Text>
          </TouchableOpacity>

          const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});


updateAttendance(roll_no, status){
  var id = '';{
    id = '0' +roll_no
  }else{
    id = roll_no
  }
  
var today = new Date()
var dd = today.getDate()
var mm = today.getMonth()


var yyyy = today.getFullYear()
if(dd < 10){
dd = '0'+dd
}

if(mm< 10){
mm = '0'+mm
}

today = dd+ '-' +mm +'-'+yyyy
var ref_path = id
var class_ref = db.ref(ref_path)
class_ref.update({
  [today]: status
})

}
