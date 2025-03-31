import React, { useState } from "react";
import { Avatar, Badge, Box, Flex, Theme } from "@radix-ui/themes";

import Cards from "../components/Card";
import SelectSearch from "../components/SelectSearch";

const ContractsView = (props) => {
  const { contracts, ipAddress, country, pushEvent } = props;

  const [filteredContracts, setFilteredContracts] = useState(contracts);
  // Search bar
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("name");

  const cards = filteredContracts.map((contract) => (
    <Box key={contract.company_name.concat(contract.name)}>
      <Cards
        key={contract.company_name.concat(contract.payment_due_at)}
        contract={contract}
      />
    </Box>
  ));

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSearch = (search) => {
    setTimeout(() => {
      if (search == "") {
        setFilteredContracts(contracts);
      } else {
        const results = contracts.filter((contract) =>
          contract[filterTerm].toLowerCase().includes(search.toLowerCase()),
        );
        setFilteredContracts(results);
      }
    }, 500);
  };

  const handleFilterUpdate = (filter) => {
    if (filter !== filterTerm) {
      setFilterTerm(filter);
      setSearchTerm("");
      setFilteredContracts(contracts);
    }
  };

  return (
    <Theme accentColor="mint">
      <Flex gap="30px">
        <div>
          <Box>
            <span className="mr-2">User IP address: </span>
            <Avatar
              src={`/images/countries/${country.toLowerCase()}.svg`}
              size="1"
              fallback={country}
            />
            <Badge size="3" color="green">
              {ipAddress}
            </Badge>
          </Box>
          <Flex direction="column">
            <Box>
              <SelectSearch
                filterTerm={filterTerm}
                handleFilterUpdate={handleFilterUpdate}
                handleChange={handleChange}
                searchTerm={searchTerm}
                pushEvent={pushEvent}
              />
              {cards}
            </Box>
          </Flex>
        </div>
      </Flex>
    </Theme>
  );
};

export default ContractsView;
