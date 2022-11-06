import React from 'react'
import { Card } from './components/Card'

import supervisorIcon from './images/icon-supervisor.svg'
import teamBuilder from './images/icon-team-builder.svg'
import karmaIcon from './images/icon-karma.svg'
import calculatorIcon from './images/icon-calculator.svg'

function App() {
  return (
    <main className='fourC'>
      <div className='fourC__header'>
        <h1 className='fourC__header-title'>
          Reliable, efficient delivery
          <br />
          <span>Powered by Technology</span>
        </h1>
        <p className='fourC__desc'>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <section className='fourC__cards'>
        <Card
          title='Supervisor'
          description='Monitors activity to identify project roadblocks'
          icon={supervisorIcon}
          altIcon='Supervisor Icon'
        />
        <Card
          title='Team Builder'
          description='Scans our talent network to create the optimal team for your project'
          icon={teamBuilder}
          altIcon='Team Builder Icon'
        />
        <Card
          title='Karma'
          description='Regularly evaluates our talent to ensure quality'
          icon={karmaIcon}
          altIcon='Karma Icon'
        />
        <Card
          title='Calculator'
          description='Uses data from past projects to provide better delivery estimates'
          icon={calculatorIcon}
          altIcon='Calculator Icon'
        />
      </section>
    </main>
  )
}

export default App
