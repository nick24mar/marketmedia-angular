using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace marketmedia.Migrations
{
    public partial class SeedCategories : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO dbo.Categories (Name) VALUES ('Health & Beauty')");
            migrationBuilder.Sql("INSERT INTO dbo.Categories (Name) VALUES ('Electronice Devies')");
            migrationBuilder.Sql("INSERT INTO dbo.Categories (Name) VALUES ('Fashion Accessories')");
            migrationBuilder.Sql("INSERT INTO dbo.Categories (Name) VALUES ('Sports & Travel')");
            migrationBuilder.Sql("INSERT INTO dbo.Categories (Name) VALUES ('Automotive & Motorcycles')");
            migrationBuilder.Sql("INSERT INTO dbo.Categories (Name) VALUES ('Home & Lifestyle')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
