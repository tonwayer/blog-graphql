import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Articles } from "./articles";
import { Article } from "./article";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Articles />} path="/" />
        <Route element={<Article />} path="/articles/:id" />
      </Routes>
    </BrowserRouter>
  );
}
