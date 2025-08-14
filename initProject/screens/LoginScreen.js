import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ListIcon from '../assets/svg/list.svg';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import Toast from 'react-native-toast-message';

const LoginScreen = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigation = useNavigation();
   const auth = getAuth();

   useEffect(() => {
      onAuthStateChanged(auth, user => {
         console.log('Auth state changed:', user);
         if (user) {
            navigation.replace('Main');
         }
      });
   }, []);

   const handleSignUp = async () => {
      // 파이어 베이스 회원 가입 처리
      try {
         const user = await createUserWithEmailAndPassword(auth, email, password);
         Toast.show({ type: 'succcess', text1: '회원 가입 성공', text2: '환영합니다!' });
      } catch (error) {
         console.error('회원 가입 실패:', error);
         Alert.alert(
            '회원가입 도중에 문제가 발생했습니다.',
            error.message,
            [{ text: '닫기', onPress: () => console.log('닫기 버튼 클릭됨') }],
            { cancelable: true },
         );
      }
   };
   const handleLogin = async () => {
      // 파이어 베이스 로그인 처리
      try {
         const user = await signInWithEmailAndPassword(auth, email, password);
         Toast.show({ type: 'success', text1: '로그인 성공', text2: `환영합니다, ${user.user.email}!` });
      } catch (error) {
         console.error('로그인 실패:', error);
         Alert.alert(
            '로그인 도중에 문제가 발생했습니다.',
            error.message,
            [{ text: '닫기', onPress: () => console.log('닫기 버튼 클릭됨') }],
            { cancelable: true },
         );
      }
   };

   return (
      <View style={styles.container}>
         <ListIcon />
         <View style={styles.inputcontainer}>
            <TextInput placeholder="이메일" value={email} onChangeText={text => setEmail(text)} style={styles.input} />
            <TextInput
               placeholder="비밀번호"
               value={password}
               onChangeText={text => setPassword(text)}
               style={styles.input}
               secureTextEntry
            />
         </View>
         <View styles={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
               <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity style={(styles.button, styles.buttonOutline)} onPress={handleSignUp}>
               <Text style={styles.buttonOutline}>회원 가입</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default LoginScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   inputContainer: {
      width: '80%',
      marginTop: 15,
   },
   input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
   },
   buttonContainer: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
   },
   button: {
      backgroundColor: 'black',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
   },
   buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: 'black',
      borderWidth: 1,
   },
   buttonText: {
      color: 'white',
      fontWeight: '500',
      fontSize: 16,
   },
   buttonOutlineText: {
      color: 'black',
      fontWeight: '500',
      fontSize: 16,
   },
});
