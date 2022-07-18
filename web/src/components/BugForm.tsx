import { Grid, Select, Textarea, TextInput } from "@mantine/core";
import { ReportTypes } from "../models/bug";


const TypeToSelect = () => {
    for (const [key, value] in ReportTypes) {
        
    }
}

export default function () {
    return (
        <Grid>
            <Grid.Col span={12}><TextInput placeholder="Titel..." label="Titel" required /></Grid.Col>
            <Grid.Col span={12}><Textarea placeholder="Bug ist dieses und jenes..." label="Beschreibung" required/></Grid.Col>
            <Grid.Col span={4}><Select /></Grid.Col>
            <Grid.Col span={4}>Typ</Grid.Col>
            <Grid.Col span={4}>Submit</Grid.Col>
        </Grid>
    )
}