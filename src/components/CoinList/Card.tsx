import "./index.css";

import React, { ReactNode } from "react";
import { Card, CardProps } from "antd";

interface Props extends CardProps {
  //   actions?: Array<ReactNode>;
  children: ReactNode;
  //   className?: string;
  //   cover?: ReactNode;
  //   extra?: ReactNode;
  //   heightFull?: boolean;
  title?: ReactNode;
  //   [x: string]: any;
}

const CardComponent: React.FC<Props> = ({
  title,
  children,
  //   extra,
  //   children,
  //   cover,
  //   className,
  //   actions,
  //   heightFull,
  //   ...rest
}) => {
  return (
    <div>
      <Card
        // className={clsx("card", { heightFull: heightFull }, className)}
        title={title}
        // extra={extra ? extra : null}
        // cover={cover}
        // actions={actions}
        bordered={true}
        style={{ borderRadius: "10px" }}
        // {...rest}
      >
        {/* {children} */}
        {children}
      </Card>
    </div>
  );
};

export default CardComponent;
