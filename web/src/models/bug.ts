export interface BugReport {
    title: string;
    description: string;
    submitter: string;
    submittedAt: Date;
    type: ReportType;
    status: ReportState;
    priority: Priority;
}

export enum Priority {
    Low,
    Medium,
    High,
    Critical,
}

export enum ReportType {
    Bug,
    Feature,
    Suggestion,
}

export enum ReportState {
    Submitted,
    InProgress,
    Resolved,
    Closed,
    WaitingForUser,
}

export const Priorities: Record<Priority, string> = {
    0: "Niedrig",
    1: "Mittel",
    2: "Hoch",
    3: "Kritisch",
};

export const ReportTypes: Record<ReportType, string> = {
    0: "Bug",
    1: "Feature",
    2: "Verbesserungsvorschlag",
};

export const ReportStates: Record<ReportState, string> = {
    0: "Abgeschickt",
    1: "In Bearbeitung",
    2: "Erledigt",
    3: "Geschlossen",
    4: "Warten auf Ersteller",
};
