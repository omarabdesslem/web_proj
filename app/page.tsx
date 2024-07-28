import Image from "next/image";

export default function CV() {
  return (
    <main className="flex p-12 bg-gray-100 text-black">
      {/* Sidebar Navigation */}
      <nav
        className="flex flex-col items-start p-4 bg-white shadow-lg rounded-lg mr-12 w-40"
        style={{ height: "220px" }}
      >
        <ul className="space-y-4">
          <li>
            <a href="#about" className="text-blue-900 hover:underline">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" className="text-blue-900 hover:underline">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#experiences" className="text-blue-900 hover:underline">
              EXPERIENCES
            </a>
          </li>
          <li>
            <a href="#education" className="text-blue-900 hover:underline">
              EDUCATION
            </a>
          </li>
          <li>
            <a href="#activities" className="text-blue-900 hover:underline">
              ACTIVITIES
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex-1">
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

        <section id="about" className="w-full max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">ABOUT</h3>
            <p className="mb-4">
              Hi, I&#39;m Omar. I'm currently an undergraduate student studying
              Computer Science at
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
              always eager to learn new technologies and explore new
              opportunities to apply my skills.
            </p>
          </div>
        </section>

        <section id="projects" className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold">
              Software Design | Requirements Engineering for EasyMath
            </h3>
            <p>
              As part of a Software Engineering project at The University of
              Hong Kong, EasyMath is a web-based application designed to enhance
              mathematics education at Kent Road Kindergarten. The project
              entailed designing a system where teachers use AI to create and
              manage online exercises, and students complete these exercises
              with their progress tracked and rewarded. Key deliverables
              included gathering and confirming requirements, creating detailed
              system diagrams, updating designs based on client feedback, and
              producing a prototype video demo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Personal Website</h3>
            <p>
              Developed a personal website to showcase projects, experiences,
              and educational background. Implemented using Next.js and Tailwind
              CSS, focusing on responsive design and optimal performance.
            </p>
          </div>
        </section>

        <section id="experiences" className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">WORK EXPERIENCES</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold">HKU Summer Research Lab</h3>
            <p>
              As a Research Intern, I worked on a project focused on enhancing
              natural language processing techniques for better understanding of
              context in textual data.
            </p>
          </div>
        </section>

        <section id="education" className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold">University of Geneva</h3>
            <p>Bachelor of Science in Computer Science</p>
          </div>
        </section>

        <section id="activities" className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">ACTIVITIES</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold">Coding Club</h3>
            <p>
              Active member of the university's coding club, participating in
              hackathons and coding challenges.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
