import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import allLocales from "@fullcalendar/core/locales-all";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import "./App.css";
import $ from "jquery";
import "bootstrap";
import "popper.js";
import "tooltip.js";

// import components
import Sidebar from "./components/ContentPage/Sidebar/Sidebar";

// import modal components
import CalendarModal from "./components/Modals/CalendarModal/CalendarModal";
import ActivityModal from "./components/Modals/ActivityModal/ActivityModal";

class App extends Component {
  state = {
    searchContent: "",
    date: new Date(),
    activity: {
      title: "",
      time: "",
      location: "",
    },
  };

  handleSearchChange = (search) => {
    this.setState({ searchContent: search });
  };

  onChange = (date) => this.setState({ date });

  openActivity = (title, time, location) => {
    const activity = {
      title: title,
      time: time,
      location: location,
    };

    this.setState({
      activity,
    });

    $("#activityModal").modal();
  };

  render() {
    const { searchContent, date, activity } = this.state;

    return (
      <Router>
        <div className="container-fluid">
          <div className="row my-3 content-height">
            <div className="col-1">
              <Sidebar />
            </div>
            <div className="col-11">
              <Route
                path="/start"
                render={() => (
                  <MainPage
                    date={date}
                    onChange={this.onChange}
                    openActivity={this.openActivity}
                  />
                )}
              />
              <Route path="/min-profil" render={() => <ProfilePage />} />
              <Route
                path="/sok"
                render={() => (
                  <SearchPage
                    searchContent={searchContent}
                    handleSearchChange={this.handleSearchChange}
                  />
                )}
              />
              <Route path="/support" render={() => <SupportPage />} />
            </div>
          </div>
        </div>

        <CalendarModal date={date} />
        <ActivityModal activity={activity} />
      </Router>
    );
  }
}

