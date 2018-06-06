using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using marketmedia.Controllers.Resource;
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
        private readonly IMapper mapper;

        public ItemsController(MarketMediaDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        // GET api/items
        [HttpGet]
        public async Task<IEnumerable<ItemResource>> GetItems()
        {
            var items = await context.Items.Include(i => i.Category).ToListAsync();
            var mappedItems = mapper.Map<List<Item>, List<ItemResource>>(items);

            return mappedItems;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var item = await context.Items.Include(i => i.Category).SingleOrDefaultAsync(i => i.Id == id);

            if (item == null)
                return NotFound();

            var mappedItem = mapper.Map<Item, ItemResource>(item);

            return Ok(mappedItem);
        }

        [HttpPost]
        public async Task<IActionResult> CreateItem([FromBody] ItemResource itemResource)
        {

            if (!ModelState.IsValid)
              return BadRequest();

            var item = mapper.Map<ItemResource, Item>(itemResource);

            item.DatePosted = DateTime.Now;
            item.LastUpdated = DateTime.Now;

            context.Items.Add(item);
            await context.SaveChangesAsync();

            var mappedItem = mapper.Map<Item, ItemResource>(item);

            return Ok(mappedItem);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateItem([FromBody] ItemResource itemResource, int id)
        {
            if (!ModelState.IsValid)
              return BadRequest();

            var itemInDb = await context.Items
                .SingleOrDefaultAsync(i => i.Id == id);

            if (itemInDb == null)
              return NotFound();

            itemResource.DatePosted = itemInDb.DatePosted;
            itemInDb.LastUpdated = DateTime.Now;
            mapper.Map<ItemResource, Item>(itemResource, itemInDb);
            await context.SaveChangesAsync();

            var mappedItem = mapper.Map<Item, ItemResource>(itemInDb);

            return Ok(mappedItem);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var itemInDb = await context.Items.SingleOrDefaultAsync(i => i.Id == id);

            if (itemInDb == null)
              return NotFound();

            context.Remove(itemInDb);
            await context.SaveChangesAsync();

            return Ok();
        }
    }
}
