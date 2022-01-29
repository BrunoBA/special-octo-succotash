# Listas e Estruturas de Repetição (iteração)

Listas também conhecidos como `arrays` são conjunto de alguma entidade. Por exemplo, um conjunto de nomes

```python
nomes = ["Bruna", "Vanessa", "Renata"]
```

A sua principal função é agrupar unidades de mesma semelhança, mas não é uma regra! Podemos conter arrays contendo vários e diferentes tipos.

```python
x = 1
coisas = ["Banana", 1.0, x, None, True]
```
- Para acesar tal posição do `array`, lembre-se de que a primeira posção é a posição de número `0` (posição também é conhecido como **index**). Ou seja, _"posição 0"_ é um sinônimo de _"index 0"_ 

```python
print(coisas[0])
print(coisas[3])
```
Output:
```
Banana
None
```
- Para obter o tamanho de um `array` basta executar a função `len(array)` passando o `array` como argumento

```python
array = ["Mulan", "Toy Story", "Luca"]
tamanho = len(array)

print(tamanho)
```
Output:
```
3
```
# Strings 

As strings também podes ser consideradas um array, uma vez que contém um conjunto de caracteres

```python
nome_dom_pedro_primeiro = "Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon"

print(nome_dom_pedro_primeiro[0])
print(len(nome_dom_pedro_primeiro))
```
Output:
````
P
146
````
Sendo a primeira letra do nome, e o tamanho do nome, respectivamente

# Métodos em uma String
Além de se comportar como uma lista de caracteres, a String em Python também contém alguns **métodos** especiais:

## 1. Converter em letras minuscúlas com `.lower()`
```python
print("Bruna".lower())
```
Output:
```
bruna
```
## 2. Converter em letras maiúsculas com `.upper()`
```python
print("Bruna".upper())
```
Output:
```
BRUNA
```
## 3. Remover caracteres especiais de quebra de linha (`\n`) com o `.strip()`
```python
print("\nBruna\n".strip())
```
Output:
```
Bruna
```
## 4. 'Quebrar'uma string em um `array` com o `.split(separador)`, onde o parâmetro do método é um separador (o caracter que vai ser usado para quebrar a string em um array)
```python
# Usando o espaço em branco " " para quebrara string
minha_lista = "casa suja chão sujo".split(" ") 
print(minha_lista)
```
Output:
```
['casa', 'suja', 'chão', 'sujo']
```
Output:
```py
# Usando o hífen para quebrar a string
minha_lista = "micro-organismo".split("-") 
print(minha_lista)
```
Output:
```
['micro', 'organismo']
```
## 5. Busca por uma string em outra string como `.find(parametro)`
```python
nome_dom_pedro_primeiro = "Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon"

index_da_nome_procurado = nome_dom_pedro_primeiro.find("Miguel")
print(index_da_nome_procurado)
```
Output:
```
65
```
```py
#Caso a string a ser procurada não existir, o find irá retornar -1 

index_da_nome_procurado = nome_dom_pedro_primeiro.find("Bruno")
print(index_da_nome_procurado)
```
Output:
```
-1
```
## 6. Replace `.replace(busca, novo_valor)`
```python
nome_dom_pedro_primeiro = "Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon"

index_da_nome_procurado = nome_dom_pedro_primeiro.replace("Pedro", "Peter")
print(index_da_nome_procurado)
```
Output:
```
Peter de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon
```


# range
Para criar listas númericas rapidamente podemos fazer uso do `range`
Sendo essa uma ferramenta muito poderoso e versátil.

Estrutura:

```python
range(stop):              #1
range(start, stop):       #2
range(start, stop, step): #3
```
Como pode ser observado o `range` pode ser utilizado de três diferentes formas, sendo elas respectivamente:

1. O range com apenas um parametro começa a partir do 0 e vai até um número imediantamente menor do que o `stop` **(limite excludente)**

2. O `start` marca o início do `array`e vai até um número imediantamente menor do que o `stop` **(limite excludente)**

3. O `start` marca o início do `array`e vai até um número imediantamente menor do que o `stop`, só que a contagem será feito de `step` e `step`

