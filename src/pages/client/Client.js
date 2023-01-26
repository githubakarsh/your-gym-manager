import { Input } from "antd";
import { DatePicker, Col, Row, Button } from "antd";
import { FieldWrapper } from "../../components/fieldWrapper/FieldWrapper";
import { Card } from "../../components/card/Card";

export const Client = () => {
  return (
    <Card size="md">
      <article>
        <section className="client-title-container">
          <h3>Client Details</h3>
        </section>
        <section>
          <Row>
            <Col>
              <FieldWrapper>
                <Input placeholder="First Name" />
              </FieldWrapper>
            </Col>
            <Col>
              <FieldWrapper>
                <Input placeholder="Middle Name" />
              </FieldWrapper>
            </Col>
            <Col>
              <FieldWrapper>
                <Input placeholder="Last Name" />
              </FieldWrapper>
            </Col>
          </Row>
          <Row>
            <Col>
              <FieldWrapper>
                <Input placeholder="Address 1" />
              </FieldWrapper>
            </Col>
            <Col>
              <FieldWrapper>
                <Input placeholder="Address 2" />
              </FieldWrapper>
            </Col>
            <Col>
              <FieldWrapper>
                <Input placeholder="Address 3" />
              </FieldWrapper>
            </Col>
          </Row>
          <Row>
            <Col>
              <FieldWrapper>
                <Input placeholder="Land mark (optional)" />
              </FieldWrapper>
            </Col>
            <Col>
              <FieldWrapper>
                <Input placeholder="District" />
              </FieldWrapper>
            </Col>
          </Row>
          <Row>
            <Col>
              <FieldWrapper>
                <Input placeholder="Pincode" />
              </FieldWrapper>
            </Col>
            <Col>
              <FieldWrapper>
                <Input placeholder="State" />
              </FieldWrapper>
            </Col>
          </Row>
          <Row>
            <Col>
              <FieldWrapper>
                <DatePicker placeholder="Start Date" />
              </FieldWrapper>
            </Col>
            <Col>
              <FieldWrapper>
                <DatePicker placeholder="End Date" />
              </FieldWrapper>
            </Col>
          </Row>
          <Row>
            <Col>
              <FieldWrapper>
                <Input placeholder="Amount paid" />
              </FieldWrapper>
            </Col>
            <Col>
              <FieldWrapper>
                <Input placeholder="Due amount" />
              </FieldWrapper>
            </Col>
          </Row>
          <div className="client-button-container">
            <FieldWrapper>
              <Button>Close</Button>
            </FieldWrapper>
            <FieldWrapper>
              <Button type="primary">Save</Button>
            </FieldWrapper>
            <FieldWrapper>
              <Button type="link">Cancel Subscription</Button>
            </FieldWrapper>
          </div>
        </section>
      </article>
    </Card>
  );
};
