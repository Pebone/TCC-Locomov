import React, {useState, useEffect} from 'react'
import "../../../assets/css/Global.scss"
import HeaderNavigator from '../HeaderNavigator/HeaderNavigator.jsx'
import api from '../../../services/api.js'
import 'react-toastify/dist/ReactToastify.css';

export default function Users() {

    const [users, setUsers] = useState([]);
    
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
    

  return (
    <div className = '__backgroundUsersList'>
        <div>
            <HeaderNavigator></HeaderNavigator>
        </div>
        <div className = '__usersList'>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Matrícula</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Tipo de usuário</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
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
                        </tr>
                    )}
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>
                    <tr>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                        <td>User</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
  )
}
