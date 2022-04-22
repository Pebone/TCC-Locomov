import React, {useState, useEffect} from 'react'
import "../../../assets/css/Global.scss"
import HeaderNavigator from '../HeaderNavigator/HeaderNavigator.jsx'
import api from '../../../services/api.js'
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Scooters() {

    const [scooters, setScooters] = useState([]);
    
    useEffect(() =>{
        
        const headers = {
            'Authorization': "Bearer " + sessionStorage.getItem('accessToken'),
        }

        api.get(`/admin/scooter/find`, { headers: headers })
        
            .then(res =>{
        
                console.log(res.data)
                setScooters(res.data)
        
            }).catch(err => {
            console.log(err)
            })

    }, [])

    function Deletar(scooter) {  

        const headers = {
            'Authorization': "Bearer " + sessionStorage.getItem('accessToken'),
            }

        let id = scooter._id

        console.log(id)

        api.delete(`/admin/scooter/${id}`, { headers: headers })

        .then(res =>{

            toast.success("Patinete deletado!")
            setTimeout(() =>
            document.location.reload(), 3000
            )

        }).catch(err => {
        console.log('erro',err)
        })
      };
    

  return (
    <div className = '__backgroundUsersList'>
        <div>
            <HeaderNavigator></HeaderNavigator>
        </div>
        <div className = '__usersList'>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Localização</th>
                        <th>Bateria</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {scooters.map(scooter =>
                        <tr key = {scooter._id}>
                            <td>
                                {scooter.code}
                            </td>
                            <td>
                                {scooter.localization}
                            </td>
                            <td>
                                {scooter.battery}
                            </td>
                            <td>
                                {scooter.status}
                            </td>
                            <td>
                                <Button variant="danger" onClick = {(e) => Deletar(scooter,e)}>Deletar</Button>
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

                </tbody>
            </table>
        </div>
    </div>
  )
}
