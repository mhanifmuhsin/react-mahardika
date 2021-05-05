import React from 'react';

const TableFruits = (props) => {
    return (
        <div className='container'>
            <div>
                <h2 className='text-center'>Daftar Harga Buah</h2>
                <table className="table table-striped table-sm table-bordered">
                    <thead>
                        <tr style={{ background: 'green', color: 'white' }}>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Harga Total</th>
                            <th scope="col">Berat Total</th>
                            <th scope="col">Harga per kg</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.fruits.length > 0 ? (

                            props.fruits && props.fruits.map((fruit) => {
                                const { no, nama, hargaTotal, beratTotal } = fruit
                                return <tr key={no}>
                                    <td>{no}</td>
                                    <td>{nama}</td>
                                    <td>{hargaTotal}</td>
                                    <td>{beratTotal * 0.001}  kg</td>
                                    <td>{hargaTotal / (beratTotal * 0.001)}</td>
                                    <td>
                                        <button type="button" className=" mr-2" onClick={() => props.editFruit(no, fruit)}>Edit</button>
                                        <button type="button" onClick={() => props.deleteFruit(no)}>Delete</button>
                                    </td>
                                </tr>
                            })

                        ) : (
                            <tr >
                                <td colspan="6" className="text-center">Data not found !</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableFruits
