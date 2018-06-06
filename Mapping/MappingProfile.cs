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
            CreateMap<Item, ItemResource>();

            //From Resource to Domain
            CreateMap<ItemResource, Item>()
              .ForMember(i => i.Id, opt => opt.Ignore());
        }

    }
}
