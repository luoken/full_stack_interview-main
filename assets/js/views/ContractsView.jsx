import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  CheckboxCards,
  CheckboxGroup,
  Flex,
  Heading,
  Separator,
  Text,
  Theme,
} from "@radix-ui/themes";

import Cards from "../components/Card";
import SelectSearch from "../components/SelectSearch";

const ContractsView = (props) => {
  const { contracts, ipAddress, country } = props;

  const [filteredContracts, setFilteredContracts] = useState(contracts);

  // Search bar
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("name");

  // Filters
  const [statusFilter, setStatusFilter] = useState([]);
  const [recurringFilter, setRecurringFilter] = useState([]);

  const cards = filteredContracts.map((contract) => (
    <Box>
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

  const handleStatusFilter = (filters) => {
    if (filters.length === 0) {
      setStatusFilter([]);
      setFilteredContracts(contracts);
    } else {
      const results = contracts.filter((contract) =>
        filters.includes(contract["status"]),
      );
      setFilteredContracts(results);
    }
  };

  const handleRecurringFilter = (filters) => {
    if (filters.length === 0 || filters.length === 2) {
      setRecurringFilter([]);
      setFilteredContracts(contracts);
    } else {
      const results = contracts.filter((contract) => {
        return filters.includes(contract["recurring"].toString());
      });

      setFilteredContracts(results);
    }
  };

  const handleInitialLoad = () => {
    setFilteredContracts(contracts);
    return filteredContracts;
  };

  return (
    <Theme accentColor="mint">
      <Flex gap="30px">
        {/* <div>
          <Flex direction="column">
            <Box pb="20px">
              <Text>
                <Heading as="h1" size="3">
                  FILTERS
                </Heading>
                <Separator size="3" />
              </Text>
            </Box>
            <Box>
              <Text>
                <Heading as="h2" size="3" color="gray">
                  Status
                </Heading>
                <Separator size="3" />
                <CheckboxGroup.Root
                  name="status"
                  onValueChange={handleStatusFilter}
                >
                  <CheckboxGroup.Item value="pending">
                    Pending
                  </CheckboxGroup.Item>
                  <CheckboxGroup.Item value="signed">Signed</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="executed">
                    Executed
                  </CheckboxGroup.Item>
                </CheckboxGroup.Root>
              </Text>

              <Text>
                <Heading as="h2" size="3" color="gray">
                  Recurring
                </Heading>
                <Separator size="3" />
                <CheckboxGroup.Root
                  defaultValue={recurringFilter}
                  name="recurring"
                  onValueChange={handleRecurringFilter}
                >
                  <CheckboxGroup.Item value="true">True</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="false">False</CheckboxGroup.Item>
                </CheckboxGroup.Root>
              </Text>
            </Box>
          </Flex>
        </div> */}
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
              />
              {filteredContracts.length === 0 ? handleInitialLoad() : cards}
            </Box>
          </Flex>
        </div>
      </Flex>
    </Theme>
  );
};

export default ContractsView;
