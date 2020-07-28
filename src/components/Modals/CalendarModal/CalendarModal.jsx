import React, { Component } from "react";

const CalendarModal = (props) => {
  console.log(typeof props.date);

  const ye = new Intl.DateTimeFormat("sv", { year: "numeric" }).format(
    props.date
  );
  const mo = new Intl.DateTimeFormat("sv", { month: "long" })
    .format(props.date)
    .toUpperCase();
  const weda = new Intl.DateTimeFormat("sv", { weekday: "long" })
    .format(props.date)
    .toUpperCase();

  const da = new Intl.DateTimeFormat("sv", { day: "2-digit" }).format(
    props.date
  );

  return (
    <div
      className="modal fade"
      id="calendarModal"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {`${weda} ${da} ${mo} ${ye}`}
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
                <select class="custom-select" id="inputGroupSelect01" required>
                  <option selected>Välj aktivitet...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
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

export default CalendarModal;
