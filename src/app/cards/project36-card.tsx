import {
  Box,
  Divider,
  ErrorState,
  Flex,
  Heading,
  Image,
  LoadingSpinner,
  Text,
  Tile,
  hubspot,
} from "@hubspot/ui-extensions";
import {
  CrmAssociationPropertyList,
  CrmPropertyList,
  useCrmProperties,
} from "@hubspot/ui-extensions/crm";
import { cardConfig } from "./card-config";
import project36Logo from "./project.thirty.six.png";

hubspot.extend<"crm.record.tab">(() => <Project36Card />);

const Project36Card = () => {
  const { properties, isLoading, error } = useCrmProperties(["dealname"]);

  if (isLoading) return <LoadingSpinner label="Loading deal" />;
  if (error)
    return (
      <ErrorState title="Unable to load this deal">
        Refresh the record and check the app permissions if the problem
        continues.
      </ErrorState>
    );

  return (
    <Flex direction="column" gap="medium">
      <Tile compact>
        <Flex align="center" gap="large">
          <Image
            src={cardConfig.clientLogo}
            alt={cardConfig.clientName}
            width={cardConfig.clientLogoWidth}
          />
          <Flex direction="column" gap="small">
            <Heading>{properties.dealname || cardConfig.title}</Heading>
            <Text>{cardConfig.description}</Text>
          </Flex>
        </Flex>
      </Tile>
      {cardConfig.showAssociatedCompany && (
        <Tile compact>
          <Flex direction="column" gap="small">
            <Heading>Associated companies</Heading>
            <CrmAssociationPropertyList
              objectTypeId="0-2"
              properties={["name"]}
            />
          </Flex>
        </Tile>
      )}
      <Flex gap="large" wrap="wrap">
        {cardConfig.sections
          .filter((section) => section.properties.length > 0)
          .map((section) => (
            <Box key={section.title} flex={1}>
              <Tile compact>
                <Flex direction="column" gap="medium">
                  <Heading>{section.title}</Heading>
                  <CrmPropertyList
                    properties={section.properties}
                    direction="column"
                  />
                </Flex>
              </Tile>
            </Box>
          ))}
      </Flex>
      {cardConfig.showAdditionalSection && (
        <Tile compact>
          <Flex direction="column" gap="small">
            <Heading>{cardConfig.additionalSectionTitle}</Heading>
            <Text>{cardConfig.additionalSectionText}</Text>
          </Flex>
        </Tile>
      )}
      <Divider size="extra-small" />
      <Flex align="center" gap="small">
        <Text>Card by</Text>
        <Image src={project36Logo} alt="Project36" width={120} />
      </Flex>
    </Flex>
  );
};
