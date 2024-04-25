# Doggo Dex

Doggo Dex is a web app with the goal of creating the playing card of your dog in the style of Pokemon, Magic, Yu Gi Oh ....

### The stack

* [![Next][Next.js]][Next-url]
* [![Typescript][Typescript.ts]][Typescrip-url]
* [![React][React.js]][React-url]
* [![Tailwind][Tailwind.com]][Tailwind-url]
* [![Nginx][Nginx]][Nginx-url]
* [![Docker][Docker]][Docker-url]
  

## Getting Started

### Prerequisite

In order to run this project, you must have **Docker** installed to run the local server to store the generated cards.

To run the web app enter one of the following command:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


To run the server storing the cards, go to the `nginx` folder and run : 
```bash
docker-compose up -d
```
You can now access the Nginx server at the following address [http://localhost:80](http://localhost:80)

## Next Steps (not in order of importance)

 - [ ] Run all of the project in a single Docker
 - [ ] Fully secure the Nginx environement
 - [ ] Add the backend of the app (send and fetch the cards)
 - [ ] Make sure everything is mobile friendly

For any suggestions feel free to open an issue



[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript.ts]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square
[Typescrip-url]: https://www.typescriptlang.org/
[Tailwind.com]: https://img.shields.io/badge/tailwindcss-0F172A?style=for-the-badge&logo=tailwindcss
[Tailwind-url]: https://tailwindcss.com/
[Nginx]: https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=nginx&logoColor=white
[Nginx-url]: https://www.nginx.com/
[Docker]: https://img.shields.io/badge/docker-lightblue?style=for-the-badge&logo=docker
[Docker-url]: https://www.docker.com/
