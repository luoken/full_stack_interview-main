import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Select,
  TextField,
  Theme,
} from "@radix-ui/themes";

import Cards from "../components/Card";

const ContractsView = (props) => {
  const { contracts, ipAddress, country } = props;
  const [filteredContracts, setFilteredContracts] = useState(contracts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("name");

  const filterObject = {
    name: "Contract",
    company_name: "Company",
    recipient_name: "Recipient Name",
    recipient_email: "Recipient Email",
  };

  const cards = filteredContracts.map((contract) => (
    <Cards
      key={contract.company_name.concat(contract.payment_due_at)}
      contract={contract}
    />
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
        <Flex mt="10px" gap="5px">
          <Box>
            <Select.Root defaultValue="name" onValueChange={handleFilterUpdate}>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="name">Contract</Select.Item>
                <Select.Item value="company_name">Company</Select.Item>
                <Select.Item value="recipient_name">Recipient Name</Select.Item>
                <Select.Item value="recipient_email">
                  Recipient Email
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box width="100%">
            <TextField.Root
              placeholder={`Search ${filterObject[filterTerm]}..`}
              value={searchTerm}
              onChange={handleChange}
            ></TextField.Root>
          </Box>
        </Flex>

        {cards}
      </div>
    </Theme>
  );
};

export default ContractsView;
