import './Services.css'
import SectionHeader from './SectionHeader'
import services_json from '../data/services.json'

function Services() {
  return (
    <section className="m-bot-md services reveal" id="services" aria-label="Services">
      <SectionHeader num="01" label="What I can help with" />
      <div className="services-list">
        {services_json.services.map(function (service) {
          return (
            <div className="service-item" key={service.title}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
