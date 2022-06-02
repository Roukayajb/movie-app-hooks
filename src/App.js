import React, { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import AddModal from "./components/AddModal";
import { Button,Container } from "react-bootstrap";
import Search from "./components/Search";

function App() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState({});
  const handleClose = () => setShow(!show);
  const addHandle = (inputs) => {
    setMovies((m) => m.concat(inputs));
    setShow(false);
  };
  const [movies, setMovies] = useState([
    {
      title: "Ambulance",
      description:"Ayant besoin d'argent pour couvrir les frais médicaux de sa femme, un vétéran fait équipe avec son frère adoptif pour voler 32 millions de dollars à une banque de Los Angeles.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BYjUyN2VlZGEtNGEyZC00YjViLTgwYmQtZDJiM2FlOTU3Mjg2XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg",
      rating: 5,
    },
    {
      title: "Joker(2019)",
      description: "Arthur Fleck, un comédien affligé par des troubles mentaux, se voit mis de côté par la société. S'amorce ensuite une descente aux enfers emplie de révoltes .",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      rating: 4,
    },
    {
      title: "Fast and Furious",
      description: "A la suite de plusieurs attaques de camions, la police de L.A. décide d'enquêter sur le milieu des street racers. Brian, un jeune policier, est chargé d'inflitrer la bande de Toretto, qui figure, avec celle de son rival Johnny Tran, au premier rang des suspects.",
      posterURL: "https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/960/628/4280008836-po-reg-medium_orig-1635317868539.jpg",
      rating: 4,
    },
    {
      title: "The Batman",
      description: " Cela fait deux ans que Bruce Wayne a enfilé le costume de Batman et lutte contre le crime qui sévit à Gotham. Lorsqu'un tueur s'en prend à l'élite de la ville, disséminant des indices à l'attention du justicier masqué, Batman découvre ce qui se trame réellement à Gotham.",
      posterURL: "https://cdn.europosters.eu/image/750/posters/the-batman-downpour-i123456.jpg",
      rating: 3,
    },
  ]);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg">
        <div className="container-fluid">
          <div className="navbar-brand"><h1 >POPCORN</h1></div>
          <div className="cc">
            <Search onSearch={(s) => setSearch(s)} />
          </div>
        </div>
      </nav>
      <Container className="re">
      <Button className="btn" variant="primary" onClick={handleClose}>
        New Movie
      </Button>
      </Container>
        <Filter movies={movies} search={search} />
      <AddModal handleClose={handleClose} show={show} addHandle={addHandle} />
      
    </div>
  );
}

export default App;
