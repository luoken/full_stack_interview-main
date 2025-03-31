import React, { useState } from "react";
import { Avatar, Badge, Box, Flex, Select, Theme } from "@radix-ui/themes";

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
  const handleFilterSelect = (filter) => {
    const [field, sortOrder] = filter.split("--");
    if (sortOrder == "asc") {
      setFilteredContracts(sort_asc(field));
    } else {
      setFilteredContracts(sort_desc(field));
    }
  };

  const sort_asc = (field) => {
    const newSort = [...filteredContracts].sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });

    return newSort;
  };

  const sort_desc = (field) => {
    const newSort = [...filteredContracts].sort((a, b) => {
      if (a[field] < b[field]) {
        return 1;
      } else if (a[field] > b[field]) {
        return -1;
      } else {
        return 0;
      }
    });

    return newSort;
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
              <Box pt="10px">
                <span style={{ paddingRight: "10px" }}>Sort</span>
                <Select.Root onValueChange={handleFilterSelect}>
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Item value="name--asc">Contract A-Z</Select.Item>
                    <Select.Item value="name--desc">Contract Z-A</Select.Item>

                    <Select.Item value="company_name--asc">
                      Company Name A-Z
                    </Select.Item>
                    <Select.Item value="company_name--desc">
                      Company Name Z-A
                    </Select.Item>

                    <Select.Item value="recipient_name--asc">
                      Recipient Name A-Z
                    </Select.Item>
                    <Select.Item value="recipient_name--desc">
                      Recipient Name Z-A
                    </Select.Item>

                    <Select.Item value="recipient_email--asc">
                      Recipient Email A-Z
                    </Select.Item>
                    <Select.Item value="recipient_email--desc">
                      Recipient Email Z-A
                    </Select.Item>

                    <Select.Item value="status--asc">Status A-Z</Select.Item>
                    <Select.Item value="status--desc">Status Z-A</Select.Item>

                    <Select.Item value="payment_due_at--asc">
                      Payment Due At A-Z
                    </Select.Item>
                    <Select.Item value="payment_due_at--desc">
                      Payment Due At Z-A
                    </Select.Item>

                    <Select.Item value="payment_currency--asc">
                      Payment Currency A-Z
                    </Select.Item>
                    <Select.Item value="payment_currency--desc">
                      Payment Currency Z-A
                    </Select.Item>

                    <Select.Item value="payment_amount--asc">
                      Payment Amount A-Z
                    </Select.Item>
                    <Select.Item value="payment_amount--desc">
                      Payment Amount Z-A
                    </Select.Item>

                    <Select.Item value="recurring--asc">
                      Recurring A-Z
                    </Select.Item>
                    <Select.Item value="recurring--desc">
                      Recurring Z-A
                    </Select.Item>
                  </Select.Content>
                </Select.Root>
              </Box>
              {cards}
            </Box>
          </Flex>
        </div>
      </Flex>
    </Theme>
  );
};

export default ContractsView;
