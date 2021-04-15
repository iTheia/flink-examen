import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
const index = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flink</title>
  </head>
  <body>
    <ul>
      <li><a href="/sismo.html">Visor del sismo</a></li>
      <li><a href="/api/v1/images">endpoint de imagenes</a></li>
    </ul>
  </body>
</html>
`;
const sismo = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>sismo</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css"
    />
    <script src="/socket.io/socket.io.js" defer></script>

    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      defer
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.1/knockout-latest.js"
      defer
      integrity="sha512-2AL/VEauKkZqQU9BHgnv48OhXcJPx9vdzxN1JrKDVc4FPU/MEE/BZ6d9l0mP7VmvLsjtYwqiYQpDskK9dG8KBA=="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
      defer
    ></script>
    <script src="./static/js/index.js" defer></script>
  </head>
  <body>
  por cuestiones de front solo dibuja hasta 300, el resto se pueden ver en la consola 
    <canvas id="myChart" style="height: 60vh"></canvas>
  </body>
</html>
`;
writeFileSync(join(__dirname, "../", "build/", "public/index.html"), index);
writeFileSync(join(__dirname, "../", "build/", "public/sismo.html"), sismo);
mkdirSync(join(__dirname, "../", "build/", "public/images"));
