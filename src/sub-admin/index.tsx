import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Row } from "antd";
import "./style.css";

export const SubAdmin = () => {
  return (
    <div className="sub-admin">
      <Row gutter={24}>
        <Col span={17}>
          <h1 className="page-title-heading">Sub Admin List</h1>
        </Col>
        <Col span={7}>
          <div className="top-button">
            <Input
              className="search"
              placeholder="Search by Title"
              allowClear
              prefix={<SearchOutlined />}
            />
            <Button className="create-button" type="primary">
              {" "}
              <PlusCircleOutlined /> Create
            </Button>
          </div>
        </Col>
      </Row>
      <Row gutter={24}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
          <Col span={12} xs={24} xl={12} sm={24} md={24} lg={24}>
            <Card className="detail-card">
              <Row gutter={24}>
                <Col span={6}>
                  <div className="card-logo">
                    <span>A{data}</span>
                  </div>
                </Col>
                <Col span={18} className="card-content-detail">
                  <div className="card-person-name">
                    <h3 className="name">Name{data}</h3>
                    <p className="status">Active</p>
                  </div>
                  <p className="email">abc@gmail.com</p>
                  <div className="card-detail">
                    <h3 className="mobile">+911234567890</h3>
                    <p className="detail">Detail</p>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
