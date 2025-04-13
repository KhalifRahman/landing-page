   <template>
    <div class="!scroll-smooth intersect:motion-preset-fade">
      <Herosection 
        title="Khalif Rahman"
        subtitle="Back-End Developer"
        ctaText="More about me"
        ctaLink="#about-me"
      />
  
      <Aboutme 
        id="about-me"
        name="Khalif Rahman"
        :image="khalifImage"
        description="I aspire to become a Back-End Developer and equip myself for the forthcoming 5.0 era characterized by AI and other advancements. Despite my limitations in programming languages, I am hopeful that PKL will serve as a valuable platform for my learning and enable me to contribute to companies throughout this journey."
        school="SMK Negeri 2 Yogyakarta | 2022 - Present"
        :details="[
          'Sistem Informasi Jaringan Aplikasi (SIJA) studied:',
          'Fundamental HTML, CSS, Python, JavaScript',
          'Mikrotik and Fiber Optic',
          'Network Security (VPN, Wireshark, Windows Hardening)',
          'Linux Ubuntu Server and Desktop',
          'Cloud Computing (Proxmox, AWS)',
          'Internet of Things (Blynk, Adafruit, IFTTT)'
        ]"
        :skills-description="[
          'HTML, CSS, Javascript',
          'Python Data Structures and Algorithms',
          'Object-Oriented Programming in Python',
          'MySQL Database, MariaDB (Fundamentals)',
          'Capable of collaborating within a team',
          'Can utilize either Indonesian or English.',
        ]"
        :schoolImage="smkImage"
        :skillsImage="skillImage"
      />
  
      <Project 
        :projectLink1="projectLink1"
        :projectImage1="projectImage1"
        :projectTitle1="projectTitle1"
        :projectDescription1="projectDescription1"
        :projectLink2="projectLink2"
        :projectImage2="projectImage2"
        :projectTitle2="projectTitle2"
        :projectDescription2="projectDescription2"
      />
  
      <Footer footerText="2025 | SMK N 2 YOGYAKARTA"/>
    </div>
  </template>
  
  <script setup>
  import Herosection from '~/components/Herosection.vue';
  import Aboutme from '~/components/Aboutme.vue';
  import Project from '~/components/Project.vue';
  import Footer from '~/components/Footer.vue';
  
  import khalifImage from '@/assets/khalif.jpg';
  import smkImage from '@/assets/smk.jpg';
  import jwtWorkflow from '@/assets/jwt-workflow.png';
  import databaseImage from '@/assets/database.png';
  import skillImage from '@/assets/skills.jpeg';
  
  const projectLink1 = "/casestudies";
  const projectImage1 = jwtWorkflow;
  const projectTitle1 = "Workout Tracker";
  const projectDescription1 = "Featuring login capabilities through JWT authentication and CRUD functionality.";
  
  const projectLink2 = "/casestudies";
  const projectImage2 = databaseImage;
  const projectTitle2 = "Database Backup Utility CLI";
  const projectDescription2 = "Command-line tool designed to facilitate the backup and restoration of databases.";
  </script>