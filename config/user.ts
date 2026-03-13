export interface User {
  name: string
  profession: string;
  age: number;
  cel: string;
  stack: string[];
  languages: string[];
  about: string;
  moreAbout: string;
  aboutWork: string;
  aboutArch: string;
  imageUrl: string;
  curriculum: string;
}

const ageCalc = (date: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const birthMonth = date.getMonth();
  const actualMonth = today.getMonth();

  if (actualMonth < birthMonth || (actualMonth === birthMonth && today.getDate() < date.getDate())) {
    age--;
  }

  return age;
};

const birthDate = new Date(2003, 11, 21);
const userAge = ageCalc(birthDate);

const userProps: User =
{
  name: 'Yonis Abdulkadir Osman',
  profession: 'Fullstack Developer',
  age: userAge,
  cel: '(252)61- 7869750',
  stack: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Vite', 'Git'],
  languages: ['English', 'Somali'],
  about: `Hello! I'm Yonis Abdulkadir Osman, a ${userAge}-year-old fullstack developer passionate about building production-ready web applications. Over the past few years, I've built enterprise-level platforms including e-commerce systems, hospital management systems, and digital wallets using modern technologies like React, Next.js, Node.js, and MongoDB.`,
  moreAbout: `Hello! I'm Yonis Abdulkadir Osman, a ${userAge}-year-old fullstack developer based in Somalia. I specialize in building scalable, production-oriented web applications using the MERN stack and modern frontend frameworks like Next.js.\n\nI have hands-on experience building complex systems such as an Advanced E-Commerce Platform with multi-role RBAC and B2B features, a Smart Hospital Management System for Somali healthcare providers, and a Digital Wallet application.\n\nI am committed to writing clean, maintainable code and delivering high-quality user experiences. I'm always eager to learn new technologies and take on challenging projects that push my skills forward.\n\nI am currently looking for new opportunities to apply my expertise in fullstack development and contribute to impactful projects.`,
  aboutWork: 'I have experience building production-ready applications from scratch, handling everything from database design and API development to responsive frontend interfaces. My projects demonstrate strong skills in authentication, role-based access control, payment integration, and modern UI/UX design patterns.',
  aboutArch: '',
  imageUrl: '/img/profile_yonis.jpg',
  curriculum: '',
}

export default userProps;
