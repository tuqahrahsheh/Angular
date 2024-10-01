using System;
using System.Collections.Generic;

namespace test.Server.Models;

public partial class Product
{
    public int Id { get; set; }

    public string ProductName { get; set; } = null!;

    public string? Disc { get; set; }

    public string? ImageUrl { get; set; }

    public decimal Price { get; set; }

    public int? CategoryId { get; set; }
}
