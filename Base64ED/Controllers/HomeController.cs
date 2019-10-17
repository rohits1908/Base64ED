using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Base64ED.Models;

namespace Base64ED.Controllers
{
    public class HomeController : Controller
    {
        //constructor overriding(dependency injection)
        private readonly IEncoderDecoder _converter;

        public HomeController(IEncoderDecoder converter){
            _converter = converter;

        }
        //Action methods
        public ActionResult Index()
        {
            return View();
        } 
        [HttpGet]
        public string Encoder(string input)
        {
            string Output = _converter.Encoder(input);
            return Output;
        }
        [HttpGet]
        public string Decoder(string input)
        {
            string Output = _converter.Decoder(input);
            return Output;
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
