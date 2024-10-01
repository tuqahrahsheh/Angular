using System;
using System.Collections.Generic;

namespace test.Server.Models;

public partial class Category
{
    public int Id { get; set; }

    public string CategoryName { get; set; } = null!;

    public string? Img { get; set; }

    public string? Disc { get; set; }
}
