import { AppShell, Footer, Group, Header, Text } from "@mantine/core";

export default function ApplicationContainer({ children }) {
  return (
    <AppShell
      styles={{ main: { background: "#FFFFFF", width: "100vh", height: "100vh", paddingLeft: "0px" } }}
      fixed
      footer={<Footer height={60} p="md">
        <Group position="apart" spacing="xl">
          <Text size="sm"><span style={{fontWeight: "bolder"}}>🥚 List Time:</span> 0h 25m</Text>
          <Text size="sm"><span style={{fontWeight: "bolder"}}>🌈 End Time:</span> 7:51pm</Text>
        </Group>
      </Footer>}
      header={<Header height="70" p="md">
        <Group position="apart" height="100%">
          <Text size="lg" weight="bolder">Alpaca Activity.</Text>
        </Group>
      </Header>}
    >
      {children}
    </AppShell>
  )
}
