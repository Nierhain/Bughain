namespace Bughain.API.Models
{
    public enum ReportState
    {
        Created,
        Assigned,
        NoIssueFound,
        WaitingForFeedback,
        Resolved,
        Rejected,
    }
    public enum ReportType
    {
        Bug,
        Suggestion,
        Typo
    }

    public enum Priority
    {
        Low,
        Medium,
        High,
        Critical
    }

    public enum MediaType
    {
        Image,
        Video,
        Audio,
        Mail
    }
}
