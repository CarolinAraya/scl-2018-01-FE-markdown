# cmd-aLienks 
##extractor de links

#:alien:

[npm](https://www.npmjs.com/package/cmd-alienks)

Es una biblioteca que utiliza NodeJS para extraer los links de un archivo markdown (.md) y retornarlos en la consola como un arreglo objetos con cuatro propiedades; la url, el título, la ruta del archivo y la línea del texto donde se encuentra. También se pueden validar los enlaces mediante un comando específico.


### Pre-requisitos :computer:

_Primero debes tener instalado npm manera global, si ya lo tienes no es necesario volver a instalarlo_

```
$npm install -g

```

### Instalación de dependencias 📓

_Es necesario instalar de forma global las siguientes librerías con las que trabaja este markdown links extractor, para que esté disponible en cualquiera de tus proyectos y si ya lo tienes instalado en lugar de "-g" debes escribir "--save"_

```
$npm install marked -g
$npm install node-fetch -g

```


### Instalación aLienks :electric_plug:

_Ya puedes instalar esta librería_

```
$npm i cmd-alienks -g
```

_Para extraer los links de tu .md ejecuta el siguiente comando_

```
$cmd-alienks ./some/example.md  
```
_Te devolverá algo similar a esto: la ruta, línea en la que se encuentra y texto que lo acompaña_

```
./some/example.md:10 http://algo.com/2/3/ Link a algo
./some/example.md:15 https://otra-cosa.net/algun-doc.html algún doc
./some/example.md:40 http://google.com/ Google 

```

_Y si quieres validar los links_

```
$cmd-alienks ./some/example.md --validate
```

_Te devolverá lo mismo, más los status de las urls_ :japanese_ogre:

```
./some/example.md:10 http://algo.com/2/3/ Link a algo ok 200
./some/example.md:15 https://otra-cosa.net/algun-doc.html  algún doc fail 404
./some/example.md:40 http://google.com/  Google ok 301

```

<img src=" http://octodex.github.com/images/dojocat.jpg">

