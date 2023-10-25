﻿using System.ComponentModel.DataAnnotations;

namespace Gamerize.DAL.Entities.Shop
{
    public class Feedback
    {
        int Id { get; set; }
        [MaxLength(30)]
        public string CustomerName { get; set; }
        public string Text { get; set; }
		public DateTime CreatedDate { get; set; } = DateTime.Now;
        public int Rate { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
