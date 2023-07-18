import { Techs } from './Stacks/Techs'

const Skills = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-2 mt-5 text-sm md:text-xl'>
        {Techs[0].first.map((tool) => (
          <div key={tool.name} className='flex items-center gap-1'>
            <span className='text-xl'>{tool.logo}</span>
            <span>{tool.name}</span>
          </div>
        ))}

        {Techs[0].second.map((tool) => (
          <div key={tool.name} className='flex items-center gap-1'>
            <span className='text-xl'>{tool.logo}</span>
            <span>{tool.name}</span>
          </div>
        ))}

        {Techs[0].third.map((tool) => (
          <div key={tool.name} className='flex items-center gap-1'>
            <span className='text-xl'>{tool.logo}</span>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills
