## Estruturas condicionais
Para decifir o fluxo de um script podemos fazer o uso do `if` 
Por exemplo:

_"Se estiver com covid, favor ficar em casa em quarentena"_

```python
tem_covid = True

if (tem_covid):
    print("Por favor, fique em quarentena")
```
O print só vai ser executado caso a variável tem_covid tiver um valor True, caso o valor de tem_covid fosse False, ***o bloco dentro do _if_ não seria executado***

Se caso quisermos adicionar uma outra condição para o exemplo acima, podemos adicionar um `else` e ainda assim informar algo

```python
tem_covid = True

if (tem_covid):
    print("Por favor, fique em quarentena")
else:
    print("Tudo certo, pode ficar despreocupado")
```

## Conceitos importantes
- O parâmetro de uma função condicional é sempre um Boolean (um booleano), `True` ou `False`

```
if(aqui deve ter um booleano):
```
Por exemplo:

```python
if(2 > 1): #Aqui, o resultado da expressão 2 > 1 vai retornar um True, e consequentemente irá entrar no bloco do if
    print("Dois é maior do que um")
```

- E situações contendo `if`, `elif` o primeiro o primeiro bloco verdadeiro será o bloco executado

Por exemplo:

```python
numero = 20

if(numero == 20):                  #Verifica se o número é igual a 20
    print("Primeira condição")
elif(numero % 2 == 0):             #Verifica se o número é par
    print("Segunda condição")
elif(True):                        #True
    print("Terceira condição")
elif(numero > 19 and numero < 21): #Verifica se o número é maior do que 19 e menor do que 21
    print("Quarta condição")
```
Mesmo ***todas*** as condições sendo verdadeiras, será executado a primeira condição que foi dado como verdadeiro. O script irá "printar"

- E caso todas as opções forem falsas, só resta a ser executado o `else`
Por exemplo:

```python
numero = 1

if(numero == 20):                  #Verifica se o número é igual a 20 
    print("Primeira condição")
elif(numero % 2 == 0):             #Verifica se o número é par
    print("Segunda condição")
elif(False):                       #False
    print("Terceira condição")
elif(numero > 19 and numero < 21): #Verifica se o número é maior do que 19 e menor do que 21
    print("Quarta condição")
elif(numero == "banana"):          #Verifica se o numero é igual a uma string, "banana"
    print("Quinta condição")
else:
    print("Sexta condição")
```
Resultado:
```
Sexta condição
```

## Curiosidades
É possível passar parametros para o script! antes nós executávamos um script em python simplesmente chamando o script:

```
python nome_do_script.py
```

Mas podemos, passar um parametro para o script. Ao adicionarmos a biblioteca _sys_ podemos obter parametros, por exemplo:

```
python script_em_python.py UmParametro
```

Uma string com o valor de _"UmParametro"_ vai ser enviado para o script _'script_em_python.py'_, para obter o seu valor, basta:
```python
#conteúdo do script script_em_python.py
import sys                                #Estou importando uma biblioteca
parametro_enviado_ao_script = sys.argv[1] #não precisamos saber o que significa sys.argv[1] agora, é apenas uma curiosidade
print(parametro_enviado_ao_script)        #vai ser exibido o valor de "UmParametro"
```

## Resumo do dia
Hoje apredemos a usar o `if`, `elif` e o `else` e como são utilizados. Para condensar o nosso conhecimento observe o script abaixo:


```python

import sys
nome_do_comando = sys.argv[1]

if (nome_do_comando == "cd"):
    print("O comando '"+ nome_do_comando + "' muda de diretório, só preciso dizer para qual pasta devo ir cd Desktop ou cd C:\\")
elif(nome_do_comando == "dir"):
    print("O '" + nome_do_comando + "' mostra o conteúdo da pasta(diretório) atual")
else:
    print("Bruna ainda não conheceu esse comando '" + nome_do_comando+"'")
```
1. Primeiro observe o script, e veja se tem alguma coisa que acha interessante
2. Copie o script como `teste_do_if_else.py` e passe como parâmetro alguns comandos que você
já usou hoje
3. Crie mais uma opcão para o comando `cls`  
