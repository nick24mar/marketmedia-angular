using System.Collections.Generic;
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
    public class CategoriesController : Controller
    {
        private readonly MarketMediaDbContext context;
        private readonly IMapper mapper;

        public CategoriesController(MarketMediaDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<CategoryResource>> GetCategories()
        {
            var categories = await context.Categories.ToListAsync();
            var mappedCategories = mapper.Map<List<Category>, List<CategoryResource>>(categories);

            return mappedCategories;
        }

    }
}
