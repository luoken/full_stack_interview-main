import React from "react";
import { Box, Flex, Select, TextField } from "@radix-ui/themes";
import AddContract from "./AddContract";

const filterObject = {
  name: "Contract",
  company_name: "Company",
  recipient_name: "Recipient Name",
  recipient_email: "Recipient Email",
};

const SelectSearch = (props) => {
  const {
    filterTerm,
    handleFilterUpdate,
    handleChange,
    searchTerm,
    pushEvent,
  } = props;

  return (
    <Flex mt="10px" gap="5px" flexGrow="2">
      <Box>
        <Select.Root defaultValue="name" onValueChange={handleFilterUpdate}>
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="name">Contract</Select.Item>
            <Select.Item value="company_name">Company</Select.Item>
            <Select.Item value="recipient_name">Recipient Name</Select.Item>
            <Select.Item value="recipient_email">Recipient Email</Select.Item>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box flexGrow="1">
        <TextField.Root
          placeholder={`Search ${filterObject[filterTerm]}..`}
          value={searchTerm}
          onChange={handleChange}
        ></TextField.Root>
      </Box>
      <Box>
        <AddContract pushEvent={pushEvent} />
      </Box>
    </Flex>
  );
};

export default SelectSearch;
