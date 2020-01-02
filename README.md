# API, REST e RESTFUL

API 

Acronimo de Aplication Programming Interface (Interface de Programação de Aplicações) é 
basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que 
outras aplicações utilizar as funcionalidades desta aplicação. 

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias. 
- Intermediador para troca de informaçẽos



REST 

Um acrônimo para representational state transfer (Transferencia de estado representativo)

Será feita a transferencia de dados de uma maneira simbolica, figurativa, representativa, de maneira didatica.

A transferncia de dados, geralmente usando o protocolo HTTP.
 
O REST, delimita algumas obrigações nessas transferências de dados. 

Resources seria então, uma entidade, um objeto.

### 6 Necessidades (constraints) para ser RESTful

- _Cliente-server_: Separação do cliente e do armazenamento de dados (servidor), desta forma,  poderemos ter uma 
portabilidade do nosso sistema, usando o React para web e React Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessarias para
o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuario deverá ser enviada
em todos as request, para saber se aquele usuario esta autenticado e apto a usar o serviços, e o servidor não pode 
lembrar que o cleinte foi autenticado na requisição anterior. Usamos por padrão tokens para a comunicação.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquele requisição, pode ou não ser
cacheada pelo cliente. 

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo
necessários para o servidor responder a requisição, ou quais outros camadas o servidor estará lidando, para que a 
requisição seja respondida.

- _Code on demand(optional)_ : Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e 
executar no cliente.  


RESTFUL

RESTFUL é a aplicação dos padrões REST 