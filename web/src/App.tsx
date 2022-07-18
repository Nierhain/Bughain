import { AppShell, Navbar } from "@mantine/core";
import BugForm from "./components/BugForm";

function App() {
    return (
        <AppShell
            padding="md"
            navbar={
                <Navbar height={600} p="xs" width={{ base: 300 }}>
                    <Navbar.Section>{/* Header with logo */}</Navbar.Section>
                    <Navbar.Section grow mt="md">
                        {/* Links sections */}
                    </Navbar.Section>
                    <Navbar.Section>{/* Footer with user */}</Navbar.Section>
                </Navbar>
            }>
            <BugForm />
        </AppShell>
    );
}

export default App;
