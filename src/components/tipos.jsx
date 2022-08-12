import React from "react";
import { connect } from "react-redux";
import Navbar from "./navbar";
import Footer from "./footer";

function Tipos({ tipos }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-5">
        <h1>66+ Breeds For you to descover</h1>
        {tipos.map((tipo, index) => {
          return (
            <div key={tipo.id} className="row">
              <div className="col-md-2">
                {tipo.image ? (
                  <img
                    src={tipo.image.url}
                    alt=""
                    className="img-fluid mt-5"
                    style={{
                      borderRadius: "25px",
                      maxHeight: "150px",
                      width: "150px",
                    }}
                  />
                ) : (
                  <p></p>
                )}
              </div>
              <div className="col-md-9">
                <h3 className="mb-3 mt-5 pt-1">
                  {index + 1}. {tipo.name}
                </h3>
                <h6>{tipo.description}</h6>
              </div>
              <div className="col-md-1"></div>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  tipos: state.array,
});

export default connect(mapStateToProps, {})(Tipos);
