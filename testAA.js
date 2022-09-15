import React,{useState} from 'react'
import {View, TextInput, StyleSheet,TouchableOpacity,Image,Text} from 'react-native'
import { useToast } from "react-native-toast-notifications";
import {validateNickName,validateEmail,validatePw} from './validate.js'

const testAA=()=>{
    const [nickName,setNickName] = useState('')
    const [email,setEmail] = useState('')
    const [pw,setPw] = useState('')
    const [pw2,setPw2] = useState('')
    const [university,setUniversity] = useState('')
    const [department,setDepartment] = useState('')
    const toast = useToast();

    const validation_nickName=()=>{                     //닉네임 유효성 검사
        if(validateNickName(nickName)){
            return validation_university()
        }
        else{
            return showToast("닉네임은 2~16자 입니다.")
        }
    }
    const validation_university=()=>{                   //대학 유효성 검사
        if(university===''){                            
            return validation_department()
        }
        else{
            return showToast("대학을 선택해주세요")
        }
    }
    const validation_department=()=>{                   //학과 유효성 검사
        if(department===''){                            
            return validation_email()
        }
        else{
            return showToast("학과를 선택해주세요")
        }
    }
    const validation_email=()=>{                        //이메일 유효성 검사
        if(validateEmail(email)){
            return validation_pw()
        }
        else{
            return showToast("이메일 형식이 맞지 않습니다.")
        }
    }
    const validation_pw=()=>{                           //비밀번호 유효성 검사
        if(validatePw(pw)){
            return matchPwAndPw2()
        }
        else{
            return showToast("비밀번호는 4자 이상 입니다.")
        }
    }
    const matchPwAndPw2=()=>{                           //비밀번호, 비밀번호 재입력 같은지 검사
        if(pw!==pw2){
           return showToast("비밀번호 불일치")
        }
        else{
            return showToast("회원가입 완료!")
        }
    }
    const showToast=(message)=>{                        //토스트 메세지
        toast.show(message,{
            type:'custom',
            duration:1500,
            animationType:'zoom-in',
            offsetTop:100
        })
    }
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',marginTop:30,marginLeft:30}}>
                <TouchableOpacity 
                    // onPress={()=>navigation.goBack()}
                    style={{width:20}}                
                >
                    <Image source={require('./imageResource/icon/ic_arrow_left.png')}/>
                </TouchableOpacity>
                <Text style={{fontWeight:'bold',fontSize:17}}>회원정보</Text>
            </View>
            <View style={{marginTop:'30%'}}/>
            <View style={styles.middle}>
            <View>
                <TextInput 
                    placeholder='닉네임( 2~16자 )'
                    style={styles.sectionStyle}
                    onChangeText={nickName=>{setNickName(nickName)}}/>

            </View>
            <View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.searchUniversityStyle}>
                        <View style={{flexDirection:'row'}}>
                            <Text>학교찾기</Text>
                            <Image style={{resizeMode:'contain',height:'90%',width:'80%',marginLeft:'15%'}} source={require('./imageResource/jobDaHan/search.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchUniversityStyle2}>
                        <View style={{flexDirection:'row'}}>   
                            <Text >학과</Text>
                            <Image style={{resizeMode:'contain',height:'90%',width:'80%'}} source={require('./imageResource/jobDaHan/triangle.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TextInput 
                    placeholder='이메일'
                    style={styles.sectionStyle}
                    onChangeText={email=>{setEmail(email)}}/>
            </View>
            <View >
                <TextInput 
                    placeholder='비밀번호( 4자 이상 )'
                    style={styles.sectionStyle}
                    secureTextEntry={true}
                    onChangeText={pw=>{setPw(pw)}}/>
            </View>
            <View >
                <TextInput 
                    placeholder='비밀번호 재입력'
                    style={styles.sectionStyle}
                    secureTextEntry={true}
                    onChangeText={pw2=>{setPw2(pw2)}}/>

            </View>
            <View>
                <TouchableOpacity 
                    style={styles.signUp}
                    onPress={()=>validation_nickName()}
                >
                    <Text style={styles.editProfileButton}>확인</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default testAA

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f9f8e8',
        flex:1
    },
    middle:{
        alignItems:'center'
    },
    sectionStyle: {
        borderWidth: 0.5,
        borderColor: '#777777',
        height: 40,
        borderRadius: 20,
        margin: 7,
        width:300,
        marginBottom:4,
        backgroundColor:'white',
        paddingLeft:15
    },
    searchUniversityStyle: {
        borderWidth: 0.5,
        borderColor: '#777777',
        height: 40,
        borderRadius: 20,
        marginTop: 7,
        marginBottom: 7,
        width:200,
        marginBottom:4,
        backgroundColor:'white',
        paddingLeft:15,
        justifyContent:'center',
    },
    searchUniversityStyle2: {
        borderWidth: 0.5,
        borderColor: '#777777',
        height: 40,
        borderRadius: 20,
        marginTop: 7,
        marginBottom: 7,
        width:100,
        marginBottom:4,
        backgroundColor:'white',
        paddingLeft:15,
        justifyContent:'center'
    },
    signUp: {
        borderWidth: 0.5,
        borderColor: '#777777',
        height: 40,
        borderRadius: 20,
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
        width:300,
        marginTop:10,
        backgroundColor:'#a8cd98',
    },
    editProfileButton:{
        color:'white',
        fontWeight:'bold'
    },
})