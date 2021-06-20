import React, { Component } from "react";

export default class HorizontalCard extends Component {
  state = {
    start: 0,
    end: 6,
    url: "",
    page_mid_value: 2,
  };

  handlePage = (number) => {
    this.setState({
      end: number * 6,
      start: number * 6 - 6,
    });
  };

  handleIncrement = () => {
    this.setState({
      page_mid_value: this.state.page_mid_value + 1,
      start: this.state.start + 6,
      end: this.state.end + 6,
    });
  };

  handleDecrement = () => {
    this.setState({
      page_mid_value: this.state.page_mid_value - 1,
      start: this.state.start - 6,
      end: this.state.end - 6,
    });
  };
  handleUrl = (data) => {
    this.setState({
      url: data.link,
    });
  };

  render() {
    return (
      <div className="d-flex appear" style={{ flexFlow: "wrap" }}>
        {this.props.data.slice(this.state.start, this.state.end).map((data) => (
          <div key={data.id} className="col-4 cursor zoom ">
            <div
              className="card m-4 border_radius card_background"
              style={{
                alignItems: "flex-end",
                maxHeight: "21pc",
                minHeight: "21pc",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => this.props.handleRemove(data.id)}
                width="2.25rem"
                height="2.25rem"
                fill="currentColor"
                className="bi bi-x"
                color="red"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
              <div
                className="card-body"
                style={{ padding: "0 1rem" }}
                data-toggle="modal"
                onClick={() => this.handleUrl(data)}
                data-target="#exampleModal"
                type="button"
              >
                <h5 className="card-title font_color fw-bold">
                  {" "}
                  {data.title.length >= 45
                    ? data.title.slice(0, 45) + "..."
                    : data.title}
                </h5>
                <p className="card-text">
                  {String(data.summary).length >= 70
                    ? String(data.summary).slice(0, 70) + "..."
                    : data.summary}
                </p>
                <p className="card-text no_margin" style={{ color: "grey" }}>
                  {data.published}
                </p>
              </div>
              {data.image ? (
                <img
                  src={data.image}
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => this.props.handleData(data)}
                  className="card-img-top img_card"
                  alt="..."
                />
              ) : null}
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
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            style={{ minWidth: "50pc", minHeight: "40pc" }}
          >
            <div
              className="modal-content"
              style={{ minWidth: "50pc", minHeight: "40pc" }}
            >
              <div
                className="modal-body"
                style={{ minWidth: "50pc", minHeight: "40pc" }}
              >
                <iframe
                  title=".."
                  className="responsive-iframe"
                  src={this.state.url}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="align_center pt- w-100">
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
              ((this.state.page_mid_value - 1) * 6 === this.state.end
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
              (this.state.page_mid_value * 6 === this.state.end
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
              ((this.state.page_mid_value + 1) * 6 === this.state.end
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
          {(this.state.page_mid_value + 2) * 6 <= this.props.data.length ? (
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
      </div>
    );
  }
}
