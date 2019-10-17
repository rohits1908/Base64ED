using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Base64ED.Models{
    public interface IEncoderDecoder
    {
        string Encoder(string Input);

        string Decoder(string Input);

    }
}
