import React, {Component} from "react";
import Photo from "../../assets/icons/photo.jpg";


export default class Sidebar extends Component {
    
    render() {
        return (
            <div className="col-3 background h-100 d-flex no_padding">
              <div className="h-100 sidebar_layout shadow">
                <div className="card mb-4 zoom card_background border_radius ">
                  <div className="row g-0">
                    <div className="col-md-4 overflow_hidden align_center">
                      <img
                        src={Photo}
                        alt="..."
                        style={{
                          width: "4rem",
                          height: "4rem",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body padding_v">
                        <h5 className="card-title fw-bold">Hi Reader,</h5>
                        <p className="card-text">Here's your News!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 text-center zoom card_background border_radius">
                  <div className="card-body">
                    <h5 className="card-title fw-bolder fs-4 padding_b">
                      View Toggle
                    </h5>
                    <div className="card-body no_padding">
                      <div
                        className="align_center padding_v "
                        style={{
                          height: "4.5rem",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7rem"
                          height="3.5rem"
                          fill="currentColor"
                          className={
                            "bi bi-list-ul padding_v cursor " +
                            (this.props.listview ? " teal" : " gray box_in_l")
                          }
                          viewBox="0 0 16 16"
                          onClick={() => this.props.handletoggle()}
                          style={{
                            borderRadius: "0.625rem 0 0 0.625rem",
                            height: "5rem",
                          }}
                        >
                          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                          <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7rem"
                          height="3.5rem"
                          fill="currentColor"
                          onClick={() => this.props.handletoggle()}
                          className={
                            "bi bi-list-ul padding_v cursor " +
                            (!this.props.listview ? " teal" : " gray box_in_r")
                          }
                          viewBox="0 0 16 16"
                          style={{
                            borderRadius: "0 0.625rem 0.625rem 0",
                            height: "5rem",
                          }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center zoom card_background border_radius">
                  <div className="card-body">
                    <h5 className="card-title fw-bolder fs-4 padding_b">
                      Have a Feedback?
                    </h5>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModal1"
                      className="btn btn-lg teal font_color fw-bold"
                      style={{
                        boxShadow: "none",
                        width: "95%",
                        border: "none",
                      }}
                    >
                      We're Listening!
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

