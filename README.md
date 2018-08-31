# Markdown aLienks :alien:
##extractor de links

_Es una libreria de NodeJS que extrae los links de un archivo markdown (.md) y los retorna en la consola como un arreglo objetos con cuatro propiedades; la url, el título, la ruta del archivo y la línea del texto donde se encuentra. Y si se quiere se pueden validad los enlaces mediante un comando específico.

:alien:

### Pre-requisitos :computer:

_Debes tener instalado npm manera global_

```
$npm install npm@latest -g
$npm init

```

### Instalación aLienks :electric_plug:

_Ya viene con todas la dependencias requeridas_

```
$npm i cmd-alienks
```

_Luego ejecuta el siguiente comando_

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

_Y si quieres validar los links y que te devuelva el status:_

```
Smd-links <nombre/o-ruta-de/tu/archivo.md> --validate
```

_Te devolverá los mismo, más los status de las urls_ :japanese_ogre:

```
 { href: 'https://github.com/Laboratoria/scl-2018-01-FE-markdown',
    text: 'Laboratoria-Markdown',
    path: 'readme.md',
    line: 104,
    status: 200,
    success: 'OK' } ]
```

[<img src=" http://octodex.github.com/images/dojocat.jpg">]

