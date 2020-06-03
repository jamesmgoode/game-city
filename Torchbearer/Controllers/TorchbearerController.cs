using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Torchbearer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TorchbearerController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<string>> GetSkills()
        {
            var skills = new List<string> { "Alchemist", "Dungeoneer", "Fighter", "Peasant" };

            return await Task.FromResult(skills);
        }
    }
}
