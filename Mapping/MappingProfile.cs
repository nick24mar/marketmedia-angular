using AutoMapper;
using marketmedia.Controllers.Resource;
using marketmedia.Models;

namespace marketmedia.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // From Domain To Resource
            CreateMap<Item, ItemResource>()
              .ForMember(itemR => itemR.Category, opt => opt.MapFrom(item => item.Category.Name));

            //From Resource to Domain
            CreateMap<SaveItemResource, Item>()
              .ForMember(i => i.Id, opt => opt.Ignore());
        }

    }
}
