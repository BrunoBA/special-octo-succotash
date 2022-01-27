## Curiosidades
É possível passar parametros para o script, antes nós executávamos um script em python simplesmente chamando o script

```
python nome_do_script.py
```

Quando adicionarmos a biblioteca _sys_ podemos obter parametros, por exemplo:

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
Hoje apredemos a usar o `if`, `elif` e o `else` e como são utilizados. Para condensar o nosso conhecimento observe o script abaixo


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