Exemplo de um `range` com três **parâmetros**

```python
for i in range(0, 10, 3):
    print(i)
```
Output:
```
0
3
6
9
```
Observe que a contagem foi feita _de 3 em 3_

# Laços

Também conhecido como **laços** ou **loopings** essas estruturas tem como principal função iterar em uma dada estrutura, sendo o mais famoso deles o ``for`` e o ``while``

- Normalmente o uso desse tipo de estrutura está associado aos ```Arrays``` ou _(qualquer outro tipo de estutura que represente um conjuto de unidades)_

# for
O for tem a seguinte sintaxe:

```python
for i in array:    
```
Onde:
- `i` representa a unidade dentre o conjunto (nesse caso o array)
- `array` vai representar o conjunto de elementos

Por exemplo:

```python
brand_of_cars = ["Audi", "Porshe", "BMW"]

for brand in brand_of_cars:
 print(brand)
```
Será impresso no console:
```
Audi
Porshe
BMW
```

# while
Tendo a mesma responsabilidade do For, o `while` apresenta uma estrutura um pouco diferente

```python
while(condition):
```
Onde:
- `condition` é um `Boolean`
- O bloco do `while` será executado sempre que `condition` for verdadeiro (sempre que for `True`)
- **Muito cuidado com loopings infinitos**, um while mal formado pode ter a sua condição verdadeira para sempre

Exemplo de um `while`:
```python
x = 1
while(x < 5):
	print(x)
	x = x + 1
```
Observe que **enquanto x for menor do que 5** o bloco será executado, e será adicionado a variável `x` mais uma unidade

Output:
```
1
2
3
4
```

O valor de 5 estará fora do bloco do `while` por não satisfazer mais a condição _(x < 5)_, já que, x não é menor do que 5, ele é igual.

# Curiosidades
É possível adicionar cores aos prints dos scripts em Python

```python
AZUL_MARINHO_PREFIXO = '\033[96m'
FIM_FORMATACAO = '\033[0m'

print(AZUL_MARINHO_PREFIXO + """
Me diz por que que o céu é azul
Explica a grande fúria do mundo
São meus filhos que tomam conta de mim
""" + FIM_FORMATACAO)
```
O prefixo `AZUL_MARINHO_PREFIXO` salva um código especial ASCII que induz o terminal a ativar uma cor no terminal. A outra variável (`FIM_FORMATACAO`) contém um caracter especial para parar a cor escolhida no prefixo.

Segue outros prefixos de formatação:

```py
ROXO         = '\033[95m'
AZUL_MARINHO = '\033[94m'
AZUL         = '\033[96m'
VERDE        = '\033[92m'
AMARELO      = '\033[93m'
VERMELHO     = '\033[91m'
NEGRITO      = '\033[1m'
SUBLINHADO   = '\033[4m'
```


# Resumo do dia


```python
amigos = [
"Aguiar", "Anna", "Bruna", "Bruno", "Carol", "Camila", "Felipe", "Gleice", "Lucas", "Tenorio", "Thereza", "Vanessa"
]
```
1. Usando o for, printe na tela o nome de cada um dos amigos
2. Printe no terminal o terceiro elemento da lista 
3. Faça um print de cada um dos nomes dos amigos em letra maiúscula 
4. Printe todos os amigos, exeto o da terceira posição
5. Printe apenas os que começam com a letra _"B"_
6. Printe apenas os nomes que tem um tamanho par
7. Usando o while, exiba os nomes dos amigos alternados, entre GRUPO 1 e GRUPO 2

EX:

```
AGUIAR É DO GRUPO 1
ANNA É DO GRUPO 2
BRUNA É DO GRUPO 1
BRUNO É DO GRUPO 2
...
```


![Kill them](https://media0.giphy.com/media/2fQbnnqxF3ZQs/giphy.gif?cid=790b76113eccdac76c001e951c0a5c6134dfe5e8ae0c8e0d&rid=giphy.gif&ct=g)

_Está vendo esse cara aqui olhando pra você?_

_Esse é o seu adversario mais difícil_
