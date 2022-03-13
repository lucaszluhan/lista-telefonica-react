import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { Registro } from '../pages/registro';
import { Contatos } from '../pages/contatos';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/*" element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
};
