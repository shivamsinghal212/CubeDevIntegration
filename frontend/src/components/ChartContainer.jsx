import React from "react";
import { Card, CardTitle, CardBody, Button } from "reactstrap";
import { DatePicker } from "reactstrap-date-picker";

const ChartContainer = ({
  title,
  component,
  buttonConfig = [],
  datePickerConfig = [],
}) => {
  return (
    <Card style={{ borderRadius: 0 }}>
      <CardBody>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CardTitle tag="h5">{title} </CardTitle>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            {/* <DatePicker id="example-datepicker"></DatePicker> */}
            {datePickerConfig.map((datePicker, index) => (
              <DatePicker
                id={datePicker.id}
                key={index}
                value={datePicker.value}
                onChange={datePicker.callback}
              />
            ))}
            {buttonConfig.map((button, index) => (
              <Button
                size="sm"
                key={index}
                onClick={button.callback}
                color="primary"
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <CardBody
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {component}
        </CardBody>
      </CardBody>
    </Card>
  );
};

export default ChartContainer;
