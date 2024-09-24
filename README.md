# CI-CD-Project
Este proyecto fue creado en Vite 5.4.1, al momento de descargar este proyecto, instale las dependencias con npm install, para ejecutar npm run dev, la aplicación corre en: http://localhost:5173/

![](/imagenes/image_01.png)

## CI-CD-Project

Es un proyecto de prueba que fue creado para demostrar mis conocimientos actuales en el tema de CI/CD, aunque este proyecto fue creado en Vite 5.4.1, no precisamente es el punto importante en este proyecto, es hacer mención a los procesos CI/CD en la tecnología NodeJS dentro de GitHub Actions, utilizando una Maquina virtual Linux en Digital Ocean para su despliegue.

Como se muestra en esta imagen, el despliegue a producción de la aplicación, claro que en este caso en cuestiones de práctica, se utiliza la dirección IP, ya que no se requiere un hosting o certificado.

![](/imagenes/image_02.png)

## Workflow:

En el repositorio de tu proyecto en GitHub, hay algo que se llama “Actions”, y ahí podrás crear el workflow requerido, según la tecnología usada, en mi caso NodeJS.

Este workflow, te dará los pasos básicos para que al momento de hacer un Push o Pull Request, este se active y se coordine con el “Runner” para la puesta en operación y despliegue a tu servidor de producción, en mi caso es una Maquina virtual Linux.

![](/imagenes/image_03.png)

## Runner:

De igual forma, en el repositorio de tu proyecto puedes crear el runner que requieras según el tipo de servidor o máquina virtual que hayas elegido, en mi caso es Linux, te proporciona los pasos necesarios para configurar el runner y se ponga en escucha cada vez que un workflow se active derivado según su configuración, y pueda pasar a producción, copiar el compilado del proyecto para su despliegue.

![](/imagenes/image_04.png)

## Actions:

Ya una vez configurado tu workflow y runner, cada vez que realices un push o pull request a la rama que hayas considerado, en mi caso la rama “main”, verás la lista de todos lo workflows, incluso el que se está ejecutando actualmente según los cambio realizados.

![](/imagenes/image_05.png)

Podrás ver el proceso de tu workflow dándole click al que ya está en ejecución o ver el status en cada uno de sus procesos que se están ejecutando.

![](/imagenes/image_06.png)

## Droplet:

En mi caso ocupo un droplet en Digital Ocean con una Maquina virtual Linux para el despliegue en producción.

![](/imagenes/image_07.png)

Maquina virtual Linux con el runner escuchando.

![](/imagenes/image_08.png)

Una vez configurado tu runner, se crea una carpeta donde se descarga el código de tu proyecto, para que lo configures a ejecución, en este caso ocupó nginx para poner en marcha el proyecto. 

![](/imagenes/image_09.png)

`© 2024 Copyright: GMayaS C:\>Desarrollo en Sistemas.`
