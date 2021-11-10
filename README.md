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

### Exportación a PDF

En una terminal (es necesario tener el servidor funcionando)
```
$ yarn start
```

En una segunda terminal (utiliza [mr-pdf](https://github.com/KohheePeace/mr-pdf) y lo hace scrapeando el servidor con puppeteer)
```
$ yarn create-pdf
```

Esto creara un archivo `manual.pdf` en la carpeta raíz.

#### Posibles Errores

> Si te da este error la exportación significa que no esta funcionando el servidor. (Corre *yarn start* previamente.)

```bash
$ mr-pdf --initialDocURLs='http://localhost:3000/docs/intro' --contentSelector='.markdown' --paginationSelector='.pagination-nav__item--next > a' --excludeSelectors='.margin-vert--xl a' --coverImage='http://localhost:3000/img/logo.png' --coverTitle='Documentación IA²' --outputPDFFilename='manual.pdf' --cssStyle='div.pdf-cover{background:#1f3366}'

Retrieving html from http://localhost:3000/docs/intro

Error: net::ERR_CONNECTION_REFUSED at http://localhost:3000/docs/intro
```

> Si te da este error la exportación significa que tenes un problema con la instalación de tu navegador y revisar


```bash
mr-pdf --initialDocURLs='http://localhost:3000/docs/intro' --contentSelector='.markdown' --paginationSelector='.pagination-nav__item--next > a' --excludeSelectors='.margin-vert--xl a' --coverImage='http://localhost:3000/img/logo.png' --coverTitle='Documentación IA²' --outputPDFFilename='manual.pdf' --cssStyle='div.pdf-cover{background:#1f3366}'
Error: Failed to launch the browser process!
[1110/134100.106022:FATAL:zygote_host_impl_linux.cc(116)] No usable sandbox! Update your kernel or see https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md for more information on developing with the SUID sandbox. If you want to live dangerously and need an immediate workaround, you can try using --no-sandbox.
#0 0x5620495d9219 base::debug::CollectStackTrace()
#1 0x56204953d363 base::debug::StackTrace::StackTrace()
#2 0x56204954f195 logging::LogMessage::~LogMessage()
#3 0x56204adcb00e service_manager::ZygoteHostImpl::Init()
#4 0x562049146f27 content::ContentMainRunnerImpl::Initialize()
#5 0x562049195afa service_manager::Main()
#6 0x562049145501 content::ContentMain()
#7 0x5620491948f5 headless::(anonymous namespace)::RunContentMain()
#8 0x56204919459d headless::HeadlessShellMain()
#9 0x562046d09aa7 ChromeMain
#10 0x7fa0043ee2e1 __libc_start_main
#11 0x562046d098ea _start

Received signal 6
#0 0x5620495d9219 base::debug::CollectStackTrace()
#1 0x56204953d363 base::debug::StackTrace::StackTrace()
#2 0x5620495d8d61 base::debug::(anonymous namespace)::StackDumpSignalHandler()
#3 0x7fa00a3780e0 <unknown>
#4 0x7fa004400fff gsignal
#5 0x7fa00440242a abort
#6 0x5620495d7b65 base::debug::BreakDebugger()
#7 0x56204954f634 logging::LogMessage::~LogMessage()
#8 0x56204adcb00e service_manager::ZygoteHostImpl::Init()
#9 0x562049146f27 content::ContentMainRunnerImpl::Initialize()
#10 0x562049195afa service_manager::Main()
#11 0x562049145501 content::ContentMain()
#12 0x5620491948f5 headless::(anonymous namespace)::RunContentMain()
#13 0x56204919459d headless::HeadlessShellMain()
#14 0x562046d09aa7 ChromeMain
#15 0x7fa0043ee2e1 __libc_start_main
#16 0x562046d098ea _start
  r8: 0000000000000000  r9: 00007ffe394c0230 r10: 0000000000000008 r11: 0000000000000246
 r12: 00007ffe394c14e8 r13: 00007ffe394c04c0 r14: 00007ffe394c14f0 r15: aaaaaaaaaaaaaaaa
  di: 0000000000000002  si: 00007ffe394c0230  bp: 00007ffe394c0470  bx: 0000000000000006
  dx: 0000000000000000  ax: 0000000000000000  cx: 00007fa004400fff  sp: 00007ffe394c02a8
  ip: 00007fa004400fff efl: 0000000000000246 cgf: 002b000000000033 erf: 0000000000000000
 trp: 0000000000000000 msk: 0000000000000000 cr2: 0000000000000000
[end of stack trace]
Calling _exit(1). Core file will not be generated.


TROUBLESHOOTING: https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md

    at onClose (/home/charlie/camba/juslab/ia2/ia2-doc/node_modules/puppeteer/lib/Launcher.js:750:14)
    at Interface.<anonymous> (/home/charlie/camba/juslab/ia2/ia2-doc/node_modules/puppeteer/lib/Launcher.js:739:50)
    at Interface.emit (events.js:388:22)
    at Interface.close (readline.js:429:8)
    at Socket.onend (readline.js:202:10)
    at Socket.emit (events.js:388:22)
    at endReadableNT (internal/streams/readable.js:1336:12)
    at processTicksAndRejections (internal/process/task_queues.js:82:21)
error Command failed with exit code 1.
```