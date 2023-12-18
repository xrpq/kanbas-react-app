import ModuleList from "../Modules/ModuleList";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
import db from "../../Database"

function Home() {
  const modules = db.modules;
  return (
    <div className="container-flex">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row" id="home-btns">
              <div className="col">
                <button className="btn btn-light">Collapse All</button>
                <button className="btn btn-light">View Progress</button>
                <select id="select-one-publish" className="form-select">
                  <option value="PUBLISH ALL">Publish All</option>
                </select>
                <button className="btn btn-danger">Module</button>
                <button className="btn btn-light">
                  <FaEllipsisV />
                </button>
                <hr />
              </div>
            </div>

            <div className="col">
              <ModuleList />
            </div>
          </div>

          <div className="col-3">
            <h5>Course Status</h5>
            <div className="row" id="course-stat-btn">
              <div className="col">
                <button className="btn btn-light">
                  <i className="fas fa-ban"></i>
                  Unpublish
                </button>
                <button className="btn btn" id="pub-btn">
                  <i className="fas fa-check-circle"></i>
                  Published
                </button>
              </div>
            </div>

            <div className="row" id="course-stat-btn">
              <button className="btn btn-light" id="course-stat-btn2">
                <i className="fas fa-file-import"></i>
                Import Existing Content
              </button>

              <button className="btn btn-light" id="course-stat-btn2">
                <i className="fas fa-sign-out-alt"></i>
                Import From Common
              </button>

              <button className="btn btn-light" id="course-stat-btn2">
                <i className="fas fa-bullseye"></i>
                Choose Home Page
              </button>

              <button className="btn btn-light" id="course-stat-btn2">
                <i className="fas fa-chart-bar"></i>
                View Course Stream
              </button>

              <button className="btn btn-light" id="course-stat-btn2">
                <i className="fas fa-bullhorn"></i>
                New Announcment
              </button>

              <button className="btn btn-light" id="course-stat-btn2">
                <i className="fas fa-chart-bar"></i>
                New Analytics
              </button>

              <button className="btn btn-light" id="course-stat-btn2">
                <i className="fas fa-bell"></i>
                View Course Notifications
              </button>
            </div>

            <div className="row">
              <div className="col-10" id="to-do">
                <h5>To Do</h5>
                <hr />
                <div className="row">
                  <div className="col-2">
                    <span className="num">1</span>
                  </div>
                  <div className="col-8" id="todo">
                    <p>
                      <span>
                        <a href="">Grade A1 - ENV + HTML</a>
                      </span>
                    </p>
                    <p>
                      100 Points <i className="fas fa-circle fa-sm"></i> Sep 18
                      at 11:59pm
                    </p>
                  </div>
                  <div className="col-1">
                    <i className="fas fa-times fa-sm float-start"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-10" id="coming-up">
                <h5>Coming Up</h5>
                <p>
                  <i className="far fa-calendar-alt"></i>
                  <a href="#">View Calendar</a>
                </p>
                <hr />
              </div>
              <div className="row">
                <div className="col-10" id="lecture">
                  <div className="row" id="lec-row">
                    <a href="#">
                      <i className="far fa-calendar-alt"></i>
                      <span className="lec">Lecture</span>{" "}
                      <span className="cs4550">CS4550.12631.202410</span>{" "}
                      <span className="sep">Sep 7 at 11:45am</span>
                    </a>
                  </div>
                  <div className="row" id="lec-row">
                    <a href="#">
                      {" "}
                      <i className="far fa-calendar-alt"></i>{" "}
                      <span className="lec">Lecture</span>{" "}
                      <span className="cs4550">CS4550.12631.202410</span>{" "}
                      <span className="sep">Sep 11 at 11:45am</span>
                    </a>
                  </div>
                  <div className="row" id="lec-row">
                    <a href="#">
                      {" "}
                      <i className="far fa-calendar-alt"></i>
                      <span className="lec">Lecture</span>{" "}
                      <span className="cs4550">CS4550.12631.202410</span>{" "}
                      <span className="sep">Sep 11 at 6pm</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;



   {/* <ul class="list-group">
                <li class="list-group-item list-group-item-secondary">
                  <i class="fas fa-caret-down"></i>
                  Week 0 - INTRO
                  <div class="float-end">
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-plus"></i>
                    <i class="fas fa-ellipsis-v"></i>
                  </div>
                </li>
                <ul class="list-group-item">
                  <li class="list-group-item">
                    LEARNING OBJECTIVES
                    <div class="float-end">
                      <i class="fas fa-check-circle"></i>
                      <i class="fas fa-ellipsis-v"></i>
                    </div>
                  </li>
                  <ul class="list-group-item">
                    <li class="list-group-item">
                      Introduction to the course
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                    <li class="list-group-item">
                      Learn what is Web Development
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                    <li class="list-group-item">
                      Creating a development environment
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                    <li class="list-group-item">
                      Creating a Web Application
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                    <li class="list-group-item">
                      Getting started with the 1st assignment
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                  </ul>

                  <li class="list-group-item">
                    READING
                    <div class="float-end">
                      <i class="fas fa-check-circle"></i>
                      <i class="fas fa-ellipsis-v"></i>
                    </div>
                  </li>
                  <ul class="list-group-item">
                    <li class="list-group-item">
                      Full Stack Developer - Chapter 1 - Introduction
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                    <li class="list-group-item">
                      Full Stack Developer - Chapter 2 - Creating User
                      Interfaces With HTML
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                  </ul>

                  <li class="list-group-item">
                    SLIDES
                    <div class="float-end">
                      <i class="fas fa-check-circle"></i>
                      <i class="fas fa-ellipsis-v"></i>
                    </div>
                  </li>
                  <ul class="list-group-item">
                    <li class="list-group-item">
                      <a href="#" id="slides">
                        Introduction to Web Development Links to an external
                        site.
                      </a>
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a href="#" id="slides">
                        Creating an HTTP server with Node.js Links to an
                        external site.
                      </a>
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <a href="#" id="slides">
                        Creating a React Application Links to an external site.
                      </a>
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                  </ul>
                </ul>

                <li class="list-group-item list-group-item-secondary">
                  <i class="fas fa-caret-down"></i>
                  Week 1 - HTML
                  <div class="float-end">
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-plus"></i>
                    <i class="fas fa-ellipsis-v"></i>
                  </div>
                </li>
                <ul class="list-group-item">
                  <li class="list-group-item">
                    LEARNING OBJECTIVES
                    <div class="float-end">
                      <i class="fas fa-check-circle"></i>
                      <i class="fas fa-ellipsis-v"></i>
                    </div>
                  </li>
                  <ul class="list-group-item">
                    <li class="list-group-item">
                      Learn how to create user interfaces with HTM
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                    <li class="list-group-item">
                      Keep working on assignment 1
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                    <li class="list-group-item">
                      Deploy the assignment Netlify
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                  </ul>

                  <li class="list-group-item">
                    READING
                    <div class="float-end">
                      <i class="fas fa-check-circle"></i>
                      <i class="fas fa-ellipsis-v"></i>
                    </div>
                  </li>
                  <ul class="list-group-item">
                    <li class="list-group-item">
                      Full Stack Developer - Chapter 1 - Introduction
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                    <li class="list-group-item">
                      Full Stack Developer - Chapter 2 - Creating User
                      Interfaces With HTML
                      <div class="float-end">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </div>
                    </li>
                  </ul>
                </ul>
              </ul> */}