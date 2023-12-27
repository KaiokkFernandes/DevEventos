using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace src.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        

       
        public EventoController()
        {
            
        }

        [HttpGet]
        public String Get()
        {
            return "Value Get";
        }

        [HttpPut("{id}")]
        public String Put(int id)
        {
            return "Value Put";
        }

        [HttpDelete("{id}")]
        public String Delete(){
            return "Value Delete";
        }
       }
    }

    
