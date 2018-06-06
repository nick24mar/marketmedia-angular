using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using marketmedia.Models;
using marketmedia.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace marketmedia.Controllers
{
    [Route("api/[controller]")]
    public class ItemsController : Controller
    {

      private readonly MarketMediaDbContext context;

      public ItemsController(MarketMediaDbContext context)
      {
          this.context = context;
      }

      // GET api/items
      [HttpGet]
      public async Task<IEnumerable<Item>> GetItems()
      {
          var items = await context.Items.ToListAsync();

          return items;
      }

      /* // GET api/items/5
      [HttpGet("{id}")]
      public string Get(int id)
      {
          return "value";
      }

      // POST api/items
      [HttpPost]
      public void Post([FromBody]string value)
      {
      }

      // PUT api/items/5
      [HttpPut("{id}")]
      public void Put(int id, [FromBody]string value)
      {
      }

      // DELETE api/items/5
      [HttpDelete("{id}")]
      public void Delete(int id)
      {
      } */
    }
}
