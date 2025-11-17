import React from 'react'
import Layout from '../components/Layout'
import { Section } from '../components/Sections'
import Button from '../components/Button'

const roles = [
  {
    title:'Quantum Propulsion Engineer',
    seniority:'Senior',
    salary:'$180k–$230k + equity',
    responsibilities:[
      'Design phase-coherent thrust cores and control loops.',
      'Run cryogenic tests and analyze vacuum interaction logs.',
      'Collaborate with avionics for closed-loop stability.',
    ],
    skills:['Superconducting systems','Quantum control','Numerical methods','Vacuum engineering']
  },
  {
    title:'Materials Scientist (Exotic Matter)',
    seniority:'Mid–Senior',
    salary:'$160k–$210k + equity',
    responsibilities:[
      'Develop metamaterials for photonic lattices and Casimir plates.',
      'Characterize cryo-ceramic behavior under cycling loads.',
      'Maintain contamination-controlled fabrication workflows.',
    ],
    skills:['Metamaterials','Thin-film deposition','Cryogenics','SEM/TEM']
  },
  {
    title:'Flight Systems Architect',
    seniority:'Senior–Staff',
    salary:'$190k–$250k + equity',
    responsibilities:[
      'Own guidance, navigation, and control architectures.',
      'Integrate chrono-aligned navigation with classical sensors.',
      'Design redundancy and fail-over paths.',
    ],
    skills:['GNC','Fault tolerance','Sensor fusion','Rust/C++']
  },
  {
    title:'Particle Simulation Developer',
    seniority:'Mid–Senior',
    salary:'$150k–$200k + equity',
    responsibilities:[
      'Build GPU-accelerated particle-field solvers.',
      'Develop visualization tools for ion topology.',
      'Automate sensitivity analysis pipelines.',
    ],
    skills:['CUDA/Metal','Differentiable physics','TypeScript/Python','Cloud HPC']
  },
  {
    title:'Ethics Compliance Observer',
    seniority:'Mid',
    salary:'$130k–$170k + equity',
    responsibilities:[
      'Run pre-test ethical reviews and impact assessments.',
      'Coordinate third-party auditors for high-energy tests.',
      'Maintain telemetry escrow and public disclosures.',
    ],
    skills:['Risk analysis','Policy','Data governance','Audit']
  },
  {
    title:'Chief Safety Strategist',
    seniority:'Principal',
    salary:'$210k–$280k + equity',
    responsibilities:[
      'Define system safety metrics and thresholds.',
      'Lead failure mode investigations and root-cause reviews.',
      'Own emergency response playbooks.',
    ],
    skills:['Systems safety','FMEA','Standards','Leadership']
  },
]

function Role({r}){
  return (
    <article className="p-6 rounded-xl bg-white/5 border border-white/10">
      <h3 className="font-semibold">{r.title}</h3>
      <p className="text-sm text-white/60">{r.seniority} • {r.salary}</p>
      <div className="mt-4">
        <h4 className="text-sm font-medium mb-1">Responsibilities</h4>
        <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
          {r.responsibilities.map((x,i)=>(<li key={i}>{x}</li>))}
        </ul>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-medium mb-1">Required skills</h4>
        <div className="flex flex-wrap gap-2">
          {r.skills.map((s,i)=>(<span key={i} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/15">{s}</span>))}
        </div>
      </div>
      <div className="mt-6">
        <Button size="md">Apply</Button>
      </div>
    </article>
  )
}

export default function Careers(){
  return (
    <Layout>
      <Section kicker="Careers" title="Join the team converting theory into flight">
        <div className="grid sm:grid-cols-2 gap-6">
          {roles.map((r,i)=> <Role key={i} r={r} />)}
        </div>
      </Section>
    </Layout>
  )
}
