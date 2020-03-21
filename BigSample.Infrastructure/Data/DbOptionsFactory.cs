using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace BigSample.Infrastructure.Data
{
    public static class DbOptionsFactory
    {
        static DbOptionsFactory()
        {
            var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build();
            var connectionString = config["Data:DefaultConnection:ConnectionString"];

            DbContextOptions = new DbContextOptionsBuilder<EfContext>()
                .UseSqlServer(connectionString)
                .Options;
        }

        public static DbContextOptions<EfContext> DbContextOptions { get; }

    }
}
