import { Card, Col, Row } from "antd";
import "./style.css";
import { CalendarOutlined, MoreOutlined } from "@ant-design/icons";

export const DashboardComponent = () => {
  return (
    <div className="dashboard">
      <h1 className="page-title-heading">Welcome to Connect2Investors!</h1>
      <Row gutter={24} justify={"start"}>
        <Col span={8} xs={24} xl={8} sm={24} md={24} lg={8}>
          <Card hoverable className="dashboard-card">
            <div>
              <h1 className="title">No.of Investors</h1>
              <div className="card-count">
                <h3 className="count">50</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <mask
                    id="mask0_25_4446"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <rect width="80" height="80" fill="#0E5493" />
                  </mask>
                  <g mask="url(#mask0_25_4446)">
                    <path
                      d="M53.3327 36.667C54.2771 36.667 55.0688 36.3476 55.7077 35.7087C56.3466 35.0698 56.666 34.2781 56.666 33.3337C56.666 32.3892 56.3466 31.5975 55.7077 30.9587C55.0688 30.3198 54.2771 30.0003 53.3327 30.0003C52.3882 30.0003 51.5966 30.3198 50.9577 30.9587C50.3188 31.5975 49.9993 32.3892 49.9993 33.3337C49.9993 34.2781 50.3188 35.0698 50.9577 35.7087C51.5966 36.3476 52.3882 36.667 53.3327 36.667ZM26.666 30.0003H43.3327V23.3337H26.666V30.0003ZM14.9993 70.0003C13.1105 63.667 11.2493 57.3475 9.41602 51.042C7.58268 44.7364 6.66602 38.2781 6.66602 31.667C6.66602 26.5559 8.44379 22.2225 11.9993 18.667C15.5549 15.1114 19.8882 13.3337 24.9993 13.3337H41.666C43.2771 11.2225 45.2355 9.58366 47.541 8.41699C49.8466 7.25033 52.3327 6.66699 54.9993 6.66699C56.3882 6.66699 57.5688 7.1531 58.541 8.12533C59.5132 9.09755 59.9993 10.2781 59.9993 11.667C59.9993 11.9448 59.8605 12.5837 59.5827 13.5837C59.3605 14.1948 59.1521 14.8198 58.9577 15.4587C58.7632 16.0975 58.6105 16.7503 58.4993 17.417L66.0827 25.0003H73.3327V48.2503L63.916 51.3337L58.3327 70.0003H39.9993V63.3337H33.3327V70.0003H14.9993Z"
                      fill="#0E5493"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8} xs={24} xl={8} sm={24} md={24} lg={8}>
          <Card hoverable className="dashboard-card">
            <div>
              <h1 className="title">No.of Mentors</h1>
              <div className="card-count">
                <h3 className="count">20</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <mask
                    id="mask0_25_4449"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <rect width="80" height="80" fill="#0E5493" />
                  </mask>
                  <g mask="url(#mask0_25_4449)">
                    <path
                      d="M40.0007 30.0003L28.334 18.3337L40.0007 6.66699L51.6673 18.3337L40.0007 30.0003ZM3.33398 66.667V53.3337C3.33398 51.4448 3.98676 49.8614 5.29232 48.5837C6.59787 47.3059 8.16732 46.667 10.0007 46.667H20.9173C22.0284 46.667 23.084 46.9448 24.084 47.5003C25.084 48.0559 25.8895 48.8059 26.5007 49.7503C28.1118 51.917 30.0979 53.6114 32.459 54.8337C34.8201 56.0559 37.334 56.667 40.0007 56.667C42.7229 56.667 45.2645 56.0559 47.6257 54.8337C49.9868 53.6114 51.9451 51.917 53.5007 49.7503C54.2229 48.8059 55.0701 48.0559 56.0423 47.5003C57.0145 46.9448 58.0284 46.667 59.084 46.667H70.0007C71.8895 46.667 73.4729 47.3059 74.7507 48.5837C76.0284 49.8614 76.6673 51.4448 76.6673 53.3337V66.667H53.334V59.0837C51.3895 60.4725 49.2923 61.5281 47.0423 62.2503C44.7923 62.9725 42.4451 63.3337 40.0007 63.3337C37.6118 63.3337 35.2784 62.9587 33.0007 62.2087C30.7229 61.4587 28.6118 60.3892 26.6673 59.0003V66.667H3.33398ZM13.334 43.3337C10.5562 43.3337 8.1951 42.3614 6.25065 40.417C4.30621 38.4725 3.33398 36.1114 3.33398 33.3337C3.33398 30.5003 4.30621 28.1253 6.25065 26.2087C8.1951 24.292 10.5562 23.3337 13.334 23.3337C16.1673 23.3337 18.5423 24.292 20.459 26.2087C22.3757 28.1253 23.334 30.5003 23.334 33.3337C23.334 36.1114 22.3757 38.4725 20.459 40.417C18.5423 42.3614 16.1673 43.3337 13.334 43.3337ZM66.6673 43.3337C63.8895 43.3337 61.5284 42.3614 59.584 40.417C57.6395 38.4725 56.6673 36.1114 56.6673 33.3337C56.6673 30.5003 57.6395 28.1253 59.584 26.2087C61.5284 24.292 63.8895 23.3337 66.6673 23.3337C69.5007 23.3337 71.8757 24.292 73.7923 26.2087C75.709 28.1253 76.6673 30.5003 76.6673 33.3337C76.6673 36.1114 75.709 38.4725 73.7923 40.417C71.8757 42.3614 69.5007 43.3337 66.6673 43.3337Z"
                      fill="#0E5493"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8} xs={24} xl={8} sm={24} md={24} lg={8}>
          <Card hoverable className="dashboard-card">
            <div>
              <h1 className="title">No.of Startups</h1>
              <div className="card-count">
                <h3 className="count">60</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="82"
                  viewBox="0 0 80 82"
                  fill="none"
                >
                  <mask
                    id="mask0_25_4452"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="82"
                  >
                    <rect width="80" height="81.2121" fill="#0E5493" />
                  </mask>
                  <g mask="url(#mask0_25_4452)">
                    <path
                      d="M3.82487 37.0278L19.734 21.1187C20.6178 20.2348 21.6595 19.6035 22.859 19.2247C24.0585 18.8459 25.2895 18.7828 26.5522 19.0353L31.4764 20.077C28.0673 24.1174 25.3842 27.779 23.4272 31.0619C21.4701 34.3447 19.5761 38.322 17.7453 42.9937L3.82487 37.0278ZM23.2378 45.6452C24.6898 41.0997 26.6626 36.8068 29.1563 32.7664C31.65 28.726 34.6645 24.9381 38.1999 21.4028C43.7554 15.8472 50.1001 11.6963 57.234 8.95011C64.3678 6.20389 71.0282 5.3674 77.2151 6.44064C78.2883 12.6275 77.4676 19.2879 74.7529 26.4217C72.0383 33.5555 67.9032 39.9002 62.3476 45.4558C58.8754 48.928 55.0875 51.9425 50.984 54.4994C46.8804 57.0562 42.556 59.0606 38.0105 60.5126L23.2378 45.6452ZM49.3741 34.2816C50.8262 35.7336 52.6096 36.4596 54.7245 36.4596C56.8394 36.4596 58.6229 35.7336 60.0749 34.2816C61.5269 32.8295 62.2529 31.0461 62.2529 28.9312C62.2529 26.8163 61.5269 25.0328 60.0749 23.5808C58.6229 22.1288 56.8394 21.4028 54.7245 21.4028C52.6096 21.4028 50.8262 22.1288 49.3741 23.5808C47.9221 25.0328 47.1961 26.8163 47.1961 28.9312C47.1961 31.0461 47.9221 32.8295 49.3741 34.2816ZM46.7226 79.8308L40.662 65.9104C45.3337 64.0795 49.3268 62.1856 52.6412 60.2285C55.9556 58.2715 59.633 55.5884 63.6734 52.1793L64.6204 57.1035C64.8729 58.3662 64.8097 59.613 64.431 60.8441C64.0522 62.0751 63.4209 63.1326 62.537 64.0164L46.7226 79.8308ZM9.88548 57.7664C12.0951 55.5568 14.7782 54.4362 17.9347 54.4047C21.0913 54.3731 23.7744 55.4621 25.984 57.6717C28.1936 59.8813 29.2984 62.5644 29.2984 65.721C29.2984 68.8775 28.1936 71.5606 25.984 73.7702C24.4057 75.3485 21.77 76.7058 18.0768 77.8422C14.3836 78.9785 9.28573 79.9886 2.7832 80.8725C3.66704 74.3699 4.67714 69.2879 5.81351 65.6263C6.94987 61.9646 8.3072 59.3447 9.88548 57.7664Z"
                      fill="#0E5493"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <br />
      <Row gutter={24} justify={"start"}>
        <Col span={24}>
          <Card className="calendar-schedule">
            <div className="calendar-schedule-title">
              <h1 className="title">Calendar Schedule</h1>
              <MoreOutlined size={50} />
            </div>
            <table width={"100%"} className="meeting-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Meeting Importance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table-title-row">
                      <div className="calender-table-image">
                        <img src="https://img.freepik.com/premium-photo/look-up-pine-trees-sky-winter-landscape-nature-background-low-angle-view-high-quality-photo_516328-134.jpg?w=2000" alt="" />
                      </div>
                      <div className="table-calender-title">
                        <h4>Meeting1</h4>
                        <p>
                          <CalendarOutlined
                            style={{ fontSize: "16px", marginRight: "10px" }}
                          />
                          21 Jul | 08:20-10:30
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="calender-table-description">a list of topics, action items, and activities you want to discuss during the meeting.</td>
                  <td className="calender-table-importance"><span className="meeting-importance">High</span></td>

                </tr>
                <tr>
                <td>
                    <div className="table-title-row">
                      <div className="calender-table-image">
                        <img src="https://img.freepik.com/premium-photo/look-up-pine-trees-sky-winter-landscape-nature-background-low-angle-view-high-quality-photo_516328-134.jpg?w=2000" alt="" />
                      </div>
                      <div className="table-calender-title">
                        <h4>Meeting2</h4>
                        <p>
                          <CalendarOutlined
                            style={{ fontSize: "16px", marginRight: "10px" }}
                          />
                          21 Jul | 08:20-10:30
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="calender-table-description">Topics, action items, and activities you want to discuss during the meeting.</td>
                  <td className="calender-table-importance"><span className="meeting-importance">High</span></td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
