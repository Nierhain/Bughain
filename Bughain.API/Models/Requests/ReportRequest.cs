namespace Bughain.API.Models.Requests
{
    public record ReportRequest
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Guid App { get; set; }
        public Guid User { get; set; }
        public ReportState State { get; set; }
        public Priority Priority { get; set; }
        public ReportType Type { get; set; }
        public List<Media> Media { get; set; } = new();
    }
}
