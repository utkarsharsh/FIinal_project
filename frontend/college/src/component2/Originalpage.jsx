import React, { useEffect, useRef, useState } from "react";
import Technicalnews from "./techinacalnews.jsx";
import "./original.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faHouse,
  faMoneyBills,
  faMagnifyingGlass,
  faImage,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Peoplepost from "./peoplepost.jsx";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Orginpage() {
  const [menu1, setmenu1] = useState(false);
  const [imgforshow, setimgforshow] = useState(null);
  const [imgforsend, setimgforsend] = useState(null);
  const imageref = useRef();
  const [others, setothers] = useState([]);
  const [caption, setcaption] = useState("");
  const [currentbhai, setcurrentbhai] = useState({});
  const [technews, settechnews] = useState([]);
  const [done, setdone] = useState([""]);
  async function sendtoback() {
    let form = new FormData();
    form.append("image", imgforsend);
    form.append("caption", caption);
    form.append("name", currentbhai.name);
    let done = await axios.post("http://localhost/others", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (done.data == "done") alert("Photo uploaded");
    setdone(done.data);
  }
  function imagechange(e) {
    console.log(e.target.files);
    if (e.target.files[0]) {
      let ima = e.target.files[0];
      setimgforsend(ima);
      console.log(ima);
      setimgforshow({
        image: URL.createObjectURL(ima),
      });
      console.log(imgforshow.image);
    }
  }
  

  async function technewsapi() {
    let t = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1d74ec60296c48afb27d486cfd77bb45"
    );
    console.log(t);
    settechnews(t.data.articles);
  }

  function responseoriginalmenu1() {
    if (menu1) {
      setmenu1(false);
    } else setmenu1(true);
  }
  const [originaluser, setoriginalusers] = useState([]);
  async function gettheralluserorigin() {
    let token = localStorage.getItem("token");
    let ans = await axios.get("http://localhost/origin", {
      headers: {
        authorization: "Bearer" + " " + token,
      },
    });
    console.log(ans);
    setoriginalusers(ans.data.totalusers);
    setcurrentbhai(ans.data.currentusers);
    ans.data.totalusers.map((e) => {
      setothers((pre) => {
        return [...pre, ...e.others];
      });
    });
  }
  useEffect(() => {
    gettheralluserorigin();
    technewsapi();
  }, []);

  console.log(originaluser);
  console.log(others);

  return (
    <>
      <div className="originaltopbar">
        <div className="orginnavbar">
          <div className="originalnavbar">
            <div
              style={{
                marginLeft: "35px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2 style={{ fontSize: "1.7rem" }}>
                {" "}
                <span style={{ color: "#4681f4" }}>Edu</span>{" "}
                <span style={{ color: "#FF6C22", marginLeft: "-7px" }}>
                  stage
                </span>
              </h2>{" "}
            </div>
            <div className="originsearch"></div>
            <div className="originalnavbarprofileimgavatar">
              <p>{currentbhai.name}</p>
              <img src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"></img>
              <div
                className="responseoriginalmenu1"
                onClick={responseoriginalmenu1}
                style={menu1 ? { display: "none" } : { display: "block" }}
              >
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div
                className="responseoriginalmenu2"
                style={menu1 ? { display: "block" } : { display: "none" }}
                onClick={responseoriginalmenu1}
              >
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
          </div>
        </div>

        <div className="originalmainworkpage">
          <div className="mythoughtleft"></div>

          <div
            className="originalmainworkpagelastleft"
            id={menu1 ? "originalmainworkpagelastleftcard" : ""}
          >
            <div className="originalmainworkpagelastleftcard">
              <img
                src="https://th.bing.com/th/id/R.8d2c3d4b86d31ffb3f34e95996d8b939?rik=unLUB7G4QETSyQ&riu=http%3a%2f%2finfoadmission.com%2fwp-content%2fuploads%2f2018%2f05%2fajay-kumar-garg.jpg&ehk=6Nw5rUym4BlCmUrNvpfUMZuN0Kei%2fUEayt17RNiOZAc%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div>
              <div className="originalmainworkpagelastleftcardname"></div>
              <h2
                style={{
                  textAlign: "center",
                  borderBottom: "1px dotted black",
                  marginBottom: "6px",
                }}
              >
                Students
              </h2>
              <div className="originalmainworkpagelastleftcardusers">
                {originaluser.map((e) => {
                  return (
                    <>
                      <div
                        style={{
                          marginTop: "6px",
                          display: "flex",
                          overflow: "auto",
                          alignItems: "center",
                          fontStyle: "none",
                          padding: "10px",
                        }}
                      >
                        <img
                          style={{ borderRadius: "50%" }}
                          src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-512.png"
                        ></img>
                        <p style={{ marginLeft: "14px" }}> {e.name} </p>
                        <Link to={e.name}>
                          <button
                            style={{
                              color: "white",
                              backgroundColor: "blueviolet",
                              outline: "none",
                              borderStyle: "none",
                              position: "relative",
                              marginLeft: "10px",
                              cursor: "pointer",
                            }}
                            cla
                          >
                            {" "}
                            <div className="anibtn"></div>Profile
                          </button>
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="originalmainworkpageleft">
            <div className="originalmainworkpageleftpost">
              <div className="leftpostprofileicon">
                <div className="leftpostprofileiconimg">
                  <img src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"></img>
                  <div className="leftpostprofileiconsearch">
                    <input
                      type="text"
                      placeholder="what's your thought today"
                      value={caption}
                      onChange={(e) => {
                        setcaption(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>

              <div className="leftpostshareoptipns">
                <button
                  id="leftpostshareoptipnsimg"
                  onClick={() => {
                    imageref.current.click();
                  }}
                >
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faImage} />
                  </span>
                  Add image
                </button>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={imageref}
                  onChange={imagechange}
                ></input>
                <button id="leftpostshareoptipnsbutton" onClick={sendtoback}>
                  Share
                </button>
              </div>
            </div>
            {imgforshow && (
              <div className="imageforlook">
                <div className="crossing" style={{ width: "100%" }}>
                  <h2
                    style={{
                      marginLeft: "30px",
                      color: "blueviolet",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setimgforsend(null);
                      setimgforshow(null);
                    }}
                  >
                    X
                  </h2>
                </div>
                <img src={imgforshow.image} alt="" srcset="" />{" "}
              </div>
            )}

            <Peoplepost others={others} />
          </div>

          <div
            className="originalmainworkpageright"
            id={menu1 ? "resoriginalmainworkpageright" : ""}
          >
            <div className="Mostimportantlink">
              <h2
                style={{
                  textAlign: "start",
                  fontSize: "1.4rem",
                  marginLeft: "9px",
                }}
              >
                Most important links
              </h2>
            </div>
            <div className="beautiful"></div>
            <div className="placement">
              <button>
                {" "}
                <FontAwesomeIcon
                  icon={faMoneyBills}
                  style={{ marginRight: "7px" }}
                />{" "}
                placements
              </button>
              <div className="booklet">
                <ul>
                  <li>
                    <span
                      style={{
                        color: "#FF6C22",
                        marginRight: "2px",
                        fontSize: "1.3rem",
                      }}
                    >
                      &#8674;
                    </span>{" "}
                    <span>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/207/207114.png"
                        alt=""
                      />{" "}
                    </span>
                    2021-2022
                  </li>
                </ul>
              </div>
            </div>

            <div className="pg">
              <div className="living">
                <button>
                  <span>
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  Pg/Hostel
                </button>
              </div>
              <div>
                <Link to='/suboodh'>
                <div className="pgofsuboodh">
                  <span
                    style={{
                      color: "#FF6C22",
                      marginRight: "2px",
                      fontSize: "1.3rem",
                    }}
                  >
                    &#8674;
                  </span>{" "}
                  <span>
                    <img
                      src="https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg"
                      alt=""
                    />
                  </span>{" "}
                  Suboodh pg
                </div> </Link>
                <div className="pgofhostel">
                  <span
                    style={{
                      color: "#FF6C22",
                      marginRight: "2px",
                      fontSize: "1.3rem",
                    }}
                  >
                    &#8674;
                  </span>
                  <span>
                    <img
                      src="https://w7.pngwing.com/pngs/726/468/png-transparent-hotel-scalable-graphics-computer-file-hotels-angle-apartment-cartoon.png"
                      alt=""
                    />
                  </span>{" "}
                  Hostel{" "}
                </div>
              </div>
            </div>

            <div className="food">
              <div className="eating">
                <button>
                  <span>
                    <FontAwesomeIcon icon={faBowlFood} />
                  </span>
                  Mess
                </button>
                <div className="messswad">
                  <div className="swad">
                    <span
                      style={{
                        color: "#FF6C22",
                        marginRight: "2px",
                        fontSize: "1.3rem",
                      }}
                    >
                      &#8674;
                    </span>
                    <span>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHemCpmY9f_a2d4VoGwTeRl9gMzhFNgGECQ&usqp=CAU"
                        alt=""
                      />
                    </span>
                    Swad
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="origanalnews"
            style={{
              backgroundColor: "white",
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          >
            <h1>
              {" "}
              <span style={{ color: "#4681f4" }}>Top</span>{" "}
              <span style={{ color: "#FF6C22" }}>news </span>{" "}
            </h1>
            <Technicalnews technews={technews} />
          </div>
          <div className="mythoughtright"></div>
        </div>
      </div>
    </>
  );
}

export default Orginpage;
