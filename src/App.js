import './Reset.css';
import './App.css';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/Main/Main";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";

import data from './data.json';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [beastData, setBeastData] = useState(data);

  function handleModal(beast){
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  function handleBeasts(event) {
    let beastNum = parseInt(event.target.value);
    const filteredBeasts = data.filter((beast) => beast.horns === beastNum);
    event.target.value === "" ? setBeastData(data) : setBeastData(filteredBeasts);
  }

  return (
    <div className="App">
      <Header handleBeasts={handleBeasts} />
      <Main beastData={beastData} handleModal={handleModal} />
      {modal && <SelectedBeast modalContent={modalContent} closeModal={closeModal}/>}
      <Footer />
    </div>
  );
}

export default App;
