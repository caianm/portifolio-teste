const http = require('http');
const httpProxy = require('http-proxy');

// Crie uma instância do proxy
const proxy = httpProxy.createProxyServer({});

// Crie um servidor HTTP que usa o proxy
const server = http.createServer((req, res) => {
    // Defina o endereço do servidor de destino
    const target = 'http://endereco_do_servidor_de_destino';

    // Redirecione a solicitação para o servidor de destino
    proxy.web(req, res, { target }, (err) => {
        console.error('Proxy error:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Something went wrong.');
    });
});

// Inicie o servidor na porta 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});