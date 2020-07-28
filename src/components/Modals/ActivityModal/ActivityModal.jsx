import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import allLocales from "@fullcalendar/core/locales-all";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import $ from "jquery";

const ActivityModal = (props) => {
  const { title, time, location } = props.activity;
  const address = "Kungsvägen 26, 85640 Sundsvall";

  return (
    <div
      className="modal fade"
      id="activityModal"
      data-keyboard="false"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel2"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel2">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <button
                  className="btn btn-sm text-left my-auto p-0"
                  onClick={() => $("#activityTimeCollapse").collapse("toggle")}
                >
                  <i className="far fa-clock" /> {time}
                </button>
                <div className="collapse" id="activityTimeCollapse">
                  <hr />
                  <div className="row mt-2">
                    <div className="col-12">
                      <FullCalendar
                        defaultView="dayGridDay"
                        plugins={[dayGridPlugin]}
                        header={false}
                        locale="sv"
                        height="40"
                        events={[
                          {
                            title: "Basket",
                            start: "2020-06-21T17:00:00",
                            end: "2020-06-21T18:30:00",
                            backgroundColor: "green",
                            borderColor: "green",
                          },
                          {
                            title: "Innebandy",
                            start: "2020-06-21T17:00:00",
                            end: "2020-06-21T19:30:00",
                            backgroundColor: "red",
                            borderColor: "red",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <button
                  className="btn btn-sm text-left my-auto p-0"
                  onClick={() =>
                    $("#activityLocationCollapse").collapse("toggle")
                  }
                >
                  <i className="fas fa-map-marker-alt" /> {location}
                </button>
                <div className="collapse" id="activityLocationCollapse">
                  <hr />
                  <p className="my-auto">{address}</p>
                  <div className="row mt-3">
                    <div className="col-6">
                      <button className="btn btn-sm btn-outline-secondary btn-100">
                        Anläggning
                      </button>
                    </div>
                    <div className="col-6">
                      <a
                        className="btn btn-sm btn-primary btn-100"
                        href={`https://www.google.se/maps/place/${address
                          .split(" ")
                          .join("+")}`}
                      >
                        Hitta hit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <p className="my-auto">Beskrivning:</p>
                <small className="my-auto">A-lag</small>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
