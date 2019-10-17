using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;

namespace Base64ED.Models
{
    public class Base64EncodingDecoding : IEncoderDecoder
    {
        public string Encoder(string Input)
    {
            byte[] toEncodeAsBytes = System.Text.ASCIIEncoding.ASCII.GetBytes(Input);
            string Output = System.Convert.ToBase64String(toEncodeAsBytes);
            return Output;
        }

        public string Decoder(string Input)
        {
            byte[] encodedDataAsBytes = System.Convert.FromBase64String(Input);
            string Output = System.Text.ASCIIEncoding.ASCII.GetString(encodedDataAsBytes);
            return Output;
        }

    }
}
