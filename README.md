# fast_condom
1. Deseja-se um sistema para registrar entregas em um condomínio. 
2. O sistema deverá ser implementado em Java Console /ou/ Web Puro (apenas HTML+CSS+Javascript).Não utilizar frameworks ou outras dependências. A ideia é ter a base de código o mais simples possível. 
3. Não implementar um mecanismo de persistência de dados. O sistema deverá manter dados apenas em memória durante a execução. 
4. Não implementar um mecanismo de login. No entanto, deverá ser possível identificar/alterar o usuário/operador que está usando o sistema no momento. Para cada operador, deve-se saber o nome e as suas iniciais. 
5. O sistema deverá iniciar com alguns dados já preenchidos (em bom número e de boa qualidade), de forma a facilitar os testes.

DETALHES DO SISTEMA

1. O sistema deverá permitir escolher o operador/usuário atual.
2. O sistema deverá permitir incluir um novo operador (não é necessário implementar edição nem
exclusão).
3. O sistema deverá permitir registrar uma nova entrega, com data e hora, descrição e
apartamento de destino, bem como o operador que recebeu a entrega. Sugere-se gerar um ID
numérico sequencial a cada nova entrega.
4. O sistema deverá manter uma lista de moradores (nome, RG e nro do apartamento).
5. O sistema deverá permitir incluir um novo morador (não é necessário implementar edição nem
exclusão).
6. O sistema deverá permitir ao operador registrar a retirada de uma entrega por um morador.
Registrar data e hora, o morador que retirou, relacionando com qual entrega já registrada
anteriormente.
7. Deverá ser possível listar todos os moradores do prédio.
8. Deverá ser possível procurar entregas pela descrição. Listar todas as encontradas.
9. Deverá ser possível listar todas as entregas que ainda não foram retiradas.
10. Deverá ser possível gerar um relatório como o exemplo abaixo, entre uma data inicial e uma
data final escolhidas pelo operador (note que há entregas ainda não retiradas):
