import React, { useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Pagination from '@material-ui/lab/Pagination';
import ShtoKlient from './ShtoKlient';

export default function Klientet() {

    const [shtoKlient, opentShtoKlient] = useState(false);

    return (
        <>
            {shtoKlient && <ShtoKlient closePop={() => opentShtoKlient(false)} />}
            <div className="admin-container-header flex jc-spaceb ai-center">
                <div className="flex" >
                    <p className="admin-container-header-title fs-40 fw-bold">Klientet</p>
                    <span className="admin-container-header-subitle fs-24 fw-regular" > (20) </span>
                </div>
                <div className="flex ai-center" >
                    <div className="admin-container-header-search flex ai-center jc-spaceb">
                        <input type="text" placeholder="Kerko..." />
                        <SearchOutlinedIcon style={{ color: '#FFD4B4' }} />
                    </div>


                    <button className="admin-container-header-btn fs-18 fw-regular" onClick={() => opentShtoKlient(true)}>
                        +  Shto Klient
                    </button>
                </div>
            </div>

            <div className="admin-container-table">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell  >Farmacia</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Telefon</TableCell>
                            <TableCell >Adresa</TableCell>
                            <TableCell >Qyteti</TableCell>
                            <TableCell >Menaxheri</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell  >Farmaci Daja</TableCell>
                            <TableCell>farmaci@gmail.com</TableCell>
                            <TableCell>0689638452</TableCell>
                            <TableCell>Rruga Myslym Shyri</TableCell>
                            <TableCell>Tirana</TableCell>
                            <TableCell>Arben Nona</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  >Farmaci Daja</TableCell>
                            <TableCell>farmaci@gmail.com</TableCell>
                            <TableCell>0689638452</TableCell>
                            <TableCell>Rruga Myslym Shyri</TableCell>
                            <TableCell>Tirana</TableCell>
                            <TableCell>Arben Nona</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  >Farmaci Daja</TableCell>
                            <TableCell>farmaci@gmail.com</TableCell>
                            <TableCell>0689638452</TableCell>
                            <TableCell>Rruga Myslym Shyri</TableCell>
                            <TableCell>Tirana</TableCell>
                            <TableCell>Arben Nona</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  >Farmaci Daja</TableCell>
                            <TableCell>farmaci@gmail.com</TableCell>
                            <TableCell>0689638452</TableCell>
                            <TableCell>Rruga Myslym Shyri</TableCell>
                            <TableCell>Tirana</TableCell>
                            <TableCell>Arben Nona</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  >Farmaci Daja</TableCell>
                            <TableCell>farmaci@gmail.com</TableCell>
                            <TableCell>0689638452</TableCell>
                            <TableCell>Rruga Myslym Shyri</TableCell>
                            <TableCell>Tirana</TableCell>
                            <TableCell>Arben Nona</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  >Farmaci Daja</TableCell>
                            <TableCell>farmaci@gmail.com</TableCell>
                            <TableCell>0689638452</TableCell>
                            <TableCell>Rruga Myslym Shyri</TableCell>
                            <TableCell>Tirana</TableCell>
                            <TableCell>Arben Nona</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  >Farmaci Daja</TableCell>
                            <TableCell>farmaci@gmail.com</TableCell>
                            <TableCell>0689638452</TableCell>
                            <TableCell>Rruga Myslym Shyri</TableCell>
                            <TableCell>Tirana</TableCell>
                            <TableCell>Arben Nona</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  >Farmaci Daja</TableCell>
                            <TableCell>farmaci@gmail.com</TableCell>
                            <TableCell>0689638452</TableCell>
                            <TableCell>Rruga Myslym Shyri</TableCell>
                            <TableCell>Tirana</TableCell>
                            <TableCell>Arben Nona</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  >Farmaci Daja</TableCell>
                            <TableCell>farmaci@gmail.com</TableCell>
                            <TableCell>0689638452</TableCell>
                            <TableCell>Rruga Myslym Shyri</TableCell>
                            <TableCell>Tirana</TableCell>
                            <TableCell>Arben Nona</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  >Farmaci Daja</TableCell>
                            <TableCell>farmaci@gmail.com</TableCell>
                            <TableCell>0689638452</TableCell>
                            <TableCell>Rruga Myslym Shyri</TableCell>
                            <TableCell>Tirana</TableCell>
                            <TableCell>Arben Nona</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="pagination flex jc-end">
                <Pagination count={10} size="large" />
            </div>
        </>
    )
}
