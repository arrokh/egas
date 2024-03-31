import { Box, Button, Center, Flex, Title } from "@mantine/core";
import Link from "next/link";

export default function Home() {
	return (
		<Center maw={"auto"} h={"100vh"}>
			<Flex
				mih={50}
				gap="md"
				justify="flex-start"
				align="center"
				direction="column"
				wrap="wrap"
			>
				<Title order={1}>Welcome to EGAS</Title>
				<Button component={Link} href="/flow">
					Try Now~
				</Button>
			</Flex>
		</Center>
	);
}
