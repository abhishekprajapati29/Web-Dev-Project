import React, { Component } from "react";

export default class VerticalCard extends Component {
  state = {
    start: 0,
    end: 5,
    url: '',
    page_mid_value: 2,
  };

  handlePage = (number) => {
    this.setState({
      end: number * 5,
      start: number * 5 - 5,
    });
  };

  handleIncrement = () => {
    this.setState({
      page_mid_value: this.state.page_mid_value + 1,
      start: this.state.start + 5,
      end: this.state.end + 5,
    });
  };

  handleDecrement = () => {
    this.setState({
      page_mid_value: this.state.page_mid_value - 1,
      start: this.state.start - 5,
      end: this.state.end - 5,
    });
  };

  handleUrl = (data) => {
      this.setState({
          url: data.link
      })
  }

  render() {
    return (
      <>
        {this.props.data.slice(this.state.start, this.state.end).map((data) => (
          <div
            key={data.id}
            className="cross mb-3 cursor appear"
            style={{ maxHeight: "8pc", minHeight: "8pc" }}
          >
            <div
              type="button"
              className="card zoom card_background border_radius "
              data-toggle="modal"
              onClick={()=> this.handleUrl(data)}
              data-target="#exampleModal"
              style={{ width: "92%" }}
            >
              <div className="row g-0 " style={{ flexFlow: "initial" }}>
                {data.image ? (
                  <div
                    className=" overflow_hidden  p-4"
                    style={{ width: "fit-content" }}
                  >
                    <img
                      src={data.image}
                      alt="..."
                      style={{
                        width: "5rem",
                        height: "5rem",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className=" overflow_hidden  p-4"
                    style={{ width: "fit-content" }}
                  ></div>
                )}

                <div className="card-body pt-4 pb-4 ps-0 pe-4 ">
                  <h5 className="card-title fw-bold">
                    {data.title.length >= 80
                      ? data.title.slice(0, 80) + "..."
                      : data.title}
                  </h5>
                  <p className="card-text no_margin">
                    {String(data.summary).length >= 100
                      ? String(data.summary).slice(0, 100) + "..."
                      : data.summary}
                  </p>
                  <p className="card-text pt-1" style={{ color: "grey" }}>
                    {" "}
                    {data.published}
                  </p>
                </div>
              </div>
            </div>
            

            <div
              className="zoom card_background"
              onClick={() => this.props.handleRemove(data.id)}
              style={{
                alignSelf: "center",
                margin: "1rem",
                padding: "1rem",
                color: "red",
                borderRadius: "50%",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
          </div>
        ))}
        <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{minWidth: '50pc', minHeight: '40pc'}}>
                <div className="modal-content" style={{minWidth: '50pc', minHeight: '40pc'}}>
                  <div className="modal-body" style={{minWidth: '50pc', minHeight: '40pc'}}>
                    <iframe title=".." className="responsive-iframe" src={this.state.url} />
                  </div>
                </div>
              </div>
            </div>
        <div className="align_center pt-3">
          {this.state.page_mid_value - 2 !== 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              onClick={() => this.handleDecrement()}
              height="16"
              fill="currentColor"
              className="bi bi-chevron-double-left cursor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
              <path
                fillRule="evenodd"
                d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          ) : null}

          <div
            className={
              "zoom align_center ms-2 me-2 cursor " +
              ((this.state.page_mid_value - 1) * 5 === this.state.end
                ? "card_background "
                : "gray")
            }
            onClick={() => this.handlePage(this.state.page_mid_value - 1)}
            style={{
              alignSelf: "center",
              width: "2.3rem",
              height: "2.3rem",
              borderRadius: "50%",
            }}
          >
            {this.state.page_mid_value - 1}
          </div>
          <div
            className={
              "zoom align_center ms-2 me-2 cursor " +
              (this.state.page_mid_value * 5 === this.state.end
                ? "card_background "
                : "gray")
            }
            onClick={() => this.handlePage(this.state.page_mid_value)}
            style={{
              alignSelf: "center",
              width: "2.3rem",
              height: "2.3rem",
              borderRadius: "50%",
            }}
          >
            {this.state.page_mid_value}
          </div>
          <div
            className={
              "zoom align_center ms-2 me-2 cursor " +
              ((this.state.page_mid_value + 1) * 5 === this.state.end
                ? "card_background "
                : "gray")
            }
            onClick={() => this.handlePage(this.state.page_mid_value + 1)}
            style={{
              alignSelf: "center",
              width: "2.3rem",
              height: "2.3rem",
              borderRadius: "50%",
            }}
          >
            {this.state.page_mid_value + 1}
          </div>
          {(this.state.page_mid_value + 2) * 5 <= this.props.data.length ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              onClick={() => this.handleIncrement()}
              fill="currentColor"
              className="bi bi-chevron-double-right cursor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
              />
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          ) : null}
        </div>
      </>
    );
  }
}
