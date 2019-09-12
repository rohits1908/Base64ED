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
        private readonly IEncoderDecoder _converter;
        public HomeController(IEncoderDecoder converter){
            _converter = converter;

        }
        public IActionResult Index()
        {
            Base64Converter obj=new Base64Converter();   
            return View(obj);
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
