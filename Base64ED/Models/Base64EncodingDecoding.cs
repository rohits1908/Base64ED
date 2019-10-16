using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;

namespace Base64ED.Models
{
    public class Base64EncodingDecoding : IEncoderDecoder
    {
        private string str;
        public void SetData(string s)
        {
            str = s;
        }
        public Base64Converter Encoder(string Input)
        {
            byte[] toEncodeAsBytes = System.Text.ASCIIEncoding.ASCII.GetBytes(Input);
           
            return new Base64Converter
            {
                Output = System.Convert.ToBase64String(toEncodeAsBytes)
            };
        }

        public Base64Converter Decoder(string Input)
        {
            byte[] encodedDataAsBytes = System.Convert.FromBase64String(Input);
            return new Base64Converter
            {
                Output = System.Text.ASCIIEncoding.ASCII.GetString(encodedDataAsBytes)
            };
        }

    }
}
