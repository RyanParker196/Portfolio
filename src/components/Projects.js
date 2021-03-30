import React from 'react'
import Card from '../components/Card'
import haskell from '../assets/haskell.png'
import git from '../assets/git.jpg'
import logo from '../assets/logo512.png'
import c from '../assets/c.jpg'
import cpp from '../assets/cpp.jpg'
import agda from '../assets/agda.jpg'
import toxic from '../assets/toxic.png'
import otm from '../assets/otm.jpg'
import recipes from '../assets/recipes.png'

export default function Projects() {
    return (
        <div className="row Projects">
            <Card
                img={toxic}
                btn="Source code"
                link="https://colab.research.google.com/drive/1we6dRBx8AMg6BuVG-aBYlAFdud9InTV3?usp=sharing"
                title="Toxicity Detection with Deep Learning"
                text="Using Word2Vec to train a deep learning model to detect toxicity in Reddit comments" />
            <Card
                img={haskell}
                btn="Source code"
                link="https://github.com/RyanParker196/Automatic-Differentiation"
                title="Automatic Differentiation"
                text="Completed forward and reverse mode Automatic Differentiation
      implemented in Haskell" />
            <Card
                img={recipes}
                link="https://mapeck.w3.uvm.edu/cs205/"
                btn="View Website"
                title="Database Web Hosting"
                text="Fully functional Search/Add/Delete database hosted using Python with Flask and SQLite3"
                btn2="Source Code" 
                link2="https://github.com/RyanParker196/CS205_Final_Project/blob/master/backend.py"/>
            <Card
                img={agda}
                btn="Source code"
                link="https://github.com/RyanParker196/Agda-Proof-of-the-Chinese-Remainder-Theorem/blob/master/final.agda"
                title="Proof of the Chinese Remainder Theorem"
                text="Using Agda, an interactive theorem proving programing 
      language based off of Coq" />
            <Card
                img={otm}
                link="https://oaktreemanagement.com/"
                btn="View Website"
                title="Website Development"
                text="Created and manage Oak Tree Management's website" />
            <Card
                img={cpp}
                btn="Source code"
                link="https://github.com/RyanParker196/Zombie_Survival"
                title="Zombie Survival Game"
                text="Created a 2D zombie survival game using GLUT and OpenGL implemented
      in C++" />
            <Card
                img={git}
                btn="Source code"
                link="https://github.com/RyanParker196/Haskell-Compiler/blob/master/a3/Compiler.hs"
                title="X86 Assembly Compiler"
                text="Created a compiler in Haskell to convert a custom low level programming 
      language into X86-Assembly" />
            <Card
                img={c}
                btn="Source code"
                link="https://github.com/RyanParker196/201-HDD-Simulation/blob/master/HDDsimugrad.reparker.c"
                title="HDD Simulation"
                text="A simulation in C to compare the difference between various
      hard disk drive scheduling methods" />
            <Card
                img={logo}
                btn="Source code"
                link="https://github.com/RyanParker196/portfolio"
                title="React Portfolio"
                text="Teaching myself React to explore new technologies and increase my
      web development efficiency" />
            <Card
                img={c}
                btn="Source code"
                link="https://github.com/RyanParker196/PQ/blob/master/scheduler.reparker.c"
                title="Priority Queue Simulation"
                text="A simulation in C to compare the difference between various
      processor scheduling methods used by the CPU" />
        </div>
    );
}