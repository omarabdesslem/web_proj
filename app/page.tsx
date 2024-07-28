import Image from "next/image";

export default function CV() {
  return (
    <main className="flex flex-col items-center p-12 bg-gray-100 text-black">
      <header className="mb-12 text-center">
        {/* Circular Image */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/images/profile_picture.jpg"
            alt="Omar Abdesslem"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-300"
          />
          {/* Name and details */}
          <div className="mt-4">
            <h1 className="text-4xl font-bold">Omar Abdesslem</h1>
            <p className="text-lg">
              Software Engineer | Student at the University of Geneva & HKU
            </p>
            <p className="text-md">Hong Kong, SAR</p>
          </div>
        </div>
      </header>

      <nav className="mb-12">
        <ul className="flex space-x-4 justify-center">
          <li>
            <a href="#about" className="text-blue-500 hover:underline">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" className="text-blue-500 hover:underline">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#experiences" className="text-blue-500 hover:underline">
              EXPERIENCES
            </a>
          </li>
          <li>
            <a href="#education" className="text-blue-500 hover:underline">
              EDUCATION
            </a>
          </li>
          <li>
            <a href="#activities" className="text-blue-500 hover:underline">
              ACTIVITIES
            </a>
          </li>
        </ul>
      </nav>

      <section id="about" className="w-full max-w-4xl mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">ABOUT</h3>
          <p className="mb-4">
            Hi, I&#39;m Omar, I am an undergraduate student majoring in Computer
            Science at the
            <a
              href="https://www.unige.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-700 hover:underline mx-1"
            >
              University of Geneva
            </a>
            (UNIGE), Switzerland.
          </p>
          <p>
            I am passionate about leveraging technology to create innovative
            solutions that improve people&#39;s lives. My interests include
            cryptography, web development, and artificial intelligence. I am
            always eager to learn new technologies and explore new opportunities
            to apply my skills.
          </p>
        </div>
      </section>

      <section id="projects" className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold">
            Software Design | Requirements Engineering for EasyMath
          </h3>
          <p>
            As part of a Software Engineering project at The University of Hong
            Kong, EasyMath is a web-based application designed to enhance
            mathematics education at Kent Road Kindergarten. The project
            entailed designing a system where teachers use AI to create and
            manage online exercises, and students complete these exercises with
            their progress tracked and rewarded. Key deliverables included
            gathering and confirming requirements, creating detailed system
            diagrams, updating designs based on client feedback, and producing a
            prototype video demo.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Personal Website</h3>
          <p>
            Developed a personal website to showcase projects, experiences, and
            educational background. Implemented using Next.js and Tailwind CSS,
            focusing on responsive design and optimal performance.
          </p>
        </div>
      </section>

      <section id="experiences" className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-bold mb-4">WORK EXPERIENCES</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex items-start space-x-6">
          <div className="flex-shrink-0 w-32 h-32">
            <a
              href="https://slrlab.edu.hku.hk/about-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/hku_logo.png"
                alt="SRLAB Logo"
                width={150}
                height={150}
                className="rounded-full"
              />
            </a>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">
              Front-end Developer Intern
            </h3>
            <p>
              SLRLAB, Faculty of Education, The University of Hong Kong (HKU),
              Jan 2024 - Feb 2024, Hong Kong
            </p>
            <p>
              Assisted in designing and refining interactive web-based tools
              aimed at enhancing Cantonese and Mandarin language acquisition for
              specially-abled children. Focused on creating user-friendly
              interfaces that support diverse learning needs. Worked closely
              with a team of developers, educators, and language specialists,
              acquiring essential skills in software engineering principles,
              version control, collaborative development with Git, and CI/CD
              practices. Gained in-depth knowledge and practical experience with
              the Vue.js ecosystem, including tools like Vue Router and Vuex.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-6">
          <div className="flex-shrink-0 w-32 h-32">
            <a
              href="https://www.futurekids.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/futurekids_logo_1.png"
                alt="Futurekids Logo"
                width={150}
                height={150}
                className="rounded-full"
              />
            </a>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Programming Teacher</h3>
            <p>Futurekids, Sep 2022 - Aug 2023, Geneva, Switzerland</p>
            <p>
              Taught various programming languages and tools to children aged 5
              to 14, including Scratch for beginners, LEGO NXT for intermediate
              robotics projects, and Unreal Engine for advanced students.
              Enhanced communication skills, managed diverse classes, and
              collaborated with other educators to deliver engaging programming
              curricula.
            </p>
          </div>
        </div>
      </section>
      <section id="education" className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 flex items-start space-x-6">
          <div className="flex-shrink-0 w-32 h-32">
            <a
              href="https://www.unige.ch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/unige_logo.svg"
                alt="Université de Genève Logo"
                width={150}
                height={150}
                className="rounded-full"
              />
            </a>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">University of Geneva</h3>
            <p>Bachelor&#39;s degree, Computer Science</p>
            <p>Sep 2021 - June 2025</p>
            <p>
              Studied core subjects including Cryptography, Semantics, Networks
              along with Mathematics and Physics.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-6">
          <div className="flex-shrink-0 w-32 h-32">
            <a
              href="https://www.hku.hk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/hku_logo.png"
                alt="The University of Hong Kong Logo"
                width={150}
                height={150}
                className="rounded-full"
              />
            </a>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">
              The University of Hong Kong
            </h3>
            <p>Exchange Student - Faculty of Engineering</p>
            <p>Sep 2023 - June 2024</p>
            <p>
              Swiss-International Mobility program, engaged in advanced studies
              and practical applications in Software Engineering, Data Mining,
              AI, Networks & Computer Vision.
            </p>
          </div>
        </div>
      </section>

      <section id="activities" className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-bold mb-4">ACTIVITIES</h2>
        <div className="flex flex-wrap -mx-3">
          {/* Hackathon */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <a
              href="https://webfest.cern"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/cern-symbole.png"
                alt="CERN Collider"
                width={320}
                height={160}
                className="w-full h-auto rounded-lg"
              />
            </a>
            <h3 className="text-xl font-semibold mt-2">CERN Webfest 2024</h3>
            <p>{/* dsfkdslfjdslfjsdklfjdslkjf */}</p>
          </div>

          {/* 2nd to add kldjfkskfjsf */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <a
              href="https://www.instagram.com/hkufrancais/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/french_soc.webp"
                alt="Activity Logo"
                width={320}
                height={160}
                className="w-full h-auto rounded-lg"
              />
            </a>
            <h3 className="text-xl font-semibold mt-2">
              French Society, HKU, 2023-2024
            </h3>
            <p>{/* activity details klsdjfksd */}</p>
          </div>
        </div>
      </section>

      <footer className="w-full text-center mt-12">
        <p>Omar Abdesslem</p>
        <p>Built by hand using Typescript on React.Js</p>
        <p>Inspired by Creative CV from Template Flip</p>
        <p>MIT License, 2024</p>
      </footer>
    </main>
  );
}
