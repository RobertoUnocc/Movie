import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Pagination } from "antd";
import SearchMovie from "../components/Search/Search";
import { API, URL_API } from "../utils/constantes";
import ContentMovie from "../components/Search/ContentMovie";
import Typewriter from "typewriter-effect";

const Search = () => {
  const [search, setSearch] = useState("");
  const [ListMovie, setListMovie] = useState(null);
  const [current, setCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [total_results, setTotal_results] = useState(0);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
    MovieSearch(search, page);
  };

  const HandleSearch = (e) => {
    e.preventDefault();

    MovieSearch(search);
  };

  const MovieSearch = async (query, numberPage = 1) => {
    const temp = await fetch(
      `${URL_API}/search/movie?api_key=${API}&language=es-ES&&query=${query}&page=${numberPage}`
    ).then((res) => res.json());
    console.log(temp);
    setTotalPage(temp.total_pages);
    setTotal_results(temp.total_results);
    setListMovie(temp.results);
  };

  return (
    <div>
      <SearchMovie
        HandleSearch={HandleSearch}
        search={search}
        setSearch={setSearch}
      />
      <ContentMovie ListMovie={ListMovie} />
      {ListMovie ? (
        <Pagination
          current={current}
          onChange={onChange}
          pageSize={20}
          total={total_results}
        />
      ) : (
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter

              .typeString(
                `<span class="text-buscar">Busquemos una película ! ٩(^ᴗ^)۶ </span>`
              )
              .pauseFor(500)
              .deleteAll()
              .typeString(
                `<span class="text-buscar">Ingrese la pelicula que quiera ver (⌐■_■) </span>`
              )
              .pauseFor(500)
              .deleteAll()
              .start();
          }}
        ></Typewriter>
      )}
      ;
    </div>
  );
};

export default Search;
