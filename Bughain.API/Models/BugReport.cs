using Bughain.API.Models;

namespace Bughain.API.Models
{
    public record BugReport
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Guid App { get; set; }
        public Guid User { get; set; }
        public Guid AssignedTo { get; set; }
        public DateTime CreatedAt { get; set; }
        public ReportState State { get; set; }
        public Priority Priority { get; set; }
        public ReportType Type { get; set; }
        public List<Media> Media { get; set; } = new();
        public List<Comment> Comments { get; set; } = new();
    }

    public record Comment
    {
        public Guid Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public Guid User { get; set; }
        public DateTime CreatedAt { get; set; }
        public List<Media> Media { get; set; } = new();
    }

    public record Media
    {
        public Guid Id { get; set; }
        public MediaType Type { get; set; }
        public string Path { get; set; } = string.Empty;
    }
}
