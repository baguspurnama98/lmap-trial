import "./index.css";

import React, { ReactNode } from "react";
import { Card, CardProps } from "antd";

interface Props extends CardProps {
  children: ReactNode;
  title?: ReactNode;
}

const CardComponent: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Card title={title} bordered={true} style={{ borderRadius: "10px" }}>
        {children}
      </Card>
    </div>
  );
};

export default CardComponent;
