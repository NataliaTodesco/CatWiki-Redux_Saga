import React from "react";
import { connect } from "react-redux";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import "./detalle.css";
import { Link } from "react-router-dom";

function Detalle({ tipo, loanding }) {
  function Informacion() {
    function returnIcons(number) {
      const icons = [];
      for (let index = 0; index < number; index++) {
        icons.push(<i key={index} className="bi bi-star-fill ml-2"></i>);
      }
      return icons;
    }

    return (
      <div className="row">
        <div className="col-md-3 muestra">
          <img src={tipo.data[0].url} alt="" className="img-fluid" />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <h2>{tipo.name}</h2>
          <h6 className="my-4">{tipo.description}</h6>
          <h6 className="mb-3">
            <b>Temperament:</b> {tipo.temperament}
          </h6>
          <h6 className="mb-3">
            <b>Origin:</b> {tipo.origin}
          </h6>
          <h6 className="mb-3">
            <b>Life Span:</b> {tipo.life_span} years
          </h6>
          <h6 className="mb-3">
            <b>Adaptability:</b> {returnIcons(tipo.adaptability)}
          </h6>
          <h6 className="mb-3">
            <b>Affection level:</b> {returnIcons(tipo.affection_level)}
          </h6>
          <h6 className="mb-3">
            <b>Child friendly:</b> {returnIcons(tipo.child_friendly)}
          </h6>
          <h6 className="mb-3">
            <b>Grooming:</b> {returnIcons(tipo.grooming)}
          </h6>
          <h6 className="mb-3">
            <b>Intelligence:</b> {returnIcons(tipo.intelligence)}
          </h6>
          <h6 className="mb-3">
            <b>Health issues:</b> {returnIcons(tipo.health_issues)}
          </h6>
          <h6 className="mb-3">
            <b>Social needs:</b> {returnIcons(tipo.social_needs)}
          </h6>
          <h6 className="mb-3">
            <b>Stranger friendly:</b> {returnIcons(tipo.stranger_friendly)}
          </h6>
        </div>
      </div>
    );
  }

  function Fotos() {
    return (
      <div className="row mt-5">
        <h2>Other photos</h2>
        <div className="row mt-4">
          {tipo.data.map((foto, index) => {
            return (
              <div key={index} className="col-md-3 col-sm-6 muestra mb-4 px-3">
                <img className="img-fluid" src={foto.url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <Link
        to="/"
        className="btn btn-dark ml-5 float-left"
        title="Back to Home"
      >
        <i className="bi bi-arrow-left"></i>
      </Link>
      {loanding ? (
        <p style={{ height: "90vh" }}>Cargando...</p>
      ) : (
        <div className="container mt-4 px-5">
          <div className="borde mb-3"></div>
          <Informacion></Informacion>
          <Fotos></Fotos>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  tipo: state.current,
  loanding: state.fetching,
});

export default connect(mapStateToProps, {})(Detalle);
