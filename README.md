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

_Para extraer los links de tu .m ejecuta el siguiente comando_

```
$md-links <nombre/o-ruta-de/tu/archivo.md>  
```
_Te devolverá un arreglo con objetos similares a este_

```
 { href: 'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
    text: '¿Simplemente qué es Node.js? - IBM Developer Works, 2011',
    path: 'readme.md',
    line: 285 } ]

```

_Y si quieres validar los links_

```
$cmd-alienks <nombre/o-ruta-de/tu/archivo.md> --validate
```

_Te devolverá lo mismo, más los status de las urls_ :japanese_ogre:

```
 { href: 'https://github.com/Laboratoria/scl-2018-01-FE-markdown',
    text: 'Laboratoria-Markdown',
    path: 'readme.md',
    line: 104,
    status: 200,
    success: 'OK' } 

```

<img src=" http://octodex.github.com/images/dojocat.jpg">

