import React from "react";
import Logo from "../../../assets/images/logo.png";
import "../../../assets/css/Global.scss";
import { InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function HeaderNavigator() {

  function Logout() {
    sessionStorage.setItem('accessToken', "")
    toast.success("Tchau :)!")
    setTimeout(() => document.location.href = "/", 3000)
  }

  return (
    <div className="__header">
      <img src={Logo} className="__imgHeader"></img>
      {/* <span className="__spanHeader">Administrativo</span> */}
      {/* <InputGroup className="mb-3"> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        />
        <DropdownButton
          variant="light"
          title="Adminstrativo"
          id="input-group-dropdown-1"
          // className="__spanHeader"
        >
          <Dropdown.Item href="/createUsers">Criar Usuário</Dropdown.Item>
          <Dropdown.Item href="/users">Listar Usuários</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/createScooters">Criar Patinetes</Dropdown.Item>
          <Dropdown.Item href="/scooters">Listar Patinetes</Dropdown.Item>
          {/* <Dropdown.Item href="/createUsers">Criar usuário</Dropdown.Item> */}
          <Dropdown.Divider />
          <Dropdown.Item onClick = {Logout}>Logout</Dropdown.Item>
        </DropdownButton>
        {/* <FormControl aria-label="Text input with dropdown button" /> */}
      {/* </InputGroup> */}
    </div>
  );
}
