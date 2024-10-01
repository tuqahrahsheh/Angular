using System;
using System.Collections.Generic;

namespace test.Server.Models;

public partial class Cart
{
    public int Id { get; set; }

    public int? ProductId { get; set; }

    public int Quantity { get; set; }

    public int? UsersId { get; set; }
}
