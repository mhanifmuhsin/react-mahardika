import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const EditFruit = (props) =>{
    const [fruits, setFruit] = useState(props.currentFruit);
    useEffect(() => {
        setFruit(props.currentFruit)
    }, [props])

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const save = () => {
        if (fruits.nama && fruits.hargaTotal && fruits.beratTotal ) 
        props.updateFruit(fruits);
    }

    return(
        <div className='container'>
            <div>
                <h2 className='text-center'>Form Daftar Harga Buah</h2>
                <form onSubmit={handleSubmit(save)}>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-8 col-form-label col-form-label-sm">Nama</label>
                        <div className="col-sm-4">
                            <input type="text" name ="nama" className="form-control form-control-sm" id="nama" value={fruits.nama} 
                            onChange={e=> setFruit({...fruits,nama:e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hargaTotal" className="col-sm-8 col-form-label col-form-label-sm">Harga Total</label>
                        <div className="col-sm-4">
                            <input type="number" name="hargaTotal" className="form-control form-control-sm" id="hargaTotal" value={fruits.hargaTotal} 
                            onChange={e=> setFruit({...fruits,hargaTotal:e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="beratTotal" className="col-sm-8 col-form-label col-form-label-sm">Berat Total (dalam gram)</label>
                        <div className="col-sm-4">
                            <input type="number" name="beratTotal" className="form-control form-control-sm" id="beratTotal" {...register("beratTotal", { min: 2000 })}
                                value={fruits.beratTotal}
                                onChange={e => setFruit({ ...fruits, beratTotal: e.target.value })} />
                            {errors.beratTotal && (
                                <p>Minimal input berat 2000</p>
                            )}
                        </div>
                    </div>
                    <button type="submit" className="mr-2 float-right" >Update</button>
                    <button type="button" className="mr-2 float-right" onClick={()=> props.setEditing(false)}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default EditFruit