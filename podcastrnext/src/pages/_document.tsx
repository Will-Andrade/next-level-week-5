import Document, { Html, Head, Main, NextScript } from 'next/document';

//No Next é necessário usar Classes ao invés de Funções
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                </Head>
                <body>
                    {/* Onde fica meu App.tsx */}
                    <Main /> 
                    {/* Onde ficam os scripts necessários pro App funcionar */}
                    <NextScript />
                </body>
            </Html>
        );
    }
}
