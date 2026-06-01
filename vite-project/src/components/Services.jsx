import './Services.css'
import services_json from '../data/services.json'

function Services() {
  return (
    <section className="m-bot-md services" id="services" aria-label="Services">
      <h2 className="services-heading">What I can help with</h2>
      <div className="services-grid">
        {services_json.services.map(function (service) {
          return (
            <div className="service-card" key={service.title}>
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
