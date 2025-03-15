# Personal Portfolio

This is a personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Dark mode support
- Project showcase
- Skills section
- Contact form

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- React
- Framer Motion for animations

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To make the contact form work properly, create a `.env.local` file in the root directory with the following variables:

```bash
# Contact form (example using EmailJS)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

## Customization

### Modifying User Information

To customize the portfolio with your personal information:

1. Edit the user data in `src/data/user.ts` file to update your name, bio, skills, and social links
2. Modify the project information in `src/data/projects.ts`
3. Update your resume in the `public` folder
4. Replace profile images in the `public/images` directory

## License

This project is free to use, modify, and distribute without any specific license requirements. Feel free to customize it for your own portfolio.