import React, {useState} from 'react'
import "../../../assets/css/Global.scss"
import HeaderNavigator from '../HeaderNavigator/HeaderNavigator.jsx'
import api from '../../../services/api.js'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {

    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState(0);

    function Login(event) {  

        event.preventDefault()
        
        let user = {
        email: matricula,
        password: password
        }
      
      api.post(`/auth/login`, user)
        .then(response => {

          console.log(response)
          response.headers['token-type'] = `Bearer`
          sessionStorage.setItem('accessToken', response.data.token)
          sessionStorage.setItem('userID', response.data.user._id)
          sessionStorage.setItem('contentType', response.headers['content-type'])
          sessionStorage.setItem('tokenType', response.headers['token-type'])
          sessionStorage.setItem('name', response.data.user.name)
          sessionStorage.setItem('type', response.data.user.typeUser)

          const token = sessionStorage.getItem('accessToken')
          if(token){
              toast.success("Login efetuado!")
              setTimeout(() =>
              document.location.href = '/users', 3000
              )
          }

        }).catch(err =>{
          toast.error("Ocorreu algum erro!")
          console.log(err);
        })
      };

  return (
      <div className = '__backgroundLogin'>
        <div>
            <HeaderNavigator></HeaderNavigator>
        </div>
        <div className = '__areaLogin'>
            <div className = '__divTitle'>
                <text className = '__title'>Acesso ao Locomoov</text>
                <div>_____________________</div>
            </div>
            <div className = '__Login'>
                <div>
                    <text>Matrícula</text>
                </div>
                <input type = 'text' placeholder = 'Matrícula' onChange = {(event) => setMatricula(event.target.value)}></input>
                <div>
                    <text>Senha</text>
                </div>
                <input type = 'password' placeholder = 'Senha' onChange = {(event) => setPassword(event.target.value)}></input>
                <button type = 'submit' onClick = {Login}>Acessar</button>
            </div>
        </div>
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        />
    </div>
  )
}
