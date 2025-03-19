import React from "react";
import { Badge, Theme } from "@radix-ui/themes";

const ContractsView = (props) => {
  const { contracts, ipAddress } = props;

  return (
    <Theme>
      <div>
        <p>
          <span className="mr-2">User IP address</span>
          <Badge size="3" color="green">
            {ipAddress}
          </Badge>
        </p>
        <pre className="mt-4">{JSON.stringify(contracts, null, 4)}</pre>
      </div>
    </Theme>
  );
};

export default ContractsView;
