import React from 'react';
import FirstPage from './components/FirstPage/FirstPage';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout';
import CreatePage from './components/createpage/CreatePage';
import AdvantagePage from './components/advantagePage/advantagePage';
import AboutPage from './components/aboutPage/AboutPage';
import './styles/media.scss'


function App() {

  return (
    <div className="App">
      <div className="form_cotaniner">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='/' element={<FirstPage />} index></Route>
              <Route path='/createPage' element={<CreatePage />}></Route>
              <Route path='/advantagePage' element={<AdvantagePage />}></Route>
              <Route path='/aboutPage' element={<AboutPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
