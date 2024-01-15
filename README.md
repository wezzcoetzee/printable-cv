# Minimalist CV

Simple web app that renders minimalist CV with print-friendly layout.

## Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/ui, TailwindCss
- Auto generated Layout
- Responsive for different devices
- Optimized for Next.js and Vercel

## Local development

1. Install dependencies:

   ```bash
   bun install
   ```

2. Start the local Server:

   ```bash
   bun dev
   ```

3. Open the [Config file](./src/data/resume-data.tsx) and make changes

## Run with Docker

Build the container

```bash
docker compose build
```

Run the container

```bash
docker compose up -d
```

Stop the Container

```bash
docker compose down 
```

## References

[Original Repo](https://github.com/bartoszjarocki/cv)

## License

[MIT](https://choosealicense.com/licenses/mit/)
