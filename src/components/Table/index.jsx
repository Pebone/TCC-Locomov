import React, { useState } from "react";

import useTable from "../useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import { Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { AiFillDelete, AiOutlineSearch } from 'react-icons/ai';
import api from '../../services/api'

function Deletar(el) {

  const headers = {
      'Authorization': "Bearer " + sessionStorage.getItem('accessToken'),
  }

  let id = el._id

  console.log(id)

  api.delete(`/admin/${id}`, { headers: headers })

      .then(res => {

          toast.success("Usuário deletado!")
          setTimeout(() =>
              document.location.reload(), 3000
          )

      }).catch(err => {
          console.log('erro', err)
      })
};

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Nome</th>
            <th className={styles.tableHeader}>Matrícula</th>
            <th className={styles.tableHeader}>CPF</th>
            <th className={styles.tableHeader}>Email</th>
            <th className={styles.tableHeader}>Tipo de Usuário</th>
            <th className={styles.tableHeader}>Ação</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.matriculation}</td>
              <td className={styles.tableCell}>{el.cpfUser}</td>
              <td className={styles.tableCell}>{el.email}</td>
              <td className={styles.tableCell}>{el.typeUser}</td>
              <Button style = {{margin: 5, display: "flex", justifyContent: "center", alignItems: "center"}} variant="danger" onClick={(e) => Deletar(el, e)}> <AiFillDelete></AiFillDelete> </Button>
              {/* <td className={styles.tableCell}>{el.cpfUser}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};

export default Table;
