# Proyecto Documentación IA²

Esta documentación esta hecha cong [Docusaurus 2](https://docusaurus.io/).

### Instalación

```
$ yarn
```

### Despliegue local

```
$ yarn start
```

Inicia el servidor de ¨desarrollo y abre una ventana del navegador. La mayoria de cambios de reflejan en vivo sin reinicio del servidor.

### Build

```
$ yarn build
```

Genera contenido estático en la carpeta `build` y puede ser servido por cualquier servicio de hosting.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

Si estas usando GitHub pages como hosting, este comando en una forma de construir y hacer push a `gh-pages`.

El contenido queda en [https://instituciones-abiertas.github.io/ia2-doc/](https://instituciones-abiertas.github.io/ia2-doc/)

### PDF

En una terminal (es necesario tener el servidor funcionando)
```
$ yarn start
```

En una segunda terminal (utiliza [mr-pdf](https://github.com/KohheePeace/mr-pdf) y lo hace scrapeando el servidor con puppeteer)
```
$ yarn create-pdf
```

Esto creara un archivo `manual.pdf` en la carpeta raíz.
