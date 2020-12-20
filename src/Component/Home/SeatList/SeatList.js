import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import NavBarSection from "../NavBarSection/NavBarSection";
import "./SeatList.css";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";
import { UserContext } from "../../../App";

const SeatList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { id } = useParams();
  const styleOff = { backgroundColor: "red", color: "white" };
  const styleOn = {
    backgroundColor: "blue",
    color: "white",
  };

  const handleOrder = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <NavBarSection></NavBarSection>
      <div className="seatListBg">
        <div className="container">
          <div className="Screen text-center">
            <p>theater screen</p>
          </div>
          <div className="allSeat">
            <div className="row">
              <div className="col-md-3">
                <div className="bgForSeat text-center">
                  <ul>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>

                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bgForSeat text-center">
                  <ul>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bgForSeat text-center">
                  <ul>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bgForSeat text-center">
                  <ul>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                    <li onClick={handleOrder} className="mt-3">
                      {loggedInUser.ids ? (
                        <AirlineSeatReclineExtraIcon style={styleOff} />
                      ) : (
                        <AirlineSeatReclineExtraIcon style={styleOn} />
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeatList;
