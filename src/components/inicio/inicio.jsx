import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import { connect } from "react-redux";
import { getDetailsAction, getGatosAction } from "../../redux/gatosDunks";
import { Link, useNavigate } from "react-router-dom";
import "./inicio.css";

function Inicio({ getGatosAction, array, getDetailsAction }) {
  let navigate = useNavigate();

  useEffect(() => {
    getGatosAction();
  }, [getGatosAction]);

  function Header() {
    const [breeds, setBreeds] = useState([]);
    const [breedsSearch, setBreedsSearch] = useState([]);
    const [search, setSearch] = useState("");
    const [focus, setFocus] = useState(false);

    useEffect(() => {
      setBreeds(array);
      setBreedsSearch(array);
    }, []);

    function ChangeHandle(event) {
      setSearch(event.target.value);
      setBreedsSearch(
        breeds.filter((breed) =>
          breed.name.toUpperCase().includes(event.target.value.toUpperCase())
        )
      );
    }

    return (
      <div className="header mx-5">
        <div className="texto">
          <h1 className="card-title">
            CatWiki <i className="fas fa-solid fa-paw"></i>
          </h1>
          <p className="card-text my-4">
            Get to know more about your cat breed
          </p>
          <div className="filtro">
            <div className="input-group text-secondary">
              <input
                type="text"
                className="form-control pl-3 pb-2"
                placeholder="Enter your breed"
                value={search}
                onChange={(e) => {
                  ChangeHandle(e);
                }}
                onKeyUp={(e) => {
                  setFocus(true);
                }}
                onKeyDown={(e) => {
                  setFocus(false);
                }}
              />
              <div className="input-group-prepend">
                <div className="btn bg-white">
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
            {focus ? (
              <div className="list-group mt-2 text-dark">
                {breedsSearch.map((breed, index) => {
                  return (
                    <li
                      key={index}
                      className="list-group-item list-group-item-action"
                      onClick={(e) => {
                        setSearch(breed.name);
                        getDetailsAction(breed);
                        navigate("/breeds/" + breed.name);
                      }}
                    >
                      {breed.name}
                    </li>
                  );
                })}
              </div>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </div>
    );
  }

  function Searched() {
    return (
      <div className="searched mx-5 mb-5">
        <h5>Most Searched Breeds</h5>
        <div className="borde"></div>

        <Link to="/breeds" className="btn float-right">
          SEE MORE <i className="bi bi-arrow-right"></i>
        </Link>

        <h1>66+ Breeds For you to descover</h1>

        <div className="row my-5">
          <div className="col-md-3">
            <div className="img-1"></div>
            <h6>Bengal</h6>
          </div>
          <div className="col-md-3">
            <div className="img-2"></div>
            <h6>Savannah</h6>
          </div>
          <div className="col-md-3">
            <div className="img-3"></div>
            <h6>Norwegian Forest Cat</h6>
          </div>
          <div className="col-md-3">
            <div className="img-4"></div>
            <h6>Selkirk Rex</h6>
          </div>
        </div>
      </div>
    );
  }

  function Info() {
    return (
      <div className="info m-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 texto">
            <div className="borde mt-5"></div>
            <h1 className="mt-3">Why should you have a cat?</h1>
            <p className="my-5">
              Having a cat around you can actually trigger the release of
              calming chemicals in you body which lower your stress and anxiety
              leves
            </p>
            <Link to="/article" className="btn">
              READ MORE <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="col-md-6 px-5">
            <div className="row">
              <div className="col-6">
                <img
                  className="img-fluid"
                  src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg"
                  alt=""
                />
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-9">
                    <img
                      className="img-fluid mt-4"
                      src="https://cdn2.thecatapi.com/images/MTkwMTQ2OQ.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  className="img-fluid"
                  src="https://cdn2.thecatapi.com/images/y9e6zClik.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Header />
      <Searched />
      <Info />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  array: state.array,
});

export default connect(mapStateToProps, { getGatosAction, getDetailsAction })(
  Inicio
);
