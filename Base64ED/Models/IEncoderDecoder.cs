using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Base64ED.Models{
    public interface IEncoderDecoder
    {
        Base64Converter Encoder(string Input);

        Base64Converter Decoder(string Input);

    }
}