const MainPage = (props) => {
  return (
    <div className="row">
      <div className="col-7">
        <div className="row half-content-height">
          <div className="col-6">
            <ContentCard
              title="Mitt schema - Idag"
              extraClass="main-content-card"
            >
              <ActivityCard
                activity="Basket"
                time="17:00-18:30"
                location="Sporthallen, Sundsvall"
                openActivity={props.openActivity}
              />
              <ActivityCard
                activity="Basket"
                time="17:00-18:30"
                location="Sporthallen, Sundsvall"
                openActivity={props.openActivity}
              />
              <ActivityCard
                activity="Basket"
                time="17:00-18:30"
                location="Sporthallen, Sundsvall"
                openActivity={props.openActivity}
              />
            </ContentCard>
          </div>
          <div className="col-6">
            <ContentCard
              title="Mitt schema - Kommande"
              extraClass="main-content-card"
            >
              <ActivityCard
                activity="Innebandy"
                time="22/06/2020 18:00-19:30"
                location="Hagaskolan, Sundsvall"
                openActivity={props.openActivity}
              />
              <ActivityCard
                activity="Innebandy"
                time="22/06/2020 18:00-19:30"
                location="Hagaskolan, Sundsvall"
                openActivity={props.openActivity}
              />
              <ActivityCard
                activity="Innebandy"
                time="22/06/2020 18:00-19:30"
                location="Hagaskolan, Sundsvall"
                openActivity={props.openActivity}
              />
            </ContentCard>
          </div>
        </div>
        <div className="row mt-4 half-content-height">
          <div className="col-12">
            <ContentCard title="Allmänt" extraClass="main-content-card">
              <ActivityCard
                activity="Öppet hus"
                time="25/06/2020 17:00-18:30"
                location="Folkets hus i Skönsberg, Sundsvall"
                openActivity={props.openActivity}
              />
            </ContentCard>
          </div>
        </div>
      </div>
      <div className="col-5">
        <div className="row half-content-height">
          <div className="col-12">
            <Calendar
              value={props.date}
              showWeekNumbers={true}
              showFixedNumberOfWeeks={true}
              onChange={props.onChange}
              onClickDay={() => $("#calendarModal").modal("show")}
            />
          </div>
        </div>
        <div className="row mt-4 half-content-height">
          <div className="col-12">
            <div className="card p-3 content-hub content-card">
              <div className="row">
                <div className="col-12 my-auto">
                  <h6 className="my-auto">
                    <b>Nyheter:</b>
                  </h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide news-carousel"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-12">
                                <img
                                  src="https://cdn.pixabay.com/photo/2018/07/30/03/56/basketball-3571730_960_720.jpg"
                                  className="img-fluid"
                                  alt="..."
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="row">
                              <div className="col-12">
                                <p className="my-auto">
                                  <b>Hejsan</b>
                                </p>
                              </div>
                            </div>
                            <div className="row mt-1">
                              <div className="col-12">
                                <small className="my-auto">
                                  Alla små glada basketspelare
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <i
                        className="fas fa-chevron-left fa-lg carousel-control-icon"
                        aria-hidden="true"
                      />
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <i
                        className="fas fa-chevron-right fa-lg carousel-control-icon"
                        aria-hidden="true"
                      />
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
};

const ContentCard = (props) => {
  return (
    <div
      className={`card p-3 content-card ${
        props.extraClass !== "" ? props.extraClass : ""
      }`}
    >
      <div className="row sticky-top content-card-title">
        <div className="col-12 my-auto">
          <h6 className="my-auto color1">
            <b>{props.title}:</b>
          </h6>
          <hr />
        </div>
      </div>

      {props.children}
    </div>
  );
};

const ActivityCard = (props) => {
  const { activity, time, location, openActivity } = props;

  return (
    <div className="row mb-2">
      <div className="col-12">
        <div className="card activity-card">
          <button
            className="btn text-left"
            onClick={() => openActivity(activity, time, location)}
          >
            <div className="row">
              <div className="col-12 my-auto">
                <p className="my-auto color1">
                  <b>{activity}</b>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-auto">
                <small className="my-auto color1">
                  <i className="far fa-clock" /> {time}
                </small>
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-auto">
                <small className="my-auto color1">
                  <i className="fas fa-map-marker-alt" /> {location}
                </small>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfilePage = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <div className="card p-3 mb-4 profile-content-card">
          <div className="row my-auto">
            <div className="col-3 my-auto">
              <img
                className="img-thumbnail img-profile-pic"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/20131005_-_Open_LFB_-_Villeneuve_d%27Ascq-Basket_Landes_077.jpg/320px-20131005_-_Open_LFB_-_Villeneuve_d%27Ascq-Basket_Landes_077.jpg"
              />
            </div>
            <div className="col-9 my-auto">
              <p className="my-auto">Erik Näsberg</p>
              <small className="my-auto">
                Håller på med innebandy, basket, schack, etc.
              </small>
            </div>
          </div>
        </div>
        <ContentCard title="Föreningar" extraClass="team-content-card">
          <TeamCard
            team="Sundsvall Dragons"
            icon="fas fa-basketball-ball"
            activity="Basket"
          />
          <TeamCard
            team="Sundsvalls schackklubb"
            icon="fas fa-chess-king"
            activity="Schack"
          />
        </ContentCard>
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col-8">
            <ContentCard
              title="Kontaktuppgifter"
              extraClass="contact-content-card"
            >
              <div className="row">
                <ContactInput type="text" label="Telefon" />
                <ContactInput type="text" label="Mejladress" />
              </div>
              <div className="row mt-3">
                <ContactInput type="text" label="Telefon - Vårdnadshavare 1" />
                <ContactInput type="text" label="Telefon - Vårdnadshavare 2" />
              </div>
            </ContentCard>
          </div>
          <div className="col-4">
            <div className="card p-5"></div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <FullCalendar
              defaultView="dayGridWeek"
              plugins={[dayGridPlugin]}
              height="auto"
              locale="sv"
              firstDay={1}
              events={[
                {
                  title: "Basket",
                  start: "2020-06-22T17:00:00",
                  end: "2020-06-22T18:30:00",
                  backgroundColor: "green",
                  borderColor: "green",
                },
                {
                  title: "Basket",
                  start: "2020-06-22T17:00:00",
                  end: "2020-06-22T18:30:00",
                  backgroundColor: "green",
                  borderColor: "green",
                },
                {
                  title: "Basket",
                  start: "2020-06-22T17:00:00",
                  end: "2020-06-22T18:30:00",
                  backgroundColor: "green",
                  borderColor: "green",
                },
                {
                  title: "Innebandy",
                  start: "2020-06-22T17:00:00",
                  end: "2020-06-23T19:30:00",
                  backgroundColor: "red",
                  borderColor: "red",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamCard = (props) => {
  const { team, icon, activity } = props;

  return (
    <div className="row mb-2">
      <div className="col-12">
        <div className="card team-card">
          <button className="btn text-left">
            <div className="row">
              <div className="col-12 my-auto">
                <p className="my-auto">
                  <b>{team}</b>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-auto">
                <small className="my-auto">
                  <i className={icon} /> {activity}
                </small>
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-auto">
                <small className="my-auto"></small>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactInput = (props) => {
  const { type, label } = props;

  return (
    <div className="col-6">
      <label className="color1">{label}:</label>
      <input type={type} className="form-control" />
    </div>
  );
};

const SearchPage = (props) => {
  const { searchContent, handleSearchChange } = props;

  return (
    <>
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="card p-3 content-card">
            <div className="row">
              <div className="col-6 my-auto">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Sök..."
                  onChange={() => handleSearchChange("search")}
                  style={{
                    backgroundColor: "#f4af1b",
                    color: "#00154f",
                  }}
                />
              </div>
              <div className="col-6 my-auto">
                <div className="row">
                  <CategoryButton
                    icon="fas fa-users"
                    title="Föreningar"
                    handleSearchChange={handleSearchChange}
                  />
                  <CategoryButton
                    icon="fas fa-running"
                    title="Aktiviteter"
                    handleSearchChange={handleSearchChange}
                  />
                  <CategoryButton
                    icon="fas fa-building"
                    title="Anläggningar"
                    handleSearchChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {searchContent === "search" && <SearchContent />}
      {searchContent === "category" && <CategoryCard />}
    </>
  );
};

const CategoryButton = (props) => {
  const { icon, title, handleSearchChange } = props;

  return (
    <div className="col-4">
      <button
        className="btn btn-secondary btn-sm btn-100"
        onClick={() => handleSearchChange("category")}
      >
        <i className={`${icon} fa-lg`} /> {title}
      </button>
    </div>
  );
};

const SearchContent = (props) => {
  return (
    <div className="row mt-4">
      <div className="col-10 mx-auto">
        <div className="card p-5 content-card"></div>
      </div>
    </div>
  );
};

const CategoryCard = (props) => {
  return (
    <div className="row mt-4">
      <div className="col-10 mx-auto">
        <div className="card p-3 content-card">
          <div className="row">
            <CategoryContent title="Sundsvall">
              <CategoryLink title="Hagaskolan" />
              <CategoryLink title="Sporthallen" />
              <CategoryLink title="Sticksjöskolan" />
            </CategoryContent>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryContent = (props) => {
  const { title } = props;

  return (
    <div className="col-3 mb-4">
      <div className="row mb-1">
        <div className="col-12">
          <p className="my-auto">
            <b>{title}</b>
          </p>
        </div>
      </div>
      {props.children}
    </div>
  );
};

const CategoryLink = (props) => {
  const { title } = props;

  return (
    <div className="row">
      <div className="col-12">
        <a href="#" className="my-auto category-link">
          <small>{title}</small>
        </a>
      </div>
    </div>
  );
};

const SupportPage = (props) => {
  return (
    <div className="row">
      <div className="col-12">Hej</div>
    </div>
  );
};

export default App;
