import React from "react";

import { Badge, Box, Text } from "@radix-ui/themes";

const setContractStatus = (status) => {
  const capitalized_status = status.charAt(0).toUpperCase() + status.slice(1);
  if (capitalized_status === "Executed") {
    return <Badge color="blue">{capitalized_status}</Badge>;
  } else if (capitalized_status === "Signed") {
    return <Badge color="green">{capitalized_status}</Badge>;
  } else if (capitalized_status === "Pending") {
    return <Badge color="yellow">{capitalized_status}</Badge>;
  } else {
    return <Badge color="red">{capitalized_status}</Badge>;
  }
};
const Company = (props) => {
  const { name, company_name, status, recurring } = props;

  return (
    <Box>
      <Text as="div">
        <strong>Contract</strong>: {name}
      </Text>
      <Text as="div">
        <strong>Company</strong>: {company_name}
      </Text>
      <Text as="div">
        <strong>Status</strong>: {setContractStatus(status)}{" "}
      </Text>
    </Box>
  );
};

export default Company;
