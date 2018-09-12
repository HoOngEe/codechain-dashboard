import * as React from "react";
import "./ConnectionGraphContainer.css";

import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConnectionGraph } from "../ConnectionGraph/ConnectionGraph";

interface Props {
  className?: string;
}
export class ConnectionGraphContainer extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { className } = this.props;
    return (
      <div className={`connection-graph-container ${className}`}>
        <div className="connection-graph-header">
          <h5 className="mb-0">
            <FontAwesomeIcon className="mr-2" icon={faCodeBranch} />
            Node Connection Graph
          </h5>
        </div>
        <div className="connection-graph-body">
          <ConnectionGraph className="connection-graph" />
        </div>
      </div>
    );
  }
}