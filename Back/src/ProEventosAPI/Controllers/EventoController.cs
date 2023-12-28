using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventosAPI.Models;

namespace src.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private readonly IEnumerable<Evento> _eventos;

        public EventoController()
        {
            _eventos = new Evento[]
            {            
                new Evento() {
                    EventoId = 1,
                    Tema = "Angular 11 e .NET 5",
                    Local = "Belo Horizonte",
                    Lote = "1º Lote",
                    QtdPessoas = 250,
                    DataEvento = "20/11/2021",
                    ImagemURL = "foto.png"
                },
                new Evento() {
                    EventoId = 2,
                    Tema = "Angular 11 e Suas Novidades",
                    Local = "São Paulo",
                    Lote = "2º Lote",
                    QtdPessoas = 350,
                    DataEvento = "20/11/2021",
                    ImagemURL = "foto.png"
                }
            };
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _eventos;
        }

        [HttpGet("{id}")]

        public IEnumerable<Evento> GetById(int id)
        {
            return _eventos.Where(evento => evento.EventoId == id);
        }   

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return "Value Put";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return "Value Delete";
        }
    }
}
