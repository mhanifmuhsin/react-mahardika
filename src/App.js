import { useState } from 'react';
import AddFruit from './AddFruit';
import EditFruit from './EditFruit';
import TableFruits from './TableFruits';

function App() {
  // inisialisasi data
  const initialState = [{
    no: 1,
    nama: 'Nanas',
    hargaTotal: 100000,
    beratTotal: 4000,
  },
  {
    no: 2,
    nama: 'Manggis',
    hargaTotal: 350000,
    beratTotal: 10000,
  }, {
    no: 3,
    nama: 'Nangka',
    hargaTotal: 9000,
    beratTotal: 2000,
  }, {
    no: 4,
    nama: 'Durian',
    hargaTotal: 400000,
    beratTotal: 5000,
  }, {
    no: 5,
    nama: 'Strawberry',
    hargaTotal: 120000,
    beratTotal: 6000,
  }]

  // state penampung buah
  const [fruits, setFruit] = useState(initialState)
  // state untuk meng aktifkan / non aktif fitur edit
  const [editing, setEditing] = useState(false);

  // inisialisasi form daftar harga buah
  const initFruit = { no: null, nama: '', hargaTotal: 0, beratTotal: 2000 }

  // state penampungan data terupdate
  const [currentFruit, setcurrentFruit] = useState(initFruit);

  // function trigger button edit
  const editFruit = (id, fruit) => {
    setEditing(true);
    setcurrentFruit(fruit);
  };
  // function simpan data
  const addFruit = fruit => {
    fruit.no = fruits.length + 1;
    setFruit([...fruits, fruit])
  }
  // function upate/edit data
  const updateFruit = (newFruit) => {
    setFruit(
      fruits.map((fruit) => (fruit.no === currentFruit.no ? newFruit : fruit))
    );
    setcurrentFruit(initFruit);
    setEditing(false);
  };
  // function delete data
  const deleteFruit = (no) => setFruit(fruits.filter(fruit => fruit.no !== no));
  return (
    <div>
      <TableFruits fruits={fruits} deleteFruit={deleteFruit} editFruit={editFruit} />
      {editing ? (
        <EditFruit currentFruit={currentFruit} setEditing={setEditing} updateFruit={updateFruit} />
      ) : (
        <AddFruit addFruit={addFruit} />
      )}
    </div>
  );
}

export default App;
