import React from "react";
import { Avatar, Badge, Theme } from "@radix-ui/themes";
import Cards from "../components/Card";

const ContractsView = (props) => {
  const { contracts, ipAddress, country } = props;

  const cards = contracts.map((contract) => (
    <Cards
      key={contract.company_name.concat(contract.payment_due_at)}
      contract={contract}
    />
  ));

  return (
    <Theme>
      <div>
        <p>
          <span className="mr-2">User IP address: </span>
          <Avatar
            src={`/images/countries/${country.toLowerCase()}.svg`}
            size="1"
            fallback={country}
          />
          <Badge size="3" color="green">
            {ipAddress}
          </Badge>
        </p>
        {cards}
      </div>
    </Theme>
  );
};

export default ContractsView;
