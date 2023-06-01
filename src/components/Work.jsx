import Workitem from "./Workitem"

const data = [
  {
    year: 2020,
    title: 'Student',
    duration: '1 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit expedita vero molestiae et tempore quo officiis corporis corrupti ut ea excepturi omnis consequatur praesentium rerum, quod incidunt quisquam? Eius, recusandae, architecto voluptates ullam suscipit iste, reprehenderit est tempore amet ab laborum eum corporis cumque blanditiis. Exercitationem dignissimos ipsam esse sequi.' 
  },
  {
    year: 2021,
    title: 'Employee',
    duration: '2 years',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit expedita vero molestiae et tempore quo officiis corporis corrupti ut ea excepturi omnis consequatur praesentium rerum, quod incidunt quisquam? Eius, recusandae, architecto voluptates ullam suscipit iste, reprehenderit est tempore amet ab laborum eum corporis cumque blanditiis. Exercitationem dignissimos ipsam esse sequi.'
  },
  {
    year: 2023,
    title: 'Student',
    duration: '1 years',
    details: 'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit expedita vero molestiae et tempore quo officiis corporis corrupti ut ea excepturi omnis consequatur praesentium rerum, quod incidunt quisquam? Eius, recusandae, architecto voluptates ullam suscipit iste, reprehenderit est tempore amet ab laborum eum corporis cumque blanditiis. Exercitationem dignissimos ipsam esse sequi.'
  },
  {
    year: 2024,
    title: 'Developer',
    duration: '3 years',
    details: 'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit expedita vero molestiae et tempore quo officiis corporis corrupti ut ea excepturi omnis consequatur praesentium rerum, quod incidunt quisquam? Eius, recusandae, architecto voluptates ullam suscipit iste, reprehenderit est tempore amet ab laborum eum corporis cumque blanditiis. Exercitationem dignissimos ipsam esse sequi.'
  },
  {
    year: 2025,
    title: 'Coder',
    duration: '2 years',
    details: 'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit expedita vero molestiae et tempore quo officiis corporis corrupti ut ea excepturi omnis consequatur praesentium rerum, quod incidunt quisquam? Eius, recusandae, architecto voluptates ullam suscipit iste, reprehenderit est tempore amet ab laborum eum corporis cumque blanditiis. Exercitationem dignissimos ipsam esse sequi.'
  }
]

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item, idx) => (
            <Workitem 
              key={idx} 
              year={item.year} 
              title={item.title} 
              duration={item.duration} 
              details={item.details} 
            />
        ))}
    </div>
  )
}

export default Work