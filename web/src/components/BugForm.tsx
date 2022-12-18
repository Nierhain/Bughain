import { Grid, Select, Textarea, TextInput } from "@mantine/core";
import { ReportTypes } from "../models/bug";

type SelectType = {
    value: string |number,
    label: string
}
const TypeToSelect = () => {
    const options: SelectType[] = []
    for ( const [key, value] of Object.entries(ReportTypes)) {
        options.push({value: key, label: value})
    }
    return options
}

export default function () {
    return (
        <Grid>
            <Grid.Col span={12}><TextInput placeholder="Titel..." label="Titel" required /></Grid.Col>
            <Grid.Col span={12}><Textarea placeholder="Bug ist dieses und jenes..." label="Beschreibung" required/></Grid.Col>
            <Grid.Col span={4}><Select data={TypeToSelect()} /></Grid.Col>
            <Grid.Col span={4}>Typ</Grid.Col>
            <Grid.Col span={4}>Submit</Grid.Col>
        </Grid>
    )
}