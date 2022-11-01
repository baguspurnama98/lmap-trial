import React from "react"
import { Card } from "antd"

const CardComponent: React.FC = () => {
	return (
        <div>
           <Card
			// className={clsx("card", { heightFull: heightFull }, className)}
			title={"title"}
			// extra={extra ? extra : null}
			// cover={cover}
			// actions={actions}
			bordered={true}
            style={{borderRadius:"10px"}}
			// {...rest}
		>
			{/* {children} */}
            halo
		</Card>
        </div>
    )

}

export default CardComponent