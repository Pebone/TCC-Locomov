import React, {useState, useEffect} from 'react'
import "../../../assets/css/Global.scss"
import HeaderNavigator from '../HeaderNavigator/HeaderNavigator.jsx'
import api from '../../../services/api.js'
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default function Users() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    
    useEffect(() =>{
        
        const headers = {
            'Authorization': "Bearer " + sessionStorage.getItem('accessToken'),
        }

        api.get(`admin`, { headers: headers })
        
            .then(res =>{
        
                console.log(res.data)
                setUsers(res.data)
        
            }).catch(err => {
            console.log(err)
            })

    }, [])

    function Deletar(user) {  

        const headers = {
            'Authorization': "Bearer " + sessionStorage.getItem('accessToken'),
            }

        let id = user._id

        console.log(id)

        api.delete(`/admin/${id}`, { headers: headers })

        .then(res =>{
            
            toast.success("Usuário deletado!")
            setTimeout(() =>
            document.location.reload(), 3000
            )

        }).catch(err => {
        console.log('erro',err)
        })
      };

      function updateSearch (event) {
        setSearch(event.target.value.substr(0, 20))
      }
    
      const searchUsers = users.filter(
        (user) => {
          return (user.name).indexOf(search) ===  0 || (user.cpfUser).indexOf(search) ===  0;
        }
      )

  return (
    <div className = '__backgroundUsersList'>
        <div>
            <HeaderNavigator></HeaderNavigator>
            <input type = 'text' placeholder = 'Pesquisar' className = 'inputSearch' onChange={updateSearch} value = {search} style = {{marginLeft: "20px"}}></input>
        </div>
        <div className = '__usersList'>
            <table id = "data">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Matrícula</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Tipo de usuário</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {searchUsers.map(user =>
                        <tr key = {user._id}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.matriculation}
                            </td>
                            <td>
                                {user.cpfUser}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.typeUser}
                            </td>
                            <td>
                                <Button variant="danger" onClick = {(e) => Deletar(user,e)}>Deletar</Button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    </div>
  )
}
